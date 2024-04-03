const getTimestamp = () => {
    const time = new Date();
    return time.toISOString();
}

const getServer = () => {
    srvNro = Math.floor(Math.random() * 2) + 1;
    return 'server' + srvNro;
}

const getStatus = () => {
    sts = Math.floor(Math.random() * 1);
    return sts ? 'failed' : 'success';
}

exports.genPalomuuri = () => {
    // random protocol between 0 and 5
    protocol = Math.floor(Math.random() * 6);
    switch (protocol) {
        case 0:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.101",
                "destination_ip": "203.0.113.10",
                "destination_port": 80,
                "protocol": "HTTP",
                "action": "allowed"
            };
        case 1:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.103",
                "destination_ip": "203.0.113.40",
                "destination_port": 21,
                "protocol": "FTP",
                "action": "allowed"
            };
        case 2:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "10.1.1.5",
                "destination_ip": "203.0.113.20",
                "destination_port": 22,
                "protocol": "SSH",
                "action": "blocked"
            };
        case 3:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.102",
                "destination_ip": "203.0.113.30",
                "destination_port": 443,
                "protocol": "HTTPS",
                "action": "allowed"
            };
        case 4:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "10.2.2.10",
                "destination_ip": "203.0.113.50",
                "destination_port": 445,
                "protocol": "SMB",
                "action": "detected",
                "description": "Possible SMB exploit attempt"
            };
        default:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.104",
                "destination_ip": "203.0.113.60",
                "destination_port": 3389,
                "protocol": "RDP",
                "action": "blocked"
            };
        }
};

exports.genPalvelin = () => {
    // random event between 0 and 4
    srvEvent = Math.floor(Math.random() * 5);
    switch (srvEvent) {
        case 0:
            return {
                "timestamp": getTimestamp(),
                "server_name": getServer(),
                "event_type": "login",
                "username": "user123",
                "status": getStatus()
            };
        case 1:
            return {
                "timestamp": getTimestamp(),
                "server_name": getServer(),
                "event_type": "login",
                "username": "admin",
                "status": "failed"
            };
        case 2:
            return {
                "timestamp": getTimestamp(),
                "server_name": getServer(),
                "event_type": "update",
                "update_name": "SecurityPatch30342345",
                "status": "success"
            };
        case 3:
            return {
                "timestamp": getTimestamp(),
                "server_name": getServer(),
                "event_type": "virus_scan",
                "status": "success"
            };
        case 4:
            return {
                "timestamp": getTimestamp(),
                "server_name": getServer(),
                "event_type": "abnormal_activity",
                "description": "Unusual number of failed login attempts"
            };
    }
};

exports.genTyoasema = () => {
    // random event between 0 and 3
    wsEvent = Math.floor(Math.random() * 4);
    switch (wsEvent) {
        case 0:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.10",
                "username": "user1",
                "event_id": 4624,
                "logon_type": "Interactive",
                "logon_result": "Success",
                "process_name": "C:\\Windows\\System32\\cmd.exe"
            };
        case 1:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.25",
                "username": "user4",
                "event_id": 4769,
                "logon_type": "Unlock",
                "logon_result": "Success",
                "process_name": "C:\\Windows\\System32\\LogonUI.exe"
            };
        case 2:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.30",
                "username": "user5",
                "event_id": 4672,
                "logon_type": "Batch",
                "logon_result": "Success",
                "process_name": "C:\\Windows\\System32\\Taskmgr.exe"
            };
        case 3:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.40",
                "username": "attacker",
                "event_id": 4624,
                "logon_type": "Interactive",
                "logon_result": "Success",
                "process_name": "C:\\Windows\\System32\\cmd.exe"
            }
    }
};

exports.genReititin = () => {
    // random event between 0 and 11
    wsEvent = Math.floor(Math.random() * 12);
    switch (wsEvent) {
        case 0:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.2",
                "destination_ip": "203.0.113.30",
                "destination_port": 443,
                "protocol": "TCP",
                "action": "forwarded",
                "attack_type": null,
                "attack_traffic": null
            };
        case 1:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.3",
                "destination_ip": "203.0.113.40",
                "destination_port": 21,
                "protocol": "TCP",
                "action": "forwarded",
                "attack_type": null,
                "attack_traffic": null
            };
        case 2:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "10.2.2.10",
                "destination_ip": "203.0.113.50",
                "destination_port": 445,
                "protocol": "TCP",
                "action": "forwarded",
                "attack_type": null,
                "attack_traffic": null
            };
        case 3:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.4",
                "destination_ip": "203.0.113.60",
                "destination_port": 3389,
                "protocol": "HTTP",
                "action": "denied",
                "attack_type": "DDoS",
                "attack_traffic": "High"
            };
        case 4:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.5",
                "destination_ip": "203.0.113.70",
                "destination_port": 123,
                "protocol": "UDP",
                "action": "forwarded",
                "attack_type": null,
                "attack_traffic": null
            };
        case 5:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.6",
                "destination_ip": "203.0.113.80",
                "destination_port": 161,
                "protocol": "UDP",
                "action": "blocked",
                "attack_type": "MalwareActivity",
                "attack_traffic": null
            };
        case 6:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.7",
                "destination_ip": "203.0.113.90",
                "destination_port": 137,
                "protocol": "UDP",
                "action": "forwarded",
                "attack_type": null,
                "attack_traffic": null
            };
        case 7:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.20",
                "destination_ip": "203.0.113.10",
                "destination_port": 22,
                "protocol": "SSH",
                "action": "blocked",
                "attack_type": null,
                "attack_traffic": null
            };
        case 8:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "10.0.0.5",
                "destination_ip": "203.0.113.20",
                "destination_port": 80,
                "protocol": "HTTP",
                "action": "allowed",
                "attack_type": null,
                "attack_traffic": null
            };
        case 9:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "203.0.113.100",
                "destination_ip": "192.168.1.10",
                "destination_port": 80,
                "protocol": "HTTP",
                "action": "denied",
                "attack_type": "DDoS",
                "attack_traffic": "High"
            };
        case 10:
            return {
                "timestamp": getTimestamp(),
                "source_ip": "192.168.1.30",
                "destination_ip": "203.0.113.30",
                "destination_port": 443,
                "protocol": "HTTPS",
                "action": "allowed",
                "attack_type": null,
                "attack_traffic": null
            };
    }
};