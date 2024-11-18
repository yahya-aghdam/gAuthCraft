// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               v3.21.12
// source: src/protos/auth.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";

export const protobufPackage = "auth";

export interface TokenData {
  id: string;
  name: string;
  email: string;
  image: string;
  expires: string;
}

export interface TokenRequest {
  token: string;
  checkTime: boolean;
}

export interface TokenResult {
  isVerified: boolean;
  data: TokenData | undefined;
}

function createBaseTokenData(): TokenData {
  return { id: "", name: "", email: "", image: "", expires: "" };
}

export const TokenData: MessageFns<TokenData> = {
  encode(message: TokenData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.image !== "") {
      writer.uint32(34).string(message.image);
    }
    if (message.expires !== "") {
      writer.uint32(42).string(message.expires);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TokenData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.image = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.expires = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenData {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      image: isSet(object.image) ? globalThis.String(object.image) : "",
      expires: isSet(object.expires) ? globalThis.String(object.expires) : "",
    };
  },

  toJSON(message: TokenData): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.image !== "") {
      obj.image = message.image;
    }
    if (message.expires !== "") {
      obj.expires = message.expires;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenData>, I>>(base?: I): TokenData {
    return TokenData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TokenData>, I>>(object: I): TokenData {
    const message = createBaseTokenData();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.image = object.image ?? "";
    message.expires = object.expires ?? "";
    return message;
  },
};

function createBaseTokenRequest(): TokenRequest {
  return { token: "", checkTime: false };
}

export const TokenRequest: MessageFns<TokenRequest> = {
  encode(message: TokenRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.checkTime !== false) {
      writer.uint32(16).bool(message.checkTime);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.checkTime = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenRequest {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      checkTime: isSet(object.checkTime) ? globalThis.Boolean(object.checkTime) : false,
    };
  },

  toJSON(message: TokenRequest): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.checkTime !== false) {
      obj.checkTime = message.checkTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenRequest>, I>>(base?: I): TokenRequest {
    return TokenRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TokenRequest>, I>>(object: I): TokenRequest {
    const message = createBaseTokenRequest();
    message.token = object.token ?? "";
    message.checkTime = object.checkTime ?? false;
    return message;
  },
};

function createBaseTokenResult(): TokenResult {
  return { isVerified: false, data: undefined };
}

export const TokenResult: MessageFns<TokenResult> = {
  encode(message: TokenResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.isVerified !== false) {
      writer.uint32(8).bool(message.isVerified);
    }
    if (message.data !== undefined) {
      TokenData.encode(message.data, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TokenResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.isVerified = reader.bool();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.data = TokenData.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TokenResult {
    return {
      isVerified: isSet(object.isVerified) ? globalThis.Boolean(object.isVerified) : false,
      data: isSet(object.data) ? TokenData.fromJSON(object.data) : undefined,
    };
  },

  toJSON(message: TokenResult): unknown {
    const obj: any = {};
    if (message.isVerified !== false) {
      obj.isVerified = message.isVerified;
    }
    if (message.data !== undefined) {
      obj.data = TokenData.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TokenResult>, I>>(base?: I): TokenResult {
    return TokenResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TokenResult>, I>>(object: I): TokenResult {
    const message = createBaseTokenResult();
    message.isVerified = object.isVerified ?? false;
    message.data = (object.data !== undefined && object.data !== null) ? TokenData.fromPartial(object.data) : undefined;
    return message;
  },
};

export type AuthCheckService = typeof AuthCheckService;
export const AuthCheckService = {
  verifyToken: {
    path: "/auth.AuthCheck/VerifyToken",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TokenRequest) => Buffer.from(TokenRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TokenRequest.decode(value),
    responseSerialize: (value: TokenResult) => Buffer.from(TokenResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TokenResult.decode(value),
  },
} as const;

export interface AuthCheckServer extends UntypedServiceImplementation {
  verifyToken: handleUnaryCall<TokenRequest, TokenResult>;
}

export interface AuthCheckClient extends Client {
  verifyToken(
    request: TokenRequest,
    callback: (error: ServiceError | null, response: TokenResult) => void,
  ): ClientUnaryCall;
  verifyToken(
    request: TokenRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TokenResult) => void,
  ): ClientUnaryCall;
  verifyToken(
    request: TokenRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TokenResult) => void,
  ): ClientUnaryCall;
}

export const AuthCheckClient = makeGenericClientConstructor(AuthCheckService, "auth.AuthCheck") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AuthCheckClient;
  service: typeof AuthCheckService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}