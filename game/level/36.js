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
			oOxygen,
			ostar,
			oTTS,
			oGun,
			oTenManNut,
			oSeaAnemone,
		],
		ZName: [
			oZombie,
			oZombie2,
			oConeheadZombie,
			oCXZombie,
			oJackinTheBoxZombie,
		],
		PicArr: (function () {
			return ["images/interface/backgroundLG.jpg"];
		})(),
		SunNum: 125,
		LF: [0, 3, 3, 3, 3, 3, 3],
		backgroundImage: "images/interface/backgroundLG.jpg",
		CanSelectCard: 1,
		DKind: 0,
		LevelName: "Level 4-6",
		LvlEName: 36,
		LargeWaveFlag: {
			10: $("imgFlag3"),
			20: $("imgFlag2"),
			30: $("imgFlag1"),
		},
		StartGameMusic: "Lg_pk",
	},
	{
		AZ: [
			[oZombie, 4, 1],
			[oZombie2, 1, 1],
			[oConeheadZombie, 2, 4],
			[oCXZombie, 1, 5, [5, 10, 15, 20, 25, 30]],
			[oJackinTheBoxZombie, 1, 10, [10, 20, 30]],
		],
		FlagNum: 30,
		FlagToSumNum: {
			a1: [3, 4, 5, 9, 13, 15, 19, 20, 23, 25],
			a2: [1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 10, 20],
		},
		FlagToMonitor: {
			9: [ShowLargeWave, 0],
			19: [ShowLargeWave, 0],
			29: [ShowFinalWave, 0],
		},
		FlagToEnd: function () {
			NewImg(
				"imgSF",
				"images/Card/Plants/Cactus.png",
				"left:627px;top:325px;clip:rect(auto,auto,60px,auto)",
				EDAll,
				{
					onclick: function () {
						GetNewCard(this, oCactus, 37);
					},
				}
			);
			NewImg(
				"PointerUD",
				"images/interface/PointerDown.webp",
				"top:290px;left:636px",
				EDAll
			);
		},
	}
);
