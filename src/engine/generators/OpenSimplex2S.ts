/**
 * OpenSimplex-inspired 3D noise adapted for browser terrain generation.
 * Credit: KdotJPG OpenSimplex2 reference implementation
 * https://github.com/KdotJPG/OpenSimplex2/blob/master/java/OpenSimplex2S.java#L541
 */

export class OpenSimplex2S {
    private readonly PRIME_X = 0x5205402b9270c86fn;
    private readonly PRIME_Y = 0x598cd327003817b5n;
    private readonly PRIME_Z = 0x5bcc226e9fa0bacbn;
    private readonly HASH_MULTIPLIER = 0x53a3f72deec546f5n;
    private readonly SEED_FLIP_3D = -0x52d547b2e96ed629n;

    private readonly ROOT3OVER3 = 0.577350269189626;
    private readonly RSQUARED_3D = 3 / 4;
    private readonly N_GRADS_3D = 256;
    private readonly NORMALIZER_3D = 0.2781926117527186;

    private readonly gradients3D: Float32Array;
    private readonly seed: bigint;

    constructor(seed = 0) {
        this.seed = BigInt(Math.trunc(seed));
        this.gradients3D = this.initGradients();
    }

    noise3ImproveXZ(x: number, y: number, z: number): number {
        const xz = x + z;
        const s2 = xz * -0.211324865405187;
        const yy = y * this.ROOT3OVER3;
        const xr = x + s2 + yy;
        const zr = z + s2 + yy;
        const yr = xz * -this.ROOT3OVER3 + yy;

        return this.noise3UnrotatedBase(this.seed, xr, yr, zr);
    }

    private initGradients(): Float32Array {
        const gradientTemplate = [
            2.22474487139, 2.22474487139, -1, 0, 2.22474487139, 2.22474487139,
            1, 0, 3.0862664687972017, 1.1721513422464978, 0, 0,
            1.1721513422464978, 3.0862664687972017, 0, 0, -2.22474487139,
            2.22474487139, -1, 0, -2.22474487139, 2.22474487139, 1, 0,
            -1.1721513422464978, 3.0862664687972017, 0, 0, -3.0862664687972017,
            1.1721513422464978, 0, 0, 2.22474487139, -2.22474487139, -1, 0,
            2.22474487139, -2.22474487139, 1, 0, 3.0862664687972017,
            -1.1721513422464978, 0, 0, 1.1721513422464978, -3.0862664687972017,
            0, 0, -2.22474487139, -2.22474487139, -1, 0, -2.22474487139,
            -2.22474487139, 1, 0, -1.1721513422464978, -3.0862664687972017, 0,
            0, -3.0862664687972017, -1.1721513422464978, 0, 0, 2.22474487139,
            -1, 2.22474487139, 0, 2.22474487139, 1, 2.22474487139, 0,
            -2.22474487139, -1, 2.22474487139, 0, -2.22474487139, 1,
            2.22474487139, 0, 2.22474487139, -1, -2.22474487139, 0,
            2.22474487139, 1, -2.22474487139, 0, -2.22474487139, -1,
            -2.22474487139, 0, -2.22474487139, 1, -2.22474487139, 0,
        ];

        for (let index = 0; index < gradientTemplate.length; index++) {
            gradientTemplate[index] /= this.NORMALIZER_3D;
        }

        const gradients = new Float32Array(this.N_GRADS_3D * 4);
        for (let index = 0; index < gradients.length; index++) {
            gradients[index] =
                gradientTemplate[index % gradientTemplate.length];
        }

        return gradients;
    }

    private fastFloor(value: number): number {
        return Math.floor(value);
    }

    private gradient(
        seed: bigint,
        xPrime: bigint,
        yPrime: bigint,
        zPrime: bigint,
        dx: number,
        dy: number,
        dz: number,
    ): number {
        const hash = BigInt.asUintN(
            64,
            (seed ^ xPrime ^ yPrime ^ zPrime) * this.HASH_MULTIPLIER,
        );
        const gradientIndex =
            Number(BigInt.asUintN(32, hash)) & ((this.N_GRADS_3D - 1) << 2);

        return (
            this.gradients3D[gradientIndex] * dx +
            this.gradients3D[gradientIndex + 1] * dy +
            this.gradients3D[gradientIndex + 2] * dz
        );
    }

    private noise3UnrotatedBase(
        seed: bigint,
        xr: number,
        yr: number,
        zr: number,
    ): number {
        const xBase = this.fastFloor(xr);
        const yBase = this.fastFloor(yr);
        const zBase = this.fastFloor(zr);

        const xi = xr - xBase;
        const yi = yr - yBase;
        const zi = zr - zBase;

        const xPrime = BigInt(xBase) * this.PRIME_X;
        const yPrime = BigInt(yBase) * this.PRIME_Y;
        const zPrime = BigInt(zBase) * this.PRIME_Z;
        const flippedSeed = seed ^ this.SEED_FLIP_3D;

        const xMask = xi > 0.5 ? 1 : -1;
        const yMask = yi > 0.5 ? 1 : -1;
        const zMask = zi > 0.5 ? 1 : -1;

        const x0 = xi - (xMask === 1 ? 0.5 : -0.5);
        const y0 = yi - (yMask === 1 ? 0.5 : -0.5);
        const z0 = zi - (zMask === 1 ? 0.5 : -0.5);
        const attenuation0 = this.RSQUARED_3D - x0 * x0 - y0 * y0 - z0 * z0;

        let value =
            attenuation0 > 0
                ? Math.pow(attenuation0, 4) *
                  this.gradient(seed, xPrime, yPrime, zPrime, x0, y0, z0)
                : 0;

        const x1 = xi - 0.5;
        const y1 = yi - 0.5;
        const z1 = zi - 0.5;
        const attenuation1 = this.RSQUARED_3D - x1 * x1 - y1 * y1 - z1 * z1;

        value +=
            attenuation1 > 0
                ? Math.pow(attenuation1, 4) *
                  this.gradient(
                      flippedSeed,
                      xPrime + this.PRIME_X,
                      yPrime + this.PRIME_Y,
                      zPrime + this.PRIME_Z,
                      x1,
                      y1,
                      z1,
                  )
                : 0;

        return value;
    }
}
