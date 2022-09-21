import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'radius', table: 'node'}}})
export class Node extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  id: number;

  @property({
    type: 'date',
    required: true,
    mysql: {columnName: 'time', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  time: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mysql: {columnName: 'netid', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  netid: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'name', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'description', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  description: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'latitude', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  latitude: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'longitude', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  longitude: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'owner_name', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  ownerName: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'owner_email', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  ownerEmail: string;

  @property({
    type: 'string',
    required: true,
    length: 25,
    mysql: {columnName: 'owner_phone', dataType: 'varchar', dataLength: 25, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  ownerPhone: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'owner_address', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  ownerAddress: string;

  @property({
    type: 'string',
    required: true,
    length: 1,
    mysql: {columnName: 'approval_status', dataType: 'varchar', dataLength: 1, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  approvalStatus: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'ip', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  ip: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'mac', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  mac: string;

  @property({
    type: 'string',
    required: true,
    length: 100,
    mysql: {columnName: 'uptime', dataType: 'varchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  uptime: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'robin', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  robin: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'batman', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  batman: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'memfree', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  memfree: string;

  @property({
    type: 'string',
    required: true,
    length: 16777215,
    mysql: {columnName: 'nbs', dataType: 'mediumtext', dataLength: 16777215, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  nbs: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'gateway', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  gateway: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'gw-qual', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  gwQual: string;

  @property({
    type: 'string',
    required: true,
    length: 16777215,
    mysql: {columnName: 'routes', dataType: 'mediumtext', dataLength: 16777215, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  routes: string;

  @property({
    type: 'string',
    required: true,
    length: 3,
    mysql: {columnName: 'users', dataType: 'char', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  users: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'kbdown', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  kbdown: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'kbup', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  kbup: string;

  @property({
    type: 'string',
    required: true,
    length: 3,
    mysql: {columnName: 'hops', dataType: 'varchar', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  hops: string;

  @property({
    type: 'string',
    required: true,
    length: 3,
    mysql: {columnName: 'rank', dataType: 'varchar', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  rank: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'ssid', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  ssid: string;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'pssid', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  pssid: string;

  @property({
    type: 'number',
    required: true,
    precision: 3,
    scale: 0,
    mysql: {columnName: 'gateway_bit', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'N'},
  })
  gatewayBit: number;

  @property({
    type: 'string',
    required: true,
    length: 20,
    mysql: {columnName: 'memlow', dataType: 'varchar', dataLength: 20, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  memlow: string;

  @property({
    type: 'string',
    required: true,
    length: 3,
    mysql: {columnName: 'usershi', dataType: 'char', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  usershi: string;

  @property({
    type: 'number',
    required: true,
    precision: 12,
    mysql: {columnName: 'cpu', dataType: 'float', dataLength: null, dataPrecision: 12, dataScale: null, nullable: 'N'},
  })
  cpu: number;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'wan_iface', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  wanIface?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'wan_ip', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  wanIp?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'wan_mac', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  wanMac?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'wan_gateway', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  wanGateway?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'wifi_iface', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  wifiIface?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'wifi_ip', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  wifiIp?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'wifi_mac', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  wifiMac?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'wifi_ssid', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  wifiSsid?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'wifi_key', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  wifiKey?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'wifi_channel', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  wifiChannel?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'lan_iface', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lanIface?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'lan_mac', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lanMac?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'lan_ip', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lanIp?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'wan_bup', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  wanBup?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'wan_bdown', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  wanBdown?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'firmware', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  firmware?: string;

  @property({
    type: 'string',
    length: 128,
    mysql: {columnName: 'firmware_revision', dataType: 'varchar', dataLength: 128, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  firmwareRevision?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Node>) {
    super(data);
  }
}

export interface NodeRelations {
  // describe navigational properties here
}

export type NodeWithRelations = Node & NodeRelations;
