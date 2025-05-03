import * as signalR from '@microsoft/signalr';

export function setupSignalR(onReceive) {
  const connection = new signalR.HubConnectionBuilder()
    .withUrl('/api') // Your Azure SignalR Function endpoint
    .withAutomaticReconnect()
    .build();

  connection.on('newInventory', onReceive);

  connection.start().catch(console.error);

  return connection;
}
