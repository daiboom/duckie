import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { TerminalService } from './terminal.service';
import { CreateTerminalDto } from './dto/create-terminal.dto';
import { UpdateTerminalDto } from './dto/update-terminal.dto';

@WebSocketGateway(80, { namespace: 'terminal' })
export class TerminalGateway {
  constructor(private readonly terminalService: TerminalService) {}
  @WebSocketServer()
  server;

  @SubscribeMessage('createTerminal')
  create(@MessageBody() createTerminalDto: CreateTerminalDto) {
    return this.terminalService.create(createTerminalDto);
  }

  @SubscribeMessage('findAllTerminal')
  findAll() {
    return this.terminalService.findAll();
  }

  @SubscribeMessage('findOneTerminal')
  findOne(@MessageBody() id: number) {
    return this.terminalService.findOne(id);
  }

  @SubscribeMessage('updateTerminal')
  update(@MessageBody() updateTerminalDto: UpdateTerminalDto) {
    return this.terminalService.update(updateTerminalDto.id, updateTerminalDto);
  }

  @SubscribeMessage('removeTerminal')
  remove(@MessageBody() id: number) {
    return this.terminalService.remove(id);
  }
}
