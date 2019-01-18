// Generated by the protocol buffer compiler.  DO NOT EDIT!
// Source: example1.proto

import * as __pb__ from "../../lib/protobuf"
import * as ___example2_pb from "./example2_pb"


export const enum AEnum1 {
  A = 0,
  B = 2,
}

export class example2 implements __pb__.Message {
  aint32: number;

  constructor() {
    this.aint32 = 0;
  }

  MergeFrom(d: __pb__.Internal.Decoder): void {
    while (!d.isEOF()) {
      var [fn, wt] = d.readTag();
      switch(fn) {
        case 1:
        break;
        default:
        d.skipWireType(wt)
      }
    }
  }
}

export class example1 implements __pb__.Message {
  adouble: number;
  afloat: number;
  aint32: number;
  aint64: bigint;
  auint32: number;
  auint64: number;
  asint32: number;
  asint64: bigint;
  afixed32: number;
  afixed64: bigint;
  asfixed32: number;
  asfixed64: bigint;
  abool: boolean;
  astring: string;
  abytes: Uint8Array;
  aenum1: AEnum1;
  aenum2: example1.AEnum2;
  aenum22: ___example2_pb.AEnum2;
  manystring: string[];
  manyint64: bigint[];
  aexample2: example1.example2 | null;
  aexample22: example2 | null;
  aexample23: ___example2_pb.example2 | null;
  amap: Map<string, string>;
  amap2: Map<string, ___example2_pb.example2 | null>;
  outoforder: bigint;
  oostring: string;
  ooint: number;

  constructor() {
    this.adouble = 0.0;
    this.afloat = 0.0;
    this.aint32 = 0;
    this.aint64 = 0n;
    this.auint32 = 0;
    this.auint64 = 0;
    this.asint32 = 0;
    this.asint64 = 0n;
    this.afixed32 = 0;
    this.afixed64 = 0n;
    this.asfixed32 = 0;
    this.asfixed64 = 0n;
    this.abool = false;
    this.astring = "";
    this.abytes = new Uint8Array(0);
    this.aenum1 = 0;
    this.aenum2 = 0;
    this.aenum22 = 0;
    this.manystring = [];
    this.manyint64 = [];
    this.aexample2 = null;
    this.aexample22 = null;
    this.aexample23 = null;
    this.amap = new Map<string, string>();
    this.amap2 = new Map<string, ___example2_pb.example2 | null>();
    this.outoforder = 0n;
    this.oostring = "";
    this.ooint = 0;
  }

  MergeFrom(d: __pb__.Internal.Decoder): void {
    while (!d.isEOF()) {
      var [fn, wt] = d.readTag();
      switch(fn) {
        case 1:
        this.adouble = d.readDouble();
        break;
        case 2:
        this.afloat = d.readFloat();
        break;
        case 3:
        break;
        case 4:
        break;
        case 5:
        break;
        case 6:
        break;
        case 7:
        break;
        case 8:
        break;
        case 9:
        break;
        case 10:
        break;
        case 11:
        break;
        case 12:
        break;
        case 13:
        this.abool = d.readBool();
        break;
        case 14:
        this.astring = d.readString();
        break;
        case 15:
        break;
        case 20:
        break;
        case 21:
        break;
        case 22:
        break;
        case 30:
        break;
        case 31:
        break;
        case 40:
        break;
        case 41:
        break;
        case 42:
        break;
        case 51:
        break;
        case 52:
        break;
        case 49:
        break;
        case 60:
        this.oostring = d.readString();
        break;
        case 61:
        break;
        default:
        d.skipWireType(wt)
      }
    }
  }
}

export namespace example1 {
  export const enum AEnum2 {
    C = 0,
    D = 10,
  }
}

export namespace example1 {
  export class example2 implements __pb__.Message {
    astring: string;

    constructor() {
      this.astring = "";
    }

    MergeFrom(d: __pb__.Internal.Decoder): void {
      while (!d.isEOF()) {
        var [fn, wt] = d.readTag();
        switch(fn) {
          case 1:
          this.astring = d.readString();
          break;
          default:
          d.skipWireType(wt)
        }
      }
    }
  }
}

export namespace example1 {
  export class AmapEntry implements __pb__.Message {
    key: string;
    value: string;

    constructor() {
      this.key = "";
      this.value = "";
    }

    MergeFrom(d: __pb__.Internal.Decoder): void {
      while (!d.isEOF()) {
        var [fn, wt] = d.readTag();
        switch(fn) {
          case 1:
          this.key = d.readString();
          break;
          case 2:
          this.value = d.readString();
          break;
          default:
          d.skipWireType(wt)
        }
      }
    }
  }
}

export namespace example1 {
  export class Amap2Entry implements __pb__.Message {
    key: string;
    value: ___example2_pb.example2 | null;

    constructor() {
      this.key = "";
      this.value = null;
    }

    MergeFrom(d: __pb__.Internal.Decoder): void {
      while (!d.isEOF()) {
        var [fn, wt] = d.readTag();
        switch(fn) {
          case 1:
          this.key = d.readString();
          break;
          case 2:
          break;
          default:
          d.skipWireType(wt)
        }
      }
    }
  }
}

