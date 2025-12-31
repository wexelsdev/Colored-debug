import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const tracker = vscode.debug.registerDebugAdapterTrackerFactory('*', {
        createDebugAdapterTracker(session: vscode.DebugSession) {
            return {
                onDidSendMessage: (message) => {
                    if (message.type === 'event' && message.event === 'output' && message.body?.output) {
                        const raw = message.body.output;
                        const fixed = raw.replace(/(?:\\e|e)\[([0-9;]*m)/g, '\u001b[$1');
                        
                        if (raw !== fixed) {
                            message.body.output = fixed;
                        }
                    }
                }
            };
        }
    });

    context.subscriptions.push(tracker);
}

export function deactivate() {}