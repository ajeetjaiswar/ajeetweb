export function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
        return '<a href="' + url + '">' + url + '</a>';
    })
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
}

export function hashify(text) {
    var urlRegex = /#[a-z]+/gi;
    return text.replace(urlRegex, function (tag) {
        return '<a href="/hashTag/' + tag + '">' + tag + '</a>';
    })
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
}


export function getRatingIcon(props) {
    switch (props) {
        case 'Culture':
            return 'CultureIcon';
        case 'Safety':
            return 'Safety';
        case 'Learning Opportunity':
            return 'LearningApportunity';
        case 'Maternity Benefits':
            return 'Maternity';
        case 'Female Representation':
            return 'bar';
        case 'Job Satisfaction':
            return 'ReservationIcon';
        case 'Work Life Balance':
            return 'WorkBalance';
        case 'Salary Benefits':
            return 'Wallet';
        default:
            return 'foo';
    }
}

export function hyphenSeparatedUrls(name) {
    let retval = '';
    let spacesep = name.split(' ');
    if (spacesep.length > 1) {
        retval = spacesep.join('-');
        retval = retval.toLowerCase().replace(/[^a-zA-Z0-9\- ]/g, '');
    }
    else {
        retval = spacesep[0].toLowerCase();
    }
    return retval;
}


