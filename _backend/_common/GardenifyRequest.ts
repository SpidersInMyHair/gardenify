import {NextApiRequest} from "next";
import {Socket} from "net";
import { Env } from '@next/env';
import {IncomingHttpHeaders} from "http2";

export class GardenifyRequest implements NextApiRequest {
    body: any;
    cookies: { [p: string]: string };
    env: Env;
    query: { [p: string]: string | string[] };
    aborted: boolean;
    complete: boolean;
    connection: Socket;
    destroyed: boolean;
    headers: IncomingHttpHeaders;
    httpVersion: string;
    httpVersionMajor: number;
    httpVersionMinor: number;
    rawHeaders: string[];
    rawTrailers: string[];
    readable: boolean;
    readonly readableEncoding: BufferEncoding | null;
    readonly readableEnded: boolean;
    readonly readableFlowing: boolean | null;
    readonly readableHighWaterMark: number;
    readonly readableLength: number;
    readonly readableObjectMode: boolean;
    socket: Socket;
    trailers: NodeJS.Dict<string>;

    [Symbol.asyncIterator](): AsyncIterableIterator<any>;
    [Symbol.asyncIterator](): AsyncIterableIterator<string | Buffer>;
    [Symbol.asyncIterator](): AsyncIterableIterator<any> | AsyncIterableIterator<string | Buffer> {
        return undefined;
    }

    _destroy(error: Error | null, callback: (error?: (Error | null)) => void): void {
    }

    _read(size: number): void {
    }

    addListener(event: "close", listener: () => void): this;
    addListener(event: "data", listener: (chunk: any) => void): this;
    addListener(event: "end", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: "pause", listener: () => void): this;
    addListener(event: "readable", listener: () => void): this;
    addListener(event: "resume", listener: () => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    addListener(event: "close" | "data" | "end" | "error" | "pause" | "readable" | "resume" | string | symbol, listener: (() => void) | ((chunk: any) => void) | ((err: Error) => void) | ((...args: any[]) => void)): this {
        return undefined;
    }

    destroy(error?: Error): void {
    }

    emit(event: "close"): boolean;
    emit(event: "data", chunk: any): boolean;
    emit(event: "end"): boolean;
    emit(event: "error", err: Error): boolean;
    emit(event: "pause"): boolean;
    emit(event: "readable"): boolean;
    emit(event: "resume"): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: "close" | "data" | "end" | "error" | "pause" | "readable" | "resume" | string | symbol, ...chunk: (any)[]): boolean {
        return false;
    }

    eventNames(): Array<string | symbol> {
        return undefined;
    }

    getMaxListeners(): number {
        return 0;
    }

    isPaused(): boolean {
        return false;
    }

    listenerCount(type: string | symbol): number {
        return 0;
    }

    listeners(event: string | symbol): Function[] {
        return [];
    }

    off(event: string | symbol, listener: (...args: any[]) => void): this {
        return undefined;
    }

    on(event: "close", listener: () => void): this;
    on(event: "data", listener: (chunk: any) => void): this;
    on(event: "end", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "pause", listener: () => void): this;
    on(event: "readable", listener: () => void): this;
    on(event: "resume", listener: () => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    on(event: "close" | "data" | "end" | "error" | "pause" | "readable" | "resume" | string | symbol, listener: (() => void) | ((chunk: any) => void) | ((err: Error) => void) | ((...args: any[]) => void)): this {
        return undefined;
    }

    once(event: "close", listener: () => void): this;
    once(event: "data", listener: (chunk: any) => void): this;
    once(event: "end", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: "pause", listener: () => void): this;
    once(event: "readable", listener: () => void): this;
    once(event: "resume", listener: () => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;
    once(event: "close" | "data" | "end" | "error" | "pause" | "readable" | "resume" | string | symbol, listener: (() => void) | ((chunk: any) => void) | ((err: Error) => void) | ((...args: any[]) => void)): this {
        return undefined;
    }

    pause(): this;
    pause(): this;
    pause(): this {
        return undefined;
    }

    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "data", listener: (chunk: any) => void): this;
    prependListener(event: "end", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: "pause", listener: () => void): this;
    prependListener(event: "readable", listener: () => void): this;
    prependListener(event: "resume", listener: () => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependListener(event: "close" | "data" | "end" | "error" | "pause" | "readable" | "resume" | string | symbol, listener: (() => void) | ((chunk: any) => void) | ((err: Error) => void) | ((...args: any[]) => void)): this {
        return undefined;
    }

    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "data", listener: (chunk: any) => void): this;
    prependOnceListener(event: "end", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: "pause", listener: () => void): this;
    prependOnceListener(event: "readable", listener: () => void): this;
    prependOnceListener(event: "resume", listener: () => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "close" | "data" | "end" | "error" | "pause" | "readable" | "resume" | string | symbol, listener: (() => void) | ((chunk: any) => void) | ((err: Error) => void) | ((...args: any[]) => void)): this {
        return undefined;
    }

    push(chunk: any, encoding?: BufferEncoding): boolean {
        return false;
    }

    rawListeners(event: string | symbol): Function[] {
        return [];
    }

    read(size?: number): any;
    read(size?: number): string | Buffer;
    read(size?: number): any {
    }

    removeAllListeners(event?: string | symbol): this {
        return undefined;
    }

    removeListener(event: "close", listener: () => void): this;
    removeListener(event: "data", listener: (chunk: any) => void): this;
    removeListener(event: "end", listener: () => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: "pause", listener: () => void): this;
    removeListener(event: "readable", listener: () => void): this;
    removeListener(event: "resume", listener: () => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(event: "close" | "data" | "end" | "error" | "pause" | "readable" | "resume" | string | symbol, listener: (() => void) | ((chunk: any) => void) | ((err: Error) => void) | ((...args: any[]) => void)): this {
        return undefined;
    }

    resume(): this;
    resume(): this;
    resume(): this {
        return undefined;
    }

    setEncoding(encoding: BufferEncoding): this;
    setEncoding(encoding: BufferEncoding): this;
    setEncoding(encoding: BufferEncoding): this {
        return undefined;
    }

    setMaxListeners(n: number): this {
        return undefined;
    }

    setTimeout(msecs: number, callback?: () => void): this {
        return undefined;
    }

    unpipe(destination?: NodeJS.WritableStream): this;
    unpipe(destination?: NodeJS.WritableStream): this;
    unpipe(destination?: NodeJS.WritableStream): this {
        return undefined;
    }

    unshift(chunk: any, encoding?: BufferEncoding): void;
    unshift(chunk: string | Uint8Array, encoding?: BufferEncoding): void;
    unshift(chunk: any, encoding?: BufferEncoding): void {
    }

    wrap(oldStream: NodeJS.ReadableStream): this;
    wrap(oldStream: NodeJS.ReadableStream): this;
    wrap(oldStream: NodeJS.ReadableStream): this {
        return undefined;
    }

    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean }): T;
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean }): T;
    pipe(destination: any, options?: { end?: boolean }): any {
        return undefined;
    }
}