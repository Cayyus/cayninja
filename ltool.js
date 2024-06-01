document.getElementById('form-submit-btn').addEventListener('click', get_vals)

function get_vals() {
    document.getElementById('outputBox').innerHTML = document.getElementById('dropdown').value;
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = outputText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Text copied to clipboard');
}

