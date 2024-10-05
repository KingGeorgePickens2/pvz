oS.Init(
    {
        PName: [
            oPeashooter,
            oSunFlower,
            oCherryBomb,
            oWallNut,
            oPotatoMine,
            oSnowPea,
            oChomper,
            oRepeater,
            oPuffShroom,
            oSunShroom,
            oFumeShroom,
            oGraveBuster,
            oHypnoShroom,
            oScaredyShroom,
            oIceShroom,
            oDoomShroom,
            oLilyPad,
            oSquash,
            oThreepeater,
            oTangleKlep,
            oJalapeno,
            oSpikeweed,
            oTorchwood,
            oTallNut,
            oCactus,
            oPlantern,
            oSplitPea,
            oStarfruit,
            oPumpkinHead,
            oFlowerPot,
            oCoffeeBean,
            oGarlic,
            oSeaShroom,
            oOxygen,
            ostar,
            oTTS,
            oGun,
            oSeaAnemone,
            oGatlingPea,
            oGloomShroom,
            oTwinSunflower,
            oSpikerock,
            oTenManNut,
            oSnowRepeater,
            oCattail,
            oLotusRoot,
            oIceFumeShroom,
            oLaserBean,
        ],
        ZName: [
            oBalloonZombie,
            oZombie,
            oBucketheadZombie,
            oConeheadZombie,
            oCZombie,
            oCBucketheadZombie,
            oCConeheadZombie,
            oFootballZombie,
            oHeiFootballZombie,
            oJackinTheBoxZombie,
            oCJackinTheBoxZombie,
            oImp,
            oDancingZombie,
            oBackupDancer,
            oMustacheZombie,
            oXBZombie,
            oNewspaperZombie,
            oCNewspaperZombie,
        ],
        PicArr: (function () {
            return ["images/interface/backgroundwall.jpg"];
        })(),
        backgroundImage: "images/interface/backgroundwall.jpg",
        CanSelectCard: 1,
        LevelName: "常青之塔 33层",
        LvlEName: 182,
        SunNum: 7e3,
        LF: [0, 3, 3, 3, 3, 3, 3],
        StartGameMusic: "The Great Wall",
        LargeWaveFlag: { 5: $("imgFlag3"), 10: $("imgFlag1") },
        InitLawnMower: function () {
            CustomSpecial(oCleaner, 1, -1);
            CustomSpecial(oCleaner, 2, -1);
            CustomSpecial(oCleaner, 3, -1);
            CustomSpecial(oCleaner, 4, -1);
            CustomSpecial(oCleaner, 5, -1);
        },
    },
    {
        AZ: [
            [oBalloonZombie, 1, 1],
            [oZombie, 1, 1],
            [oBucketheadZombie, 1, 1],
            [oConeheadZombie, 1, 1],
            [oCZombie, 1, 1],
            [oCBucketheadZombie, 1, 1],
            [oCConeheadZombie, 1, 1],
            [oFootballZombie, 1, 1],
            [oHeiFootballZombie, 1, 1],
            [oJackinTheBoxZombie, 1, 1],
            [oCJackinTheBoxZombie, 1, 1],
            [oImp, 1, 1],
            [oDancingZombie, 1, 1],
            [oMustacheZombie, 1, 1][(oXBZombie, 1, 1)],
            [oNewspaperZombie, 1, 1],
            [oCNewspaperZombie, 1, 1],
        ],
        FlagNum: 10,
        FlagToSumNum: {
            a1: [24, 48, 77, 92, 112, 113, 120],
            a2: [24, 48, 77, 92, 112, 113, 135],
        },
        FlagToMonitor: { 4: [ShowLargeWave, 0], 9: [ShowFinalWave, 0] },
        FlagToEnd: function () {
            NewImg(
                "imgSF",
                "images/interface/trophy.png",
                "left:260px;top:233px",
                EDAll,
                {
                    onclick: function () {
                        SelectModal(184);
                    },
                }
            );
            NewImg(
                "PointerUD",
                "images/interface/PointerDown.gif",
                "top:185px;left:676px",
                EDAll
            );
        },
    }
);
