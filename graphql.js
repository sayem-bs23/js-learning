
//SUMMARY:

1. alias function: graphql and buildSchema
2. define structure 
3. update data
4. retrieve data

//define the function
var {graphql, buildSchema} = require('graphql');

//define the structure
var structure = buildSchema(`
    type Query{
        key: String
    }  
`);

//run query
var obj = {key: () => 'value'};

//retrieve the query
graphql(structure, '{key}', obj).then((response) => {
    console.log(response);
});

//output:
//{ data: [Object: null prototype] { key: 'value' } }
