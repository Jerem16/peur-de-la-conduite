import "next";

declare module "next" {
    interface Metadata {
        icons?: {
            others?: Array<{
                url: string;
                sizes?: string;
                type?: string;
            }>;
        };
    }
}
declare module "js-cookie" {
    interface CookiesStatic<T = string> {
        get(name: string): T | undefined;
        set(
            name: string,
            value: T,
            options?: { path?: string; expires?: number }
        ): void;
        remove(name: string, options?: { path?: string }): void;
    }
    const Cookies: CookiesStatic;
    export default Cookies;
}
