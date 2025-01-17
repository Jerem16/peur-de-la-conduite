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
