
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model certificate
 * 
 */
export type certificate = $Result.DefaultSelection<Prisma.$certificatePayload>
/**
 * Model student
 * 
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>
/**
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model internship
 * 
 */
export type internship = $Result.DefaultSelection<Prisma.$internshipPayload>
/**
 * Model skill
 * 
 */
export type skill = $Result.DefaultSelection<Prisma.$skillPayload>
/**
 * Model studentSkill
 * 
 */
export type studentSkill = $Result.DefaultSelection<Prisma.$studentSkillPayload>
/**
 * Model internshipSkill
 * 
 */
export type internshipSkill = $Result.DefaultSelection<Prisma.$internshipSkillPayload>
/**
 * Model internshipSkillRequirement
 * 
 */
export type internshipSkillRequirement = $Result.DefaultSelection<Prisma.$internshipSkillRequirementPayload>
/**
 * Model courseResource
 * 
 */
export type courseResource = $Result.DefaultSelection<Prisma.$courseResourcePayload>
/**
 * Model studentCourseProgress
 * 
 */
export type studentCourseProgress = $Result.DefaultSelection<Prisma.$studentCourseProgressPayload>
/**
 * Model chatSession
 * 
 */
export type chatSession = $Result.DefaultSelection<Prisma.$chatSessionPayload>
/**
 * Model chatMessage
 * 
 */
export type chatMessage = $Result.DefaultSelection<Prisma.$chatMessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Certificates
 * const certificates = await prisma.certificate.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Certificates
   * const certificates = await prisma.certificate.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.certificate`: Exposes CRUD operations for the **certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.certificateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.studentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.internship`: Exposes CRUD operations for the **internship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Internships
    * const internships = await prisma.internship.findMany()
    * ```
    */
  get internship(): Prisma.internshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.skillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentSkill`: Exposes CRUD operations for the **studentSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentSkills
    * const studentSkills = await prisma.studentSkill.findMany()
    * ```
    */
  get studentSkill(): Prisma.studentSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.internshipSkill`: Exposes CRUD operations for the **internshipSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InternshipSkills
    * const internshipSkills = await prisma.internshipSkill.findMany()
    * ```
    */
  get internshipSkill(): Prisma.internshipSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.internshipSkillRequirement`: Exposes CRUD operations for the **internshipSkillRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InternshipSkillRequirements
    * const internshipSkillRequirements = await prisma.internshipSkillRequirement.findMany()
    * ```
    */
  get internshipSkillRequirement(): Prisma.internshipSkillRequirementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseResource`: Exposes CRUD operations for the **courseResource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseResources
    * const courseResources = await prisma.courseResource.findMany()
    * ```
    */
  get courseResource(): Prisma.courseResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentCourseProgress`: Exposes CRUD operations for the **studentCourseProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentCourseProgresses
    * const studentCourseProgresses = await prisma.studentCourseProgress.findMany()
    * ```
    */
  get studentCourseProgress(): Prisma.studentCourseProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **chatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.chatSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **chatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.chatMessageDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    certificate: 'certificate',
    student: 'student',
    company: 'company',
    internship: 'internship',
    skill: 'skill',
    studentSkill: 'studentSkill',
    internshipSkill: 'internshipSkill',
    internshipSkillRequirement: 'internshipSkillRequirement',
    courseResource: 'courseResource',
    studentCourseProgress: 'studentCourseProgress',
    chatSession: 'chatSession',
    chatMessage: 'chatMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "certificate" | "student" | "company" | "internship" | "skill" | "studentSkill" | "internshipSkill" | "internshipSkillRequirement" | "courseResource" | "studentCourseProgress" | "chatSession" | "chatMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      certificate: {
        payload: Prisma.$certificatePayload<ExtArgs>
        fields: Prisma.certificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.certificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.certificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>
          }
          findFirst: {
            args: Prisma.certificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.certificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>
          }
          findMany: {
            args: Prisma.certificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>[]
          }
          create: {
            args: Prisma.certificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>
          }
          createMany: {
            args: Prisma.certificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.certificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>[]
          }
          delete: {
            args: Prisma.certificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>
          }
          update: {
            args: Prisma.certificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>
          }
          deleteMany: {
            args: Prisma.certificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.certificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.certificateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>[]
          }
          upsert: {
            args: Prisma.certificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$certificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.certificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.certificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
      student: {
        payload: Prisma.$studentPayload<ExtArgs>
        fields: Prisma.studentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.studentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.studentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.companyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.companyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      internship: {
        payload: Prisma.$internshipPayload<ExtArgs>
        fields: Prisma.internshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.internshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.internshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipPayload>
          }
          findFirst: {
            args: Prisma.internshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.internshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipPayload>
          }
          findMany: {
            args: Prisma.internshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipPayload>[]
          }
          create: {
            args: Prisma.internshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipPayload>
          }
          createMany: {
            args: Prisma.internshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.internshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipPayload>[]
          }
          delete: {
            args: Prisma.internshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipPayload>
          }
          update: {
            args: Prisma.internshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipPayload>
          }
          deleteMany: {
            args: Prisma.internshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.internshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.internshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipPayload>[]
          }
          upsert: {
            args: Prisma.internshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipPayload>
          }
          aggregate: {
            args: Prisma.InternshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternship>
          }
          groupBy: {
            args: Prisma.internshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<InternshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.internshipCountArgs<ExtArgs>
            result: $Utils.Optional<InternshipCountAggregateOutputType> | number
          }
        }
      }
      skill: {
        payload: Prisma.$skillPayload<ExtArgs>
        fields: Prisma.skillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findFirst: {
            args: Prisma.skillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findMany: {
            args: Prisma.skillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          create: {
            args: Prisma.skillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          createMany: {
            args: Prisma.skillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.skillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          delete: {
            args: Prisma.skillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          update: {
            args: Prisma.skillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          deleteMany: {
            args: Prisma.skillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.skillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          upsert: {
            args: Prisma.skillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.skillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      studentSkill: {
        payload: Prisma.$studentSkillPayload<ExtArgs>
        fields: Prisma.studentSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentSkillPayload>
          }
          findFirst: {
            args: Prisma.studentSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentSkillPayload>
          }
          findMany: {
            args: Prisma.studentSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentSkillPayload>[]
          }
          create: {
            args: Prisma.studentSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentSkillPayload>
          }
          createMany: {
            args: Prisma.studentSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.studentSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentSkillPayload>[]
          }
          delete: {
            args: Prisma.studentSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentSkillPayload>
          }
          update: {
            args: Prisma.studentSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentSkillPayload>
          }
          deleteMany: {
            args: Prisma.studentSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.studentSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentSkillPayload>[]
          }
          upsert: {
            args: Prisma.studentSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentSkillPayload>
          }
          aggregate: {
            args: Prisma.StudentSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentSkill>
          }
          groupBy: {
            args: Prisma.studentSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentSkillCountArgs<ExtArgs>
            result: $Utils.Optional<StudentSkillCountAggregateOutputType> | number
          }
        }
      }
      internshipSkill: {
        payload: Prisma.$internshipSkillPayload<ExtArgs>
        fields: Prisma.internshipSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.internshipSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.internshipSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillPayload>
          }
          findFirst: {
            args: Prisma.internshipSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.internshipSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillPayload>
          }
          findMany: {
            args: Prisma.internshipSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillPayload>[]
          }
          create: {
            args: Prisma.internshipSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillPayload>
          }
          createMany: {
            args: Prisma.internshipSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.internshipSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillPayload>[]
          }
          delete: {
            args: Prisma.internshipSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillPayload>
          }
          update: {
            args: Prisma.internshipSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillPayload>
          }
          deleteMany: {
            args: Prisma.internshipSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.internshipSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.internshipSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillPayload>[]
          }
          upsert: {
            args: Prisma.internshipSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillPayload>
          }
          aggregate: {
            args: Prisma.InternshipSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternshipSkill>
          }
          groupBy: {
            args: Prisma.internshipSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<InternshipSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.internshipSkillCountArgs<ExtArgs>
            result: $Utils.Optional<InternshipSkillCountAggregateOutputType> | number
          }
        }
      }
      internshipSkillRequirement: {
        payload: Prisma.$internshipSkillRequirementPayload<ExtArgs>
        fields: Prisma.internshipSkillRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.internshipSkillRequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.internshipSkillRequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillRequirementPayload>
          }
          findFirst: {
            args: Prisma.internshipSkillRequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.internshipSkillRequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillRequirementPayload>
          }
          findMany: {
            args: Prisma.internshipSkillRequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillRequirementPayload>[]
          }
          create: {
            args: Prisma.internshipSkillRequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillRequirementPayload>
          }
          createMany: {
            args: Prisma.internshipSkillRequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.internshipSkillRequirementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillRequirementPayload>[]
          }
          delete: {
            args: Prisma.internshipSkillRequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillRequirementPayload>
          }
          update: {
            args: Prisma.internshipSkillRequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillRequirementPayload>
          }
          deleteMany: {
            args: Prisma.internshipSkillRequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.internshipSkillRequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.internshipSkillRequirementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillRequirementPayload>[]
          }
          upsert: {
            args: Prisma.internshipSkillRequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internshipSkillRequirementPayload>
          }
          aggregate: {
            args: Prisma.InternshipSkillRequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternshipSkillRequirement>
          }
          groupBy: {
            args: Prisma.internshipSkillRequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<InternshipSkillRequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.internshipSkillRequirementCountArgs<ExtArgs>
            result: $Utils.Optional<InternshipSkillRequirementCountAggregateOutputType> | number
          }
        }
      }
      courseResource: {
        payload: Prisma.$courseResourcePayload<ExtArgs>
        fields: Prisma.courseResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.courseResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.courseResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseResourcePayload>
          }
          findFirst: {
            args: Prisma.courseResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.courseResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseResourcePayload>
          }
          findMany: {
            args: Prisma.courseResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseResourcePayload>[]
          }
          create: {
            args: Prisma.courseResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseResourcePayload>
          }
          createMany: {
            args: Prisma.courseResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.courseResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseResourcePayload>[]
          }
          delete: {
            args: Prisma.courseResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseResourcePayload>
          }
          update: {
            args: Prisma.courseResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseResourcePayload>
          }
          deleteMany: {
            args: Prisma.courseResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.courseResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.courseResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseResourcePayload>[]
          }
          upsert: {
            args: Prisma.courseResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courseResourcePayload>
          }
          aggregate: {
            args: Prisma.CourseResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseResource>
          }
          groupBy: {
            args: Prisma.courseResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.courseResourceCountArgs<ExtArgs>
            result: $Utils.Optional<CourseResourceCountAggregateOutputType> | number
          }
        }
      }
      studentCourseProgress: {
        payload: Prisma.$studentCourseProgressPayload<ExtArgs>
        fields: Prisma.studentCourseProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentCourseProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentCourseProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentCourseProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentCourseProgressPayload>
          }
          findFirst: {
            args: Prisma.studentCourseProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentCourseProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentCourseProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentCourseProgressPayload>
          }
          findMany: {
            args: Prisma.studentCourseProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentCourseProgressPayload>[]
          }
          create: {
            args: Prisma.studentCourseProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentCourseProgressPayload>
          }
          createMany: {
            args: Prisma.studentCourseProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.studentCourseProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentCourseProgressPayload>[]
          }
          delete: {
            args: Prisma.studentCourseProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentCourseProgressPayload>
          }
          update: {
            args: Prisma.studentCourseProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentCourseProgressPayload>
          }
          deleteMany: {
            args: Prisma.studentCourseProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentCourseProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.studentCourseProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentCourseProgressPayload>[]
          }
          upsert: {
            args: Prisma.studentCourseProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentCourseProgressPayload>
          }
          aggregate: {
            args: Prisma.StudentCourseProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentCourseProgress>
          }
          groupBy: {
            args: Prisma.studentCourseProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentCourseProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentCourseProgressCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCourseProgressCountAggregateOutputType> | number
          }
        }
      }
      chatSession: {
        payload: Prisma.$chatSessionPayload<ExtArgs>
        fields: Prisma.chatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatSessionPayload>
          }
          findFirst: {
            args: Prisma.chatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatSessionPayload>
          }
          findMany: {
            args: Prisma.chatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatSessionPayload>[]
          }
          create: {
            args: Prisma.chatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatSessionPayload>
          }
          createMany: {
            args: Prisma.chatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatSessionPayload>[]
          }
          delete: {
            args: Prisma.chatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatSessionPayload>
          }
          update: {
            args: Prisma.chatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatSessionPayload>
          }
          deleteMany: {
            args: Prisma.chatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatSessionPayload>[]
          }
          upsert: {
            args: Prisma.chatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.chatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
      chatMessage: {
        payload: Prisma.$chatMessagePayload<ExtArgs>
        fields: Prisma.chatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>
          }
          findFirst: {
            args: Prisma.chatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>
          }
          findMany: {
            args: Prisma.chatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>[]
          }
          create: {
            args: Prisma.chatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>
          }
          createMany: {
            args: Prisma.chatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>[]
          }
          delete: {
            args: Prisma.chatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>
          }
          update: {
            args: Prisma.chatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>
          }
          deleteMany: {
            args: Prisma.chatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>[]
          }
          upsert: {
            args: Prisma.chatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.chatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    certificate?: certificateOmit
    student?: studentOmit
    company?: companyOmit
    internship?: internshipOmit
    skill?: skillOmit
    studentSkill?: studentSkillOmit
    internshipSkill?: internshipSkillOmit
    internshipSkillRequirement?: internshipSkillRequirementOmit
    courseResource?: courseResourceOmit
    studentCourseProgress?: studentCourseProgressOmit
    chatSession?: chatSessionOmit
    chatMessage?: chatMessageOmit
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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    skills: number
    courseProgress: number
    chatSessions: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | StudentCountOutputTypeCountSkillsArgs
    courseProgress?: boolean | StudentCountOutputTypeCountCourseProgressArgs
    chatSessions?: boolean | StudentCountOutputTypeCountChatSessionsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentSkillWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountCourseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentCourseProgressWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountChatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatSessionWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    internships: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internships?: boolean | CompanyCountOutputTypeCountInternshipsArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountInternshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: internshipWhereInput
  }


  /**
   * Count Type InternshipCountOutputType
   */

  export type InternshipCountOutputType = {
    requiredSkills: number
    skillRequirements: number
  }

  export type InternshipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requiredSkills?: boolean | InternshipCountOutputTypeCountRequiredSkillsArgs
    skillRequirements?: boolean | InternshipCountOutputTypeCountSkillRequirementsArgs
  }

  // Custom InputTypes
  /**
   * InternshipCountOutputType without action
   */
  export type InternshipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InternshipCountOutputType
     */
    select?: InternshipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InternshipCountOutputType without action
   */
  export type InternshipCountOutputTypeCountRequiredSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: internshipSkillWhereInput
  }

  /**
   * InternshipCountOutputType without action
   */
  export type InternshipCountOutputTypeCountSkillRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: internshipSkillRequirementWhereInput
  }


  /**
   * Count Type SkillCountOutputType
   */

  export type SkillCountOutputType = {
    studentSkills: number
    internshipSkills: number
    internshipSkillRequirements: number
    courseResources: number
  }

  export type SkillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentSkills?: boolean | SkillCountOutputTypeCountStudentSkillsArgs
    internshipSkills?: boolean | SkillCountOutputTypeCountInternshipSkillsArgs
    internshipSkillRequirements?: boolean | SkillCountOutputTypeCountInternshipSkillRequirementsArgs
    courseResources?: boolean | SkillCountOutputTypeCountCourseResourcesArgs
  }

  // Custom InputTypes
  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillCountOutputType
     */
    select?: SkillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountStudentSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentSkillWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountInternshipSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: internshipSkillWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountInternshipSkillRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: internshipSkillRequirementWhereInput
  }

  /**
   * SkillCountOutputType without action
   */
  export type SkillCountOutputTypeCountCourseResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseResourceWhereInput
  }


  /**
   * Count Type CourseResourceCountOutputType
   */

  export type CourseResourceCountOutputType = {
    studentProgress: number
  }

  export type CourseResourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentProgress?: boolean | CourseResourceCountOutputTypeCountStudentProgressArgs
  }

  // Custom InputTypes
  /**
   * CourseResourceCountOutputType without action
   */
  export type CourseResourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResourceCountOutputType
     */
    select?: CourseResourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseResourceCountOutputType without action
   */
  export type CourseResourceCountOutputTypeCountStudentProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentCourseProgressWhereInput
  }


  /**
   * Count Type ChatSessionCountOutputType
   */

  export type ChatSessionCountOutputType = {
    messages: number
  }

  export type ChatSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSessionCountOutputType
     */
    select?: ChatSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateAvgAggregateOutputType = {
    id: number | null
    durationMonths: number | null
    experienceRating: number | null
  }

  export type CertificateSumAggregateOutputType = {
    id: number | null
    durationMonths: number | null
    experienceRating: number | null
  }

  export type CertificateMinAggregateOutputType = {
    id: number | null
    studentName: string | null
    companyName: string | null
    certificateFile: string | null
    durationMonths: number | null
    experienceRating: number | null
    createdAt: Date | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: number | null
    studentName: string | null
    companyName: string | null
    certificateFile: string | null
    durationMonths: number | null
    experienceRating: number | null
    createdAt: Date | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    studentName: number
    companyName: number
    certificateFile: number
    durationMonths: number
    experienceRating: number
    createdAt: number
    _all: number
  }


  export type CertificateAvgAggregateInputType = {
    id?: true
    durationMonths?: true
    experienceRating?: true
  }

  export type CertificateSumAggregateInputType = {
    id?: true
    durationMonths?: true
    experienceRating?: true
  }

  export type CertificateMinAggregateInputType = {
    id?: true
    studentName?: true
    companyName?: true
    certificateFile?: true
    durationMonths?: true
    experienceRating?: true
    createdAt?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    studentName?: true
    companyName?: true
    certificateFile?: true
    durationMonths?: true
    experienceRating?: true
    createdAt?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    studentName?: true
    companyName?: true
    certificateFile?: true
    durationMonths?: true
    experienceRating?: true
    createdAt?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which certificate to aggregate.
     */
    where?: certificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of certificates to fetch.
     */
    orderBy?: certificateOrderByWithRelationInput | certificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: certificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type certificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: certificateWhereInput
    orderBy?: certificateOrderByWithAggregationInput | certificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: certificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _avg?: CertificateAvgAggregateInputType
    _sum?: CertificateSumAggregateInputType
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: number
    studentName: string
    companyName: string
    certificateFile: string
    durationMonths: number
    experienceRating: number
    createdAt: Date
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends certificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type certificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentName?: boolean
    companyName?: boolean
    certificateFile?: boolean
    durationMonths?: boolean
    experienceRating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["certificate"]>

  export type certificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentName?: boolean
    companyName?: boolean
    certificateFile?: boolean
    durationMonths?: boolean
    experienceRating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["certificate"]>

  export type certificateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentName?: boolean
    companyName?: boolean
    certificateFile?: boolean
    durationMonths?: boolean
    experienceRating?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["certificate"]>

  export type certificateSelectScalar = {
    id?: boolean
    studentName?: boolean
    companyName?: boolean
    certificateFile?: boolean
    durationMonths?: boolean
    experienceRating?: boolean
    createdAt?: boolean
  }

  export type certificateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentName" | "companyName" | "certificateFile" | "durationMonths" | "experienceRating" | "createdAt", ExtArgs["result"]["certificate"]>

  export type $certificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "certificate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentName: string
      companyName: string
      certificateFile: string
      durationMonths: number
      experienceRating: number
      createdAt: Date
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type certificateGetPayload<S extends boolean | null | undefined | certificateDefaultArgs> = $Result.GetResult<Prisma.$certificatePayload, S>

  type certificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<certificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface certificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['certificate'], meta: { name: 'certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {certificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends certificateFindUniqueArgs>(args: SelectSubset<T, certificateFindUniqueArgs<ExtArgs>>): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {certificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends certificateFindUniqueOrThrowArgs>(args: SelectSubset<T, certificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends certificateFindFirstArgs>(args?: SelectSubset<T, certificateFindFirstArgs<ExtArgs>>): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends certificateFindFirstOrThrowArgs>(args?: SelectSubset<T, certificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends certificateFindManyArgs>(args?: SelectSubset<T, certificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificate.
     * @param {certificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends certificateCreateArgs>(args: SelectSubset<T, certificateCreateArgs<ExtArgs>>): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificates.
     * @param {certificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends certificateCreateManyArgs>(args?: SelectSubset<T, certificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {certificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends certificateCreateManyAndReturnArgs>(args?: SelectSubset<T, certificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificate.
     * @param {certificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends certificateDeleteArgs>(args: SelectSubset<T, certificateDeleteArgs<ExtArgs>>): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificate.
     * @param {certificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends certificateUpdateArgs>(args: SelectSubset<T, certificateUpdateArgs<ExtArgs>>): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificates.
     * @param {certificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends certificateDeleteManyArgs>(args?: SelectSubset<T, certificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends certificateUpdateManyArgs>(args: SelectSubset<T, certificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates and returns the data updated in the database.
     * @param {certificateUpdateManyAndReturnArgs} args - Arguments to update many Certificates.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.updateManyAndReturn({
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
    updateManyAndReturn<T extends certificateUpdateManyAndReturnArgs>(args: SelectSubset<T, certificateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificate.
     * @param {certificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends certificateUpsertArgs>(args: SelectSubset<T, certificateUpsertArgs<ExtArgs>>): Prisma__certificateClient<$Result.GetResult<Prisma.$certificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends certificateCountArgs>(
      args?: Subset<T, certificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {certificateGroupByArgs} args - Group by arguments.
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
      T extends certificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: certificateGroupByArgs['orderBy'] }
        : { orderBy?: certificateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, certificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the certificate model
   */
  readonly fields: certificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__certificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the certificate model
   */
  interface certificateFieldRefs {
    readonly id: FieldRef<"certificate", 'Int'>
    readonly studentName: FieldRef<"certificate", 'String'>
    readonly companyName: FieldRef<"certificate", 'String'>
    readonly certificateFile: FieldRef<"certificate", 'String'>
    readonly durationMonths: FieldRef<"certificate", 'Int'>
    readonly experienceRating: FieldRef<"certificate", 'Int'>
    readonly createdAt: FieldRef<"certificate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * certificate findUnique
   */
  export type certificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificate
     */
    omit?: certificateOmit<ExtArgs> | null
    /**
     * Filter, which certificate to fetch.
     */
    where: certificateWhereUniqueInput
  }

  /**
   * certificate findUniqueOrThrow
   */
  export type certificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificate
     */
    omit?: certificateOmit<ExtArgs> | null
    /**
     * Filter, which certificate to fetch.
     */
    where: certificateWhereUniqueInput
  }

  /**
   * certificate findFirst
   */
  export type certificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificate
     */
    omit?: certificateOmit<ExtArgs> | null
    /**
     * Filter, which certificate to fetch.
     */
    where?: certificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of certificates to fetch.
     */
    orderBy?: certificateOrderByWithRelationInput | certificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for certificates.
     */
    cursor?: certificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * certificate findFirstOrThrow
   */
  export type certificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificate
     */
    omit?: certificateOmit<ExtArgs> | null
    /**
     * Filter, which certificate to fetch.
     */
    where?: certificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of certificates to fetch.
     */
    orderBy?: certificateOrderByWithRelationInput | certificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for certificates.
     */
    cursor?: certificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * certificate findMany
   */
  export type certificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificate
     */
    omit?: certificateOmit<ExtArgs> | null
    /**
     * Filter, which certificates to fetch.
     */
    where?: certificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of certificates to fetch.
     */
    orderBy?: certificateOrderByWithRelationInput | certificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing certificates.
     */
    cursor?: certificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * certificate create
   */
  export type certificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificate
     */
    omit?: certificateOmit<ExtArgs> | null
    /**
     * The data needed to create a certificate.
     */
    data: XOR<certificateCreateInput, certificateUncheckedCreateInput>
  }

  /**
   * certificate createMany
   */
  export type certificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many certificates.
     */
    data: certificateCreateManyInput | certificateCreateManyInput[]
  }

  /**
   * certificate createManyAndReturn
   */
  export type certificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the certificate
     */
    omit?: certificateOmit<ExtArgs> | null
    /**
     * The data used to create many certificates.
     */
    data: certificateCreateManyInput | certificateCreateManyInput[]
  }

  /**
   * certificate update
   */
  export type certificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificate
     */
    omit?: certificateOmit<ExtArgs> | null
    /**
     * The data needed to update a certificate.
     */
    data: XOR<certificateUpdateInput, certificateUncheckedUpdateInput>
    /**
     * Choose, which certificate to update.
     */
    where: certificateWhereUniqueInput
  }

  /**
   * certificate updateMany
   */
  export type certificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update certificates.
     */
    data: XOR<certificateUpdateManyMutationInput, certificateUncheckedUpdateManyInput>
    /**
     * Filter which certificates to update
     */
    where?: certificateWhereInput
    /**
     * Limit how many certificates to update.
     */
    limit?: number
  }

  /**
   * certificate updateManyAndReturn
   */
  export type certificateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the certificate
     */
    omit?: certificateOmit<ExtArgs> | null
    /**
     * The data used to update certificates.
     */
    data: XOR<certificateUpdateManyMutationInput, certificateUncheckedUpdateManyInput>
    /**
     * Filter which certificates to update
     */
    where?: certificateWhereInput
    /**
     * Limit how many certificates to update.
     */
    limit?: number
  }

  /**
   * certificate upsert
   */
  export type certificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificate
     */
    omit?: certificateOmit<ExtArgs> | null
    /**
     * The filter to search for the certificate to update in case it exists.
     */
    where: certificateWhereUniqueInput
    /**
     * In case the certificate found by the `where` argument doesn't exist, create a new certificate with this data.
     */
    create: XOR<certificateCreateInput, certificateUncheckedCreateInput>
    /**
     * In case the certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<certificateUpdateInput, certificateUncheckedUpdateInput>
  }

  /**
   * certificate delete
   */
  export type certificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificate
     */
    omit?: certificateOmit<ExtArgs> | null
    /**
     * Filter which certificate to delete.
     */
    where: certificateWhereUniqueInput
  }

  /**
   * certificate deleteMany
   */
  export type certificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which certificates to delete
     */
    where?: certificateWhereInput
    /**
     * Limit how many certificates to delete.
     */
    limit?: number
  }

  /**
   * certificate without action
   */
  export type certificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the certificate
     */
    select?: certificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the certificate
     */
    omit?: certificateOmit<ExtArgs> | null
  }


  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    name: string | null
    studentId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phone: string | null
    country: string | null
    dateOfBirth: Date | null
    gender: string | null
    resume: string | null
    universityName: string | null
    university: string | null
    degree: string | null
    department: string | null
    semester: string | null
    cgpa: string | null
    graduationYear: string | null
    experience: string | null
    locationPreferences: string | null
    sectorPreferences: string | null
    additionalInformation: string | null
    targetRole: string | null
    bio: string | null
    interests: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    studentId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phone: string | null
    country: string | null
    dateOfBirth: Date | null
    gender: string | null
    resume: string | null
    universityName: string | null
    university: string | null
    degree: string | null
    department: string | null
    semester: string | null
    cgpa: string | null
    graduationYear: string | null
    experience: string | null
    locationPreferences: string | null
    sectorPreferences: string | null
    additionalInformation: string | null
    targetRole: string | null
    bio: string | null
    interests: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    studentId: number
    firstName: number
    lastName: number
    email: number
    password: number
    phone: number
    country: number
    dateOfBirth: number
    gender: number
    resume: number
    universityName: number
    university: number
    degree: number
    department: number
    semester: number
    cgpa: number
    graduationYear: number
    experience: number
    locationPreferences: number
    sectorPreferences: number
    additionalInformation: number
    targetRole: number
    bio: number
    interests: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    studentId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
    country?: true
    dateOfBirth?: true
    gender?: true
    resume?: true
    universityName?: true
    university?: true
    degree?: true
    department?: true
    semester?: true
    cgpa?: true
    graduationYear?: true
    experience?: true
    locationPreferences?: true
    sectorPreferences?: true
    additionalInformation?: true
    targetRole?: true
    bio?: true
    interests?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    studentId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
    country?: true
    dateOfBirth?: true
    gender?: true
    resume?: true
    universityName?: true
    university?: true
    degree?: true
    department?: true
    semester?: true
    cgpa?: true
    graduationYear?: true
    experience?: true
    locationPreferences?: true
    sectorPreferences?: true
    additionalInformation?: true
    targetRole?: true
    bio?: true
    interests?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    studentId?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
    country?: true
    dateOfBirth?: true
    gender?: true
    resume?: true
    universityName?: true
    university?: true
    degree?: true
    department?: true
    semester?: true
    cgpa?: true
    graduationYear?: true
    experience?: true
    locationPreferences?: true
    sectorPreferences?: true
    additionalInformation?: true
    targetRole?: true
    bio?: true
    interests?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: studentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    name: string | null
    studentId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phone: string | null
    country: string | null
    dateOfBirth: Date | null
    gender: string | null
    resume: string | null
    universityName: string | null
    university: string | null
    degree: string | null
    department: string | null
    semester: string | null
    cgpa: string | null
    graduationYear: string | null
    experience: string | null
    locationPreferences: string | null
    sectorPreferences: string | null
    additionalInformation: string | null
    targetRole: string | null
    bio: string | null
    interests: string | null
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    studentId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    country?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    resume?: boolean
    universityName?: boolean
    university?: boolean
    degree?: boolean
    department?: boolean
    semester?: boolean
    cgpa?: boolean
    graduationYear?: boolean
    experience?: boolean
    locationPreferences?: boolean
    sectorPreferences?: boolean
    additionalInformation?: boolean
    targetRole?: boolean
    bio?: boolean
    interests?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean | student$skillsArgs<ExtArgs>
    courseProgress?: boolean | student$courseProgressArgs<ExtArgs>
    chatSessions?: boolean | student$chatSessionsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    studentId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    country?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    resume?: boolean
    universityName?: boolean
    university?: boolean
    degree?: boolean
    department?: boolean
    semester?: boolean
    cgpa?: boolean
    graduationYear?: boolean
    experience?: boolean
    locationPreferences?: boolean
    sectorPreferences?: boolean
    additionalInformation?: boolean
    targetRole?: boolean
    bio?: boolean
    interests?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type studentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    studentId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    country?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    resume?: boolean
    universityName?: boolean
    university?: boolean
    degree?: boolean
    department?: boolean
    semester?: boolean
    cgpa?: boolean
    graduationYear?: boolean
    experience?: boolean
    locationPreferences?: boolean
    sectorPreferences?: boolean
    additionalInformation?: boolean
    targetRole?: boolean
    bio?: boolean
    interests?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type studentSelectScalar = {
    id?: boolean
    name?: boolean
    studentId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    country?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    resume?: boolean
    universityName?: boolean
    university?: boolean
    degree?: boolean
    department?: boolean
    semester?: boolean
    cgpa?: boolean
    graduationYear?: boolean
    experience?: boolean
    locationPreferences?: boolean
    sectorPreferences?: boolean
    additionalInformation?: boolean
    targetRole?: boolean
    bio?: boolean
    interests?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type studentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "studentId" | "firstName" | "lastName" | "email" | "password" | "phone" | "country" | "dateOfBirth" | "gender" | "resume" | "universityName" | "university" | "degree" | "department" | "semester" | "cgpa" | "graduationYear" | "experience" | "locationPreferences" | "sectorPreferences" | "additionalInformation" | "targetRole" | "bio" | "interests" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | student$skillsArgs<ExtArgs>
    courseProgress?: boolean | student$courseProgressArgs<ExtArgs>
    chatSessions?: boolean | student$chatSessionsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type studentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type studentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student"
    objects: {
      skills: Prisma.$studentSkillPayload<ExtArgs>[]
      courseProgress: Prisma.$studentCourseProgressPayload<ExtArgs>[]
      chatSessions: Prisma.$chatSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      studentId: string | null
      firstName: string | null
      lastName: string | null
      email: string | null
      password: string | null
      phone: string | null
      country: string | null
      dateOfBirth: Date | null
      gender: string | null
      resume: string | null
      universityName: string | null
      university: string | null
      degree: string | null
      department: string | null
      semester: string | null
      cgpa: string | null
      graduationYear: string | null
      experience: string | null
      locationPreferences: string | null
      sectorPreferences: string | null
      additionalInformation: string | null
      targetRole: string | null
      bio: string | null
      interests: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<Prisma.$studentPayload, S>

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student'], meta: { name: 'student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentFindUniqueArgs>(args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs>(args: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentFindFirstArgs>(args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs>(args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends studentFindManyArgs>(args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends studentCreateArgs>(args: SelectSubset<T, studentCreateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentCreateManyArgs>(args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {studentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends studentCreateManyAndReturnArgs>(args?: SelectSubset<T, studentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends studentDeleteArgs>(args: SelectSubset<T, studentDeleteArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentUpdateArgs>(args: SelectSubset<T, studentUpdateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentDeleteManyArgs>(args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentUpdateManyArgs>(args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {studentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends studentUpdateManyAndReturnArgs>(args: SelectSubset<T, studentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends studentUpsertArgs>(args: SelectSubset<T, studentUpsertArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
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
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student model
   */
  readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends student$skillsArgs<ExtArgs> = {}>(args?: Subset<T, student$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseProgress<T extends student$courseProgressArgs<ExtArgs> = {}>(args?: Subset<T, student$courseProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatSessions<T extends student$chatSessionsArgs<ExtArgs> = {}>(args?: Subset<T, student$chatSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly id: FieldRef<"student", 'Int'>
    readonly name: FieldRef<"student", 'String'>
    readonly studentId: FieldRef<"student", 'String'>
    readonly firstName: FieldRef<"student", 'String'>
    readonly lastName: FieldRef<"student", 'String'>
    readonly email: FieldRef<"student", 'String'>
    readonly password: FieldRef<"student", 'String'>
    readonly phone: FieldRef<"student", 'String'>
    readonly country: FieldRef<"student", 'String'>
    readonly dateOfBirth: FieldRef<"student", 'DateTime'>
    readonly gender: FieldRef<"student", 'String'>
    readonly resume: FieldRef<"student", 'String'>
    readonly universityName: FieldRef<"student", 'String'>
    readonly university: FieldRef<"student", 'String'>
    readonly degree: FieldRef<"student", 'String'>
    readonly department: FieldRef<"student", 'String'>
    readonly semester: FieldRef<"student", 'String'>
    readonly cgpa: FieldRef<"student", 'String'>
    readonly graduationYear: FieldRef<"student", 'String'>
    readonly experience: FieldRef<"student", 'String'>
    readonly locationPreferences: FieldRef<"student", 'String'>
    readonly sectorPreferences: FieldRef<"student", 'String'>
    readonly additionalInformation: FieldRef<"student", 'String'>
    readonly targetRole: FieldRef<"student", 'String'>
    readonly bio: FieldRef<"student", 'String'>
    readonly interests: FieldRef<"student", 'String'>
    readonly createdAt: FieldRef<"student", 'DateTime'>
    readonly updatedAt: FieldRef<"student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>
  }

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
  }

  /**
   * student createManyAndReturn
   */
  export type studentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
  }

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * student updateManyAndReturn
   */
  export type studentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>
  }

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * student.skills
   */
  export type student$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillInclude<ExtArgs> | null
    where?: studentSkillWhereInput
    orderBy?: studentSkillOrderByWithRelationInput | studentSkillOrderByWithRelationInput[]
    cursor?: studentSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * student.courseProgress
   */
  export type student$courseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressInclude<ExtArgs> | null
    where?: studentCourseProgressWhereInput
    orderBy?: studentCourseProgressOrderByWithRelationInput | studentCourseProgressOrderByWithRelationInput[]
    cursor?: studentCourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentCourseProgressScalarFieldEnum | StudentCourseProgressScalarFieldEnum[]
  }

  /**
   * student.chatSessions
   */
  export type student$chatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatSession
     */
    select?: chatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatSession
     */
    omit?: chatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatSessionInclude<ExtArgs> | null
    where?: chatSessionWhereInput
    orderBy?: chatSessionOrderByWithRelationInput | chatSessionOrderByWithRelationInput[]
    cursor?: chatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
  }


  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    companyName: string | null
    email: string | null
    password: string | null
    registrationNumber: string | null
    industrySector: string | null
    companySize: string | null
    companyDescription: string | null
    companyWebsite: string | null
    contactPersonName: string | null
    designation: string | null
    phoneNumber: string | null
    officeAddress: string | null
    registrationCertificate: string | null
    gstCertificate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    companyName: string | null
    email: string | null
    password: string | null
    registrationNumber: string | null
    industrySector: string | null
    companySize: string | null
    companyDescription: string | null
    companyWebsite: string | null
    contactPersonName: string | null
    designation: string | null
    phoneNumber: string | null
    officeAddress: string | null
    registrationCertificate: string | null
    gstCertificate: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    companyName: number
    email: number
    password: number
    registrationNumber: number
    industrySector: number
    companySize: number
    companyDescription: number
    companyWebsite: number
    contactPersonName: number
    designation: number
    phoneNumber: number
    officeAddress: number
    registrationCertificate: number
    gstCertificate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    companyName?: true
    email?: true
    password?: true
    registrationNumber?: true
    industrySector?: true
    companySize?: true
    companyDescription?: true
    companyWebsite?: true
    contactPersonName?: true
    designation?: true
    phoneNumber?: true
    officeAddress?: true
    registrationCertificate?: true
    gstCertificate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    companyName?: true
    email?: true
    password?: true
    registrationNumber?: true
    industrySector?: true
    companySize?: true
    companyDescription?: true
    companyWebsite?: true
    contactPersonName?: true
    designation?: true
    phoneNumber?: true
    officeAddress?: true
    registrationCertificate?: true
    gstCertificate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    companyName?: true
    email?: true
    password?: true
    registrationNumber?: true
    industrySector?: true
    companySize?: true
    companyDescription?: true
    companyWebsite?: true
    contactPersonName?: true
    designation?: true
    phoneNumber?: true
    officeAddress?: true
    registrationCertificate?: true
    gstCertificate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    companyName: string
    email: string
    password: string
    registrationNumber: string | null
    industrySector: string | null
    companySize: string | null
    companyDescription: string | null
    companyWebsite: string | null
    contactPersonName: string | null
    designation: string | null
    phoneNumber: string | null
    officeAddress: string | null
    registrationCertificate: string | null
    gstCertificate: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    email?: boolean
    password?: boolean
    registrationNumber?: boolean
    industrySector?: boolean
    companySize?: boolean
    companyDescription?: boolean
    companyWebsite?: boolean
    contactPersonName?: boolean
    designation?: boolean
    phoneNumber?: boolean
    officeAddress?: boolean
    registrationCertificate?: boolean
    gstCertificate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    internships?: boolean | company$internshipsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type companySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    email?: boolean
    password?: boolean
    registrationNumber?: boolean
    industrySector?: boolean
    companySize?: boolean
    companyDescription?: boolean
    companyWebsite?: boolean
    contactPersonName?: boolean
    designation?: boolean
    phoneNumber?: boolean
    officeAddress?: boolean
    registrationCertificate?: boolean
    gstCertificate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    email?: boolean
    password?: boolean
    registrationNumber?: boolean
    industrySector?: boolean
    companySize?: boolean
    companyDescription?: boolean
    companyWebsite?: boolean
    contactPersonName?: boolean
    designation?: boolean
    phoneNumber?: boolean
    officeAddress?: boolean
    registrationCertificate?: boolean
    gstCertificate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type companySelectScalar = {
    id?: boolean
    companyName?: boolean
    email?: boolean
    password?: boolean
    registrationNumber?: boolean
    industrySector?: boolean
    companySize?: boolean
    companyDescription?: boolean
    companyWebsite?: boolean
    contactPersonName?: boolean
    designation?: boolean
    phoneNumber?: boolean
    officeAddress?: boolean
    registrationCertificate?: boolean
    gstCertificate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "email" | "password" | "registrationNumber" | "industrySector" | "companySize" | "companyDescription" | "companyWebsite" | "contactPersonName" | "designation" | "phoneNumber" | "officeAddress" | "registrationCertificate" | "gstCertificate" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internships?: boolean | company$internshipsArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type companyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type companyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {
      internships: Prisma.$internshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyName: string
      email: string
      password: string
      registrationNumber: string | null
      industrySector: string | null
      companySize: string | null
      companyDescription: string | null
      companyWebsite: string | null
      contactPersonName: string | null
      designation: string | null
      phoneNumber: string | null
      officeAddress: string | null
      registrationCertificate: string | null
      gstCertificate: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyFindUniqueArgs>(args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs>(args: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyFindFirstArgs>(args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs>(args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companyFindManyArgs>(args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends companyCreateArgs>(args: SelectSubset<T, companyCreateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyCreateManyArgs>(args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {companyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends companyCreateManyAndReturnArgs>(args?: SelectSubset<T, companyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends companyDeleteArgs>(args: SelectSubset<T, companyDeleteArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyUpdateArgs>(args: SelectSubset<T, companyUpdateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyDeleteManyArgs>(args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyUpdateManyArgs>(args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {companyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
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
    updateManyAndReturn<T extends companyUpdateManyAndReturnArgs>(args: SelectSubset<T, companyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends companyUpsertArgs>(args: SelectSubset<T, companyUpsertArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    internships<T extends company$internshipsArgs<ExtArgs> = {}>(args?: Subset<T, company$internshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<"company", 'Int'>
    readonly companyName: FieldRef<"company", 'String'>
    readonly email: FieldRef<"company", 'String'>
    readonly password: FieldRef<"company", 'String'>
    readonly registrationNumber: FieldRef<"company", 'String'>
    readonly industrySector: FieldRef<"company", 'String'>
    readonly companySize: FieldRef<"company", 'String'>
    readonly companyDescription: FieldRef<"company", 'String'>
    readonly companyWebsite: FieldRef<"company", 'String'>
    readonly contactPersonName: FieldRef<"company", 'String'>
    readonly designation: FieldRef<"company", 'String'>
    readonly phoneNumber: FieldRef<"company", 'String'>
    readonly officeAddress: FieldRef<"company", 'String'>
    readonly registrationCertificate: FieldRef<"company", 'String'>
    readonly gstCertificate: FieldRef<"company", 'String'>
    readonly createdAt: FieldRef<"company", 'DateTime'>
    readonly updatedAt: FieldRef<"company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>
  }

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
  }

  /**
   * company createManyAndReturn
   */
  export type companyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
  }

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company updateManyAndReturn
   */
  export type companyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * company.internships
   */
  export type company$internshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internship
     */
    select?: internshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internship
     */
    omit?: internshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipInclude<ExtArgs> | null
    where?: internshipWhereInput
    orderBy?: internshipOrderByWithRelationInput | internshipOrderByWithRelationInput[]
    cursor?: internshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InternshipScalarFieldEnum | InternshipScalarFieldEnum[]
  }

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
  }


  /**
   * Model internship
   */

  export type AggregateInternship = {
    _count: InternshipCountAggregateOutputType | null
    _avg: InternshipAvgAggregateOutputType | null
    _sum: InternshipSumAggregateOutputType | null
    _min: InternshipMinAggregateOutputType | null
    _max: InternshipMaxAggregateOutputType | null
  }

  export type InternshipAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
    durationMonths: number | null
    stipend: number | null
    numberOfPositions: number | null
  }

  export type InternshipSumAggregateOutputType = {
    id: number | null
    companyId: number | null
    durationMonths: number | null
    stipend: number | null
    numberOfPositions: number | null
  }

  export type InternshipMinAggregateOutputType = {
    id: number | null
    companyId: number | null
    title: string | null
    companyName: string | null
    department: string | null
    location: string | null
    workMode: string | null
    isRemote: boolean | null
    durationMonths: number | null
    duration: string | null
    stipend: number | null
    roleDescription: string | null
    learningOutcomes: string | null
    numberOfPositions: number | null
    minimumDegreeLevel: string | null
    preferredFieldOfStudy: string | null
    minimumGpaPercentage: string | null
    graduationYearRange: string | null
    additionalPreferences: string | null
    status: string | null
    skillTags: string | null
    applyUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InternshipMaxAggregateOutputType = {
    id: number | null
    companyId: number | null
    title: string | null
    companyName: string | null
    department: string | null
    location: string | null
    workMode: string | null
    isRemote: boolean | null
    durationMonths: number | null
    duration: string | null
    stipend: number | null
    roleDescription: string | null
    learningOutcomes: string | null
    numberOfPositions: number | null
    minimumDegreeLevel: string | null
    preferredFieldOfStudy: string | null
    minimumGpaPercentage: string | null
    graduationYearRange: string | null
    additionalPreferences: string | null
    status: string | null
    skillTags: string | null
    applyUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InternshipCountAggregateOutputType = {
    id: number
    companyId: number
    title: number
    companyName: number
    department: number
    location: number
    workMode: number
    isRemote: number
    durationMonths: number
    duration: number
    stipend: number
    roleDescription: number
    learningOutcomes: number
    numberOfPositions: number
    minimumDegreeLevel: number
    preferredFieldOfStudy: number
    minimumGpaPercentage: number
    graduationYearRange: number
    additionalPreferences: number
    status: number
    skillTags: number
    applyUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InternshipAvgAggregateInputType = {
    id?: true
    companyId?: true
    durationMonths?: true
    stipend?: true
    numberOfPositions?: true
  }

  export type InternshipSumAggregateInputType = {
    id?: true
    companyId?: true
    durationMonths?: true
    stipend?: true
    numberOfPositions?: true
  }

  export type InternshipMinAggregateInputType = {
    id?: true
    companyId?: true
    title?: true
    companyName?: true
    department?: true
    location?: true
    workMode?: true
    isRemote?: true
    durationMonths?: true
    duration?: true
    stipend?: true
    roleDescription?: true
    learningOutcomes?: true
    numberOfPositions?: true
    minimumDegreeLevel?: true
    preferredFieldOfStudy?: true
    minimumGpaPercentage?: true
    graduationYearRange?: true
    additionalPreferences?: true
    status?: true
    skillTags?: true
    applyUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InternshipMaxAggregateInputType = {
    id?: true
    companyId?: true
    title?: true
    companyName?: true
    department?: true
    location?: true
    workMode?: true
    isRemote?: true
    durationMonths?: true
    duration?: true
    stipend?: true
    roleDescription?: true
    learningOutcomes?: true
    numberOfPositions?: true
    minimumDegreeLevel?: true
    preferredFieldOfStudy?: true
    minimumGpaPercentage?: true
    graduationYearRange?: true
    additionalPreferences?: true
    status?: true
    skillTags?: true
    applyUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InternshipCountAggregateInputType = {
    id?: true
    companyId?: true
    title?: true
    companyName?: true
    department?: true
    location?: true
    workMode?: true
    isRemote?: true
    durationMonths?: true
    duration?: true
    stipend?: true
    roleDescription?: true
    learningOutcomes?: true
    numberOfPositions?: true
    minimumDegreeLevel?: true
    preferredFieldOfStudy?: true
    minimumGpaPercentage?: true
    graduationYearRange?: true
    additionalPreferences?: true
    status?: true
    skillTags?: true
    applyUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InternshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which internship to aggregate.
     */
    where?: internshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internships to fetch.
     */
    orderBy?: internshipOrderByWithRelationInput | internshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: internshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned internships
    **/
    _count?: true | InternshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InternshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InternshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InternshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InternshipMaxAggregateInputType
  }

  export type GetInternshipAggregateType<T extends InternshipAggregateArgs> = {
        [P in keyof T & keyof AggregateInternship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternship[P]>
      : GetScalarType<T[P], AggregateInternship[P]>
  }




  export type internshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: internshipWhereInput
    orderBy?: internshipOrderByWithAggregationInput | internshipOrderByWithAggregationInput[]
    by: InternshipScalarFieldEnum[] | InternshipScalarFieldEnum
    having?: internshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InternshipCountAggregateInputType | true
    _avg?: InternshipAvgAggregateInputType
    _sum?: InternshipSumAggregateInputType
    _min?: InternshipMinAggregateInputType
    _max?: InternshipMaxAggregateInputType
  }

  export type InternshipGroupByOutputType = {
    id: number
    companyId: number | null
    title: string
    companyName: string | null
    department: string | null
    location: string | null
    workMode: string | null
    isRemote: boolean
    durationMonths: number | null
    duration: string | null
    stipend: number | null
    roleDescription: string | null
    learningOutcomes: string | null
    numberOfPositions: number
    minimumDegreeLevel: string | null
    preferredFieldOfStudy: string | null
    minimumGpaPercentage: string | null
    graduationYearRange: string | null
    additionalPreferences: string | null
    status: string
    skillTags: string | null
    applyUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: InternshipCountAggregateOutputType | null
    _avg: InternshipAvgAggregateOutputType | null
    _sum: InternshipSumAggregateOutputType | null
    _min: InternshipMinAggregateOutputType | null
    _max: InternshipMaxAggregateOutputType | null
  }

  type GetInternshipGroupByPayload<T extends internshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InternshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InternshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InternshipGroupByOutputType[P]>
            : GetScalarType<T[P], InternshipGroupByOutputType[P]>
        }
      >
    >


  export type internshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    title?: boolean
    companyName?: boolean
    department?: boolean
    location?: boolean
    workMode?: boolean
    isRemote?: boolean
    durationMonths?: boolean
    duration?: boolean
    stipend?: boolean
    roleDescription?: boolean
    learningOutcomes?: boolean
    numberOfPositions?: boolean
    minimumDegreeLevel?: boolean
    preferredFieldOfStudy?: boolean
    minimumGpaPercentage?: boolean
    graduationYearRange?: boolean
    additionalPreferences?: boolean
    status?: boolean
    skillTags?: boolean
    applyUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | internship$companyArgs<ExtArgs>
    requiredSkills?: boolean | internship$requiredSkillsArgs<ExtArgs>
    skillRequirements?: boolean | internship$skillRequirementsArgs<ExtArgs>
    _count?: boolean | InternshipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internship"]>

  export type internshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    title?: boolean
    companyName?: boolean
    department?: boolean
    location?: boolean
    workMode?: boolean
    isRemote?: boolean
    durationMonths?: boolean
    duration?: boolean
    stipend?: boolean
    roleDescription?: boolean
    learningOutcomes?: boolean
    numberOfPositions?: boolean
    minimumDegreeLevel?: boolean
    preferredFieldOfStudy?: boolean
    minimumGpaPercentage?: boolean
    graduationYearRange?: boolean
    additionalPreferences?: boolean
    status?: boolean
    skillTags?: boolean
    applyUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | internship$companyArgs<ExtArgs>
  }, ExtArgs["result"]["internship"]>

  export type internshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyId?: boolean
    title?: boolean
    companyName?: boolean
    department?: boolean
    location?: boolean
    workMode?: boolean
    isRemote?: boolean
    durationMonths?: boolean
    duration?: boolean
    stipend?: boolean
    roleDescription?: boolean
    learningOutcomes?: boolean
    numberOfPositions?: boolean
    minimumDegreeLevel?: boolean
    preferredFieldOfStudy?: boolean
    minimumGpaPercentage?: boolean
    graduationYearRange?: boolean
    additionalPreferences?: boolean
    status?: boolean
    skillTags?: boolean
    applyUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    company?: boolean | internship$companyArgs<ExtArgs>
  }, ExtArgs["result"]["internship"]>

  export type internshipSelectScalar = {
    id?: boolean
    companyId?: boolean
    title?: boolean
    companyName?: boolean
    department?: boolean
    location?: boolean
    workMode?: boolean
    isRemote?: boolean
    durationMonths?: boolean
    duration?: boolean
    stipend?: boolean
    roleDescription?: boolean
    learningOutcomes?: boolean
    numberOfPositions?: boolean
    minimumDegreeLevel?: boolean
    preferredFieldOfStudy?: boolean
    minimumGpaPercentage?: boolean
    graduationYearRange?: boolean
    additionalPreferences?: boolean
    status?: boolean
    skillTags?: boolean
    applyUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type internshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyId" | "title" | "companyName" | "department" | "location" | "workMode" | "isRemote" | "durationMonths" | "duration" | "stipend" | "roleDescription" | "learningOutcomes" | "numberOfPositions" | "minimumDegreeLevel" | "preferredFieldOfStudy" | "minimumGpaPercentage" | "graduationYearRange" | "additionalPreferences" | "status" | "skillTags" | "applyUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["internship"]>
  export type internshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | internship$companyArgs<ExtArgs>
    requiredSkills?: boolean | internship$requiredSkillsArgs<ExtArgs>
    skillRequirements?: boolean | internship$skillRequirementsArgs<ExtArgs>
    _count?: boolean | InternshipCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type internshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | internship$companyArgs<ExtArgs>
  }
  export type internshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | internship$companyArgs<ExtArgs>
  }

  export type $internshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "internship"
    objects: {
      company: Prisma.$companyPayload<ExtArgs> | null
      requiredSkills: Prisma.$internshipSkillPayload<ExtArgs>[]
      skillRequirements: Prisma.$internshipSkillRequirementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      companyId: number | null
      title: string
      companyName: string | null
      department: string | null
      location: string | null
      workMode: string | null
      isRemote: boolean
      durationMonths: number | null
      duration: string | null
      stipend: number | null
      roleDescription: string | null
      learningOutcomes: string | null
      numberOfPositions: number
      minimumDegreeLevel: string | null
      preferredFieldOfStudy: string | null
      minimumGpaPercentage: string | null
      graduationYearRange: string | null
      additionalPreferences: string | null
      status: string
      skillTags: string | null
      applyUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["internship"]>
    composites: {}
  }

  type internshipGetPayload<S extends boolean | null | undefined | internshipDefaultArgs> = $Result.GetResult<Prisma.$internshipPayload, S>

  type internshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<internshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InternshipCountAggregateInputType | true
    }

  export interface internshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['internship'], meta: { name: 'internship' } }
    /**
     * Find zero or one Internship that matches the filter.
     * @param {internshipFindUniqueArgs} args - Arguments to find a Internship
     * @example
     * // Get one Internship
     * const internship = await prisma.internship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends internshipFindUniqueArgs>(args: SelectSubset<T, internshipFindUniqueArgs<ExtArgs>>): Prisma__internshipClient<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Internship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {internshipFindUniqueOrThrowArgs} args - Arguments to find a Internship
     * @example
     * // Get one Internship
     * const internship = await prisma.internship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends internshipFindUniqueOrThrowArgs>(args: SelectSubset<T, internshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__internshipClient<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Internship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipFindFirstArgs} args - Arguments to find a Internship
     * @example
     * // Get one Internship
     * const internship = await prisma.internship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends internshipFindFirstArgs>(args?: SelectSubset<T, internshipFindFirstArgs<ExtArgs>>): Prisma__internshipClient<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Internship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipFindFirstOrThrowArgs} args - Arguments to find a Internship
     * @example
     * // Get one Internship
     * const internship = await prisma.internship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends internshipFindFirstOrThrowArgs>(args?: SelectSubset<T, internshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__internshipClient<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Internships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Internships
     * const internships = await prisma.internship.findMany()
     * 
     * // Get first 10 Internships
     * const internships = await prisma.internship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const internshipWithIdOnly = await prisma.internship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends internshipFindManyArgs>(args?: SelectSubset<T, internshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Internship.
     * @param {internshipCreateArgs} args - Arguments to create a Internship.
     * @example
     * // Create one Internship
     * const Internship = await prisma.internship.create({
     *   data: {
     *     // ... data to create a Internship
     *   }
     * })
     * 
     */
    create<T extends internshipCreateArgs>(args: SelectSubset<T, internshipCreateArgs<ExtArgs>>): Prisma__internshipClient<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Internships.
     * @param {internshipCreateManyArgs} args - Arguments to create many Internships.
     * @example
     * // Create many Internships
     * const internship = await prisma.internship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends internshipCreateManyArgs>(args?: SelectSubset<T, internshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Internships and returns the data saved in the database.
     * @param {internshipCreateManyAndReturnArgs} args - Arguments to create many Internships.
     * @example
     * // Create many Internships
     * const internship = await prisma.internship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Internships and only return the `id`
     * const internshipWithIdOnly = await prisma.internship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends internshipCreateManyAndReturnArgs>(args?: SelectSubset<T, internshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Internship.
     * @param {internshipDeleteArgs} args - Arguments to delete one Internship.
     * @example
     * // Delete one Internship
     * const Internship = await prisma.internship.delete({
     *   where: {
     *     // ... filter to delete one Internship
     *   }
     * })
     * 
     */
    delete<T extends internshipDeleteArgs>(args: SelectSubset<T, internshipDeleteArgs<ExtArgs>>): Prisma__internshipClient<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Internship.
     * @param {internshipUpdateArgs} args - Arguments to update one Internship.
     * @example
     * // Update one Internship
     * const internship = await prisma.internship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends internshipUpdateArgs>(args: SelectSubset<T, internshipUpdateArgs<ExtArgs>>): Prisma__internshipClient<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Internships.
     * @param {internshipDeleteManyArgs} args - Arguments to filter Internships to delete.
     * @example
     * // Delete a few Internships
     * const { count } = await prisma.internship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends internshipDeleteManyArgs>(args?: SelectSubset<T, internshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Internships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Internships
     * const internship = await prisma.internship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends internshipUpdateManyArgs>(args: SelectSubset<T, internshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Internships and returns the data updated in the database.
     * @param {internshipUpdateManyAndReturnArgs} args - Arguments to update many Internships.
     * @example
     * // Update many Internships
     * const internship = await prisma.internship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Internships and only return the `id`
     * const internshipWithIdOnly = await prisma.internship.updateManyAndReturn({
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
    updateManyAndReturn<T extends internshipUpdateManyAndReturnArgs>(args: SelectSubset<T, internshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Internship.
     * @param {internshipUpsertArgs} args - Arguments to update or create a Internship.
     * @example
     * // Update or create a Internship
     * const internship = await prisma.internship.upsert({
     *   create: {
     *     // ... data to create a Internship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Internship we want to update
     *   }
     * })
     */
    upsert<T extends internshipUpsertArgs>(args: SelectSubset<T, internshipUpsertArgs<ExtArgs>>): Prisma__internshipClient<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Internships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipCountArgs} args - Arguments to filter Internships to count.
     * @example
     * // Count the number of Internships
     * const count = await prisma.internship.count({
     *   where: {
     *     // ... the filter for the Internships we want to count
     *   }
     * })
    **/
    count<T extends internshipCountArgs>(
      args?: Subset<T, internshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InternshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Internship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InternshipAggregateArgs>(args: Subset<T, InternshipAggregateArgs>): Prisma.PrismaPromise<GetInternshipAggregateType<T>>

    /**
     * Group by Internship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipGroupByArgs} args - Group by arguments.
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
      T extends internshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: internshipGroupByArgs['orderBy'] }
        : { orderBy?: internshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, internshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the internship model
   */
  readonly fields: internshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for internship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__internshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends internship$companyArgs<ExtArgs> = {}>(args?: Subset<T, internship$companyArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    requiredSkills<T extends internship$requiredSkillsArgs<ExtArgs> = {}>(args?: Subset<T, internship$requiredSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skillRequirements<T extends internship$skillRequirementsArgs<ExtArgs> = {}>(args?: Subset<T, internship$skillRequirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipSkillRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the internship model
   */
  interface internshipFieldRefs {
    readonly id: FieldRef<"internship", 'Int'>
    readonly companyId: FieldRef<"internship", 'Int'>
    readonly title: FieldRef<"internship", 'String'>
    readonly companyName: FieldRef<"internship", 'String'>
    readonly department: FieldRef<"internship", 'String'>
    readonly location: FieldRef<"internship", 'String'>
    readonly workMode: FieldRef<"internship", 'String'>
    readonly isRemote: FieldRef<"internship", 'Boolean'>
    readonly durationMonths: FieldRef<"internship", 'Int'>
    readonly duration: FieldRef<"internship", 'String'>
    readonly stipend: FieldRef<"internship", 'Float'>
    readonly roleDescription: FieldRef<"internship", 'String'>
    readonly learningOutcomes: FieldRef<"internship", 'String'>
    readonly numberOfPositions: FieldRef<"internship", 'Int'>
    readonly minimumDegreeLevel: FieldRef<"internship", 'String'>
    readonly preferredFieldOfStudy: FieldRef<"internship", 'String'>
    readonly minimumGpaPercentage: FieldRef<"internship", 'String'>
    readonly graduationYearRange: FieldRef<"internship", 'String'>
    readonly additionalPreferences: FieldRef<"internship", 'String'>
    readonly status: FieldRef<"internship", 'String'>
    readonly skillTags: FieldRef<"internship", 'String'>
    readonly applyUrl: FieldRef<"internship", 'String'>
    readonly createdAt: FieldRef<"internship", 'DateTime'>
    readonly updatedAt: FieldRef<"internship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * internship findUnique
   */
  export type internshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internship
     */
    select?: internshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internship
     */
    omit?: internshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipInclude<ExtArgs> | null
    /**
     * Filter, which internship to fetch.
     */
    where: internshipWhereUniqueInput
  }

  /**
   * internship findUniqueOrThrow
   */
  export type internshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internship
     */
    select?: internshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internship
     */
    omit?: internshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipInclude<ExtArgs> | null
    /**
     * Filter, which internship to fetch.
     */
    where: internshipWhereUniqueInput
  }

  /**
   * internship findFirst
   */
  export type internshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internship
     */
    select?: internshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internship
     */
    omit?: internshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipInclude<ExtArgs> | null
    /**
     * Filter, which internship to fetch.
     */
    where?: internshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internships to fetch.
     */
    orderBy?: internshipOrderByWithRelationInput | internshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for internships.
     */
    cursor?: internshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of internships.
     */
    distinct?: InternshipScalarFieldEnum | InternshipScalarFieldEnum[]
  }

  /**
   * internship findFirstOrThrow
   */
  export type internshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internship
     */
    select?: internshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internship
     */
    omit?: internshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipInclude<ExtArgs> | null
    /**
     * Filter, which internship to fetch.
     */
    where?: internshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internships to fetch.
     */
    orderBy?: internshipOrderByWithRelationInput | internshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for internships.
     */
    cursor?: internshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of internships.
     */
    distinct?: InternshipScalarFieldEnum | InternshipScalarFieldEnum[]
  }

  /**
   * internship findMany
   */
  export type internshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internship
     */
    select?: internshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internship
     */
    omit?: internshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipInclude<ExtArgs> | null
    /**
     * Filter, which internships to fetch.
     */
    where?: internshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internships to fetch.
     */
    orderBy?: internshipOrderByWithRelationInput | internshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing internships.
     */
    cursor?: internshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internships.
     */
    skip?: number
    distinct?: InternshipScalarFieldEnum | InternshipScalarFieldEnum[]
  }

  /**
   * internship create
   */
  export type internshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internship
     */
    select?: internshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internship
     */
    omit?: internshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipInclude<ExtArgs> | null
    /**
     * The data needed to create a internship.
     */
    data: XOR<internshipCreateInput, internshipUncheckedCreateInput>
  }

  /**
   * internship createMany
   */
  export type internshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many internships.
     */
    data: internshipCreateManyInput | internshipCreateManyInput[]
  }

  /**
   * internship createManyAndReturn
   */
  export type internshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internship
     */
    select?: internshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the internship
     */
    omit?: internshipOmit<ExtArgs> | null
    /**
     * The data used to create many internships.
     */
    data: internshipCreateManyInput | internshipCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * internship update
   */
  export type internshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internship
     */
    select?: internshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internship
     */
    omit?: internshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipInclude<ExtArgs> | null
    /**
     * The data needed to update a internship.
     */
    data: XOR<internshipUpdateInput, internshipUncheckedUpdateInput>
    /**
     * Choose, which internship to update.
     */
    where: internshipWhereUniqueInput
  }

  /**
   * internship updateMany
   */
  export type internshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update internships.
     */
    data: XOR<internshipUpdateManyMutationInput, internshipUncheckedUpdateManyInput>
    /**
     * Filter which internships to update
     */
    where?: internshipWhereInput
    /**
     * Limit how many internships to update.
     */
    limit?: number
  }

  /**
   * internship updateManyAndReturn
   */
  export type internshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internship
     */
    select?: internshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the internship
     */
    omit?: internshipOmit<ExtArgs> | null
    /**
     * The data used to update internships.
     */
    data: XOR<internshipUpdateManyMutationInput, internshipUncheckedUpdateManyInput>
    /**
     * Filter which internships to update
     */
    where?: internshipWhereInput
    /**
     * Limit how many internships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * internship upsert
   */
  export type internshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internship
     */
    select?: internshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internship
     */
    omit?: internshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipInclude<ExtArgs> | null
    /**
     * The filter to search for the internship to update in case it exists.
     */
    where: internshipWhereUniqueInput
    /**
     * In case the internship found by the `where` argument doesn't exist, create a new internship with this data.
     */
    create: XOR<internshipCreateInput, internshipUncheckedCreateInput>
    /**
     * In case the internship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<internshipUpdateInput, internshipUncheckedUpdateInput>
  }

  /**
   * internship delete
   */
  export type internshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internship
     */
    select?: internshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internship
     */
    omit?: internshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipInclude<ExtArgs> | null
    /**
     * Filter which internship to delete.
     */
    where: internshipWhereUniqueInput
  }

  /**
   * internship deleteMany
   */
  export type internshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which internships to delete
     */
    where?: internshipWhereInput
    /**
     * Limit how many internships to delete.
     */
    limit?: number
  }

  /**
   * internship.company
   */
  export type internship$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    where?: companyWhereInput
  }

  /**
   * internship.requiredSkills
   */
  export type internship$requiredSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillInclude<ExtArgs> | null
    where?: internshipSkillWhereInput
    orderBy?: internshipSkillOrderByWithRelationInput | internshipSkillOrderByWithRelationInput[]
    cursor?: internshipSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InternshipSkillScalarFieldEnum | InternshipSkillScalarFieldEnum[]
  }

  /**
   * internship.skillRequirements
   */
  export type internship$skillRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementInclude<ExtArgs> | null
    where?: internshipSkillRequirementWhereInput
    orderBy?: internshipSkillRequirementOrderByWithRelationInput | internshipSkillRequirementOrderByWithRelationInput[]
    cursor?: internshipSkillRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InternshipSkillRequirementScalarFieldEnum | InternshipSkillRequirementScalarFieldEnum[]
  }

  /**
   * internship without action
   */
  export type internshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internship
     */
    select?: internshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internship
     */
    omit?: internshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipInclude<ExtArgs> | null
  }


  /**
   * Model skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    category: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill to aggregate.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type skillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillWhereInput
    orderBy?: skillOrderByWithAggregationInput | skillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: skillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    name: string
    category: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends skillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type skillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentSkills?: boolean | skill$studentSkillsArgs<ExtArgs>
    internshipSkills?: boolean | skill$internshipSkillsArgs<ExtArgs>
    internshipSkillRequirements?: boolean | skill$internshipSkillRequirementsArgs<ExtArgs>
    courseResources?: boolean | skill$courseResourcesArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type skillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type skillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type skillSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type skillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["skill"]>
  export type skillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentSkills?: boolean | skill$studentSkillsArgs<ExtArgs>
    internshipSkills?: boolean | skill$internshipSkillsArgs<ExtArgs>
    internshipSkillRequirements?: boolean | skill$internshipSkillRequirementsArgs<ExtArgs>
    courseResources?: boolean | skill$courseResourcesArgs<ExtArgs>
    _count?: boolean | SkillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type skillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type skillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skill"
    objects: {
      studentSkills: Prisma.$studentSkillPayload<ExtArgs>[]
      internshipSkills: Prisma.$internshipSkillPayload<ExtArgs>[]
      internshipSkillRequirements: Prisma.$internshipSkillRequirementPayload<ExtArgs>[]
      courseResources: Prisma.$courseResourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type skillGetPayload<S extends boolean | null | undefined | skillDefaultArgs> = $Result.GetResult<Prisma.$skillPayload, S>

  type skillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface skillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skill'], meta: { name: 'skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {skillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillFindUniqueArgs>(args: SelectSubset<T, skillFindUniqueArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillFindUniqueOrThrowArgs>(args: SelectSubset<T, skillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillFindFirstArgs>(args?: SelectSubset<T, skillFindFirstArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillFindFirstOrThrowArgs>(args?: SelectSubset<T, skillFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skillFindManyArgs>(args?: SelectSubset<T, skillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {skillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends skillCreateArgs>(args: SelectSubset<T, skillCreateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {skillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillCreateManyArgs>(args?: SelectSubset<T, skillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {skillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends skillCreateManyAndReturnArgs>(args?: SelectSubset<T, skillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {skillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends skillDeleteArgs>(args: SelectSubset<T, skillDeleteArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {skillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skillUpdateArgs>(args: SelectSubset<T, skillUpdateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {skillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillDeleteManyArgs>(args?: SelectSubset<T, skillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skillUpdateManyArgs>(args: SelectSubset<T, skillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {skillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
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
    updateManyAndReturn<T extends skillUpdateManyAndReturnArgs>(args: SelectSubset<T, skillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {skillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends skillUpsertArgs>(args: SelectSubset<T, skillUpsertArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends skillCountArgs>(
      args?: Subset<T, skillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillGroupByArgs} args - Group by arguments.
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
      T extends skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillGroupByArgs['orderBy'] }
        : { orderBy?: skillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skill model
   */
  readonly fields: skillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentSkills<T extends skill$studentSkillsArgs<ExtArgs> = {}>(args?: Subset<T, skill$studentSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    internshipSkills<T extends skill$internshipSkillsArgs<ExtArgs> = {}>(args?: Subset<T, skill$internshipSkillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    internshipSkillRequirements<T extends skill$internshipSkillRequirementsArgs<ExtArgs> = {}>(args?: Subset<T, skill$internshipSkillRequirementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipSkillRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseResources<T extends skill$courseResourcesArgs<ExtArgs> = {}>(args?: Subset<T, skill$courseResourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$courseResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the skill model
   */
  interface skillFieldRefs {
    readonly id: FieldRef<"skill", 'Int'>
    readonly name: FieldRef<"skill", 'String'>
    readonly category: FieldRef<"skill", 'String'>
    readonly description: FieldRef<"skill", 'String'>
    readonly createdAt: FieldRef<"skill", 'DateTime'>
    readonly updatedAt: FieldRef<"skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skill findUnique
   */
  export type skillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findUniqueOrThrow
   */
  export type skillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findFirst
   */
  export type skillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findFirstOrThrow
   */
  export type skillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findMany
   */
  export type skillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill create
   */
  export type skillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The data needed to create a skill.
     */
    data: XOR<skillCreateInput, skillUncheckedCreateInput>
  }

  /**
   * skill createMany
   */
  export type skillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skills.
     */
    data: skillCreateManyInput | skillCreateManyInput[]
  }

  /**
   * skill createManyAndReturn
   */
  export type skillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The data used to create many skills.
     */
    data: skillCreateManyInput | skillCreateManyInput[]
  }

  /**
   * skill update
   */
  export type skillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The data needed to update a skill.
     */
    data: XOR<skillUpdateInput, skillUncheckedUpdateInput>
    /**
     * Choose, which skill to update.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill updateMany
   */
  export type skillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
  }

  /**
   * skill updateManyAndReturn
   */
  export type skillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The data used to update skills.
     */
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
  }

  /**
   * skill upsert
   */
  export type skillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * The filter to search for the skill to update in case it exists.
     */
    where: skillWhereUniqueInput
    /**
     * In case the skill found by the `where` argument doesn't exist, create a new skill with this data.
     */
    create: XOR<skillCreateInput, skillUncheckedCreateInput>
    /**
     * In case the skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillUpdateInput, skillUncheckedUpdateInput>
  }

  /**
   * skill delete
   */
  export type skillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
    /**
     * Filter which skill to delete.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill deleteMany
   */
  export type skillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to delete
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to delete.
     */
    limit?: number
  }

  /**
   * skill.studentSkills
   */
  export type skill$studentSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillInclude<ExtArgs> | null
    where?: studentSkillWhereInput
    orderBy?: studentSkillOrderByWithRelationInput | studentSkillOrderByWithRelationInput[]
    cursor?: studentSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * skill.internshipSkills
   */
  export type skill$internshipSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillInclude<ExtArgs> | null
    where?: internshipSkillWhereInput
    orderBy?: internshipSkillOrderByWithRelationInput | internshipSkillOrderByWithRelationInput[]
    cursor?: internshipSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InternshipSkillScalarFieldEnum | InternshipSkillScalarFieldEnum[]
  }

  /**
   * skill.internshipSkillRequirements
   */
  export type skill$internshipSkillRequirementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementInclude<ExtArgs> | null
    where?: internshipSkillRequirementWhereInput
    orderBy?: internshipSkillRequirementOrderByWithRelationInput | internshipSkillRequirementOrderByWithRelationInput[]
    cursor?: internshipSkillRequirementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InternshipSkillRequirementScalarFieldEnum | InternshipSkillRequirementScalarFieldEnum[]
  }

  /**
   * skill.courseResources
   */
  export type skill$courseResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseResource
     */
    select?: courseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseResource
     */
    omit?: courseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseResourceInclude<ExtArgs> | null
    where?: courseResourceWhereInput
    orderBy?: courseResourceOrderByWithRelationInput | courseResourceOrderByWithRelationInput[]
    cursor?: courseResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseResourceScalarFieldEnum | CourseResourceScalarFieldEnum[]
  }

  /**
   * skill without action
   */
  export type skillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skillInclude<ExtArgs> | null
  }


  /**
   * Model studentSkill
   */

  export type AggregateStudentSkill = {
    _count: StudentSkillCountAggregateOutputType | null
    _avg: StudentSkillAvgAggregateOutputType | null
    _sum: StudentSkillSumAggregateOutputType | null
    _min: StudentSkillMinAggregateOutputType | null
    _max: StudentSkillMaxAggregateOutputType | null
  }

  export type StudentSkillAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    skillId: number | null
    level: number | null
    score: number | null
    chatScore: number | null
  }

  export type StudentSkillSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    skillId: number | null
    level: number | null
    score: number | null
    chatScore: number | null
  }

  export type StudentSkillMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    skillId: number | null
    level: number | null
    score: number | null
    chatScore: number | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentSkillMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    skillId: number | null
    level: number | null
    score: number | null
    chatScore: number | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentSkillCountAggregateOutputType = {
    id: number
    studentId: number
    skillId: number
    level: number
    score: number
    chatScore: number
    isCompleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentSkillAvgAggregateInputType = {
    id?: true
    studentId?: true
    skillId?: true
    level?: true
    score?: true
    chatScore?: true
  }

  export type StudentSkillSumAggregateInputType = {
    id?: true
    studentId?: true
    skillId?: true
    level?: true
    score?: true
    chatScore?: true
  }

  export type StudentSkillMinAggregateInputType = {
    id?: true
    studentId?: true
    skillId?: true
    level?: true
    score?: true
    chatScore?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentSkillMaxAggregateInputType = {
    id?: true
    studentId?: true
    skillId?: true
    level?: true
    score?: true
    chatScore?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentSkillCountAggregateInputType = {
    id?: true
    studentId?: true
    skillId?: true
    level?: true
    score?: true
    chatScore?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which studentSkill to aggregate.
     */
    where?: studentSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studentSkills to fetch.
     */
    orderBy?: studentSkillOrderByWithRelationInput | studentSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studentSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studentSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned studentSkills
    **/
    _count?: true | StudentSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentSkillMaxAggregateInputType
  }

  export type GetStudentSkillAggregateType<T extends StudentSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentSkill[P]>
      : GetScalarType<T[P], AggregateStudentSkill[P]>
  }




  export type studentSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentSkillWhereInput
    orderBy?: studentSkillOrderByWithAggregationInput | studentSkillOrderByWithAggregationInput[]
    by: StudentSkillScalarFieldEnum[] | StudentSkillScalarFieldEnum
    having?: studentSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentSkillCountAggregateInputType | true
    _avg?: StudentSkillAvgAggregateInputType
    _sum?: StudentSkillSumAggregateInputType
    _min?: StudentSkillMinAggregateInputType
    _max?: StudentSkillMaxAggregateInputType
  }

  export type StudentSkillGroupByOutputType = {
    id: number
    studentId: number
    skillId: number
    level: number
    score: number
    chatScore: number
    isCompleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: StudentSkillCountAggregateOutputType | null
    _avg: StudentSkillAvgAggregateOutputType | null
    _sum: StudentSkillSumAggregateOutputType | null
    _min: StudentSkillMinAggregateOutputType | null
    _max: StudentSkillMaxAggregateOutputType | null
  }

  type GetStudentSkillGroupByPayload<T extends studentSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentSkillGroupByOutputType[P]>
            : GetScalarType<T[P], StudentSkillGroupByOutputType[P]>
        }
      >
    >


  export type studentSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    skillId?: boolean
    level?: boolean
    score?: boolean
    chatScore?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSkill"]>

  export type studentSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    skillId?: boolean
    level?: boolean
    score?: boolean
    chatScore?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSkill"]>

  export type studentSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    skillId?: boolean
    level?: boolean
    score?: boolean
    chatScore?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSkill"]>

  export type studentSkillSelectScalar = {
    id?: boolean
    studentId?: boolean
    skillId?: boolean
    level?: boolean
    score?: boolean
    chatScore?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type studentSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "skillId" | "level" | "score" | "chatScore" | "isCompleted" | "createdAt" | "updatedAt", ExtArgs["result"]["studentSkill"]>
  export type studentSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }
  export type studentSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }
  export type studentSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }

  export type $studentSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "studentSkill"
    objects: {
      student: Prisma.$studentPayload<ExtArgs>
      skill: Prisma.$skillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      skillId: number
      level: number
      score: number
      chatScore: number
      isCompleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentSkill"]>
    composites: {}
  }

  type studentSkillGetPayload<S extends boolean | null | undefined | studentSkillDefaultArgs> = $Result.GetResult<Prisma.$studentSkillPayload, S>

  type studentSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentSkillCountAggregateInputType | true
    }

  export interface studentSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['studentSkill'], meta: { name: 'studentSkill' } }
    /**
     * Find zero or one StudentSkill that matches the filter.
     * @param {studentSkillFindUniqueArgs} args - Arguments to find a StudentSkill
     * @example
     * // Get one StudentSkill
     * const studentSkill = await prisma.studentSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentSkillFindUniqueArgs>(args: SelectSubset<T, studentSkillFindUniqueArgs<ExtArgs>>): Prisma__studentSkillClient<$Result.GetResult<Prisma.$studentSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentSkillFindUniqueOrThrowArgs} args - Arguments to find a StudentSkill
     * @example
     * // Get one StudentSkill
     * const studentSkill = await prisma.studentSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, studentSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentSkillClient<$Result.GetResult<Prisma.$studentSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentSkillFindFirstArgs} args - Arguments to find a StudentSkill
     * @example
     * // Get one StudentSkill
     * const studentSkill = await prisma.studentSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentSkillFindFirstArgs>(args?: SelectSubset<T, studentSkillFindFirstArgs<ExtArgs>>): Prisma__studentSkillClient<$Result.GetResult<Prisma.$studentSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentSkillFindFirstOrThrowArgs} args - Arguments to find a StudentSkill
     * @example
     * // Get one StudentSkill
     * const studentSkill = await prisma.studentSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, studentSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentSkillClient<$Result.GetResult<Prisma.$studentSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentSkills
     * const studentSkills = await prisma.studentSkill.findMany()
     * 
     * // Get first 10 StudentSkills
     * const studentSkills = await prisma.studentSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentSkillWithIdOnly = await prisma.studentSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends studentSkillFindManyArgs>(args?: SelectSubset<T, studentSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentSkill.
     * @param {studentSkillCreateArgs} args - Arguments to create a StudentSkill.
     * @example
     * // Create one StudentSkill
     * const StudentSkill = await prisma.studentSkill.create({
     *   data: {
     *     // ... data to create a StudentSkill
     *   }
     * })
     * 
     */
    create<T extends studentSkillCreateArgs>(args: SelectSubset<T, studentSkillCreateArgs<ExtArgs>>): Prisma__studentSkillClient<$Result.GetResult<Prisma.$studentSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentSkills.
     * @param {studentSkillCreateManyArgs} args - Arguments to create many StudentSkills.
     * @example
     * // Create many StudentSkills
     * const studentSkill = await prisma.studentSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentSkillCreateManyArgs>(args?: SelectSubset<T, studentSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentSkills and returns the data saved in the database.
     * @param {studentSkillCreateManyAndReturnArgs} args - Arguments to create many StudentSkills.
     * @example
     * // Create many StudentSkills
     * const studentSkill = await prisma.studentSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentSkills and only return the `id`
     * const studentSkillWithIdOnly = await prisma.studentSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends studentSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, studentSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentSkill.
     * @param {studentSkillDeleteArgs} args - Arguments to delete one StudentSkill.
     * @example
     * // Delete one StudentSkill
     * const StudentSkill = await prisma.studentSkill.delete({
     *   where: {
     *     // ... filter to delete one StudentSkill
     *   }
     * })
     * 
     */
    delete<T extends studentSkillDeleteArgs>(args: SelectSubset<T, studentSkillDeleteArgs<ExtArgs>>): Prisma__studentSkillClient<$Result.GetResult<Prisma.$studentSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentSkill.
     * @param {studentSkillUpdateArgs} args - Arguments to update one StudentSkill.
     * @example
     * // Update one StudentSkill
     * const studentSkill = await prisma.studentSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentSkillUpdateArgs>(args: SelectSubset<T, studentSkillUpdateArgs<ExtArgs>>): Prisma__studentSkillClient<$Result.GetResult<Prisma.$studentSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentSkills.
     * @param {studentSkillDeleteManyArgs} args - Arguments to filter StudentSkills to delete.
     * @example
     * // Delete a few StudentSkills
     * const { count } = await prisma.studentSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentSkillDeleteManyArgs>(args?: SelectSubset<T, studentSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentSkills
     * const studentSkill = await prisma.studentSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentSkillUpdateManyArgs>(args: SelectSubset<T, studentSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSkills and returns the data updated in the database.
     * @param {studentSkillUpdateManyAndReturnArgs} args - Arguments to update many StudentSkills.
     * @example
     * // Update many StudentSkills
     * const studentSkill = await prisma.studentSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentSkills and only return the `id`
     * const studentSkillWithIdOnly = await prisma.studentSkill.updateManyAndReturn({
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
    updateManyAndReturn<T extends studentSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, studentSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentSkill.
     * @param {studentSkillUpsertArgs} args - Arguments to update or create a StudentSkill.
     * @example
     * // Update or create a StudentSkill
     * const studentSkill = await prisma.studentSkill.upsert({
     *   create: {
     *     // ... data to create a StudentSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentSkill we want to update
     *   }
     * })
     */
    upsert<T extends studentSkillUpsertArgs>(args: SelectSubset<T, studentSkillUpsertArgs<ExtArgs>>): Prisma__studentSkillClient<$Result.GetResult<Prisma.$studentSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentSkillCountArgs} args - Arguments to filter StudentSkills to count.
     * @example
     * // Count the number of StudentSkills
     * const count = await prisma.studentSkill.count({
     *   where: {
     *     // ... the filter for the StudentSkills we want to count
     *   }
     * })
    **/
    count<T extends studentSkillCountArgs>(
      args?: Subset<T, studentSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentSkillAggregateArgs>(args: Subset<T, StudentSkillAggregateArgs>): Prisma.PrismaPromise<GetStudentSkillAggregateType<T>>

    /**
     * Group by StudentSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentSkillGroupByArgs} args - Group by arguments.
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
      T extends studentSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentSkillGroupByArgs['orderBy'] }
        : { orderBy?: studentSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studentSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the studentSkill model
   */
  readonly fields: studentSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for studentSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends skillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skillDefaultArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the studentSkill model
   */
  interface studentSkillFieldRefs {
    readonly id: FieldRef<"studentSkill", 'Int'>
    readonly studentId: FieldRef<"studentSkill", 'Int'>
    readonly skillId: FieldRef<"studentSkill", 'Int'>
    readonly level: FieldRef<"studentSkill", 'Int'>
    readonly score: FieldRef<"studentSkill", 'Float'>
    readonly chatScore: FieldRef<"studentSkill", 'Int'>
    readonly isCompleted: FieldRef<"studentSkill", 'Boolean'>
    readonly createdAt: FieldRef<"studentSkill", 'DateTime'>
    readonly updatedAt: FieldRef<"studentSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * studentSkill findUnique
   */
  export type studentSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillInclude<ExtArgs> | null
    /**
     * Filter, which studentSkill to fetch.
     */
    where: studentSkillWhereUniqueInput
  }

  /**
   * studentSkill findUniqueOrThrow
   */
  export type studentSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillInclude<ExtArgs> | null
    /**
     * Filter, which studentSkill to fetch.
     */
    where: studentSkillWhereUniqueInput
  }

  /**
   * studentSkill findFirst
   */
  export type studentSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillInclude<ExtArgs> | null
    /**
     * Filter, which studentSkill to fetch.
     */
    where?: studentSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studentSkills to fetch.
     */
    orderBy?: studentSkillOrderByWithRelationInput | studentSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for studentSkills.
     */
    cursor?: studentSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studentSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studentSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of studentSkills.
     */
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * studentSkill findFirstOrThrow
   */
  export type studentSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillInclude<ExtArgs> | null
    /**
     * Filter, which studentSkill to fetch.
     */
    where?: studentSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studentSkills to fetch.
     */
    orderBy?: studentSkillOrderByWithRelationInput | studentSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for studentSkills.
     */
    cursor?: studentSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studentSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studentSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of studentSkills.
     */
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * studentSkill findMany
   */
  export type studentSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillInclude<ExtArgs> | null
    /**
     * Filter, which studentSkills to fetch.
     */
    where?: studentSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studentSkills to fetch.
     */
    orderBy?: studentSkillOrderByWithRelationInput | studentSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing studentSkills.
     */
    cursor?: studentSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studentSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studentSkills.
     */
    skip?: number
    distinct?: StudentSkillScalarFieldEnum | StudentSkillScalarFieldEnum[]
  }

  /**
   * studentSkill create
   */
  export type studentSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a studentSkill.
     */
    data: XOR<studentSkillCreateInput, studentSkillUncheckedCreateInput>
  }

  /**
   * studentSkill createMany
   */
  export type studentSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many studentSkills.
     */
    data: studentSkillCreateManyInput | studentSkillCreateManyInput[]
  }

  /**
   * studentSkill createManyAndReturn
   */
  export type studentSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * The data used to create many studentSkills.
     */
    data: studentSkillCreateManyInput | studentSkillCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * studentSkill update
   */
  export type studentSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a studentSkill.
     */
    data: XOR<studentSkillUpdateInput, studentSkillUncheckedUpdateInput>
    /**
     * Choose, which studentSkill to update.
     */
    where: studentSkillWhereUniqueInput
  }

  /**
   * studentSkill updateMany
   */
  export type studentSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update studentSkills.
     */
    data: XOR<studentSkillUpdateManyMutationInput, studentSkillUncheckedUpdateManyInput>
    /**
     * Filter which studentSkills to update
     */
    where?: studentSkillWhereInput
    /**
     * Limit how many studentSkills to update.
     */
    limit?: number
  }

  /**
   * studentSkill updateManyAndReturn
   */
  export type studentSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * The data used to update studentSkills.
     */
    data: XOR<studentSkillUpdateManyMutationInput, studentSkillUncheckedUpdateManyInput>
    /**
     * Filter which studentSkills to update
     */
    where?: studentSkillWhereInput
    /**
     * Limit how many studentSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * studentSkill upsert
   */
  export type studentSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the studentSkill to update in case it exists.
     */
    where: studentSkillWhereUniqueInput
    /**
     * In case the studentSkill found by the `where` argument doesn't exist, create a new studentSkill with this data.
     */
    create: XOR<studentSkillCreateInput, studentSkillUncheckedCreateInput>
    /**
     * In case the studentSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentSkillUpdateInput, studentSkillUncheckedUpdateInput>
  }

  /**
   * studentSkill delete
   */
  export type studentSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillInclude<ExtArgs> | null
    /**
     * Filter which studentSkill to delete.
     */
    where: studentSkillWhereUniqueInput
  }

  /**
   * studentSkill deleteMany
   */
  export type studentSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which studentSkills to delete
     */
    where?: studentSkillWhereInput
    /**
     * Limit how many studentSkills to delete.
     */
    limit?: number
  }

  /**
   * studentSkill without action
   */
  export type studentSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentSkill
     */
    select?: studentSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentSkill
     */
    omit?: studentSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentSkillInclude<ExtArgs> | null
  }


  /**
   * Model internshipSkill
   */

  export type AggregateInternshipSkill = {
    _count: InternshipSkillCountAggregateOutputType | null
    _avg: InternshipSkillAvgAggregateOutputType | null
    _sum: InternshipSkillSumAggregateOutputType | null
    _min: InternshipSkillMinAggregateOutputType | null
    _max: InternshipSkillMaxAggregateOutputType | null
  }

  export type InternshipSkillAvgAggregateOutputType = {
    id: number | null
    internshipId: number | null
    skillId: number | null
  }

  export type InternshipSkillSumAggregateOutputType = {
    id: number | null
    internshipId: number | null
    skillId: number | null
  }

  export type InternshipSkillMinAggregateOutputType = {
    id: number | null
    internshipId: number | null
    skillId: number | null
  }

  export type InternshipSkillMaxAggregateOutputType = {
    id: number | null
    internshipId: number | null
    skillId: number | null
  }

  export type InternshipSkillCountAggregateOutputType = {
    id: number
    internshipId: number
    skillId: number
    _all: number
  }


  export type InternshipSkillAvgAggregateInputType = {
    id?: true
    internshipId?: true
    skillId?: true
  }

  export type InternshipSkillSumAggregateInputType = {
    id?: true
    internshipId?: true
    skillId?: true
  }

  export type InternshipSkillMinAggregateInputType = {
    id?: true
    internshipId?: true
    skillId?: true
  }

  export type InternshipSkillMaxAggregateInputType = {
    id?: true
    internshipId?: true
    skillId?: true
  }

  export type InternshipSkillCountAggregateInputType = {
    id?: true
    internshipId?: true
    skillId?: true
    _all?: true
  }

  export type InternshipSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which internshipSkill to aggregate.
     */
    where?: internshipSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internshipSkills to fetch.
     */
    orderBy?: internshipSkillOrderByWithRelationInput | internshipSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: internshipSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internshipSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internshipSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned internshipSkills
    **/
    _count?: true | InternshipSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InternshipSkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InternshipSkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InternshipSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InternshipSkillMaxAggregateInputType
  }

  export type GetInternshipSkillAggregateType<T extends InternshipSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateInternshipSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternshipSkill[P]>
      : GetScalarType<T[P], AggregateInternshipSkill[P]>
  }




  export type internshipSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: internshipSkillWhereInput
    orderBy?: internshipSkillOrderByWithAggregationInput | internshipSkillOrderByWithAggregationInput[]
    by: InternshipSkillScalarFieldEnum[] | InternshipSkillScalarFieldEnum
    having?: internshipSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InternshipSkillCountAggregateInputType | true
    _avg?: InternshipSkillAvgAggregateInputType
    _sum?: InternshipSkillSumAggregateInputType
    _min?: InternshipSkillMinAggregateInputType
    _max?: InternshipSkillMaxAggregateInputType
  }

  export type InternshipSkillGroupByOutputType = {
    id: number
    internshipId: number
    skillId: number
    _count: InternshipSkillCountAggregateOutputType | null
    _avg: InternshipSkillAvgAggregateOutputType | null
    _sum: InternshipSkillSumAggregateOutputType | null
    _min: InternshipSkillMinAggregateOutputType | null
    _max: InternshipSkillMaxAggregateOutputType | null
  }

  type GetInternshipSkillGroupByPayload<T extends internshipSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InternshipSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InternshipSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InternshipSkillGroupByOutputType[P]>
            : GetScalarType<T[P], InternshipSkillGroupByOutputType[P]>
        }
      >
    >


  export type internshipSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    internshipId?: boolean
    skillId?: boolean
    internship?: boolean | internshipDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internshipSkill"]>

  export type internshipSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    internshipId?: boolean
    skillId?: boolean
    internship?: boolean | internshipDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internshipSkill"]>

  export type internshipSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    internshipId?: boolean
    skillId?: boolean
    internship?: boolean | internshipDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internshipSkill"]>

  export type internshipSkillSelectScalar = {
    id?: boolean
    internshipId?: boolean
    skillId?: boolean
  }

  export type internshipSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "internshipId" | "skillId", ExtArgs["result"]["internshipSkill"]>
  export type internshipSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | internshipDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }
  export type internshipSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | internshipDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }
  export type internshipSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | internshipDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }

  export type $internshipSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "internshipSkill"
    objects: {
      internship: Prisma.$internshipPayload<ExtArgs>
      skill: Prisma.$skillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      internshipId: number
      skillId: number
    }, ExtArgs["result"]["internshipSkill"]>
    composites: {}
  }

  type internshipSkillGetPayload<S extends boolean | null | undefined | internshipSkillDefaultArgs> = $Result.GetResult<Prisma.$internshipSkillPayload, S>

  type internshipSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<internshipSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InternshipSkillCountAggregateInputType | true
    }

  export interface internshipSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['internshipSkill'], meta: { name: 'internshipSkill' } }
    /**
     * Find zero or one InternshipSkill that matches the filter.
     * @param {internshipSkillFindUniqueArgs} args - Arguments to find a InternshipSkill
     * @example
     * // Get one InternshipSkill
     * const internshipSkill = await prisma.internshipSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends internshipSkillFindUniqueArgs>(args: SelectSubset<T, internshipSkillFindUniqueArgs<ExtArgs>>): Prisma__internshipSkillClient<$Result.GetResult<Prisma.$internshipSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InternshipSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {internshipSkillFindUniqueOrThrowArgs} args - Arguments to find a InternshipSkill
     * @example
     * // Get one InternshipSkill
     * const internshipSkill = await prisma.internshipSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends internshipSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, internshipSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__internshipSkillClient<$Result.GetResult<Prisma.$internshipSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternshipSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipSkillFindFirstArgs} args - Arguments to find a InternshipSkill
     * @example
     * // Get one InternshipSkill
     * const internshipSkill = await prisma.internshipSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends internshipSkillFindFirstArgs>(args?: SelectSubset<T, internshipSkillFindFirstArgs<ExtArgs>>): Prisma__internshipSkillClient<$Result.GetResult<Prisma.$internshipSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternshipSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipSkillFindFirstOrThrowArgs} args - Arguments to find a InternshipSkill
     * @example
     * // Get one InternshipSkill
     * const internshipSkill = await prisma.internshipSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends internshipSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, internshipSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__internshipSkillClient<$Result.GetResult<Prisma.$internshipSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InternshipSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InternshipSkills
     * const internshipSkills = await prisma.internshipSkill.findMany()
     * 
     * // Get first 10 InternshipSkills
     * const internshipSkills = await prisma.internshipSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const internshipSkillWithIdOnly = await prisma.internshipSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends internshipSkillFindManyArgs>(args?: SelectSubset<T, internshipSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InternshipSkill.
     * @param {internshipSkillCreateArgs} args - Arguments to create a InternshipSkill.
     * @example
     * // Create one InternshipSkill
     * const InternshipSkill = await prisma.internshipSkill.create({
     *   data: {
     *     // ... data to create a InternshipSkill
     *   }
     * })
     * 
     */
    create<T extends internshipSkillCreateArgs>(args: SelectSubset<T, internshipSkillCreateArgs<ExtArgs>>): Prisma__internshipSkillClient<$Result.GetResult<Prisma.$internshipSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InternshipSkills.
     * @param {internshipSkillCreateManyArgs} args - Arguments to create many InternshipSkills.
     * @example
     * // Create many InternshipSkills
     * const internshipSkill = await prisma.internshipSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends internshipSkillCreateManyArgs>(args?: SelectSubset<T, internshipSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InternshipSkills and returns the data saved in the database.
     * @param {internshipSkillCreateManyAndReturnArgs} args - Arguments to create many InternshipSkills.
     * @example
     * // Create many InternshipSkills
     * const internshipSkill = await prisma.internshipSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InternshipSkills and only return the `id`
     * const internshipSkillWithIdOnly = await prisma.internshipSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends internshipSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, internshipSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InternshipSkill.
     * @param {internshipSkillDeleteArgs} args - Arguments to delete one InternshipSkill.
     * @example
     * // Delete one InternshipSkill
     * const InternshipSkill = await prisma.internshipSkill.delete({
     *   where: {
     *     // ... filter to delete one InternshipSkill
     *   }
     * })
     * 
     */
    delete<T extends internshipSkillDeleteArgs>(args: SelectSubset<T, internshipSkillDeleteArgs<ExtArgs>>): Prisma__internshipSkillClient<$Result.GetResult<Prisma.$internshipSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InternshipSkill.
     * @param {internshipSkillUpdateArgs} args - Arguments to update one InternshipSkill.
     * @example
     * // Update one InternshipSkill
     * const internshipSkill = await prisma.internshipSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends internshipSkillUpdateArgs>(args: SelectSubset<T, internshipSkillUpdateArgs<ExtArgs>>): Prisma__internshipSkillClient<$Result.GetResult<Prisma.$internshipSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InternshipSkills.
     * @param {internshipSkillDeleteManyArgs} args - Arguments to filter InternshipSkills to delete.
     * @example
     * // Delete a few InternshipSkills
     * const { count } = await prisma.internshipSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends internshipSkillDeleteManyArgs>(args?: SelectSubset<T, internshipSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternshipSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InternshipSkills
     * const internshipSkill = await prisma.internshipSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends internshipSkillUpdateManyArgs>(args: SelectSubset<T, internshipSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternshipSkills and returns the data updated in the database.
     * @param {internshipSkillUpdateManyAndReturnArgs} args - Arguments to update many InternshipSkills.
     * @example
     * // Update many InternshipSkills
     * const internshipSkill = await prisma.internshipSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InternshipSkills and only return the `id`
     * const internshipSkillWithIdOnly = await prisma.internshipSkill.updateManyAndReturn({
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
    updateManyAndReturn<T extends internshipSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, internshipSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InternshipSkill.
     * @param {internshipSkillUpsertArgs} args - Arguments to update or create a InternshipSkill.
     * @example
     * // Update or create a InternshipSkill
     * const internshipSkill = await prisma.internshipSkill.upsert({
     *   create: {
     *     // ... data to create a InternshipSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InternshipSkill we want to update
     *   }
     * })
     */
    upsert<T extends internshipSkillUpsertArgs>(args: SelectSubset<T, internshipSkillUpsertArgs<ExtArgs>>): Prisma__internshipSkillClient<$Result.GetResult<Prisma.$internshipSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InternshipSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipSkillCountArgs} args - Arguments to filter InternshipSkills to count.
     * @example
     * // Count the number of InternshipSkills
     * const count = await prisma.internshipSkill.count({
     *   where: {
     *     // ... the filter for the InternshipSkills we want to count
     *   }
     * })
    **/
    count<T extends internshipSkillCountArgs>(
      args?: Subset<T, internshipSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InternshipSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InternshipSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InternshipSkillAggregateArgs>(args: Subset<T, InternshipSkillAggregateArgs>): Prisma.PrismaPromise<GetInternshipSkillAggregateType<T>>

    /**
     * Group by InternshipSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipSkillGroupByArgs} args - Group by arguments.
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
      T extends internshipSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: internshipSkillGroupByArgs['orderBy'] }
        : { orderBy?: internshipSkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, internshipSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternshipSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the internshipSkill model
   */
  readonly fields: internshipSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for internshipSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__internshipSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    internship<T extends internshipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, internshipDefaultArgs<ExtArgs>>): Prisma__internshipClient<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends skillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skillDefaultArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the internshipSkill model
   */
  interface internshipSkillFieldRefs {
    readonly id: FieldRef<"internshipSkill", 'Int'>
    readonly internshipId: FieldRef<"internshipSkill", 'Int'>
    readonly skillId: FieldRef<"internshipSkill", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * internshipSkill findUnique
   */
  export type internshipSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillInclude<ExtArgs> | null
    /**
     * Filter, which internshipSkill to fetch.
     */
    where: internshipSkillWhereUniqueInput
  }

  /**
   * internshipSkill findUniqueOrThrow
   */
  export type internshipSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillInclude<ExtArgs> | null
    /**
     * Filter, which internshipSkill to fetch.
     */
    where: internshipSkillWhereUniqueInput
  }

  /**
   * internshipSkill findFirst
   */
  export type internshipSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillInclude<ExtArgs> | null
    /**
     * Filter, which internshipSkill to fetch.
     */
    where?: internshipSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internshipSkills to fetch.
     */
    orderBy?: internshipSkillOrderByWithRelationInput | internshipSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for internshipSkills.
     */
    cursor?: internshipSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internshipSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internshipSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of internshipSkills.
     */
    distinct?: InternshipSkillScalarFieldEnum | InternshipSkillScalarFieldEnum[]
  }

  /**
   * internshipSkill findFirstOrThrow
   */
  export type internshipSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillInclude<ExtArgs> | null
    /**
     * Filter, which internshipSkill to fetch.
     */
    where?: internshipSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internshipSkills to fetch.
     */
    orderBy?: internshipSkillOrderByWithRelationInput | internshipSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for internshipSkills.
     */
    cursor?: internshipSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internshipSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internshipSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of internshipSkills.
     */
    distinct?: InternshipSkillScalarFieldEnum | InternshipSkillScalarFieldEnum[]
  }

  /**
   * internshipSkill findMany
   */
  export type internshipSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillInclude<ExtArgs> | null
    /**
     * Filter, which internshipSkills to fetch.
     */
    where?: internshipSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internshipSkills to fetch.
     */
    orderBy?: internshipSkillOrderByWithRelationInput | internshipSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing internshipSkills.
     */
    cursor?: internshipSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internshipSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internshipSkills.
     */
    skip?: number
    distinct?: InternshipSkillScalarFieldEnum | InternshipSkillScalarFieldEnum[]
  }

  /**
   * internshipSkill create
   */
  export type internshipSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a internshipSkill.
     */
    data: XOR<internshipSkillCreateInput, internshipSkillUncheckedCreateInput>
  }

  /**
   * internshipSkill createMany
   */
  export type internshipSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many internshipSkills.
     */
    data: internshipSkillCreateManyInput | internshipSkillCreateManyInput[]
  }

  /**
   * internshipSkill createManyAndReturn
   */
  export type internshipSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * The data used to create many internshipSkills.
     */
    data: internshipSkillCreateManyInput | internshipSkillCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * internshipSkill update
   */
  export type internshipSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a internshipSkill.
     */
    data: XOR<internshipSkillUpdateInput, internshipSkillUncheckedUpdateInput>
    /**
     * Choose, which internshipSkill to update.
     */
    where: internshipSkillWhereUniqueInput
  }

  /**
   * internshipSkill updateMany
   */
  export type internshipSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update internshipSkills.
     */
    data: XOR<internshipSkillUpdateManyMutationInput, internshipSkillUncheckedUpdateManyInput>
    /**
     * Filter which internshipSkills to update
     */
    where?: internshipSkillWhereInput
    /**
     * Limit how many internshipSkills to update.
     */
    limit?: number
  }

  /**
   * internshipSkill updateManyAndReturn
   */
  export type internshipSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * The data used to update internshipSkills.
     */
    data: XOR<internshipSkillUpdateManyMutationInput, internshipSkillUncheckedUpdateManyInput>
    /**
     * Filter which internshipSkills to update
     */
    where?: internshipSkillWhereInput
    /**
     * Limit how many internshipSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * internshipSkill upsert
   */
  export type internshipSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the internshipSkill to update in case it exists.
     */
    where: internshipSkillWhereUniqueInput
    /**
     * In case the internshipSkill found by the `where` argument doesn't exist, create a new internshipSkill with this data.
     */
    create: XOR<internshipSkillCreateInput, internshipSkillUncheckedCreateInput>
    /**
     * In case the internshipSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<internshipSkillUpdateInput, internshipSkillUncheckedUpdateInput>
  }

  /**
   * internshipSkill delete
   */
  export type internshipSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillInclude<ExtArgs> | null
    /**
     * Filter which internshipSkill to delete.
     */
    where: internshipSkillWhereUniqueInput
  }

  /**
   * internshipSkill deleteMany
   */
  export type internshipSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which internshipSkills to delete
     */
    where?: internshipSkillWhereInput
    /**
     * Limit how many internshipSkills to delete.
     */
    limit?: number
  }

  /**
   * internshipSkill without action
   */
  export type internshipSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkill
     */
    select?: internshipSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkill
     */
    omit?: internshipSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillInclude<ExtArgs> | null
  }


  /**
   * Model internshipSkillRequirement
   */

  export type AggregateInternshipSkillRequirement = {
    _count: InternshipSkillRequirementCountAggregateOutputType | null
    _avg: InternshipSkillRequirementAvgAggregateOutputType | null
    _sum: InternshipSkillRequirementSumAggregateOutputType | null
    _min: InternshipSkillRequirementMinAggregateOutputType | null
    _max: InternshipSkillRequirementMaxAggregateOutputType | null
  }

  export type InternshipSkillRequirementAvgAggregateOutputType = {
    id: number | null
    internshipId: number | null
    skillId: number | null
    requiredScore: number | null
  }

  export type InternshipSkillRequirementSumAggregateOutputType = {
    id: number | null
    internshipId: number | null
    skillId: number | null
    requiredScore: number | null
  }

  export type InternshipSkillRequirementMinAggregateOutputType = {
    id: number | null
    internshipId: number | null
    skillId: number | null
    requiredScore: number | null
  }

  export type InternshipSkillRequirementMaxAggregateOutputType = {
    id: number | null
    internshipId: number | null
    skillId: number | null
    requiredScore: number | null
  }

  export type InternshipSkillRequirementCountAggregateOutputType = {
    id: number
    internshipId: number
    skillId: number
    requiredScore: number
    _all: number
  }


  export type InternshipSkillRequirementAvgAggregateInputType = {
    id?: true
    internshipId?: true
    skillId?: true
    requiredScore?: true
  }

  export type InternshipSkillRequirementSumAggregateInputType = {
    id?: true
    internshipId?: true
    skillId?: true
    requiredScore?: true
  }

  export type InternshipSkillRequirementMinAggregateInputType = {
    id?: true
    internshipId?: true
    skillId?: true
    requiredScore?: true
  }

  export type InternshipSkillRequirementMaxAggregateInputType = {
    id?: true
    internshipId?: true
    skillId?: true
    requiredScore?: true
  }

  export type InternshipSkillRequirementCountAggregateInputType = {
    id?: true
    internshipId?: true
    skillId?: true
    requiredScore?: true
    _all?: true
  }

  export type InternshipSkillRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which internshipSkillRequirement to aggregate.
     */
    where?: internshipSkillRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internshipSkillRequirements to fetch.
     */
    orderBy?: internshipSkillRequirementOrderByWithRelationInput | internshipSkillRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: internshipSkillRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internshipSkillRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internshipSkillRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned internshipSkillRequirements
    **/
    _count?: true | InternshipSkillRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InternshipSkillRequirementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InternshipSkillRequirementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InternshipSkillRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InternshipSkillRequirementMaxAggregateInputType
  }

  export type GetInternshipSkillRequirementAggregateType<T extends InternshipSkillRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateInternshipSkillRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternshipSkillRequirement[P]>
      : GetScalarType<T[P], AggregateInternshipSkillRequirement[P]>
  }




  export type internshipSkillRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: internshipSkillRequirementWhereInput
    orderBy?: internshipSkillRequirementOrderByWithAggregationInput | internshipSkillRequirementOrderByWithAggregationInput[]
    by: InternshipSkillRequirementScalarFieldEnum[] | InternshipSkillRequirementScalarFieldEnum
    having?: internshipSkillRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InternshipSkillRequirementCountAggregateInputType | true
    _avg?: InternshipSkillRequirementAvgAggregateInputType
    _sum?: InternshipSkillRequirementSumAggregateInputType
    _min?: InternshipSkillRequirementMinAggregateInputType
    _max?: InternshipSkillRequirementMaxAggregateInputType
  }

  export type InternshipSkillRequirementGroupByOutputType = {
    id: number
    internshipId: number
    skillId: number
    requiredScore: number
    _count: InternshipSkillRequirementCountAggregateOutputType | null
    _avg: InternshipSkillRequirementAvgAggregateOutputType | null
    _sum: InternshipSkillRequirementSumAggregateOutputType | null
    _min: InternshipSkillRequirementMinAggregateOutputType | null
    _max: InternshipSkillRequirementMaxAggregateOutputType | null
  }

  type GetInternshipSkillRequirementGroupByPayload<T extends internshipSkillRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InternshipSkillRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InternshipSkillRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InternshipSkillRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], InternshipSkillRequirementGroupByOutputType[P]>
        }
      >
    >


  export type internshipSkillRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    internshipId?: boolean
    skillId?: boolean
    requiredScore?: boolean
    internship?: boolean | internshipDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internshipSkillRequirement"]>

  export type internshipSkillRequirementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    internshipId?: boolean
    skillId?: boolean
    requiredScore?: boolean
    internship?: boolean | internshipDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internshipSkillRequirement"]>

  export type internshipSkillRequirementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    internshipId?: boolean
    skillId?: boolean
    requiredScore?: boolean
    internship?: boolean | internshipDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["internshipSkillRequirement"]>

  export type internshipSkillRequirementSelectScalar = {
    id?: boolean
    internshipId?: boolean
    skillId?: boolean
    requiredScore?: boolean
  }

  export type internshipSkillRequirementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "internshipId" | "skillId" | "requiredScore", ExtArgs["result"]["internshipSkillRequirement"]>
  export type internshipSkillRequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | internshipDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }
  export type internshipSkillRequirementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | internshipDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }
  export type internshipSkillRequirementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    internship?: boolean | internshipDefaultArgs<ExtArgs>
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }

  export type $internshipSkillRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "internshipSkillRequirement"
    objects: {
      internship: Prisma.$internshipPayload<ExtArgs>
      skill: Prisma.$skillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      internshipId: number
      skillId: number
      requiredScore: number
    }, ExtArgs["result"]["internshipSkillRequirement"]>
    composites: {}
  }

  type internshipSkillRequirementGetPayload<S extends boolean | null | undefined | internshipSkillRequirementDefaultArgs> = $Result.GetResult<Prisma.$internshipSkillRequirementPayload, S>

  type internshipSkillRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<internshipSkillRequirementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InternshipSkillRequirementCountAggregateInputType | true
    }

  export interface internshipSkillRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['internshipSkillRequirement'], meta: { name: 'internshipSkillRequirement' } }
    /**
     * Find zero or one InternshipSkillRequirement that matches the filter.
     * @param {internshipSkillRequirementFindUniqueArgs} args - Arguments to find a InternshipSkillRequirement
     * @example
     * // Get one InternshipSkillRequirement
     * const internshipSkillRequirement = await prisma.internshipSkillRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends internshipSkillRequirementFindUniqueArgs>(args: SelectSubset<T, internshipSkillRequirementFindUniqueArgs<ExtArgs>>): Prisma__internshipSkillRequirementClient<$Result.GetResult<Prisma.$internshipSkillRequirementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InternshipSkillRequirement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {internshipSkillRequirementFindUniqueOrThrowArgs} args - Arguments to find a InternshipSkillRequirement
     * @example
     * // Get one InternshipSkillRequirement
     * const internshipSkillRequirement = await prisma.internshipSkillRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends internshipSkillRequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, internshipSkillRequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__internshipSkillRequirementClient<$Result.GetResult<Prisma.$internshipSkillRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternshipSkillRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipSkillRequirementFindFirstArgs} args - Arguments to find a InternshipSkillRequirement
     * @example
     * // Get one InternshipSkillRequirement
     * const internshipSkillRequirement = await prisma.internshipSkillRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends internshipSkillRequirementFindFirstArgs>(args?: SelectSubset<T, internshipSkillRequirementFindFirstArgs<ExtArgs>>): Prisma__internshipSkillRequirementClient<$Result.GetResult<Prisma.$internshipSkillRequirementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InternshipSkillRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipSkillRequirementFindFirstOrThrowArgs} args - Arguments to find a InternshipSkillRequirement
     * @example
     * // Get one InternshipSkillRequirement
     * const internshipSkillRequirement = await prisma.internshipSkillRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends internshipSkillRequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, internshipSkillRequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__internshipSkillRequirementClient<$Result.GetResult<Prisma.$internshipSkillRequirementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InternshipSkillRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipSkillRequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InternshipSkillRequirements
     * const internshipSkillRequirements = await prisma.internshipSkillRequirement.findMany()
     * 
     * // Get first 10 InternshipSkillRequirements
     * const internshipSkillRequirements = await prisma.internshipSkillRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const internshipSkillRequirementWithIdOnly = await prisma.internshipSkillRequirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends internshipSkillRequirementFindManyArgs>(args?: SelectSubset<T, internshipSkillRequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipSkillRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InternshipSkillRequirement.
     * @param {internshipSkillRequirementCreateArgs} args - Arguments to create a InternshipSkillRequirement.
     * @example
     * // Create one InternshipSkillRequirement
     * const InternshipSkillRequirement = await prisma.internshipSkillRequirement.create({
     *   data: {
     *     // ... data to create a InternshipSkillRequirement
     *   }
     * })
     * 
     */
    create<T extends internshipSkillRequirementCreateArgs>(args: SelectSubset<T, internshipSkillRequirementCreateArgs<ExtArgs>>): Prisma__internshipSkillRequirementClient<$Result.GetResult<Prisma.$internshipSkillRequirementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InternshipSkillRequirements.
     * @param {internshipSkillRequirementCreateManyArgs} args - Arguments to create many InternshipSkillRequirements.
     * @example
     * // Create many InternshipSkillRequirements
     * const internshipSkillRequirement = await prisma.internshipSkillRequirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends internshipSkillRequirementCreateManyArgs>(args?: SelectSubset<T, internshipSkillRequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InternshipSkillRequirements and returns the data saved in the database.
     * @param {internshipSkillRequirementCreateManyAndReturnArgs} args - Arguments to create many InternshipSkillRequirements.
     * @example
     * // Create many InternshipSkillRequirements
     * const internshipSkillRequirement = await prisma.internshipSkillRequirement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InternshipSkillRequirements and only return the `id`
     * const internshipSkillRequirementWithIdOnly = await prisma.internshipSkillRequirement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends internshipSkillRequirementCreateManyAndReturnArgs>(args?: SelectSubset<T, internshipSkillRequirementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipSkillRequirementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InternshipSkillRequirement.
     * @param {internshipSkillRequirementDeleteArgs} args - Arguments to delete one InternshipSkillRequirement.
     * @example
     * // Delete one InternshipSkillRequirement
     * const InternshipSkillRequirement = await prisma.internshipSkillRequirement.delete({
     *   where: {
     *     // ... filter to delete one InternshipSkillRequirement
     *   }
     * })
     * 
     */
    delete<T extends internshipSkillRequirementDeleteArgs>(args: SelectSubset<T, internshipSkillRequirementDeleteArgs<ExtArgs>>): Prisma__internshipSkillRequirementClient<$Result.GetResult<Prisma.$internshipSkillRequirementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InternshipSkillRequirement.
     * @param {internshipSkillRequirementUpdateArgs} args - Arguments to update one InternshipSkillRequirement.
     * @example
     * // Update one InternshipSkillRequirement
     * const internshipSkillRequirement = await prisma.internshipSkillRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends internshipSkillRequirementUpdateArgs>(args: SelectSubset<T, internshipSkillRequirementUpdateArgs<ExtArgs>>): Prisma__internshipSkillRequirementClient<$Result.GetResult<Prisma.$internshipSkillRequirementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InternshipSkillRequirements.
     * @param {internshipSkillRequirementDeleteManyArgs} args - Arguments to filter InternshipSkillRequirements to delete.
     * @example
     * // Delete a few InternshipSkillRequirements
     * const { count } = await prisma.internshipSkillRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends internshipSkillRequirementDeleteManyArgs>(args?: SelectSubset<T, internshipSkillRequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternshipSkillRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipSkillRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InternshipSkillRequirements
     * const internshipSkillRequirement = await prisma.internshipSkillRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends internshipSkillRequirementUpdateManyArgs>(args: SelectSubset<T, internshipSkillRequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InternshipSkillRequirements and returns the data updated in the database.
     * @param {internshipSkillRequirementUpdateManyAndReturnArgs} args - Arguments to update many InternshipSkillRequirements.
     * @example
     * // Update many InternshipSkillRequirements
     * const internshipSkillRequirement = await prisma.internshipSkillRequirement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InternshipSkillRequirements and only return the `id`
     * const internshipSkillRequirementWithIdOnly = await prisma.internshipSkillRequirement.updateManyAndReturn({
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
    updateManyAndReturn<T extends internshipSkillRequirementUpdateManyAndReturnArgs>(args: SelectSubset<T, internshipSkillRequirementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internshipSkillRequirementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InternshipSkillRequirement.
     * @param {internshipSkillRequirementUpsertArgs} args - Arguments to update or create a InternshipSkillRequirement.
     * @example
     * // Update or create a InternshipSkillRequirement
     * const internshipSkillRequirement = await prisma.internshipSkillRequirement.upsert({
     *   create: {
     *     // ... data to create a InternshipSkillRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InternshipSkillRequirement we want to update
     *   }
     * })
     */
    upsert<T extends internshipSkillRequirementUpsertArgs>(args: SelectSubset<T, internshipSkillRequirementUpsertArgs<ExtArgs>>): Prisma__internshipSkillRequirementClient<$Result.GetResult<Prisma.$internshipSkillRequirementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InternshipSkillRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipSkillRequirementCountArgs} args - Arguments to filter InternshipSkillRequirements to count.
     * @example
     * // Count the number of InternshipSkillRequirements
     * const count = await prisma.internshipSkillRequirement.count({
     *   where: {
     *     // ... the filter for the InternshipSkillRequirements we want to count
     *   }
     * })
    **/
    count<T extends internshipSkillRequirementCountArgs>(
      args?: Subset<T, internshipSkillRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InternshipSkillRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InternshipSkillRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InternshipSkillRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InternshipSkillRequirementAggregateArgs>(args: Subset<T, InternshipSkillRequirementAggregateArgs>): Prisma.PrismaPromise<GetInternshipSkillRequirementAggregateType<T>>

    /**
     * Group by InternshipSkillRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internshipSkillRequirementGroupByArgs} args - Group by arguments.
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
      T extends internshipSkillRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: internshipSkillRequirementGroupByArgs['orderBy'] }
        : { orderBy?: internshipSkillRequirementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, internshipSkillRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternshipSkillRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the internshipSkillRequirement model
   */
  readonly fields: internshipSkillRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for internshipSkillRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__internshipSkillRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    internship<T extends internshipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, internshipDefaultArgs<ExtArgs>>): Prisma__internshipClient<$Result.GetResult<Prisma.$internshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skill<T extends skillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skillDefaultArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the internshipSkillRequirement model
   */
  interface internshipSkillRequirementFieldRefs {
    readonly id: FieldRef<"internshipSkillRequirement", 'Int'>
    readonly internshipId: FieldRef<"internshipSkillRequirement", 'Int'>
    readonly skillId: FieldRef<"internshipSkillRequirement", 'Int'>
    readonly requiredScore: FieldRef<"internshipSkillRequirement", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * internshipSkillRequirement findUnique
   */
  export type internshipSkillRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementInclude<ExtArgs> | null
    /**
     * Filter, which internshipSkillRequirement to fetch.
     */
    where: internshipSkillRequirementWhereUniqueInput
  }

  /**
   * internshipSkillRequirement findUniqueOrThrow
   */
  export type internshipSkillRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementInclude<ExtArgs> | null
    /**
     * Filter, which internshipSkillRequirement to fetch.
     */
    where: internshipSkillRequirementWhereUniqueInput
  }

  /**
   * internshipSkillRequirement findFirst
   */
  export type internshipSkillRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementInclude<ExtArgs> | null
    /**
     * Filter, which internshipSkillRequirement to fetch.
     */
    where?: internshipSkillRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internshipSkillRequirements to fetch.
     */
    orderBy?: internshipSkillRequirementOrderByWithRelationInput | internshipSkillRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for internshipSkillRequirements.
     */
    cursor?: internshipSkillRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internshipSkillRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internshipSkillRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of internshipSkillRequirements.
     */
    distinct?: InternshipSkillRequirementScalarFieldEnum | InternshipSkillRequirementScalarFieldEnum[]
  }

  /**
   * internshipSkillRequirement findFirstOrThrow
   */
  export type internshipSkillRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementInclude<ExtArgs> | null
    /**
     * Filter, which internshipSkillRequirement to fetch.
     */
    where?: internshipSkillRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internshipSkillRequirements to fetch.
     */
    orderBy?: internshipSkillRequirementOrderByWithRelationInput | internshipSkillRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for internshipSkillRequirements.
     */
    cursor?: internshipSkillRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internshipSkillRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internshipSkillRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of internshipSkillRequirements.
     */
    distinct?: InternshipSkillRequirementScalarFieldEnum | InternshipSkillRequirementScalarFieldEnum[]
  }

  /**
   * internshipSkillRequirement findMany
   */
  export type internshipSkillRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementInclude<ExtArgs> | null
    /**
     * Filter, which internshipSkillRequirements to fetch.
     */
    where?: internshipSkillRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internshipSkillRequirements to fetch.
     */
    orderBy?: internshipSkillRequirementOrderByWithRelationInput | internshipSkillRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing internshipSkillRequirements.
     */
    cursor?: internshipSkillRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internshipSkillRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internshipSkillRequirements.
     */
    skip?: number
    distinct?: InternshipSkillRequirementScalarFieldEnum | InternshipSkillRequirementScalarFieldEnum[]
  }

  /**
   * internshipSkillRequirement create
   */
  export type internshipSkillRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a internshipSkillRequirement.
     */
    data: XOR<internshipSkillRequirementCreateInput, internshipSkillRequirementUncheckedCreateInput>
  }

  /**
   * internshipSkillRequirement createMany
   */
  export type internshipSkillRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many internshipSkillRequirements.
     */
    data: internshipSkillRequirementCreateManyInput | internshipSkillRequirementCreateManyInput[]
  }

  /**
   * internshipSkillRequirement createManyAndReturn
   */
  export type internshipSkillRequirementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * The data used to create many internshipSkillRequirements.
     */
    data: internshipSkillRequirementCreateManyInput | internshipSkillRequirementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * internshipSkillRequirement update
   */
  export type internshipSkillRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a internshipSkillRequirement.
     */
    data: XOR<internshipSkillRequirementUpdateInput, internshipSkillRequirementUncheckedUpdateInput>
    /**
     * Choose, which internshipSkillRequirement to update.
     */
    where: internshipSkillRequirementWhereUniqueInput
  }

  /**
   * internshipSkillRequirement updateMany
   */
  export type internshipSkillRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update internshipSkillRequirements.
     */
    data: XOR<internshipSkillRequirementUpdateManyMutationInput, internshipSkillRequirementUncheckedUpdateManyInput>
    /**
     * Filter which internshipSkillRequirements to update
     */
    where?: internshipSkillRequirementWhereInput
    /**
     * Limit how many internshipSkillRequirements to update.
     */
    limit?: number
  }

  /**
   * internshipSkillRequirement updateManyAndReturn
   */
  export type internshipSkillRequirementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * The data used to update internshipSkillRequirements.
     */
    data: XOR<internshipSkillRequirementUpdateManyMutationInput, internshipSkillRequirementUncheckedUpdateManyInput>
    /**
     * Filter which internshipSkillRequirements to update
     */
    where?: internshipSkillRequirementWhereInput
    /**
     * Limit how many internshipSkillRequirements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * internshipSkillRequirement upsert
   */
  export type internshipSkillRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the internshipSkillRequirement to update in case it exists.
     */
    where: internshipSkillRequirementWhereUniqueInput
    /**
     * In case the internshipSkillRequirement found by the `where` argument doesn't exist, create a new internshipSkillRequirement with this data.
     */
    create: XOR<internshipSkillRequirementCreateInput, internshipSkillRequirementUncheckedCreateInput>
    /**
     * In case the internshipSkillRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<internshipSkillRequirementUpdateInput, internshipSkillRequirementUncheckedUpdateInput>
  }

  /**
   * internshipSkillRequirement delete
   */
  export type internshipSkillRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementInclude<ExtArgs> | null
    /**
     * Filter which internshipSkillRequirement to delete.
     */
    where: internshipSkillRequirementWhereUniqueInput
  }

  /**
   * internshipSkillRequirement deleteMany
   */
  export type internshipSkillRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which internshipSkillRequirements to delete
     */
    where?: internshipSkillRequirementWhereInput
    /**
     * Limit how many internshipSkillRequirements to delete.
     */
    limit?: number
  }

  /**
   * internshipSkillRequirement without action
   */
  export type internshipSkillRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internshipSkillRequirement
     */
    select?: internshipSkillRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internshipSkillRequirement
     */
    omit?: internshipSkillRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: internshipSkillRequirementInclude<ExtArgs> | null
  }


  /**
   * Model courseResource
   */

  export type AggregateCourseResource = {
    _count: CourseResourceCountAggregateOutputType | null
    _avg: CourseResourceAvgAggregateOutputType | null
    _sum: CourseResourceSumAggregateOutputType | null
    _min: CourseResourceMinAggregateOutputType | null
    _max: CourseResourceMaxAggregateOutputType | null
  }

  export type CourseResourceAvgAggregateOutputType = {
    id: number | null
    skillId: number | null
    estimatedHours: number | null
    scoreBoost: number | null
  }

  export type CourseResourceSumAggregateOutputType = {
    id: number | null
    skillId: number | null
    estimatedHours: number | null
    scoreBoost: number | null
  }

  export type CourseResourceMinAggregateOutputType = {
    id: number | null
    skillId: number | null
    title: string | null
    platform: string | null
    courseUrl: string | null
    difficulty: string | null
    estimatedHours: number | null
    description: string | null
    scoreBoost: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseResourceMaxAggregateOutputType = {
    id: number | null
    skillId: number | null
    title: string | null
    platform: string | null
    courseUrl: string | null
    difficulty: string | null
    estimatedHours: number | null
    description: string | null
    scoreBoost: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseResourceCountAggregateOutputType = {
    id: number
    skillId: number
    title: number
    platform: number
    courseUrl: number
    difficulty: number
    estimatedHours: number
    description: number
    scoreBoost: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseResourceAvgAggregateInputType = {
    id?: true
    skillId?: true
    estimatedHours?: true
    scoreBoost?: true
  }

  export type CourseResourceSumAggregateInputType = {
    id?: true
    skillId?: true
    estimatedHours?: true
    scoreBoost?: true
  }

  export type CourseResourceMinAggregateInputType = {
    id?: true
    skillId?: true
    title?: true
    platform?: true
    courseUrl?: true
    difficulty?: true
    estimatedHours?: true
    description?: true
    scoreBoost?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseResourceMaxAggregateInputType = {
    id?: true
    skillId?: true
    title?: true
    platform?: true
    courseUrl?: true
    difficulty?: true
    estimatedHours?: true
    description?: true
    scoreBoost?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseResourceCountAggregateInputType = {
    id?: true
    skillId?: true
    title?: true
    platform?: true
    courseUrl?: true
    difficulty?: true
    estimatedHours?: true
    description?: true
    scoreBoost?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courseResource to aggregate.
     */
    where?: courseResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courseResources to fetch.
     */
    orderBy?: courseResourceOrderByWithRelationInput | courseResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: courseResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courseResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courseResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courseResources
    **/
    _count?: true | CourseResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseResourceMaxAggregateInputType
  }

  export type GetCourseResourceAggregateType<T extends CourseResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseResource[P]>
      : GetScalarType<T[P], AggregateCourseResource[P]>
  }




  export type courseResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseResourceWhereInput
    orderBy?: courseResourceOrderByWithAggregationInput | courseResourceOrderByWithAggregationInput[]
    by: CourseResourceScalarFieldEnum[] | CourseResourceScalarFieldEnum
    having?: courseResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseResourceCountAggregateInputType | true
    _avg?: CourseResourceAvgAggregateInputType
    _sum?: CourseResourceSumAggregateInputType
    _min?: CourseResourceMinAggregateInputType
    _max?: CourseResourceMaxAggregateInputType
  }

  export type CourseResourceGroupByOutputType = {
    id: number
    skillId: number
    title: string
    platform: string
    courseUrl: string
    difficulty: string
    estimatedHours: number
    description: string | null
    scoreBoost: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CourseResourceCountAggregateOutputType | null
    _avg: CourseResourceAvgAggregateOutputType | null
    _sum: CourseResourceSumAggregateOutputType | null
    _min: CourseResourceMinAggregateOutputType | null
    _max: CourseResourceMaxAggregateOutputType | null
  }

  type GetCourseResourceGroupByPayload<T extends courseResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseResourceGroupByOutputType[P]>
            : GetScalarType<T[P], CourseResourceGroupByOutputType[P]>
        }
      >
    >


  export type courseResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillId?: boolean
    title?: boolean
    platform?: boolean
    courseUrl?: boolean
    difficulty?: boolean
    estimatedHours?: boolean
    description?: boolean
    scoreBoost?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skill?: boolean | skillDefaultArgs<ExtArgs>
    studentProgress?: boolean | courseResource$studentProgressArgs<ExtArgs>
    _count?: boolean | CourseResourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseResource"]>

  export type courseResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillId?: boolean
    title?: boolean
    platform?: boolean
    courseUrl?: boolean
    difficulty?: boolean
    estimatedHours?: boolean
    description?: boolean
    scoreBoost?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseResource"]>

  export type courseResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillId?: boolean
    title?: boolean
    platform?: boolean
    courseUrl?: boolean
    difficulty?: boolean
    estimatedHours?: boolean
    description?: boolean
    scoreBoost?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseResource"]>

  export type courseResourceSelectScalar = {
    id?: boolean
    skillId?: boolean
    title?: boolean
    platform?: boolean
    courseUrl?: boolean
    difficulty?: boolean
    estimatedHours?: boolean
    description?: boolean
    scoreBoost?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type courseResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skillId" | "title" | "platform" | "courseUrl" | "difficulty" | "estimatedHours" | "description" | "scoreBoost" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["courseResource"]>
  export type courseResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | skillDefaultArgs<ExtArgs>
    studentProgress?: boolean | courseResource$studentProgressArgs<ExtArgs>
    _count?: boolean | CourseResourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type courseResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }
  export type courseResourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skill?: boolean | skillDefaultArgs<ExtArgs>
  }

  export type $courseResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "courseResource"
    objects: {
      skill: Prisma.$skillPayload<ExtArgs>
      studentProgress: Prisma.$studentCourseProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      skillId: number
      title: string
      platform: string
      courseUrl: string
      difficulty: string
      estimatedHours: number
      description: string | null
      scoreBoost: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courseResource"]>
    composites: {}
  }

  type courseResourceGetPayload<S extends boolean | null | undefined | courseResourceDefaultArgs> = $Result.GetResult<Prisma.$courseResourcePayload, S>

  type courseResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<courseResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseResourceCountAggregateInputType | true
    }

  export interface courseResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['courseResource'], meta: { name: 'courseResource' } }
    /**
     * Find zero or one CourseResource that matches the filter.
     * @param {courseResourceFindUniqueArgs} args - Arguments to find a CourseResource
     * @example
     * // Get one CourseResource
     * const courseResource = await prisma.courseResource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends courseResourceFindUniqueArgs>(args: SelectSubset<T, courseResourceFindUniqueArgs<ExtArgs>>): Prisma__courseResourceClient<$Result.GetResult<Prisma.$courseResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseResource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {courseResourceFindUniqueOrThrowArgs} args - Arguments to find a CourseResource
     * @example
     * // Get one CourseResource
     * const courseResource = await prisma.courseResource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends courseResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, courseResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__courseResourceClient<$Result.GetResult<Prisma.$courseResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseResource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseResourceFindFirstArgs} args - Arguments to find a CourseResource
     * @example
     * // Get one CourseResource
     * const courseResource = await prisma.courseResource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends courseResourceFindFirstArgs>(args?: SelectSubset<T, courseResourceFindFirstArgs<ExtArgs>>): Prisma__courseResourceClient<$Result.GetResult<Prisma.$courseResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseResource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseResourceFindFirstOrThrowArgs} args - Arguments to find a CourseResource
     * @example
     * // Get one CourseResource
     * const courseResource = await prisma.courseResource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends courseResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, courseResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__courseResourceClient<$Result.GetResult<Prisma.$courseResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseResources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseResources
     * const courseResources = await prisma.courseResource.findMany()
     * 
     * // Get first 10 CourseResources
     * const courseResources = await prisma.courseResource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseResourceWithIdOnly = await prisma.courseResource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends courseResourceFindManyArgs>(args?: SelectSubset<T, courseResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$courseResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseResource.
     * @param {courseResourceCreateArgs} args - Arguments to create a CourseResource.
     * @example
     * // Create one CourseResource
     * const CourseResource = await prisma.courseResource.create({
     *   data: {
     *     // ... data to create a CourseResource
     *   }
     * })
     * 
     */
    create<T extends courseResourceCreateArgs>(args: SelectSubset<T, courseResourceCreateArgs<ExtArgs>>): Prisma__courseResourceClient<$Result.GetResult<Prisma.$courseResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseResources.
     * @param {courseResourceCreateManyArgs} args - Arguments to create many CourseResources.
     * @example
     * // Create many CourseResources
     * const courseResource = await prisma.courseResource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends courseResourceCreateManyArgs>(args?: SelectSubset<T, courseResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseResources and returns the data saved in the database.
     * @param {courseResourceCreateManyAndReturnArgs} args - Arguments to create many CourseResources.
     * @example
     * // Create many CourseResources
     * const courseResource = await prisma.courseResource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseResources and only return the `id`
     * const courseResourceWithIdOnly = await prisma.courseResource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends courseResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, courseResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$courseResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseResource.
     * @param {courseResourceDeleteArgs} args - Arguments to delete one CourseResource.
     * @example
     * // Delete one CourseResource
     * const CourseResource = await prisma.courseResource.delete({
     *   where: {
     *     // ... filter to delete one CourseResource
     *   }
     * })
     * 
     */
    delete<T extends courseResourceDeleteArgs>(args: SelectSubset<T, courseResourceDeleteArgs<ExtArgs>>): Prisma__courseResourceClient<$Result.GetResult<Prisma.$courseResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseResource.
     * @param {courseResourceUpdateArgs} args - Arguments to update one CourseResource.
     * @example
     * // Update one CourseResource
     * const courseResource = await prisma.courseResource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends courseResourceUpdateArgs>(args: SelectSubset<T, courseResourceUpdateArgs<ExtArgs>>): Prisma__courseResourceClient<$Result.GetResult<Prisma.$courseResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseResources.
     * @param {courseResourceDeleteManyArgs} args - Arguments to filter CourseResources to delete.
     * @example
     * // Delete a few CourseResources
     * const { count } = await prisma.courseResource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends courseResourceDeleteManyArgs>(args?: SelectSubset<T, courseResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseResources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseResources
     * const courseResource = await prisma.courseResource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends courseResourceUpdateManyArgs>(args: SelectSubset<T, courseResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseResources and returns the data updated in the database.
     * @param {courseResourceUpdateManyAndReturnArgs} args - Arguments to update many CourseResources.
     * @example
     * // Update many CourseResources
     * const courseResource = await prisma.courseResource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseResources and only return the `id`
     * const courseResourceWithIdOnly = await prisma.courseResource.updateManyAndReturn({
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
    updateManyAndReturn<T extends courseResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, courseResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$courseResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseResource.
     * @param {courseResourceUpsertArgs} args - Arguments to update or create a CourseResource.
     * @example
     * // Update or create a CourseResource
     * const courseResource = await prisma.courseResource.upsert({
     *   create: {
     *     // ... data to create a CourseResource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseResource we want to update
     *   }
     * })
     */
    upsert<T extends courseResourceUpsertArgs>(args: SelectSubset<T, courseResourceUpsertArgs<ExtArgs>>): Prisma__courseResourceClient<$Result.GetResult<Prisma.$courseResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseResources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseResourceCountArgs} args - Arguments to filter CourseResources to count.
     * @example
     * // Count the number of CourseResources
     * const count = await prisma.courseResource.count({
     *   where: {
     *     // ... the filter for the CourseResources we want to count
     *   }
     * })
    **/
    count<T extends courseResourceCountArgs>(
      args?: Subset<T, courseResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseResource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseResourceAggregateArgs>(args: Subset<T, CourseResourceAggregateArgs>): Prisma.PrismaPromise<GetCourseResourceAggregateType<T>>

    /**
     * Group by CourseResource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseResourceGroupByArgs} args - Group by arguments.
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
      T extends courseResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseResourceGroupByArgs['orderBy'] }
        : { orderBy?: courseResourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, courseResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the courseResource model
   */
  readonly fields: courseResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for courseResource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skill<T extends skillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, skillDefaultArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studentProgress<T extends courseResource$studentProgressArgs<ExtArgs> = {}>(args?: Subset<T, courseResource$studentProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the courseResource model
   */
  interface courseResourceFieldRefs {
    readonly id: FieldRef<"courseResource", 'Int'>
    readonly skillId: FieldRef<"courseResource", 'Int'>
    readonly title: FieldRef<"courseResource", 'String'>
    readonly platform: FieldRef<"courseResource", 'String'>
    readonly courseUrl: FieldRef<"courseResource", 'String'>
    readonly difficulty: FieldRef<"courseResource", 'String'>
    readonly estimatedHours: FieldRef<"courseResource", 'Float'>
    readonly description: FieldRef<"courseResource", 'String'>
    readonly scoreBoost: FieldRef<"courseResource", 'Float'>
    readonly isActive: FieldRef<"courseResource", 'Boolean'>
    readonly createdAt: FieldRef<"courseResource", 'DateTime'>
    readonly updatedAt: FieldRef<"courseResource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * courseResource findUnique
   */
  export type courseResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseResource
     */
    select?: courseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseResource
     */
    omit?: courseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseResourceInclude<ExtArgs> | null
    /**
     * Filter, which courseResource to fetch.
     */
    where: courseResourceWhereUniqueInput
  }

  /**
   * courseResource findUniqueOrThrow
   */
  export type courseResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseResource
     */
    select?: courseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseResource
     */
    omit?: courseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseResourceInclude<ExtArgs> | null
    /**
     * Filter, which courseResource to fetch.
     */
    where: courseResourceWhereUniqueInput
  }

  /**
   * courseResource findFirst
   */
  export type courseResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseResource
     */
    select?: courseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseResource
     */
    omit?: courseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseResourceInclude<ExtArgs> | null
    /**
     * Filter, which courseResource to fetch.
     */
    where?: courseResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courseResources to fetch.
     */
    orderBy?: courseResourceOrderByWithRelationInput | courseResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courseResources.
     */
    cursor?: courseResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courseResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courseResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courseResources.
     */
    distinct?: CourseResourceScalarFieldEnum | CourseResourceScalarFieldEnum[]
  }

  /**
   * courseResource findFirstOrThrow
   */
  export type courseResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseResource
     */
    select?: courseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseResource
     */
    omit?: courseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseResourceInclude<ExtArgs> | null
    /**
     * Filter, which courseResource to fetch.
     */
    where?: courseResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courseResources to fetch.
     */
    orderBy?: courseResourceOrderByWithRelationInput | courseResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courseResources.
     */
    cursor?: courseResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courseResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courseResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courseResources.
     */
    distinct?: CourseResourceScalarFieldEnum | CourseResourceScalarFieldEnum[]
  }

  /**
   * courseResource findMany
   */
  export type courseResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseResource
     */
    select?: courseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseResource
     */
    omit?: courseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseResourceInclude<ExtArgs> | null
    /**
     * Filter, which courseResources to fetch.
     */
    where?: courseResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courseResources to fetch.
     */
    orderBy?: courseResourceOrderByWithRelationInput | courseResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courseResources.
     */
    cursor?: courseResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courseResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courseResources.
     */
    skip?: number
    distinct?: CourseResourceScalarFieldEnum | CourseResourceScalarFieldEnum[]
  }

  /**
   * courseResource create
   */
  export type courseResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseResource
     */
    select?: courseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseResource
     */
    omit?: courseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a courseResource.
     */
    data: XOR<courseResourceCreateInput, courseResourceUncheckedCreateInput>
  }

  /**
   * courseResource createMany
   */
  export type courseResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courseResources.
     */
    data: courseResourceCreateManyInput | courseResourceCreateManyInput[]
  }

  /**
   * courseResource createManyAndReturn
   */
  export type courseResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseResource
     */
    select?: courseResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the courseResource
     */
    omit?: courseResourceOmit<ExtArgs> | null
    /**
     * The data used to create many courseResources.
     */
    data: courseResourceCreateManyInput | courseResourceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseResourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * courseResource update
   */
  export type courseResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseResource
     */
    select?: courseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseResource
     */
    omit?: courseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a courseResource.
     */
    data: XOR<courseResourceUpdateInput, courseResourceUncheckedUpdateInput>
    /**
     * Choose, which courseResource to update.
     */
    where: courseResourceWhereUniqueInput
  }

  /**
   * courseResource updateMany
   */
  export type courseResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courseResources.
     */
    data: XOR<courseResourceUpdateManyMutationInput, courseResourceUncheckedUpdateManyInput>
    /**
     * Filter which courseResources to update
     */
    where?: courseResourceWhereInput
    /**
     * Limit how many courseResources to update.
     */
    limit?: number
  }

  /**
   * courseResource updateManyAndReturn
   */
  export type courseResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseResource
     */
    select?: courseResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the courseResource
     */
    omit?: courseResourceOmit<ExtArgs> | null
    /**
     * The data used to update courseResources.
     */
    data: XOR<courseResourceUpdateManyMutationInput, courseResourceUncheckedUpdateManyInput>
    /**
     * Filter which courseResources to update
     */
    where?: courseResourceWhereInput
    /**
     * Limit how many courseResources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseResourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * courseResource upsert
   */
  export type courseResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseResource
     */
    select?: courseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseResource
     */
    omit?: courseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the courseResource to update in case it exists.
     */
    where: courseResourceWhereUniqueInput
    /**
     * In case the courseResource found by the `where` argument doesn't exist, create a new courseResource with this data.
     */
    create: XOR<courseResourceCreateInput, courseResourceUncheckedCreateInput>
    /**
     * In case the courseResource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseResourceUpdateInput, courseResourceUncheckedUpdateInput>
  }

  /**
   * courseResource delete
   */
  export type courseResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseResource
     */
    select?: courseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseResource
     */
    omit?: courseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseResourceInclude<ExtArgs> | null
    /**
     * Filter which courseResource to delete.
     */
    where: courseResourceWhereUniqueInput
  }

  /**
   * courseResource deleteMany
   */
  export type courseResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courseResources to delete
     */
    where?: courseResourceWhereInput
    /**
     * Limit how many courseResources to delete.
     */
    limit?: number
  }

  /**
   * courseResource.studentProgress
   */
  export type courseResource$studentProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressInclude<ExtArgs> | null
    where?: studentCourseProgressWhereInput
    orderBy?: studentCourseProgressOrderByWithRelationInput | studentCourseProgressOrderByWithRelationInput[]
    cursor?: studentCourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentCourseProgressScalarFieldEnum | StudentCourseProgressScalarFieldEnum[]
  }

  /**
   * courseResource without action
   */
  export type courseResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the courseResource
     */
    select?: courseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the courseResource
     */
    omit?: courseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseResourceInclude<ExtArgs> | null
  }


  /**
   * Model studentCourseProgress
   */

  export type AggregateStudentCourseProgress = {
    _count: StudentCourseProgressCountAggregateOutputType | null
    _avg: StudentCourseProgressAvgAggregateOutputType | null
    _sum: StudentCourseProgressSumAggregateOutputType | null
    _min: StudentCourseProgressMinAggregateOutputType | null
    _max: StudentCourseProgressMaxAggregateOutputType | null
  }

  export type StudentCourseProgressAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    courseResourceId: number | null
  }

  export type StudentCourseProgressSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    courseResourceId: number | null
  }

  export type StudentCourseProgressMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    courseResourceId: number | null
    status: string | null
    scoreAwarded: boolean | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCourseProgressMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    courseResourceId: number | null
    status: string | null
    scoreAwarded: boolean | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCourseProgressCountAggregateOutputType = {
    id: number
    studentId: number
    courseResourceId: number
    status: number
    scoreAwarded: number
    startedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentCourseProgressAvgAggregateInputType = {
    id?: true
    studentId?: true
    courseResourceId?: true
  }

  export type StudentCourseProgressSumAggregateInputType = {
    id?: true
    studentId?: true
    courseResourceId?: true
  }

  export type StudentCourseProgressMinAggregateInputType = {
    id?: true
    studentId?: true
    courseResourceId?: true
    status?: true
    scoreAwarded?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCourseProgressMaxAggregateInputType = {
    id?: true
    studentId?: true
    courseResourceId?: true
    status?: true
    scoreAwarded?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCourseProgressCountAggregateInputType = {
    id?: true
    studentId?: true
    courseResourceId?: true
    status?: true
    scoreAwarded?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentCourseProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which studentCourseProgress to aggregate.
     */
    where?: studentCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studentCourseProgresses to fetch.
     */
    orderBy?: studentCourseProgressOrderByWithRelationInput | studentCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studentCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studentCourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned studentCourseProgresses
    **/
    _count?: true | StudentCourseProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentCourseProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentCourseProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentCourseProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentCourseProgressMaxAggregateInputType
  }

  export type GetStudentCourseProgressAggregateType<T extends StudentCourseProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentCourseProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentCourseProgress[P]>
      : GetScalarType<T[P], AggregateStudentCourseProgress[P]>
  }




  export type studentCourseProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentCourseProgressWhereInput
    orderBy?: studentCourseProgressOrderByWithAggregationInput | studentCourseProgressOrderByWithAggregationInput[]
    by: StudentCourseProgressScalarFieldEnum[] | StudentCourseProgressScalarFieldEnum
    having?: studentCourseProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCourseProgressCountAggregateInputType | true
    _avg?: StudentCourseProgressAvgAggregateInputType
    _sum?: StudentCourseProgressSumAggregateInputType
    _min?: StudentCourseProgressMinAggregateInputType
    _max?: StudentCourseProgressMaxAggregateInputType
  }

  export type StudentCourseProgressGroupByOutputType = {
    id: number
    studentId: number
    courseResourceId: number
    status: string
    scoreAwarded: boolean
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StudentCourseProgressCountAggregateOutputType | null
    _avg: StudentCourseProgressAvgAggregateOutputType | null
    _sum: StudentCourseProgressSumAggregateOutputType | null
    _min: StudentCourseProgressMinAggregateOutputType | null
    _max: StudentCourseProgressMaxAggregateOutputType | null
  }

  type GetStudentCourseProgressGroupByPayload<T extends studentCourseProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentCourseProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentCourseProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentCourseProgressGroupByOutputType[P]>
            : GetScalarType<T[P], StudentCourseProgressGroupByOutputType[P]>
        }
      >
    >


  export type studentCourseProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseResourceId?: boolean
    status?: boolean
    scoreAwarded?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    courseResource?: boolean | courseResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentCourseProgress"]>

  export type studentCourseProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseResourceId?: boolean
    status?: boolean
    scoreAwarded?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    courseResource?: boolean | courseResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentCourseProgress"]>

  export type studentCourseProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseResourceId?: boolean
    status?: boolean
    scoreAwarded?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    courseResource?: boolean | courseResourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentCourseProgress"]>

  export type studentCourseProgressSelectScalar = {
    id?: boolean
    studentId?: boolean
    courseResourceId?: boolean
    status?: boolean
    scoreAwarded?: boolean
    startedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type studentCourseProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "courseResourceId" | "status" | "scoreAwarded" | "startedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["studentCourseProgress"]>
  export type studentCourseProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    courseResource?: boolean | courseResourceDefaultArgs<ExtArgs>
  }
  export type studentCourseProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    courseResource?: boolean | courseResourceDefaultArgs<ExtArgs>
  }
  export type studentCourseProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    courseResource?: boolean | courseResourceDefaultArgs<ExtArgs>
  }

  export type $studentCourseProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "studentCourseProgress"
    objects: {
      student: Prisma.$studentPayload<ExtArgs>
      courseResource: Prisma.$courseResourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      courseResourceId: number
      status: string
      scoreAwarded: boolean
      startedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentCourseProgress"]>
    composites: {}
  }

  type studentCourseProgressGetPayload<S extends boolean | null | undefined | studentCourseProgressDefaultArgs> = $Result.GetResult<Prisma.$studentCourseProgressPayload, S>

  type studentCourseProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentCourseProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCourseProgressCountAggregateInputType | true
    }

  export interface studentCourseProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['studentCourseProgress'], meta: { name: 'studentCourseProgress' } }
    /**
     * Find zero or one StudentCourseProgress that matches the filter.
     * @param {studentCourseProgressFindUniqueArgs} args - Arguments to find a StudentCourseProgress
     * @example
     * // Get one StudentCourseProgress
     * const studentCourseProgress = await prisma.studentCourseProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentCourseProgressFindUniqueArgs>(args: SelectSubset<T, studentCourseProgressFindUniqueArgs<ExtArgs>>): Prisma__studentCourseProgressClient<$Result.GetResult<Prisma.$studentCourseProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentCourseProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentCourseProgressFindUniqueOrThrowArgs} args - Arguments to find a StudentCourseProgress
     * @example
     * // Get one StudentCourseProgress
     * const studentCourseProgress = await prisma.studentCourseProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentCourseProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, studentCourseProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentCourseProgressClient<$Result.GetResult<Prisma.$studentCourseProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentCourseProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCourseProgressFindFirstArgs} args - Arguments to find a StudentCourseProgress
     * @example
     * // Get one StudentCourseProgress
     * const studentCourseProgress = await prisma.studentCourseProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentCourseProgressFindFirstArgs>(args?: SelectSubset<T, studentCourseProgressFindFirstArgs<ExtArgs>>): Prisma__studentCourseProgressClient<$Result.GetResult<Prisma.$studentCourseProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentCourseProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCourseProgressFindFirstOrThrowArgs} args - Arguments to find a StudentCourseProgress
     * @example
     * // Get one StudentCourseProgress
     * const studentCourseProgress = await prisma.studentCourseProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentCourseProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, studentCourseProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentCourseProgressClient<$Result.GetResult<Prisma.$studentCourseProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentCourseProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCourseProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentCourseProgresses
     * const studentCourseProgresses = await prisma.studentCourseProgress.findMany()
     * 
     * // Get first 10 StudentCourseProgresses
     * const studentCourseProgresses = await prisma.studentCourseProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentCourseProgressWithIdOnly = await prisma.studentCourseProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends studentCourseProgressFindManyArgs>(args?: SelectSubset<T, studentCourseProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentCourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentCourseProgress.
     * @param {studentCourseProgressCreateArgs} args - Arguments to create a StudentCourseProgress.
     * @example
     * // Create one StudentCourseProgress
     * const StudentCourseProgress = await prisma.studentCourseProgress.create({
     *   data: {
     *     // ... data to create a StudentCourseProgress
     *   }
     * })
     * 
     */
    create<T extends studentCourseProgressCreateArgs>(args: SelectSubset<T, studentCourseProgressCreateArgs<ExtArgs>>): Prisma__studentCourseProgressClient<$Result.GetResult<Prisma.$studentCourseProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentCourseProgresses.
     * @param {studentCourseProgressCreateManyArgs} args - Arguments to create many StudentCourseProgresses.
     * @example
     * // Create many StudentCourseProgresses
     * const studentCourseProgress = await prisma.studentCourseProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentCourseProgressCreateManyArgs>(args?: SelectSubset<T, studentCourseProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentCourseProgresses and returns the data saved in the database.
     * @param {studentCourseProgressCreateManyAndReturnArgs} args - Arguments to create many StudentCourseProgresses.
     * @example
     * // Create many StudentCourseProgresses
     * const studentCourseProgress = await prisma.studentCourseProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentCourseProgresses and only return the `id`
     * const studentCourseProgressWithIdOnly = await prisma.studentCourseProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends studentCourseProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, studentCourseProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentCourseProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentCourseProgress.
     * @param {studentCourseProgressDeleteArgs} args - Arguments to delete one StudentCourseProgress.
     * @example
     * // Delete one StudentCourseProgress
     * const StudentCourseProgress = await prisma.studentCourseProgress.delete({
     *   where: {
     *     // ... filter to delete one StudentCourseProgress
     *   }
     * })
     * 
     */
    delete<T extends studentCourseProgressDeleteArgs>(args: SelectSubset<T, studentCourseProgressDeleteArgs<ExtArgs>>): Prisma__studentCourseProgressClient<$Result.GetResult<Prisma.$studentCourseProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentCourseProgress.
     * @param {studentCourseProgressUpdateArgs} args - Arguments to update one StudentCourseProgress.
     * @example
     * // Update one StudentCourseProgress
     * const studentCourseProgress = await prisma.studentCourseProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentCourseProgressUpdateArgs>(args: SelectSubset<T, studentCourseProgressUpdateArgs<ExtArgs>>): Prisma__studentCourseProgressClient<$Result.GetResult<Prisma.$studentCourseProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentCourseProgresses.
     * @param {studentCourseProgressDeleteManyArgs} args - Arguments to filter StudentCourseProgresses to delete.
     * @example
     * // Delete a few StudentCourseProgresses
     * const { count } = await prisma.studentCourseProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentCourseProgressDeleteManyArgs>(args?: SelectSubset<T, studentCourseProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentCourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCourseProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentCourseProgresses
     * const studentCourseProgress = await prisma.studentCourseProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentCourseProgressUpdateManyArgs>(args: SelectSubset<T, studentCourseProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentCourseProgresses and returns the data updated in the database.
     * @param {studentCourseProgressUpdateManyAndReturnArgs} args - Arguments to update many StudentCourseProgresses.
     * @example
     * // Update many StudentCourseProgresses
     * const studentCourseProgress = await prisma.studentCourseProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentCourseProgresses and only return the `id`
     * const studentCourseProgressWithIdOnly = await prisma.studentCourseProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends studentCourseProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, studentCourseProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentCourseProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentCourseProgress.
     * @param {studentCourseProgressUpsertArgs} args - Arguments to update or create a StudentCourseProgress.
     * @example
     * // Update or create a StudentCourseProgress
     * const studentCourseProgress = await prisma.studentCourseProgress.upsert({
     *   create: {
     *     // ... data to create a StudentCourseProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentCourseProgress we want to update
     *   }
     * })
     */
    upsert<T extends studentCourseProgressUpsertArgs>(args: SelectSubset<T, studentCourseProgressUpsertArgs<ExtArgs>>): Prisma__studentCourseProgressClient<$Result.GetResult<Prisma.$studentCourseProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentCourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCourseProgressCountArgs} args - Arguments to filter StudentCourseProgresses to count.
     * @example
     * // Count the number of StudentCourseProgresses
     * const count = await prisma.studentCourseProgress.count({
     *   where: {
     *     // ... the filter for the StudentCourseProgresses we want to count
     *   }
     * })
    **/
    count<T extends studentCourseProgressCountArgs>(
      args?: Subset<T, studentCourseProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCourseProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentCourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCourseProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentCourseProgressAggregateArgs>(args: Subset<T, StudentCourseProgressAggregateArgs>): Prisma.PrismaPromise<GetStudentCourseProgressAggregateType<T>>

    /**
     * Group by StudentCourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCourseProgressGroupByArgs} args - Group by arguments.
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
      T extends studentCourseProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentCourseProgressGroupByArgs['orderBy'] }
        : { orderBy?: studentCourseProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studentCourseProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentCourseProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the studentCourseProgress model
   */
  readonly fields: studentCourseProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for studentCourseProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentCourseProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courseResource<T extends courseResourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseResourceDefaultArgs<ExtArgs>>): Prisma__courseResourceClient<$Result.GetResult<Prisma.$courseResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the studentCourseProgress model
   */
  interface studentCourseProgressFieldRefs {
    readonly id: FieldRef<"studentCourseProgress", 'Int'>
    readonly studentId: FieldRef<"studentCourseProgress", 'Int'>
    readonly courseResourceId: FieldRef<"studentCourseProgress", 'Int'>
    readonly status: FieldRef<"studentCourseProgress", 'String'>
    readonly scoreAwarded: FieldRef<"studentCourseProgress", 'Boolean'>
    readonly startedAt: FieldRef<"studentCourseProgress", 'DateTime'>
    readonly completedAt: FieldRef<"studentCourseProgress", 'DateTime'>
    readonly createdAt: FieldRef<"studentCourseProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"studentCourseProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * studentCourseProgress findUnique
   */
  export type studentCourseProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which studentCourseProgress to fetch.
     */
    where: studentCourseProgressWhereUniqueInput
  }

  /**
   * studentCourseProgress findUniqueOrThrow
   */
  export type studentCourseProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which studentCourseProgress to fetch.
     */
    where: studentCourseProgressWhereUniqueInput
  }

  /**
   * studentCourseProgress findFirst
   */
  export type studentCourseProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which studentCourseProgress to fetch.
     */
    where?: studentCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studentCourseProgresses to fetch.
     */
    orderBy?: studentCourseProgressOrderByWithRelationInput | studentCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for studentCourseProgresses.
     */
    cursor?: studentCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studentCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studentCourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of studentCourseProgresses.
     */
    distinct?: StudentCourseProgressScalarFieldEnum | StudentCourseProgressScalarFieldEnum[]
  }

  /**
   * studentCourseProgress findFirstOrThrow
   */
  export type studentCourseProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which studentCourseProgress to fetch.
     */
    where?: studentCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studentCourseProgresses to fetch.
     */
    orderBy?: studentCourseProgressOrderByWithRelationInput | studentCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for studentCourseProgresses.
     */
    cursor?: studentCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studentCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studentCourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of studentCourseProgresses.
     */
    distinct?: StudentCourseProgressScalarFieldEnum | StudentCourseProgressScalarFieldEnum[]
  }

  /**
   * studentCourseProgress findMany
   */
  export type studentCourseProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which studentCourseProgresses to fetch.
     */
    where?: studentCourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studentCourseProgresses to fetch.
     */
    orderBy?: studentCourseProgressOrderByWithRelationInput | studentCourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing studentCourseProgresses.
     */
    cursor?: studentCourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studentCourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studentCourseProgresses.
     */
    skip?: number
    distinct?: StudentCourseProgressScalarFieldEnum | StudentCourseProgressScalarFieldEnum[]
  }

  /**
   * studentCourseProgress create
   */
  export type studentCourseProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a studentCourseProgress.
     */
    data: XOR<studentCourseProgressCreateInput, studentCourseProgressUncheckedCreateInput>
  }

  /**
   * studentCourseProgress createMany
   */
  export type studentCourseProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many studentCourseProgresses.
     */
    data: studentCourseProgressCreateManyInput | studentCourseProgressCreateManyInput[]
  }

  /**
   * studentCourseProgress createManyAndReturn
   */
  export type studentCourseProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * The data used to create many studentCourseProgresses.
     */
    data: studentCourseProgressCreateManyInput | studentCourseProgressCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * studentCourseProgress update
   */
  export type studentCourseProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a studentCourseProgress.
     */
    data: XOR<studentCourseProgressUpdateInput, studentCourseProgressUncheckedUpdateInput>
    /**
     * Choose, which studentCourseProgress to update.
     */
    where: studentCourseProgressWhereUniqueInput
  }

  /**
   * studentCourseProgress updateMany
   */
  export type studentCourseProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update studentCourseProgresses.
     */
    data: XOR<studentCourseProgressUpdateManyMutationInput, studentCourseProgressUncheckedUpdateManyInput>
    /**
     * Filter which studentCourseProgresses to update
     */
    where?: studentCourseProgressWhereInput
    /**
     * Limit how many studentCourseProgresses to update.
     */
    limit?: number
  }

  /**
   * studentCourseProgress updateManyAndReturn
   */
  export type studentCourseProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * The data used to update studentCourseProgresses.
     */
    data: XOR<studentCourseProgressUpdateManyMutationInput, studentCourseProgressUncheckedUpdateManyInput>
    /**
     * Filter which studentCourseProgresses to update
     */
    where?: studentCourseProgressWhereInput
    /**
     * Limit how many studentCourseProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * studentCourseProgress upsert
   */
  export type studentCourseProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the studentCourseProgress to update in case it exists.
     */
    where: studentCourseProgressWhereUniqueInput
    /**
     * In case the studentCourseProgress found by the `where` argument doesn't exist, create a new studentCourseProgress with this data.
     */
    create: XOR<studentCourseProgressCreateInput, studentCourseProgressUncheckedCreateInput>
    /**
     * In case the studentCourseProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentCourseProgressUpdateInput, studentCourseProgressUncheckedUpdateInput>
  }

  /**
   * studentCourseProgress delete
   */
  export type studentCourseProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressInclude<ExtArgs> | null
    /**
     * Filter which studentCourseProgress to delete.
     */
    where: studentCourseProgressWhereUniqueInput
  }

  /**
   * studentCourseProgress deleteMany
   */
  export type studentCourseProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which studentCourseProgresses to delete
     */
    where?: studentCourseProgressWhereInput
    /**
     * Limit how many studentCourseProgresses to delete.
     */
    limit?: number
  }

  /**
   * studentCourseProgress without action
   */
  export type studentCourseProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studentCourseProgress
     */
    select?: studentCourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studentCourseProgress
     */
    omit?: studentCourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentCourseProgressInclude<ExtArgs> | null
  }


  /**
   * Model chatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _avg: ChatSessionAvgAggregateOutputType | null
    _sum: ChatSessionSumAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type ChatSessionSumAggregateOutputType = {
    id: number | null
    studentId: number | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    startedAt: Date | null
    lastActive: Date | null
    isActive: boolean | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    startedAt: Date | null
    lastActive: Date | null
    isActive: boolean | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    studentId: number
    startedAt: number
    lastActive: number
    isActive: number
    _all: number
  }


  export type ChatSessionAvgAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type ChatSessionSumAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type ChatSessionMinAggregateInputType = {
    id?: true
    studentId?: true
    startedAt?: true
    lastActive?: true
    isActive?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    studentId?: true
    startedAt?: true
    lastActive?: true
    isActive?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    studentId?: true
    startedAt?: true
    lastActive?: true
    isActive?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatSession to aggregate.
     */
    where?: chatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatSessions to fetch.
     */
    orderBy?: chatSessionOrderByWithRelationInput | chatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type chatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatSessionWhereInput
    orderBy?: chatSessionOrderByWithAggregationInput | chatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: chatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _avg?: ChatSessionAvgAggregateInputType
    _sum?: ChatSessionSumAggregateInputType
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: number
    studentId: number
    startedAt: Date
    lastActive: Date
    isActive: boolean
    _count: ChatSessionCountAggregateOutputType | null
    _avg: ChatSessionAvgAggregateOutputType | null
    _sum: ChatSessionSumAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends chatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type chatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    startedAt?: boolean
    lastActive?: boolean
    isActive?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    messages?: boolean | chatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type chatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    startedAt?: boolean
    lastActive?: boolean
    isActive?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type chatSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    startedAt?: boolean
    lastActive?: boolean
    isActive?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type chatSessionSelectScalar = {
    id?: boolean
    studentId?: boolean
    startedAt?: boolean
    lastActive?: boolean
    isActive?: boolean
  }

  export type chatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "startedAt" | "lastActive" | "isActive", ExtArgs["result"]["chatSession"]>
  export type chatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    messages?: boolean | chatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type chatSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
  }
  export type chatSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
  }

  export type $chatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatSession"
    objects: {
      student: Prisma.$studentPayload<ExtArgs>
      messages: Prisma.$chatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      startedAt: Date
      lastActive: Date
      isActive: boolean
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type chatSessionGetPayload<S extends boolean | null | undefined | chatSessionDefaultArgs> = $Result.GetResult<Prisma.$chatSessionPayload, S>

  type chatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface chatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatSession'], meta: { name: 'chatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {chatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatSessionFindUniqueArgs>(args: SelectSubset<T, chatSessionFindUniqueArgs<ExtArgs>>): Prisma__chatSessionClient<$Result.GetResult<Prisma.$chatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, chatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatSessionClient<$Result.GetResult<Prisma.$chatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatSessionFindFirstArgs>(args?: SelectSubset<T, chatSessionFindFirstArgs<ExtArgs>>): Prisma__chatSessionClient<$Result.GetResult<Prisma.$chatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, chatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatSessionClient<$Result.GetResult<Prisma.$chatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatSessionFindManyArgs>(args?: SelectSubset<T, chatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {chatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends chatSessionCreateArgs>(args: SelectSubset<T, chatSessionCreateArgs<ExtArgs>>): Prisma__chatSessionClient<$Result.GetResult<Prisma.$chatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {chatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatSessionCreateManyArgs>(args?: SelectSubset<T, chatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {chatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, chatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatSession.
     * @param {chatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends chatSessionDeleteArgs>(args: SelectSubset<T, chatSessionDeleteArgs<ExtArgs>>): Prisma__chatSessionClient<$Result.GetResult<Prisma.$chatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {chatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatSessionUpdateArgs>(args: SelectSubset<T, chatSessionUpdateArgs<ExtArgs>>): Prisma__chatSessionClient<$Result.GetResult<Prisma.$chatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {chatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatSessionDeleteManyArgs>(args?: SelectSubset<T, chatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatSessionUpdateManyArgs>(args: SelectSubset<T, chatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions and returns the data updated in the database.
     * @param {chatSessionUpdateManyAndReturnArgs} args - Arguments to update many ChatSessions.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends chatSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, chatSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatSession.
     * @param {chatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends chatSessionUpsertArgs>(args: SelectSubset<T, chatSessionUpsertArgs<ExtArgs>>): Prisma__chatSessionClient<$Result.GetResult<Prisma.$chatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends chatSessionCountArgs>(
      args?: Subset<T, chatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatSessionGroupByArgs} args - Group by arguments.
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
      T extends chatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatSessionGroupByArgs['orderBy'] }
        : { orderBy?: chatSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatSession model
   */
  readonly fields: chatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends chatSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, chatSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the chatSession model
   */
  interface chatSessionFieldRefs {
    readonly id: FieldRef<"chatSession", 'Int'>
    readonly studentId: FieldRef<"chatSession", 'Int'>
    readonly startedAt: FieldRef<"chatSession", 'DateTime'>
    readonly lastActive: FieldRef<"chatSession", 'DateTime'>
    readonly isActive: FieldRef<"chatSession", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * chatSession findUnique
   */
  export type chatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatSession
     */
    select?: chatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatSession
     */
    omit?: chatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatSessionInclude<ExtArgs> | null
    /**
     * Filter, which chatSession to fetch.
     */
    where: chatSessionWhereUniqueInput
  }

  /**
   * chatSession findUniqueOrThrow
   */
  export type chatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatSession
     */
    select?: chatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatSession
     */
    omit?: chatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatSessionInclude<ExtArgs> | null
    /**
     * Filter, which chatSession to fetch.
     */
    where: chatSessionWhereUniqueInput
  }

  /**
   * chatSession findFirst
   */
  export type chatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatSession
     */
    select?: chatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatSession
     */
    omit?: chatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatSessionInclude<ExtArgs> | null
    /**
     * Filter, which chatSession to fetch.
     */
    where?: chatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatSessions to fetch.
     */
    orderBy?: chatSessionOrderByWithRelationInput | chatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatSessions.
     */
    cursor?: chatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * chatSession findFirstOrThrow
   */
  export type chatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatSession
     */
    select?: chatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatSession
     */
    omit?: chatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatSessionInclude<ExtArgs> | null
    /**
     * Filter, which chatSession to fetch.
     */
    where?: chatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatSessions to fetch.
     */
    orderBy?: chatSessionOrderByWithRelationInput | chatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatSessions.
     */
    cursor?: chatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * chatSession findMany
   */
  export type chatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatSession
     */
    select?: chatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatSession
     */
    omit?: chatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatSessionInclude<ExtArgs> | null
    /**
     * Filter, which chatSessions to fetch.
     */
    where?: chatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatSessions to fetch.
     */
    orderBy?: chatSessionOrderByWithRelationInput | chatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatSessions.
     */
    cursor?: chatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatSessions.
     */
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * chatSession create
   */
  export type chatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatSession
     */
    select?: chatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatSession
     */
    omit?: chatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a chatSession.
     */
    data: XOR<chatSessionCreateInput, chatSessionUncheckedCreateInput>
  }

  /**
   * chatSession createMany
   */
  export type chatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatSessions.
     */
    data: chatSessionCreateManyInput | chatSessionCreateManyInput[]
  }

  /**
   * chatSession createManyAndReturn
   */
  export type chatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatSession
     */
    select?: chatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatSession
     */
    omit?: chatSessionOmit<ExtArgs> | null
    /**
     * The data used to create many chatSessions.
     */
    data: chatSessionCreateManyInput | chatSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatSession update
   */
  export type chatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatSession
     */
    select?: chatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatSession
     */
    omit?: chatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a chatSession.
     */
    data: XOR<chatSessionUpdateInput, chatSessionUncheckedUpdateInput>
    /**
     * Choose, which chatSession to update.
     */
    where: chatSessionWhereUniqueInput
  }

  /**
   * chatSession updateMany
   */
  export type chatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatSessions.
     */
    data: XOR<chatSessionUpdateManyMutationInput, chatSessionUncheckedUpdateManyInput>
    /**
     * Filter which chatSessions to update
     */
    where?: chatSessionWhereInput
    /**
     * Limit how many chatSessions to update.
     */
    limit?: number
  }

  /**
   * chatSession updateManyAndReturn
   */
  export type chatSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatSession
     */
    select?: chatSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatSession
     */
    omit?: chatSessionOmit<ExtArgs> | null
    /**
     * The data used to update chatSessions.
     */
    data: XOR<chatSessionUpdateManyMutationInput, chatSessionUncheckedUpdateManyInput>
    /**
     * Filter which chatSessions to update
     */
    where?: chatSessionWhereInput
    /**
     * Limit how many chatSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatSession upsert
   */
  export type chatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatSession
     */
    select?: chatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatSession
     */
    omit?: chatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the chatSession to update in case it exists.
     */
    where: chatSessionWhereUniqueInput
    /**
     * In case the chatSession found by the `where` argument doesn't exist, create a new chatSession with this data.
     */
    create: XOR<chatSessionCreateInput, chatSessionUncheckedCreateInput>
    /**
     * In case the chatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatSessionUpdateInput, chatSessionUncheckedUpdateInput>
  }

  /**
   * chatSession delete
   */
  export type chatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatSession
     */
    select?: chatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatSession
     */
    omit?: chatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatSessionInclude<ExtArgs> | null
    /**
     * Filter which chatSession to delete.
     */
    where: chatSessionWhereUniqueInput
  }

  /**
   * chatSession deleteMany
   */
  export type chatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatSessions to delete
     */
    where?: chatSessionWhereInput
    /**
     * Limit how many chatSessions to delete.
     */
    limit?: number
  }

  /**
   * chatSession.messages
   */
  export type chatSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    where?: chatMessageWhereInput
    orderBy?: chatMessageOrderByWithRelationInput | chatMessageOrderByWithRelationInput[]
    cursor?: chatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * chatSession without action
   */
  export type chatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatSession
     */
    select?: chatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatSession
     */
    omit?: chatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatSessionInclude<ExtArgs> | null
  }


  /**
   * Model chatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageAvgAggregateOutputType = {
    id: number | null
    sessionId: number | null
  }

  export type ChatMessageSumAggregateOutputType = {
    id: number | null
    sessionId: number | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: number | null
    sessionId: number | null
    sender: string | null
    message: string | null
    intent: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: number | null
    sessionId: number | null
    sender: string | null
    message: string | null
    intent: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    sessionId: number
    sender: number
    message: number
    intent: number
    createdAt: number
    _all: number
  }


  export type ChatMessageAvgAggregateInputType = {
    id?: true
    sessionId?: true
  }

  export type ChatMessageSumAggregateInputType = {
    id?: true
    sessionId?: true
  }

  export type ChatMessageMinAggregateInputType = {
    id?: true
    sessionId?: true
    sender?: true
    message?: true
    intent?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    sessionId?: true
    sender?: true
    message?: true
    intent?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    sessionId?: true
    sender?: true
    message?: true
    intent?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatMessage to aggregate.
     */
    where?: chatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatMessages to fetch.
     */
    orderBy?: chatMessageOrderByWithRelationInput | chatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type chatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatMessageWhereInput
    orderBy?: chatMessageOrderByWithAggregationInput | chatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: chatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _avg?: ChatMessageAvgAggregateInputType
    _sum?: ChatMessageSumAggregateInputType
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: number
    sessionId: number
    sender: string
    message: string
    intent: string | null
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends chatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type chatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    sender?: boolean
    message?: boolean
    intent?: boolean
    createdAt?: boolean
    session?: boolean | chatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type chatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    sender?: boolean
    message?: boolean
    intent?: boolean
    createdAt?: boolean
    session?: boolean | chatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type chatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    sender?: boolean
    message?: boolean
    intent?: boolean
    createdAt?: boolean
    session?: boolean | chatSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type chatMessageSelectScalar = {
    id?: boolean
    sessionId?: boolean
    sender?: boolean
    message?: boolean
    intent?: boolean
    createdAt?: boolean
  }

  export type chatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "sender" | "message" | "intent" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type chatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | chatSessionDefaultArgs<ExtArgs>
  }
  export type chatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | chatSessionDefaultArgs<ExtArgs>
  }
  export type chatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | chatSessionDefaultArgs<ExtArgs>
  }

  export type $chatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chatMessage"
    objects: {
      session: Prisma.$chatSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sessionId: number
      sender: string
      message: string
      intent: string | null
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type chatMessageGetPayload<S extends boolean | null | undefined | chatMessageDefaultArgs> = $Result.GetResult<Prisma.$chatMessagePayload, S>

  type chatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface chatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chatMessage'], meta: { name: 'chatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {chatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatMessageFindUniqueArgs>(args: SelectSubset<T, chatMessageFindUniqueArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, chatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatMessageFindFirstArgs>(args?: SelectSubset<T, chatMessageFindFirstArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, chatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatMessageFindManyArgs>(args?: SelectSubset<T, chatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {chatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends chatMessageCreateArgs>(args: SelectSubset<T, chatMessageCreateArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {chatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatMessageCreateManyArgs>(args?: SelectSubset<T, chatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {chatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, chatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {chatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends chatMessageDeleteArgs>(args: SelectSubset<T, chatMessageDeleteArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {chatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatMessageUpdateArgs>(args: SelectSubset<T, chatMessageUpdateArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {chatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatMessageDeleteManyArgs>(args?: SelectSubset<T, chatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatMessageUpdateManyArgs>(args: SelectSubset<T, chatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {chatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends chatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, chatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {chatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends chatMessageUpsertArgs>(args: SelectSubset<T, chatMessageUpsertArgs<ExtArgs>>): Prisma__chatMessageClient<$Result.GetResult<Prisma.$chatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends chatMessageCountArgs>(
      args?: Subset<T, chatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatMessageGroupByArgs} args - Group by arguments.
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
      T extends chatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatMessageGroupByArgs['orderBy'] }
        : { orderBy?: chatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chatMessage model
   */
  readonly fields: chatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends chatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chatSessionDefaultArgs<ExtArgs>>): Prisma__chatSessionClient<$Result.GetResult<Prisma.$chatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the chatMessage model
   */
  interface chatMessageFieldRefs {
    readonly id: FieldRef<"chatMessage", 'Int'>
    readonly sessionId: FieldRef<"chatMessage", 'Int'>
    readonly sender: FieldRef<"chatMessage", 'String'>
    readonly message: FieldRef<"chatMessage", 'String'>
    readonly intent: FieldRef<"chatMessage", 'String'>
    readonly createdAt: FieldRef<"chatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chatMessage findUnique
   */
  export type chatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * Filter, which chatMessage to fetch.
     */
    where: chatMessageWhereUniqueInput
  }

  /**
   * chatMessage findUniqueOrThrow
   */
  export type chatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * Filter, which chatMessage to fetch.
     */
    where: chatMessageWhereUniqueInput
  }

  /**
   * chatMessage findFirst
   */
  export type chatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * Filter, which chatMessage to fetch.
     */
    where?: chatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatMessages to fetch.
     */
    orderBy?: chatMessageOrderByWithRelationInput | chatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatMessages.
     */
    cursor?: chatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * chatMessage findFirstOrThrow
   */
  export type chatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * Filter, which chatMessage to fetch.
     */
    where?: chatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatMessages to fetch.
     */
    orderBy?: chatMessageOrderByWithRelationInput | chatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chatMessages.
     */
    cursor?: chatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * chatMessage findMany
   */
  export type chatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * Filter, which chatMessages to fetch.
     */
    where?: chatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chatMessages to fetch.
     */
    orderBy?: chatMessageOrderByWithRelationInput | chatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chatMessages.
     */
    cursor?: chatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * chatMessage create
   */
  export type chatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a chatMessage.
     */
    data: XOR<chatMessageCreateInput, chatMessageUncheckedCreateInput>
  }

  /**
   * chatMessage createMany
   */
  export type chatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chatMessages.
     */
    data: chatMessageCreateManyInput | chatMessageCreateManyInput[]
  }

  /**
   * chatMessage createManyAndReturn
   */
  export type chatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many chatMessages.
     */
    data: chatMessageCreateManyInput | chatMessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatMessage update
   */
  export type chatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a chatMessage.
     */
    data: XOR<chatMessageUpdateInput, chatMessageUncheckedUpdateInput>
    /**
     * Choose, which chatMessage to update.
     */
    where: chatMessageWhereUniqueInput
  }

  /**
   * chatMessage updateMany
   */
  export type chatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chatMessages.
     */
    data: XOR<chatMessageUpdateManyMutationInput, chatMessageUncheckedUpdateManyInput>
    /**
     * Filter which chatMessages to update
     */
    where?: chatMessageWhereInput
    /**
     * Limit how many chatMessages to update.
     */
    limit?: number
  }

  /**
   * chatMessage updateManyAndReturn
   */
  export type chatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * The data used to update chatMessages.
     */
    data: XOR<chatMessageUpdateManyMutationInput, chatMessageUncheckedUpdateManyInput>
    /**
     * Filter which chatMessages to update
     */
    where?: chatMessageWhereInput
    /**
     * Limit how many chatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chatMessage upsert
   */
  export type chatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the chatMessage to update in case it exists.
     */
    where: chatMessageWhereUniqueInput
    /**
     * In case the chatMessage found by the `where` argument doesn't exist, create a new chatMessage with this data.
     */
    create: XOR<chatMessageCreateInput, chatMessageUncheckedCreateInput>
    /**
     * In case the chatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatMessageUpdateInput, chatMessageUncheckedUpdateInput>
  }

  /**
   * chatMessage delete
   */
  export type chatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
    /**
     * Filter which chatMessage to delete.
     */
    where: chatMessageWhereUniqueInput
  }

  /**
   * chatMessage deleteMany
   */
  export type chatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chatMessages to delete
     */
    where?: chatMessageWhereInput
    /**
     * Limit how many chatMessages to delete.
     */
    limit?: number
  }

  /**
   * chatMessage without action
   */
  export type chatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chatMessage
     */
    select?: chatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chatMessage
     */
    omit?: chatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    studentName: 'studentName',
    companyName: 'companyName',
    certificateFile: 'certificateFile',
    durationMonths: 'durationMonths',
    experienceRating: 'experienceRating',
    createdAt: 'createdAt'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    studentId: 'studentId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    phone: 'phone',
    country: 'country',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    resume: 'resume',
    universityName: 'universityName',
    university: 'university',
    degree: 'degree',
    department: 'department',
    semester: 'semester',
    cgpa: 'cgpa',
    graduationYear: 'graduationYear',
    experience: 'experience',
    locationPreferences: 'locationPreferences',
    sectorPreferences: 'sectorPreferences',
    additionalInformation: 'additionalInformation',
    targetRole: 'targetRole',
    bio: 'bio',
    interests: 'interests',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    email: 'email',
    password: 'password',
    registrationNumber: 'registrationNumber',
    industrySector: 'industrySector',
    companySize: 'companySize',
    companyDescription: 'companyDescription',
    companyWebsite: 'companyWebsite',
    contactPersonName: 'contactPersonName',
    designation: 'designation',
    phoneNumber: 'phoneNumber',
    officeAddress: 'officeAddress',
    registrationCertificate: 'registrationCertificate',
    gstCertificate: 'gstCertificate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const InternshipScalarFieldEnum: {
    id: 'id',
    companyId: 'companyId',
    title: 'title',
    companyName: 'companyName',
    department: 'department',
    location: 'location',
    workMode: 'workMode',
    isRemote: 'isRemote',
    durationMonths: 'durationMonths',
    duration: 'duration',
    stipend: 'stipend',
    roleDescription: 'roleDescription',
    learningOutcomes: 'learningOutcomes',
    numberOfPositions: 'numberOfPositions',
    minimumDegreeLevel: 'minimumDegreeLevel',
    preferredFieldOfStudy: 'preferredFieldOfStudy',
    minimumGpaPercentage: 'minimumGpaPercentage',
    graduationYearRange: 'graduationYearRange',
    additionalPreferences: 'additionalPreferences',
    status: 'status',
    skillTags: 'skillTags',
    applyUrl: 'applyUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InternshipScalarFieldEnum = (typeof InternshipScalarFieldEnum)[keyof typeof InternshipScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const StudentSkillScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    skillId: 'skillId',
    level: 'level',
    score: 'score',
    chatScore: 'chatScore',
    isCompleted: 'isCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentSkillScalarFieldEnum = (typeof StudentSkillScalarFieldEnum)[keyof typeof StudentSkillScalarFieldEnum]


  export const InternshipSkillScalarFieldEnum: {
    id: 'id',
    internshipId: 'internshipId',
    skillId: 'skillId'
  };

  export type InternshipSkillScalarFieldEnum = (typeof InternshipSkillScalarFieldEnum)[keyof typeof InternshipSkillScalarFieldEnum]


  export const InternshipSkillRequirementScalarFieldEnum: {
    id: 'id',
    internshipId: 'internshipId',
    skillId: 'skillId',
    requiredScore: 'requiredScore'
  };

  export type InternshipSkillRequirementScalarFieldEnum = (typeof InternshipSkillRequirementScalarFieldEnum)[keyof typeof InternshipSkillRequirementScalarFieldEnum]


  export const CourseResourceScalarFieldEnum: {
    id: 'id',
    skillId: 'skillId',
    title: 'title',
    platform: 'platform',
    courseUrl: 'courseUrl',
    difficulty: 'difficulty',
    estimatedHours: 'estimatedHours',
    description: 'description',
    scoreBoost: 'scoreBoost',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseResourceScalarFieldEnum = (typeof CourseResourceScalarFieldEnum)[keyof typeof CourseResourceScalarFieldEnum]


  export const StudentCourseProgressScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    courseResourceId: 'courseResourceId',
    status: 'status',
    scoreAwarded: 'scoreAwarded',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentCourseProgressScalarFieldEnum = (typeof StudentCourseProgressScalarFieldEnum)[keyof typeof StudentCourseProgressScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    startedAt: 'startedAt',
    lastActive: 'lastActive',
    isActive: 'isActive'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    sender: 'sender',
    message: 'message',
    intent: 'intent',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type certificateWhereInput = {
    AND?: certificateWhereInput | certificateWhereInput[]
    OR?: certificateWhereInput[]
    NOT?: certificateWhereInput | certificateWhereInput[]
    id?: IntFilter<"certificate"> | number
    studentName?: StringFilter<"certificate"> | string
    companyName?: StringFilter<"certificate"> | string
    certificateFile?: StringFilter<"certificate"> | string
    durationMonths?: IntFilter<"certificate"> | number
    experienceRating?: IntFilter<"certificate"> | number
    createdAt?: DateTimeFilter<"certificate"> | Date | string
  }

  export type certificateOrderByWithRelationInput = {
    id?: SortOrder
    studentName?: SortOrder
    companyName?: SortOrder
    certificateFile?: SortOrder
    durationMonths?: SortOrder
    experienceRating?: SortOrder
    createdAt?: SortOrder
  }

  export type certificateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: certificateWhereInput | certificateWhereInput[]
    OR?: certificateWhereInput[]
    NOT?: certificateWhereInput | certificateWhereInput[]
    studentName?: StringFilter<"certificate"> | string
    companyName?: StringFilter<"certificate"> | string
    certificateFile?: StringFilter<"certificate"> | string
    durationMonths?: IntFilter<"certificate"> | number
    experienceRating?: IntFilter<"certificate"> | number
    createdAt?: DateTimeFilter<"certificate"> | Date | string
  }, "id">

  export type certificateOrderByWithAggregationInput = {
    id?: SortOrder
    studentName?: SortOrder
    companyName?: SortOrder
    certificateFile?: SortOrder
    durationMonths?: SortOrder
    experienceRating?: SortOrder
    createdAt?: SortOrder
    _count?: certificateCountOrderByAggregateInput
    _avg?: certificateAvgOrderByAggregateInput
    _max?: certificateMaxOrderByAggregateInput
    _min?: certificateMinOrderByAggregateInput
    _sum?: certificateSumOrderByAggregateInput
  }

  export type certificateScalarWhereWithAggregatesInput = {
    AND?: certificateScalarWhereWithAggregatesInput | certificateScalarWhereWithAggregatesInput[]
    OR?: certificateScalarWhereWithAggregatesInput[]
    NOT?: certificateScalarWhereWithAggregatesInput | certificateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"certificate"> | number
    studentName?: StringWithAggregatesFilter<"certificate"> | string
    companyName?: StringWithAggregatesFilter<"certificate"> | string
    certificateFile?: StringWithAggregatesFilter<"certificate"> | string
    durationMonths?: IntWithAggregatesFilter<"certificate"> | number
    experienceRating?: IntWithAggregatesFilter<"certificate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"certificate"> | Date | string
  }

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    id?: IntFilter<"student"> | number
    name?: StringNullableFilter<"student"> | string | null
    studentId?: StringNullableFilter<"student"> | string | null
    firstName?: StringNullableFilter<"student"> | string | null
    lastName?: StringNullableFilter<"student"> | string | null
    email?: StringNullableFilter<"student"> | string | null
    password?: StringNullableFilter<"student"> | string | null
    phone?: StringNullableFilter<"student"> | string | null
    country?: StringNullableFilter<"student"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"student"> | Date | string | null
    gender?: StringNullableFilter<"student"> | string | null
    resume?: StringNullableFilter<"student"> | string | null
    universityName?: StringNullableFilter<"student"> | string | null
    university?: StringNullableFilter<"student"> | string | null
    degree?: StringNullableFilter<"student"> | string | null
    department?: StringNullableFilter<"student"> | string | null
    semester?: StringNullableFilter<"student"> | string | null
    cgpa?: StringNullableFilter<"student"> | string | null
    graduationYear?: StringNullableFilter<"student"> | string | null
    experience?: StringNullableFilter<"student"> | string | null
    locationPreferences?: StringNullableFilter<"student"> | string | null
    sectorPreferences?: StringNullableFilter<"student"> | string | null
    additionalInformation?: StringNullableFilter<"student"> | string | null
    targetRole?: StringNullableFilter<"student"> | string | null
    bio?: StringNullableFilter<"student"> | string | null
    interests?: StringNullableFilter<"student"> | string | null
    createdAt?: DateTimeFilter<"student"> | Date | string
    updatedAt?: DateTimeFilter<"student"> | Date | string
    skills?: StudentSkillListRelationFilter
    courseProgress?: StudentCourseProgressListRelationFilter
    chatSessions?: ChatSessionListRelationFilter
  }

  export type studentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    resume?: SortOrderInput | SortOrder
    universityName?: SortOrderInput | SortOrder
    university?: SortOrderInput | SortOrder
    degree?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    cgpa?: SortOrderInput | SortOrder
    graduationYear?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    locationPreferences?: SortOrderInput | SortOrder
    sectorPreferences?: SortOrderInput | SortOrder
    additionalInformation?: SortOrderInput | SortOrder
    targetRole?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    interests?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skills?: studentSkillOrderByRelationAggregateInput
    courseProgress?: studentCourseProgressOrderByRelationAggregateInput
    chatSessions?: chatSessionOrderByRelationAggregateInput
  }

  export type studentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId?: string
    email?: string
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    name?: StringNullableFilter<"student"> | string | null
    firstName?: StringNullableFilter<"student"> | string | null
    lastName?: StringNullableFilter<"student"> | string | null
    password?: StringNullableFilter<"student"> | string | null
    phone?: StringNullableFilter<"student"> | string | null
    country?: StringNullableFilter<"student"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"student"> | Date | string | null
    gender?: StringNullableFilter<"student"> | string | null
    resume?: StringNullableFilter<"student"> | string | null
    universityName?: StringNullableFilter<"student"> | string | null
    university?: StringNullableFilter<"student"> | string | null
    degree?: StringNullableFilter<"student"> | string | null
    department?: StringNullableFilter<"student"> | string | null
    semester?: StringNullableFilter<"student"> | string | null
    cgpa?: StringNullableFilter<"student"> | string | null
    graduationYear?: StringNullableFilter<"student"> | string | null
    experience?: StringNullableFilter<"student"> | string | null
    locationPreferences?: StringNullableFilter<"student"> | string | null
    sectorPreferences?: StringNullableFilter<"student"> | string | null
    additionalInformation?: StringNullableFilter<"student"> | string | null
    targetRole?: StringNullableFilter<"student"> | string | null
    bio?: StringNullableFilter<"student"> | string | null
    interests?: StringNullableFilter<"student"> | string | null
    createdAt?: DateTimeFilter<"student"> | Date | string
    updatedAt?: DateTimeFilter<"student"> | Date | string
    skills?: StudentSkillListRelationFilter
    courseProgress?: StudentCourseProgressListRelationFilter
    chatSessions?: ChatSessionListRelationFilter
  }, "id" | "studentId" | "email">

  export type studentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    studentId?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    resume?: SortOrderInput | SortOrder
    universityName?: SortOrderInput | SortOrder
    university?: SortOrderInput | SortOrder
    degree?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    cgpa?: SortOrderInput | SortOrder
    graduationYear?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    locationPreferences?: SortOrderInput | SortOrder
    sectorPreferences?: SortOrderInput | SortOrder
    additionalInformation?: SortOrderInput | SortOrder
    targetRole?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    interests?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: studentCountOrderByAggregateInput
    _avg?: studentAvgOrderByAggregateInput
    _max?: studentMaxOrderByAggregateInput
    _min?: studentMinOrderByAggregateInput
    _sum?: studentSumOrderByAggregateInput
  }

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    OR?: studentScalarWhereWithAggregatesInput[]
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"student"> | number
    name?: StringNullableWithAggregatesFilter<"student"> | string | null
    studentId?: StringNullableWithAggregatesFilter<"student"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"student"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"student"> | string | null
    email?: StringNullableWithAggregatesFilter<"student"> | string | null
    password?: StringNullableWithAggregatesFilter<"student"> | string | null
    phone?: StringNullableWithAggregatesFilter<"student"> | string | null
    country?: StringNullableWithAggregatesFilter<"student"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"student"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"student"> | string | null
    resume?: StringNullableWithAggregatesFilter<"student"> | string | null
    universityName?: StringNullableWithAggregatesFilter<"student"> | string | null
    university?: StringNullableWithAggregatesFilter<"student"> | string | null
    degree?: StringNullableWithAggregatesFilter<"student"> | string | null
    department?: StringNullableWithAggregatesFilter<"student"> | string | null
    semester?: StringNullableWithAggregatesFilter<"student"> | string | null
    cgpa?: StringNullableWithAggregatesFilter<"student"> | string | null
    graduationYear?: StringNullableWithAggregatesFilter<"student"> | string | null
    experience?: StringNullableWithAggregatesFilter<"student"> | string | null
    locationPreferences?: StringNullableWithAggregatesFilter<"student"> | string | null
    sectorPreferences?: StringNullableWithAggregatesFilter<"student"> | string | null
    additionalInformation?: StringNullableWithAggregatesFilter<"student"> | string | null
    targetRole?: StringNullableWithAggregatesFilter<"student"> | string | null
    bio?: StringNullableWithAggregatesFilter<"student"> | string | null
    interests?: StringNullableWithAggregatesFilter<"student"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"student"> | Date | string
  }

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    id?: IntFilter<"company"> | number
    companyName?: StringFilter<"company"> | string
    email?: StringFilter<"company"> | string
    password?: StringFilter<"company"> | string
    registrationNumber?: StringNullableFilter<"company"> | string | null
    industrySector?: StringNullableFilter<"company"> | string | null
    companySize?: StringNullableFilter<"company"> | string | null
    companyDescription?: StringNullableFilter<"company"> | string | null
    companyWebsite?: StringNullableFilter<"company"> | string | null
    contactPersonName?: StringNullableFilter<"company"> | string | null
    designation?: StringNullableFilter<"company"> | string | null
    phoneNumber?: StringNullableFilter<"company"> | string | null
    officeAddress?: StringNullableFilter<"company"> | string | null
    registrationCertificate?: StringNullableFilter<"company"> | string | null
    gstCertificate?: StringNullableFilter<"company"> | string | null
    createdAt?: DateTimeFilter<"company"> | Date | string
    updatedAt?: DateTimeFilter<"company"> | Date | string
    internships?: InternshipListRelationFilter
  }

  export type companyOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registrationNumber?: SortOrderInput | SortOrder
    industrySector?: SortOrderInput | SortOrder
    companySize?: SortOrderInput | SortOrder
    companyDescription?: SortOrderInput | SortOrder
    companyWebsite?: SortOrderInput | SortOrder
    contactPersonName?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    officeAddress?: SortOrderInput | SortOrder
    registrationCertificate?: SortOrderInput | SortOrder
    gstCertificate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    internships?: internshipOrderByRelationAggregateInput
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    companyName?: StringFilter<"company"> | string
    password?: StringFilter<"company"> | string
    registrationNumber?: StringNullableFilter<"company"> | string | null
    industrySector?: StringNullableFilter<"company"> | string | null
    companySize?: StringNullableFilter<"company"> | string | null
    companyDescription?: StringNullableFilter<"company"> | string | null
    companyWebsite?: StringNullableFilter<"company"> | string | null
    contactPersonName?: StringNullableFilter<"company"> | string | null
    designation?: StringNullableFilter<"company"> | string | null
    phoneNumber?: StringNullableFilter<"company"> | string | null
    officeAddress?: StringNullableFilter<"company"> | string | null
    registrationCertificate?: StringNullableFilter<"company"> | string | null
    gstCertificate?: StringNullableFilter<"company"> | string | null
    createdAt?: DateTimeFilter<"company"> | Date | string
    updatedAt?: DateTimeFilter<"company"> | Date | string
    internships?: InternshipListRelationFilter
  }, "id" | "email">

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registrationNumber?: SortOrderInput | SortOrder
    industrySector?: SortOrderInput | SortOrder
    companySize?: SortOrderInput | SortOrder
    companyDescription?: SortOrderInput | SortOrder
    companyWebsite?: SortOrderInput | SortOrder
    contactPersonName?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    officeAddress?: SortOrderInput | SortOrder
    registrationCertificate?: SortOrderInput | SortOrder
    gstCertificate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: companyCountOrderByAggregateInput
    _avg?: companyAvgOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
    _sum?: companySumOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"company"> | number
    companyName?: StringWithAggregatesFilter<"company"> | string
    email?: StringWithAggregatesFilter<"company"> | string
    password?: StringWithAggregatesFilter<"company"> | string
    registrationNumber?: StringNullableWithAggregatesFilter<"company"> | string | null
    industrySector?: StringNullableWithAggregatesFilter<"company"> | string | null
    companySize?: StringNullableWithAggregatesFilter<"company"> | string | null
    companyDescription?: StringNullableWithAggregatesFilter<"company"> | string | null
    companyWebsite?: StringNullableWithAggregatesFilter<"company"> | string | null
    contactPersonName?: StringNullableWithAggregatesFilter<"company"> | string | null
    designation?: StringNullableWithAggregatesFilter<"company"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"company"> | string | null
    officeAddress?: StringNullableWithAggregatesFilter<"company"> | string | null
    registrationCertificate?: StringNullableWithAggregatesFilter<"company"> | string | null
    gstCertificate?: StringNullableWithAggregatesFilter<"company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"company"> | Date | string
  }

  export type internshipWhereInput = {
    AND?: internshipWhereInput | internshipWhereInput[]
    OR?: internshipWhereInput[]
    NOT?: internshipWhereInput | internshipWhereInput[]
    id?: IntFilter<"internship"> | number
    companyId?: IntNullableFilter<"internship"> | number | null
    title?: StringFilter<"internship"> | string
    companyName?: StringNullableFilter<"internship"> | string | null
    department?: StringNullableFilter<"internship"> | string | null
    location?: StringNullableFilter<"internship"> | string | null
    workMode?: StringNullableFilter<"internship"> | string | null
    isRemote?: BoolFilter<"internship"> | boolean
    durationMonths?: IntNullableFilter<"internship"> | number | null
    duration?: StringNullableFilter<"internship"> | string | null
    stipend?: FloatNullableFilter<"internship"> | number | null
    roleDescription?: StringNullableFilter<"internship"> | string | null
    learningOutcomes?: StringNullableFilter<"internship"> | string | null
    numberOfPositions?: IntFilter<"internship"> | number
    minimumDegreeLevel?: StringNullableFilter<"internship"> | string | null
    preferredFieldOfStudy?: StringNullableFilter<"internship"> | string | null
    minimumGpaPercentage?: StringNullableFilter<"internship"> | string | null
    graduationYearRange?: StringNullableFilter<"internship"> | string | null
    additionalPreferences?: StringNullableFilter<"internship"> | string | null
    status?: StringFilter<"internship"> | string
    skillTags?: StringNullableFilter<"internship"> | string | null
    applyUrl?: StringNullableFilter<"internship"> | string | null
    createdAt?: DateTimeFilter<"internship"> | Date | string
    updatedAt?: DateTimeFilter<"internship"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
    requiredSkills?: InternshipSkillListRelationFilter
    skillRequirements?: InternshipSkillRequirementListRelationFilter
  }

  export type internshipOrderByWithRelationInput = {
    id?: SortOrder
    companyId?: SortOrderInput | SortOrder
    title?: SortOrder
    companyName?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    workMode?: SortOrderInput | SortOrder
    isRemote?: SortOrder
    durationMonths?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    stipend?: SortOrderInput | SortOrder
    roleDescription?: SortOrderInput | SortOrder
    learningOutcomes?: SortOrderInput | SortOrder
    numberOfPositions?: SortOrder
    minimumDegreeLevel?: SortOrderInput | SortOrder
    preferredFieldOfStudy?: SortOrderInput | SortOrder
    minimumGpaPercentage?: SortOrderInput | SortOrder
    graduationYearRange?: SortOrderInput | SortOrder
    additionalPreferences?: SortOrderInput | SortOrder
    status?: SortOrder
    skillTags?: SortOrderInput | SortOrder
    applyUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    company?: companyOrderByWithRelationInput
    requiredSkills?: internshipSkillOrderByRelationAggregateInput
    skillRequirements?: internshipSkillRequirementOrderByRelationAggregateInput
  }

  export type internshipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: internshipWhereInput | internshipWhereInput[]
    OR?: internshipWhereInput[]
    NOT?: internshipWhereInput | internshipWhereInput[]
    companyId?: IntNullableFilter<"internship"> | number | null
    title?: StringFilter<"internship"> | string
    companyName?: StringNullableFilter<"internship"> | string | null
    department?: StringNullableFilter<"internship"> | string | null
    location?: StringNullableFilter<"internship"> | string | null
    workMode?: StringNullableFilter<"internship"> | string | null
    isRemote?: BoolFilter<"internship"> | boolean
    durationMonths?: IntNullableFilter<"internship"> | number | null
    duration?: StringNullableFilter<"internship"> | string | null
    stipend?: FloatNullableFilter<"internship"> | number | null
    roleDescription?: StringNullableFilter<"internship"> | string | null
    learningOutcomes?: StringNullableFilter<"internship"> | string | null
    numberOfPositions?: IntFilter<"internship"> | number
    minimumDegreeLevel?: StringNullableFilter<"internship"> | string | null
    preferredFieldOfStudy?: StringNullableFilter<"internship"> | string | null
    minimumGpaPercentage?: StringNullableFilter<"internship"> | string | null
    graduationYearRange?: StringNullableFilter<"internship"> | string | null
    additionalPreferences?: StringNullableFilter<"internship"> | string | null
    status?: StringFilter<"internship"> | string
    skillTags?: StringNullableFilter<"internship"> | string | null
    applyUrl?: StringNullableFilter<"internship"> | string | null
    createdAt?: DateTimeFilter<"internship"> | Date | string
    updatedAt?: DateTimeFilter<"internship"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, companyWhereInput> | null
    requiredSkills?: InternshipSkillListRelationFilter
    skillRequirements?: InternshipSkillRequirementListRelationFilter
  }, "id">

  export type internshipOrderByWithAggregationInput = {
    id?: SortOrder
    companyId?: SortOrderInput | SortOrder
    title?: SortOrder
    companyName?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    workMode?: SortOrderInput | SortOrder
    isRemote?: SortOrder
    durationMonths?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    stipend?: SortOrderInput | SortOrder
    roleDescription?: SortOrderInput | SortOrder
    learningOutcomes?: SortOrderInput | SortOrder
    numberOfPositions?: SortOrder
    minimumDegreeLevel?: SortOrderInput | SortOrder
    preferredFieldOfStudy?: SortOrderInput | SortOrder
    minimumGpaPercentage?: SortOrderInput | SortOrder
    graduationYearRange?: SortOrderInput | SortOrder
    additionalPreferences?: SortOrderInput | SortOrder
    status?: SortOrder
    skillTags?: SortOrderInput | SortOrder
    applyUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: internshipCountOrderByAggregateInput
    _avg?: internshipAvgOrderByAggregateInput
    _max?: internshipMaxOrderByAggregateInput
    _min?: internshipMinOrderByAggregateInput
    _sum?: internshipSumOrderByAggregateInput
  }

  export type internshipScalarWhereWithAggregatesInput = {
    AND?: internshipScalarWhereWithAggregatesInput | internshipScalarWhereWithAggregatesInput[]
    OR?: internshipScalarWhereWithAggregatesInput[]
    NOT?: internshipScalarWhereWithAggregatesInput | internshipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"internship"> | number
    companyId?: IntNullableWithAggregatesFilter<"internship"> | number | null
    title?: StringWithAggregatesFilter<"internship"> | string
    companyName?: StringNullableWithAggregatesFilter<"internship"> | string | null
    department?: StringNullableWithAggregatesFilter<"internship"> | string | null
    location?: StringNullableWithAggregatesFilter<"internship"> | string | null
    workMode?: StringNullableWithAggregatesFilter<"internship"> | string | null
    isRemote?: BoolWithAggregatesFilter<"internship"> | boolean
    durationMonths?: IntNullableWithAggregatesFilter<"internship"> | number | null
    duration?: StringNullableWithAggregatesFilter<"internship"> | string | null
    stipend?: FloatNullableWithAggregatesFilter<"internship"> | number | null
    roleDescription?: StringNullableWithAggregatesFilter<"internship"> | string | null
    learningOutcomes?: StringNullableWithAggregatesFilter<"internship"> | string | null
    numberOfPositions?: IntWithAggregatesFilter<"internship"> | number
    minimumDegreeLevel?: StringNullableWithAggregatesFilter<"internship"> | string | null
    preferredFieldOfStudy?: StringNullableWithAggregatesFilter<"internship"> | string | null
    minimumGpaPercentage?: StringNullableWithAggregatesFilter<"internship"> | string | null
    graduationYearRange?: StringNullableWithAggregatesFilter<"internship"> | string | null
    additionalPreferences?: StringNullableWithAggregatesFilter<"internship"> | string | null
    status?: StringWithAggregatesFilter<"internship"> | string
    skillTags?: StringNullableWithAggregatesFilter<"internship"> | string | null
    applyUrl?: StringNullableWithAggregatesFilter<"internship"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"internship"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"internship"> | Date | string
  }

  export type skillWhereInput = {
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    id?: IntFilter<"skill"> | number
    name?: StringFilter<"skill"> | string
    category?: StringNullableFilter<"skill"> | string | null
    description?: StringNullableFilter<"skill"> | string | null
    createdAt?: DateTimeFilter<"skill"> | Date | string
    updatedAt?: DateTimeFilter<"skill"> | Date | string
    studentSkills?: StudentSkillListRelationFilter
    internshipSkills?: InternshipSkillListRelationFilter
    internshipSkillRequirements?: InternshipSkillRequirementListRelationFilter
    courseResources?: CourseResourceListRelationFilter
  }

  export type skillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentSkills?: studentSkillOrderByRelationAggregateInput
    internshipSkills?: internshipSkillOrderByRelationAggregateInput
    internshipSkillRequirements?: internshipSkillRequirementOrderByRelationAggregateInput
    courseResources?: courseResourceOrderByRelationAggregateInput
  }

  export type skillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    category?: StringNullableFilter<"skill"> | string | null
    description?: StringNullableFilter<"skill"> | string | null
    createdAt?: DateTimeFilter<"skill"> | Date | string
    updatedAt?: DateTimeFilter<"skill"> | Date | string
    studentSkills?: StudentSkillListRelationFilter
    internshipSkills?: InternshipSkillListRelationFilter
    internshipSkillRequirements?: InternshipSkillRequirementListRelationFilter
    courseResources?: CourseResourceListRelationFilter
  }, "id" | "name">

  export type skillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: skillCountOrderByAggregateInput
    _avg?: skillAvgOrderByAggregateInput
    _max?: skillMaxOrderByAggregateInput
    _min?: skillMinOrderByAggregateInput
    _sum?: skillSumOrderByAggregateInput
  }

  export type skillScalarWhereWithAggregatesInput = {
    AND?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    OR?: skillScalarWhereWithAggregatesInput[]
    NOT?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"skill"> | number
    name?: StringWithAggregatesFilter<"skill"> | string
    category?: StringNullableWithAggregatesFilter<"skill"> | string | null
    description?: StringNullableWithAggregatesFilter<"skill"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"skill"> | Date | string
  }

  export type studentSkillWhereInput = {
    AND?: studentSkillWhereInput | studentSkillWhereInput[]
    OR?: studentSkillWhereInput[]
    NOT?: studentSkillWhereInput | studentSkillWhereInput[]
    id?: IntFilter<"studentSkill"> | number
    studentId?: IntFilter<"studentSkill"> | number
    skillId?: IntFilter<"studentSkill"> | number
    level?: IntFilter<"studentSkill"> | number
    score?: FloatFilter<"studentSkill"> | number
    chatScore?: IntFilter<"studentSkill"> | number
    isCompleted?: BoolFilter<"studentSkill"> | boolean
    createdAt?: DateTimeFilter<"studentSkill"> | Date | string
    updatedAt?: DateTimeFilter<"studentSkill"> | Date | string
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
  }

  export type studentSkillOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    skillId?: SortOrder
    level?: SortOrder
    score?: SortOrder
    chatScore?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: studentOrderByWithRelationInput
    skill?: skillOrderByWithRelationInput
  }

  export type studentSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_skillId?: studentSkillStudentIdSkillIdCompoundUniqueInput
    AND?: studentSkillWhereInput | studentSkillWhereInput[]
    OR?: studentSkillWhereInput[]
    NOT?: studentSkillWhereInput | studentSkillWhereInput[]
    studentId?: IntFilter<"studentSkill"> | number
    skillId?: IntFilter<"studentSkill"> | number
    level?: IntFilter<"studentSkill"> | number
    score?: FloatFilter<"studentSkill"> | number
    chatScore?: IntFilter<"studentSkill"> | number
    isCompleted?: BoolFilter<"studentSkill"> | boolean
    createdAt?: DateTimeFilter<"studentSkill"> | Date | string
    updatedAt?: DateTimeFilter<"studentSkill"> | Date | string
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
  }, "id" | "studentId_skillId">

  export type studentSkillOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    skillId?: SortOrder
    level?: SortOrder
    score?: SortOrder
    chatScore?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: studentSkillCountOrderByAggregateInput
    _avg?: studentSkillAvgOrderByAggregateInput
    _max?: studentSkillMaxOrderByAggregateInput
    _min?: studentSkillMinOrderByAggregateInput
    _sum?: studentSkillSumOrderByAggregateInput
  }

  export type studentSkillScalarWhereWithAggregatesInput = {
    AND?: studentSkillScalarWhereWithAggregatesInput | studentSkillScalarWhereWithAggregatesInput[]
    OR?: studentSkillScalarWhereWithAggregatesInput[]
    NOT?: studentSkillScalarWhereWithAggregatesInput | studentSkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"studentSkill"> | number
    studentId?: IntWithAggregatesFilter<"studentSkill"> | number
    skillId?: IntWithAggregatesFilter<"studentSkill"> | number
    level?: IntWithAggregatesFilter<"studentSkill"> | number
    score?: FloatWithAggregatesFilter<"studentSkill"> | number
    chatScore?: IntWithAggregatesFilter<"studentSkill"> | number
    isCompleted?: BoolWithAggregatesFilter<"studentSkill"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"studentSkill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"studentSkill"> | Date | string
  }

  export type internshipSkillWhereInput = {
    AND?: internshipSkillWhereInput | internshipSkillWhereInput[]
    OR?: internshipSkillWhereInput[]
    NOT?: internshipSkillWhereInput | internshipSkillWhereInput[]
    id?: IntFilter<"internshipSkill"> | number
    internshipId?: IntFilter<"internshipSkill"> | number
    skillId?: IntFilter<"internshipSkill"> | number
    internship?: XOR<InternshipScalarRelationFilter, internshipWhereInput>
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
  }

  export type internshipSkillOrderByWithRelationInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
    internship?: internshipOrderByWithRelationInput
    skill?: skillOrderByWithRelationInput
  }

  export type internshipSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    internshipId_skillId?: internshipSkillInternshipIdSkillIdCompoundUniqueInput
    AND?: internshipSkillWhereInput | internshipSkillWhereInput[]
    OR?: internshipSkillWhereInput[]
    NOT?: internshipSkillWhereInput | internshipSkillWhereInput[]
    internshipId?: IntFilter<"internshipSkill"> | number
    skillId?: IntFilter<"internshipSkill"> | number
    internship?: XOR<InternshipScalarRelationFilter, internshipWhereInput>
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
  }, "id" | "internshipId_skillId">

  export type internshipSkillOrderByWithAggregationInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
    _count?: internshipSkillCountOrderByAggregateInput
    _avg?: internshipSkillAvgOrderByAggregateInput
    _max?: internshipSkillMaxOrderByAggregateInput
    _min?: internshipSkillMinOrderByAggregateInput
    _sum?: internshipSkillSumOrderByAggregateInput
  }

  export type internshipSkillScalarWhereWithAggregatesInput = {
    AND?: internshipSkillScalarWhereWithAggregatesInput | internshipSkillScalarWhereWithAggregatesInput[]
    OR?: internshipSkillScalarWhereWithAggregatesInput[]
    NOT?: internshipSkillScalarWhereWithAggregatesInput | internshipSkillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"internshipSkill"> | number
    internshipId?: IntWithAggregatesFilter<"internshipSkill"> | number
    skillId?: IntWithAggregatesFilter<"internshipSkill"> | number
  }

  export type internshipSkillRequirementWhereInput = {
    AND?: internshipSkillRequirementWhereInput | internshipSkillRequirementWhereInput[]
    OR?: internshipSkillRequirementWhereInput[]
    NOT?: internshipSkillRequirementWhereInput | internshipSkillRequirementWhereInput[]
    id?: IntFilter<"internshipSkillRequirement"> | number
    internshipId?: IntFilter<"internshipSkillRequirement"> | number
    skillId?: IntFilter<"internshipSkillRequirement"> | number
    requiredScore?: FloatFilter<"internshipSkillRequirement"> | number
    internship?: XOR<InternshipScalarRelationFilter, internshipWhereInput>
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
  }

  export type internshipSkillRequirementOrderByWithRelationInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
    requiredScore?: SortOrder
    internship?: internshipOrderByWithRelationInput
    skill?: skillOrderByWithRelationInput
  }

  export type internshipSkillRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    internshipId_skillId?: internshipSkillRequirementInternshipIdSkillIdCompoundUniqueInput
    AND?: internshipSkillRequirementWhereInput | internshipSkillRequirementWhereInput[]
    OR?: internshipSkillRequirementWhereInput[]
    NOT?: internshipSkillRequirementWhereInput | internshipSkillRequirementWhereInput[]
    internshipId?: IntFilter<"internshipSkillRequirement"> | number
    skillId?: IntFilter<"internshipSkillRequirement"> | number
    requiredScore?: FloatFilter<"internshipSkillRequirement"> | number
    internship?: XOR<InternshipScalarRelationFilter, internshipWhereInput>
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
  }, "id" | "internshipId_skillId">

  export type internshipSkillRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
    requiredScore?: SortOrder
    _count?: internshipSkillRequirementCountOrderByAggregateInput
    _avg?: internshipSkillRequirementAvgOrderByAggregateInput
    _max?: internshipSkillRequirementMaxOrderByAggregateInput
    _min?: internshipSkillRequirementMinOrderByAggregateInput
    _sum?: internshipSkillRequirementSumOrderByAggregateInput
  }

  export type internshipSkillRequirementScalarWhereWithAggregatesInput = {
    AND?: internshipSkillRequirementScalarWhereWithAggregatesInput | internshipSkillRequirementScalarWhereWithAggregatesInput[]
    OR?: internshipSkillRequirementScalarWhereWithAggregatesInput[]
    NOT?: internshipSkillRequirementScalarWhereWithAggregatesInput | internshipSkillRequirementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"internshipSkillRequirement"> | number
    internshipId?: IntWithAggregatesFilter<"internshipSkillRequirement"> | number
    skillId?: IntWithAggregatesFilter<"internshipSkillRequirement"> | number
    requiredScore?: FloatWithAggregatesFilter<"internshipSkillRequirement"> | number
  }

  export type courseResourceWhereInput = {
    AND?: courseResourceWhereInput | courseResourceWhereInput[]
    OR?: courseResourceWhereInput[]
    NOT?: courseResourceWhereInput | courseResourceWhereInput[]
    id?: IntFilter<"courseResource"> | number
    skillId?: IntFilter<"courseResource"> | number
    title?: StringFilter<"courseResource"> | string
    platform?: StringFilter<"courseResource"> | string
    courseUrl?: StringFilter<"courseResource"> | string
    difficulty?: StringFilter<"courseResource"> | string
    estimatedHours?: FloatFilter<"courseResource"> | number
    description?: StringNullableFilter<"courseResource"> | string | null
    scoreBoost?: FloatFilter<"courseResource"> | number
    isActive?: BoolFilter<"courseResource"> | boolean
    createdAt?: DateTimeFilter<"courseResource"> | Date | string
    updatedAt?: DateTimeFilter<"courseResource"> | Date | string
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
    studentProgress?: StudentCourseProgressListRelationFilter
  }

  export type courseResourceOrderByWithRelationInput = {
    id?: SortOrder
    skillId?: SortOrder
    title?: SortOrder
    platform?: SortOrder
    courseUrl?: SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrder
    description?: SortOrderInput | SortOrder
    scoreBoost?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skill?: skillOrderByWithRelationInput
    studentProgress?: studentCourseProgressOrderByRelationAggregateInput
  }

  export type courseResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: courseResourceWhereInput | courseResourceWhereInput[]
    OR?: courseResourceWhereInput[]
    NOT?: courseResourceWhereInput | courseResourceWhereInput[]
    skillId?: IntFilter<"courseResource"> | number
    title?: StringFilter<"courseResource"> | string
    platform?: StringFilter<"courseResource"> | string
    courseUrl?: StringFilter<"courseResource"> | string
    difficulty?: StringFilter<"courseResource"> | string
    estimatedHours?: FloatFilter<"courseResource"> | number
    description?: StringNullableFilter<"courseResource"> | string | null
    scoreBoost?: FloatFilter<"courseResource"> | number
    isActive?: BoolFilter<"courseResource"> | boolean
    createdAt?: DateTimeFilter<"courseResource"> | Date | string
    updatedAt?: DateTimeFilter<"courseResource"> | Date | string
    skill?: XOR<SkillScalarRelationFilter, skillWhereInput>
    studentProgress?: StudentCourseProgressListRelationFilter
  }, "id">

  export type courseResourceOrderByWithAggregationInput = {
    id?: SortOrder
    skillId?: SortOrder
    title?: SortOrder
    platform?: SortOrder
    courseUrl?: SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrder
    description?: SortOrderInput | SortOrder
    scoreBoost?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: courseResourceCountOrderByAggregateInput
    _avg?: courseResourceAvgOrderByAggregateInput
    _max?: courseResourceMaxOrderByAggregateInput
    _min?: courseResourceMinOrderByAggregateInput
    _sum?: courseResourceSumOrderByAggregateInput
  }

  export type courseResourceScalarWhereWithAggregatesInput = {
    AND?: courseResourceScalarWhereWithAggregatesInput | courseResourceScalarWhereWithAggregatesInput[]
    OR?: courseResourceScalarWhereWithAggregatesInput[]
    NOT?: courseResourceScalarWhereWithAggregatesInput | courseResourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"courseResource"> | number
    skillId?: IntWithAggregatesFilter<"courseResource"> | number
    title?: StringWithAggregatesFilter<"courseResource"> | string
    platform?: StringWithAggregatesFilter<"courseResource"> | string
    courseUrl?: StringWithAggregatesFilter<"courseResource"> | string
    difficulty?: StringWithAggregatesFilter<"courseResource"> | string
    estimatedHours?: FloatWithAggregatesFilter<"courseResource"> | number
    description?: StringNullableWithAggregatesFilter<"courseResource"> | string | null
    scoreBoost?: FloatWithAggregatesFilter<"courseResource"> | number
    isActive?: BoolWithAggregatesFilter<"courseResource"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"courseResource"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"courseResource"> | Date | string
  }

  export type studentCourseProgressWhereInput = {
    AND?: studentCourseProgressWhereInput | studentCourseProgressWhereInput[]
    OR?: studentCourseProgressWhereInput[]
    NOT?: studentCourseProgressWhereInput | studentCourseProgressWhereInput[]
    id?: IntFilter<"studentCourseProgress"> | number
    studentId?: IntFilter<"studentCourseProgress"> | number
    courseResourceId?: IntFilter<"studentCourseProgress"> | number
    status?: StringFilter<"studentCourseProgress"> | string
    scoreAwarded?: BoolFilter<"studentCourseProgress"> | boolean
    startedAt?: DateTimeNullableFilter<"studentCourseProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"studentCourseProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"studentCourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"studentCourseProgress"> | Date | string
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    courseResource?: XOR<CourseResourceScalarRelationFilter, courseResourceWhereInput>
  }

  export type studentCourseProgressOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseResourceId?: SortOrder
    status?: SortOrder
    scoreAwarded?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: studentOrderByWithRelationInput
    courseResource?: courseResourceOrderByWithRelationInput
  }

  export type studentCourseProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentId_courseResourceId?: studentCourseProgressStudentIdCourseResourceIdCompoundUniqueInput
    AND?: studentCourseProgressWhereInput | studentCourseProgressWhereInput[]
    OR?: studentCourseProgressWhereInput[]
    NOT?: studentCourseProgressWhereInput | studentCourseProgressWhereInput[]
    studentId?: IntFilter<"studentCourseProgress"> | number
    courseResourceId?: IntFilter<"studentCourseProgress"> | number
    status?: StringFilter<"studentCourseProgress"> | string
    scoreAwarded?: BoolFilter<"studentCourseProgress"> | boolean
    startedAt?: DateTimeNullableFilter<"studentCourseProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"studentCourseProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"studentCourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"studentCourseProgress"> | Date | string
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    courseResource?: XOR<CourseResourceScalarRelationFilter, courseResourceWhereInput>
  }, "id" | "studentId_courseResourceId">

  export type studentCourseProgressOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseResourceId?: SortOrder
    status?: SortOrder
    scoreAwarded?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: studentCourseProgressCountOrderByAggregateInput
    _avg?: studentCourseProgressAvgOrderByAggregateInput
    _max?: studentCourseProgressMaxOrderByAggregateInput
    _min?: studentCourseProgressMinOrderByAggregateInput
    _sum?: studentCourseProgressSumOrderByAggregateInput
  }

  export type studentCourseProgressScalarWhereWithAggregatesInput = {
    AND?: studentCourseProgressScalarWhereWithAggregatesInput | studentCourseProgressScalarWhereWithAggregatesInput[]
    OR?: studentCourseProgressScalarWhereWithAggregatesInput[]
    NOT?: studentCourseProgressScalarWhereWithAggregatesInput | studentCourseProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"studentCourseProgress"> | number
    studentId?: IntWithAggregatesFilter<"studentCourseProgress"> | number
    courseResourceId?: IntWithAggregatesFilter<"studentCourseProgress"> | number
    status?: StringWithAggregatesFilter<"studentCourseProgress"> | string
    scoreAwarded?: BoolWithAggregatesFilter<"studentCourseProgress"> | boolean
    startedAt?: DateTimeNullableWithAggregatesFilter<"studentCourseProgress"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"studentCourseProgress"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"studentCourseProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"studentCourseProgress"> | Date | string
  }

  export type chatSessionWhereInput = {
    AND?: chatSessionWhereInput | chatSessionWhereInput[]
    OR?: chatSessionWhereInput[]
    NOT?: chatSessionWhereInput | chatSessionWhereInput[]
    id?: IntFilter<"chatSession"> | number
    studentId?: IntFilter<"chatSession"> | number
    startedAt?: DateTimeFilter<"chatSession"> | Date | string
    lastActive?: DateTimeFilter<"chatSession"> | Date | string
    isActive?: BoolFilter<"chatSession"> | boolean
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    messages?: ChatMessageListRelationFilter
  }

  export type chatSessionOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    startedAt?: SortOrder
    lastActive?: SortOrder
    isActive?: SortOrder
    student?: studentOrderByWithRelationInput
    messages?: chatMessageOrderByRelationAggregateInput
  }

  export type chatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatSessionWhereInput | chatSessionWhereInput[]
    OR?: chatSessionWhereInput[]
    NOT?: chatSessionWhereInput | chatSessionWhereInput[]
    studentId?: IntFilter<"chatSession"> | number
    startedAt?: DateTimeFilter<"chatSession"> | Date | string
    lastActive?: DateTimeFilter<"chatSession"> | Date | string
    isActive?: BoolFilter<"chatSession"> | boolean
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type chatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    startedAt?: SortOrder
    lastActive?: SortOrder
    isActive?: SortOrder
    _count?: chatSessionCountOrderByAggregateInput
    _avg?: chatSessionAvgOrderByAggregateInput
    _max?: chatSessionMaxOrderByAggregateInput
    _min?: chatSessionMinOrderByAggregateInput
    _sum?: chatSessionSumOrderByAggregateInput
  }

  export type chatSessionScalarWhereWithAggregatesInput = {
    AND?: chatSessionScalarWhereWithAggregatesInput | chatSessionScalarWhereWithAggregatesInput[]
    OR?: chatSessionScalarWhereWithAggregatesInput[]
    NOT?: chatSessionScalarWhereWithAggregatesInput | chatSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chatSession"> | number
    studentId?: IntWithAggregatesFilter<"chatSession"> | number
    startedAt?: DateTimeWithAggregatesFilter<"chatSession"> | Date | string
    lastActive?: DateTimeWithAggregatesFilter<"chatSession"> | Date | string
    isActive?: BoolWithAggregatesFilter<"chatSession"> | boolean
  }

  export type chatMessageWhereInput = {
    AND?: chatMessageWhereInput | chatMessageWhereInput[]
    OR?: chatMessageWhereInput[]
    NOT?: chatMessageWhereInput | chatMessageWhereInput[]
    id?: IntFilter<"chatMessage"> | number
    sessionId?: IntFilter<"chatMessage"> | number
    sender?: StringFilter<"chatMessage"> | string
    message?: StringFilter<"chatMessage"> | string
    intent?: StringNullableFilter<"chatMessage"> | string | null
    createdAt?: DateTimeFilter<"chatMessage"> | Date | string
    session?: XOR<ChatSessionScalarRelationFilter, chatSessionWhereInput>
  }

  export type chatMessageOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    message?: SortOrder
    intent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    session?: chatSessionOrderByWithRelationInput
  }

  export type chatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chatMessageWhereInput | chatMessageWhereInput[]
    OR?: chatMessageWhereInput[]
    NOT?: chatMessageWhereInput | chatMessageWhereInput[]
    sessionId?: IntFilter<"chatMessage"> | number
    sender?: StringFilter<"chatMessage"> | string
    message?: StringFilter<"chatMessage"> | string
    intent?: StringNullableFilter<"chatMessage"> | string | null
    createdAt?: DateTimeFilter<"chatMessage"> | Date | string
    session?: XOR<ChatSessionScalarRelationFilter, chatSessionWhereInput>
  }, "id">

  export type chatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    message?: SortOrder
    intent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: chatMessageCountOrderByAggregateInput
    _avg?: chatMessageAvgOrderByAggregateInput
    _max?: chatMessageMaxOrderByAggregateInput
    _min?: chatMessageMinOrderByAggregateInput
    _sum?: chatMessageSumOrderByAggregateInput
  }

  export type chatMessageScalarWhereWithAggregatesInput = {
    AND?: chatMessageScalarWhereWithAggregatesInput | chatMessageScalarWhereWithAggregatesInput[]
    OR?: chatMessageScalarWhereWithAggregatesInput[]
    NOT?: chatMessageScalarWhereWithAggregatesInput | chatMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chatMessage"> | number
    sessionId?: IntWithAggregatesFilter<"chatMessage"> | number
    sender?: StringWithAggregatesFilter<"chatMessage"> | string
    message?: StringWithAggregatesFilter<"chatMessage"> | string
    intent?: StringNullableWithAggregatesFilter<"chatMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"chatMessage"> | Date | string
  }

  export type certificateCreateInput = {
    studentName: string
    companyName: string
    certificateFile: string
    durationMonths: number
    experienceRating: number
    createdAt?: Date | string
  }

  export type certificateUncheckedCreateInput = {
    id?: number
    studentName: string
    companyName: string
    certificateFile: string
    durationMonths: number
    experienceRating: number
    createdAt?: Date | string
  }

  export type certificateUpdateInput = {
    studentName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    certificateFile?: StringFieldUpdateOperationsInput | string
    durationMonths?: IntFieldUpdateOperationsInput | number
    experienceRating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type certificateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    certificateFile?: StringFieldUpdateOperationsInput | string
    durationMonths?: IntFieldUpdateOperationsInput | number
    experienceRating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type certificateCreateManyInput = {
    id?: number
    studentName: string
    companyName: string
    certificateFile: string
    durationMonths: number
    experienceRating: number
    createdAt?: Date | string
  }

  export type certificateUpdateManyMutationInput = {
    studentName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    certificateFile?: StringFieldUpdateOperationsInput | string
    durationMonths?: IntFieldUpdateOperationsInput | number
    experienceRating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type certificateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    certificateFile?: StringFieldUpdateOperationsInput | string
    durationMonths?: IntFieldUpdateOperationsInput | number
    experienceRating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentCreateInput = {
    name?: string | null
    studentId?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    country?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    resume?: string | null
    universityName?: string | null
    university?: string | null
    degree?: string | null
    department?: string | null
    semester?: string | null
    cgpa?: string | null
    graduationYear?: string | null
    experience?: string | null
    locationPreferences?: string | null
    sectorPreferences?: string | null
    additionalInformation?: string | null
    targetRole?: string | null
    bio?: string | null
    interests?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: studentSkillCreateNestedManyWithoutStudentInput
    courseProgress?: studentCourseProgressCreateNestedManyWithoutStudentInput
    chatSessions?: chatSessionCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateInput = {
    id?: number
    name?: string | null
    studentId?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    country?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    resume?: string | null
    universityName?: string | null
    university?: string | null
    degree?: string | null
    department?: string | null
    semester?: string | null
    cgpa?: string | null
    graduationYear?: string | null
    experience?: string | null
    locationPreferences?: string | null
    sectorPreferences?: string | null
    additionalInformation?: string | null
    targetRole?: string | null
    bio?: string | null
    interests?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: studentSkillUncheckedCreateNestedManyWithoutStudentInput
    courseProgress?: studentCourseProgressUncheckedCreateNestedManyWithoutStudentInput
    chatSessions?: chatSessionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    locationPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    sectorPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInformation?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: studentSkillUpdateManyWithoutStudentNestedInput
    courseProgress?: studentCourseProgressUpdateManyWithoutStudentNestedInput
    chatSessions?: chatSessionUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    locationPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    sectorPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInformation?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: studentSkillUncheckedUpdateManyWithoutStudentNestedInput
    courseProgress?: studentCourseProgressUncheckedUpdateManyWithoutStudentNestedInput
    chatSessions?: chatSessionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateManyInput = {
    id?: number
    name?: string | null
    studentId?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    country?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    resume?: string | null
    universityName?: string | null
    university?: string | null
    degree?: string | null
    department?: string | null
    semester?: string | null
    cgpa?: string | null
    graduationYear?: string | null
    experience?: string | null
    locationPreferences?: string | null
    sectorPreferences?: string | null
    additionalInformation?: string | null
    targetRole?: string | null
    bio?: string | null
    interests?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    locationPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    sectorPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInformation?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    locationPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    sectorPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInformation?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type companyCreateInput = {
    companyName: string
    email: string
    password: string
    registrationNumber?: string | null
    industrySector?: string | null
    companySize?: string | null
    companyDescription?: string | null
    companyWebsite?: string | null
    contactPersonName?: string | null
    designation?: string | null
    phoneNumber?: string | null
    officeAddress?: string | null
    registrationCertificate?: string | null
    gstCertificate?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    internships?: internshipCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateInput = {
    id?: number
    companyName: string
    email: string
    password: string
    registrationNumber?: string | null
    industrySector?: string | null
    companySize?: string | null
    companyDescription?: string | null
    companyWebsite?: string | null
    contactPersonName?: string | null
    designation?: string | null
    phoneNumber?: string | null
    officeAddress?: string | null
    registrationCertificate?: string | null
    gstCertificate?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    internships?: internshipUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    industrySector?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registrationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    gstCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internships?: internshipUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    industrySector?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registrationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    gstCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internships?: internshipUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyCreateManyInput = {
    id?: number
    companyName: string
    email: string
    password: string
    registrationNumber?: string | null
    industrySector?: string | null
    companySize?: string | null
    companyDescription?: string | null
    companyWebsite?: string | null
    contactPersonName?: string | null
    designation?: string | null
    phoneNumber?: string | null
    officeAddress?: string | null
    registrationCertificate?: string | null
    gstCertificate?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type companyUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    industrySector?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registrationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    gstCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type companyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    industrySector?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registrationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    gstCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type internshipCreateInput = {
    title: string
    companyName?: string | null
    department?: string | null
    location?: string | null
    workMode?: string | null
    isRemote?: boolean
    durationMonths?: number | null
    duration?: string | null
    stipend?: number | null
    roleDescription?: string | null
    learningOutcomes?: string | null
    numberOfPositions?: number
    minimumDegreeLevel?: string | null
    preferredFieldOfStudy?: string | null
    minimumGpaPercentage?: string | null
    graduationYearRange?: string | null
    additionalPreferences?: string | null
    status?: string
    skillTags?: string | null
    applyUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: companyCreateNestedOneWithoutInternshipsInput
    requiredSkills?: internshipSkillCreateNestedManyWithoutInternshipInput
    skillRequirements?: internshipSkillRequirementCreateNestedManyWithoutInternshipInput
  }

  export type internshipUncheckedCreateInput = {
    id?: number
    companyId?: number | null
    title: string
    companyName?: string | null
    department?: string | null
    location?: string | null
    workMode?: string | null
    isRemote?: boolean
    durationMonths?: number | null
    duration?: string | null
    stipend?: number | null
    roleDescription?: string | null
    learningOutcomes?: string | null
    numberOfPositions?: number
    minimumDegreeLevel?: string | null
    preferredFieldOfStudy?: string | null
    minimumGpaPercentage?: string | null
    graduationYearRange?: string | null
    additionalPreferences?: string | null
    status?: string
    skillTags?: string | null
    applyUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredSkills?: internshipSkillUncheckedCreateNestedManyWithoutInternshipInput
    skillRequirements?: internshipSkillRequirementUncheckedCreateNestedManyWithoutInternshipInput
  }

  export type internshipUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    workMode?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    durationMonths?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    stipend?: NullableFloatFieldUpdateOperationsInput | number | null
    roleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    learningOutcomes?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfPositions?: IntFieldUpdateOperationsInput | number
    minimumDegreeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    minimumGpaPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYearRange?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    skillTags?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companyUpdateOneWithoutInternshipsNestedInput
    requiredSkills?: internshipSkillUpdateManyWithoutInternshipNestedInput
    skillRequirements?: internshipSkillRequirementUpdateManyWithoutInternshipNestedInput
  }

  export type internshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    workMode?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    durationMonths?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    stipend?: NullableFloatFieldUpdateOperationsInput | number | null
    roleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    learningOutcomes?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfPositions?: IntFieldUpdateOperationsInput | number
    minimumDegreeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    minimumGpaPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYearRange?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    skillTags?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredSkills?: internshipSkillUncheckedUpdateManyWithoutInternshipNestedInput
    skillRequirements?: internshipSkillRequirementUncheckedUpdateManyWithoutInternshipNestedInput
  }

  export type internshipCreateManyInput = {
    id?: number
    companyId?: number | null
    title: string
    companyName?: string | null
    department?: string | null
    location?: string | null
    workMode?: string | null
    isRemote?: boolean
    durationMonths?: number | null
    duration?: string | null
    stipend?: number | null
    roleDescription?: string | null
    learningOutcomes?: string | null
    numberOfPositions?: number
    minimumDegreeLevel?: string | null
    preferredFieldOfStudy?: string | null
    minimumGpaPercentage?: string | null
    graduationYearRange?: string | null
    additionalPreferences?: string | null
    status?: string
    skillTags?: string | null
    applyUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type internshipUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    workMode?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    durationMonths?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    stipend?: NullableFloatFieldUpdateOperationsInput | number | null
    roleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    learningOutcomes?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfPositions?: IntFieldUpdateOperationsInput | number
    minimumDegreeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    minimumGpaPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYearRange?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    skillTags?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type internshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    workMode?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    durationMonths?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    stipend?: NullableFloatFieldUpdateOperationsInput | number | null
    roleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    learningOutcomes?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfPositions?: IntFieldUpdateOperationsInput | number
    minimumDegreeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    minimumGpaPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYearRange?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    skillTags?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillCreateInput = {
    name: string
    category?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSkills?: studentSkillCreateNestedManyWithoutSkillInput
    internshipSkills?: internshipSkillCreateNestedManyWithoutSkillInput
    internshipSkillRequirements?: internshipSkillRequirementCreateNestedManyWithoutSkillInput
    courseResources?: courseResourceCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateInput = {
    id?: number
    name: string
    category?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSkills?: studentSkillUncheckedCreateNestedManyWithoutSkillInput
    internshipSkills?: internshipSkillUncheckedCreateNestedManyWithoutSkillInput
    internshipSkillRequirements?: internshipSkillRequirementUncheckedCreateNestedManyWithoutSkillInput
    courseResources?: courseResourceUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSkills?: studentSkillUpdateManyWithoutSkillNestedInput
    internshipSkills?: internshipSkillUpdateManyWithoutSkillNestedInput
    internshipSkillRequirements?: internshipSkillRequirementUpdateManyWithoutSkillNestedInput
    courseResources?: courseResourceUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSkills?: studentSkillUncheckedUpdateManyWithoutSkillNestedInput
    internshipSkills?: internshipSkillUncheckedUpdateManyWithoutSkillNestedInput
    internshipSkillRequirements?: internshipSkillRequirementUncheckedUpdateManyWithoutSkillNestedInput
    courseResources?: courseResourceUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type skillCreateManyInput = {
    id?: number
    name: string
    category?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type skillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentSkillCreateInput = {
    level?: number
    score?: number
    chatScore?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: studentCreateNestedOneWithoutSkillsInput
    skill: skillCreateNestedOneWithoutStudentSkillsInput
  }

  export type studentSkillUncheckedCreateInput = {
    id?: number
    studentId: number
    skillId: number
    level?: number
    score?: number
    chatScore?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentSkillUpdateInput = {
    level?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    chatScore?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: studentUpdateOneRequiredWithoutSkillsNestedInput
    skill?: skillUpdateOneRequiredWithoutStudentSkillsNestedInput
  }

  export type studentSkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    chatScore?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentSkillCreateManyInput = {
    id?: number
    studentId: number
    skillId: number
    level?: number
    score?: number
    chatScore?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentSkillUpdateManyMutationInput = {
    level?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    chatScore?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentSkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    chatScore?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type internshipSkillCreateInput = {
    internship: internshipCreateNestedOneWithoutRequiredSkillsInput
    skill: skillCreateNestedOneWithoutInternshipSkillsInput
  }

  export type internshipSkillUncheckedCreateInput = {
    id?: number
    internshipId: number
    skillId: number
  }

  export type internshipSkillUpdateInput = {
    internship?: internshipUpdateOneRequiredWithoutRequiredSkillsNestedInput
    skill?: skillUpdateOneRequiredWithoutInternshipSkillsNestedInput
  }

  export type internshipSkillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type internshipSkillCreateManyInput = {
    id?: number
    internshipId: number
    skillId: number
  }

  export type internshipSkillUpdateManyMutationInput = {

  }

  export type internshipSkillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type internshipSkillRequirementCreateInput = {
    requiredScore?: number
    internship: internshipCreateNestedOneWithoutSkillRequirementsInput
    skill: skillCreateNestedOneWithoutInternshipSkillRequirementsInput
  }

  export type internshipSkillRequirementUncheckedCreateInput = {
    id?: number
    internshipId: number
    skillId: number
    requiredScore?: number
  }

  export type internshipSkillRequirementUpdateInput = {
    requiredScore?: FloatFieldUpdateOperationsInput | number
    internship?: internshipUpdateOneRequiredWithoutSkillRequirementsNestedInput
    skill?: skillUpdateOneRequiredWithoutInternshipSkillRequirementsNestedInput
  }

  export type internshipSkillRequirementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
    requiredScore?: FloatFieldUpdateOperationsInput | number
  }

  export type internshipSkillRequirementCreateManyInput = {
    id?: number
    internshipId: number
    skillId: number
    requiredScore?: number
  }

  export type internshipSkillRequirementUpdateManyMutationInput = {
    requiredScore?: FloatFieldUpdateOperationsInput | number
  }

  export type internshipSkillRequirementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
    requiredScore?: FloatFieldUpdateOperationsInput | number
  }

  export type courseResourceCreateInput = {
    title: string
    platform: string
    courseUrl: string
    difficulty?: string
    estimatedHours?: number
    description?: string | null
    scoreBoost?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: skillCreateNestedOneWithoutCourseResourcesInput
    studentProgress?: studentCourseProgressCreateNestedManyWithoutCourseResourceInput
  }

  export type courseResourceUncheckedCreateInput = {
    id?: number
    skillId: number
    title: string
    platform: string
    courseUrl: string
    difficulty?: string
    estimatedHours?: number
    description?: string | null
    scoreBoost?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    studentProgress?: studentCourseProgressUncheckedCreateNestedManyWithoutCourseResourceInput
  }

  export type courseResourceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    courseUrl?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    estimatedHours?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scoreBoost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: skillUpdateOneRequiredWithoutCourseResourcesNestedInput
    studentProgress?: studentCourseProgressUpdateManyWithoutCourseResourceNestedInput
  }

  export type courseResourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    courseUrl?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    estimatedHours?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scoreBoost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProgress?: studentCourseProgressUncheckedUpdateManyWithoutCourseResourceNestedInput
  }

  export type courseResourceCreateManyInput = {
    id?: number
    skillId: number
    title: string
    platform: string
    courseUrl: string
    difficulty?: string
    estimatedHours?: number
    description?: string | null
    scoreBoost?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type courseResourceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    courseUrl?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    estimatedHours?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scoreBoost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseResourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    courseUrl?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    estimatedHours?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scoreBoost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentCourseProgressCreateInput = {
    status?: string
    scoreAwarded?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: studentCreateNestedOneWithoutCourseProgressInput
    courseResource: courseResourceCreateNestedOneWithoutStudentProgressInput
  }

  export type studentCourseProgressUncheckedCreateInput = {
    id?: number
    studentId: number
    courseResourceId: number
    status?: string
    scoreAwarded?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentCourseProgressUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    scoreAwarded?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: studentUpdateOneRequiredWithoutCourseProgressNestedInput
    courseResource?: courseResourceUpdateOneRequiredWithoutStudentProgressNestedInput
  }

  export type studentCourseProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    courseResourceId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    scoreAwarded?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentCourseProgressCreateManyInput = {
    id?: number
    studentId: number
    courseResourceId: number
    status?: string
    scoreAwarded?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentCourseProgressUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    scoreAwarded?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentCourseProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    courseResourceId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    scoreAwarded?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatSessionCreateInput = {
    startedAt?: Date | string
    lastActive?: Date | string
    isActive?: boolean
    student: studentCreateNestedOneWithoutChatSessionsInput
    messages?: chatMessageCreateNestedManyWithoutSessionInput
  }

  export type chatSessionUncheckedCreateInput = {
    id?: number
    studentId: number
    startedAt?: Date | string
    lastActive?: Date | string
    isActive?: boolean
    messages?: chatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type chatSessionUpdateInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    student?: studentUpdateOneRequiredWithoutChatSessionsNestedInput
    messages?: chatMessageUpdateManyWithoutSessionNestedInput
  }

  export type chatSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    messages?: chatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type chatSessionCreateManyInput = {
    id?: number
    studentId: number
    startedAt?: Date | string
    lastActive?: Date | string
    isActive?: boolean
  }

  export type chatSessionUpdateManyMutationInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chatSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chatMessageCreateInput = {
    sender: string
    message: string
    intent?: string | null
    createdAt?: Date | string
    session: chatSessionCreateNestedOneWithoutMessagesInput
  }

  export type chatMessageUncheckedCreateInput = {
    id?: number
    sessionId: number
    sender: string
    message: string
    intent?: string | null
    createdAt?: Date | string
  }

  export type chatMessageUpdateInput = {
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: chatSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type chatMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatMessageCreateManyInput = {
    id?: number
    sessionId: number
    sender: string
    message: string
    intent?: string | null
    createdAt?: Date | string
  }

  export type chatMessageUpdateManyMutationInput = {
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sessionId?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type certificateCountOrderByAggregateInput = {
    id?: SortOrder
    studentName?: SortOrder
    companyName?: SortOrder
    certificateFile?: SortOrder
    durationMonths?: SortOrder
    experienceRating?: SortOrder
    createdAt?: SortOrder
  }

  export type certificateAvgOrderByAggregateInput = {
    id?: SortOrder
    durationMonths?: SortOrder
    experienceRating?: SortOrder
  }

  export type certificateMaxOrderByAggregateInput = {
    id?: SortOrder
    studentName?: SortOrder
    companyName?: SortOrder
    certificateFile?: SortOrder
    durationMonths?: SortOrder
    experienceRating?: SortOrder
    createdAt?: SortOrder
  }

  export type certificateMinOrderByAggregateInput = {
    id?: SortOrder
    studentName?: SortOrder
    companyName?: SortOrder
    certificateFile?: SortOrder
    durationMonths?: SortOrder
    experienceRating?: SortOrder
    createdAt?: SortOrder
  }

  export type certificateSumOrderByAggregateInput = {
    id?: SortOrder
    durationMonths?: SortOrder
    experienceRating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StudentSkillListRelationFilter = {
    every?: studentSkillWhereInput
    some?: studentSkillWhereInput
    none?: studentSkillWhereInput
  }

  export type StudentCourseProgressListRelationFilter = {
    every?: studentCourseProgressWhereInput
    some?: studentCourseProgressWhereInput
    none?: studentCourseProgressWhereInput
  }

  export type ChatSessionListRelationFilter = {
    every?: chatSessionWhereInput
    some?: chatSessionWhereInput
    none?: chatSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type studentSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentCourseProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chatSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    studentId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    resume?: SortOrder
    universityName?: SortOrder
    university?: SortOrder
    degree?: SortOrder
    department?: SortOrder
    semester?: SortOrder
    cgpa?: SortOrder
    graduationYear?: SortOrder
    experience?: SortOrder
    locationPreferences?: SortOrder
    sectorPreferences?: SortOrder
    additionalInformation?: SortOrder
    targetRole?: SortOrder
    bio?: SortOrder
    interests?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type studentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    studentId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    resume?: SortOrder
    universityName?: SortOrder
    university?: SortOrder
    degree?: SortOrder
    department?: SortOrder
    semester?: SortOrder
    cgpa?: SortOrder
    graduationYear?: SortOrder
    experience?: SortOrder
    locationPreferences?: SortOrder
    sectorPreferences?: SortOrder
    additionalInformation?: SortOrder
    targetRole?: SortOrder
    bio?: SortOrder
    interests?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    studentId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    country?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    resume?: SortOrder
    universityName?: SortOrder
    university?: SortOrder
    degree?: SortOrder
    department?: SortOrder
    semester?: SortOrder
    cgpa?: SortOrder
    graduationYear?: SortOrder
    experience?: SortOrder
    locationPreferences?: SortOrder
    sectorPreferences?: SortOrder
    additionalInformation?: SortOrder
    targetRole?: SortOrder
    bio?: SortOrder
    interests?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type InternshipListRelationFilter = {
    every?: internshipWhereInput
    some?: internshipWhereInput
    none?: internshipWhereInput
  }

  export type internshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registrationNumber?: SortOrder
    industrySector?: SortOrder
    companySize?: SortOrder
    companyDescription?: SortOrder
    companyWebsite?: SortOrder
    contactPersonName?: SortOrder
    designation?: SortOrder
    phoneNumber?: SortOrder
    officeAddress?: SortOrder
    registrationCertificate?: SortOrder
    gstCertificate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type companyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registrationNumber?: SortOrder
    industrySector?: SortOrder
    companySize?: SortOrder
    companyDescription?: SortOrder
    companyWebsite?: SortOrder
    contactPersonName?: SortOrder
    designation?: SortOrder
    phoneNumber?: SortOrder
    officeAddress?: SortOrder
    registrationCertificate?: SortOrder
    gstCertificate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    registrationNumber?: SortOrder
    industrySector?: SortOrder
    companySize?: SortOrder
    companyDescription?: SortOrder
    companyWebsite?: SortOrder
    contactPersonName?: SortOrder
    designation?: SortOrder
    phoneNumber?: SortOrder
    officeAddress?: SortOrder
    registrationCertificate?: SortOrder
    gstCertificate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type companySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: companyWhereInput | null
    isNot?: companyWhereInput | null
  }

  export type InternshipSkillListRelationFilter = {
    every?: internshipSkillWhereInput
    some?: internshipSkillWhereInput
    none?: internshipSkillWhereInput
  }

  export type InternshipSkillRequirementListRelationFilter = {
    every?: internshipSkillRequirementWhereInput
    some?: internshipSkillRequirementWhereInput
    none?: internshipSkillRequirementWhereInput
  }

  export type internshipSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type internshipSkillRequirementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type internshipCountOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    department?: SortOrder
    location?: SortOrder
    workMode?: SortOrder
    isRemote?: SortOrder
    durationMonths?: SortOrder
    duration?: SortOrder
    stipend?: SortOrder
    roleDescription?: SortOrder
    learningOutcomes?: SortOrder
    numberOfPositions?: SortOrder
    minimumDegreeLevel?: SortOrder
    preferredFieldOfStudy?: SortOrder
    minimumGpaPercentage?: SortOrder
    graduationYearRange?: SortOrder
    additionalPreferences?: SortOrder
    status?: SortOrder
    skillTags?: SortOrder
    applyUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type internshipAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    durationMonths?: SortOrder
    stipend?: SortOrder
    numberOfPositions?: SortOrder
  }

  export type internshipMaxOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    department?: SortOrder
    location?: SortOrder
    workMode?: SortOrder
    isRemote?: SortOrder
    durationMonths?: SortOrder
    duration?: SortOrder
    stipend?: SortOrder
    roleDescription?: SortOrder
    learningOutcomes?: SortOrder
    numberOfPositions?: SortOrder
    minimumDegreeLevel?: SortOrder
    preferredFieldOfStudy?: SortOrder
    minimumGpaPercentage?: SortOrder
    graduationYearRange?: SortOrder
    additionalPreferences?: SortOrder
    status?: SortOrder
    skillTags?: SortOrder
    applyUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type internshipMinOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    title?: SortOrder
    companyName?: SortOrder
    department?: SortOrder
    location?: SortOrder
    workMode?: SortOrder
    isRemote?: SortOrder
    durationMonths?: SortOrder
    duration?: SortOrder
    stipend?: SortOrder
    roleDescription?: SortOrder
    learningOutcomes?: SortOrder
    numberOfPositions?: SortOrder
    minimumDegreeLevel?: SortOrder
    preferredFieldOfStudy?: SortOrder
    minimumGpaPercentage?: SortOrder
    graduationYearRange?: SortOrder
    additionalPreferences?: SortOrder
    status?: SortOrder
    skillTags?: SortOrder
    applyUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type internshipSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
    durationMonths?: SortOrder
    stipend?: SortOrder
    numberOfPositions?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type CourseResourceListRelationFilter = {
    every?: courseResourceWhereInput
    some?: courseResourceWhereInput
    none?: courseResourceWhereInput
  }

  export type courseResourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type skillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type skillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StudentScalarRelationFilter = {
    is?: studentWhereInput
    isNot?: studentWhereInput
  }

  export type SkillScalarRelationFilter = {
    is?: skillWhereInput
    isNot?: skillWhereInput
  }

  export type studentSkillStudentIdSkillIdCompoundUniqueInput = {
    studentId: number
    skillId: number
  }

  export type studentSkillCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    skillId?: SortOrder
    level?: SortOrder
    score?: SortOrder
    chatScore?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentSkillAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    skillId?: SortOrder
    level?: SortOrder
    score?: SortOrder
    chatScore?: SortOrder
  }

  export type studentSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    skillId?: SortOrder
    level?: SortOrder
    score?: SortOrder
    chatScore?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentSkillMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    skillId?: SortOrder
    level?: SortOrder
    score?: SortOrder
    chatScore?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentSkillSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    skillId?: SortOrder
    level?: SortOrder
    score?: SortOrder
    chatScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type InternshipScalarRelationFilter = {
    is?: internshipWhereInput
    isNot?: internshipWhereInput
  }

  export type internshipSkillInternshipIdSkillIdCompoundUniqueInput = {
    internshipId: number
    skillId: number
  }

  export type internshipSkillCountOrderByAggregateInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
  }

  export type internshipSkillAvgOrderByAggregateInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
  }

  export type internshipSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
  }

  export type internshipSkillMinOrderByAggregateInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
  }

  export type internshipSkillSumOrderByAggregateInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
  }

  export type internshipSkillRequirementInternshipIdSkillIdCompoundUniqueInput = {
    internshipId: number
    skillId: number
  }

  export type internshipSkillRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
    requiredScore?: SortOrder
  }

  export type internshipSkillRequirementAvgOrderByAggregateInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
    requiredScore?: SortOrder
  }

  export type internshipSkillRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
    requiredScore?: SortOrder
  }

  export type internshipSkillRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
    requiredScore?: SortOrder
  }

  export type internshipSkillRequirementSumOrderByAggregateInput = {
    id?: SortOrder
    internshipId?: SortOrder
    skillId?: SortOrder
    requiredScore?: SortOrder
  }

  export type courseResourceCountOrderByAggregateInput = {
    id?: SortOrder
    skillId?: SortOrder
    title?: SortOrder
    platform?: SortOrder
    courseUrl?: SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrder
    description?: SortOrder
    scoreBoost?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type courseResourceAvgOrderByAggregateInput = {
    id?: SortOrder
    skillId?: SortOrder
    estimatedHours?: SortOrder
    scoreBoost?: SortOrder
  }

  export type courseResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    skillId?: SortOrder
    title?: SortOrder
    platform?: SortOrder
    courseUrl?: SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrder
    description?: SortOrder
    scoreBoost?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type courseResourceMinOrderByAggregateInput = {
    id?: SortOrder
    skillId?: SortOrder
    title?: SortOrder
    platform?: SortOrder
    courseUrl?: SortOrder
    difficulty?: SortOrder
    estimatedHours?: SortOrder
    description?: SortOrder
    scoreBoost?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type courseResourceSumOrderByAggregateInput = {
    id?: SortOrder
    skillId?: SortOrder
    estimatedHours?: SortOrder
    scoreBoost?: SortOrder
  }

  export type CourseResourceScalarRelationFilter = {
    is?: courseResourceWhereInput
    isNot?: courseResourceWhereInput
  }

  export type studentCourseProgressStudentIdCourseResourceIdCompoundUniqueInput = {
    studentId: number
    courseResourceId: number
  }

  export type studentCourseProgressCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseResourceId?: SortOrder
    status?: SortOrder
    scoreAwarded?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentCourseProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseResourceId?: SortOrder
  }

  export type studentCourseProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseResourceId?: SortOrder
    status?: SortOrder
    scoreAwarded?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentCourseProgressMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseResourceId?: SortOrder
    status?: SortOrder
    scoreAwarded?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type studentCourseProgressSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseResourceId?: SortOrder
  }

  export type ChatMessageListRelationFilter = {
    every?: chatMessageWhereInput
    some?: chatMessageWhereInput
    none?: chatMessageWhereInput
  }

  export type chatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    startedAt?: SortOrder
    lastActive?: SortOrder
    isActive?: SortOrder
  }

  export type chatSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type chatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    startedAt?: SortOrder
    lastActive?: SortOrder
    isActive?: SortOrder
  }

  export type chatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    startedAt?: SortOrder
    lastActive?: SortOrder
    isActive?: SortOrder
  }

  export type chatSessionSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type ChatSessionScalarRelationFilter = {
    is?: chatSessionWhereInput
    isNot?: chatSessionWhereInput
  }

  export type chatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    message?: SortOrder
    intent?: SortOrder
    createdAt?: SortOrder
  }

  export type chatMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
  }

  export type chatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    message?: SortOrder
    intent?: SortOrder
    createdAt?: SortOrder
  }

  export type chatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    sender?: SortOrder
    message?: SortOrder
    intent?: SortOrder
    createdAt?: SortOrder
  }

  export type chatMessageSumOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type studentSkillCreateNestedManyWithoutStudentInput = {
    create?: XOR<studentSkillCreateWithoutStudentInput, studentSkillUncheckedCreateWithoutStudentInput> | studentSkillCreateWithoutStudentInput[] | studentSkillUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: studentSkillCreateOrConnectWithoutStudentInput | studentSkillCreateOrConnectWithoutStudentInput[]
    createMany?: studentSkillCreateManyStudentInputEnvelope
    connect?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
  }

  export type studentCourseProgressCreateNestedManyWithoutStudentInput = {
    create?: XOR<studentCourseProgressCreateWithoutStudentInput, studentCourseProgressUncheckedCreateWithoutStudentInput> | studentCourseProgressCreateWithoutStudentInput[] | studentCourseProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: studentCourseProgressCreateOrConnectWithoutStudentInput | studentCourseProgressCreateOrConnectWithoutStudentInput[]
    createMany?: studentCourseProgressCreateManyStudentInputEnvelope
    connect?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
  }

  export type chatSessionCreateNestedManyWithoutStudentInput = {
    create?: XOR<chatSessionCreateWithoutStudentInput, chatSessionUncheckedCreateWithoutStudentInput> | chatSessionCreateWithoutStudentInput[] | chatSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: chatSessionCreateOrConnectWithoutStudentInput | chatSessionCreateOrConnectWithoutStudentInput[]
    createMany?: chatSessionCreateManyStudentInputEnvelope
    connect?: chatSessionWhereUniqueInput | chatSessionWhereUniqueInput[]
  }

  export type studentSkillUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<studentSkillCreateWithoutStudentInput, studentSkillUncheckedCreateWithoutStudentInput> | studentSkillCreateWithoutStudentInput[] | studentSkillUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: studentSkillCreateOrConnectWithoutStudentInput | studentSkillCreateOrConnectWithoutStudentInput[]
    createMany?: studentSkillCreateManyStudentInputEnvelope
    connect?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
  }

  export type studentCourseProgressUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<studentCourseProgressCreateWithoutStudentInput, studentCourseProgressUncheckedCreateWithoutStudentInput> | studentCourseProgressCreateWithoutStudentInput[] | studentCourseProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: studentCourseProgressCreateOrConnectWithoutStudentInput | studentCourseProgressCreateOrConnectWithoutStudentInput[]
    createMany?: studentCourseProgressCreateManyStudentInputEnvelope
    connect?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
  }

  export type chatSessionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<chatSessionCreateWithoutStudentInput, chatSessionUncheckedCreateWithoutStudentInput> | chatSessionCreateWithoutStudentInput[] | chatSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: chatSessionCreateOrConnectWithoutStudentInput | chatSessionCreateOrConnectWithoutStudentInput[]
    createMany?: chatSessionCreateManyStudentInputEnvelope
    connect?: chatSessionWhereUniqueInput | chatSessionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type studentSkillUpdateManyWithoutStudentNestedInput = {
    create?: XOR<studentSkillCreateWithoutStudentInput, studentSkillUncheckedCreateWithoutStudentInput> | studentSkillCreateWithoutStudentInput[] | studentSkillUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: studentSkillCreateOrConnectWithoutStudentInput | studentSkillCreateOrConnectWithoutStudentInput[]
    upsert?: studentSkillUpsertWithWhereUniqueWithoutStudentInput | studentSkillUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: studentSkillCreateManyStudentInputEnvelope
    set?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    disconnect?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    delete?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    connect?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    update?: studentSkillUpdateWithWhereUniqueWithoutStudentInput | studentSkillUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: studentSkillUpdateManyWithWhereWithoutStudentInput | studentSkillUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: studentSkillScalarWhereInput | studentSkillScalarWhereInput[]
  }

  export type studentCourseProgressUpdateManyWithoutStudentNestedInput = {
    create?: XOR<studentCourseProgressCreateWithoutStudentInput, studentCourseProgressUncheckedCreateWithoutStudentInput> | studentCourseProgressCreateWithoutStudentInput[] | studentCourseProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: studentCourseProgressCreateOrConnectWithoutStudentInput | studentCourseProgressCreateOrConnectWithoutStudentInput[]
    upsert?: studentCourseProgressUpsertWithWhereUniqueWithoutStudentInput | studentCourseProgressUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: studentCourseProgressCreateManyStudentInputEnvelope
    set?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    disconnect?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    delete?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    connect?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    update?: studentCourseProgressUpdateWithWhereUniqueWithoutStudentInput | studentCourseProgressUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: studentCourseProgressUpdateManyWithWhereWithoutStudentInput | studentCourseProgressUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: studentCourseProgressScalarWhereInput | studentCourseProgressScalarWhereInput[]
  }

  export type chatSessionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<chatSessionCreateWithoutStudentInput, chatSessionUncheckedCreateWithoutStudentInput> | chatSessionCreateWithoutStudentInput[] | chatSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: chatSessionCreateOrConnectWithoutStudentInput | chatSessionCreateOrConnectWithoutStudentInput[]
    upsert?: chatSessionUpsertWithWhereUniqueWithoutStudentInput | chatSessionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: chatSessionCreateManyStudentInputEnvelope
    set?: chatSessionWhereUniqueInput | chatSessionWhereUniqueInput[]
    disconnect?: chatSessionWhereUniqueInput | chatSessionWhereUniqueInput[]
    delete?: chatSessionWhereUniqueInput | chatSessionWhereUniqueInput[]
    connect?: chatSessionWhereUniqueInput | chatSessionWhereUniqueInput[]
    update?: chatSessionUpdateWithWhereUniqueWithoutStudentInput | chatSessionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: chatSessionUpdateManyWithWhereWithoutStudentInput | chatSessionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: chatSessionScalarWhereInput | chatSessionScalarWhereInput[]
  }

  export type studentSkillUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<studentSkillCreateWithoutStudentInput, studentSkillUncheckedCreateWithoutStudentInput> | studentSkillCreateWithoutStudentInput[] | studentSkillUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: studentSkillCreateOrConnectWithoutStudentInput | studentSkillCreateOrConnectWithoutStudentInput[]
    upsert?: studentSkillUpsertWithWhereUniqueWithoutStudentInput | studentSkillUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: studentSkillCreateManyStudentInputEnvelope
    set?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    disconnect?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    delete?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    connect?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    update?: studentSkillUpdateWithWhereUniqueWithoutStudentInput | studentSkillUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: studentSkillUpdateManyWithWhereWithoutStudentInput | studentSkillUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: studentSkillScalarWhereInput | studentSkillScalarWhereInput[]
  }

  export type studentCourseProgressUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<studentCourseProgressCreateWithoutStudentInput, studentCourseProgressUncheckedCreateWithoutStudentInput> | studentCourseProgressCreateWithoutStudentInput[] | studentCourseProgressUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: studentCourseProgressCreateOrConnectWithoutStudentInput | studentCourseProgressCreateOrConnectWithoutStudentInput[]
    upsert?: studentCourseProgressUpsertWithWhereUniqueWithoutStudentInput | studentCourseProgressUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: studentCourseProgressCreateManyStudentInputEnvelope
    set?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    disconnect?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    delete?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    connect?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    update?: studentCourseProgressUpdateWithWhereUniqueWithoutStudentInput | studentCourseProgressUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: studentCourseProgressUpdateManyWithWhereWithoutStudentInput | studentCourseProgressUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: studentCourseProgressScalarWhereInput | studentCourseProgressScalarWhereInput[]
  }

  export type chatSessionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<chatSessionCreateWithoutStudentInput, chatSessionUncheckedCreateWithoutStudentInput> | chatSessionCreateWithoutStudentInput[] | chatSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: chatSessionCreateOrConnectWithoutStudentInput | chatSessionCreateOrConnectWithoutStudentInput[]
    upsert?: chatSessionUpsertWithWhereUniqueWithoutStudentInput | chatSessionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: chatSessionCreateManyStudentInputEnvelope
    set?: chatSessionWhereUniqueInput | chatSessionWhereUniqueInput[]
    disconnect?: chatSessionWhereUniqueInput | chatSessionWhereUniqueInput[]
    delete?: chatSessionWhereUniqueInput | chatSessionWhereUniqueInput[]
    connect?: chatSessionWhereUniqueInput | chatSessionWhereUniqueInput[]
    update?: chatSessionUpdateWithWhereUniqueWithoutStudentInput | chatSessionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: chatSessionUpdateManyWithWhereWithoutStudentInput | chatSessionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: chatSessionScalarWhereInput | chatSessionScalarWhereInput[]
  }

  export type internshipCreateNestedManyWithoutCompanyInput = {
    create?: XOR<internshipCreateWithoutCompanyInput, internshipUncheckedCreateWithoutCompanyInput> | internshipCreateWithoutCompanyInput[] | internshipUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: internshipCreateOrConnectWithoutCompanyInput | internshipCreateOrConnectWithoutCompanyInput[]
    createMany?: internshipCreateManyCompanyInputEnvelope
    connect?: internshipWhereUniqueInput | internshipWhereUniqueInput[]
  }

  export type internshipUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<internshipCreateWithoutCompanyInput, internshipUncheckedCreateWithoutCompanyInput> | internshipCreateWithoutCompanyInput[] | internshipUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: internshipCreateOrConnectWithoutCompanyInput | internshipCreateOrConnectWithoutCompanyInput[]
    createMany?: internshipCreateManyCompanyInputEnvelope
    connect?: internshipWhereUniqueInput | internshipWhereUniqueInput[]
  }

  export type internshipUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<internshipCreateWithoutCompanyInput, internshipUncheckedCreateWithoutCompanyInput> | internshipCreateWithoutCompanyInput[] | internshipUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: internshipCreateOrConnectWithoutCompanyInput | internshipCreateOrConnectWithoutCompanyInput[]
    upsert?: internshipUpsertWithWhereUniqueWithoutCompanyInput | internshipUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: internshipCreateManyCompanyInputEnvelope
    set?: internshipWhereUniqueInput | internshipWhereUniqueInput[]
    disconnect?: internshipWhereUniqueInput | internshipWhereUniqueInput[]
    delete?: internshipWhereUniqueInput | internshipWhereUniqueInput[]
    connect?: internshipWhereUniqueInput | internshipWhereUniqueInput[]
    update?: internshipUpdateWithWhereUniqueWithoutCompanyInput | internshipUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: internshipUpdateManyWithWhereWithoutCompanyInput | internshipUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: internshipScalarWhereInput | internshipScalarWhereInput[]
  }

  export type internshipUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<internshipCreateWithoutCompanyInput, internshipUncheckedCreateWithoutCompanyInput> | internshipCreateWithoutCompanyInput[] | internshipUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: internshipCreateOrConnectWithoutCompanyInput | internshipCreateOrConnectWithoutCompanyInput[]
    upsert?: internshipUpsertWithWhereUniqueWithoutCompanyInput | internshipUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: internshipCreateManyCompanyInputEnvelope
    set?: internshipWhereUniqueInput | internshipWhereUniqueInput[]
    disconnect?: internshipWhereUniqueInput | internshipWhereUniqueInput[]
    delete?: internshipWhereUniqueInput | internshipWhereUniqueInput[]
    connect?: internshipWhereUniqueInput | internshipWhereUniqueInput[]
    update?: internshipUpdateWithWhereUniqueWithoutCompanyInput | internshipUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: internshipUpdateManyWithWhereWithoutCompanyInput | internshipUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: internshipScalarWhereInput | internshipScalarWhereInput[]
  }

  export type companyCreateNestedOneWithoutInternshipsInput = {
    create?: XOR<companyCreateWithoutInternshipsInput, companyUncheckedCreateWithoutInternshipsInput>
    connectOrCreate?: companyCreateOrConnectWithoutInternshipsInput
    connect?: companyWhereUniqueInput
  }

  export type internshipSkillCreateNestedManyWithoutInternshipInput = {
    create?: XOR<internshipSkillCreateWithoutInternshipInput, internshipSkillUncheckedCreateWithoutInternshipInput> | internshipSkillCreateWithoutInternshipInput[] | internshipSkillUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: internshipSkillCreateOrConnectWithoutInternshipInput | internshipSkillCreateOrConnectWithoutInternshipInput[]
    createMany?: internshipSkillCreateManyInternshipInputEnvelope
    connect?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
  }

  export type internshipSkillRequirementCreateNestedManyWithoutInternshipInput = {
    create?: XOR<internshipSkillRequirementCreateWithoutInternshipInput, internshipSkillRequirementUncheckedCreateWithoutInternshipInput> | internshipSkillRequirementCreateWithoutInternshipInput[] | internshipSkillRequirementUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: internshipSkillRequirementCreateOrConnectWithoutInternshipInput | internshipSkillRequirementCreateOrConnectWithoutInternshipInput[]
    createMany?: internshipSkillRequirementCreateManyInternshipInputEnvelope
    connect?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
  }

  export type internshipSkillUncheckedCreateNestedManyWithoutInternshipInput = {
    create?: XOR<internshipSkillCreateWithoutInternshipInput, internshipSkillUncheckedCreateWithoutInternshipInput> | internshipSkillCreateWithoutInternshipInput[] | internshipSkillUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: internshipSkillCreateOrConnectWithoutInternshipInput | internshipSkillCreateOrConnectWithoutInternshipInput[]
    createMany?: internshipSkillCreateManyInternshipInputEnvelope
    connect?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
  }

  export type internshipSkillRequirementUncheckedCreateNestedManyWithoutInternshipInput = {
    create?: XOR<internshipSkillRequirementCreateWithoutInternshipInput, internshipSkillRequirementUncheckedCreateWithoutInternshipInput> | internshipSkillRequirementCreateWithoutInternshipInput[] | internshipSkillRequirementUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: internshipSkillRequirementCreateOrConnectWithoutInternshipInput | internshipSkillRequirementCreateOrConnectWithoutInternshipInput[]
    createMany?: internshipSkillRequirementCreateManyInternshipInputEnvelope
    connect?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type companyUpdateOneWithoutInternshipsNestedInput = {
    create?: XOR<companyCreateWithoutInternshipsInput, companyUncheckedCreateWithoutInternshipsInput>
    connectOrCreate?: companyCreateOrConnectWithoutInternshipsInput
    upsert?: companyUpsertWithoutInternshipsInput
    disconnect?: companyWhereInput | boolean
    delete?: companyWhereInput | boolean
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutInternshipsInput, companyUpdateWithoutInternshipsInput>, companyUncheckedUpdateWithoutInternshipsInput>
  }

  export type internshipSkillUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<internshipSkillCreateWithoutInternshipInput, internshipSkillUncheckedCreateWithoutInternshipInput> | internshipSkillCreateWithoutInternshipInput[] | internshipSkillUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: internshipSkillCreateOrConnectWithoutInternshipInput | internshipSkillCreateOrConnectWithoutInternshipInput[]
    upsert?: internshipSkillUpsertWithWhereUniqueWithoutInternshipInput | internshipSkillUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: internshipSkillCreateManyInternshipInputEnvelope
    set?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    disconnect?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    delete?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    connect?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    update?: internshipSkillUpdateWithWhereUniqueWithoutInternshipInput | internshipSkillUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: internshipSkillUpdateManyWithWhereWithoutInternshipInput | internshipSkillUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: internshipSkillScalarWhereInput | internshipSkillScalarWhereInput[]
  }

  export type internshipSkillRequirementUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<internshipSkillRequirementCreateWithoutInternshipInput, internshipSkillRequirementUncheckedCreateWithoutInternshipInput> | internshipSkillRequirementCreateWithoutInternshipInput[] | internshipSkillRequirementUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: internshipSkillRequirementCreateOrConnectWithoutInternshipInput | internshipSkillRequirementCreateOrConnectWithoutInternshipInput[]
    upsert?: internshipSkillRequirementUpsertWithWhereUniqueWithoutInternshipInput | internshipSkillRequirementUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: internshipSkillRequirementCreateManyInternshipInputEnvelope
    set?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    disconnect?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    delete?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    connect?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    update?: internshipSkillRequirementUpdateWithWhereUniqueWithoutInternshipInput | internshipSkillRequirementUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: internshipSkillRequirementUpdateManyWithWhereWithoutInternshipInput | internshipSkillRequirementUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: internshipSkillRequirementScalarWhereInput | internshipSkillRequirementScalarWhereInput[]
  }

  export type internshipSkillUncheckedUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<internshipSkillCreateWithoutInternshipInput, internshipSkillUncheckedCreateWithoutInternshipInput> | internshipSkillCreateWithoutInternshipInput[] | internshipSkillUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: internshipSkillCreateOrConnectWithoutInternshipInput | internshipSkillCreateOrConnectWithoutInternshipInput[]
    upsert?: internshipSkillUpsertWithWhereUniqueWithoutInternshipInput | internshipSkillUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: internshipSkillCreateManyInternshipInputEnvelope
    set?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    disconnect?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    delete?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    connect?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    update?: internshipSkillUpdateWithWhereUniqueWithoutInternshipInput | internshipSkillUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: internshipSkillUpdateManyWithWhereWithoutInternshipInput | internshipSkillUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: internshipSkillScalarWhereInput | internshipSkillScalarWhereInput[]
  }

  export type internshipSkillRequirementUncheckedUpdateManyWithoutInternshipNestedInput = {
    create?: XOR<internshipSkillRequirementCreateWithoutInternshipInput, internshipSkillRequirementUncheckedCreateWithoutInternshipInput> | internshipSkillRequirementCreateWithoutInternshipInput[] | internshipSkillRequirementUncheckedCreateWithoutInternshipInput[]
    connectOrCreate?: internshipSkillRequirementCreateOrConnectWithoutInternshipInput | internshipSkillRequirementCreateOrConnectWithoutInternshipInput[]
    upsert?: internshipSkillRequirementUpsertWithWhereUniqueWithoutInternshipInput | internshipSkillRequirementUpsertWithWhereUniqueWithoutInternshipInput[]
    createMany?: internshipSkillRequirementCreateManyInternshipInputEnvelope
    set?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    disconnect?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    delete?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    connect?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    update?: internshipSkillRequirementUpdateWithWhereUniqueWithoutInternshipInput | internshipSkillRequirementUpdateWithWhereUniqueWithoutInternshipInput[]
    updateMany?: internshipSkillRequirementUpdateManyWithWhereWithoutInternshipInput | internshipSkillRequirementUpdateManyWithWhereWithoutInternshipInput[]
    deleteMany?: internshipSkillRequirementScalarWhereInput | internshipSkillRequirementScalarWhereInput[]
  }

  export type studentSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<studentSkillCreateWithoutSkillInput, studentSkillUncheckedCreateWithoutSkillInput> | studentSkillCreateWithoutSkillInput[] | studentSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: studentSkillCreateOrConnectWithoutSkillInput | studentSkillCreateOrConnectWithoutSkillInput[]
    createMany?: studentSkillCreateManySkillInputEnvelope
    connect?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
  }

  export type internshipSkillCreateNestedManyWithoutSkillInput = {
    create?: XOR<internshipSkillCreateWithoutSkillInput, internshipSkillUncheckedCreateWithoutSkillInput> | internshipSkillCreateWithoutSkillInput[] | internshipSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: internshipSkillCreateOrConnectWithoutSkillInput | internshipSkillCreateOrConnectWithoutSkillInput[]
    createMany?: internshipSkillCreateManySkillInputEnvelope
    connect?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
  }

  export type internshipSkillRequirementCreateNestedManyWithoutSkillInput = {
    create?: XOR<internshipSkillRequirementCreateWithoutSkillInput, internshipSkillRequirementUncheckedCreateWithoutSkillInput> | internshipSkillRequirementCreateWithoutSkillInput[] | internshipSkillRequirementUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: internshipSkillRequirementCreateOrConnectWithoutSkillInput | internshipSkillRequirementCreateOrConnectWithoutSkillInput[]
    createMany?: internshipSkillRequirementCreateManySkillInputEnvelope
    connect?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
  }

  export type courseResourceCreateNestedManyWithoutSkillInput = {
    create?: XOR<courseResourceCreateWithoutSkillInput, courseResourceUncheckedCreateWithoutSkillInput> | courseResourceCreateWithoutSkillInput[] | courseResourceUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: courseResourceCreateOrConnectWithoutSkillInput | courseResourceCreateOrConnectWithoutSkillInput[]
    createMany?: courseResourceCreateManySkillInputEnvelope
    connect?: courseResourceWhereUniqueInput | courseResourceWhereUniqueInput[]
  }

  export type studentSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<studentSkillCreateWithoutSkillInput, studentSkillUncheckedCreateWithoutSkillInput> | studentSkillCreateWithoutSkillInput[] | studentSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: studentSkillCreateOrConnectWithoutSkillInput | studentSkillCreateOrConnectWithoutSkillInput[]
    createMany?: studentSkillCreateManySkillInputEnvelope
    connect?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
  }

  export type internshipSkillUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<internshipSkillCreateWithoutSkillInput, internshipSkillUncheckedCreateWithoutSkillInput> | internshipSkillCreateWithoutSkillInput[] | internshipSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: internshipSkillCreateOrConnectWithoutSkillInput | internshipSkillCreateOrConnectWithoutSkillInput[]
    createMany?: internshipSkillCreateManySkillInputEnvelope
    connect?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
  }

  export type internshipSkillRequirementUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<internshipSkillRequirementCreateWithoutSkillInput, internshipSkillRequirementUncheckedCreateWithoutSkillInput> | internshipSkillRequirementCreateWithoutSkillInput[] | internshipSkillRequirementUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: internshipSkillRequirementCreateOrConnectWithoutSkillInput | internshipSkillRequirementCreateOrConnectWithoutSkillInput[]
    createMany?: internshipSkillRequirementCreateManySkillInputEnvelope
    connect?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
  }

  export type courseResourceUncheckedCreateNestedManyWithoutSkillInput = {
    create?: XOR<courseResourceCreateWithoutSkillInput, courseResourceUncheckedCreateWithoutSkillInput> | courseResourceCreateWithoutSkillInput[] | courseResourceUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: courseResourceCreateOrConnectWithoutSkillInput | courseResourceCreateOrConnectWithoutSkillInput[]
    createMany?: courseResourceCreateManySkillInputEnvelope
    connect?: courseResourceWhereUniqueInput | courseResourceWhereUniqueInput[]
  }

  export type studentSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<studentSkillCreateWithoutSkillInput, studentSkillUncheckedCreateWithoutSkillInput> | studentSkillCreateWithoutSkillInput[] | studentSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: studentSkillCreateOrConnectWithoutSkillInput | studentSkillCreateOrConnectWithoutSkillInput[]
    upsert?: studentSkillUpsertWithWhereUniqueWithoutSkillInput | studentSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: studentSkillCreateManySkillInputEnvelope
    set?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    disconnect?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    delete?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    connect?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    update?: studentSkillUpdateWithWhereUniqueWithoutSkillInput | studentSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: studentSkillUpdateManyWithWhereWithoutSkillInput | studentSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: studentSkillScalarWhereInput | studentSkillScalarWhereInput[]
  }

  export type internshipSkillUpdateManyWithoutSkillNestedInput = {
    create?: XOR<internshipSkillCreateWithoutSkillInput, internshipSkillUncheckedCreateWithoutSkillInput> | internshipSkillCreateWithoutSkillInput[] | internshipSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: internshipSkillCreateOrConnectWithoutSkillInput | internshipSkillCreateOrConnectWithoutSkillInput[]
    upsert?: internshipSkillUpsertWithWhereUniqueWithoutSkillInput | internshipSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: internshipSkillCreateManySkillInputEnvelope
    set?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    disconnect?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    delete?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    connect?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    update?: internshipSkillUpdateWithWhereUniqueWithoutSkillInput | internshipSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: internshipSkillUpdateManyWithWhereWithoutSkillInput | internshipSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: internshipSkillScalarWhereInput | internshipSkillScalarWhereInput[]
  }

  export type internshipSkillRequirementUpdateManyWithoutSkillNestedInput = {
    create?: XOR<internshipSkillRequirementCreateWithoutSkillInput, internshipSkillRequirementUncheckedCreateWithoutSkillInput> | internshipSkillRequirementCreateWithoutSkillInput[] | internshipSkillRequirementUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: internshipSkillRequirementCreateOrConnectWithoutSkillInput | internshipSkillRequirementCreateOrConnectWithoutSkillInput[]
    upsert?: internshipSkillRequirementUpsertWithWhereUniqueWithoutSkillInput | internshipSkillRequirementUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: internshipSkillRequirementCreateManySkillInputEnvelope
    set?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    disconnect?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    delete?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    connect?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    update?: internshipSkillRequirementUpdateWithWhereUniqueWithoutSkillInput | internshipSkillRequirementUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: internshipSkillRequirementUpdateManyWithWhereWithoutSkillInput | internshipSkillRequirementUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: internshipSkillRequirementScalarWhereInput | internshipSkillRequirementScalarWhereInput[]
  }

  export type courseResourceUpdateManyWithoutSkillNestedInput = {
    create?: XOR<courseResourceCreateWithoutSkillInput, courseResourceUncheckedCreateWithoutSkillInput> | courseResourceCreateWithoutSkillInput[] | courseResourceUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: courseResourceCreateOrConnectWithoutSkillInput | courseResourceCreateOrConnectWithoutSkillInput[]
    upsert?: courseResourceUpsertWithWhereUniqueWithoutSkillInput | courseResourceUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: courseResourceCreateManySkillInputEnvelope
    set?: courseResourceWhereUniqueInput | courseResourceWhereUniqueInput[]
    disconnect?: courseResourceWhereUniqueInput | courseResourceWhereUniqueInput[]
    delete?: courseResourceWhereUniqueInput | courseResourceWhereUniqueInput[]
    connect?: courseResourceWhereUniqueInput | courseResourceWhereUniqueInput[]
    update?: courseResourceUpdateWithWhereUniqueWithoutSkillInput | courseResourceUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: courseResourceUpdateManyWithWhereWithoutSkillInput | courseResourceUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: courseResourceScalarWhereInput | courseResourceScalarWhereInput[]
  }

  export type studentSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<studentSkillCreateWithoutSkillInput, studentSkillUncheckedCreateWithoutSkillInput> | studentSkillCreateWithoutSkillInput[] | studentSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: studentSkillCreateOrConnectWithoutSkillInput | studentSkillCreateOrConnectWithoutSkillInput[]
    upsert?: studentSkillUpsertWithWhereUniqueWithoutSkillInput | studentSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: studentSkillCreateManySkillInputEnvelope
    set?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    disconnect?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    delete?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    connect?: studentSkillWhereUniqueInput | studentSkillWhereUniqueInput[]
    update?: studentSkillUpdateWithWhereUniqueWithoutSkillInput | studentSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: studentSkillUpdateManyWithWhereWithoutSkillInput | studentSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: studentSkillScalarWhereInput | studentSkillScalarWhereInput[]
  }

  export type internshipSkillUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<internshipSkillCreateWithoutSkillInput, internshipSkillUncheckedCreateWithoutSkillInput> | internshipSkillCreateWithoutSkillInput[] | internshipSkillUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: internshipSkillCreateOrConnectWithoutSkillInput | internshipSkillCreateOrConnectWithoutSkillInput[]
    upsert?: internshipSkillUpsertWithWhereUniqueWithoutSkillInput | internshipSkillUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: internshipSkillCreateManySkillInputEnvelope
    set?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    disconnect?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    delete?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    connect?: internshipSkillWhereUniqueInput | internshipSkillWhereUniqueInput[]
    update?: internshipSkillUpdateWithWhereUniqueWithoutSkillInput | internshipSkillUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: internshipSkillUpdateManyWithWhereWithoutSkillInput | internshipSkillUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: internshipSkillScalarWhereInput | internshipSkillScalarWhereInput[]
  }

  export type internshipSkillRequirementUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<internshipSkillRequirementCreateWithoutSkillInput, internshipSkillRequirementUncheckedCreateWithoutSkillInput> | internshipSkillRequirementCreateWithoutSkillInput[] | internshipSkillRequirementUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: internshipSkillRequirementCreateOrConnectWithoutSkillInput | internshipSkillRequirementCreateOrConnectWithoutSkillInput[]
    upsert?: internshipSkillRequirementUpsertWithWhereUniqueWithoutSkillInput | internshipSkillRequirementUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: internshipSkillRequirementCreateManySkillInputEnvelope
    set?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    disconnect?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    delete?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    connect?: internshipSkillRequirementWhereUniqueInput | internshipSkillRequirementWhereUniqueInput[]
    update?: internshipSkillRequirementUpdateWithWhereUniqueWithoutSkillInput | internshipSkillRequirementUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: internshipSkillRequirementUpdateManyWithWhereWithoutSkillInput | internshipSkillRequirementUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: internshipSkillRequirementScalarWhereInput | internshipSkillRequirementScalarWhereInput[]
  }

  export type courseResourceUncheckedUpdateManyWithoutSkillNestedInput = {
    create?: XOR<courseResourceCreateWithoutSkillInput, courseResourceUncheckedCreateWithoutSkillInput> | courseResourceCreateWithoutSkillInput[] | courseResourceUncheckedCreateWithoutSkillInput[]
    connectOrCreate?: courseResourceCreateOrConnectWithoutSkillInput | courseResourceCreateOrConnectWithoutSkillInput[]
    upsert?: courseResourceUpsertWithWhereUniqueWithoutSkillInput | courseResourceUpsertWithWhereUniqueWithoutSkillInput[]
    createMany?: courseResourceCreateManySkillInputEnvelope
    set?: courseResourceWhereUniqueInput | courseResourceWhereUniqueInput[]
    disconnect?: courseResourceWhereUniqueInput | courseResourceWhereUniqueInput[]
    delete?: courseResourceWhereUniqueInput | courseResourceWhereUniqueInput[]
    connect?: courseResourceWhereUniqueInput | courseResourceWhereUniqueInput[]
    update?: courseResourceUpdateWithWhereUniqueWithoutSkillInput | courseResourceUpdateWithWhereUniqueWithoutSkillInput[]
    updateMany?: courseResourceUpdateManyWithWhereWithoutSkillInput | courseResourceUpdateManyWithWhereWithoutSkillInput[]
    deleteMany?: courseResourceScalarWhereInput | courseResourceScalarWhereInput[]
  }

  export type studentCreateNestedOneWithoutSkillsInput = {
    create?: XOR<studentCreateWithoutSkillsInput, studentUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: studentCreateOrConnectWithoutSkillsInput
    connect?: studentWhereUniqueInput
  }

  export type skillCreateNestedOneWithoutStudentSkillsInput = {
    create?: XOR<skillCreateWithoutStudentSkillsInput, skillUncheckedCreateWithoutStudentSkillsInput>
    connectOrCreate?: skillCreateOrConnectWithoutStudentSkillsInput
    connect?: skillWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type studentUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<studentCreateWithoutSkillsInput, studentUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: studentCreateOrConnectWithoutSkillsInput
    upsert?: studentUpsertWithoutSkillsInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutSkillsInput, studentUpdateWithoutSkillsInput>, studentUncheckedUpdateWithoutSkillsInput>
  }

  export type skillUpdateOneRequiredWithoutStudentSkillsNestedInput = {
    create?: XOR<skillCreateWithoutStudentSkillsInput, skillUncheckedCreateWithoutStudentSkillsInput>
    connectOrCreate?: skillCreateOrConnectWithoutStudentSkillsInput
    upsert?: skillUpsertWithoutStudentSkillsInput
    connect?: skillWhereUniqueInput
    update?: XOR<XOR<skillUpdateToOneWithWhereWithoutStudentSkillsInput, skillUpdateWithoutStudentSkillsInput>, skillUncheckedUpdateWithoutStudentSkillsInput>
  }

  export type internshipCreateNestedOneWithoutRequiredSkillsInput = {
    create?: XOR<internshipCreateWithoutRequiredSkillsInput, internshipUncheckedCreateWithoutRequiredSkillsInput>
    connectOrCreate?: internshipCreateOrConnectWithoutRequiredSkillsInput
    connect?: internshipWhereUniqueInput
  }

  export type skillCreateNestedOneWithoutInternshipSkillsInput = {
    create?: XOR<skillCreateWithoutInternshipSkillsInput, skillUncheckedCreateWithoutInternshipSkillsInput>
    connectOrCreate?: skillCreateOrConnectWithoutInternshipSkillsInput
    connect?: skillWhereUniqueInput
  }

  export type internshipUpdateOneRequiredWithoutRequiredSkillsNestedInput = {
    create?: XOR<internshipCreateWithoutRequiredSkillsInput, internshipUncheckedCreateWithoutRequiredSkillsInput>
    connectOrCreate?: internshipCreateOrConnectWithoutRequiredSkillsInput
    upsert?: internshipUpsertWithoutRequiredSkillsInput
    connect?: internshipWhereUniqueInput
    update?: XOR<XOR<internshipUpdateToOneWithWhereWithoutRequiredSkillsInput, internshipUpdateWithoutRequiredSkillsInput>, internshipUncheckedUpdateWithoutRequiredSkillsInput>
  }

  export type skillUpdateOneRequiredWithoutInternshipSkillsNestedInput = {
    create?: XOR<skillCreateWithoutInternshipSkillsInput, skillUncheckedCreateWithoutInternshipSkillsInput>
    connectOrCreate?: skillCreateOrConnectWithoutInternshipSkillsInput
    upsert?: skillUpsertWithoutInternshipSkillsInput
    connect?: skillWhereUniqueInput
    update?: XOR<XOR<skillUpdateToOneWithWhereWithoutInternshipSkillsInput, skillUpdateWithoutInternshipSkillsInput>, skillUncheckedUpdateWithoutInternshipSkillsInput>
  }

  export type internshipCreateNestedOneWithoutSkillRequirementsInput = {
    create?: XOR<internshipCreateWithoutSkillRequirementsInput, internshipUncheckedCreateWithoutSkillRequirementsInput>
    connectOrCreate?: internshipCreateOrConnectWithoutSkillRequirementsInput
    connect?: internshipWhereUniqueInput
  }

  export type skillCreateNestedOneWithoutInternshipSkillRequirementsInput = {
    create?: XOR<skillCreateWithoutInternshipSkillRequirementsInput, skillUncheckedCreateWithoutInternshipSkillRequirementsInput>
    connectOrCreate?: skillCreateOrConnectWithoutInternshipSkillRequirementsInput
    connect?: skillWhereUniqueInput
  }

  export type internshipUpdateOneRequiredWithoutSkillRequirementsNestedInput = {
    create?: XOR<internshipCreateWithoutSkillRequirementsInput, internshipUncheckedCreateWithoutSkillRequirementsInput>
    connectOrCreate?: internshipCreateOrConnectWithoutSkillRequirementsInput
    upsert?: internshipUpsertWithoutSkillRequirementsInput
    connect?: internshipWhereUniqueInput
    update?: XOR<XOR<internshipUpdateToOneWithWhereWithoutSkillRequirementsInput, internshipUpdateWithoutSkillRequirementsInput>, internshipUncheckedUpdateWithoutSkillRequirementsInput>
  }

  export type skillUpdateOneRequiredWithoutInternshipSkillRequirementsNestedInput = {
    create?: XOR<skillCreateWithoutInternshipSkillRequirementsInput, skillUncheckedCreateWithoutInternshipSkillRequirementsInput>
    connectOrCreate?: skillCreateOrConnectWithoutInternshipSkillRequirementsInput
    upsert?: skillUpsertWithoutInternshipSkillRequirementsInput
    connect?: skillWhereUniqueInput
    update?: XOR<XOR<skillUpdateToOneWithWhereWithoutInternshipSkillRequirementsInput, skillUpdateWithoutInternshipSkillRequirementsInput>, skillUncheckedUpdateWithoutInternshipSkillRequirementsInput>
  }

  export type skillCreateNestedOneWithoutCourseResourcesInput = {
    create?: XOR<skillCreateWithoutCourseResourcesInput, skillUncheckedCreateWithoutCourseResourcesInput>
    connectOrCreate?: skillCreateOrConnectWithoutCourseResourcesInput
    connect?: skillWhereUniqueInput
  }

  export type studentCourseProgressCreateNestedManyWithoutCourseResourceInput = {
    create?: XOR<studentCourseProgressCreateWithoutCourseResourceInput, studentCourseProgressUncheckedCreateWithoutCourseResourceInput> | studentCourseProgressCreateWithoutCourseResourceInput[] | studentCourseProgressUncheckedCreateWithoutCourseResourceInput[]
    connectOrCreate?: studentCourseProgressCreateOrConnectWithoutCourseResourceInput | studentCourseProgressCreateOrConnectWithoutCourseResourceInput[]
    createMany?: studentCourseProgressCreateManyCourseResourceInputEnvelope
    connect?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
  }

  export type studentCourseProgressUncheckedCreateNestedManyWithoutCourseResourceInput = {
    create?: XOR<studentCourseProgressCreateWithoutCourseResourceInput, studentCourseProgressUncheckedCreateWithoutCourseResourceInput> | studentCourseProgressCreateWithoutCourseResourceInput[] | studentCourseProgressUncheckedCreateWithoutCourseResourceInput[]
    connectOrCreate?: studentCourseProgressCreateOrConnectWithoutCourseResourceInput | studentCourseProgressCreateOrConnectWithoutCourseResourceInput[]
    createMany?: studentCourseProgressCreateManyCourseResourceInputEnvelope
    connect?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
  }

  export type skillUpdateOneRequiredWithoutCourseResourcesNestedInput = {
    create?: XOR<skillCreateWithoutCourseResourcesInput, skillUncheckedCreateWithoutCourseResourcesInput>
    connectOrCreate?: skillCreateOrConnectWithoutCourseResourcesInput
    upsert?: skillUpsertWithoutCourseResourcesInput
    connect?: skillWhereUniqueInput
    update?: XOR<XOR<skillUpdateToOneWithWhereWithoutCourseResourcesInput, skillUpdateWithoutCourseResourcesInput>, skillUncheckedUpdateWithoutCourseResourcesInput>
  }

  export type studentCourseProgressUpdateManyWithoutCourseResourceNestedInput = {
    create?: XOR<studentCourseProgressCreateWithoutCourseResourceInput, studentCourseProgressUncheckedCreateWithoutCourseResourceInput> | studentCourseProgressCreateWithoutCourseResourceInput[] | studentCourseProgressUncheckedCreateWithoutCourseResourceInput[]
    connectOrCreate?: studentCourseProgressCreateOrConnectWithoutCourseResourceInput | studentCourseProgressCreateOrConnectWithoutCourseResourceInput[]
    upsert?: studentCourseProgressUpsertWithWhereUniqueWithoutCourseResourceInput | studentCourseProgressUpsertWithWhereUniqueWithoutCourseResourceInput[]
    createMany?: studentCourseProgressCreateManyCourseResourceInputEnvelope
    set?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    disconnect?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    delete?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    connect?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    update?: studentCourseProgressUpdateWithWhereUniqueWithoutCourseResourceInput | studentCourseProgressUpdateWithWhereUniqueWithoutCourseResourceInput[]
    updateMany?: studentCourseProgressUpdateManyWithWhereWithoutCourseResourceInput | studentCourseProgressUpdateManyWithWhereWithoutCourseResourceInput[]
    deleteMany?: studentCourseProgressScalarWhereInput | studentCourseProgressScalarWhereInput[]
  }

  export type studentCourseProgressUncheckedUpdateManyWithoutCourseResourceNestedInput = {
    create?: XOR<studentCourseProgressCreateWithoutCourseResourceInput, studentCourseProgressUncheckedCreateWithoutCourseResourceInput> | studentCourseProgressCreateWithoutCourseResourceInput[] | studentCourseProgressUncheckedCreateWithoutCourseResourceInput[]
    connectOrCreate?: studentCourseProgressCreateOrConnectWithoutCourseResourceInput | studentCourseProgressCreateOrConnectWithoutCourseResourceInput[]
    upsert?: studentCourseProgressUpsertWithWhereUniqueWithoutCourseResourceInput | studentCourseProgressUpsertWithWhereUniqueWithoutCourseResourceInput[]
    createMany?: studentCourseProgressCreateManyCourseResourceInputEnvelope
    set?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    disconnect?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    delete?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    connect?: studentCourseProgressWhereUniqueInput | studentCourseProgressWhereUniqueInput[]
    update?: studentCourseProgressUpdateWithWhereUniqueWithoutCourseResourceInput | studentCourseProgressUpdateWithWhereUniqueWithoutCourseResourceInput[]
    updateMany?: studentCourseProgressUpdateManyWithWhereWithoutCourseResourceInput | studentCourseProgressUpdateManyWithWhereWithoutCourseResourceInput[]
    deleteMany?: studentCourseProgressScalarWhereInput | studentCourseProgressScalarWhereInput[]
  }

  export type studentCreateNestedOneWithoutCourseProgressInput = {
    create?: XOR<studentCreateWithoutCourseProgressInput, studentUncheckedCreateWithoutCourseProgressInput>
    connectOrCreate?: studentCreateOrConnectWithoutCourseProgressInput
    connect?: studentWhereUniqueInput
  }

  export type courseResourceCreateNestedOneWithoutStudentProgressInput = {
    create?: XOR<courseResourceCreateWithoutStudentProgressInput, courseResourceUncheckedCreateWithoutStudentProgressInput>
    connectOrCreate?: courseResourceCreateOrConnectWithoutStudentProgressInput
    connect?: courseResourceWhereUniqueInput
  }

  export type studentUpdateOneRequiredWithoutCourseProgressNestedInput = {
    create?: XOR<studentCreateWithoutCourseProgressInput, studentUncheckedCreateWithoutCourseProgressInput>
    connectOrCreate?: studentCreateOrConnectWithoutCourseProgressInput
    upsert?: studentUpsertWithoutCourseProgressInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutCourseProgressInput, studentUpdateWithoutCourseProgressInput>, studentUncheckedUpdateWithoutCourseProgressInput>
  }

  export type courseResourceUpdateOneRequiredWithoutStudentProgressNestedInput = {
    create?: XOR<courseResourceCreateWithoutStudentProgressInput, courseResourceUncheckedCreateWithoutStudentProgressInput>
    connectOrCreate?: courseResourceCreateOrConnectWithoutStudentProgressInput
    upsert?: courseResourceUpsertWithoutStudentProgressInput
    connect?: courseResourceWhereUniqueInput
    update?: XOR<XOR<courseResourceUpdateToOneWithWhereWithoutStudentProgressInput, courseResourceUpdateWithoutStudentProgressInput>, courseResourceUncheckedUpdateWithoutStudentProgressInput>
  }

  export type studentCreateNestedOneWithoutChatSessionsInput = {
    create?: XOR<studentCreateWithoutChatSessionsInput, studentUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: studentCreateOrConnectWithoutChatSessionsInput
    connect?: studentWhereUniqueInput
  }

  export type chatMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<chatMessageCreateWithoutSessionInput, chatMessageUncheckedCreateWithoutSessionInput> | chatMessageCreateWithoutSessionInput[] | chatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: chatMessageCreateOrConnectWithoutSessionInput | chatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: chatMessageCreateManySessionInputEnvelope
    connect?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
  }

  export type chatMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<chatMessageCreateWithoutSessionInput, chatMessageUncheckedCreateWithoutSessionInput> | chatMessageCreateWithoutSessionInput[] | chatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: chatMessageCreateOrConnectWithoutSessionInput | chatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: chatMessageCreateManySessionInputEnvelope
    connect?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
  }

  export type studentUpdateOneRequiredWithoutChatSessionsNestedInput = {
    create?: XOR<studentCreateWithoutChatSessionsInput, studentUncheckedCreateWithoutChatSessionsInput>
    connectOrCreate?: studentCreateOrConnectWithoutChatSessionsInput
    upsert?: studentUpsertWithoutChatSessionsInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutChatSessionsInput, studentUpdateWithoutChatSessionsInput>, studentUncheckedUpdateWithoutChatSessionsInput>
  }

  export type chatMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<chatMessageCreateWithoutSessionInput, chatMessageUncheckedCreateWithoutSessionInput> | chatMessageCreateWithoutSessionInput[] | chatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: chatMessageCreateOrConnectWithoutSessionInput | chatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: chatMessageUpsertWithWhereUniqueWithoutSessionInput | chatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: chatMessageCreateManySessionInputEnvelope
    set?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    disconnect?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    delete?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    connect?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    update?: chatMessageUpdateWithWhereUniqueWithoutSessionInput | chatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: chatMessageUpdateManyWithWhereWithoutSessionInput | chatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: chatMessageScalarWhereInput | chatMessageScalarWhereInput[]
  }

  export type chatMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<chatMessageCreateWithoutSessionInput, chatMessageUncheckedCreateWithoutSessionInput> | chatMessageCreateWithoutSessionInput[] | chatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: chatMessageCreateOrConnectWithoutSessionInput | chatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: chatMessageUpsertWithWhereUniqueWithoutSessionInput | chatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: chatMessageCreateManySessionInputEnvelope
    set?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    disconnect?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    delete?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    connect?: chatMessageWhereUniqueInput | chatMessageWhereUniqueInput[]
    update?: chatMessageUpdateWithWhereUniqueWithoutSessionInput | chatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: chatMessageUpdateManyWithWhereWithoutSessionInput | chatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: chatMessageScalarWhereInput | chatMessageScalarWhereInput[]
  }

  export type chatSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<chatSessionCreateWithoutMessagesInput, chatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: chatSessionCreateOrConnectWithoutMessagesInput
    connect?: chatSessionWhereUniqueInput
  }

  export type chatSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<chatSessionCreateWithoutMessagesInput, chatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: chatSessionCreateOrConnectWithoutMessagesInput
    upsert?: chatSessionUpsertWithoutMessagesInput
    connect?: chatSessionWhereUniqueInput
    update?: XOR<XOR<chatSessionUpdateToOneWithWhereWithoutMessagesInput, chatSessionUpdateWithoutMessagesInput>, chatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type studentSkillCreateWithoutStudentInput = {
    level?: number
    score?: number
    chatScore?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: skillCreateNestedOneWithoutStudentSkillsInput
  }

  export type studentSkillUncheckedCreateWithoutStudentInput = {
    id?: number
    skillId: number
    level?: number
    score?: number
    chatScore?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentSkillCreateOrConnectWithoutStudentInput = {
    where: studentSkillWhereUniqueInput
    create: XOR<studentSkillCreateWithoutStudentInput, studentSkillUncheckedCreateWithoutStudentInput>
  }

  export type studentSkillCreateManyStudentInputEnvelope = {
    data: studentSkillCreateManyStudentInput | studentSkillCreateManyStudentInput[]
  }

  export type studentCourseProgressCreateWithoutStudentInput = {
    status?: string
    scoreAwarded?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseResource: courseResourceCreateNestedOneWithoutStudentProgressInput
  }

  export type studentCourseProgressUncheckedCreateWithoutStudentInput = {
    id?: number
    courseResourceId: number
    status?: string
    scoreAwarded?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentCourseProgressCreateOrConnectWithoutStudentInput = {
    where: studentCourseProgressWhereUniqueInput
    create: XOR<studentCourseProgressCreateWithoutStudentInput, studentCourseProgressUncheckedCreateWithoutStudentInput>
  }

  export type studentCourseProgressCreateManyStudentInputEnvelope = {
    data: studentCourseProgressCreateManyStudentInput | studentCourseProgressCreateManyStudentInput[]
  }

  export type chatSessionCreateWithoutStudentInput = {
    startedAt?: Date | string
    lastActive?: Date | string
    isActive?: boolean
    messages?: chatMessageCreateNestedManyWithoutSessionInput
  }

  export type chatSessionUncheckedCreateWithoutStudentInput = {
    id?: number
    startedAt?: Date | string
    lastActive?: Date | string
    isActive?: boolean
    messages?: chatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type chatSessionCreateOrConnectWithoutStudentInput = {
    where: chatSessionWhereUniqueInput
    create: XOR<chatSessionCreateWithoutStudentInput, chatSessionUncheckedCreateWithoutStudentInput>
  }

  export type chatSessionCreateManyStudentInputEnvelope = {
    data: chatSessionCreateManyStudentInput | chatSessionCreateManyStudentInput[]
  }

  export type studentSkillUpsertWithWhereUniqueWithoutStudentInput = {
    where: studentSkillWhereUniqueInput
    update: XOR<studentSkillUpdateWithoutStudentInput, studentSkillUncheckedUpdateWithoutStudentInput>
    create: XOR<studentSkillCreateWithoutStudentInput, studentSkillUncheckedCreateWithoutStudentInput>
  }

  export type studentSkillUpdateWithWhereUniqueWithoutStudentInput = {
    where: studentSkillWhereUniqueInput
    data: XOR<studentSkillUpdateWithoutStudentInput, studentSkillUncheckedUpdateWithoutStudentInput>
  }

  export type studentSkillUpdateManyWithWhereWithoutStudentInput = {
    where: studentSkillScalarWhereInput
    data: XOR<studentSkillUpdateManyMutationInput, studentSkillUncheckedUpdateManyWithoutStudentInput>
  }

  export type studentSkillScalarWhereInput = {
    AND?: studentSkillScalarWhereInput | studentSkillScalarWhereInput[]
    OR?: studentSkillScalarWhereInput[]
    NOT?: studentSkillScalarWhereInput | studentSkillScalarWhereInput[]
    id?: IntFilter<"studentSkill"> | number
    studentId?: IntFilter<"studentSkill"> | number
    skillId?: IntFilter<"studentSkill"> | number
    level?: IntFilter<"studentSkill"> | number
    score?: FloatFilter<"studentSkill"> | number
    chatScore?: IntFilter<"studentSkill"> | number
    isCompleted?: BoolFilter<"studentSkill"> | boolean
    createdAt?: DateTimeFilter<"studentSkill"> | Date | string
    updatedAt?: DateTimeFilter<"studentSkill"> | Date | string
  }

  export type studentCourseProgressUpsertWithWhereUniqueWithoutStudentInput = {
    where: studentCourseProgressWhereUniqueInput
    update: XOR<studentCourseProgressUpdateWithoutStudentInput, studentCourseProgressUncheckedUpdateWithoutStudentInput>
    create: XOR<studentCourseProgressCreateWithoutStudentInput, studentCourseProgressUncheckedCreateWithoutStudentInput>
  }

  export type studentCourseProgressUpdateWithWhereUniqueWithoutStudentInput = {
    where: studentCourseProgressWhereUniqueInput
    data: XOR<studentCourseProgressUpdateWithoutStudentInput, studentCourseProgressUncheckedUpdateWithoutStudentInput>
  }

  export type studentCourseProgressUpdateManyWithWhereWithoutStudentInput = {
    where: studentCourseProgressScalarWhereInput
    data: XOR<studentCourseProgressUpdateManyMutationInput, studentCourseProgressUncheckedUpdateManyWithoutStudentInput>
  }

  export type studentCourseProgressScalarWhereInput = {
    AND?: studentCourseProgressScalarWhereInput | studentCourseProgressScalarWhereInput[]
    OR?: studentCourseProgressScalarWhereInput[]
    NOT?: studentCourseProgressScalarWhereInput | studentCourseProgressScalarWhereInput[]
    id?: IntFilter<"studentCourseProgress"> | number
    studentId?: IntFilter<"studentCourseProgress"> | number
    courseResourceId?: IntFilter<"studentCourseProgress"> | number
    status?: StringFilter<"studentCourseProgress"> | string
    scoreAwarded?: BoolFilter<"studentCourseProgress"> | boolean
    startedAt?: DateTimeNullableFilter<"studentCourseProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"studentCourseProgress"> | Date | string | null
    createdAt?: DateTimeFilter<"studentCourseProgress"> | Date | string
    updatedAt?: DateTimeFilter<"studentCourseProgress"> | Date | string
  }

  export type chatSessionUpsertWithWhereUniqueWithoutStudentInput = {
    where: chatSessionWhereUniqueInput
    update: XOR<chatSessionUpdateWithoutStudentInput, chatSessionUncheckedUpdateWithoutStudentInput>
    create: XOR<chatSessionCreateWithoutStudentInput, chatSessionUncheckedCreateWithoutStudentInput>
  }

  export type chatSessionUpdateWithWhereUniqueWithoutStudentInput = {
    where: chatSessionWhereUniqueInput
    data: XOR<chatSessionUpdateWithoutStudentInput, chatSessionUncheckedUpdateWithoutStudentInput>
  }

  export type chatSessionUpdateManyWithWhereWithoutStudentInput = {
    where: chatSessionScalarWhereInput
    data: XOR<chatSessionUpdateManyMutationInput, chatSessionUncheckedUpdateManyWithoutStudentInput>
  }

  export type chatSessionScalarWhereInput = {
    AND?: chatSessionScalarWhereInput | chatSessionScalarWhereInput[]
    OR?: chatSessionScalarWhereInput[]
    NOT?: chatSessionScalarWhereInput | chatSessionScalarWhereInput[]
    id?: IntFilter<"chatSession"> | number
    studentId?: IntFilter<"chatSession"> | number
    startedAt?: DateTimeFilter<"chatSession"> | Date | string
    lastActive?: DateTimeFilter<"chatSession"> | Date | string
    isActive?: BoolFilter<"chatSession"> | boolean
  }

  export type internshipCreateWithoutCompanyInput = {
    title: string
    companyName?: string | null
    department?: string | null
    location?: string | null
    workMode?: string | null
    isRemote?: boolean
    durationMonths?: number | null
    duration?: string | null
    stipend?: number | null
    roleDescription?: string | null
    learningOutcomes?: string | null
    numberOfPositions?: number
    minimumDegreeLevel?: string | null
    preferredFieldOfStudy?: string | null
    minimumGpaPercentage?: string | null
    graduationYearRange?: string | null
    additionalPreferences?: string | null
    status?: string
    skillTags?: string | null
    applyUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredSkills?: internshipSkillCreateNestedManyWithoutInternshipInput
    skillRequirements?: internshipSkillRequirementCreateNestedManyWithoutInternshipInput
  }

  export type internshipUncheckedCreateWithoutCompanyInput = {
    id?: number
    title: string
    companyName?: string | null
    department?: string | null
    location?: string | null
    workMode?: string | null
    isRemote?: boolean
    durationMonths?: number | null
    duration?: string | null
    stipend?: number | null
    roleDescription?: string | null
    learningOutcomes?: string | null
    numberOfPositions?: number
    minimumDegreeLevel?: string | null
    preferredFieldOfStudy?: string | null
    minimumGpaPercentage?: string | null
    graduationYearRange?: string | null
    additionalPreferences?: string | null
    status?: string
    skillTags?: string | null
    applyUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredSkills?: internshipSkillUncheckedCreateNestedManyWithoutInternshipInput
    skillRequirements?: internshipSkillRequirementUncheckedCreateNestedManyWithoutInternshipInput
  }

  export type internshipCreateOrConnectWithoutCompanyInput = {
    where: internshipWhereUniqueInput
    create: XOR<internshipCreateWithoutCompanyInput, internshipUncheckedCreateWithoutCompanyInput>
  }

  export type internshipCreateManyCompanyInputEnvelope = {
    data: internshipCreateManyCompanyInput | internshipCreateManyCompanyInput[]
  }

  export type internshipUpsertWithWhereUniqueWithoutCompanyInput = {
    where: internshipWhereUniqueInput
    update: XOR<internshipUpdateWithoutCompanyInput, internshipUncheckedUpdateWithoutCompanyInput>
    create: XOR<internshipCreateWithoutCompanyInput, internshipUncheckedCreateWithoutCompanyInput>
  }

  export type internshipUpdateWithWhereUniqueWithoutCompanyInput = {
    where: internshipWhereUniqueInput
    data: XOR<internshipUpdateWithoutCompanyInput, internshipUncheckedUpdateWithoutCompanyInput>
  }

  export type internshipUpdateManyWithWhereWithoutCompanyInput = {
    where: internshipScalarWhereInput
    data: XOR<internshipUpdateManyMutationInput, internshipUncheckedUpdateManyWithoutCompanyInput>
  }

  export type internshipScalarWhereInput = {
    AND?: internshipScalarWhereInput | internshipScalarWhereInput[]
    OR?: internshipScalarWhereInput[]
    NOT?: internshipScalarWhereInput | internshipScalarWhereInput[]
    id?: IntFilter<"internship"> | number
    companyId?: IntNullableFilter<"internship"> | number | null
    title?: StringFilter<"internship"> | string
    companyName?: StringNullableFilter<"internship"> | string | null
    department?: StringNullableFilter<"internship"> | string | null
    location?: StringNullableFilter<"internship"> | string | null
    workMode?: StringNullableFilter<"internship"> | string | null
    isRemote?: BoolFilter<"internship"> | boolean
    durationMonths?: IntNullableFilter<"internship"> | number | null
    duration?: StringNullableFilter<"internship"> | string | null
    stipend?: FloatNullableFilter<"internship"> | number | null
    roleDescription?: StringNullableFilter<"internship"> | string | null
    learningOutcomes?: StringNullableFilter<"internship"> | string | null
    numberOfPositions?: IntFilter<"internship"> | number
    minimumDegreeLevel?: StringNullableFilter<"internship"> | string | null
    preferredFieldOfStudy?: StringNullableFilter<"internship"> | string | null
    minimumGpaPercentage?: StringNullableFilter<"internship"> | string | null
    graduationYearRange?: StringNullableFilter<"internship"> | string | null
    additionalPreferences?: StringNullableFilter<"internship"> | string | null
    status?: StringFilter<"internship"> | string
    skillTags?: StringNullableFilter<"internship"> | string | null
    applyUrl?: StringNullableFilter<"internship"> | string | null
    createdAt?: DateTimeFilter<"internship"> | Date | string
    updatedAt?: DateTimeFilter<"internship"> | Date | string
  }

  export type companyCreateWithoutInternshipsInput = {
    companyName: string
    email: string
    password: string
    registrationNumber?: string | null
    industrySector?: string | null
    companySize?: string | null
    companyDescription?: string | null
    companyWebsite?: string | null
    contactPersonName?: string | null
    designation?: string | null
    phoneNumber?: string | null
    officeAddress?: string | null
    registrationCertificate?: string | null
    gstCertificate?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type companyUncheckedCreateWithoutInternshipsInput = {
    id?: number
    companyName: string
    email: string
    password: string
    registrationNumber?: string | null
    industrySector?: string | null
    companySize?: string | null
    companyDescription?: string | null
    companyWebsite?: string | null
    contactPersonName?: string | null
    designation?: string | null
    phoneNumber?: string | null
    officeAddress?: string | null
    registrationCertificate?: string | null
    gstCertificate?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type companyCreateOrConnectWithoutInternshipsInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutInternshipsInput, companyUncheckedCreateWithoutInternshipsInput>
  }

  export type internshipSkillCreateWithoutInternshipInput = {
    skill: skillCreateNestedOneWithoutInternshipSkillsInput
  }

  export type internshipSkillUncheckedCreateWithoutInternshipInput = {
    id?: number
    skillId: number
  }

  export type internshipSkillCreateOrConnectWithoutInternshipInput = {
    where: internshipSkillWhereUniqueInput
    create: XOR<internshipSkillCreateWithoutInternshipInput, internshipSkillUncheckedCreateWithoutInternshipInput>
  }

  export type internshipSkillCreateManyInternshipInputEnvelope = {
    data: internshipSkillCreateManyInternshipInput | internshipSkillCreateManyInternshipInput[]
  }

  export type internshipSkillRequirementCreateWithoutInternshipInput = {
    requiredScore?: number
    skill: skillCreateNestedOneWithoutInternshipSkillRequirementsInput
  }

  export type internshipSkillRequirementUncheckedCreateWithoutInternshipInput = {
    id?: number
    skillId: number
    requiredScore?: number
  }

  export type internshipSkillRequirementCreateOrConnectWithoutInternshipInput = {
    where: internshipSkillRequirementWhereUniqueInput
    create: XOR<internshipSkillRequirementCreateWithoutInternshipInput, internshipSkillRequirementUncheckedCreateWithoutInternshipInput>
  }

  export type internshipSkillRequirementCreateManyInternshipInputEnvelope = {
    data: internshipSkillRequirementCreateManyInternshipInput | internshipSkillRequirementCreateManyInternshipInput[]
  }

  export type companyUpsertWithoutInternshipsInput = {
    update: XOR<companyUpdateWithoutInternshipsInput, companyUncheckedUpdateWithoutInternshipsInput>
    create: XOR<companyCreateWithoutInternshipsInput, companyUncheckedCreateWithoutInternshipsInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutInternshipsInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutInternshipsInput, companyUncheckedUpdateWithoutInternshipsInput>
  }

  export type companyUpdateWithoutInternshipsInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    industrySector?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registrationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    gstCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type companyUncheckedUpdateWithoutInternshipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    industrySector?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    companyDescription?: NullableStringFieldUpdateOperationsInput | string | null
    companyWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    contactPersonName?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    officeAddress?: NullableStringFieldUpdateOperationsInput | string | null
    registrationCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    gstCertificate?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type internshipSkillUpsertWithWhereUniqueWithoutInternshipInput = {
    where: internshipSkillWhereUniqueInput
    update: XOR<internshipSkillUpdateWithoutInternshipInput, internshipSkillUncheckedUpdateWithoutInternshipInput>
    create: XOR<internshipSkillCreateWithoutInternshipInput, internshipSkillUncheckedCreateWithoutInternshipInput>
  }

  export type internshipSkillUpdateWithWhereUniqueWithoutInternshipInput = {
    where: internshipSkillWhereUniqueInput
    data: XOR<internshipSkillUpdateWithoutInternshipInput, internshipSkillUncheckedUpdateWithoutInternshipInput>
  }

  export type internshipSkillUpdateManyWithWhereWithoutInternshipInput = {
    where: internshipSkillScalarWhereInput
    data: XOR<internshipSkillUpdateManyMutationInput, internshipSkillUncheckedUpdateManyWithoutInternshipInput>
  }

  export type internshipSkillScalarWhereInput = {
    AND?: internshipSkillScalarWhereInput | internshipSkillScalarWhereInput[]
    OR?: internshipSkillScalarWhereInput[]
    NOT?: internshipSkillScalarWhereInput | internshipSkillScalarWhereInput[]
    id?: IntFilter<"internshipSkill"> | number
    internshipId?: IntFilter<"internshipSkill"> | number
    skillId?: IntFilter<"internshipSkill"> | number
  }

  export type internshipSkillRequirementUpsertWithWhereUniqueWithoutInternshipInput = {
    where: internshipSkillRequirementWhereUniqueInput
    update: XOR<internshipSkillRequirementUpdateWithoutInternshipInput, internshipSkillRequirementUncheckedUpdateWithoutInternshipInput>
    create: XOR<internshipSkillRequirementCreateWithoutInternshipInput, internshipSkillRequirementUncheckedCreateWithoutInternshipInput>
  }

  export type internshipSkillRequirementUpdateWithWhereUniqueWithoutInternshipInput = {
    where: internshipSkillRequirementWhereUniqueInput
    data: XOR<internshipSkillRequirementUpdateWithoutInternshipInput, internshipSkillRequirementUncheckedUpdateWithoutInternshipInput>
  }

  export type internshipSkillRequirementUpdateManyWithWhereWithoutInternshipInput = {
    where: internshipSkillRequirementScalarWhereInput
    data: XOR<internshipSkillRequirementUpdateManyMutationInput, internshipSkillRequirementUncheckedUpdateManyWithoutInternshipInput>
  }

  export type internshipSkillRequirementScalarWhereInput = {
    AND?: internshipSkillRequirementScalarWhereInput | internshipSkillRequirementScalarWhereInput[]
    OR?: internshipSkillRequirementScalarWhereInput[]
    NOT?: internshipSkillRequirementScalarWhereInput | internshipSkillRequirementScalarWhereInput[]
    id?: IntFilter<"internshipSkillRequirement"> | number
    internshipId?: IntFilter<"internshipSkillRequirement"> | number
    skillId?: IntFilter<"internshipSkillRequirement"> | number
    requiredScore?: FloatFilter<"internshipSkillRequirement"> | number
  }

  export type studentSkillCreateWithoutSkillInput = {
    level?: number
    score?: number
    chatScore?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    student: studentCreateNestedOneWithoutSkillsInput
  }

  export type studentSkillUncheckedCreateWithoutSkillInput = {
    id?: number
    studentId: number
    level?: number
    score?: number
    chatScore?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentSkillCreateOrConnectWithoutSkillInput = {
    where: studentSkillWhereUniqueInput
    create: XOR<studentSkillCreateWithoutSkillInput, studentSkillUncheckedCreateWithoutSkillInput>
  }

  export type studentSkillCreateManySkillInputEnvelope = {
    data: studentSkillCreateManySkillInput | studentSkillCreateManySkillInput[]
  }

  export type internshipSkillCreateWithoutSkillInput = {
    internship: internshipCreateNestedOneWithoutRequiredSkillsInput
  }

  export type internshipSkillUncheckedCreateWithoutSkillInput = {
    id?: number
    internshipId: number
  }

  export type internshipSkillCreateOrConnectWithoutSkillInput = {
    where: internshipSkillWhereUniqueInput
    create: XOR<internshipSkillCreateWithoutSkillInput, internshipSkillUncheckedCreateWithoutSkillInput>
  }

  export type internshipSkillCreateManySkillInputEnvelope = {
    data: internshipSkillCreateManySkillInput | internshipSkillCreateManySkillInput[]
  }

  export type internshipSkillRequirementCreateWithoutSkillInput = {
    requiredScore?: number
    internship: internshipCreateNestedOneWithoutSkillRequirementsInput
  }

  export type internshipSkillRequirementUncheckedCreateWithoutSkillInput = {
    id?: number
    internshipId: number
    requiredScore?: number
  }

  export type internshipSkillRequirementCreateOrConnectWithoutSkillInput = {
    where: internshipSkillRequirementWhereUniqueInput
    create: XOR<internshipSkillRequirementCreateWithoutSkillInput, internshipSkillRequirementUncheckedCreateWithoutSkillInput>
  }

  export type internshipSkillRequirementCreateManySkillInputEnvelope = {
    data: internshipSkillRequirementCreateManySkillInput | internshipSkillRequirementCreateManySkillInput[]
  }

  export type courseResourceCreateWithoutSkillInput = {
    title: string
    platform: string
    courseUrl: string
    difficulty?: string
    estimatedHours?: number
    description?: string | null
    scoreBoost?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    studentProgress?: studentCourseProgressCreateNestedManyWithoutCourseResourceInput
  }

  export type courseResourceUncheckedCreateWithoutSkillInput = {
    id?: number
    title: string
    platform: string
    courseUrl: string
    difficulty?: string
    estimatedHours?: number
    description?: string | null
    scoreBoost?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    studentProgress?: studentCourseProgressUncheckedCreateNestedManyWithoutCourseResourceInput
  }

  export type courseResourceCreateOrConnectWithoutSkillInput = {
    where: courseResourceWhereUniqueInput
    create: XOR<courseResourceCreateWithoutSkillInput, courseResourceUncheckedCreateWithoutSkillInput>
  }

  export type courseResourceCreateManySkillInputEnvelope = {
    data: courseResourceCreateManySkillInput | courseResourceCreateManySkillInput[]
  }

  export type studentSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: studentSkillWhereUniqueInput
    update: XOR<studentSkillUpdateWithoutSkillInput, studentSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<studentSkillCreateWithoutSkillInput, studentSkillUncheckedCreateWithoutSkillInput>
  }

  export type studentSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: studentSkillWhereUniqueInput
    data: XOR<studentSkillUpdateWithoutSkillInput, studentSkillUncheckedUpdateWithoutSkillInput>
  }

  export type studentSkillUpdateManyWithWhereWithoutSkillInput = {
    where: studentSkillScalarWhereInput
    data: XOR<studentSkillUpdateManyMutationInput, studentSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type internshipSkillUpsertWithWhereUniqueWithoutSkillInput = {
    where: internshipSkillWhereUniqueInput
    update: XOR<internshipSkillUpdateWithoutSkillInput, internshipSkillUncheckedUpdateWithoutSkillInput>
    create: XOR<internshipSkillCreateWithoutSkillInput, internshipSkillUncheckedCreateWithoutSkillInput>
  }

  export type internshipSkillUpdateWithWhereUniqueWithoutSkillInput = {
    where: internshipSkillWhereUniqueInput
    data: XOR<internshipSkillUpdateWithoutSkillInput, internshipSkillUncheckedUpdateWithoutSkillInput>
  }

  export type internshipSkillUpdateManyWithWhereWithoutSkillInput = {
    where: internshipSkillScalarWhereInput
    data: XOR<internshipSkillUpdateManyMutationInput, internshipSkillUncheckedUpdateManyWithoutSkillInput>
  }

  export type internshipSkillRequirementUpsertWithWhereUniqueWithoutSkillInput = {
    where: internshipSkillRequirementWhereUniqueInput
    update: XOR<internshipSkillRequirementUpdateWithoutSkillInput, internshipSkillRequirementUncheckedUpdateWithoutSkillInput>
    create: XOR<internshipSkillRequirementCreateWithoutSkillInput, internshipSkillRequirementUncheckedCreateWithoutSkillInput>
  }

  export type internshipSkillRequirementUpdateWithWhereUniqueWithoutSkillInput = {
    where: internshipSkillRequirementWhereUniqueInput
    data: XOR<internshipSkillRequirementUpdateWithoutSkillInput, internshipSkillRequirementUncheckedUpdateWithoutSkillInput>
  }

  export type internshipSkillRequirementUpdateManyWithWhereWithoutSkillInput = {
    where: internshipSkillRequirementScalarWhereInput
    data: XOR<internshipSkillRequirementUpdateManyMutationInput, internshipSkillRequirementUncheckedUpdateManyWithoutSkillInput>
  }

  export type courseResourceUpsertWithWhereUniqueWithoutSkillInput = {
    where: courseResourceWhereUniqueInput
    update: XOR<courseResourceUpdateWithoutSkillInput, courseResourceUncheckedUpdateWithoutSkillInput>
    create: XOR<courseResourceCreateWithoutSkillInput, courseResourceUncheckedCreateWithoutSkillInput>
  }

  export type courseResourceUpdateWithWhereUniqueWithoutSkillInput = {
    where: courseResourceWhereUniqueInput
    data: XOR<courseResourceUpdateWithoutSkillInput, courseResourceUncheckedUpdateWithoutSkillInput>
  }

  export type courseResourceUpdateManyWithWhereWithoutSkillInput = {
    where: courseResourceScalarWhereInput
    data: XOR<courseResourceUpdateManyMutationInput, courseResourceUncheckedUpdateManyWithoutSkillInput>
  }

  export type courseResourceScalarWhereInput = {
    AND?: courseResourceScalarWhereInput | courseResourceScalarWhereInput[]
    OR?: courseResourceScalarWhereInput[]
    NOT?: courseResourceScalarWhereInput | courseResourceScalarWhereInput[]
    id?: IntFilter<"courseResource"> | number
    skillId?: IntFilter<"courseResource"> | number
    title?: StringFilter<"courseResource"> | string
    platform?: StringFilter<"courseResource"> | string
    courseUrl?: StringFilter<"courseResource"> | string
    difficulty?: StringFilter<"courseResource"> | string
    estimatedHours?: FloatFilter<"courseResource"> | number
    description?: StringNullableFilter<"courseResource"> | string | null
    scoreBoost?: FloatFilter<"courseResource"> | number
    isActive?: BoolFilter<"courseResource"> | boolean
    createdAt?: DateTimeFilter<"courseResource"> | Date | string
    updatedAt?: DateTimeFilter<"courseResource"> | Date | string
  }

  export type studentCreateWithoutSkillsInput = {
    name?: string | null
    studentId?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    country?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    resume?: string | null
    universityName?: string | null
    university?: string | null
    degree?: string | null
    department?: string | null
    semester?: string | null
    cgpa?: string | null
    graduationYear?: string | null
    experience?: string | null
    locationPreferences?: string | null
    sectorPreferences?: string | null
    additionalInformation?: string | null
    targetRole?: string | null
    bio?: string | null
    interests?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseProgress?: studentCourseProgressCreateNestedManyWithoutStudentInput
    chatSessions?: chatSessionCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutSkillsInput = {
    id?: number
    name?: string | null
    studentId?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    country?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    resume?: string | null
    universityName?: string | null
    university?: string | null
    degree?: string | null
    department?: string | null
    semester?: string | null
    cgpa?: string | null
    graduationYear?: string | null
    experience?: string | null
    locationPreferences?: string | null
    sectorPreferences?: string | null
    additionalInformation?: string | null
    targetRole?: string | null
    bio?: string | null
    interests?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseProgress?: studentCourseProgressUncheckedCreateNestedManyWithoutStudentInput
    chatSessions?: chatSessionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutSkillsInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutSkillsInput, studentUncheckedCreateWithoutSkillsInput>
  }

  export type skillCreateWithoutStudentSkillsInput = {
    name: string
    category?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    internshipSkills?: internshipSkillCreateNestedManyWithoutSkillInput
    internshipSkillRequirements?: internshipSkillRequirementCreateNestedManyWithoutSkillInput
    courseResources?: courseResourceCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateWithoutStudentSkillsInput = {
    id?: number
    name: string
    category?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    internshipSkills?: internshipSkillUncheckedCreateNestedManyWithoutSkillInput
    internshipSkillRequirements?: internshipSkillRequirementUncheckedCreateNestedManyWithoutSkillInput
    courseResources?: courseResourceUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillCreateOrConnectWithoutStudentSkillsInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutStudentSkillsInput, skillUncheckedCreateWithoutStudentSkillsInput>
  }

  export type studentUpsertWithoutSkillsInput = {
    update: XOR<studentUpdateWithoutSkillsInput, studentUncheckedUpdateWithoutSkillsInput>
    create: XOR<studentCreateWithoutSkillsInput, studentUncheckedCreateWithoutSkillsInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutSkillsInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutSkillsInput, studentUncheckedUpdateWithoutSkillsInput>
  }

  export type studentUpdateWithoutSkillsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    locationPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    sectorPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInformation?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseProgress?: studentCourseProgressUpdateManyWithoutStudentNestedInput
    chatSessions?: chatSessionUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    locationPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    sectorPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInformation?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseProgress?: studentCourseProgressUncheckedUpdateManyWithoutStudentNestedInput
    chatSessions?: chatSessionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type skillUpsertWithoutStudentSkillsInput = {
    update: XOR<skillUpdateWithoutStudentSkillsInput, skillUncheckedUpdateWithoutStudentSkillsInput>
    create: XOR<skillCreateWithoutStudentSkillsInput, skillUncheckedCreateWithoutStudentSkillsInput>
    where?: skillWhereInput
  }

  export type skillUpdateToOneWithWhereWithoutStudentSkillsInput = {
    where?: skillWhereInput
    data: XOR<skillUpdateWithoutStudentSkillsInput, skillUncheckedUpdateWithoutStudentSkillsInput>
  }

  export type skillUpdateWithoutStudentSkillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internshipSkills?: internshipSkillUpdateManyWithoutSkillNestedInput
    internshipSkillRequirements?: internshipSkillRequirementUpdateManyWithoutSkillNestedInput
    courseResources?: courseResourceUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateWithoutStudentSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    internshipSkills?: internshipSkillUncheckedUpdateManyWithoutSkillNestedInput
    internshipSkillRequirements?: internshipSkillRequirementUncheckedUpdateManyWithoutSkillNestedInput
    courseResources?: courseResourceUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type internshipCreateWithoutRequiredSkillsInput = {
    title: string
    companyName?: string | null
    department?: string | null
    location?: string | null
    workMode?: string | null
    isRemote?: boolean
    durationMonths?: number | null
    duration?: string | null
    stipend?: number | null
    roleDescription?: string | null
    learningOutcomes?: string | null
    numberOfPositions?: number
    minimumDegreeLevel?: string | null
    preferredFieldOfStudy?: string | null
    minimumGpaPercentage?: string | null
    graduationYearRange?: string | null
    additionalPreferences?: string | null
    status?: string
    skillTags?: string | null
    applyUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: companyCreateNestedOneWithoutInternshipsInput
    skillRequirements?: internshipSkillRequirementCreateNestedManyWithoutInternshipInput
  }

  export type internshipUncheckedCreateWithoutRequiredSkillsInput = {
    id?: number
    companyId?: number | null
    title: string
    companyName?: string | null
    department?: string | null
    location?: string | null
    workMode?: string | null
    isRemote?: boolean
    durationMonths?: number | null
    duration?: string | null
    stipend?: number | null
    roleDescription?: string | null
    learningOutcomes?: string | null
    numberOfPositions?: number
    minimumDegreeLevel?: string | null
    preferredFieldOfStudy?: string | null
    minimumGpaPercentage?: string | null
    graduationYearRange?: string | null
    additionalPreferences?: string | null
    status?: string
    skillTags?: string | null
    applyUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skillRequirements?: internshipSkillRequirementUncheckedCreateNestedManyWithoutInternshipInput
  }

  export type internshipCreateOrConnectWithoutRequiredSkillsInput = {
    where: internshipWhereUniqueInput
    create: XOR<internshipCreateWithoutRequiredSkillsInput, internshipUncheckedCreateWithoutRequiredSkillsInput>
  }

  export type skillCreateWithoutInternshipSkillsInput = {
    name: string
    category?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSkills?: studentSkillCreateNestedManyWithoutSkillInput
    internshipSkillRequirements?: internshipSkillRequirementCreateNestedManyWithoutSkillInput
    courseResources?: courseResourceCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateWithoutInternshipSkillsInput = {
    id?: number
    name: string
    category?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSkills?: studentSkillUncheckedCreateNestedManyWithoutSkillInput
    internshipSkillRequirements?: internshipSkillRequirementUncheckedCreateNestedManyWithoutSkillInput
    courseResources?: courseResourceUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillCreateOrConnectWithoutInternshipSkillsInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutInternshipSkillsInput, skillUncheckedCreateWithoutInternshipSkillsInput>
  }

  export type internshipUpsertWithoutRequiredSkillsInput = {
    update: XOR<internshipUpdateWithoutRequiredSkillsInput, internshipUncheckedUpdateWithoutRequiredSkillsInput>
    create: XOR<internshipCreateWithoutRequiredSkillsInput, internshipUncheckedCreateWithoutRequiredSkillsInput>
    where?: internshipWhereInput
  }

  export type internshipUpdateToOneWithWhereWithoutRequiredSkillsInput = {
    where?: internshipWhereInput
    data: XOR<internshipUpdateWithoutRequiredSkillsInput, internshipUncheckedUpdateWithoutRequiredSkillsInput>
  }

  export type internshipUpdateWithoutRequiredSkillsInput = {
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    workMode?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    durationMonths?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    stipend?: NullableFloatFieldUpdateOperationsInput | number | null
    roleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    learningOutcomes?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfPositions?: IntFieldUpdateOperationsInput | number
    minimumDegreeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    minimumGpaPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYearRange?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    skillTags?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companyUpdateOneWithoutInternshipsNestedInput
    skillRequirements?: internshipSkillRequirementUpdateManyWithoutInternshipNestedInput
  }

  export type internshipUncheckedUpdateWithoutRequiredSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    workMode?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    durationMonths?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    stipend?: NullableFloatFieldUpdateOperationsInput | number | null
    roleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    learningOutcomes?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfPositions?: IntFieldUpdateOperationsInput | number
    minimumDegreeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    minimumGpaPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYearRange?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    skillTags?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillRequirements?: internshipSkillRequirementUncheckedUpdateManyWithoutInternshipNestedInput
  }

  export type skillUpsertWithoutInternshipSkillsInput = {
    update: XOR<skillUpdateWithoutInternshipSkillsInput, skillUncheckedUpdateWithoutInternshipSkillsInput>
    create: XOR<skillCreateWithoutInternshipSkillsInput, skillUncheckedCreateWithoutInternshipSkillsInput>
    where?: skillWhereInput
  }

  export type skillUpdateToOneWithWhereWithoutInternshipSkillsInput = {
    where?: skillWhereInput
    data: XOR<skillUpdateWithoutInternshipSkillsInput, skillUncheckedUpdateWithoutInternshipSkillsInput>
  }

  export type skillUpdateWithoutInternshipSkillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSkills?: studentSkillUpdateManyWithoutSkillNestedInput
    internshipSkillRequirements?: internshipSkillRequirementUpdateManyWithoutSkillNestedInput
    courseResources?: courseResourceUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateWithoutInternshipSkillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSkills?: studentSkillUncheckedUpdateManyWithoutSkillNestedInput
    internshipSkillRequirements?: internshipSkillRequirementUncheckedUpdateManyWithoutSkillNestedInput
    courseResources?: courseResourceUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type internshipCreateWithoutSkillRequirementsInput = {
    title: string
    companyName?: string | null
    department?: string | null
    location?: string | null
    workMode?: string | null
    isRemote?: boolean
    durationMonths?: number | null
    duration?: string | null
    stipend?: number | null
    roleDescription?: string | null
    learningOutcomes?: string | null
    numberOfPositions?: number
    minimumDegreeLevel?: string | null
    preferredFieldOfStudy?: string | null
    minimumGpaPercentage?: string | null
    graduationYearRange?: string | null
    additionalPreferences?: string | null
    status?: string
    skillTags?: string | null
    applyUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    company?: companyCreateNestedOneWithoutInternshipsInput
    requiredSkills?: internshipSkillCreateNestedManyWithoutInternshipInput
  }

  export type internshipUncheckedCreateWithoutSkillRequirementsInput = {
    id?: number
    companyId?: number | null
    title: string
    companyName?: string | null
    department?: string | null
    location?: string | null
    workMode?: string | null
    isRemote?: boolean
    durationMonths?: number | null
    duration?: string | null
    stipend?: number | null
    roleDescription?: string | null
    learningOutcomes?: string | null
    numberOfPositions?: number
    minimumDegreeLevel?: string | null
    preferredFieldOfStudy?: string | null
    minimumGpaPercentage?: string | null
    graduationYearRange?: string | null
    additionalPreferences?: string | null
    status?: string
    skillTags?: string | null
    applyUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requiredSkills?: internshipSkillUncheckedCreateNestedManyWithoutInternshipInput
  }

  export type internshipCreateOrConnectWithoutSkillRequirementsInput = {
    where: internshipWhereUniqueInput
    create: XOR<internshipCreateWithoutSkillRequirementsInput, internshipUncheckedCreateWithoutSkillRequirementsInput>
  }

  export type skillCreateWithoutInternshipSkillRequirementsInput = {
    name: string
    category?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSkills?: studentSkillCreateNestedManyWithoutSkillInput
    internshipSkills?: internshipSkillCreateNestedManyWithoutSkillInput
    courseResources?: courseResourceCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateWithoutInternshipSkillRequirementsInput = {
    id?: number
    name: string
    category?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSkills?: studentSkillUncheckedCreateNestedManyWithoutSkillInput
    internshipSkills?: internshipSkillUncheckedCreateNestedManyWithoutSkillInput
    courseResources?: courseResourceUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillCreateOrConnectWithoutInternshipSkillRequirementsInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutInternshipSkillRequirementsInput, skillUncheckedCreateWithoutInternshipSkillRequirementsInput>
  }

  export type internshipUpsertWithoutSkillRequirementsInput = {
    update: XOR<internshipUpdateWithoutSkillRequirementsInput, internshipUncheckedUpdateWithoutSkillRequirementsInput>
    create: XOR<internshipCreateWithoutSkillRequirementsInput, internshipUncheckedCreateWithoutSkillRequirementsInput>
    where?: internshipWhereInput
  }

  export type internshipUpdateToOneWithWhereWithoutSkillRequirementsInput = {
    where?: internshipWhereInput
    data: XOR<internshipUpdateWithoutSkillRequirementsInput, internshipUncheckedUpdateWithoutSkillRequirementsInput>
  }

  export type internshipUpdateWithoutSkillRequirementsInput = {
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    workMode?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    durationMonths?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    stipend?: NullableFloatFieldUpdateOperationsInput | number | null
    roleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    learningOutcomes?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfPositions?: IntFieldUpdateOperationsInput | number
    minimumDegreeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    minimumGpaPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYearRange?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    skillTags?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: companyUpdateOneWithoutInternshipsNestedInput
    requiredSkills?: internshipSkillUpdateManyWithoutInternshipNestedInput
  }

  export type internshipUncheckedUpdateWithoutSkillRequirementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    workMode?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    durationMonths?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    stipend?: NullableFloatFieldUpdateOperationsInput | number | null
    roleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    learningOutcomes?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfPositions?: IntFieldUpdateOperationsInput | number
    minimumDegreeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    minimumGpaPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYearRange?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    skillTags?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredSkills?: internshipSkillUncheckedUpdateManyWithoutInternshipNestedInput
  }

  export type skillUpsertWithoutInternshipSkillRequirementsInput = {
    update: XOR<skillUpdateWithoutInternshipSkillRequirementsInput, skillUncheckedUpdateWithoutInternshipSkillRequirementsInput>
    create: XOR<skillCreateWithoutInternshipSkillRequirementsInput, skillUncheckedCreateWithoutInternshipSkillRequirementsInput>
    where?: skillWhereInput
  }

  export type skillUpdateToOneWithWhereWithoutInternshipSkillRequirementsInput = {
    where?: skillWhereInput
    data: XOR<skillUpdateWithoutInternshipSkillRequirementsInput, skillUncheckedUpdateWithoutInternshipSkillRequirementsInput>
  }

  export type skillUpdateWithoutInternshipSkillRequirementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSkills?: studentSkillUpdateManyWithoutSkillNestedInput
    internshipSkills?: internshipSkillUpdateManyWithoutSkillNestedInput
    courseResources?: courseResourceUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateWithoutInternshipSkillRequirementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSkills?: studentSkillUncheckedUpdateManyWithoutSkillNestedInput
    internshipSkills?: internshipSkillUncheckedUpdateManyWithoutSkillNestedInput
    courseResources?: courseResourceUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type skillCreateWithoutCourseResourcesInput = {
    name: string
    category?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSkills?: studentSkillCreateNestedManyWithoutSkillInput
    internshipSkills?: internshipSkillCreateNestedManyWithoutSkillInput
    internshipSkillRequirements?: internshipSkillRequirementCreateNestedManyWithoutSkillInput
  }

  export type skillUncheckedCreateWithoutCourseResourcesInput = {
    id?: number
    name: string
    category?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentSkills?: studentSkillUncheckedCreateNestedManyWithoutSkillInput
    internshipSkills?: internshipSkillUncheckedCreateNestedManyWithoutSkillInput
    internshipSkillRequirements?: internshipSkillRequirementUncheckedCreateNestedManyWithoutSkillInput
  }

  export type skillCreateOrConnectWithoutCourseResourcesInput = {
    where: skillWhereUniqueInput
    create: XOR<skillCreateWithoutCourseResourcesInput, skillUncheckedCreateWithoutCourseResourcesInput>
  }

  export type studentCourseProgressCreateWithoutCourseResourceInput = {
    status?: string
    scoreAwarded?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: studentCreateNestedOneWithoutCourseProgressInput
  }

  export type studentCourseProgressUncheckedCreateWithoutCourseResourceInput = {
    id?: number
    studentId: number
    status?: string
    scoreAwarded?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentCourseProgressCreateOrConnectWithoutCourseResourceInput = {
    where: studentCourseProgressWhereUniqueInput
    create: XOR<studentCourseProgressCreateWithoutCourseResourceInput, studentCourseProgressUncheckedCreateWithoutCourseResourceInput>
  }

  export type studentCourseProgressCreateManyCourseResourceInputEnvelope = {
    data: studentCourseProgressCreateManyCourseResourceInput | studentCourseProgressCreateManyCourseResourceInput[]
  }

  export type skillUpsertWithoutCourseResourcesInput = {
    update: XOR<skillUpdateWithoutCourseResourcesInput, skillUncheckedUpdateWithoutCourseResourcesInput>
    create: XOR<skillCreateWithoutCourseResourcesInput, skillUncheckedCreateWithoutCourseResourcesInput>
    where?: skillWhereInput
  }

  export type skillUpdateToOneWithWhereWithoutCourseResourcesInput = {
    where?: skillWhereInput
    data: XOR<skillUpdateWithoutCourseResourcesInput, skillUncheckedUpdateWithoutCourseResourcesInput>
  }

  export type skillUpdateWithoutCourseResourcesInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSkills?: studentSkillUpdateManyWithoutSkillNestedInput
    internshipSkills?: internshipSkillUpdateManyWithoutSkillNestedInput
    internshipSkillRequirements?: internshipSkillRequirementUpdateManyWithoutSkillNestedInput
  }

  export type skillUncheckedUpdateWithoutCourseResourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentSkills?: studentSkillUncheckedUpdateManyWithoutSkillNestedInput
    internshipSkills?: internshipSkillUncheckedUpdateManyWithoutSkillNestedInput
    internshipSkillRequirements?: internshipSkillRequirementUncheckedUpdateManyWithoutSkillNestedInput
  }

  export type studentCourseProgressUpsertWithWhereUniqueWithoutCourseResourceInput = {
    where: studentCourseProgressWhereUniqueInput
    update: XOR<studentCourseProgressUpdateWithoutCourseResourceInput, studentCourseProgressUncheckedUpdateWithoutCourseResourceInput>
    create: XOR<studentCourseProgressCreateWithoutCourseResourceInput, studentCourseProgressUncheckedCreateWithoutCourseResourceInput>
  }

  export type studentCourseProgressUpdateWithWhereUniqueWithoutCourseResourceInput = {
    where: studentCourseProgressWhereUniqueInput
    data: XOR<studentCourseProgressUpdateWithoutCourseResourceInput, studentCourseProgressUncheckedUpdateWithoutCourseResourceInput>
  }

  export type studentCourseProgressUpdateManyWithWhereWithoutCourseResourceInput = {
    where: studentCourseProgressScalarWhereInput
    data: XOR<studentCourseProgressUpdateManyMutationInput, studentCourseProgressUncheckedUpdateManyWithoutCourseResourceInput>
  }

  export type studentCreateWithoutCourseProgressInput = {
    name?: string | null
    studentId?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    country?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    resume?: string | null
    universityName?: string | null
    university?: string | null
    degree?: string | null
    department?: string | null
    semester?: string | null
    cgpa?: string | null
    graduationYear?: string | null
    experience?: string | null
    locationPreferences?: string | null
    sectorPreferences?: string | null
    additionalInformation?: string | null
    targetRole?: string | null
    bio?: string | null
    interests?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: studentSkillCreateNestedManyWithoutStudentInput
    chatSessions?: chatSessionCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutCourseProgressInput = {
    id?: number
    name?: string | null
    studentId?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    country?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    resume?: string | null
    universityName?: string | null
    university?: string | null
    degree?: string | null
    department?: string | null
    semester?: string | null
    cgpa?: string | null
    graduationYear?: string | null
    experience?: string | null
    locationPreferences?: string | null
    sectorPreferences?: string | null
    additionalInformation?: string | null
    targetRole?: string | null
    bio?: string | null
    interests?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: studentSkillUncheckedCreateNestedManyWithoutStudentInput
    chatSessions?: chatSessionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutCourseProgressInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutCourseProgressInput, studentUncheckedCreateWithoutCourseProgressInput>
  }

  export type courseResourceCreateWithoutStudentProgressInput = {
    title: string
    platform: string
    courseUrl: string
    difficulty?: string
    estimatedHours?: number
    description?: string | null
    scoreBoost?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skill: skillCreateNestedOneWithoutCourseResourcesInput
  }

  export type courseResourceUncheckedCreateWithoutStudentProgressInput = {
    id?: number
    skillId: number
    title: string
    platform: string
    courseUrl: string
    difficulty?: string
    estimatedHours?: number
    description?: string | null
    scoreBoost?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type courseResourceCreateOrConnectWithoutStudentProgressInput = {
    where: courseResourceWhereUniqueInput
    create: XOR<courseResourceCreateWithoutStudentProgressInput, courseResourceUncheckedCreateWithoutStudentProgressInput>
  }

  export type studentUpsertWithoutCourseProgressInput = {
    update: XOR<studentUpdateWithoutCourseProgressInput, studentUncheckedUpdateWithoutCourseProgressInput>
    create: XOR<studentCreateWithoutCourseProgressInput, studentUncheckedCreateWithoutCourseProgressInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutCourseProgressInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutCourseProgressInput, studentUncheckedUpdateWithoutCourseProgressInput>
  }

  export type studentUpdateWithoutCourseProgressInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    locationPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    sectorPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInformation?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: studentSkillUpdateManyWithoutStudentNestedInput
    chatSessions?: chatSessionUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutCourseProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    locationPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    sectorPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInformation?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: studentSkillUncheckedUpdateManyWithoutStudentNestedInput
    chatSessions?: chatSessionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type courseResourceUpsertWithoutStudentProgressInput = {
    update: XOR<courseResourceUpdateWithoutStudentProgressInput, courseResourceUncheckedUpdateWithoutStudentProgressInput>
    create: XOR<courseResourceCreateWithoutStudentProgressInput, courseResourceUncheckedCreateWithoutStudentProgressInput>
    where?: courseResourceWhereInput
  }

  export type courseResourceUpdateToOneWithWhereWithoutStudentProgressInput = {
    where?: courseResourceWhereInput
    data: XOR<courseResourceUpdateWithoutStudentProgressInput, courseResourceUncheckedUpdateWithoutStudentProgressInput>
  }

  export type courseResourceUpdateWithoutStudentProgressInput = {
    title?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    courseUrl?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    estimatedHours?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scoreBoost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: skillUpdateOneRequiredWithoutCourseResourcesNestedInput
  }

  export type courseResourceUncheckedUpdateWithoutStudentProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    courseUrl?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    estimatedHours?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scoreBoost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentCreateWithoutChatSessionsInput = {
    name?: string | null
    studentId?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    country?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    resume?: string | null
    universityName?: string | null
    university?: string | null
    degree?: string | null
    department?: string | null
    semester?: string | null
    cgpa?: string | null
    graduationYear?: string | null
    experience?: string | null
    locationPreferences?: string | null
    sectorPreferences?: string | null
    additionalInformation?: string | null
    targetRole?: string | null
    bio?: string | null
    interests?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: studentSkillCreateNestedManyWithoutStudentInput
    courseProgress?: studentCourseProgressCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutChatSessionsInput = {
    id?: number
    name?: string | null
    studentId?: string | null
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    password?: string | null
    phone?: string | null
    country?: string | null
    dateOfBirth?: Date | string | null
    gender?: string | null
    resume?: string | null
    universityName?: string | null
    university?: string | null
    degree?: string | null
    department?: string | null
    semester?: string | null
    cgpa?: string | null
    graduationYear?: string | null
    experience?: string | null
    locationPreferences?: string | null
    sectorPreferences?: string | null
    additionalInformation?: string | null
    targetRole?: string | null
    bio?: string | null
    interests?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: studentSkillUncheckedCreateNestedManyWithoutStudentInput
    courseProgress?: studentCourseProgressUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutChatSessionsInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutChatSessionsInput, studentUncheckedCreateWithoutChatSessionsInput>
  }

  export type chatMessageCreateWithoutSessionInput = {
    sender: string
    message: string
    intent?: string | null
    createdAt?: Date | string
  }

  export type chatMessageUncheckedCreateWithoutSessionInput = {
    id?: number
    sender: string
    message: string
    intent?: string | null
    createdAt?: Date | string
  }

  export type chatMessageCreateOrConnectWithoutSessionInput = {
    where: chatMessageWhereUniqueInput
    create: XOR<chatMessageCreateWithoutSessionInput, chatMessageUncheckedCreateWithoutSessionInput>
  }

  export type chatMessageCreateManySessionInputEnvelope = {
    data: chatMessageCreateManySessionInput | chatMessageCreateManySessionInput[]
  }

  export type studentUpsertWithoutChatSessionsInput = {
    update: XOR<studentUpdateWithoutChatSessionsInput, studentUncheckedUpdateWithoutChatSessionsInput>
    create: XOR<studentCreateWithoutChatSessionsInput, studentUncheckedCreateWithoutChatSessionsInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutChatSessionsInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutChatSessionsInput, studentUncheckedUpdateWithoutChatSessionsInput>
  }

  export type studentUpdateWithoutChatSessionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    locationPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    sectorPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInformation?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: studentSkillUpdateManyWithoutStudentNestedInput
    courseProgress?: studentCourseProgressUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutChatSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    universityName?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    cgpa?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    locationPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    sectorPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    additionalInformation?: NullableStringFieldUpdateOperationsInput | string | null
    targetRole?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: studentSkillUncheckedUpdateManyWithoutStudentNestedInput
    courseProgress?: studentCourseProgressUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type chatMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: chatMessageWhereUniqueInput
    update: XOR<chatMessageUpdateWithoutSessionInput, chatMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<chatMessageCreateWithoutSessionInput, chatMessageUncheckedCreateWithoutSessionInput>
  }

  export type chatMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: chatMessageWhereUniqueInput
    data: XOR<chatMessageUpdateWithoutSessionInput, chatMessageUncheckedUpdateWithoutSessionInput>
  }

  export type chatMessageUpdateManyWithWhereWithoutSessionInput = {
    where: chatMessageScalarWhereInput
    data: XOR<chatMessageUpdateManyMutationInput, chatMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type chatMessageScalarWhereInput = {
    AND?: chatMessageScalarWhereInput | chatMessageScalarWhereInput[]
    OR?: chatMessageScalarWhereInput[]
    NOT?: chatMessageScalarWhereInput | chatMessageScalarWhereInput[]
    id?: IntFilter<"chatMessage"> | number
    sessionId?: IntFilter<"chatMessage"> | number
    sender?: StringFilter<"chatMessage"> | string
    message?: StringFilter<"chatMessage"> | string
    intent?: StringNullableFilter<"chatMessage"> | string | null
    createdAt?: DateTimeFilter<"chatMessage"> | Date | string
  }

  export type chatSessionCreateWithoutMessagesInput = {
    startedAt?: Date | string
    lastActive?: Date | string
    isActive?: boolean
    student: studentCreateNestedOneWithoutChatSessionsInput
  }

  export type chatSessionUncheckedCreateWithoutMessagesInput = {
    id?: number
    studentId: number
    startedAt?: Date | string
    lastActive?: Date | string
    isActive?: boolean
  }

  export type chatSessionCreateOrConnectWithoutMessagesInput = {
    where: chatSessionWhereUniqueInput
    create: XOR<chatSessionCreateWithoutMessagesInput, chatSessionUncheckedCreateWithoutMessagesInput>
  }

  export type chatSessionUpsertWithoutMessagesInput = {
    update: XOR<chatSessionUpdateWithoutMessagesInput, chatSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<chatSessionCreateWithoutMessagesInput, chatSessionUncheckedCreateWithoutMessagesInput>
    where?: chatSessionWhereInput
  }

  export type chatSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: chatSessionWhereInput
    data: XOR<chatSessionUpdateWithoutMessagesInput, chatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type chatSessionUpdateWithoutMessagesInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    student?: studentUpdateOneRequiredWithoutChatSessionsNestedInput
  }

  export type chatSessionUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type studentSkillCreateManyStudentInput = {
    id?: number
    skillId: number
    level?: number
    score?: number
    chatScore?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentCourseProgressCreateManyStudentInput = {
    id?: number
    courseResourceId: number
    status?: string
    scoreAwarded?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type chatSessionCreateManyStudentInput = {
    id?: number
    startedAt?: Date | string
    lastActive?: Date | string
    isActive?: boolean
  }

  export type studentSkillUpdateWithoutStudentInput = {
    level?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    chatScore?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skill?: skillUpdateOneRequiredWithoutStudentSkillsNestedInput
  }

  export type studentSkillUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    chatScore?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentSkillUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    chatScore?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentCourseProgressUpdateWithoutStudentInput = {
    status?: StringFieldUpdateOperationsInput | string
    scoreAwarded?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseResource?: courseResourceUpdateOneRequiredWithoutStudentProgressNestedInput
  }

  export type studentCourseProgressUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseResourceId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    scoreAwarded?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentCourseProgressUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseResourceId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    scoreAwarded?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatSessionUpdateWithoutStudentInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    messages?: chatMessageUpdateManyWithoutSessionNestedInput
  }

  export type chatSessionUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    messages?: chatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type chatSessionUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type internshipCreateManyCompanyInput = {
    id?: number
    title: string
    companyName?: string | null
    department?: string | null
    location?: string | null
    workMode?: string | null
    isRemote?: boolean
    durationMonths?: number | null
    duration?: string | null
    stipend?: number | null
    roleDescription?: string | null
    learningOutcomes?: string | null
    numberOfPositions?: number
    minimumDegreeLevel?: string | null
    preferredFieldOfStudy?: string | null
    minimumGpaPercentage?: string | null
    graduationYearRange?: string | null
    additionalPreferences?: string | null
    status?: string
    skillTags?: string | null
    applyUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type internshipUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    workMode?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    durationMonths?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    stipend?: NullableFloatFieldUpdateOperationsInput | number | null
    roleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    learningOutcomes?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfPositions?: IntFieldUpdateOperationsInput | number
    minimumDegreeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    minimumGpaPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYearRange?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    skillTags?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredSkills?: internshipSkillUpdateManyWithoutInternshipNestedInput
    skillRequirements?: internshipSkillRequirementUpdateManyWithoutInternshipNestedInput
  }

  export type internshipUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    workMode?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    durationMonths?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    stipend?: NullableFloatFieldUpdateOperationsInput | number | null
    roleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    learningOutcomes?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfPositions?: IntFieldUpdateOperationsInput | number
    minimumDegreeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    minimumGpaPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYearRange?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    skillTags?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredSkills?: internshipSkillUncheckedUpdateManyWithoutInternshipNestedInput
    skillRequirements?: internshipSkillRequirementUncheckedUpdateManyWithoutInternshipNestedInput
  }

  export type internshipUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    workMode?: NullableStringFieldUpdateOperationsInput | string | null
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    durationMonths?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    stipend?: NullableFloatFieldUpdateOperationsInput | number | null
    roleDescription?: NullableStringFieldUpdateOperationsInput | string | null
    learningOutcomes?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfPositions?: IntFieldUpdateOperationsInput | number
    minimumDegreeLevel?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    minimumGpaPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYearRange?: NullableStringFieldUpdateOperationsInput | string | null
    additionalPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    skillTags?: NullableStringFieldUpdateOperationsInput | string | null
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type internshipSkillCreateManyInternshipInput = {
    id?: number
    skillId: number
  }

  export type internshipSkillRequirementCreateManyInternshipInput = {
    id?: number
    skillId: number
    requiredScore?: number
  }

  export type internshipSkillUpdateWithoutInternshipInput = {
    skill?: skillUpdateOneRequiredWithoutInternshipSkillsNestedInput
  }

  export type internshipSkillUncheckedUpdateWithoutInternshipInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type internshipSkillUncheckedUpdateManyWithoutInternshipInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
  }

  export type internshipSkillRequirementUpdateWithoutInternshipInput = {
    requiredScore?: FloatFieldUpdateOperationsInput | number
    skill?: skillUpdateOneRequiredWithoutInternshipSkillRequirementsNestedInput
  }

  export type internshipSkillRequirementUncheckedUpdateWithoutInternshipInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
    requiredScore?: FloatFieldUpdateOperationsInput | number
  }

  export type internshipSkillRequirementUncheckedUpdateManyWithoutInternshipInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillId?: IntFieldUpdateOperationsInput | number
    requiredScore?: FloatFieldUpdateOperationsInput | number
  }

  export type studentSkillCreateManySkillInput = {
    id?: number
    studentId: number
    level?: number
    score?: number
    chatScore?: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type internshipSkillCreateManySkillInput = {
    id?: number
    internshipId: number
  }

  export type internshipSkillRequirementCreateManySkillInput = {
    id?: number
    internshipId: number
    requiredScore?: number
  }

  export type courseResourceCreateManySkillInput = {
    id?: number
    title: string
    platform: string
    courseUrl: string
    difficulty?: string
    estimatedHours?: number
    description?: string | null
    scoreBoost?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentSkillUpdateWithoutSkillInput = {
    level?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    chatScore?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: studentUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type studentSkillUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    chatScore?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    chatScore?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type internshipSkillUpdateWithoutSkillInput = {
    internship?: internshipUpdateOneRequiredWithoutRequiredSkillsNestedInput
  }

  export type internshipSkillUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
  }

  export type internshipSkillUncheckedUpdateManyWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
  }

  export type internshipSkillRequirementUpdateWithoutSkillInput = {
    requiredScore?: FloatFieldUpdateOperationsInput | number
    internship?: internshipUpdateOneRequiredWithoutSkillRequirementsNestedInput
  }

  export type internshipSkillRequirementUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    requiredScore?: FloatFieldUpdateOperationsInput | number
  }

  export type internshipSkillRequirementUncheckedUpdateManyWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    internshipId?: IntFieldUpdateOperationsInput | number
    requiredScore?: FloatFieldUpdateOperationsInput | number
  }

  export type courseResourceUpdateWithoutSkillInput = {
    title?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    courseUrl?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    estimatedHours?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scoreBoost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProgress?: studentCourseProgressUpdateManyWithoutCourseResourceNestedInput
  }

  export type courseResourceUncheckedUpdateWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    courseUrl?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    estimatedHours?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scoreBoost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProgress?: studentCourseProgressUncheckedUpdateManyWithoutCourseResourceNestedInput
  }

  export type courseResourceUncheckedUpdateManyWithoutSkillInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    courseUrl?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    estimatedHours?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scoreBoost?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentCourseProgressCreateManyCourseResourceInput = {
    id?: number
    studentId: number
    status?: string
    scoreAwarded?: boolean
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type studentCourseProgressUpdateWithoutCourseResourceInput = {
    status?: StringFieldUpdateOperationsInput | string
    scoreAwarded?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: studentUpdateOneRequiredWithoutCourseProgressNestedInput
  }

  export type studentCourseProgressUncheckedUpdateWithoutCourseResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    scoreAwarded?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentCourseProgressUncheckedUpdateManyWithoutCourseResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    scoreAwarded?: BoolFieldUpdateOperationsInput | boolean
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatMessageCreateManySessionInput = {
    id?: number
    sender: string
    message: string
    intent?: string | null
    createdAt?: Date | string
  }

  export type chatMessageUpdateWithoutSessionInput = {
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatMessageUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chatMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    intent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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