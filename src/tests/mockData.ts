export const info = {
  "fieldName": "me",
  "fieldNodes": [
    {
      "kind": "Field",
      "name": {
        "kind": "Name",
        "value": "me",
        "loc": {
          "start": 4,
          "end": 6
        }
      },
      "arguments": [],
      "directives": [],
      "selectionSet": {
        "kind": "SelectionSet",
        "selections": [
          {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "id",
              "loc": {
                "start": 13,
                "end": 15
              }
            },
            "arguments": [],
            "directives": [],
            "loc": {
              "start": 13,
              "end": 15
            }
          },
          {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "firstName",
              "loc": {
                "start": 20,
                "end": 29
              }
            },
            "arguments": [],
            "directives": [],
            "loc": {
              "start": 20,
              "end": 29
            }
          },
          {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "role",
              "loc": {
                "start": 34,
                "end": 38
              }
            },
            "arguments": [],
            "directives": [],
            "loc": {
              "start": 34,
              "end": 38
            }
          },
          {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "account",
              "loc": {
                "start": 43,
                "end": 50
              }
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [
                {
                  "kind": "Field",
                  "name": {
                    "kind": "Name",
                    "value": "id",
                    "loc": {
                      "start": 59,
                      "end": 61
                    }
                  },
                  "arguments": [],
                  "directives": [],
                  "loc": {
                    "start": 59,
                    "end": 61
                  }
                },
                {
                  "kind": "Field",
                  "name": {
                    "kind": "Name",
                    "value": "locations",
                    "loc": {
                      "start": 68,
                      "end": 77
                    }
                  },
                  "arguments": [],
                  "directives": [],
                  "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [
                      {
                        "kind": "Field",
                        "name": {
                          "kind": "Name",
                          "value": "id",
                          "loc": {
                            "start": 88,
                            "end": 90
                          }
                        },
                        "arguments": [],
                        "directives": [],
                        "loc": {
                          "start": 88,
                          "end": 90
                        }
                      },
                      {
                        "kind": "Field",
                        "name": {
                          "kind": "Name",
                          "value": "lat",
                          "loc": {
                            "start": 99,
                            "end": 102
                          }
                        },
                        "arguments": [],
                        "directives": [],
                        "loc": {
                          "start": 99,
                          "end": 102
                        }
                      },
                      {
                        "kind": "Field",
                        "name": {
                          "kind": "Name",
                          "value": "long",
                          "loc": {
                            "start": 111,
                            "end": 115
                          }
                        },
                        "arguments": [],
                        "directives": [],
                        "loc": {
                          "start": 111,
                          "end": 115
                        }
                      },
                      {
                        "kind": "Field",
                        "name": {
                          "kind": "Name",
                          "value": "parking",
                          "loc": {
                            "start": 124,
                            "end": 131
                          }
                        },
                        "arguments": [],
                        "directives": [],
                        "selectionSet": {
                          "kind": "SelectionSet",
                          "selections": [
                            {
                              "kind": "Field",
                              "name": {
                                "kind": "Name",
                                "value": "id",
                                "loc": {
                                  "start": 144,
                                  "end": 146
                                }
                              },
                              "arguments": [],
                              "directives": [],
                              "loc": {
                                "start": 144,
                                "end": 146
                              }
                            },
                            {
                              "kind": "Field",
                              "name": {
                                "kind": "Name",
                                "value": "startDateTime",
                                "loc": {
                                  "start": 157,
                                  "end": 170
                                }
                              },
                              "arguments": [],
                              "directives": [],
                              "loc": {
                                "start": 157,
                                "end": 170
                              }
                            },
                            {
                              "kind": "Field",
                              "name": {
                                "kind": "Name",
                                "value": "endDateTime",
                                "loc": {
                                  "start": 181,
                                  "end": 192
                                }
                              },
                              "arguments": [],
                              "directives": [],
                              "loc": {
                                "start": 181,
                                "end": 192
                              }
                            }
                          ],
                          "loc": {
                            "start": 132,
                            "end": 202
                          }
                        },
                        "loc": {
                          "start": 124,
                          "end": 202
                        }
                      }
                    ],
                    "loc": {
                      "start": 78,
                      "end": 210
                    }
                  },
                  "loc": {
                    "start": 68,
                    "end": 210
                  }
                }
              ],
              "loc": {
                "start": 51,
                "end": 216
              }
            },
            "loc": {
              "start": 43,
              "end": 216
            }
          }
        ],
        "loc": {
          "start": 7,
          "end": 220
        }
      },
      "loc": {
        "start": 4,
        "end": 220
      }
    }
  ],
  "returnType": "User!",
  "parentType": "Query",
  "path": {
    "key": "me"
  },
  "schema": {
    "__validationErrors": [],
    "__allowedLegacyNames": [],
    "_queryType": "Query",
    "_mutationType": "Mutation",
    "_directives": [
      "@log",
      "@formatDate",
      "@authenticated",
      "@authorized",
      "@cacheControl",
      "@skip",
      "@include",
      "@deprecated"
    ],
    "_typeMap": {
      "Query": "Query",
      "User": "User",
      "ID": "ID",
      "String": "String",
      "Account": "Account",
      "Location": "Location",
      "Parking": "Parking",
      "Float": "Float",
      "Status": "Status",
      "Role": "Role",
      "Mutation": "Mutation",
      "CreateAccountInput": "CreateAccountInput",
      "CreateUserInput": "CreateUserInput",
      "CreateParkingInput": "CreateParkingInput",
      "ConnectObj": "ConnectObj",
      "Connect": "Connect",
      "UpdateParkingInput": "UpdateParkingInput",
      "CreateLocationInput": "CreateLocationInput",
      "UpdateLocationInput": "UpdateLocationInput",
      "loginInput": "loginInput",
      "loginInResponse": "loginInResponse",
      "LoggedInUser": "LoggedInUser",
      "__Schema": "__Schema",
      "__Type": "__Type",
      "__TypeKind": "__TypeKind",
      "Boolean": "Boolean",
      "__Field": "__Field",
      "__InputValue": "__InputValue",
      "__EnumValue": "__EnumValue",
      "__Directive": "__Directive",
      "__DirectiveLocation": "__DirectiveLocation",
      "CacheControlScope": "CacheControlScope",
      "Upload": "Upload",
      "Int": "Int"
    },
    "_possibleTypeMap": {},
    "_implementations": {},
    "_extensionsEnabled": true
  },
  "fragments": {},
  "operation": {
    "kind": "OperationDefinition",
    "operation": "query",
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [
        {
          "kind": "Field",
          "name": {
            "kind": "Name",
            "value": "me",
            "loc": {
              "start": 4,
              "end": 6
            }
          },
          "arguments": [],
          "directives": [],
          "selectionSet": {
            "kind": "SelectionSet",
            "selections": [
              {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "id",
                  "loc": {
                    "start": 13,
                    "end": 15
                  }
                },
                "arguments": [],
                "directives": [],
                "loc": {
                  "start": 13,
                  "end": 15
                }
              },
              {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "firstName",
                  "loc": {
                    "start": 20,
                    "end": 29
                  }
                },
                "arguments": [],
                "directives": [],
                "loc": {
                  "start": 20,
                  "end": 29
                }
              },
              {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "role",
                  "loc": {
                    "start": 34,
                    "end": 38
                  }
                },
                "arguments": [],
                "directives": [],
                "loc": {
                  "start": 34,
                  "end": 38
                }
              },
              {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "account",
                  "loc": {
                    "start": 43,
                    "end": 50
                  }
                },
                "arguments": [],
                "directives": [],
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [
                    {
                      "kind": "Field",
                      "name": {
                        "kind": "Name",
                        "value": "id",
                        "loc": {
                          "start": 59,
                          "end": 61
                        }
                      },
                      "arguments": [],
                      "directives": [],
                      "loc": {
                        "start": 59,
                        "end": 61
                      }
                    },
                    {
                      "kind": "Field",
                      "name": {
                        "kind": "Name",
                        "value": "locations",
                        "loc": {
                          "start": 68,
                          "end": 77
                        }
                      },
                      "arguments": [],
                      "directives": [],
                      "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                          {
                            "kind": "Field",
                            "name": {
                              "kind": "Name",
                              "value": "id",
                              "loc": {
                                "start": 88,
                                "end": 90
                              }
                            },
                            "arguments": [],
                            "directives": [],
                            "loc": {
                              "start": 88,
                              "end": 90
                            }
                          },
                          {
                            "kind": "Field",
                            "name": {
                              "kind": "Name",
                              "value": "lat",
                              "loc": {
                                "start": 99,
                                "end": 102
                              }
                            },
                            "arguments": [],
                            "directives": [],
                            "loc": {
                              "start": 99,
                              "end": 102
                            }
                          },
                          {
                            "kind": "Field",
                            "name": {
                              "kind": "Name",
                              "value": "long",
                              "loc": {
                                "start": 111,
                                "end": 115
                              }
                            },
                            "arguments": [],
                            "directives": [],
                            "loc": {
                              "start": 111,
                              "end": 115
                            }
                          },
                          {
                            "kind": "Field",
                            "name": {
                              "kind": "Name",
                              "value": "parking",
                              "loc": {
                                "start": 124,
                                "end": 131
                              }
                            },
                            "arguments": [],
                            "directives": [],
                            "selectionSet": {
                              "kind": "SelectionSet",
                              "selections": [
                                {
                                  "kind": "Field",
                                  "name": {
                                    "kind": "Name",
                                    "value": "id",
                                    "loc": {
                                      "start": 144,
                                      "end": 146
                                    }
                                  },
                                  "arguments": [],
                                  "directives": [],
                                  "loc": {
                                    "start": 144,
                                    "end": 146
                                  }
                                },
                                {
                                  "kind": "Field",
                                  "name": {
                                    "kind": "Name",
                                    "value": "startDateTime",
                                    "loc": {
                                      "start": 157,
                                      "end": 170
                                    }
                                  },
                                  "arguments": [],
                                  "directives": [],
                                  "loc": {
                                    "start": 157,
                                    "end": 170
                                  }
                                },
                                {
                                  "kind": "Field",
                                  "name": {
                                    "kind": "Name",
                                    "value": "endDateTime",
                                    "loc": {
                                      "start": 181,
                                      "end": 192
                                    }
                                  },
                                  "arguments": [],
                                  "directives": [],
                                  "loc": {
                                    "start": 181,
                                    "end": 192
                                  }
                                }
                              ],
                              "loc": {
                                "start": 132,
                                "end": 202
                              }
                            },
                            "loc": {
                              "start": 124,
                              "end": 202
                            }
                          }
                        ],
                        "loc": {
                          "start": 78,
                          "end": 210
                        }
                      },
                      "loc": {
                        "start": 68,
                        "end": 210
                      }
                    }
                  ],
                  "loc": {
                    "start": 51,
                    "end": 216
                  }
                },
                "loc": {
                  "start": 43,
                  "end": 216
                }
              }
            ],
            "loc": {
              "start": 7,
              "end": 220
            }
          },
          "loc": {
            "start": 4,
            "end": 220
          }
        }
      ],
      "loc": {
        "start": 0,
        "end": 222
      }
    },
    "loc": {
      "start": 0,
      "end": 222
    }
  },
  "variableValues": {},
  "cacheControl": {
    "cacheHint": {
      "maxAge": 0
    }
  }
}