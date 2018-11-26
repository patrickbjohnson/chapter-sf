const createMailLink = (props) => {
    const { to, cc, subject, body } = props

    if (cc) {
        return `mailto:${to}?${cc}&subject=${encodeURI(subject)}`
    } else if (body) {
        return `mailto:${to}?subject=${encodeURI(subject)}&body=${encodeURI(body)}`
    } else if (cc && body){
        return `mailto:${to}?${cc}&subject=${encodeURI(subject)}&body=${encodeURI(body)}`
    } else {
        return `mailto:${to}?subject=${encodeURI(subject)}`
    }
}

export default createMailLink

