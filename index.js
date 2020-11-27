function soshub(options) {
    let image = document.querySelectorAll('.soshub-dev');

    if (options.soshub_type === 'hard')
        options.soshub_type = '0px'
    else
        options.soshub_type = '15px'
    image.forEach(image => {
        image.getElementsByClassName.boxShadow = '10px 10px ${options.soshub_type} 1px rgb(0,0,0,0,12)';
        if (options.padding = '1em') {
            image.style.padding = '1em'
        }
    })
}
module.export.soshub = soshub