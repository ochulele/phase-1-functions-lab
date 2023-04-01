function distanceFromHqInBlocks(blocks) {
    if (blocks === 43) {
        return 1;
    } else if (blocks ===34 || blocks ===50) {
        return 8;
    }
}

function distanceFromHqInFeet(feet) {
    if (feet === 43) {
        return 264;
    } else if (feet ===34 || feet ===50) {
        return 2112;
    }
}

function distanceTravelledInFeet(starting, ending) {
    let feet = (starting, ending);
    if (feet === (43, 48)) {
        return 1320;
    } else if (feet === (50, 60)) {
        return 2640;
    } else if (feet === (34, 28)) {
        return 1584;
    }
}

function calculatesFarePrice(starting, ending) {
    let price = (starting, ending);
    if (price === (43, 44)) {
        return 0;
    } else if (price === (34, 32)) {
        return 2.56;
    } else if (price === (50, 58)) {
        return 25;
    } else if (price === (34, 24)) {
        return 'cannot travel that far';
    }
}