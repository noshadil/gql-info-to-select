export const greet = (name: string) => `Hello ${name}`;

export const includes = (info:any):any => {
let returnVal

for(let key in info.selections ) {
    const field=info.selections[key]
    if (field.selectionSet) {
    returnVal =
        {include:{[field.name.value] : includes(field.selectionSet)}}
    }
}
return returnVal || true
}