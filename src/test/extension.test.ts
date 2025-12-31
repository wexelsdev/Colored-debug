import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Debug Color Fixer Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('ANSI code replacement logic', async () => {
		const brokenString = "e[90m[15:32:14]e[0m e[7me[37m INFO e[0m";
		const expectedString = "\u001b[90m[15:32:14]\u001b[0m \u001b[7m\u001b[37m INFO \u001b[0m";

		const fixAnsi = (text: string) => text.replace(/(?:\\e|e)\[([0-9;]*m)/g, '\u001b[$1');

		assert.strictEqual(fixAnsi(brokenString), expectedString, 'Строка с "e[" должна заменяться на ESC-последовательность');
	});

	test('Extension should be present', () => {
		assert.ok(vscode.extensions.getExtension('wexelsdev.colored-debug'));
	});
});