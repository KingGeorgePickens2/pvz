oS.Init(
	{
		PName: [ostar1],
		ZName: [
			oZombie,
			oZombie2,
			oConeheadZombie,
			oCXZombie,
			oBucketheadZombie,
			oXBZombie,
			oJX,
			oJackinTheBoxZombie,
			oHeiFootballZombie,
		],
		PicArr: [
			"images/interface/backgroundLG.jpg",
			"images/interface/Stripe.png",
		],
		backgroundImage: "images/interface/backgroundLG.jpg",
		LF: [0, 3, 3, 3, 3, 3],
		CanSelectCard: 0,
		DKind: 0,
		LevelName: "3-5 Mini Game: Starfish Rolling",
		LvlEName: "35",
		LargeWaveFlag: { 10: $("imgFlag2"), 20: $("imgFlag1") },
		StartGameMusic: "LoonSkirmish",
		StaticCard: 0,
		LoadAccess: function (a) {
			NewImg(
				"dDave",
				"images/interface/Dave.webp",
				"left:0;top:81px",
				EDAll
			);
			NewEle("DivTeach", "div", 0, 0, EDAll);
			(function (d) {
				var b = arguments.callee,
					c = $("DivTeach");
				switch (d) {
					case 0:
						PlayAudio("crazydaveshort1");
						$("dDave").src = "images/interface/Dave3.webp";
						oSym.addTask(
							1,
							function () {
								$("dDave").src = "images/interface/Dave.webp";
								c.onclick = function () {
									oSym.addTask(10, b, [1]);
								};
							},
							[]
						);
						innerText(
							c,
							"I still remember the fun of playing petanque with Peter as a kid"
						);
						break;
					case 1:
						PlayAudio(
							"crazydavelong" + Math.floor(1 + Math.random() * 3)
						);
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.webp";
						oSym.addTask(
							2,
							function () {
								$("dDave").src = "images/interface/Dave.webp";
								c.onclick = function () {
									oSym.addTask(10, b, [2]);
								};
							},
							[]
						);
						innerText(
							c,
							"Now Peter's not in this damn place, come and play with me~"
						);
						break;
					case 2:
						PlayAudio(
							"crazydavelong" + Math.floor(1 + Math.random() * 3)
						);
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.webp";
						oSym.addTask(
							2,
							function () {
								$("dDave").src = "images/interface/Dave.webp";
								c.onclick = function () {
									oSym.addTask(10, b, [3]);
								};
							},
							[]
						);
						innerText(
							c,
							"However, this time we are not rolling balls, but starfish! ."
						);
						break;
					case 3:
						PlayAudio(
							"crazydavelong" + Math.floor(1 + Math.random() * 3)
						);
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.webp";
						oSym.addTask(
							2,
							function () {
								$("dDave").src = "images/interface/Dave.webp";
								c.onclick = function () {
									oSym.addTask(10, b, [4]);
								};
							},
							[]
						);
						innerText(
							c,
							"I believe this is a very fun thing to do!"
						);
						break;
					case 4:
						$("dDave").src = "images/interface/Dave2.webp";
						ClearChild($("DivTeach"));
						oSym.addTask(
							5,
							function () {
								ClearChild($("dDave"));
								a(0);
							},
							[]
						);
				}
			})(0);
		},
		StartGame: function () {
			NewEle(
				0,
				"div",
				"width:22px;height:502px;margin:75px 0 0 485px;position:absolute;z-index:1;background:url(images/interface/Stripe.png)",
				0,
				$("tGround")
			);
			StopMusic();
			PlayMusic((oS.LoadMusic = oS.StartGameMusic));
			SetHidden($("dSunNum"));
			oS.InitLawnMower();
			PrepareGrowPlants(function () {
				oP.Monitor({
					f: function () {
						(function () {
							var a = ArCard.length;
							if (a < 10) {
								var c = [ostar1],
									b = Math.floor(Math.random() * c.length),
									e = c[b],
									d = e.prototype,
									f = "dCard" + Math.random();
								ArCard[a] = { DID: f, PName: e, PixelTop: 600 };
								NewImg(
									f,
									d.PicArr[d.CardGif],
									"top:600px;width:100px;height:120px;cursor:pointer;clip:rect(auto,auto,60px,auto)",
									$("dCardList"),
									{
										onmouseover: function (g) {
											ViewPlantTitle(GetChoseCard(f), g);
										},
										onmouseout: function () {
											SetHidden($("dTitle"));
										},
										onclick: function (g) {
											ChosePlant(g, oS.ChoseCard, f);
										},
									}
								);
							}
							oSym.addTask(500, arguments.callee, []);
						})();
						(function () {
							var b = ArCard.length,
								a,
								c;
							while (b--) {
								(c = (a = ArCard[b]).PixelTop) > 60 * b &&
									($(a.DID).style.top =
										(a.PixelTop = c - 1) + "px");
							}
							oSym.addTask(5, arguments.callee, []);
						})();
					},
					ar: [],
				});
				oP.AddZombiesFlag();
				SetVisible($("dFlagMeter"));
			});
		},
	},
	{
		AZ: [
			[oZombie, 2, 1],
			[oZombie2, 2, 1],
			[oConeheadZombie, 1, 1],
			[oCXZombie, 1, 11],
			[oBucketheadZombie, 1, 1],
			[oXBZombie, 1, 1],
			[oJX, 1, 1],
			[oJackinTheBoxZombie, 1, 1],
			[oHeiFootballZombie, 1, 17],
		],
		FlagNum: 20,
		FlagToSumNum: {
			a1: [3, 5, 9, 10, 13, 15, 19],
			a2: [4, 7, 12, 20, 13, 16, 21, 40],
		},
		FlagToMonitor: { 9: [ShowLargeWave, 0], 19: [ShowFinalWave, 0] },
		FlagToEnd: function () {
			NewImg(
				"imgSF",
				"images/Card/Plants/SeaAnemone.png",
				"left:627px;top:325px;clip:rect(auto,auto,60px,auto)",
				EDAll,
				{
					onclick: function () {
						GetNewCard(this, oSeaAnemone, 36);
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
	},
	{
		GetChoseCard: function (b) {
			var a = ArCard.length;
			while (a--) {
				ArCard[a].DID == b && ((oS.ChoseCard = a), (a = 0));
			}
			return oS.ChoseCard;
		},
		ChosePlant: function (a, b) {
			PlayAudio("seedlift");
			a = window.event || a;
			var f = ArCard[oS.ChoseCard],
				e = a.clientX + EBody.scrollLeft || EElement.scrollLeft,
				d = a.clientY + EBody.scrollTop || EElement.scrollTop,
				c = f.PName.prototype;
			oS.Chose = 1;
			EditImg(
				NewImg(
					"MovePlant",
					c.PicArr[c.StaticGif],
					"left:" +
						e -
						0.5 * (c.beAttackedPointL + c.beAttackedPointR) +
						"px;top:" +
						d +
						20 -
						c.height +
						"px;z-index:254",
					EDAll
				).cloneNode(false),
				"MovePlantAlpha",
				"",
				{
					visibility: "hidden",
					filter: "alpha(opacity=40)",
					opacity: 0.4,
					zIndex: 30,
				},
				EDAll
			);
			SetAlpha($(f.DID), 50, 0.5);
			SetHidden($("dTitle"));
			GroundOnmousemove = GroundOnmousemove1;
		},
		CancelPlant: function () {
			ClearChild($("MovePlant"), $("MovePlantAlpha"));
			oS.Chose = 0;
			SetAlpha($(ArCard[oS.ChoseCard].DID), 100, 1);
			oS.ChoseCard = "";
			GroundOnmousemove = function () {};
		},
		GrowPlant: function (l, c, b, f, a) {
			var j = $("DivTeach");
			j && j.parentNode.removeChild(j);
			if (c > 347) {
				innerText(
					NewEle(
						"DivTeach",
						"div",
						"line-height:40px;font-size: 14px",
						0,
						EDAll
					),
					"The starfish fruit can only be placed on the left side of the red line!"
				);
				return false;
			}
			var i = oS.ChoseCard,
				g = ArCard[i],
				h = g.PName,
				k = h.prototype,
				d = g.DID,
				e;
			new h().Birth(c, b, f, a, l);
			ClearChild($("MovePlant"), $("MovePlantAlpha"));
			$("dCardList").removeChild((e = $(d)));
			e = null;
			ArCard.splice(i, 1);
			oS.ChoseCard = "";
			oS.Chose = 0;
			GroundOnmousemove = function () {};
		},
		ViewPlantTitle: function (a) {},
	}
);
