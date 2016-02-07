function generate() {
    var mac = [];
    for (var i = 0; i < 6; i++) {
        mac[i] = Math.floor(Math.random() * 0x100);
    }
    mac[0] = (mac[0] & 0xfc) | 0x02;

    function hex(value) {
        if (value < 0x10) {
            return '0' + value.toString(16);
        } else {
            return value.toString(16);
        }
    }
    mac = mac.map(hex).join(':');
    $('#target').text(mac);
}

$(document).ready(function() {
    $('#generate').click(generate);
    generate();
});
