fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error(error))

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value =>console.log(value.name)))
    .catch(error => console.error(error))    