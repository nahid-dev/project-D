
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Donor
 * 
 */
export type Donor = $Result.DefaultSelection<Prisma.$DonorPayload>
/**
 * Model PhoneOTP
 * 
 */
export type PhoneOTP = $Result.DefaultSelection<Prisma.$PhoneOTPPayload>
/**
 * Model BloodRequest
 * 
 */
export type BloodRequest = $Result.DefaultSelection<Prisma.$BloodRequestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Donors
 * const donors = await prisma.donor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Donors
   * const donors = await prisma.donor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.donor`: Exposes CRUD operations for the **Donor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donors
    * const donors = await prisma.donor.findMany()
    * ```
    */
  get donor(): Prisma.DonorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phoneOTP`: Exposes CRUD operations for the **PhoneOTP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhoneOTPS
    * const phoneOTPS = await prisma.phoneOTP.findMany()
    * ```
    */
  get phoneOTP(): Prisma.PhoneOTPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloodRequest`: Exposes CRUD operations for the **BloodRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BloodRequests
    * const bloodRequests = await prisma.bloodRequest.findMany()
    * ```
    */
  get bloodRequest(): Prisma.BloodRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Donor: 'Donor',
    PhoneOTP: 'PhoneOTP',
    BloodRequest: 'BloodRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "donor" | "phoneOTP" | "bloodRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Donor: {
        payload: Prisma.$DonorPayload<ExtArgs>
        fields: Prisma.DonorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          findFirst: {
            args: Prisma.DonorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          findMany: {
            args: Prisma.DonorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          create: {
            args: Prisma.DonorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          createMany: {
            args: Prisma.DonorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          delete: {
            args: Prisma.DonorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          update: {
            args: Prisma.DonorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          deleteMany: {
            args: Prisma.DonorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>[]
          }
          upsert: {
            args: Prisma.DonorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonorPayload>
          }
          aggregate: {
            args: Prisma.DonorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonor>
          }
          groupBy: {
            args: Prisma.DonorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonorCountArgs<ExtArgs>
            result: $Utils.Optional<DonorCountAggregateOutputType> | number
          }
        }
      }
      PhoneOTP: {
        payload: Prisma.$PhoneOTPPayload<ExtArgs>
        fields: Prisma.PhoneOTPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneOTPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOTPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneOTPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOTPPayload>
          }
          findFirst: {
            args: Prisma.PhoneOTPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOTPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneOTPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOTPPayload>
          }
          findMany: {
            args: Prisma.PhoneOTPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOTPPayload>[]
          }
          create: {
            args: Prisma.PhoneOTPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOTPPayload>
          }
          createMany: {
            args: Prisma.PhoneOTPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneOTPCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOTPPayload>[]
          }
          delete: {
            args: Prisma.PhoneOTPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOTPPayload>
          }
          update: {
            args: Prisma.PhoneOTPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOTPPayload>
          }
          deleteMany: {
            args: Prisma.PhoneOTPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneOTPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhoneOTPUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOTPPayload>[]
          }
          upsert: {
            args: Prisma.PhoneOTPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneOTPPayload>
          }
          aggregate: {
            args: Prisma.PhoneOTPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoneOTP>
          }
          groupBy: {
            args: Prisma.PhoneOTPGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneOTPGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneOTPCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneOTPCountAggregateOutputType> | number
          }
        }
      }
      BloodRequest: {
        payload: Prisma.$BloodRequestPayload<ExtArgs>
        fields: Prisma.BloodRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BloodRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BloodRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          findFirst: {
            args: Prisma.BloodRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BloodRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          findMany: {
            args: Prisma.BloodRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          create: {
            args: Prisma.BloodRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          createMany: {
            args: Prisma.BloodRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BloodRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          delete: {
            args: Prisma.BloodRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          update: {
            args: Prisma.BloodRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          deleteMany: {
            args: Prisma.BloodRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BloodRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BloodRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>[]
          }
          upsert: {
            args: Prisma.BloodRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloodRequestPayload>
          }
          aggregate: {
            args: Prisma.BloodRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloodRequest>
          }
          groupBy: {
            args: Prisma.BloodRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloodRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.BloodRequestCountArgs<ExtArgs>
            result: $Utils.Optional<BloodRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    donor?: DonorOmit
    phoneOTP?: PhoneOTPOmit
    bloodRequest?: BloodRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Donor
   */

  export type AggregateDonor = {
    _count: DonorCountAggregateOutputType | null
    _avg: DonorAvgAggregateOutputType | null
    _sum: DonorSumAggregateOutputType | null
    _min: DonorMinAggregateOutputType | null
    _max: DonorMaxAggregateOutputType | null
  }

  export type DonorAvgAggregateOutputType = {
    locationLat: number | null
    locationLng: number | null
  }

  export type DonorSumAggregateOutputType = {
    locationLat: number | null
    locationLng: number | null
  }

  export type DonorMinAggregateOutputType = {
    id: string | null
    phone: string | null
    password: string | null
    fullName: string | null
    dob: Date | null
    gender: string | null
    bloodType: string | null
    city: string | null
    email: string | null
    healthConditions: string | null
    locationLat: number | null
    locationLng: number | null
    locationAddress: string | null
    lastDonationDate: Date | null
    isAvailable: boolean | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonorMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    password: string | null
    fullName: string | null
    dob: Date | null
    gender: string | null
    bloodType: string | null
    city: string | null
    email: string | null
    healthConditions: string | null
    locationLat: number | null
    locationLng: number | null
    locationAddress: string | null
    lastDonationDate: Date | null
    isAvailable: boolean | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DonorCountAggregateOutputType = {
    id: number
    phone: number
    password: number
    fullName: number
    dob: number
    gender: number
    bloodType: number
    city: number
    email: number
    healthConditions: number
    locationLat: number
    locationLng: number
    locationAddress: number
    lastDonationDate: number
    isAvailable: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DonorAvgAggregateInputType = {
    locationLat?: true
    locationLng?: true
  }

  export type DonorSumAggregateInputType = {
    locationLat?: true
    locationLng?: true
  }

  export type DonorMinAggregateInputType = {
    id?: true
    phone?: true
    password?: true
    fullName?: true
    dob?: true
    gender?: true
    bloodType?: true
    city?: true
    email?: true
    healthConditions?: true
    locationLat?: true
    locationLng?: true
    locationAddress?: true
    lastDonationDate?: true
    isAvailable?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonorMaxAggregateInputType = {
    id?: true
    phone?: true
    password?: true
    fullName?: true
    dob?: true
    gender?: true
    bloodType?: true
    city?: true
    email?: true
    healthConditions?: true
    locationLat?: true
    locationLng?: true
    locationAddress?: true
    lastDonationDate?: true
    isAvailable?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DonorCountAggregateInputType = {
    id?: true
    phone?: true
    password?: true
    fullName?: true
    dob?: true
    gender?: true
    bloodType?: true
    city?: true
    email?: true
    healthConditions?: true
    locationLat?: true
    locationLng?: true
    locationAddress?: true
    lastDonationDate?: true
    isAvailable?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DonorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donor to aggregate.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donors
    **/
    _count?: true | DonorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonorMaxAggregateInputType
  }

  export type GetDonorAggregateType<T extends DonorAggregateArgs> = {
        [P in keyof T & keyof AggregateDonor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonor[P]>
      : GetScalarType<T[P], AggregateDonor[P]>
  }




  export type DonorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonorWhereInput
    orderBy?: DonorOrderByWithAggregationInput | DonorOrderByWithAggregationInput[]
    by: DonorScalarFieldEnum[] | DonorScalarFieldEnum
    having?: DonorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonorCountAggregateInputType | true
    _avg?: DonorAvgAggregateInputType
    _sum?: DonorSumAggregateInputType
    _min?: DonorMinAggregateInputType
    _max?: DonorMaxAggregateInputType
  }

  export type DonorGroupByOutputType = {
    id: string
    phone: string
    password: string | null
    fullName: string
    dob: Date | null
    gender: string | null
    bloodType: string
    city: string | null
    email: string | null
    healthConditions: string | null
    locationLat: number | null
    locationLng: number | null
    locationAddress: string | null
    lastDonationDate: Date | null
    isAvailable: boolean
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: DonorCountAggregateOutputType | null
    _avg: DonorAvgAggregateOutputType | null
    _sum: DonorSumAggregateOutputType | null
    _min: DonorMinAggregateOutputType | null
    _max: DonorMaxAggregateOutputType | null
  }

  type GetDonorGroupByPayload<T extends DonorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonorGroupByOutputType[P]>
            : GetScalarType<T[P], DonorGroupByOutputType[P]>
        }
      >
    >


  export type DonorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    password?: boolean
    fullName?: boolean
    dob?: boolean
    gender?: boolean
    bloodType?: boolean
    city?: boolean
    email?: boolean
    healthConditions?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationAddress?: boolean
    lastDonationDate?: boolean
    isAvailable?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    password?: boolean
    fullName?: boolean
    dob?: boolean
    gender?: boolean
    bloodType?: boolean
    city?: boolean
    email?: boolean
    healthConditions?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationAddress?: boolean
    lastDonationDate?: boolean
    isAvailable?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    password?: boolean
    fullName?: boolean
    dob?: boolean
    gender?: boolean
    bloodType?: boolean
    city?: boolean
    email?: boolean
    healthConditions?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationAddress?: boolean
    lastDonationDate?: boolean
    isAvailable?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["donor"]>

  export type DonorSelectScalar = {
    id?: boolean
    phone?: boolean
    password?: boolean
    fullName?: boolean
    dob?: boolean
    gender?: boolean
    bloodType?: boolean
    city?: boolean
    email?: boolean
    healthConditions?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationAddress?: boolean
    lastDonationDate?: boolean
    isAvailable?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DonorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "password" | "fullName" | "dob" | "gender" | "bloodType" | "city" | "email" | "healthConditions" | "locationLat" | "locationLng" | "locationAddress" | "lastDonationDate" | "isAvailable" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["donor"]>

  export type $DonorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      password: string | null
      fullName: string
      dob: Date | null
      gender: string | null
      bloodType: string
      city: string | null
      email: string | null
      healthConditions: string | null
      locationLat: number | null
      locationLng: number | null
      locationAddress: string | null
      lastDonationDate: Date | null
      isAvailable: boolean
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["donor"]>
    composites: {}
  }

  type DonorGetPayload<S extends boolean | null | undefined | DonorDefaultArgs> = $Result.GetResult<Prisma.$DonorPayload, S>

  type DonorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonorCountAggregateInputType | true
    }

  export interface DonorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donor'], meta: { name: 'Donor' } }
    /**
     * Find zero or one Donor that matches the filter.
     * @param {DonorFindUniqueArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonorFindUniqueArgs>(args: SelectSubset<T, DonorFindUniqueArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonorFindUniqueOrThrowArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonorFindUniqueOrThrowArgs>(args: SelectSubset<T, DonorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindFirstArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonorFindFirstArgs>(args?: SelectSubset<T, DonorFindFirstArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindFirstOrThrowArgs} args - Arguments to find a Donor
     * @example
     * // Get one Donor
     * const donor = await prisma.donor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonorFindFirstOrThrowArgs>(args?: SelectSubset<T, DonorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donors
     * const donors = await prisma.donor.findMany()
     * 
     * // Get first 10 Donors
     * const donors = await prisma.donor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donorWithIdOnly = await prisma.donor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonorFindManyArgs>(args?: SelectSubset<T, DonorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donor.
     * @param {DonorCreateArgs} args - Arguments to create a Donor.
     * @example
     * // Create one Donor
     * const Donor = await prisma.donor.create({
     *   data: {
     *     // ... data to create a Donor
     *   }
     * })
     * 
     */
    create<T extends DonorCreateArgs>(args: SelectSubset<T, DonorCreateArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donors.
     * @param {DonorCreateManyArgs} args - Arguments to create many Donors.
     * @example
     * // Create many Donors
     * const donor = await prisma.donor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonorCreateManyArgs>(args?: SelectSubset<T, DonorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donors and returns the data saved in the database.
     * @param {DonorCreateManyAndReturnArgs} args - Arguments to create many Donors.
     * @example
     * // Create many Donors
     * const donor = await prisma.donor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donors and only return the `id`
     * const donorWithIdOnly = await prisma.donor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonorCreateManyAndReturnArgs>(args?: SelectSubset<T, DonorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donor.
     * @param {DonorDeleteArgs} args - Arguments to delete one Donor.
     * @example
     * // Delete one Donor
     * const Donor = await prisma.donor.delete({
     *   where: {
     *     // ... filter to delete one Donor
     *   }
     * })
     * 
     */
    delete<T extends DonorDeleteArgs>(args: SelectSubset<T, DonorDeleteArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donor.
     * @param {DonorUpdateArgs} args - Arguments to update one Donor.
     * @example
     * // Update one Donor
     * const donor = await prisma.donor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonorUpdateArgs>(args: SelectSubset<T, DonorUpdateArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donors.
     * @param {DonorDeleteManyArgs} args - Arguments to filter Donors to delete.
     * @example
     * // Delete a few Donors
     * const { count } = await prisma.donor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonorDeleteManyArgs>(args?: SelectSubset<T, DonorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donors
     * const donor = await prisma.donor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonorUpdateManyArgs>(args: SelectSubset<T, DonorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donors and returns the data updated in the database.
     * @param {DonorUpdateManyAndReturnArgs} args - Arguments to update many Donors.
     * @example
     * // Update many Donors
     * const donor = await prisma.donor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donors and only return the `id`
     * const donorWithIdOnly = await prisma.donor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonorUpdateManyAndReturnArgs>(args: SelectSubset<T, DonorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donor.
     * @param {DonorUpsertArgs} args - Arguments to update or create a Donor.
     * @example
     * // Update or create a Donor
     * const donor = await prisma.donor.upsert({
     *   create: {
     *     // ... data to create a Donor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donor we want to update
     *   }
     * })
     */
    upsert<T extends DonorUpsertArgs>(args: SelectSubset<T, DonorUpsertArgs<ExtArgs>>): Prisma__DonorClient<$Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorCountArgs} args - Arguments to filter Donors to count.
     * @example
     * // Count the number of Donors
     * const count = await prisma.donor.count({
     *   where: {
     *     // ... the filter for the Donors we want to count
     *   }
     * })
    **/
    count<T extends DonorCountArgs>(
      args?: Subset<T, DonorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonorAggregateArgs>(args: Subset<T, DonorAggregateArgs>): Prisma.PrismaPromise<GetDonorAggregateType<T>>

    /**
     * Group by Donor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonorGroupByArgs['orderBy'] }
        : { orderBy?: DonorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donor model
   */
  readonly fields: DonorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Donor model
   */
  interface DonorFieldRefs {
    readonly id: FieldRef<"Donor", 'String'>
    readonly phone: FieldRef<"Donor", 'String'>
    readonly password: FieldRef<"Donor", 'String'>
    readonly fullName: FieldRef<"Donor", 'String'>
    readonly dob: FieldRef<"Donor", 'DateTime'>
    readonly gender: FieldRef<"Donor", 'String'>
    readonly bloodType: FieldRef<"Donor", 'String'>
    readonly city: FieldRef<"Donor", 'String'>
    readonly email: FieldRef<"Donor", 'String'>
    readonly healthConditions: FieldRef<"Donor", 'String'>
    readonly locationLat: FieldRef<"Donor", 'Float'>
    readonly locationLng: FieldRef<"Donor", 'Float'>
    readonly locationAddress: FieldRef<"Donor", 'String'>
    readonly lastDonationDate: FieldRef<"Donor", 'DateTime'>
    readonly isAvailable: FieldRef<"Donor", 'Boolean'>
    readonly isVerified: FieldRef<"Donor", 'Boolean'>
    readonly createdAt: FieldRef<"Donor", 'DateTime'>
    readonly updatedAt: FieldRef<"Donor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Donor findUnique
   */
  export type DonorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor findUniqueOrThrow
   */
  export type DonorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor findFirst
   */
  export type DonorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donors.
     */
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor findFirstOrThrow
   */
  export type DonorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Filter, which Donor to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donors.
     */
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor findMany
   */
  export type DonorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Filter, which Donors to fetch.
     */
    where?: DonorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donors to fetch.
     */
    orderBy?: DonorOrderByWithRelationInput | DonorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donors.
     */
    cursor?: DonorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donors.
     */
    distinct?: DonorScalarFieldEnum | DonorScalarFieldEnum[]
  }

  /**
   * Donor create
   */
  export type DonorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * The data needed to create a Donor.
     */
    data: XOR<DonorCreateInput, DonorUncheckedCreateInput>
  }

  /**
   * Donor createMany
   */
  export type DonorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donors.
     */
    data: DonorCreateManyInput | DonorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donor createManyAndReturn
   */
  export type DonorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * The data used to create many Donors.
     */
    data: DonorCreateManyInput | DonorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donor update
   */
  export type DonorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * The data needed to update a Donor.
     */
    data: XOR<DonorUpdateInput, DonorUncheckedUpdateInput>
    /**
     * Choose, which Donor to update.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor updateMany
   */
  export type DonorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donors.
     */
    data: XOR<DonorUpdateManyMutationInput, DonorUncheckedUpdateManyInput>
    /**
     * Filter which Donors to update
     */
    where?: DonorWhereInput
    /**
     * Limit how many Donors to update.
     */
    limit?: number
  }

  /**
   * Donor updateManyAndReturn
   */
  export type DonorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * The data used to update Donors.
     */
    data: XOR<DonorUpdateManyMutationInput, DonorUncheckedUpdateManyInput>
    /**
     * Filter which Donors to update
     */
    where?: DonorWhereInput
    /**
     * Limit how many Donors to update.
     */
    limit?: number
  }

  /**
   * Donor upsert
   */
  export type DonorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * The filter to search for the Donor to update in case it exists.
     */
    where: DonorWhereUniqueInput
    /**
     * In case the Donor found by the `where` argument doesn't exist, create a new Donor with this data.
     */
    create: XOR<DonorCreateInput, DonorUncheckedCreateInput>
    /**
     * In case the Donor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonorUpdateInput, DonorUncheckedUpdateInput>
  }

  /**
   * Donor delete
   */
  export type DonorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
    /**
     * Filter which Donor to delete.
     */
    where: DonorWhereUniqueInput
  }

  /**
   * Donor deleteMany
   */
  export type DonorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donors to delete
     */
    where?: DonorWhereInput
    /**
     * Limit how many Donors to delete.
     */
    limit?: number
  }

  /**
   * Donor without action
   */
  export type DonorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donor
     */
    select?: DonorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donor
     */
    omit?: DonorOmit<ExtArgs> | null
  }


  /**
   * Model PhoneOTP
   */

  export type AggregatePhoneOTP = {
    _count: PhoneOTPCountAggregateOutputType | null
    _min: PhoneOTPMinAggregateOutputType | null
    _max: PhoneOTPMaxAggregateOutputType | null
  }

  export type PhoneOTPMinAggregateOutputType = {
    id: string | null
    phone: string | null
    otpHash: string | null
    expiresAt: Date | null
    isUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneOTPMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    otpHash: string | null
    expiresAt: Date | null
    isUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneOTPCountAggregateOutputType = {
    id: number
    phone: number
    otpHash: number
    expiresAt: number
    isUsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhoneOTPMinAggregateInputType = {
    id?: true
    phone?: true
    otpHash?: true
    expiresAt?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneOTPMaxAggregateInputType = {
    id?: true
    phone?: true
    otpHash?: true
    expiresAt?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneOTPCountAggregateInputType = {
    id?: true
    phone?: true
    otpHash?: true
    expiresAt?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhoneOTPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneOTP to aggregate.
     */
    where?: PhoneOTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneOTPS to fetch.
     */
    orderBy?: PhoneOTPOrderByWithRelationInput | PhoneOTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneOTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneOTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneOTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhoneOTPS
    **/
    _count?: true | PhoneOTPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneOTPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneOTPMaxAggregateInputType
  }

  export type GetPhoneOTPAggregateType<T extends PhoneOTPAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoneOTP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoneOTP[P]>
      : GetScalarType<T[P], AggregatePhoneOTP[P]>
  }




  export type PhoneOTPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneOTPWhereInput
    orderBy?: PhoneOTPOrderByWithAggregationInput | PhoneOTPOrderByWithAggregationInput[]
    by: PhoneOTPScalarFieldEnum[] | PhoneOTPScalarFieldEnum
    having?: PhoneOTPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneOTPCountAggregateInputType | true
    _min?: PhoneOTPMinAggregateInputType
    _max?: PhoneOTPMaxAggregateInputType
  }

  export type PhoneOTPGroupByOutputType = {
    id: string
    phone: string
    otpHash: string
    expiresAt: Date
    isUsed: boolean
    createdAt: Date
    updatedAt: Date
    _count: PhoneOTPCountAggregateOutputType | null
    _min: PhoneOTPMinAggregateOutputType | null
    _max: PhoneOTPMaxAggregateOutputType | null
  }

  type GetPhoneOTPGroupByPayload<T extends PhoneOTPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneOTPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneOTPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneOTPGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneOTPGroupByOutputType[P]>
        }
      >
    >


  export type PhoneOTPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    otpHash?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["phoneOTP"]>

  export type PhoneOTPSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    otpHash?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["phoneOTP"]>

  export type PhoneOTPSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    otpHash?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["phoneOTP"]>

  export type PhoneOTPSelectScalar = {
    id?: boolean
    phone?: boolean
    otpHash?: boolean
    expiresAt?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhoneOTPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "otpHash" | "expiresAt" | "isUsed" | "createdAt" | "updatedAt", ExtArgs["result"]["phoneOTP"]>

  export type $PhoneOTPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhoneOTP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      otpHash: string
      expiresAt: Date
      isUsed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["phoneOTP"]>
    composites: {}
  }

  type PhoneOTPGetPayload<S extends boolean | null | undefined | PhoneOTPDefaultArgs> = $Result.GetResult<Prisma.$PhoneOTPPayload, S>

  type PhoneOTPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhoneOTPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhoneOTPCountAggregateInputType | true
    }

  export interface PhoneOTPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhoneOTP'], meta: { name: 'PhoneOTP' } }
    /**
     * Find zero or one PhoneOTP that matches the filter.
     * @param {PhoneOTPFindUniqueArgs} args - Arguments to find a PhoneOTP
     * @example
     * // Get one PhoneOTP
     * const phoneOTP = await prisma.phoneOTP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneOTPFindUniqueArgs>(args: SelectSubset<T, PhoneOTPFindUniqueArgs<ExtArgs>>): Prisma__PhoneOTPClient<$Result.GetResult<Prisma.$PhoneOTPPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhoneOTP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhoneOTPFindUniqueOrThrowArgs} args - Arguments to find a PhoneOTP
     * @example
     * // Get one PhoneOTP
     * const phoneOTP = await prisma.phoneOTP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneOTPFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneOTPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneOTPClient<$Result.GetResult<Prisma.$PhoneOTPPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneOTP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOTPFindFirstArgs} args - Arguments to find a PhoneOTP
     * @example
     * // Get one PhoneOTP
     * const phoneOTP = await prisma.phoneOTP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneOTPFindFirstArgs>(args?: SelectSubset<T, PhoneOTPFindFirstArgs<ExtArgs>>): Prisma__PhoneOTPClient<$Result.GetResult<Prisma.$PhoneOTPPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhoneOTP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOTPFindFirstOrThrowArgs} args - Arguments to find a PhoneOTP
     * @example
     * // Get one PhoneOTP
     * const phoneOTP = await prisma.phoneOTP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneOTPFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneOTPFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneOTPClient<$Result.GetResult<Prisma.$PhoneOTPPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhoneOTPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOTPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhoneOTPS
     * const phoneOTPS = await prisma.phoneOTP.findMany()
     * 
     * // Get first 10 PhoneOTPS
     * const phoneOTPS = await prisma.phoneOTP.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneOTPWithIdOnly = await prisma.phoneOTP.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneOTPFindManyArgs>(args?: SelectSubset<T, PhoneOTPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneOTPPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhoneOTP.
     * @param {PhoneOTPCreateArgs} args - Arguments to create a PhoneOTP.
     * @example
     * // Create one PhoneOTP
     * const PhoneOTP = await prisma.phoneOTP.create({
     *   data: {
     *     // ... data to create a PhoneOTP
     *   }
     * })
     * 
     */
    create<T extends PhoneOTPCreateArgs>(args: SelectSubset<T, PhoneOTPCreateArgs<ExtArgs>>): Prisma__PhoneOTPClient<$Result.GetResult<Prisma.$PhoneOTPPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhoneOTPS.
     * @param {PhoneOTPCreateManyArgs} args - Arguments to create many PhoneOTPS.
     * @example
     * // Create many PhoneOTPS
     * const phoneOTP = await prisma.phoneOTP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneOTPCreateManyArgs>(args?: SelectSubset<T, PhoneOTPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhoneOTPS and returns the data saved in the database.
     * @param {PhoneOTPCreateManyAndReturnArgs} args - Arguments to create many PhoneOTPS.
     * @example
     * // Create many PhoneOTPS
     * const phoneOTP = await prisma.phoneOTP.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhoneOTPS and only return the `id`
     * const phoneOTPWithIdOnly = await prisma.phoneOTP.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneOTPCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneOTPCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneOTPPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhoneOTP.
     * @param {PhoneOTPDeleteArgs} args - Arguments to delete one PhoneOTP.
     * @example
     * // Delete one PhoneOTP
     * const PhoneOTP = await prisma.phoneOTP.delete({
     *   where: {
     *     // ... filter to delete one PhoneOTP
     *   }
     * })
     * 
     */
    delete<T extends PhoneOTPDeleteArgs>(args: SelectSubset<T, PhoneOTPDeleteArgs<ExtArgs>>): Prisma__PhoneOTPClient<$Result.GetResult<Prisma.$PhoneOTPPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhoneOTP.
     * @param {PhoneOTPUpdateArgs} args - Arguments to update one PhoneOTP.
     * @example
     * // Update one PhoneOTP
     * const phoneOTP = await prisma.phoneOTP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneOTPUpdateArgs>(args: SelectSubset<T, PhoneOTPUpdateArgs<ExtArgs>>): Prisma__PhoneOTPClient<$Result.GetResult<Prisma.$PhoneOTPPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhoneOTPS.
     * @param {PhoneOTPDeleteManyArgs} args - Arguments to filter PhoneOTPS to delete.
     * @example
     * // Delete a few PhoneOTPS
     * const { count } = await prisma.phoneOTP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneOTPDeleteManyArgs>(args?: SelectSubset<T, PhoneOTPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneOTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOTPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhoneOTPS
     * const phoneOTP = await prisma.phoneOTP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneOTPUpdateManyArgs>(args: SelectSubset<T, PhoneOTPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneOTPS and returns the data updated in the database.
     * @param {PhoneOTPUpdateManyAndReturnArgs} args - Arguments to update many PhoneOTPS.
     * @example
     * // Update many PhoneOTPS
     * const phoneOTP = await prisma.phoneOTP.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhoneOTPS and only return the `id`
     * const phoneOTPWithIdOnly = await prisma.phoneOTP.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhoneOTPUpdateManyAndReturnArgs>(args: SelectSubset<T, PhoneOTPUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneOTPPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhoneOTP.
     * @param {PhoneOTPUpsertArgs} args - Arguments to update or create a PhoneOTP.
     * @example
     * // Update or create a PhoneOTP
     * const phoneOTP = await prisma.phoneOTP.upsert({
     *   create: {
     *     // ... data to create a PhoneOTP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhoneOTP we want to update
     *   }
     * })
     */
    upsert<T extends PhoneOTPUpsertArgs>(args: SelectSubset<T, PhoneOTPUpsertArgs<ExtArgs>>): Prisma__PhoneOTPClient<$Result.GetResult<Prisma.$PhoneOTPPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhoneOTPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOTPCountArgs} args - Arguments to filter PhoneOTPS to count.
     * @example
     * // Count the number of PhoneOTPS
     * const count = await prisma.phoneOTP.count({
     *   where: {
     *     // ... the filter for the PhoneOTPS we want to count
     *   }
     * })
    **/
    count<T extends PhoneOTPCountArgs>(
      args?: Subset<T, PhoneOTPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneOTPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhoneOTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOTPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhoneOTPAggregateArgs>(args: Subset<T, PhoneOTPAggregateArgs>): Prisma.PrismaPromise<GetPhoneOTPAggregateType<T>>

    /**
     * Group by PhoneOTP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneOTPGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhoneOTPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneOTPGroupByArgs['orderBy'] }
        : { orderBy?: PhoneOTPGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhoneOTPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneOTPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhoneOTP model
   */
  readonly fields: PhoneOTPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhoneOTP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneOTPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhoneOTP model
   */
  interface PhoneOTPFieldRefs {
    readonly id: FieldRef<"PhoneOTP", 'String'>
    readonly phone: FieldRef<"PhoneOTP", 'String'>
    readonly otpHash: FieldRef<"PhoneOTP", 'String'>
    readonly expiresAt: FieldRef<"PhoneOTP", 'DateTime'>
    readonly isUsed: FieldRef<"PhoneOTP", 'Boolean'>
    readonly createdAt: FieldRef<"PhoneOTP", 'DateTime'>
    readonly updatedAt: FieldRef<"PhoneOTP", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhoneOTP findUnique
   */
  export type PhoneOTPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOTP
     */
    select?: PhoneOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOTP
     */
    omit?: PhoneOTPOmit<ExtArgs> | null
    /**
     * Filter, which PhoneOTP to fetch.
     */
    where: PhoneOTPWhereUniqueInput
  }

  /**
   * PhoneOTP findUniqueOrThrow
   */
  export type PhoneOTPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOTP
     */
    select?: PhoneOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOTP
     */
    omit?: PhoneOTPOmit<ExtArgs> | null
    /**
     * Filter, which PhoneOTP to fetch.
     */
    where: PhoneOTPWhereUniqueInput
  }

  /**
   * PhoneOTP findFirst
   */
  export type PhoneOTPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOTP
     */
    select?: PhoneOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOTP
     */
    omit?: PhoneOTPOmit<ExtArgs> | null
    /**
     * Filter, which PhoneOTP to fetch.
     */
    where?: PhoneOTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneOTPS to fetch.
     */
    orderBy?: PhoneOTPOrderByWithRelationInput | PhoneOTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneOTPS.
     */
    cursor?: PhoneOTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneOTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneOTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneOTPS.
     */
    distinct?: PhoneOTPScalarFieldEnum | PhoneOTPScalarFieldEnum[]
  }

  /**
   * PhoneOTP findFirstOrThrow
   */
  export type PhoneOTPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOTP
     */
    select?: PhoneOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOTP
     */
    omit?: PhoneOTPOmit<ExtArgs> | null
    /**
     * Filter, which PhoneOTP to fetch.
     */
    where?: PhoneOTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneOTPS to fetch.
     */
    orderBy?: PhoneOTPOrderByWithRelationInput | PhoneOTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneOTPS.
     */
    cursor?: PhoneOTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneOTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneOTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneOTPS.
     */
    distinct?: PhoneOTPScalarFieldEnum | PhoneOTPScalarFieldEnum[]
  }

  /**
   * PhoneOTP findMany
   */
  export type PhoneOTPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOTP
     */
    select?: PhoneOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOTP
     */
    omit?: PhoneOTPOmit<ExtArgs> | null
    /**
     * Filter, which PhoneOTPS to fetch.
     */
    where?: PhoneOTPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneOTPS to fetch.
     */
    orderBy?: PhoneOTPOrderByWithRelationInput | PhoneOTPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhoneOTPS.
     */
    cursor?: PhoneOTPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneOTPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneOTPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneOTPS.
     */
    distinct?: PhoneOTPScalarFieldEnum | PhoneOTPScalarFieldEnum[]
  }

  /**
   * PhoneOTP create
   */
  export type PhoneOTPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOTP
     */
    select?: PhoneOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOTP
     */
    omit?: PhoneOTPOmit<ExtArgs> | null
    /**
     * The data needed to create a PhoneOTP.
     */
    data: XOR<PhoneOTPCreateInput, PhoneOTPUncheckedCreateInput>
  }

  /**
   * PhoneOTP createMany
   */
  export type PhoneOTPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhoneOTPS.
     */
    data: PhoneOTPCreateManyInput | PhoneOTPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneOTP createManyAndReturn
   */
  export type PhoneOTPCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOTP
     */
    select?: PhoneOTPSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOTP
     */
    omit?: PhoneOTPOmit<ExtArgs> | null
    /**
     * The data used to create many PhoneOTPS.
     */
    data: PhoneOTPCreateManyInput | PhoneOTPCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneOTP update
   */
  export type PhoneOTPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOTP
     */
    select?: PhoneOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOTP
     */
    omit?: PhoneOTPOmit<ExtArgs> | null
    /**
     * The data needed to update a PhoneOTP.
     */
    data: XOR<PhoneOTPUpdateInput, PhoneOTPUncheckedUpdateInput>
    /**
     * Choose, which PhoneOTP to update.
     */
    where: PhoneOTPWhereUniqueInput
  }

  /**
   * PhoneOTP updateMany
   */
  export type PhoneOTPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhoneOTPS.
     */
    data: XOR<PhoneOTPUpdateManyMutationInput, PhoneOTPUncheckedUpdateManyInput>
    /**
     * Filter which PhoneOTPS to update
     */
    where?: PhoneOTPWhereInput
    /**
     * Limit how many PhoneOTPS to update.
     */
    limit?: number
  }

  /**
   * PhoneOTP updateManyAndReturn
   */
  export type PhoneOTPUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOTP
     */
    select?: PhoneOTPSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOTP
     */
    omit?: PhoneOTPOmit<ExtArgs> | null
    /**
     * The data used to update PhoneOTPS.
     */
    data: XOR<PhoneOTPUpdateManyMutationInput, PhoneOTPUncheckedUpdateManyInput>
    /**
     * Filter which PhoneOTPS to update
     */
    where?: PhoneOTPWhereInput
    /**
     * Limit how many PhoneOTPS to update.
     */
    limit?: number
  }

  /**
   * PhoneOTP upsert
   */
  export type PhoneOTPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOTP
     */
    select?: PhoneOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOTP
     */
    omit?: PhoneOTPOmit<ExtArgs> | null
    /**
     * The filter to search for the PhoneOTP to update in case it exists.
     */
    where: PhoneOTPWhereUniqueInput
    /**
     * In case the PhoneOTP found by the `where` argument doesn't exist, create a new PhoneOTP with this data.
     */
    create: XOR<PhoneOTPCreateInput, PhoneOTPUncheckedCreateInput>
    /**
     * In case the PhoneOTP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneOTPUpdateInput, PhoneOTPUncheckedUpdateInput>
  }

  /**
   * PhoneOTP delete
   */
  export type PhoneOTPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOTP
     */
    select?: PhoneOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOTP
     */
    omit?: PhoneOTPOmit<ExtArgs> | null
    /**
     * Filter which PhoneOTP to delete.
     */
    where: PhoneOTPWhereUniqueInput
  }

  /**
   * PhoneOTP deleteMany
   */
  export type PhoneOTPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneOTPS to delete
     */
    where?: PhoneOTPWhereInput
    /**
     * Limit how many PhoneOTPS to delete.
     */
    limit?: number
  }

  /**
   * PhoneOTP without action
   */
  export type PhoneOTPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneOTP
     */
    select?: PhoneOTPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhoneOTP
     */
    omit?: PhoneOTPOmit<ExtArgs> | null
  }


  /**
   * Model BloodRequest
   */

  export type AggregateBloodRequest = {
    _count: BloodRequestCountAggregateOutputType | null
    _avg: BloodRequestAvgAggregateOutputType | null
    _sum: BloodRequestSumAggregateOutputType | null
    _min: BloodRequestMinAggregateOutputType | null
    _max: BloodRequestMaxAggregateOutputType | null
  }

  export type BloodRequestAvgAggregateOutputType = {
    units: number | null
    locationLat: number | null
    locationLng: number | null
  }

  export type BloodRequestSumAggregateOutputType = {
    units: number | null
    locationLat: number | null
    locationLng: number | null
  }

  export type BloodRequestMinAggregateOutputType = {
    id: string | null
    requesterPhone: string | null
    patientName: string | null
    bloodGroup: string | null
    units: number | null
    locationLat: number | null
    locationLng: number | null
    locationAddress: string | null
    hospital: string | null
    contact: string | null
    urgency: string | null
    requiredDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BloodRequestMaxAggregateOutputType = {
    id: string | null
    requesterPhone: string | null
    patientName: string | null
    bloodGroup: string | null
    units: number | null
    locationLat: number | null
    locationLng: number | null
    locationAddress: string | null
    hospital: string | null
    contact: string | null
    urgency: string | null
    requiredDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BloodRequestCountAggregateOutputType = {
    id: number
    requesterPhone: number
    patientName: number
    bloodGroup: number
    units: number
    locationLat: number
    locationLng: number
    locationAddress: number
    hospital: number
    contact: number
    urgency: number
    requiredDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BloodRequestAvgAggregateInputType = {
    units?: true
    locationLat?: true
    locationLng?: true
  }

  export type BloodRequestSumAggregateInputType = {
    units?: true
    locationLat?: true
    locationLng?: true
  }

  export type BloodRequestMinAggregateInputType = {
    id?: true
    requesterPhone?: true
    patientName?: true
    bloodGroup?: true
    units?: true
    locationLat?: true
    locationLng?: true
    locationAddress?: true
    hospital?: true
    contact?: true
    urgency?: true
    requiredDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BloodRequestMaxAggregateInputType = {
    id?: true
    requesterPhone?: true
    patientName?: true
    bloodGroup?: true
    units?: true
    locationLat?: true
    locationLng?: true
    locationAddress?: true
    hospital?: true
    contact?: true
    urgency?: true
    requiredDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BloodRequestCountAggregateInputType = {
    id?: true
    requesterPhone?: true
    patientName?: true
    bloodGroup?: true
    units?: true
    locationLat?: true
    locationLng?: true
    locationAddress?: true
    hospital?: true
    contact?: true
    urgency?: true
    requiredDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BloodRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodRequest to aggregate.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BloodRequests
    **/
    _count?: true | BloodRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloodRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloodRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloodRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloodRequestMaxAggregateInputType
  }

  export type GetBloodRequestAggregateType<T extends BloodRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateBloodRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloodRequest[P]>
      : GetScalarType<T[P], AggregateBloodRequest[P]>
  }




  export type BloodRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloodRequestWhereInput
    orderBy?: BloodRequestOrderByWithAggregationInput | BloodRequestOrderByWithAggregationInput[]
    by: BloodRequestScalarFieldEnum[] | BloodRequestScalarFieldEnum
    having?: BloodRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloodRequestCountAggregateInputType | true
    _avg?: BloodRequestAvgAggregateInputType
    _sum?: BloodRequestSumAggregateInputType
    _min?: BloodRequestMinAggregateInputType
    _max?: BloodRequestMaxAggregateInputType
  }

  export type BloodRequestGroupByOutputType = {
    id: string
    requesterPhone: string
    patientName: string
    bloodGroup: string
    units: number
    locationLat: number | null
    locationLng: number | null
    locationAddress: string
    hospital: string | null
    contact: string
    urgency: string
    requiredDate: Date | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: BloodRequestCountAggregateOutputType | null
    _avg: BloodRequestAvgAggregateOutputType | null
    _sum: BloodRequestSumAggregateOutputType | null
    _min: BloodRequestMinAggregateOutputType | null
    _max: BloodRequestMaxAggregateOutputType | null
  }

  type GetBloodRequestGroupByPayload<T extends BloodRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloodRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloodRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloodRequestGroupByOutputType[P]>
            : GetScalarType<T[P], BloodRequestGroupByOutputType[P]>
        }
      >
    >


  export type BloodRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterPhone?: boolean
    patientName?: boolean
    bloodGroup?: boolean
    units?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationAddress?: boolean
    hospital?: boolean
    contact?: boolean
    urgency?: boolean
    requiredDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bloodRequest"]>

  export type BloodRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterPhone?: boolean
    patientName?: boolean
    bloodGroup?: boolean
    units?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationAddress?: boolean
    hospital?: boolean
    contact?: boolean
    urgency?: boolean
    requiredDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bloodRequest"]>

  export type BloodRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterPhone?: boolean
    patientName?: boolean
    bloodGroup?: boolean
    units?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationAddress?: boolean
    hospital?: boolean
    contact?: boolean
    urgency?: boolean
    requiredDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bloodRequest"]>

  export type BloodRequestSelectScalar = {
    id?: boolean
    requesterPhone?: boolean
    patientName?: boolean
    bloodGroup?: boolean
    units?: boolean
    locationLat?: boolean
    locationLng?: boolean
    locationAddress?: boolean
    hospital?: boolean
    contact?: boolean
    urgency?: boolean
    requiredDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BloodRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requesterPhone" | "patientName" | "bloodGroup" | "units" | "locationLat" | "locationLng" | "locationAddress" | "hospital" | "contact" | "urgency" | "requiredDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["bloodRequest"]>

  export type $BloodRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BloodRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requesterPhone: string
      patientName: string
      bloodGroup: string
      units: number
      locationLat: number | null
      locationLng: number | null
      locationAddress: string
      hospital: string | null
      contact: string
      urgency: string
      requiredDate: Date | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bloodRequest"]>
    composites: {}
  }

  type BloodRequestGetPayload<S extends boolean | null | undefined | BloodRequestDefaultArgs> = $Result.GetResult<Prisma.$BloodRequestPayload, S>

  type BloodRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BloodRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloodRequestCountAggregateInputType | true
    }

  export interface BloodRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BloodRequest'], meta: { name: 'BloodRequest' } }
    /**
     * Find zero or one BloodRequest that matches the filter.
     * @param {BloodRequestFindUniqueArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BloodRequestFindUniqueArgs>(args: SelectSubset<T, BloodRequestFindUniqueArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BloodRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BloodRequestFindUniqueOrThrowArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BloodRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, BloodRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindFirstArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BloodRequestFindFirstArgs>(args?: SelectSubset<T, BloodRequestFindFirstArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloodRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindFirstOrThrowArgs} args - Arguments to find a BloodRequest
     * @example
     * // Get one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BloodRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, BloodRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BloodRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BloodRequests
     * const bloodRequests = await prisma.bloodRequest.findMany()
     * 
     * // Get first 10 BloodRequests
     * const bloodRequests = await prisma.bloodRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BloodRequestFindManyArgs>(args?: SelectSubset<T, BloodRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BloodRequest.
     * @param {BloodRequestCreateArgs} args - Arguments to create a BloodRequest.
     * @example
     * // Create one BloodRequest
     * const BloodRequest = await prisma.bloodRequest.create({
     *   data: {
     *     // ... data to create a BloodRequest
     *   }
     * })
     * 
     */
    create<T extends BloodRequestCreateArgs>(args: SelectSubset<T, BloodRequestCreateArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BloodRequests.
     * @param {BloodRequestCreateManyArgs} args - Arguments to create many BloodRequests.
     * @example
     * // Create many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BloodRequestCreateManyArgs>(args?: SelectSubset<T, BloodRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BloodRequests and returns the data saved in the database.
     * @param {BloodRequestCreateManyAndReturnArgs} args - Arguments to create many BloodRequests.
     * @example
     * // Create many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BloodRequests and only return the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BloodRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, BloodRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BloodRequest.
     * @param {BloodRequestDeleteArgs} args - Arguments to delete one BloodRequest.
     * @example
     * // Delete one BloodRequest
     * const BloodRequest = await prisma.bloodRequest.delete({
     *   where: {
     *     // ... filter to delete one BloodRequest
     *   }
     * })
     * 
     */
    delete<T extends BloodRequestDeleteArgs>(args: SelectSubset<T, BloodRequestDeleteArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BloodRequest.
     * @param {BloodRequestUpdateArgs} args - Arguments to update one BloodRequest.
     * @example
     * // Update one BloodRequest
     * const bloodRequest = await prisma.bloodRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BloodRequestUpdateArgs>(args: SelectSubset<T, BloodRequestUpdateArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BloodRequests.
     * @param {BloodRequestDeleteManyArgs} args - Arguments to filter BloodRequests to delete.
     * @example
     * // Delete a few BloodRequests
     * const { count } = await prisma.bloodRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BloodRequestDeleteManyArgs>(args?: SelectSubset<T, BloodRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BloodRequestUpdateManyArgs>(args: SelectSubset<T, BloodRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloodRequests and returns the data updated in the database.
     * @param {BloodRequestUpdateManyAndReturnArgs} args - Arguments to update many BloodRequests.
     * @example
     * // Update many BloodRequests
     * const bloodRequest = await prisma.bloodRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BloodRequests and only return the `id`
     * const bloodRequestWithIdOnly = await prisma.bloodRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BloodRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, BloodRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BloodRequest.
     * @param {BloodRequestUpsertArgs} args - Arguments to update or create a BloodRequest.
     * @example
     * // Update or create a BloodRequest
     * const bloodRequest = await prisma.bloodRequest.upsert({
     *   create: {
     *     // ... data to create a BloodRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BloodRequest we want to update
     *   }
     * })
     */
    upsert<T extends BloodRequestUpsertArgs>(args: SelectSubset<T, BloodRequestUpsertArgs<ExtArgs>>): Prisma__BloodRequestClient<$Result.GetResult<Prisma.$BloodRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BloodRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestCountArgs} args - Arguments to filter BloodRequests to count.
     * @example
     * // Count the number of BloodRequests
     * const count = await prisma.bloodRequest.count({
     *   where: {
     *     // ... the filter for the BloodRequests we want to count
     *   }
     * })
    **/
    count<T extends BloodRequestCountArgs>(
      args?: Subset<T, BloodRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloodRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BloodRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BloodRequestAggregateArgs>(args: Subset<T, BloodRequestAggregateArgs>): Prisma.PrismaPromise<GetBloodRequestAggregateType<T>>

    /**
     * Group by BloodRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloodRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BloodRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BloodRequestGroupByArgs['orderBy'] }
        : { orderBy?: BloodRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BloodRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BloodRequest model
   */
  readonly fields: BloodRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BloodRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BloodRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BloodRequest model
   */
  interface BloodRequestFieldRefs {
    readonly id: FieldRef<"BloodRequest", 'String'>
    readonly requesterPhone: FieldRef<"BloodRequest", 'String'>
    readonly patientName: FieldRef<"BloodRequest", 'String'>
    readonly bloodGroup: FieldRef<"BloodRequest", 'String'>
    readonly units: FieldRef<"BloodRequest", 'Int'>
    readonly locationLat: FieldRef<"BloodRequest", 'Float'>
    readonly locationLng: FieldRef<"BloodRequest", 'Float'>
    readonly locationAddress: FieldRef<"BloodRequest", 'String'>
    readonly hospital: FieldRef<"BloodRequest", 'String'>
    readonly contact: FieldRef<"BloodRequest", 'String'>
    readonly urgency: FieldRef<"BloodRequest", 'String'>
    readonly requiredDate: FieldRef<"BloodRequest", 'DateTime'>
    readonly status: FieldRef<"BloodRequest", 'String'>
    readonly createdAt: FieldRef<"BloodRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"BloodRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BloodRequest findUnique
   */
  export type BloodRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest findUniqueOrThrow
   */
  export type BloodRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest findFirst
   */
  export type BloodRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest findFirstOrThrow
   */
  export type BloodRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Filter, which BloodRequest to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest findMany
   */
  export type BloodRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Filter, which BloodRequests to fetch.
     */
    where?: BloodRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloodRequests to fetch.
     */
    orderBy?: BloodRequestOrderByWithRelationInput | BloodRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BloodRequests.
     */
    cursor?: BloodRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloodRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloodRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloodRequests.
     */
    distinct?: BloodRequestScalarFieldEnum | BloodRequestScalarFieldEnum[]
  }

  /**
   * BloodRequest create
   */
  export type BloodRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a BloodRequest.
     */
    data: XOR<BloodRequestCreateInput, BloodRequestUncheckedCreateInput>
  }

  /**
   * BloodRequest createMany
   */
  export type BloodRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BloodRequests.
     */
    data: BloodRequestCreateManyInput | BloodRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BloodRequest createManyAndReturn
   */
  export type BloodRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * The data used to create many BloodRequests.
     */
    data: BloodRequestCreateManyInput | BloodRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BloodRequest update
   */
  export type BloodRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a BloodRequest.
     */
    data: XOR<BloodRequestUpdateInput, BloodRequestUncheckedUpdateInput>
    /**
     * Choose, which BloodRequest to update.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest updateMany
   */
  export type BloodRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BloodRequests.
     */
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyInput>
    /**
     * Filter which BloodRequests to update
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to update.
     */
    limit?: number
  }

  /**
   * BloodRequest updateManyAndReturn
   */
  export type BloodRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * The data used to update BloodRequests.
     */
    data: XOR<BloodRequestUpdateManyMutationInput, BloodRequestUncheckedUpdateManyInput>
    /**
     * Filter which BloodRequests to update
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to update.
     */
    limit?: number
  }

  /**
   * BloodRequest upsert
   */
  export type BloodRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the BloodRequest to update in case it exists.
     */
    where: BloodRequestWhereUniqueInput
    /**
     * In case the BloodRequest found by the `where` argument doesn't exist, create a new BloodRequest with this data.
     */
    create: XOR<BloodRequestCreateInput, BloodRequestUncheckedCreateInput>
    /**
     * In case the BloodRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BloodRequestUpdateInput, BloodRequestUncheckedUpdateInput>
  }

  /**
   * BloodRequest delete
   */
  export type BloodRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
    /**
     * Filter which BloodRequest to delete.
     */
    where: BloodRequestWhereUniqueInput
  }

  /**
   * BloodRequest deleteMany
   */
  export type BloodRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloodRequests to delete
     */
    where?: BloodRequestWhereInput
    /**
     * Limit how many BloodRequests to delete.
     */
    limit?: number
  }

  /**
   * BloodRequest without action
   */
  export type BloodRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloodRequest
     */
    select?: BloodRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloodRequest
     */
    omit?: BloodRequestOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DonorScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    password: 'password',
    fullName: 'fullName',
    dob: 'dob',
    gender: 'gender',
    bloodType: 'bloodType',
    city: 'city',
    email: 'email',
    healthConditions: 'healthConditions',
    locationLat: 'locationLat',
    locationLng: 'locationLng',
    locationAddress: 'locationAddress',
    lastDonationDate: 'lastDonationDate',
    isAvailable: 'isAvailable',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DonorScalarFieldEnum = (typeof DonorScalarFieldEnum)[keyof typeof DonorScalarFieldEnum]


  export const PhoneOTPScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    otpHash: 'otpHash',
    expiresAt: 'expiresAt',
    isUsed: 'isUsed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhoneOTPScalarFieldEnum = (typeof PhoneOTPScalarFieldEnum)[keyof typeof PhoneOTPScalarFieldEnum]


  export const BloodRequestScalarFieldEnum: {
    id: 'id',
    requesterPhone: 'requesterPhone',
    patientName: 'patientName',
    bloodGroup: 'bloodGroup',
    units: 'units',
    locationLat: 'locationLat',
    locationLng: 'locationLng',
    locationAddress: 'locationAddress',
    hospital: 'hospital',
    contact: 'contact',
    urgency: 'urgency',
    requiredDate: 'requiredDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BloodRequestScalarFieldEnum = (typeof BloodRequestScalarFieldEnum)[keyof typeof BloodRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DonorWhereInput = {
    AND?: DonorWhereInput | DonorWhereInput[]
    OR?: DonorWhereInput[]
    NOT?: DonorWhereInput | DonorWhereInput[]
    id?: StringFilter<"Donor"> | string
    phone?: StringFilter<"Donor"> | string
    password?: StringNullableFilter<"Donor"> | string | null
    fullName?: StringFilter<"Donor"> | string
    dob?: DateTimeNullableFilter<"Donor"> | Date | string | null
    gender?: StringNullableFilter<"Donor"> | string | null
    bloodType?: StringFilter<"Donor"> | string
    city?: StringNullableFilter<"Donor"> | string | null
    email?: StringNullableFilter<"Donor"> | string | null
    healthConditions?: StringNullableFilter<"Donor"> | string | null
    locationLat?: FloatNullableFilter<"Donor"> | number | null
    locationLng?: FloatNullableFilter<"Donor"> | number | null
    locationAddress?: StringNullableFilter<"Donor"> | string | null
    lastDonationDate?: DateTimeNullableFilter<"Donor"> | Date | string | null
    isAvailable?: BoolFilter<"Donor"> | boolean
    isVerified?: BoolFilter<"Donor"> | boolean
    createdAt?: DateTimeFilter<"Donor"> | Date | string
    updatedAt?: DateTimeFilter<"Donor"> | Date | string
  }

  export type DonorOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    password?: SortOrderInput | SortOrder
    fullName?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    bloodType?: SortOrder
    city?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    healthConditions?: SortOrderInput | SortOrder
    locationLat?: SortOrderInput | SortOrder
    locationLng?: SortOrderInput | SortOrder
    locationAddress?: SortOrderInput | SortOrder
    lastDonationDate?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: DonorWhereInput | DonorWhereInput[]
    OR?: DonorWhereInput[]
    NOT?: DonorWhereInput | DonorWhereInput[]
    password?: StringNullableFilter<"Donor"> | string | null
    fullName?: StringFilter<"Donor"> | string
    dob?: DateTimeNullableFilter<"Donor"> | Date | string | null
    gender?: StringNullableFilter<"Donor"> | string | null
    bloodType?: StringFilter<"Donor"> | string
    city?: StringNullableFilter<"Donor"> | string | null
    email?: StringNullableFilter<"Donor"> | string | null
    healthConditions?: StringNullableFilter<"Donor"> | string | null
    locationLat?: FloatNullableFilter<"Donor"> | number | null
    locationLng?: FloatNullableFilter<"Donor"> | number | null
    locationAddress?: StringNullableFilter<"Donor"> | string | null
    lastDonationDate?: DateTimeNullableFilter<"Donor"> | Date | string | null
    isAvailable?: BoolFilter<"Donor"> | boolean
    isVerified?: BoolFilter<"Donor"> | boolean
    createdAt?: DateTimeFilter<"Donor"> | Date | string
    updatedAt?: DateTimeFilter<"Donor"> | Date | string
  }, "id" | "phone">

  export type DonorOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    password?: SortOrderInput | SortOrder
    fullName?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    bloodType?: SortOrder
    city?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    healthConditions?: SortOrderInput | SortOrder
    locationLat?: SortOrderInput | SortOrder
    locationLng?: SortOrderInput | SortOrder
    locationAddress?: SortOrderInput | SortOrder
    lastDonationDate?: SortOrderInput | SortOrder
    isAvailable?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DonorCountOrderByAggregateInput
    _avg?: DonorAvgOrderByAggregateInput
    _max?: DonorMaxOrderByAggregateInput
    _min?: DonorMinOrderByAggregateInput
    _sum?: DonorSumOrderByAggregateInput
  }

  export type DonorScalarWhereWithAggregatesInput = {
    AND?: DonorScalarWhereWithAggregatesInput | DonorScalarWhereWithAggregatesInput[]
    OR?: DonorScalarWhereWithAggregatesInput[]
    NOT?: DonorScalarWhereWithAggregatesInput | DonorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Donor"> | string
    phone?: StringWithAggregatesFilter<"Donor"> | string
    password?: StringNullableWithAggregatesFilter<"Donor"> | string | null
    fullName?: StringWithAggregatesFilter<"Donor"> | string
    dob?: DateTimeNullableWithAggregatesFilter<"Donor"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"Donor"> | string | null
    bloodType?: StringWithAggregatesFilter<"Donor"> | string
    city?: StringNullableWithAggregatesFilter<"Donor"> | string | null
    email?: StringNullableWithAggregatesFilter<"Donor"> | string | null
    healthConditions?: StringNullableWithAggregatesFilter<"Donor"> | string | null
    locationLat?: FloatNullableWithAggregatesFilter<"Donor"> | number | null
    locationLng?: FloatNullableWithAggregatesFilter<"Donor"> | number | null
    locationAddress?: StringNullableWithAggregatesFilter<"Donor"> | string | null
    lastDonationDate?: DateTimeNullableWithAggregatesFilter<"Donor"> | Date | string | null
    isAvailable?: BoolWithAggregatesFilter<"Donor"> | boolean
    isVerified?: BoolWithAggregatesFilter<"Donor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Donor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donor"> | Date | string
  }

  export type PhoneOTPWhereInput = {
    AND?: PhoneOTPWhereInput | PhoneOTPWhereInput[]
    OR?: PhoneOTPWhereInput[]
    NOT?: PhoneOTPWhereInput | PhoneOTPWhereInput[]
    id?: StringFilter<"PhoneOTP"> | string
    phone?: StringFilter<"PhoneOTP"> | string
    otpHash?: StringFilter<"PhoneOTP"> | string
    expiresAt?: DateTimeFilter<"PhoneOTP"> | Date | string
    isUsed?: BoolFilter<"PhoneOTP"> | boolean
    createdAt?: DateTimeFilter<"PhoneOTP"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneOTP"> | Date | string
  }

  export type PhoneOTPOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneOTPWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhoneOTPWhereInput | PhoneOTPWhereInput[]
    OR?: PhoneOTPWhereInput[]
    NOT?: PhoneOTPWhereInput | PhoneOTPWhereInput[]
    phone?: StringFilter<"PhoneOTP"> | string
    otpHash?: StringFilter<"PhoneOTP"> | string
    expiresAt?: DateTimeFilter<"PhoneOTP"> | Date | string
    isUsed?: BoolFilter<"PhoneOTP"> | boolean
    createdAt?: DateTimeFilter<"PhoneOTP"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneOTP"> | Date | string
  }, "id">

  export type PhoneOTPOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhoneOTPCountOrderByAggregateInput
    _max?: PhoneOTPMaxOrderByAggregateInput
    _min?: PhoneOTPMinOrderByAggregateInput
  }

  export type PhoneOTPScalarWhereWithAggregatesInput = {
    AND?: PhoneOTPScalarWhereWithAggregatesInput | PhoneOTPScalarWhereWithAggregatesInput[]
    OR?: PhoneOTPScalarWhereWithAggregatesInput[]
    NOT?: PhoneOTPScalarWhereWithAggregatesInput | PhoneOTPScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhoneOTP"> | string
    phone?: StringWithAggregatesFilter<"PhoneOTP"> | string
    otpHash?: StringWithAggregatesFilter<"PhoneOTP"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PhoneOTP"> | Date | string
    isUsed?: BoolWithAggregatesFilter<"PhoneOTP"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PhoneOTP"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhoneOTP"> | Date | string
  }

  export type BloodRequestWhereInput = {
    AND?: BloodRequestWhereInput | BloodRequestWhereInput[]
    OR?: BloodRequestWhereInput[]
    NOT?: BloodRequestWhereInput | BloodRequestWhereInput[]
    id?: StringFilter<"BloodRequest"> | string
    requesterPhone?: StringFilter<"BloodRequest"> | string
    patientName?: StringFilter<"BloodRequest"> | string
    bloodGroup?: StringFilter<"BloodRequest"> | string
    units?: IntFilter<"BloodRequest"> | number
    locationLat?: FloatNullableFilter<"BloodRequest"> | number | null
    locationLng?: FloatNullableFilter<"BloodRequest"> | number | null
    locationAddress?: StringFilter<"BloodRequest"> | string
    hospital?: StringNullableFilter<"BloodRequest"> | string | null
    contact?: StringFilter<"BloodRequest"> | string
    urgency?: StringFilter<"BloodRequest"> | string
    requiredDate?: DateTimeNullableFilter<"BloodRequest"> | Date | string | null
    status?: StringFilter<"BloodRequest"> | string
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BloodRequest"> | Date | string
  }

  export type BloodRequestOrderByWithRelationInput = {
    id?: SortOrder
    requesterPhone?: SortOrder
    patientName?: SortOrder
    bloodGroup?: SortOrder
    units?: SortOrder
    locationLat?: SortOrderInput | SortOrder
    locationLng?: SortOrderInput | SortOrder
    locationAddress?: SortOrder
    hospital?: SortOrderInput | SortOrder
    contact?: SortOrder
    urgency?: SortOrder
    requiredDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BloodRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BloodRequestWhereInput | BloodRequestWhereInput[]
    OR?: BloodRequestWhereInput[]
    NOT?: BloodRequestWhereInput | BloodRequestWhereInput[]
    requesterPhone?: StringFilter<"BloodRequest"> | string
    patientName?: StringFilter<"BloodRequest"> | string
    bloodGroup?: StringFilter<"BloodRequest"> | string
    units?: IntFilter<"BloodRequest"> | number
    locationLat?: FloatNullableFilter<"BloodRequest"> | number | null
    locationLng?: FloatNullableFilter<"BloodRequest"> | number | null
    locationAddress?: StringFilter<"BloodRequest"> | string
    hospital?: StringNullableFilter<"BloodRequest"> | string | null
    contact?: StringFilter<"BloodRequest"> | string
    urgency?: StringFilter<"BloodRequest"> | string
    requiredDate?: DateTimeNullableFilter<"BloodRequest"> | Date | string | null
    status?: StringFilter<"BloodRequest"> | string
    createdAt?: DateTimeFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BloodRequest"> | Date | string
  }, "id">

  export type BloodRequestOrderByWithAggregationInput = {
    id?: SortOrder
    requesterPhone?: SortOrder
    patientName?: SortOrder
    bloodGroup?: SortOrder
    units?: SortOrder
    locationLat?: SortOrderInput | SortOrder
    locationLng?: SortOrderInput | SortOrder
    locationAddress?: SortOrder
    hospital?: SortOrderInput | SortOrder
    contact?: SortOrder
    urgency?: SortOrder
    requiredDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BloodRequestCountOrderByAggregateInput
    _avg?: BloodRequestAvgOrderByAggregateInput
    _max?: BloodRequestMaxOrderByAggregateInput
    _min?: BloodRequestMinOrderByAggregateInput
    _sum?: BloodRequestSumOrderByAggregateInput
  }

  export type BloodRequestScalarWhereWithAggregatesInput = {
    AND?: BloodRequestScalarWhereWithAggregatesInput | BloodRequestScalarWhereWithAggregatesInput[]
    OR?: BloodRequestScalarWhereWithAggregatesInput[]
    NOT?: BloodRequestScalarWhereWithAggregatesInput | BloodRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BloodRequest"> | string
    requesterPhone?: StringWithAggregatesFilter<"BloodRequest"> | string
    patientName?: StringWithAggregatesFilter<"BloodRequest"> | string
    bloodGroup?: StringWithAggregatesFilter<"BloodRequest"> | string
    units?: IntWithAggregatesFilter<"BloodRequest"> | number
    locationLat?: FloatNullableWithAggregatesFilter<"BloodRequest"> | number | null
    locationLng?: FloatNullableWithAggregatesFilter<"BloodRequest"> | number | null
    locationAddress?: StringWithAggregatesFilter<"BloodRequest"> | string
    hospital?: StringNullableWithAggregatesFilter<"BloodRequest"> | string | null
    contact?: StringWithAggregatesFilter<"BloodRequest"> | string
    urgency?: StringWithAggregatesFilter<"BloodRequest"> | string
    requiredDate?: DateTimeNullableWithAggregatesFilter<"BloodRequest"> | Date | string | null
    status?: StringWithAggregatesFilter<"BloodRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BloodRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BloodRequest"> | Date | string
  }

  export type DonorCreateInput = {
    id?: string
    phone: string
    password?: string | null
    fullName: string
    dob?: Date | string | null
    gender?: string | null
    bloodType: string
    city?: string | null
    email?: string | null
    healthConditions?: string | null
    locationLat?: number | null
    locationLng?: number | null
    locationAddress?: string | null
    lastDonationDate?: Date | string | null
    isAvailable?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonorUncheckedCreateInput = {
    id?: string
    phone: string
    password?: string | null
    fullName: string
    dob?: Date | string | null
    gender?: string | null
    bloodType: string
    city?: string | null
    email?: string | null
    healthConditions?: string | null
    locationLat?: number | null
    locationLng?: number | null
    locationAddress?: string | null
    lastDonationDate?: Date | string | null
    isAvailable?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    healthConditions?: NullableStringFieldUpdateOperationsInput | string | null
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastDonationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    healthConditions?: NullableStringFieldUpdateOperationsInput | string | null
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastDonationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorCreateManyInput = {
    id?: string
    phone: string
    password?: string | null
    fullName: string
    dob?: Date | string | null
    gender?: string | null
    bloodType: string
    city?: string | null
    email?: string | null
    healthConditions?: string | null
    locationLat?: number | null
    locationLng?: number | null
    locationAddress?: string | null
    lastDonationDate?: Date | string | null
    isAvailable?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    healthConditions?: NullableStringFieldUpdateOperationsInput | string | null
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastDonationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    bloodType?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    healthConditions?: NullableStringFieldUpdateOperationsInput | string | null
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: NullableStringFieldUpdateOperationsInput | string | null
    lastDonationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneOTPCreateInput = {
    id?: string
    phone: string
    otpHash: string
    expiresAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneOTPUncheckedCreateInput = {
    id?: string
    phone: string
    otpHash: string
    expiresAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneOTPUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneOTPUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneOTPCreateManyInput = {
    id?: string
    phone: string
    otpHash: string
    expiresAt: Date | string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneOTPUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneOTPUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestCreateInput = {
    id?: string
    requesterPhone: string
    patientName: string
    bloodGroup: string
    units: number
    locationLat?: number | null
    locationLng?: number | null
    locationAddress: string
    hospital?: string | null
    contact: string
    urgency: string
    requiredDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BloodRequestUncheckedCreateInput = {
    id?: string
    requesterPhone: string
    patientName: string
    bloodGroup: string
    units: number
    locationLat?: number | null
    locationLng?: number | null
    locationAddress: string
    hospital?: string | null
    contact: string
    urgency: string
    requiredDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BloodRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterPhone?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: StringFieldUpdateOperationsInput | string
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    requiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterPhone?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: StringFieldUpdateOperationsInput | string
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    requiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestCreateManyInput = {
    id?: string
    requesterPhone: string
    patientName: string
    bloodGroup: string
    units: number
    locationLat?: number | null
    locationLng?: number | null
    locationAddress: string
    hospital?: string | null
    contact: string
    urgency: string
    requiredDate?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BloodRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterPhone?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: StringFieldUpdateOperationsInput | string
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    requiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BloodRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterPhone?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    bloodGroup?: StringFieldUpdateOperationsInput | string
    units?: IntFieldUpdateOperationsInput | number
    locationLat?: NullableFloatFieldUpdateOperationsInput | number | null
    locationLng?: NullableFloatFieldUpdateOperationsInput | number | null
    locationAddress?: StringFieldUpdateOperationsInput | string
    hospital?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    requiredDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DonorCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    bloodType?: SortOrder
    city?: SortOrder
    email?: SortOrder
    healthConditions?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationAddress?: SortOrder
    lastDonationDate?: SortOrder
    isAvailable?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorAvgOrderByAggregateInput = {
    locationLat?: SortOrder
    locationLng?: SortOrder
  }

  export type DonorMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    bloodType?: SortOrder
    city?: SortOrder
    email?: SortOrder
    healthConditions?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationAddress?: SortOrder
    lastDonationDate?: SortOrder
    isAvailable?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    bloodType?: SortOrder
    city?: SortOrder
    email?: SortOrder
    healthConditions?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationAddress?: SortOrder
    lastDonationDate?: SortOrder
    isAvailable?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DonorSumOrderByAggregateInput = {
    locationLat?: SortOrder
    locationLng?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PhoneOTPCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneOTPMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneOTPMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BloodRequestCountOrderByAggregateInput = {
    id?: SortOrder
    requesterPhone?: SortOrder
    patientName?: SortOrder
    bloodGroup?: SortOrder
    units?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationAddress?: SortOrder
    hospital?: SortOrder
    contact?: SortOrder
    urgency?: SortOrder
    requiredDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BloodRequestAvgOrderByAggregateInput = {
    units?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
  }

  export type BloodRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    requesterPhone?: SortOrder
    patientName?: SortOrder
    bloodGroup?: SortOrder
    units?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationAddress?: SortOrder
    hospital?: SortOrder
    contact?: SortOrder
    urgency?: SortOrder
    requiredDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BloodRequestMinOrderByAggregateInput = {
    id?: SortOrder
    requesterPhone?: SortOrder
    patientName?: SortOrder
    bloodGroup?: SortOrder
    units?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
    locationAddress?: SortOrder
    hospital?: SortOrder
    contact?: SortOrder
    urgency?: SortOrder
    requiredDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BloodRequestSumOrderByAggregateInput = {
    units?: SortOrder
    locationLat?: SortOrder
    locationLng?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}