import type { AuthenticationCreds, SignalDataTypeMap } from '@whiskeysockets/baileys';
import { proto } from '@whiskeysockets/baileys';
export declare function useSession(sessionId: string): Promise<{
    state: {
        creds: AuthenticationCreds;
        keys: {
            get: (type: keyof SignalDataTypeMap, ids: string[]) => Promise<{
                [key: string]: Uint8Array | import("@whiskeysockets/baileys").KeyPair | {
                    [jid: string]: boolean;
                } | proto.Message.IAppStateSyncKeyData | import("@whiskeysockets/baileys").LTHashState;
            }>;
            set: (data: any) => Promise<void>;
        };
    };
    saveCreds: () => Promise<void>;
}>;
