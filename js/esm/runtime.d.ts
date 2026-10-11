/**
 * Copyright (c) 2026 Uno Kim / AMEVA Foundation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 OR Commercial-License
 */
import { ModelManager } from "./models.js";
import { ServerManager, ServerInstance, ServerOptions } from "./server.js";
import { HuggingFaceCrawler } from "./crawler.js";
export interface RuntimeOptions {
    preset?: string;
    modelsDir?: string;
    binDir?: string;
}
export declare class LlamaRuntime {
    readonly models: ModelManager;
    readonly crawler: HuggingFaceCrawler;
    readonly serverManager: ServerManager;
    constructor(options?: RuntimeOptions);
    static install(options?: RuntimeOptions): Promise<LlamaRuntime>;
    serve(options: ServerOptions): Promise<ServerInstance>;
}
//# sourceMappingURL=runtime.d.ts.map