# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: fig.proto

from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='fig.proto',
  package='com.atakmap',
  syntax='proto3',
  serialized_options=b'\n\017com.atakmap.TakB\010FigProtoP\001\242\002\003TAK',
  serialized_pb=b'\n\tfig.proto\x12\x0b\x63om.atakmap\"~\n\x0e\x46\x65\x64\x65ratedEvent\x12$\n\x05\x65vent\x18\x01 \x01(\x0b\x32\x15.com.atakmap.GeoEvent\x12.\n\x07\x63ontact\x18\x02 \x01(\x0b\x32\x1d.com.atakmap.ContactListEntry\x12\x16\n\x0e\x66\x65\x64\x65rateGroups\x18\x03 \x03(\t\"\xa5\x03\n\x08GeoEvent\x12\x10\n\x08sendTime\x18\x01 \x01(\x03\x12\x11\n\tstartTime\x18\x02 \x01(\x03\x12\x11\n\tstaleTime\x18\x03 \x01(\x03\x12\x0b\n\x03lat\x18\x04 \x01(\x01\x12\x0b\n\x03lon\x18\x05 \x01(\x01\x12\x0b\n\x03hae\x18\x06 \x01(\x01\x12\n\n\x02\x63\x65\x18\x07 \x01(\x01\x12\n\n\x02le\x18\x08 \x01(\x01\x12\x0b\n\x03uid\x18\t \x01(\t\x12\x0c\n\x04type\x18\n \x01(\t\x12\x13\n\x0b\x63oordSource\x18\x0b \x01(\t\x12\r\n\x05other\x18\x0c \x01(\t\x12\x0f\n\x07\x62\x61ttery\x18\r \x01(\x05\x12\x0c\n\x04ploc\x18\x0e \x01(\t\x12\x0c\n\x04palt\x18\x0f \x01(\t\x12\x12\n\nscreenName\x18\x10 \x01(\t\x12\x11\n\tgroupName\x18\x11 \x01(\t\x12\x11\n\tgroupRole\x18\x12 \x01(\t\x12\r\n\x05phone\x18\x13 \x01(\t\x12\r\n\x05speed\x18\x14 \x01(\x01\x12\x0e\n\x06\x63ourse\x18\x15 \x01(\x01\x12\'\n\x06\x62inary\x18\x16 \x01(\x0b\x32\x17.com.atakmap.BinaryBlob\x12\x0f\n\x07ptpUids\x18\x17 \x03(\t\x12\x14\n\x0cptpCallsigns\x18\x18 \x03(\t\"}\n\nBinaryBlob\x12\'\n\x04type\x18\x01 \x01(\x0e\x32\x19.com.atakmap.BINARY_TYPES\x12\x0c\n\x04\x64\x61ta\x18\x02 \x01(\x0c\x12\x10\n\x08\x66ilename\x18\x03 \x01(\t\x12\x11\n\ttimestamp\x18\x04 \x01(\x03\x12\x13\n\x0b\x64\x65scription\x18\x05 \x01(\t\"\x8a\x01\n\x10\x43ontactListEntry\x12$\n\toperation\x18\x01 \x01(\x0e\x32\x11.com.atakmap.CRUD\x12\x0b\n\x03uid\x18\x02 \x01(\t\x12\x10\n\x08\x63\x61llsign\x18\x03 \x01(\t\x12\r\n\x05phone\x18\x04 \x01(\t\x12\x0b\n\x03sip\x18\x05 \x01(\t\x12\x15\n\rdirectConnect\x18\x06 \x01(\t\"\x07\n\x05\x45mpty\":\n\x08Identity\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0b\n\x03uid\x18\x02 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x03 \x01(\t\"G\n\x0cSubscription\x12\'\n\x08identity\x18\x01 \x01(\x0b\x32\x15.com.atakmap.Identity\x12\x0e\n\x06\x66ilter\x18\x02 \x01(\t\"\x83\x01\n\x0c\x43lientHealth\x12\x37\n\x06status\x18\x01 \x01(\x0e\x32\'.com.atakmap.ClientHealth.ServingStatus\":\n\rServingStatus\x12\x0b\n\x07UNKNOWN\x10\x00\x12\x0b\n\x07SERVING\x10\x01\x12\x0f\n\x0bNOT_SERVING\x10\x02\"\x96\x01\n\x0cServerHealth\x12\x37\n\x06status\x18\x01 \x01(\x0e\x32\'.com.atakmap.ServerHealth.ServingStatus\"M\n\rServingStatus\x12\x0b\n\x07UNKNOWN\x10\x00\x12\x0b\n\x07SERVING\x10\x01\x12\x0f\n\x0bNOT_SERVING\x10\x02\x12\x11\n\rNOT_CONNECTED\x10\x03\"@\n\x03ROL\x12\x0f\n\x07program\x18\x01 \x01(\t\x12(\n\x07payload\x18\x02 \x03(\x0b\x32\x17.com.atakmap.BinaryBlob*A\n\x04\x43RUD\x12\x0b\n\x07INVALID\x10\x00\x12\n\n\x06\x43REATE\x10\x01\x12\x08\n\x04READ\x10\x02\x12\n\n\x06UPDATE\x10\x03\x12\n\n\x06\x44\x45LETE\x10\x04*/\n\x0c\x42INARY_TYPES\x12\t\n\x05\x45MPTY\x10\x00\x12\t\n\x05OTHER\x10\x01\x12\t\n\x05IMAGE\x10\x02\x32\x88\x05\n\x10\x46\x65\x64\x65ratedChannel\x12\x41\n\x0cSendOneEvent\x12\x1b.com.atakmap.FederatedEvent\x1a\x12.com.atakmap.Empty\"\x00\x12\x46\n\x13\x42inaryMessageStream\x12\x17.com.atakmap.BinaryBlob\x1a\x12.com.atakmap.Empty\"\x00(\x01\x12<\n\x0bSendOneBlob\x12\x17.com.atakmap.BinaryBlob\x1a\x12.com.atakmap.Empty\"\x00\x12:\n\x0bgetIdentity\x12\x12.com.atakmap.Empty\x1a\x15.com.atakmap.Identity\"\x00\x12O\n\x11\x43lientEventStream\x12\x19.com.atakmap.Subscription\x1a\x1b.com.atakmap.FederatedEvent\"\x00\x30\x01\x12O\n\x11ServerEventStream\x12\x1b.com.atakmap.FederatedEvent\x1a\x19.com.atakmap.Subscription\"\x00(\x01\x12\x45\n\x0bHealthCheck\x12\x19.com.atakmap.ClientHealth\x1a\x19.com.atakmap.ServerHealth\"\x00\x12\x42\n\x0f\x43lientROLStream\x12\x19.com.atakmap.Subscription\x1a\x10.com.atakmap.ROL\"\x00\x30\x01\x12\x42\n\x0fServerROLStream\x12\x10.com.atakmap.ROL\x1a\x19.com.atakmap.Subscription\"\x00(\x01\x42#\n\x0f\x63om.atakmap.TakB\x08\x46igProtoP\x01\xa2\x02\x03TAKb\x06proto3'
)

_CRUD = _descriptor.EnumDescriptor(
  name='CRUD',
  full_name='com.atakmap.CRUD',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='INVALID', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='CREATE', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='READ', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='UPDATE', index=3, number=3,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='DELETE', index=4, number=4,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1341,
  serialized_end=1406,
)
_sym_db.RegisterEnumDescriptor(_CRUD)

CRUD = enum_type_wrapper.EnumTypeWrapper(_CRUD)
_BINARY_TYPES = _descriptor.EnumDescriptor(
  name='BINARY_TYPES',
  full_name='com.atakmap.BINARY_TYPES',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='EMPTY', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OTHER', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='IMAGE', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1408,
  serialized_end=1455,
)
_sym_db.RegisterEnumDescriptor(_BINARY_TYPES)

BINARY_TYPES = enum_type_wrapper.EnumTypeWrapper(_BINARY_TYPES)
INVALID = 0
CREATE = 1
READ = 2
UPDATE = 3
DELETE = 4
EMPTY = 0
OTHER = 1
IMAGE = 2


_CLIENTHEALTH_SERVINGSTATUS = _descriptor.EnumDescriptor(
  name='ServingStatus',
  full_name='com.atakmap.ClientHealth.ServingStatus',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='UNKNOWN', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SERVING', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='NOT_SERVING', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1062,
  serialized_end=1120,
)
_sym_db.RegisterEnumDescriptor(_CLIENTHEALTH_SERVINGSTATUS)

_SERVERHEALTH_SERVINGSTATUS = _descriptor.EnumDescriptor(
  name='ServingStatus',
  full_name='com.atakmap.ServerHealth.ServingStatus',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='UNKNOWN', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SERVING', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='NOT_SERVING', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='NOT_CONNECTED', index=3, number=3,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1196,
  serialized_end=1273,
)
_sym_db.RegisterEnumDescriptor(_SERVERHEALTH_SERVINGSTATUS)


_FEDERATEDEVENT = _descriptor.Descriptor(
  name='FederatedEvent',
  full_name='com.atakmap.FederatedEvent',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='event', full_name='com.atakmap.FederatedEvent.event', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='contact', full_name='com.atakmap.FederatedEvent.contact', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='federateGroups', full_name='com.atakmap.FederatedEvent.federateGroups', index=2,
      number=3, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=26,
  serialized_end=152,
)


_GEOEVENT = _descriptor.Descriptor(
  name='GeoEvent',
  full_name='com.atakmap.GeoEvent',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='sendTime', full_name='com.atakmap.GeoEvent.sendTime', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='startTime', full_name='com.atakmap.GeoEvent.startTime', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='staleTime', full_name='com.atakmap.GeoEvent.staleTime', index=2,
      number=3, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='lat', full_name='com.atakmap.GeoEvent.lat', index=3,
      number=4, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='lon', full_name='com.atakmap.GeoEvent.lon', index=4,
      number=5, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='hae', full_name='com.atakmap.GeoEvent.hae', index=5,
      number=6, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ce', full_name='com.atakmap.GeoEvent.ce', index=6,
      number=7, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='le', full_name='com.atakmap.GeoEvent.le', index=7,
      number=8, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='uid', full_name='com.atakmap.GeoEvent.uid', index=8,
      number=9, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='type', full_name='com.atakmap.GeoEvent.type', index=9,
      number=10, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='coordSource', full_name='com.atakmap.GeoEvent.coordSource', index=10,
      number=11, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='other', full_name='com.atakmap.GeoEvent.other', index=11,
      number=12, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='battery', full_name='com.atakmap.GeoEvent.battery', index=12,
      number=13, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ploc', full_name='com.atakmap.GeoEvent.ploc', index=13,
      number=14, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='palt', full_name='com.atakmap.GeoEvent.palt', index=14,
      number=15, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='screenName', full_name='com.atakmap.GeoEvent.screenName', index=15,
      number=16, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='groupName', full_name='com.atakmap.GeoEvent.groupName', index=16,
      number=17, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='groupRole', full_name='com.atakmap.GeoEvent.groupRole', index=17,
      number=18, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='phone', full_name='com.atakmap.GeoEvent.phone', index=18,
      number=19, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='speed', full_name='com.atakmap.GeoEvent.speed', index=19,
      number=20, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='course', full_name='com.atakmap.GeoEvent.course', index=20,
      number=21, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='binary', full_name='com.atakmap.GeoEvent.binary', index=21,
      number=22, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ptpUids', full_name='com.atakmap.GeoEvent.ptpUids', index=22,
      number=23, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ptpCallsigns', full_name='com.atakmap.GeoEvent.ptpCallsigns', index=23,
      number=24, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=155,
  serialized_end=576,
)


_BINARYBLOB = _descriptor.Descriptor(
  name='BinaryBlob',
  full_name='com.atakmap.BinaryBlob',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='type', full_name='com.atakmap.BinaryBlob.type', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='data', full_name='com.atakmap.BinaryBlob.data', index=1,
      number=2, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='filename', full_name='com.atakmap.BinaryBlob.filename', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='com.atakmap.BinaryBlob.timestamp', index=3,
      number=4, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='description', full_name='com.atakmap.BinaryBlob.description', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=578,
  serialized_end=703,
)


_CONTACTLISTENTRY = _descriptor.Descriptor(
  name='ContactListEntry',
  full_name='com.atakmap.ContactListEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='operation', full_name='com.atakmap.ContactListEntry.operation', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='uid', full_name='com.atakmap.ContactListEntry.uid', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='callsign', full_name='com.atakmap.ContactListEntry.callsign', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='phone', full_name='com.atakmap.ContactListEntry.phone', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='sip', full_name='com.atakmap.ContactListEntry.sip', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='directConnect', full_name='com.atakmap.ContactListEntry.directConnect', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=706,
  serialized_end=844,
)


_EMPTY = _descriptor.Descriptor(
  name='Empty',
  full_name='com.atakmap.Empty',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=846,
  serialized_end=853,
)


_IDENTITY = _descriptor.Descriptor(
  name='Identity',
  full_name='com.atakmap.Identity',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='com.atakmap.Identity.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='uid', full_name='com.atakmap.Identity.uid', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='description', full_name='com.atakmap.Identity.description', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=855,
  serialized_end=913,
)


_SUBSCRIPTION = _descriptor.Descriptor(
  name='Subscription',
  full_name='com.atakmap.Subscription',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='identity', full_name='com.atakmap.Subscription.identity', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='filter', full_name='com.atakmap.Subscription.filter', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=915,
  serialized_end=986,
)


_CLIENTHEALTH = _descriptor.Descriptor(
  name='ClientHealth',
  full_name='com.atakmap.ClientHealth',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='status', full_name='com.atakmap.ClientHealth.status', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _CLIENTHEALTH_SERVINGSTATUS,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=989,
  serialized_end=1120,
)


_SERVERHEALTH = _descriptor.Descriptor(
  name='ServerHealth',
  full_name='com.atakmap.ServerHealth',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='status', full_name='com.atakmap.ServerHealth.status', index=0,
      number=1, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _SERVERHEALTH_SERVINGSTATUS,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1123,
  serialized_end=1273,
)


_ROL = _descriptor.Descriptor(
  name='ROL',
  full_name='com.atakmap.ROL',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='program', full_name='com.atakmap.ROL.program', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='payload', full_name='com.atakmap.ROL.payload', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1275,
  serialized_end=1339,
)

_FEDERATEDEVENT.fields_by_name['event'].message_type = _GEOEVENT
_FEDERATEDEVENT.fields_by_name['contact'].message_type = _CONTACTLISTENTRY
_GEOEVENT.fields_by_name['binary'].message_type = _BINARYBLOB
_BINARYBLOB.fields_by_name['type'].enum_type = _BINARY_TYPES
_CONTACTLISTENTRY.fields_by_name['operation'].enum_type = _CRUD
_SUBSCRIPTION.fields_by_name['identity'].message_type = _IDENTITY
_CLIENTHEALTH.fields_by_name['status'].enum_type = _CLIENTHEALTH_SERVINGSTATUS
_CLIENTHEALTH_SERVINGSTATUS.containing_type = _CLIENTHEALTH
_SERVERHEALTH.fields_by_name['status'].enum_type = _SERVERHEALTH_SERVINGSTATUS
_SERVERHEALTH_SERVINGSTATUS.containing_type = _SERVERHEALTH
_ROL.fields_by_name['payload'].message_type = _BINARYBLOB
DESCRIPTOR.message_types_by_name['FederatedEvent'] = _FEDERATEDEVENT
DESCRIPTOR.message_types_by_name['GeoEvent'] = _GEOEVENT
DESCRIPTOR.message_types_by_name['BinaryBlob'] = _BINARYBLOB
DESCRIPTOR.message_types_by_name['ContactListEntry'] = _CONTACTLISTENTRY
DESCRIPTOR.message_types_by_name['Empty'] = _EMPTY
DESCRIPTOR.message_types_by_name['Identity'] = _IDENTITY
DESCRIPTOR.message_types_by_name['Subscription'] = _SUBSCRIPTION
DESCRIPTOR.message_types_by_name['ClientHealth'] = _CLIENTHEALTH
DESCRIPTOR.message_types_by_name['ServerHealth'] = _SERVERHEALTH
DESCRIPTOR.message_types_by_name['ROL'] = _ROL
DESCRIPTOR.enum_types_by_name['CRUD'] = _CRUD
DESCRIPTOR.enum_types_by_name['BINARY_TYPES'] = _BINARY_TYPES
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

FederatedEvent = _reflection.GeneratedProtocolMessageType('FederatedEvent', (_message.Message,), {
  'DESCRIPTOR' : _FEDERATEDEVENT,
  '__module__' : 'fig_pb2'
  # @@protoc_insertion_point(class_scope:com.atakmap.FederatedEvent)
  })
_sym_db.RegisterMessage(FederatedEvent)

GeoEvent = _reflection.GeneratedProtocolMessageType('GeoEvent', (_message.Message,), {
  'DESCRIPTOR' : _GEOEVENT,
  '__module__' : 'fig_pb2'
  # @@protoc_insertion_point(class_scope:com.atakmap.GeoEvent)
  })
_sym_db.RegisterMessage(GeoEvent)

BinaryBlob = _reflection.GeneratedProtocolMessageType('BinaryBlob', (_message.Message,), {
  'DESCRIPTOR' : _BINARYBLOB,
  '__module__' : 'fig_pb2'
  # @@protoc_insertion_point(class_scope:com.atakmap.BinaryBlob)
  })
_sym_db.RegisterMessage(BinaryBlob)

ContactListEntry = _reflection.GeneratedProtocolMessageType('ContactListEntry', (_message.Message,), {
  'DESCRIPTOR' : _CONTACTLISTENTRY,
  '__module__' : 'fig_pb2'
  # @@protoc_insertion_point(class_scope:com.atakmap.ContactListEntry)
  })
_sym_db.RegisterMessage(ContactListEntry)

Empty = _reflection.GeneratedProtocolMessageType('Empty', (_message.Message,), {
  'DESCRIPTOR' : _EMPTY,
  '__module__' : 'fig_pb2'
  # @@protoc_insertion_point(class_scope:com.atakmap.Empty)
  })
_sym_db.RegisterMessage(Empty)

Identity = _reflection.GeneratedProtocolMessageType('Identity', (_message.Message,), {
  'DESCRIPTOR' : _IDENTITY,
  '__module__' : 'fig_pb2'
  # @@protoc_insertion_point(class_scope:com.atakmap.Identity)
  })
_sym_db.RegisterMessage(Identity)

Subscription = _reflection.GeneratedProtocolMessageType('Subscription', (_message.Message,), {
  'DESCRIPTOR' : _SUBSCRIPTION,
  '__module__' : 'fig_pb2'
  # @@protoc_insertion_point(class_scope:com.atakmap.Subscription)
  })
_sym_db.RegisterMessage(Subscription)

ClientHealth = _reflection.GeneratedProtocolMessageType('ClientHealth', (_message.Message,), {
  'DESCRIPTOR' : _CLIENTHEALTH,
  '__module__' : 'fig_pb2'
  # @@protoc_insertion_point(class_scope:com.atakmap.ClientHealth)
  })
_sym_db.RegisterMessage(ClientHealth)

ServerHealth = _reflection.GeneratedProtocolMessageType('ServerHealth', (_message.Message,), {
  'DESCRIPTOR' : _SERVERHEALTH,
  '__module__' : 'fig_pb2'
  # @@protoc_insertion_point(class_scope:com.atakmap.ServerHealth)
  })
_sym_db.RegisterMessage(ServerHealth)

ROL = _reflection.GeneratedProtocolMessageType('ROL', (_message.Message,), {
  'DESCRIPTOR' : _ROL,
  '__module__' : 'fig_pb2'
  # @@protoc_insertion_point(class_scope:com.atakmap.ROL)
  })
_sym_db.RegisterMessage(ROL)


DESCRIPTOR._options = None

_FEDERATEDCHANNEL = _descriptor.ServiceDescriptor(
  name='FederatedChannel',
  full_name='com.atakmap.FederatedChannel',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  serialized_start=1458,
  serialized_end=2106,
  methods=[
  _descriptor.MethodDescriptor(
    name='SendOneEvent',
    full_name='com.atakmap.FederatedChannel.SendOneEvent',
    index=0,
    containing_service=None,
    input_type=_FEDERATEDEVENT,
    output_type=_EMPTY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='BinaryMessageStream',
    full_name='com.atakmap.FederatedChannel.BinaryMessageStream',
    index=1,
    containing_service=None,
    input_type=_BINARYBLOB,
    output_type=_EMPTY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='SendOneBlob',
    full_name='com.atakmap.FederatedChannel.SendOneBlob',
    index=2,
    containing_service=None,
    input_type=_BINARYBLOB,
    output_type=_EMPTY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='getIdentity',
    full_name='com.atakmap.FederatedChannel.getIdentity',
    index=3,
    containing_service=None,
    input_type=_EMPTY,
    output_type=_IDENTITY,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='ClientEventStream',
    full_name='com.atakmap.FederatedChannel.ClientEventStream',
    index=4,
    containing_service=None,
    input_type=_SUBSCRIPTION,
    output_type=_FEDERATEDEVENT,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='ServerEventStream',
    full_name='com.atakmap.FederatedChannel.ServerEventStream',
    index=5,
    containing_service=None,
    input_type=_FEDERATEDEVENT,
    output_type=_SUBSCRIPTION,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='HealthCheck',
    full_name='com.atakmap.FederatedChannel.HealthCheck',
    index=6,
    containing_service=None,
    input_type=_CLIENTHEALTH,
    output_type=_SERVERHEALTH,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='ClientROLStream',
    full_name='com.atakmap.FederatedChannel.ClientROLStream',
    index=7,
    containing_service=None,
    input_type=_SUBSCRIPTION,
    output_type=_ROL,
    serialized_options=None,
  ),
  _descriptor.MethodDescriptor(
    name='ServerROLStream',
    full_name='com.atakmap.FederatedChannel.ServerROLStream',
    index=8,
    containing_service=None,
    input_type=_ROL,
    output_type=_SUBSCRIPTION,
    serialized_options=None,
  ),
])
_sym_db.RegisterServiceDescriptor(_FEDERATEDCHANNEL)

DESCRIPTOR.services_by_name['FederatedChannel'] = _FEDERATEDCHANNEL

# @@protoc_insertion_point(module_scope)
