function introduction(name) {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language) {
    let greeting = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return greeting
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}