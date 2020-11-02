export const info = {
  kind: "SelectionSet",
  selections: [
    {
      kind: "Field",
      name: {
        kind: "Name",
        value: "id",
        loc: {
          start: 13,
          end: 15,
        },
      },
      arguments: [],
      directives: [],
      loc: {
        start: 13,
        end: 15,
      },
    },
    {
      kind: "Field",
      name: {
        kind: "Name",
        value: "firstName",
        loc: {
          start: 20,
          end: 29,
        },
      },
      arguments: [],
      directives: [],
      loc: {
        start: 20,
        end: 29,
      },
    },
    {
      kind: "Field",
      name: {
        kind: "Name",
        value: "role",
        loc: {
          start: 34,
          end: 38,
        },
      },
      arguments: [],
      directives: [],
      loc: {
        start: 34,
        end: 38,
      },
    },
    {
      kind: "Field",
      name: {
        kind: "Name",
        value: "account",
        loc: {
          start: 43,
          end: 50,
        },
      },
      arguments: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "id",
              loc: {
                start: 59,
                end: 61,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 59,
              end: 61,
            },
          },
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "locations",
              loc: {
                start: 68,
                end: 77,
              },
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "postCode",
                    loc: {
                      start: 88,
                      end: 96,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 88,
                    end: 96,
                  },
                },
                {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "parking",
                    loc: {
                      start: 105,
                      end: 112,
                    },
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "id",
                          loc: {
                            start: 125,
                            end: 127,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 125,
                          end: 127,
                        },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "parkingNumber",
                          loc: {
                            start: 138,
                            end: 151,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 138,
                          end: 151,
                        },
                      },
                    ],
                    loc: {
                      start: 113,
                      end: 161,
                    },
                  },
                  loc: {
                    start: 105,
                    end: 161,
                  },
                },
              ],
              loc: {
                start: 78,
                end: 169,
              },
            },
            loc: {
              start: 68,
              end: 169,
            },
          },
        ],
        loc: {
          start: 51,
          end: 175,
        },
      },
      loc: {
        start: 43,
        end: 175,
      },
    },
  ],
  loc: {
    start: 7,
    end: 179,
  },
};
