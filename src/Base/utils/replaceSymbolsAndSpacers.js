export default function (str) {
    return str.replace(/[^A-Z0-9]+/ig, "-");
}