<template>
	<div class="ssh">
		<div class="terminal-form">
			<div>User: <input type="text" v-model="user" /></div>
			<div>Password: <input type="text" v-model="password" /></div>
			<div>Host: <input type="text" v-model="host" /></div>
			<div>Port: <input type="text" v-model="port" /></div>

			<button v-on:click="openTerminal">Access</button><button>Cancel</button>
		</div>
		<hr />
		<div class="terminal-container" id="terminal"></div>
	</div>
</template>

<script>
// @ is an alias to /src
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'
import 'xterm/lib/xterm.js'

export default {
	name: 'TerminalContainer',
	components: {
		// TerminalWorld,
	},
	data() {
		return {
			user: 'root',
			password: 'root',
			host: '192.168.56.108',
			port: '22',
			sockets: [],
			socket: null,
			fitAddon: new FitAddon(),
		}
	},
	mounted() {
		// this.openTerminal()
	},
	methods: {
		openTerminal() {
			const protocol = 'ws://'
			const urlParam = `user=${this.user}&password=${this.password}$host=${this.host}$port=${this.port}`
			const socketURL = `${protocol}localhost:4000/api/terminal?${encodeURIComponent(
				urlParam
			)}`
			let _socket = new WebSocket(socketURL)
			console.log(_socket)
			_socket.binaryType = 'arraybuffer'

			const terminalElement = document.querySelector('#terminal')

			const term = new Terminal({
				convertEol: true,
			})

			term.writeln('Connecting ...')
			term.loadAddon(this.fitAddon)
			term.open(terminalElement)

			const dims = this.fitAddon.proposeDimensions()
			// term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
			this.socket.send(
				new TextEncoder().encode(
					'\x01' +
						JSON.stringify({
							cols: dims.cols,
							rows: dims.rows,
						})
				)
			)

			console.log(terminalElement)
		},
	},
}
</script>
