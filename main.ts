/*
File:      github.com/ETmbit/sumo-2.ts
Copyright: ETmbit, 2026

License:
This file is part of the ETmbit extensions for MakeCode for micro:bit.
It is free software and you may distribute it under the terms of the
GNU General Public License (version 3 or later) as published by the
Free Software Foundation. The full license text you find at
https://www.gnu.org/licenses.

Disclaimer:
ETmbit extensions are distributed without any warranty.

Dependencies:
ETmbit/general, ETmbit/match, ETmbit/sumobuilder
*/

enum WaitLocation {
    //% block="in the field"
    //% block.loc.nl="op het veld"
    InField = WaitFor.InField,
    //% block="on the line"
    //% block.loc.nl="op de lijn"
    OnBorder = WaitFor.OnBorder,
}

enum WaitObservance {
    //% block="observed"
    //% block.loc.nl="wel waargenomen"
    Traced = WaitFor.Traced,
    //% block="not observed"
    //% block.loc.nl="niet waargenomen"
    NoTrace = WaitFor.NoTrace,
}

enum WaitDistance {
    //% block="far away"
    //% block.loc.nl="ver weg"
    Far = WaitFor.Far,
    //% block="near"
    //% block.loc.nl="dichtbij"
    Near = WaitFor.Near,
    //% block="not observed"
    //% block.loc.nl="niet waargenomen"
    NoTrace = WaitFor.NoTrace
}

//% color="#00CC00" icon="\uf0c1"
//% block="Sumo"
//% block.loc.nl="Sumo"
namespace Sumo {

    let speed = 50

    //% block="the field is %diameter cm in diameter"
    //% block.loc.nl="het veld heeft een doorsnede van %diameter cm"
    export function setFieldDiameter(diameter: number) {
        SumoBuilder.setFieldDiameter(diameter)
    }

    //% block="set the near distance to %distance cm"
    //% block.loc.nl="stel de afstand dichtbij in op %distance cm"
    export function setNearDistance(distance: number) {
        SumoBuilder.setNearDistance(distance)
    }

    //% block="wait until the robot is %waitfor"
    //% block.loc.nl="wacht tot de robot %waitfor is"
    export function waitLocation(waitfor: WaitLocation) {
        Match.setWaitingFor(waitfor | WaitFor.OutOfField)
        Match.waitFor()
        Match.clearWaitFor(WaitFor.All)
    }

    //% block="wait until the opponent is %waitfor"
    //% block.loc.nl="wacht tot de tegenstander %waitfor is"
    export function waitDistance(waitfor: WaitDistance) {
        Match.setWaitingFor(waitfor | WaitFor.OutOfField)
        Match.waitFor()
        Match.clearWaitFor(WaitFor.All)
    }

    //% block="wait until the opponent is %waitfor"
    //% block.loc.nl="wacht tot de tegenstander %waitfor is"
    export function waitObservance(waitfor: WaitObservance) {
        Match.setWaitingFor(waitfor | WaitFor.OutOfField)
        Match.waitFor()
        Match.clearWaitFor(WaitFor.All)
    }

    //% block="put down opponent"
    //% block.loc.nl="zet de tegenstander neer"
    export function leverDown() {
        if (!Match.isPlaying()) return
        SumoBuilder.leverDown()
        NezhaBrick.servoAngle(ServoPort.S4, 180)
    }

    //% block="lever opponent"
    //% block.loc.nl="til de tegenstander op"
    export function leverUp() {
        if (!Match.isPlaying()) return
        NezhaBrick.servoAngle(ServoPort.S4, 210)
    }

    //% color="#00CC00"
    //% block="set speed to %speed \\%"
    //% block.loc.nl="stel de snelheid in op %speed \\%"
    //% speed.min=0 speed.max=100
    export function setSpeed(_speed: number) {
        speed = _speed
    }

    //% block="turn %rotation"
    //% block.loc.nl="draai %rotation"
    export function turn(rotation: Rotate) {
        SumoBuilder.turn(rotation, speed)
    }

    //% block="move %dir and %bend"
    //% block.loc.nl="rijd %dir en %bend"
    export function move(dir: Move, bend: Bend) {
        SumoBuilder.move(dir, speed, bend)
    }

    //% subcategory="Show"
    //% color="#FFCC44"
    //% block="tornado"
    //% block.loc.nl="tornado"
    export function tornado() {
        SumoBuilder.tornado()
    }

    //% subcategory="Show"
    //% color="#FFCC44"
    //% block="shake"
    //% block.loc.nl="schudden"
    export function shake() {
        SumoBuilder.shake()
    }
}
