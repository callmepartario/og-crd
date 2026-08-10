 const version = "1.00e";
 const updated = "2026-08-10";

// reader mode
var readerPreference = localStorage.getItem('readerMode');

// lists
let printerror = "<p class='btn btn-danger'>!ERR</p>";
// sourcesList CRD, CCR, CGMG
const sectionList = [
	{ name: "Introduction", }, 
	{ name: "Player Characters", }, 
	{ name: "Genres", }, 
	{ name: "Rules", }, 
	{ name: "Indices", }, 
];
const glossaryList = [
	{ dt: "ability", def: "abilities", }, 
	{ dt: "action", def: "action", }, 
	{ dt: "action and adventure", def: "genre-action-and-adventure", }, 
	{ dt: "&mldr;and there's magic", def: "genre-and-theres-magic", }, 
	{ dt: "area attack", def: "attack", }, 
	{ dt: "area", def: "range", }, 
	{ dt: "armor", def: "armor", }, 
	{ dt: "artifact", def: "artifacts", }, 
	{ dt: "asset", def: "asset", }, 
	{ dt: "attack", def: "attack", }, 
	{ dt: "background skill", def: "core-character", }, 
	{ dt: "block", def: "defend", }, 
	{ dt: "building", def: "crafting", }, 
	{ dt: "character advancement", def: "character-advancement", }, 
	{ dt: "character arc", def: "earning-xp", }, 
	{ dt: "character", def: "character", }, 
	{ dt: "combat skill", def: "skill", }, 
	{ dt: "cooperative actions", def: "help", }, 
	{ dt: "core character", def: "core-character", }, 
	{ dt: "crafting", def: "crafting", }, 
	{ dt: "crime thriller", def: "genre-crime-thriller", }, 
	{ dt: "currency", def: "currency", }, 
	{ dt: "cypher crafting", def: "resource-points", }, 
	{ dt: "cypher limit", def: "cyphers", }, 
	{ dt: "cypher", def: "cyphers", }, 
	{ dt: "damage to NPCs", def: "damage-to-npcs", }, 
	{ dt: "damage to objects", def: "damage-to-objects", }, 
	{ dt: "damage to PCs", def: "damage-to-pcs", }, 
	{ dt: "defend", def: "defend", }, 
	{ dt: "defense roll", def: "defend", }, 
	{ dt: "descriptor", def: "descriptor", }, 
	{ dt: "difficulty", def: "difficuty", }, 
	{ dt: "distance", def: "range", }, 
	{ dt: "distraction", def: "help", }, 
	{ dt: "dodge", def: "defend", }, 
	{ dt: "draw the attack", def: "help", }, 
	{ dt: "dungeon fantasy", def: "genre-dungeon-fantasy", }, 
	{ dt: "duration", def: "time", }, 
	{ dt: "earning XP", def: "earning-xp", }, 
	{ dt: "ease", def: "difficulty", }, 
	{ dt: "Edge", def: "edge", }, 
	{ dt: "Effort", def: "effort", }, 
	{ dt: "epic fantasy", def: "genre-epic-fantasy", }, 
	{ dt: "equipment", def: "equipment", }, 
	{ dt: "espionage", def: "genre-espionage", }, 
	{ dt: "experience points (XP)", def: "experience-points-xp", }, 
	{ dt: "expert", def: "skill", }, 
	{ dt: "explosive weapons", def: "weapon", }, 
	{ dt: "extra action on your turn", def: "action", }, 
	{ dt: "fantasy", def: "genre-fantasy", }, 
	{ dt: "First action", def: "action", }, 
	{ dt: "focus", def: "focus", }, 
	{ dt: "Follow-up action", def: "action", }, 
	{ dt: "followers", def: "followers", }, 
	{ dt: "freely use", def: "skill", }, 
	{ dt: "genre skill", def: "skill", }, 
	{ dt: "genre", def: "genre", }, 
	{ dt: "GM intrusion", def: "earning-xp", }, 
	{ dt: "guarding", def: "defend", }, 
	{ dt: "hard science fiction", def: "genre-hard-science-fiction", }, 
	{ dt: "heavy weapon", def: "weapon", }, 
	{ dt: "help", def: "help", }, 
	{ dt: "hinder", def: "difficulty", }, 
	{ dt: "historical", def: "genre-historical", }, 
	{ dt: "horror", def: "genre-horror", }, 
	{ dt: "illumination", def: "illumination", }, 
	{ dt: "inability", def: "skill", }, 
	{ dt: "initiative", def: "time", }, 
	{ dt: "Intellect", def: "stat", }, 
	{ dt: "interacting with NPCs", def: "interact", }, 
	{ dt: "Last action", def: "action", }, 
	{ dt: "level", def: "difficulty", }, 
	{ dt: "light weapon", def: "weapon", }, 
	{ dt: "major effect", def: "roll", }, 
	{ dt: "manifest cypher", def: "cyphers", }, 
	{ dt: "medium weapon", def: "weapon", }, 
	{ dt: "Might", def: "stat", }, 
	{ dt: "minor effect", def: "roll", }, 
	{ dt: "movement", def: "range", }, 
	{ dt: "nonplayer character (NPC)", def: "character", }, 
	{ dt: "player character (PC)", def: "character", }, 
	{ dt: "player intrusion", def: "spending-xp", }, 
	{ dt: "Pool", def: "stat", }, 
	{ dt: "postapocalypse", def: "genre-postapocalypse", }, 
	{ dt: "power shift", def: "power-shift", }, 
	{ dt: "price category", def: "currency", }, 
	{ dt: "rallying", def: "rallying", }, 
	{ dt: "range", def: "range", }, 
	{ dt: "ready action", def: "action", }, 
	{ dt: "real world", def: "genre-real-world", }, 
	{ dt: "recovery", def: "recovery", }, 
	{ dt: "repairing", def: "crafting", }, 
	{ dt: "reroll", def: "spending-xp", }, 
	{ dt: "rescue", def: "genre-rescue", }, 
	{ dt: "resource points", def: "resource-points", }, 
	{ dt: "rest", def: "recovery", }, 
	{ dt: "retrying", def: "roll", }, 
	{ dt: "roll", def: "roll", }, 
	{ dt: "round", def: "time", }, 
	{ dt: "science fiction", def: "genre-science-fiction", }, 
	{ dt: "shield", def: "armor", }, 
	{ dt: "skill", def: "skill", }, 
	{ dt: "space opera", def: "genre-space-opera", }, 
	{ dt: "special damage", def: "damage-to-pcs", }, 
	{ dt: "special rolls", def: "roll", }, 
	{ dt: "specialized", def: "skill", }, 
	{ dt: "Speed", def: "stat", }, 
	{ dt: "spending XP", def: "spending-xp", }, 
	{ dt: "splitting XP", def: "splitting-xp", }, 
	{ dt: "stat", def: "stat", }, 
	{ dt: "superheroes", def: "genre-superheroes", }, 
	{ dt: "swords &amp; sorcery", def: "genre-swords-and-sorcery", }, 
	{ dt: "take the attack", def: "help", }, 
	{ dt: "target number", def: "difficulty", }, 
	{ dt: "task", def: "task", }, 
	{ dt: "tier-restricted skill", def: "skill", }, 
	{ dt: "tier", def: "tier", }, 
	{ dt: "touch attack", def: "attack", }, 
	{ dt: "trained", def: "skill", }, 
	{ dt: "treatment", def: "treatment", }, 
	{ dt: "turn", def: "time", }, 
	{ dt: "type", def: "type", }, 
	{ dt: "weapons", def: "weapon", }, 
	{ dt: "wound", def: "wound", }, 
	{ dt: "XP", def: "experience-points-xp", }, 
]
const characteristicList = [
	{ dt: "Tier", ref: ["CCR 11", "CCR 313",], dd: ["A measure of accumulated experience, starting at 1. Tier 1 characters are reasonably accomplished and capable&mdash;for example, a college student or person in a typical job that requires some experience or training. As you travel, experience things, and accomplish goals, you gain <a href='#define-experience-points-xp'>experience points</a> and purchase <a href='#define-character-advancement'>character advancements</a>, eventually increasing your tier (to a maximum of 6).",], }, 
	{ dt: "Stat", ref: ["CCR 11", "CCR 287&ndash;288", "CCR 291", ], dd: ["Your statistics or \"stats.\" are Might, Speed, and Intellect. Each has two components: Pool and Edge.", ["<strong>Might:</strong> Use this stat for physical <a href='#define-tast'>tasks</a> that require strength, power, or endurance.", "<strong>Speed:</strong> Use this stat for physical <a href='#define-tast'>tasks</a> that require agility, flexibility, or fast reflexes.", "<strong>Intellect:</strong> Use this stat for mental <a href='#define-tast'>tasks</a> that require force of will, memory, or mental power.", "<strong>Pool:</strong> Your Might, Speed, and Intellect each have a Pool of points. Spend Pool points for to use <a href='#define-effort'>Effort</a> or activate abilities.", "<strong>Edge:</strong> Subtract your edge from spent Pool point costs for a task&mdash;For example, if you spend 1 Intellect point to activate <a href='#define-ability-blast'>Blast</a>, and spend 3 Intellect points to apply a level of <a href='#define-effort'>Effort</a>, the total cost is 4 Intellect points. If your Intellect Edge is 1, the total cost for the is reduced to 3 Intellect points."], ], }, 
	{ dt: "Skill", ref: ["CCR 12", "CCR 18&ndash;19", "CCR 287", "CCR 290",], dd: ["Skills represent knowledge you can improve to lower the <a href='#define-difficulty'>difficulty</a> of relevant <a href='#define-task'>tasks</a>.", ["<strong>Genre Skills:</strong> Each genre has its own list of skills, and more skills are possible. In most campaigns, fluency in a language is a skill.", "<strong>Combat Skills:</strong> Skills related to <a href='#define-attack'>attacking</a> or <a href='#define-defend'>defending</a>. Combat skills are tier-restricted.", "<strong>Tier-Restricted:</strong>  You must be <a href='#define-tier'>tier 2</a> to become trained, and <a href='#define-tier'>tier 4</a> to become specialized in a tier-restricted skill. Abilities can create exceptions&mdash;for example, <a href='#define-ability-expert-combatant'>Expert Combatant</a>.", ], ], }, 
	{ dt: "Asset", ref: ["CCR 12", "CCR 287", "CCR 290",], dd: ["An asset is something that eases <a href='#define-difficulty'>difficulty</a> in a meaningful way&mdash;for example:", ["Relevant, useful objects&mdash;for example, a crowbar when trying to force open door", "Advantageous situations, positioning, conditions, or information", "<a href='#define-help'>Help</a> from a PC, <a href='#define-followers'>follower</a>, or an <a href='#define-interact'>NPC ally</a>", ], "<strong><em>Assets can't ease a task more than two steps.</em></strong>", ], }, 
	{ dt: "Effort", ref: ["CCR 12", "CCR 287&ndash;288", "CCR 291"], dd: ["You can pay 3 points from the appropriate stat Pool to apply one level of Effort on a task. Your Effort score is the maximum number of levels of Effort you can apply (up to a maximum of 6). You can apply Effort for each task or action, but be careful how quickly you exhaust your <a href='#define-stat'>stat</a> Pool points.", ["<strong>Ease:</strong> You can apply a level of Effort to ease the <a href='#define-difficulty'>difficulty</a> of a <a href='#define-task'>task</a>.", "<strong>Damage:</strong> Apply a level of Effort to increase the damage of an attack by 3&mdash;if it succeeds.", "<strong>Ability Effects:</strong> Some <a href='#define-abilities'>abilities</a> allow you to apply Effort in unique ways&mdash;for example, increasing the maximum level of a foe you can affect by 1.", "<strong>Multiple Levels of Effort</strong>: Each additional level Effort costs 2 points, so the cost from Effort is 1 + 2 &times; levels of Effort used. You can assign each level of Effort's effects separately.", "<strong>Free Level of Effort:</strong> A free level of Effort doesn't cost Pool points, and allows you to exceed your Effort score. It doesn't allow you to exceed the maximum of six levels of Effort on a <a href='#define-task'>task</a>.", ], "<strong><em>Effort can't ease a task more than six steps.</em></strong>", ], sidebar: ["Effort works slightly differently for <a href='#define-attack'>area attacks</a>."], }, 
	{ dt: "Wound", ref: ["CCR 11&ndash;12", "CCR 299"], dd: ["Anything that hurts you gives you a wound. There are three ways to remove a wound: <a href='#define-rallying'>rallying</a>, <a href='#define-treatment'>treatment</a>, and <a href='#define-recoveries'>recoveries</a>. Some abilities and cyphers remove wounds or reduce severity&mdash;for example, turning a major wound into a moderate wound.", ], }, 
	{ dt: "Recovery", ref: ["CCR 11&ndash;12", "CCR 300",], dd: ["PCs begin with four recoveries each day: one action, ten minutes, one hour, and ten hours. You can use your recoveries in any order, but a ten-hour recovery usually means you're stopping to eat and sleep, and begin a new day afterward.", "When you finish a recovery, roll a d6 and add your <a href='#define-tier'>tier</a>, then divide the result as recovered points to your <a href='#define-stat'>stat</a> Pools.", ], sidebar: ["Some abilities grant you additional recoveries or add additional points recovered when you take a recovery&mdash;for example, <a href='#define-ability always-mighty'>Always Mighty</a>."], }, 
	{ dt: "Currency", ref: ["CCR 237",], dd: ["Five price categories represents an increasing factor of 10&mdash;for example, a moderately priced item is about ten times the cost of an inexpensive item. The setting's context matters&mdash;for example, a motorcycle's worth varies based on its novelty, viability as a transport, availability of gasoline, the availability of hover-bikes, and its status as a collector's item.", ], }, 
	{ dt: "Equipment", ref: ["CCR 13", "CCR 236&ndash;249",], dd: ["Equipment plays only a small role. In general, you should focus more on what you can do and less than on what you have&mdash;or don't have. Still, sometimes it's important to know you've got enough rope or what kind of gun is at your hip. If you have a <a href='#define-type'>type</a> or <a href='#define-focus'>focus</a>, they might determine additional <a href='#define-weapon'>weapons</a> and <a href='#define-armor'>armor</a> you can <a href='#define-skill'>freely use</a>.", ["<strong>Easily destroyed:</strong> Items break through frequent use, over time, or on a GM intrusion&mdash;for example, a healer's kit, disguise kit, or box of ammunition.", "<strong>Level:</strong> Most equipment is level 4, but a different qualities or technologies and qualities means items can range in level.", ], ], }, 
	{ dt: "Abilities", ref: ["CCR 44",], dd: ["Your <a href='#define-type'>type</a> and <a href='#define-focus'>focus</a> give you abilities&mdash;unique things your character can do.", ["<strong>Name:</strong> Almost every ability has a unique name. If your <a href='#define-type'>type</a> and <a href='#define-focus'>focus</a> provide abilities with identical names, your <a href='#define-type'>type</a> supersedes your <a href='#define-focus'>focus</a>, and the ability counts toward <a href='#define-focus'>focus</a> ability requirements.", "<strong>Cost:</strong> If an ability costs <a href='#define-stat'>stat</a> Pool points to activate, it will be listed after the ability. Some abilities offer a choice between two Pools. You can choose which Pool to pay the total cost from. If an ability has a \"+\" after the cost, you can spend additional points or levels of Effort&mdash;for example, to affect additional targets or increase duration.", "<strong>Effect:</strong> What the ability does. Some abilities have improved effects at a minimum <a href='#define-tier'>tier</a>. Affecting an unwilling target usually requires an attack roll. You can end any effects you create as an extra action on your turn.", "<strong>Effort:</strong> These options cost one level of <a href='#define-effort'>Effort</a>. You can apply more than one level of Effort to further increase the base benefit unless stated otherwise.", "<strong>Action or Enabler:</strong> The last part of the ability description tells you how much time it takes to activate the ability.", "<strong>Recovery:</strong> Some abilities' effects persist until you being to take a recovery.", ], ], }, 
	{ dt: "Core Character", ref: ["CCR 13",], dd: ["", ], }, 
	{ dt: "Descriptor", ref: ["CCR 24",], dd: ["A descriptor is a general, easily encapsulated means of describing yourself&mdash;for example, <a href='#define-descriptor-cautious'>Cautious</a>, <a href='#define-descriptor-resilient'>Resilient</a>, or <a href='#define-descriptor-strong'>Strong</a>. It's adjective of your character sentence <em>\"I am an adjective noun who verbs\"</em>.", "Descriptors are a one-time package +2 to one of your <a href='#define-stat'>stat Pools</a> and training in one of two <a href='#define-skill'>skills</a>.", "Descriptors are important for a real-world character, but are eventually overshadowed by <a href='#define-type'>type</a> and <a href='#define-focus'>focus</a> in other genres.", ], }, 
	{ dt: "Species", ref: ["CCR 85",], dd: ["Many genres only feature <a href='#define-species-human'>Humans</a> as PCs. If your game includes other species, add your species to your character sentence: <em>\"I am an adjective species noun who verbs\"</em>&mdash;for example, <em>\"I am a Jovial Dwarf Barbarian who Never Says Die\"</em>. Species offer a one-time package of characteristics for your character, much like a <a href='#define-descriptor'>descriptor</a>.", ], }, 
	{ dt: "Type", ref: ["CCR 20",], dd: ["In many genres, types is a PC's core identity, and defines their role in the setting. It's the verb of the sentence <em>\"I am an adjective noun who verbs\"</em>.", "Type provides an array of benefits&mdash;for example:", ["Additional <a href='#define-wound'>wound</a> capacity", "Increases to <a href='#define-stat'>stats</a>", "<a href='#define-skill'>Skills</a> that allow you to <a href='#define-skill'>freely use</a> weapons or armor", "Abilities that improve as you reach new <a href='#define-tier'>tiers</a>.", "Equipment suggestions (and the occasional piece of extra equipment)", "Background options"]], }, 
	{ dt: "Focus", ref: ["CCR 143&ndash;145",], dd: ["Your focus helps make your character unique among the other PCs, even if you share a <a href='#define-type'>type</a>. No two PCs should have the same focus. It's the verb of the sentence <em>\"I am an adjective noun who verbs\"</em>.", "Each focus includes a short description, genre theme suggestions, GM intrusion suggestions, and any equipment required for you to use your focus abilities.", ["<em>At tier 1:</em> Choose two tier 1 abilities from your focus.", "<em>At tier 2, 3, 4, 5 and 6:</em> Choose another focus ability from your tier or lower. Some abilities require you to have another focus ability in order for you to choose them. A few abilities allow you to gain them more than once."], ], }, 
	{ dt: "Followers", ref: ["CCR 307",], dd: ["A follower is someone who you have inspired, asked, created, or otherwise recruited to help you with a variety of endeavors. You can gain followers from a type or focus ability&mdash;for example <a href='#define-ability-beast-companion'>Beast Companion</a>.", ["<strong>Level:</strong> A follower's damage is equal to their <a href='#define-difficulty'>level</a>. Their <a href='#define-damage-to-npcs'>Health</a> is their <a href='#define-difficulty'>level</a> &times; 3.", "<strong>Modifications:</strong> Modifications increase a follower's effective level for relevant tasks&mdash;for example, a level 2 scout follower with modifier for <a href='#define-skill-perception'>perception</a> accomplishes related tasks as if they were level 3.", "<strong>Follower Assets:</strong> Your followers help you with actions you're taking, providing an <a href='#define-asset'>asset</a> on relevant tasks. If your follower's level or modification for the task is 5 or higher, their help provides two assets.", "<strong>Follower Progression:</strong> Every two tiers you gain after acquiring a follower, their level increases by 1. Abilities provide another way of increasing follower level.", "<strong>Losing Followers:</strong> If lose a follower, you can usually replace them by spending <a href='#define-resource-points'>resource points</a>. Any level increases or other improvements apply to the replacement."], ], }, 
	{ dt: "Cyphers", ref: ["CCR 12", "250&ndash;252",], dd: ["Cyphers are like single-use abilities. In some settings, cyphers are physical items&mdash;for example, a magic potion or high-tech gizmo, but they're not <a href='#define-equipment'>equipment</a>. Cyphers mean you always have a new trick up your sleeve each time for each challenge. Individual cyphers are listed in the <a href='#cypher-tables'>Cypher Tables</a>.", ], ddomit: ["Your cypher limit is the maximum number of cyphers you can have.", ["<strong>Standard cyphers:</strong> Memorable things a realistic character in a story could do. The GM determines when you gain standard cyphers&mdash;for example, during a one-hour <a href='#define-recoveries'>recovery</a>. Standard cyphers are instant: using one isn't an action. For example, you can use a <a href='#define-cypher-combat-enhancer'>combat enhancer</a> just before you make an attack or defense roll.", "<strong>Nonstandard cyphers:</strong> Create ongoing effects with an assigned duration.", "<strong>Manifest:</strong> Have a physical form and deliver supernatural effects&mdash;for example, a magic potion that turns you invisible, or a mysterious device that teleports you a hundred miles. A few types and foci allow you to choose a <a href='#random-manifest-cyphers'>manifest cypher</a> as an ability with a <a href='#define-stat'>Pool</a> point cost.", "<strong>Power Boost:</strong> Increase, modify, or improve abilities&mdash;for example, burst boost turns a single-target attack into an area attack. These are instant effects that only affects one task, but might have a physical form.", "<strong>Cypher Level:</strong> Standard and nonstandard cyphers are level 4 effects. Manifest cyphers are level 6 effects.", ], "Each cypher's description includes:", ["<strong>Name:</strong> Every cypher has a name, that summarizes its theme.", "<strong>Effect:</strong> This is what the cypher does. If you use an asset-granting cypher to help another character, they gain the cypher's assets, and that number of assets is their asset limit for the task. If you're trying to affect an unwilling target, you must succeed an attack roll.", "<strong>Explanation:</strong> Story-based suggestions for how to explain standard and nonstandard cyphers.", "<strong>Genre Items:</strong> Genre-based suggestions for a manifest cypher's form.", ], ], sidebar: ["Let the GM know when you're out of cyphers or haven't been at your cypher limit for a while. Even the best GMs forget!", ], },
	{ dt: "Artifacts", ref: ["CCR 239",], dd: ["Artifacts are like <a href='#define-cyphers'>cyphers</a> in that they're more like special abilities than <a href='#define-equipment'>equipment</a>, but they can be used more than once.", ["<strong>Depletion:</strong> When you use an artifact, you might have to roll for depletion&mdash;for example, \"1&ndash;3 in 1d20\". If your roll result is in the depletion range, the artifact works, but can't be used again.", ], ], },
	{ dt: "Experience Points (XP)", ref: ["CCR 285&ndash;286", "CCR 309", "CCR 313",], dd: ["You <a href='#define-earning-xp'>earn XP</a> in ways the GM decides. In a typical session, you gain 4 XP, but XP is not a goal unto itself. Instead, they represent how <em>experience</em>&mdash;time, blood, sweat, an tears&mdash;make you more skilled, powerful, and <em>interesting</em> character.", "You can <a href='#define-spending-xp'>spend XP</a> on rerolls, player intrusions, lucky shots, and <a href='#define-character-advancement'>character advancement</a>.", ], }, 
	{ dt: "Character Advancement", ref: ["CCR 313", "CCR 317"], dd: ["You can spend 4 <a href='#define-experience-points-xp'>XP</a> to purchase one of the following main character advancements. You can purchase each once per <a href='#define-tier'>tier</a>:", ["<strong>Increasing Capabilities:</strong> Gain 4 points to divide among your stat <a href='#define-stat'>Pools</a>.", "<strong>Moving Toward Perfection:</strong> Gain +1 to one stat's <a href='#define-stat'>Edge</a>.", "<strong>Extra Effort:</strong> Gain +1 to your <a href='#define-effort'>Effort</a> score.", "<strong>Skill:</strong> Become trained in a <a href='#define-skill'>skill</a> one of your abilities that requires a roll. <a href='#define-skill'>Tier-restricted skills</a> apply.", ], "Once each <a href='#define-tier'>tier</a>, you can purchase one of the following advancements instead:", ["<strong>Recovery:</strong> Add +2 to your <a href='#define-recovery'>recovery</a> rolls.", "<strong>Focus:</strong> Choose another <a href='#define-focus'>focus</a> ability of your tier or lower whose requirements you meet.", "<strong>Armor:</strong> Be able to <a href='#define-skill'>freely use</a> all kinds of <a href='#define-armor'>armor</a>.", "<strong>Weapons:</strong> Be able to <a href='#define-skill'>freely use</a> all kinds of <a href='#define-weapon'>weapons</a>.", "<strong>Genre:</strong> If you are <a href='#define-tier'>tier 3</a> or higher, choose a <a href='#define-genre'>genre</a> ability.", ], "Each time you purchase a character advancement, you gain 1 resource point.", ["<em>At tier 3:</em> Gain 2 resource points instead.", "<em>At tier 5:</em> Gain 3 resource points instead", ], "When you've purchased four advancements, you reach a new <a href='#define-tier'>tier</a>." ], sidebar: ["<strong>Milestone Advancement:</strong> Some GMs might award character advancements directly.", "<strong>Advancing Beyond Tier 6:</strong> The GM might allow you to purchase character advancements, gaining a new focus ability each tier, and a new genre ability every three tiers.", ], }, 
	{ dt: "Resource Points", ref: ["CCR 314&ndash;318",], dd: ["You can spend resource points to advance or accomplish goals&mdash;for example, learning a secret way into the castle, repairing a hyperdrive engine. Once you've put in the required time required, you can spend your resource points and accomplish the goal. Usually, no roll is required. Narratively, resource points represent available time, materials, luck, connections, or finances not listed on your character sheet.", ["<strong>Gaining Resource Points:</strong> Each time you gain a <a href='#define-character-advancement'>character advancement</a>, you gain resource points determined by your tier. The GM might award you additional resource points in the course of play.", "<strong>Spending Time:</strong> Most things you spend resource points on take an amount of time that fits the story and makes sense in the setting. This time could be resolved all at once or intertwined with the other events of the story.", "<strong>NPC Crafting:</strong> If you can't craft or repair something, you might be able to commission a skilled NPC to do it for you as a successful <a href='#define-interact'>interaction</a>. This requires the same time and resource points&mdash;for example, resource points spent on a blacksmith making you a sword can represent strange ingredients you've collected in your travels, healing a member of the blacksmith's family, or dealing with a group of thieves."], ], }, 
];
const resourceList = [
	{ name: "Befriend", cost: 2, plus: true, description: "You tentatively make a friend (such as a drinking buddy at a tavern, another adventurer, an artist or performer, and so on) who has a strong potential to remain your friend for a long time. Your friend might be convinced to accompany you on a single outing (such as a date, a trip, or perhaps even an adventure if they have that skill set). If this friend ends up hurt or worse while with you, the resource point cost for befriending anyone else doubles. The resource point cost of the friend is equal to twice the friend's level, up to a maximum of level 7. Work with your GM to determine your friend's details.", sidebar: ["Note that you can also make friends with NPCs you meet through the normal course of play without spending resource points. The \"befriend\" goal merely offers another option."], }, 
	{ name: "Carouse", cost: 0, description: "Most times, carousing merely means enjoying ale drinks at an inn, but occasionally, interesting things happen as a result.", sidebar: ["You can spend resource points to befriend someone, which is probably a necessary step in the Develop a Bond arc."], }, 
	{ name: "Collaborate", cost: 1, plus: true, description: "You help another character with their endeavor by contributing your resources to their effort. You both gain the benefit&mdash;sharing the new connection made, making the new friend, or learning the interesting information together.", sidebar: ["If the character you're helping is crafting an object, doing something that benefits only them, or otherwise pursuing a singular goal, don't contribute your resource points on the collaboration unless you just want to help (and not because you feel obligated or expect something in return).", ], }, 
	{ name: "Rest", cost: 0, description: "Resting, relaxing, visiting friends and/or loved ones, or otherwise taking it easy.", }, 
	{ name: "Craft Artifact", cost: 5, plus: true, description: "If you are specialized or expert in crafting, you can create an artifact appropriate to your genre of up to level 5. The artifact usually only grants a single benefit, such as easing a particular task or attack, or inflicting additional damage if an attack hits. The Cypher GM's Guide has many examples of simple artifacts; work with your GM to figure out the details of what you can make.", }, 
	{ name: "Craft Cypher", cost: 1, plus: true, description: "You can craft a specific manifest cypher appropriate to your genre from the list of manifest cyphers. Your crafting skill determines the power level of cypher you can craft, and the power level determines the resource point cost.", }, 
	{ name: "Craft Object", cost: 1, description: "If you are trained in crafting, you craft an item appropriate to your genre of up to level 4. This might be a piece of furniture, a weapon, an art object, a garment, and so on (but not a cypher or artifact). Higher-level and higher-technology items cost more resource points and require at least specialization in crafting; work with your GM for the point cost and details.", sidebar: ["Obviously, you need to be trained in an appropriate kind of crafting to create or repair something. Being trained in tailoring doesn't help you forge a sword, and vice versa."], }, 
	{ name: "Make a Contact", cost: 1, plus: true, description: "You make a useful contact that may help you in one future task, such as a local blacksmith, the innkeeper, a guild rep for the starpilot's union, the magistrate, and so on. The contact isn't your ally, but they slip you a warning, give you a heads up when something interesting happens, give you a discount on a service, or something similar. The contact's level is 3 if you spend 1 resource point, 5 if you spend 2 points, and 7 if you spend 3 points. You can't usually make a contact higher than level 7 using resource points.", }, 
	{ name: "Make Investment", cost: 1, description: "You invest some funds (at least an expensive amount) in an NPC's business, expedition, or other venture. If things go well with the venture, you might earn dividends (regular income) from it in the future.", }, 
	{ name: "Repair Object", cost: 1, description: "If you are trained in crafting, you repair an item appropriate to your genre of up to level 4. The repairs you can do depend on the genre you're playing. For example, if playing in a modern real-world game, you could repair a broken or failing engine, an electrical outlet, an air conditioner, and so on. If you're playing in a science fiction game, you can repair more complicated genre-appropriate items such as a water purifier, hovercar, blaster weapon, ship's hyperdrive, and so on.", }, 
	{ name: "Research", cost: 1, plus: true, description: "You learn a useful piece of information, such as a demon's name, the general layout of an important place like a castle or battlecruiser, who you really need to talk to in order to begin negotiations, a computer password, and so on. The higher the level of information you wish to learn (usually equal to the level of the most important NPC involved or the level of the secret the GM determines), the higher the resource point cost.", }, 
	{ name: "Restore Follower", cost: 1, plus: true, description: "If your follower dies, is destroyed, is severely incapacitated, or is otherwise lost, you can spend resource points to revive, replace, heal, or rediscover the follower, returning them to their normal healthy and active state. This resource point cost is half the follower's level (minimum 1). How much time it takes depends on the ability that gave you the follower (usually several days); if the ability doesn't specify how much time it takes, you need to spend about a week.", }, 
];
const playerintrusionList = [
	{ dt: "Advantageous Malfunction", dd: "A dangerous device malfunctions before it can affect you. It might harm the user or one of their allies for a round, or activate a dramatic and distracting side effect for a few rounds.", },
	{ dt: "Convenient Idea", dd: "A flash of insight provides you with a clear answer or suggests a course of action with regard to an urgent question, problem, or obstacle you're facing.", },
	{ dt: "Friendly NPC", dd: "An NPC you don't know, someone you don't know that well, or someone you know but who hasn't been particularly friendly in the past chooses to help you, though they don't necessarily explain why. Maybe they'll ask you for a favor in return afterward, depending on how much trouble they go to.", },
	{ dt: "Inexplicably Unbroken", dd: "An inactive, ruined, or presumed-destroyed device temporarily activates and performs a useful function relevant to the situation. This is enough to buy you some time for a better solution, alleviate a complication that was interfering with your abilities, or just get you one more use out of a depleted cypher or artifact.", },
	{ dt: "Old Friend", dd: "A comrade in arms from your past shows up unexpectedly and provides aid in whatever you're doing. They are on a mission of their own and can't stay longer than it takes to help out, chat for a while after, and perhaps share a quick meal.", },
	{ dt: "Perfect Setup", dd: "You're fighting at least three foes and each one is standing in exactly the right spot for you to use a move you trained in long ago, allowing you to attack all three as an action. Make a separate attack roll for each foe.", },
	{ dt: "Perfect Suggestion", dd: "A follower or other already-friendly NPC suggests a course of action with regard to an urgent question, problem, or obstacle you're facing.", },
	{ dt: "React to a GM Intrusion", dd: "After a GM intrusion, you could decide to use your next turn to react to the GM intrusion in a way that changes the story complication that the GM just introduced into something that improves your situation.", },
	{ dt: "Serendipitous Landmark", dd: "Just when it seems like you've lost the path, something suggests to you the best path forward from this point, such as a trail marker, a landmark, or simply the way the terrain or corridor changes.", },
	{ dt: "Unexpected Gift", dd: "An NPC hands you a physical gift you were not expecting, one that helps put the situation at ease if things seem strained, or provides you with a new insight for understanding the context of the situation if there's something you're failing to understand or grasp.", },
	{ dt: "Weak Strain", dd: "The poison or disease turns out not to be as debilitating or deadly as it first seemed, and the wounds it inflicts are reduced by one severity.", },
	{ dt: "Weapon Break", dd: "Your foe's weapon has a weak spot. In the course of the combat, it quickly becomes damaged and loses 1 to 3 levels.", },
];
const gmintrusionList = [
	"The character's weapon slips from their grip and skitters across the floor.", 
	"The rope the character is climbing begins to fray.", 
	"The character slips on slick rocks by the river's edge and falls into the rushing water.", 
	"The NPC a character is trying to charm gets an important phone call that interrupts the whole conversation.", 
	"The characters' car gets a flat tire in the middle of racing to somewhere important.", 
	"A foe becomes enraged and makes an additional, unexpected attack out of initiative order.", 
	"Reinforcements show up for the bad guys.", 
];
const minoreffectsList = [
	{ dt: "Damage object", dd: "Your attack can harm the foe and an object of your choice they are holding. Add +3 damage to your total, then split your damage between the foe and the object." }, 
	{ dt: "Distract", dd: "For one round, all of your foe's tasks are hindered.", }, 
	{ dt: "Knock back", dd: "Your foe is knocked or forced back a few feet. Most of the time, this doesn't matter much, but if the fight takes place on a ledge or next to a pit of lava, it might be significant." }, 
	{ dt: "Move past", dd: "As an extra action on your turn, you can move a short distance at the end of your attack. For example, you could use this to get past a foe guarding a door." }, 
	{ dt: "Strike a specific body part", dd: "You strike a specific spot on the defender's body. The GM rules what special effect, if any, results. For example, hitting a tentacle wrapped around an ally might ease the ally's escape task by two steps. Hitting a foe in the eye might blind it for one round. Hitting a creature in its one vulnerable spot might bypass its defenses against your attack.", }, 
];
const majoreffectsList = [
	{ dt: "Disarm", dd: "The foe drops one object that it is holding.", }, 
	{ dt: "Impair", dd: "For the rest of the combat, all tasks the foe attempts are hindered.", }, 
	{ dt: "Knock down", dd: "The foe is knocked prone. It can get up on its turn.", }, 
	{ dt: "Stun", dd: "The foe loses its next action.", }, 
];
const specialdamageList = [
	{ dt: "Dazed", dd: "Being dazed hinders all your tasks, usually for about one round. You might be dazed by being struck hard on the head, exposed to extremely loud sounds, or affected by a mental attack. When this happens, for the duration of the daze effect, all of your tasks are hindered.", }, 
	{ dt: "Stunned", dd: "Being stunned means you lose your turn; you can't take any actions except to defend yourself.", }, 
	{ dt: "Poisoned", dd: "When you're exposed to poison&mdash;whether the venom of a serpent, rat poison slipped into a burrito, cyanide dissolved in wine, or an overdose of acetaminophen&mdash;you make a Might defense roll to resist it. Failing this roll might mean you take a wound, lose points directly from your Speed or Intellect Pool, are hindered for a while, or experience a special effect like paralysis, unconsciousness, or something stranger.", }, 
	{ dt: "Diseased", dd: "Diseases work like poisons, but their effect occurs every day, so you must make a Might defense roll each day or suffer the effects. Disease effects are as varied as poisons: wounds, hindrance, damage to Pools, and so on. Many diseases inflict damage that cannot be restored through conventional means&mdash;you need specialized treatment, such as healing magic or a specialist doctor.", }, 
	{ dt: "Paralyzed", dd: "Paralytic effects cause you to drop to the ground, unable to move. Unless otherwise specified, you can still take actions that require no physical movement. For example, if you have a telepathy ability, you probably can still use it while physically paralyzed.", }, 
	{ dt: "Psychic Effects", dd: "Psychic attacks that directly blast or otherwise hurt your mind usually damage your Intellect Pool. Other mental effects could have the same effect.", }, 
	{ dt: "Other Effects", dd: "Other special effects might make you blind or deaf, so dizzy that you can't stand without immediately falling over, or unable to breathe. Even stranger effects might alter gravity just for you, teleport you somewhere, mutate you, alter your memories, make you hallucinate, or cause incredible pain. The GM handles how this affects you and how the effect can be removed.", }, 
];
const modificationList = [
	{ name: "Easing One Step", description: ["Run <a href='#define-range'>immediate distance</a> before a jump", "Move at half speed when <a href='#define-skill-stealth'>sneaking</a>", "Wear camouflage or appropriate gear when <a href='#define-skill-stealth'>sneaking</a> (<a href='#define-asset'>asset</a>)", "<a href='#define-illumination'>Dim light</a> when <a href='#define-skill-stealth'>sneaking</a>", "Many things to hide behind when <a href='#define-skill-stealth'>sneaking</a>", "Pole for jumping (<a href='#define-asset'>asset</a>)", "Saddle for <a href='#define-skill-riding'>riding</a> (<a href='#define-asset'>asset</a>)", ], }, 
	{ name: "Hindering One Step", description: ["Any action after moving a <a href='#define-range'>short distance</a> on your turn (hindrance ends at the end of your next turn)", ], }, 
	{ name: "Hindering Two Steps", description: ["Any action after using your turn to run a <a href='#define-range'>long distance</a> (hindrance ends at the end of your next turn)", ], }, 
	{ name: "Automatic Hits", description: ["Target paralyzed or unconscious", ], }, 
	{ name: "Easing Attacks Two Steps", description: ["Surprise (first attack ambush on unaware target)", "Attacker invisible", "Target blinded", "Ranged attack from hidden position on unaware target", ], }, 
	{ name: "Easing Attacks One Step", description: ["Attacker on higher ground", "Target dazed", "Melee attack on prone target", "Target on guard but unaware of attacker's location", ], }, 
	{ name: "Hindering Attacks One Step", description: ["Attacking after moving a <a href='#define-range'>short distance</a>", "Target is behind sturdy cover", "Attacker dazed", "Ranged attack on prone target", "Ranged attack at extreme <a href='#define-range'>range</a> (the limit of the <a href='#define-weapon'>weapon</a> range)", "Target in <a href='#define-illumination'>dim light</a>, within <a href='#define-range'>short range</a>", "Target in very <a href='#define-illumination'>dim light</a>, within <a href='#define-range'>immediate range</a>", "Target is <a href='#define-defend'>guarding</a>", "<a href='#define-attack'>Ranged attack</a> on target in mist", "<a href='#define-attack'>Melee attack</a> on target in very dense mist", "Attacker in deep water (waist or deeper; aquatic creatures ignore this)", "Attacker underwater using stabbing weapon", "Attacker underwater using special ranged weapon (and range is reduced by one range category)", "Target is moving very fast (doing nothing but running, on a fast mount, in a vehicle, and so on)", "Attacker on a moving mount or in a moving vehicle (training in riding or driving ignores this penalty)", "Attacker on a listing ship, vibrating platform, and so on (training in balancing or sailing ignores this penalty)", "High gravity (all physical tasks, including attacks; thrown and projectile weapon attacks reduced by one range category)", "Low gravity or zero gravity (all physical tasks, including attacks; thrown and projectile weapon attacks increased by one <a href='#define-range'>range</a> category)", ], }, 
	{ name: "Hindering Attacks Two Steps", description: ["Target in very <a href='#define-illumination'>dim light</a>, more than <a href='#define-range'>immediate range</a> but within <a href='#define-range'>short range</a>", "Attacker underwater using bashing or slashing weapon", "Attacker trying to disarm target", "Attacker aiming for specific limb (to hinder target for the rest of combat or slow their movement)", ], }, 
	{ name: "Hindering Attacks Three Steps", description: ["Attacker trying to blind target for a few rounds", ], }, 
	{ name: "Hindering Attacks Four Steps", description: ["Target in <a href='#define-illumination'></a>> or invisible but attacker has a sense of where they might be", ], }, 
	{ name: "Not Attackable", description: ["Target in <a href='#define-illumination'>darkness</a> or invisible; attacker has no idea where they might be (attack fails without a roll unless you spend 1 <a href='#define-experience-points-xp'>XP</a> to make a lucky shot)", "Target entirely behind sturdy cover (if the attack can break through the cover, the attack is only hindered)", "Ranged target in very dense mist (as <a href='#define-illumination'>darkness</a>)", "Attacker underwater using thrown weapon, bow, crossbow, and so on, and most firearms", ], }, 
];
const arcideasList = [
	{ dt: "Aid a Friend", dd: "You promise to help a friend with their character arc. As you help them complete the steps, climax, and resolution for their arc, you earn the same XP that they do for it.", }, 
	{ dt: "Assist an Organization", dd: "You set out to accomplish something that will benefit an organization.", }, 
	{ dt: "Birth", dd: "You are becoming a parent. (This may require you to get a partner or surrogate, in which case you may want to start the Romance arc first.)", }, 
	{ dt: "Build", dd: "You're going to build a physical structure&mdash;a house, fortress, workshop, defensive wall, and so on.", }, 
	{ dt: "Cleanse", dd: "Someone or something has been contaminated (with a curse, evil spirits, radiation, and so on), and you want to rid them of these influences.", }, 
	{ dt: "Create", dd: "You want to make something, such as a painting, novel, machine, or powerful magic item.", }, 
	{ dt: "Defeat a Foe", dd: "Someone stands in your way or is threatening you, and you must overcome the challenge they present.", }, 
	{ dt: "Defense", dd: "A person, place, or thing is threatened, and you want to protect them.", }, 
	{ dt: "Develop a Bond", dd: "You want to get closer to another character, such as making a friend, finding a mentor, or establishing a contact with someone in a position of power.", }, 
	{ dt: "Enterprise", dd: "You want to create and run a business or start an organization (such as a guild, church, or school).", }, 
	{ dt: "Establish", dd: "You want to prove yourself as someone of importance, whether that means socially, financially, romantically, or within a group you belong to.", }, 
	{ dt: "Explore", dd: "There's something unknown you want to explore to learn its secrets, such as an area of wilderness, a new planet, or a strange dimension.", }, 
	{ dt: "Fall From Grace", dd: "Your life takes a downturn because of actions you take&mdash;a mistake harms someone you care about, you treat someone badly, or the like. (This is more of an arc you as a player choose for your character rather than something your character chooses for themself.)", }, 
	{ dt: "Finish a Great Work", dd: "Something that was begun in the past must now be completed&mdash;finishing a monument, developing the final steps of the cure for a disease, and so on.", }, 
	{ dt: "Growth", dd: "Willingly or unwillingly, you are going to change, becoming less selfish, braver, or something similar.", }, 
	{ dt: "Instruction", dd: "You teach a pupil in an area of knowledge that you have&mdash;lore, a combat style, a rare type of magic, and so on.", }, 
	{ dt: "Justice", dd: "You try to right a wrong or bring a wrongdoer to justice.", }, 
	{ dt: "Learn", dd: "You want to learn something, usually a whole area of knowledge such as a language, how to play an instrument, or how to be a good cook.", }, 
	{ dt: "Master a Skill", dd: "You're skilled, but you want to become the best at something (not necessarily a skill). This often follows a Learn arc.", }, 
	{ dt: "Mysterious Background", dd: "There's something important you don't know about your past, and you want to find out.", }, 
	{ dt: "New Discovery", dd: "You want to invent a new device, process, spell, or the like. (This arc is similar to Finish a Great Work or Learn, but you're blazing a new trail.)", }, 
	{ dt: "Raise a Child", dd: "You raise a child (whether your biological offspring or not) to adulthood. This is obviously a long-term arc.", }, 
	{ dt: "Recover", dd: "You need to heal from a significant wound or trauma&mdash;severe damage, amputation, seeing a close friend die, and so on.", }, 
	{ dt: "Redemption", dd: "You've done something very wrong, but you want to atone and make it right. (This arc is similar to Justice or Undo a Wrong, but you are the wrongdoer. Possibly a follow-up to a Fall From Grace arc.)", }, 
	{ dt: "Repay a Debt", dd: "You owe someone something, and it's time to make good.", }, 
	{ dt: "Rescue", dd: "Someone or something of great importance has been taken, and you want to get them or it back.", }, 
	{ dt: "Restoration", dd: "You want to restore your good name, recover what you've lost, or rebuild what has been destroyed. (This arc may be a follow-up to Fall From Grace.)", }, 
	{ dt: "Revenge", dd: "Someone did something that harmed you, and it's time to make them pay. (Unlike the Avenge arc, you are the injured party.)", }, 
	{ dt: "Romance", dd: "You want to create a romantic relationship with someone&mdash;one person in particular, or perhaps by opening your heart and finding someone new.", }, 
	{ dt: "Solve a Mystery", dd: "You want to solve a crime or similar action committed in the fairly recent past, asking the right questions and finding the answers.", }, 
	{ dt: "Theft", dd: "Someone else has something you want.", }, 
	{ dt: "Train a Creature", dd: "You want to domesticate and train a beast.", }, 
	{ dt: "Transformation", dd: "You want to be different in a specific way, such as becoming a ghost or taking on the power of a dragon. (This arc is different from Growth in that this is a physical change rather than emotional or spiritual.)", }, 
	{ dt: "Uncover a Secret", dd: "You seek a piece of hidden knowledge that you want, such as a unique focus ability or combat technique, a key to open a sealed door, or the true name of a devil.", }, 
	{ dt: "Undo a Wrong", dd: "Someone did something horrible, with ramifications that are still felt even if it happened long ago, such as the burning of a library or people being driven from their homeland. (This arc is different from Justice in that it's about undoing the harm that was done.)," }, 
]
const skillTierRestrictedList = [
	{ tier: 2, description: "You can become specialized in noncombat skills. You can become trained in combat skills.", }, 
	{ tier: 4, description: "You can become specialized in combat skills.", }, 
];
const skillList = [
	{ name: "Animal care", ref: ["CCR 20"], description: "Your experience with animals allows you to understand their needs and intentions, calm distressed animals, and attempt to influence them peacefully.", }, 
	{ name: "Astronomy", ref: ["CCR 20"], description: "You are well-versed in the study of the stars, planets, and cosmology in general.", }, 
	{ name: "Athletics", ref: ["CCR 20"], description: "Regular training has improved your physical fitness, making you better at climbing, jumping, running long distances, and swimming tasks.", sidebar: "<p>Athletics and gymnastics are similar skills, but athletics focuses on tasks related to using your Might Pool, while gymnastics focuses on tasks requiring your Speed Pool.</p>", }, 
	{ name: "Attacking", ref: ["CCR 20"], combat: true, tierrestricted: true, description: "Choose one kind of <a href='#define-attack'>attack</a> action per training you gain in this skill: light bashing, light bladed, light ranged, medium bashing, medium bladed, medium ranged, heavy bashing, heavy bladed, heavy ranged, or your unarmed attacks. Alternatively, you're better at attacking with one of your special abilities (like Blast or Onslaught) or one kind of <a href='#define-weapon'>weapon</a> you can <a href='#define-skill'>freely use</a> (such as swords or rifles).", }, 
	{ name: "Biology", ref: ["CCR 20"], description: "You have a deep working knowledge of living systems, including animals, plants, and insects appropriate to your game's setting.", }, 
	{ name: "Charm", ref: ["CCR 20"], description: "You know how to interact with people to get them to react to you positively. In a disagreement, you're adept at getting them to agree with your position.", sidebar: "<p>Any truthful positive social <a href='#define-interact'>interaction</a> is covered by charm.</p>", }, 
	{ name: "Chemistry", ref: ["CCR 20"], description: "You're knowledgeable about the composition and properties of physical substances, allowing you to predict and study chemical reactions, analyze substances to detect chemicals of interest, and&mdash;with sufficient time and experiments&mdash;attempt to develop novel materials.", }, 
	{ name: "Crafting", ref: ["CCR 20"], description: "You're well-versed in one aspect of crafting, as appropriate to your game's setting. Options include cooking; weaving; metalworking or blacksmithing; leatherworking; brewing, vinting, and/or distilling; woodworking; pottery; gun and ammunition smithing; or something else available for the genre.", sidebar: "<p>Crafting training allows you to craft (and, if appropriate, repair) related items using your <a href='#define-resource-points'>resources</a>.</p>", }, 
	{ name: "Cybernetics", ref: ["CCR 20"], description: "You're knowledgeable about cybernetic prosthetics, enhancements, and related machine-body and machine-mind devices, with some practice in installing, maintaining, repairing, and removing them.", }, 
	{ name: "Deception", ref: ["CCR 21"], description: "You are a capable liar, able to use speech and the written word to deceive and misinform others.", sidebar: "<p>Any untruthful positive social <a href='#define-interact'>interaction</a> is covered by deception.</p>", }, 
	{ name: "Defending", ref: ["CCR 21"], combat: true, tierrestricted: true, description: "Choose one kind of <a href='#define-defend'>defense</a> per training you gain in this skill: blocking an attack (a Might task), dodging an attack (a Speed task), a Might defense roll to endure an unwanted physical effect, or an Intellect defense roll to resist an unwanted mental effect.", }, 
	{ name: "Disarming traps", ref: ["CCR 21"], description: "You have a knack for figuring out how devious mechanisms and traps function, giving you better odds in your attempt to defuse them, if not permanently then at least long enough to bypass them.", }, 
	{ name: "Disguise", ref: ["CCR 21"], description: "You're adept at disguising your identity with a false appearance using minimal accoutrements, usually with whatever's at hand.", sidebar: "<p>Applying a disguise usually requires a disguise kit or access to similar materials and at least a minute (or many minutes) to complete. A disguise may allow you to pass as someone else of roughly your size and shape. Besides appearing as someone else, a disguise may require impersonating a different voice and different mannerisms. A disguise usually routinely (no rolls required) convinces casual observers, especially those who don't already know you, though if the disguise comes under direct scrutiny or challenge, you must succeed on a disguise task against the level of whoever's studying you to maintain the deception.</p><p>Disguise kit contents vary by genre, but all contain setting-appropriate materials a character can use to change their features, hair, and other distinguishing elements, possibly even including alternate clothing.</p><p>If attempting to disguise yourself as a particular person, you must have previously interacted with them or studied them, their specific voice, and their mannerisms, and the disguise task to maintain the deception under direct scrutiny is hindered.</p>", }, 
	{ name: "Driving", ref: ["CCR 21", "CCMG 79,"], description: "You can keep a car or truck (or land vehicle appropriate to your game's setting) on the road even under difficult conditions.", }, 
	{ name: "Engineering", ref: ["CCR 21"], description: "You can analyze, repair, and create innovative solutions for complex problems, such as tracing power outages and making new devices appropriate to your game's setting.", sidebar: "<p>In a sci-fi setting, the engineering skill includes any task related to the <a href='#define-skill-mechanics'>mechanics</a> skill.</p>", }, 
	{ name: "Escaping", ref: ["CCR 21"], description: "You're talented at slipping restraints, squeezing through bars, breaking the grip of a creature holding you, pulling free from sucking quicksand, or some similar circumstance.", }, 
	{ name: "Farming", ref: ["CCR 21"], description: "You are knowledgeable when it comes to cultivating land, raising crops, and harvesting what you've grown to provide food and resources at the end of the growing seasons. (Tending to livestock in any but the most general way requires training in animal care.)", }, 
	{ name: "Firefighting", ref: ["CCR 21"], description: "You are proficient in methods to contain fires and know the best ways to use axes, hoses, fire extinguishers, and other tools to directly suppress fire.", }, 
	{ name: "Forensics", ref: ["CCR 21"], description: "You know how to interpret physical evidence to figure out what happened at a location, such as at a crime scene, or what may have led to an object's current condition, such as the cause of death for a body.", }, 
	{ name: "Gathering information", ref: ["CCR 21"], description: "You're adroit at gathering rumors, stories, and other information from locals to discover the news of the day; doing so requires several hours of effort.", sidebar: "<p>Gathering information in a real-world or science fiction setting&mdash;also known as researching&mdash;includes using sources like databases, physical archives, discussion platforms, and experts who agree to message you.</p>", }, 
	{ name: "Geology", ref: ["CCR 21"], description: "You're knowledgeable about planetary structure, composition, and processes (including working knowledge of earthquakes, volcanoes, and the formation of natural resources).", }, 
	{ name: "Gunnery", ref: ["CCR 21"], combat: true, tierrestricted: true, description: "You are proficient in attacking with all large mounted weapons appropriate to the setting, including tank cannons, battleship guns, turrets, or spacecraft weaponry such as torpedoes, railguns, phasers, and so on.", }, 
	{ name: "Gymnastics", ref: ["CCR 21"], description: "Regular training has improved your balance, easing your tasks to avoid losing your footing, as well as attempts to roll, dive, flip, and pull off similar feats that require grace and agility, such as precision jumping, sprints, swinging from ropes or handholds, dancing, skiing, or ice skating.", sidebar: "<p>If you are trained in gymnastics, it might provide the same benefit in zero-G environments as <a href='#define-skill-zero-g-fluency'>zero-G fluency</a>. But not the other way around.", }, 
	{ name: "Hacking", ref: ["CCR 22"], description: "You can exploit weaknesses in a computer or computerized machine to gain unauthorized access, manipulate its intended function, damage it, and/or otherwise contravene its regular operation. Hacking requires a connection and some way to manipulate the system, such as with a keyboard or more advanced interface, and requires at least a few rounds or even minutes of effort, and perhaps much longer, depending on the hack desired.", sidebar: "<p>Attempting to exploit, break, or warp a computerized system&mdash;as opposed to operating a system as intended&mdash;is a hacking task.</p>", }, 
	{ name: "Healing", ref: ["CCR 22"], description: "You're experienced in diagnosing and dealing with sickness, bruises, cuts, breaks, and other injuries, and are proficient with healing tasks.", sidebar: "<p>Healing might be called \"medicine\" in real-world or science fiction settings, suggesting the possibility that the character previously pursued a medical specialty, nursing, dentistry, optometry, audiology, or something similar.</p><p>Training in healing eases your task to <a href='#define-treatment'>treat</a> a <a href='#define-wound'>wound</a>.</p>", }, 
	{ name: "Heavy equipment operation", ref: ["CCR 22"], description: "You're proficient in operating various heavy machinery used in construction projects, such as bulldozers, cranes, excavators, pavers, rollers, and other equipment appropriate to your game's setting.", }, 
	{ name: "History", ref: ["CCR 22"], description: "You're well-versed in the study of past events, societies, and cultures, and you have related knowledge about what's led to current nations and populations.", }, 
	{ name: "Identifying", ref: ["CCR 22"], description: "Your analytical mind allows you to venture a guess regarding the origin of unfamiliar objects, texts, sounds, and so on.", }, 
	{ name: "Initiative", ref: ["CCR 22"], description: "Your reactions are honed, giving you skill in initiative tasks during combat.", }, 
	{ name: "Intimidation", ref: ["CCR 22"], description: "You're good at swaying others with threatening words and/or a fearsome presence.", sidebar: "<p>Any negative social <a href='#define-interact'>interaction</a> is covered by intimidation.</p>", }, 
	{ name: "Lockpicking", ref: ["CCR 22"], description: "You are proficient at unlocking a locked mechanism without the key.", }, 
	{ name: "Magic lore", ref: ["CCR 22"], description: "You've studied magical traditions of many different sorts and know something about the different organizations and schools, leading magical practitioners, sources of power, fabled artifacts, and more. Your lore helps you identify magic items, the potential purpose of a strange ritual, or how an active spell is working, or gain some similar insight. By spending a minute concentrating on an object or area, you can determine if there is any magic present; by examining a magical object or area and making a magic lore roll against the target's level, you can determine the magic's general purpose or function.", sidebar: "<p>Magic lore might be called \"occultism\" in real-world or science fiction settings where magic isn't real (or, at least, is generally believed not to be real).</p>", }, 
	{ name: "Mathematics", ref: ["CCR 22"], description: "You're a whiz with numbers, calculations, and pattern analysis.", }, 
	{ name: "Mechanics", ref: ["CCR 22"], description: "You can diagnose, repair, maintain, and (with the right tools and parts) build engines and various machines appropriate to your game's setting.", sidebar: "<p>Mechanics training often requires <a href='#define-resource-points'>resources</a> to build and repair engines.</p>", }, 
	{ name: "Mining", ref: ["CCR 22"], description: "You have experience with methods for extracting valuable geological materials and minerals from the ground, including the use of mining tools appropriate to the genre.", sidebar: "<p>Mining techniques vary widely by genre. For example, in a fantasy or real-world historical genre, pickaxes feature prominently. In more modern real-world and horror settings, dynamite comes into the picture. In science fiction settings, a miner might know how to use laser boring devices.</p>", }, 
	{ name: "Navigation", ref: ["CCR 22"], description: "Your sense of direction is well honed, and you are familiar with using maps, cues from the environment, and/or tools appropriate to the setting to find your way through an unfamiliar or confusing landscape.", }, 
	{ name: "Outdoor survival", ref: ["CCR 22"], description: "You know the basics of hunting, trapping, fishing, and other ways to find (and prepare) game and vegetation for food, as well as locating drinkable water and shelter in wilderness areas.", }, 
	{ name: "Perception", ref: ["CCR 22"], description: "You have a better chance to notice what others miss in a physical environment when searching an area, listening closely, or using some other sense to discover what's hidden or not obvious.", }, 
	{ name: "Performance", ref: ["CCR 22"], description: "You're adept at one kind of performance or art, whether that's singing, comedy, playing an instrument, acting on a stage or in front of a camera, composing, painting, or something else.", }, 
	{ name: "Philosophy", ref: ["CCR 22"], description: "You're conversant with critically analyzing questions regarding existence, knowledge, ethics, and similar fundamental issues.", }, 
	{ name: "Physics", ref: ["CCR 22"], description: "You're knowledgeable about scientifically derived laws of the physical universe and can use that knowledge to devise experiments to probe natural phenomena.", }, 
	{ name: "Pickpocketing", ref: ["CCR 23"], description: "You're adept at separating a target from belongings they carry on their person without being detected. You're also trained with sleight-of-hand tricks, like making a coin seemingly disappear, hiding something in your own clothing, or planting something on someone else.", }, 
	{ name: "Piloting", ref: ["CCR 23", "CCMG 79,"], description: "You're adept at piloting planes, boats, submersibles, or craft appropriate to your game's setting.", }, 
	{ name: "Piloting spacecraft", ref: ["CCR 23"], description: "You're adept at piloting a spaceship, including in tasks related to navigating to other locations in space, as appropriate to your vessel's capabilities and the game's setting.", }, 
	{ name: "Psychic lore", ref: ["CCR 23", "CCMG 79,"], description: "You're cognizant of the many varieties of psychic talent; of the leagues, agencies, and other groups that employ entities with psionic power; and of other related topics. Your lore helps you identify psychic activity, objects, or the purpose of a particular psychic working, or gain some similar insight.", }, 
	{ name: "Psychology", ref: ["CCR 23"], description: "You're conversant with the study of behavior and therapies developed to address mental health.", }, 
	{ name: "Publishing", ref: ["CCR 23"], description: "You're well-versed in one aspect of publishing, such as writing, editing, copywriting, proofing, marketing, or something else. (Publishing is a modern real-world or science fiction skill. Someone interested in this skill in a historical real-world or fantasy setting might choose scribing instead.)", }, 
	{ name: "Recognizing motive", ref: ["CCR 23"], description: "You're practiced at determining someone else's lies, motives, and disposition.", }, 
	{ name: "Religious lore", ref: ["CCR 23"], description: "You know about the gods and pantheons of the world; their cults, temples, and priesthoods; and their doctrines, holy artifacts, methods of worship, and religious holidays. Your lore helps you identify holy items if any exist in your setting, the potential purpose of a religious ceremony, or how divine influence might be affecting an area, or gain some similar insight.", sidebar: "<p>Religious lore might simply be called \"religion\" in real-world or science fiction settings where a constellation of different pantheons doesn't exist (or, at least, not obviously).</p>", }, 
	{ name: "Riding", ref: ["CCR 23"], description: "You know how to ride and care for a horse, camel, or similar mount. Alternatively, you know how to ride and care for a motorcycle, bicycle, or similar mechanical device appropriate to your game's setting.", }, 
	{ name: "Scavenging", ref: ["CCR 23"], description: "You're experienced in scavenging for food, water, shelter, and when you're especially lucky, a random piece of postapocalyptic equipment. A scavenging task attempt usually requires a minimum of ten minutes but could stretch to two to four hours spent searching through the rubble and ruins.", }, 
	{ name: "Scribing", ref: ["CCR 23"], description: "You are adroit at copying texts, illustrating manuscripts, and preparing official documents by hand. (Scribing is usually an option in any setting except modern real world and science fiction. Someone interested in scribing in a modern real-world or sci-fi setting might choose publishing instead.)", }, 
	{ name: "Skilled trade", ref: ["CCR 23"], description: "You're experienced in one skilled trade, potentially allowing you to earn a wage as a carpenter, a bricklayer, a drywall installer, a plumber, a mechanic, a roofer, an electrician, or a similar trade, as appropriate for your setting.", }, 
	{ name: "Stealth", ref: ["CCR 23"], description: "You're adept at sneaking and hiding, staying out of sight, and keeping all noise of your presence to a minimum.", }, 
	{ name: "Systems operation", ref: ["CCR 23"], description: "You can operate a variety of different complex systems&mdash;including computers, robots, spacecraft drives, environmental systems, communication systems, scanning systems, and so on&mdash;to achieve their intended functions. This operation could extend to generating simple code for legitimate programming purposes.", }, 
	{ name: "Tracking", ref: ["CCR 23"], description: "You are better able to follow a target through all sorts of landscapes and environments and in identifying tracks.", }, 
	{ name: "Woodcutting", ref: ["CCR 23",], description: "You're adept at felling trees, splitting logs, and preparing timber for fuel, construction, and other uses. (Woodcutting is usually an option in any setting except modern real world and science fiction. Someone interested in woodcutting in a sci-fi setting might choose systems operation, allowing them to direct automated woodcutting machinery.)", }, 
	{ name: "Zero-G fluency",  ref: ["CCR 23"],description: "You're adept at moving through zero-gravity and low-gravity environments.", },
];
const woundsVocab = [
	{ dt: "Major Wounds", type: "Wound", ref: ["CCR 11",], dd: "Injuries that take days to weeks to recover from.", examples: ["fractures", "large open cuts", "gunshot wounds",], effects: "Each major wound hinders your actions. If you take your last major wound, you die.", }, 
	{ dt: "Minor Wounds", type: "Wound", ref: ["CCR 11",], dd: "Inconsequential injuries that don't hurt after a few hours.", examples: ["nicks", "scratches", "bruises",], effects: "If you're out of minor wounds, minor wounds become moderate wounds instead.", }, 
	{ dt: "Moderate Wounds", type: "Wound", ref: ["CCR 11",], dd: "Significant injuries that take days to weeks to recover from.", examples: ["open cuts", "weapon grazes", "sprains", "minor fractures",], effects: "If you're out of moderate wounds, all of your actions are hindered, and moderate wounds become major wounds instead.", }, 
];
const descriptorList = [
	{ name: "Appealing", description: "You're attractive to others, but perhaps more important, you are likeable and charismatic. You've got that \"special something\" that draws others to you. You often know just the right thing to say to make someone laugh, put them at ease, or spur them to action. People like you, want to help you, and want to be your friend.", pool: "Intellect", skills: ["Charm", "Recognizing motive",], ref: ["CCR 25",], }, 
	{ name: "Bookish", description: "You've spent most of your life in sedentary pursuits&mdash;reading books, watching the stars, writing poetry, and so on&mdash;rather than active ones. You're well-versed in all manner of academia or other intellectual pursuits. You're not necessarily weak or feeble (although this is a good descriptor for characters who are elderly), but you have no experience in more physical activities.", pool: "Intellect", skills: ["History", "Philosophy", "Psychology", "similar",], ref: ["CCR 25",], }, 
	{ name: "Brash", description: "You're a self-assertive sort, confident in your abilities, energetic, and perhaps a bit irreverent toward ideas that you don't agree with. Some people call you bold and brave, but those you've put in their place might call you puffed up and arrogant. Whatever. It's not in your nature to care what other people think about you, unless those people are your friends or family. Even someone as brash as you knows that friends sometimes have to come first.", pool: "Speed", skills: ["Hacking", "Initiative",], ref: ["CCR 25",], }, 
	{ name: "Calm", description: "You're steady and not easily excited when facing stress or adversity. You try to focus on an inner stillness so you can react thoughtfully rather than impulsively. Likewise, your presence can ground others around who see your unruffled disposition and listen to your patient advice.", pool: "Intellect", skills: ["Charm", "Skilled trade",], ref: ["CCR 25",], }, 
	{ name: "Cautious", description: "You don't charge into new situations without due consideration. You're afraid of what will happen if you don't carefully study the particulars of a new job, opportunity, or investigation. Those burdened with less vigilance than you might call you timid, but you suspect bravery is just another word for foolhardiness.", pool: "Speed", skills: ["Gathering information", "Perception",], ref: ["CCR 25",], }, 
	{ name: "Chaotic", description: "Danger doesn't mean much to you, mainly because you don't think much about repercussions. In fact, you enjoy sowing surprises, just to see what will happen. The more unexpected the result, the happier you are. Sometimes you are particularly manic, and for the sake of your companions, you restrain yourself from taking actions that you know will lead to disaster.", pool: "Speed", skills: ["Initiative", "Performance",], ref: ["CCR 25",], }, 
	{ name: "Charming", description: "You're a smooth talker and a charmer. Whether through seemingly supernatural means or just a way with words, you can convince others to do as you wish. Most likely, you're physically attractive or at least highly charismatic, and others enjoy listening to your voice. You probably pay attention to your appearance, keeping yourself well groomed. You make friends easily. You play up the personality facet of your Intellect stat; intelligence is not your strong suit. You're personable.", pool: "Intellect", skills: ["Charm", "Deception",], ref: ["CCR 25",], }, 
	{ name: "Clever", description: "You're quick-witted, thinking well on your feet. You understand people, so you can fool them but are rarely fooled. Because you easily see things for what they are, you get the lay of the land swiftly, size up threats and allies, and assess situations with accuracy. Perhaps you're physically attractive, maybe you use your wit to overcome any physical or mental imperfections, or perhaps you have turned your mind to compromising digital devices because you're just that clever.", pool: "Intellect", skills: ["Deception", "Recognizing motive",], ref: ["CCR 26",], }, 
	{ name: "Compassionate", description: "Helping others is your calling. It's why you're here. Others delight in your outgoing and charitable nature, and you delight in their happiness. You're at your best when you're aiding others, whether by treating their injuries, helping them with a task, or putting the best face on a bad situation for the sake of morale.", pool: "Intellect", skills: ["Animal care", "Healing",], ref: ["CCR 26",], }, 
	{ name: "Creative", description: "Maybe you have a notebook where you write down ideas so you can develop them later. Perhaps you email yourself ideas that strike you out of the blue so you can sort them in an electronic document. Or maybe you just sit down, stare at the blank page or screen, and, by indomitable force of will, produce something from nothing. However your gift works, you're creative&mdash;you write, compose, sculpt, design, direct, code, or otherwise create narratives that enthrall other people with your vision.", pool: "Intellect", skills: ["Performance", "Publishing",], ref: ["CCR 26",], }, 
	{ name: "Empathic", description: "Other people are open books to you. You may have a knack for reading a person's tells, those subtle movements that convey an individual's mood and disposition. Or you may receive information in a more direct way, feeling a person's emotions as if they were tangible things, sensations that lightly brush against your mind. Your gift for empathy helps you navigate social situations and control them to avoid misunderstandings and prevent useless conflicts from erupting.", pool: "Intellect", skills: ["Gathering information", "Recognizing motive",], ref: ["CCR 26",], }, 
	{ name: "Fast", description: "You're fleet of foot. Because you're quick, you can accomplish tasks more rapidly than others can. You're not just quick on your feet, however&mdash;you're quick with your hands, and you think and react quickly. You even talk quickly.", pool: "Speed", skills: ["Deception", "Initiative",], ref: ["CCR 27",], }, 
	{ name: "Gloomy", description: "You suspect that fate is, if not actively leading you to a terrible end, at least determined to show you the world's underbelly through a series of unfortunate events. Maybe you alone feel targeted, or maybe it's the entire world. It's easier to expect the worst and be surprised when things don't turn out terribly than the other way around.", pool: "Speed or Might", skills: ["History", "Recognizing motive",], ref: ["CCR 27",], }, 
	{ name: "Graceful", description: "You have a perfect sense of balance, moving and speaking with grace and beauty. You're quick, lithe, flexible, and dexterous. Your body is perfectly suited to dance, and you use that advantage in combat to dodge blows. You might wear garments that enhance your agile movement and sense of style.", pool: "Speed", skills: ["Gymnastics", "Initiative",], ref: ["CCR 27",], }, 
	{ name: "Guarded", description: "You conceal your true nature behind a mask and are loath to let anyone see who you really are. Protecting yourself, physically and emotionally, is what you care about most, and you prefer to keep everyone else at a safe distance. You may be suspicious of everyone you meet, expecting the worst from people so you won't be surprised when they prove you right. Or you might just be a bit reserved, careful about letting people through your gruff exterior to the person you really are.", pool: "Intellect", skills: ["Deception", "Disguise",], ref: ["CCR 27",], }, 
	{ name: "Honorable", description: "You are trustworthy, fair, and forthright. You try to do what is right, to help others, and to treat them well. Lying and cheating are no way to get ahead&mdash;these things are for the weak, the lazy, or the despicable. You probably spend a lot of time thinking about your personal honor, how best to maintain it, and how to defend it if challenged. In combat, you are straightforward and offer quarter to any foe.", pool: "Might", skills: ["Charm", "Philosophy",], ref: ["CCR 27",], }, 
	{ name: "Inquisitive", description: "The world is vast and mysterious, with wonders and secrets to keep you amazed for several lifetimes. You feel the tugging on your heart, the call to explore the wreckage of past civilizations, to discover new peoples, new places, and whatever bizarre wonders you might find along the way. However, as strongly as you feel the pull to roam the world, you know there is danger aplenty, and you take precautions to ensure that you are prepared for any eventuality. Research, preparation, and readiness will help you live long enough to see everything you want to see and do everything you want to do.", pool: "Intellect", skills: ["Gathering information", "Identifying",], ref: ["CCR 27",], }, 
	{ name: "Intelligent", description: "You're quite smart. Your memory is sharp, and you easily grasp concepts that others might struggle with. This aptitude doesn't necessarily mean that you've had years of formal education, but you have learned a great deal in your life, primarily because you pick things up quickly and retain so much.", pool: "Intellect", skills: ["Chemistry", "Engineering", "Mathematics", "similar",], ref: ["CCR 27",], }, 
	{ name: "Intuitive", description: "You are often tickled by a sense of knowing what someone will say, how they will react, or how events might unfold. Maybe you have a mutant sense, maybe you can see a few moments ahead through time, or maybe you're just good at reading people and extrapolating a situation. Whatever the case, many who look into your eyes immediately glance away, as if afraid of what you might see in their expression.", pool: "Intellect", skills: ["Psychology", "Recognizing motive",], ref: ["CCR 28",], }, 
	{ name: "Jovial", description: "You're cheerful, friendly, and outgoing. You put others at ease with a big smile and a joke, possibly one at your own expense, though lightly ribbing your companions who can take it is also one of your favorite pastimes. Sometimes people say you never take anything seriously. That's not true, of course, but you have learned that to dwell on the bad too long quickly robs the world of joy. You've always got a new joke in your back pocket because you collect them like some people collect bottles of wine.", pool: "Intellect", skills: ["Charm", "Performance",], ref: ["CCR 28",], }, 
	{ name: "Kind", description: "It's always been easy for you to see things from the point of view of other people. That ability has made you sympathetic to what they really want or need. From your perspective, you're just applying the old proverb that \"it's easier to catch flies with honey than with vinegar,\" but others see your behavior as kindness. Of course, being kind takes time, and yours is limited. You've learned that a small fraction of people don't deserve your time or kindness&mdash;true sadists, narcissists, and similar folk will only waste your energy. So you deal with them swiftly, saving your kindness for those who deserve it and can benefit from your attention.", pool: "Intellect", skills: ["Charm", "Healing",], ref: ["CCR 28",], }, 
	{ name: "Mechanical", description: "You have a special talent with machines of all kinds, and you're adept at understanding and, if need be, repairing them. Perhaps you're a bit of an inventor, creating new machines from time to time. You get called \"techie,\" \"tech,\" \"mech,\" \"gearhead,\" \"motorhead,\" or any of a number of other nicknames. Mechanics usually wear practical work clothes and carry around a lot of tools.", pool: "Intellect", skills: ["Engineering", "Heavy equipment operation", "Systems operation",], ref: ["CCR 28",], }, 
	{ name: "Mysterious", description: "The dark figure lurking silently in the corner? That's you. No one really knows where you came from or what your motives are&mdash;you play things close to the vest. Your manner perplexes and confounds others, but that doesn't make you a poor friend or ally. You're just good at keeping things to yourself, moving about unseen, and concealing your presence and identity.", pool: "Intellect or Speed", skills: ["Deception", "Stealth",], ref: ["CCR 28",], }, 
	{ name: "Mystical", description: "You think of yourself as mystical, attuned with the mysterious and the paranormal. Your true talents lie with the supernatural. You likely have experience with ancient lore, and you can sense and wield the supernatural&mdash;though whether that means \"magic,\" \"psychic phenomena,\" or something else is up to you (and probably up to those around you as well). Mystical characters often wear jewelry, such as a ring or an amulet, or have tattoos or other marks that show their interests.", pool: "Intellect", skills: ["Magic lore", "Psychic lore", "Religious lore",], ref: ["CCR 28",], }, 
	{ name: "Perceptive", description: "You miss little. You pick out the small details in the world around you and are skilled at making deductions from the information you find. Your talents make you an exceptional sleuth or a talented scout.", pool: "Intellect", skills: ["Perception", "Recognizing motive",], ref: ["CCR 29",], }, 
	{ name: "Resilient", description: "You're tougher than most, which means you can take some punishment and come back for more. But if events do overtake you, you don't panic&mdash;you just concentrate on getting out of whatever's constraining you. Being resilient is at least partly about knowing how to get out of a bad situation.", pool: "Might", skills: ["Athletics", "Escaping",], ref: ["CCR 29",], }, 
	{ name: "Rugged", description: "You're a nature lover accustomed to living rough, pitting your wits against the elements. Most likely, you're a skilled hunter, gatherer, or naturalist. Years of living in the wild have left their mark with a worn countenance, wild hair, or scars. Your clothing is probably much less refined than the garments worn by city dwellers.", pool: "Might", skills: ["Animal care", "Outdoor survival",], ref: ["CCR 29",], }, 
	{ name: "Skeptical", description: "You have a questioning attitude regarding claims that are often taken for granted by others. You're not necessarily a \"doubting Thomas\" (a skeptic who refuses to believe anything without direct personal experience), but you've often benefited from questioning the statements, opinions, and received knowledge presented to you by others.", pool: "Intellect", skills: ["Identifying", "Recognizing motive",], ref: ["CCR 29",], }, 
	{ name: "Stealthy", description: "You're sneaky, slippery, and fast. These talents help you hide, move quietly, and stay unseen. It might be that you're wiry and small. What's more important is that you understand how to use shadows, cover, and distraction to remain unseen and unheard, and how to make movements fluid and deliberate. Whatever the case, your expertise gives you better odds when you wish to sneakily observe, infiltrate, or ambush. Or maybe just to attempt sleight of hand and relieve someone of their valuables.", pool: "Speed", skills: ["Pickpocketing", "Stealth",], ref: ["CCR 29",], }, 
	{ name: "Strong", description: "You're extremely strong and physically powerful, and you use these qualities well, whether through violence, athletic feats of prowess, or enduring abuse. You probably have a brawny build and impressive muscles, though you might instead be strong and wiry.", pool: "Might", skills: ["Athletics", "Intimidation",], ref: ["CCR 30",], }, 
	{ name: "Strong-Willed", description: "You're tough-minded, willful, and independent. No one can talk you into anything or change your mind when you don't want it changed. This quality doesn't necessarily make you smart, but it does make you a bastion of willpower and resolve. You likely dress and act with unique style and flair, not caring what others think.", pool: "Intellect", skills: ["Charm", "Intimidation",], ref: ["CCR 30",], }, 
	{ name: "Tough", description: "You're strong and can take extra physical punishment&mdash;you keep going, shrugging off hurts and injuries that might slow or incapacitate a lesser person. You might have a large frame and a square jaw. Tough characters frequently have visible scars.", pool: "Might", skills: ["Athletics", "Outdoor survival",], ref: ["CCR 30",], }, 
	{ name: "Virtuous", description: "Doing the right thing is a way of life. You live by a code, and that code is something you attend to every day. Whenever you slip, you reproach yourself for your weakness and then get right back on track. Your code probably includes moderation, respect for others, cleanliness, and other characteristics that most people would agree are virtues, while you eschew their opposites: sloth, greed, gluttony, and so on.", pool: "Might", skills: ["Philosophy", "Religious lore",], ref: ["CCR 30",], }, 
];
const speciesList = [
	{ name: "Aarak", ref: ["CCR 118",], genres: ["Science Fiction",], summarybrief: "Aaraks like you hail from a canyon-carved volcanic world that enjoys an embarrassment of thermals, updrafts from when the wind streams over mountains and ridges, and \"cloud streets\" of aligned lanes of cumulus clouds running parallel to the wind.", summary: ["Aaraks like you hail from a canyon-carved volcanic world that enjoys an embarrassment of thermals, updrafts from when the wind streams over mountains and ridges, and \"cloud streets\" of aligned lanes of cumulus clouds running parallel to the wind. Feathered, light-boned, and described as \"avian\" by certain other species, you've left your homeworld, looking for adventures (and thermals!) on other planets and habitats."],  benefits: ["If jumping from a height elevated by at least 30 feet (9 m) from your surroundings, you can glide a long distance before landing at some lower point in range.", "You reduce your falling damage from a fall by one wound severity.", "You don't get a GM intrusion if you roll a 1 on a dodge roll.", ], sidebar: "<p>You can extend your glide duration and perhaps distance if you find a thermal, a series of thermals, or a low-gravity environment that can keep you aloft longer. Work with your GM to determine what local conditions are like.</p>", }, 
	{ name: "Cyborg", ref: ["CCR 118",], genres: ["Science Fiction",], summarybrief: "You sport a variety of cybernetic implants, some of which replace missing organs you would have had if you were a human, with others designed to enhance whatever biology you still possess.", summary: ["You sport a variety of cybernetic implants, some of which replace missing organs you would have had if you were a human, with others designed to enhance whatever biology you still possess. You might have been born of a birthing process all the people of your colony undergo, willingly augmented as part of a stint of military service, or assimilated into a cybernetic collective against your will (from which you later escaped)&mdash;or you might be ignorant of why you're half machine. Most days, you figure it doesn't matter. It's not what you're made of that counts; it's your actions."],  benefits: ["You don't get a GM intrusion if you roll a 1 on a Might defense task.", "You are trained in hacking.", "You inflict +1 damage with melee attacks via conducted electricity.", ], }, 
	{ name: "Delph", ref: ["CCR 118",], genres: ["Science Fiction",], summarybrief: "Delphs are welcome almost anywhere, usually because of their skin artistry&mdash;your people's metachrotic ability to create colorful, unique designs and patterns across your entire body, including your luxurious head tendrils.", summary: ["Delphs are welcome almost anywhere, usually because of their skin artistry&mdash;your people's metachrotic ability to create colorful, unique designs and patterns across your entire body, including your luxurious head tendrils. When you really apply yourself, you can make amazingly beautiful patterns (or help camouflage yourself in some environments if you have about ten minutes to create a new design on your skin). What's less well known is your people's capacity to produce intraspecies pheromones (usually whether you want to or not) that almost anyone&mdash;delphs and other species&mdash;find alluring, or at least pleasant."],  benefits: ["You can apply an asset to positive social interactions (whether you're using charm or deception) if your pheromone affects whoever you're talking to.", "When you take ten minutes to update your skin design for a certain environment, you gain an asset to stealth tasks in that environment.", ], sidebar: "<p>Your pheromones don't affect machines and may not affect all alien species. Work with your GM to see who might find your presence pleasant.</p>", }, 
	{ name: "D'nec", ref: ["CCR 119",], genres: ["Science Fiction",], summarybrief: "Like your fellows, you are a 4-foot (1 m) tall humanoid with glowing eyes.", summary: ["Like your fellows, you are a 4-foot (1 m) tall humanoid with glowing eyes. The d'nec are a nomadic species capable of repairing broken or scavenged electronics, engines, robots, and other devices, and then find a market for the reconditioned results. Though raised with the same disciplines as other d'nec, you struck out on your own, hoping to find new opportunities and new experiences the average d'nec can't even imagine."],  benefits: ["You gain 1 extra point to your Intellect Pool each time you use a recovery.", "You trained in systems operation.", "You inflict +1 damage with light ranged energy weapons.", ], }, 
	{ name: "Dragonfolk", ref: ["CCR 85",], genres: ["Fantasy",], summarybrief: "Scaled and descended from dragons, you share a kinship with some of the mightiest creatures that ever winged their way across the world.", summary: ["Scaled and descended from dragons, you share a kinship with some of the mightiest creatures that ever winged their way across the world. You might have been born of dragonfolk parents, willingly transformed in a magical ceremony, or chosen by a dragon to be their agent or champion&mdash;or you might have no idea why you are the way you are. Some claim you have a great destiny, but whether you believe that is up to you.", ],benefits: ["You don't get a GM intrusion if you roll a 1 on a block task.", "You are trained in intimidation (except against other dragonfolk and dragons).", "Choose an energy (acid, cold, fire, and so on); you inflict +1 damage when you attack with this energy.", ], sidebar: "<p>Work with your GM if you want your dragonfolk character to have a breath weapon. You can easily adapt one of your type or focus abilities, such as Blast, Shroud of Flame, Lightning Hand, or something similar, so the effect is produced from your breath instead of as presented in the ability description.</p>", }, 
	{ name: "Drakain", ref: ["CCR 119",], genres: ["Science Fiction",], summarybrief: "Your skin is ridged with lines of bone and you likely stand at least 6 feet (2 m) tall.", summary: ["Your skin is ridged with lines of bone and you likely stand at least 6 feet (2 m) tall. Some might compare drakain to humans, but only the foolish would do so aloud. You and other drakain deeply value combat and honor, believing that death in battle is among the most glorious of ends. After all, yours is a proud warrior people, and drakain have parlayed their prowess into great empires in the past. You cherish your birthright, but that doesn't keep you from befriending beings of other species and exploring opportunities that come your way."],  benefits: ["You can take one more minor wound than normal.", "You are trained in intimidation (except against other drakain).", "You inflict +1 damage with bladed weapons (or high-tech versions of the same).", ], }, 
	{ name: "Dwarf", ref: ["CCR 85",], genres: ["Fantasy",], summarybrief: "You're a stocky, broad-shouldered, bearded native of the mountains and hills.", summary: ["You're a stocky, broad-shouldered, bearded native of the mountains and hills. You're also as stubborn as the stone in which the dwarves carve their homes under the mountains. Tradition, honor, pride in smithcraft and warcraft, and a keen appreciation of the wealth buried under the roots of the world are all part of your heritage. Those who wish you ill should be wary of your temper. When dwarves are wronged, they never forget."],  benefits: ["You add +1 on recoveries.", "You are trained in navigation (if underground or in mountainous areas).", "You inflict +1 damage with axes.", ], }, 
	{ name: "Elf", ref: ["CCR 86",], genres: ["Fantasy",], summarybrief: "You haunt the woodlands and deep, natural realms, as your people have for millennia.", summary: ["You haunt the woodlands and deep, natural realms, as your people have for millennia. You are the arrow in the night, the shadow in the glade, and the laughter on the wind. As an elf, you are slender, quick, graceful, and long lived. You manage the sorrows of living much longer than most others with song, wine, and an appreciation for the deep beauties of growing things, especially trees, which can live even longer than you do."],  benefits: ["You don't get a GM intrusion if you roll a 1 on an Intellect defense roll.", "You are trained in stealth (if in forested areas).", "You inflict +1 damage with bows.", ], sidebar: "<p>Half-elves gain either the Elf species characteristics or the <a href='#define-species-human'>Human</a> species characteristics, whichever you decide when creating your half-elf character.</p>", }, 
	{ name: "Gnome", ref: ["CCR 86",], genres: ["Fantasy",], summarybrief: "Standing about three and a half feet (100 cm) tall, you are curious and love discovering ways to turn found things into art, tools, or weapons.", summary: ["Standing about three and a half feet (100 cm) tall, you are curious and love discovering ways to turn found things into art, tools, or weapons. You might be a sculptor, smith, artist, chef, storyteller, or inventor. Alchemy, magic, and engineering fascinate you. Other beings may see you as a strange mix of a nature-loving elf and a craft-obsessed dwarf, but you and your kind are unique people with a passion for life, exploration, and creation."],  benefits: ["You don't get a GM intrusion if you roll a 1 on a dodge roll.", "You are trained in crafting.", "You inflict +1 damage with light melee weapons.", ], }, 
	{ name: "Halfling", ref: ["CCR 86",], genres: ["Fantasy",], summarybrief: "Three feet (1 m) tall and proud of every inch, you are fond of the comforts of home but itching for a little adventure now and then.", summary: ["Three feet (1 m) tall and proud of every inch, you are fond of the comforts of home but itching for a little adventure now and then. Small and quick, you have a way of getting along with everyone. You might have been raised in a halfling village, a mixed community where humans and the small folk work and eat side by side as friends, or a less welcoming environment where your people get things done using deception and criminal activity. You and humans have a lot in common&mdash;you're just more compact and efficient about it."],  benefits: ["You don't get a GM intrusion if you roll a 1 on a stealth task.", "You are trained in escaping.", "You inflict +1 damage with light thrown weapons.", ], }, 
	{ name: "Hellborn", ref: ["CCR 87",], genres: ["Fantasy",], summarybrief: "Part human and part something from another dimension, you might be the orphan of a supernatural dalliance, the result of a magical ritual gone wrong, a scion of a long-established bloodline, or just someone who spiritually \"ingested\" the demon that tried to possess you.", summary: ["Part human and part something from another dimension, you might be the orphan of a supernatural dalliance, the result of a magical ritual gone wrong, a scion of a long-established bloodline, or just someone who spiritually \"ingested\" the demon that tried to possess you. Some of your kind have horns, tails, and pointed teeth. Others are more subtle or more obvious in their differences&mdash;a shadow of a knife edge in their face and a touch that withers normal plants, a little too much fire in their eyes and a scent of ash in the air, a forked tongue, goatlike legs, or the inability to cast a shadow. Work with the GM on your particular hellborn appearance."],  benefits: ["Reduce the severity of wounds you receive from fire and heat by one step.", "You are trained in magic lore.", "You inflict +1 damage with unarmed attacks.", ], sidebar: "<p>Work with your GM if you want your hellborn character to have an inherently magical ability related to your alternate-dimensional heritage. You can easily adapt one of your type or focus abilities, such as Seeds of Fury, Sacred Smite, Tribulation, or something similar, so the effect is something you personally manifest instead of as presented in the ability description.</p>", }, 
	{ name: "Human", ref: ["CCR 87", "CCR 120",], genres: ["Any Genre",], summarybrief: "Humans are among the youngest species, and perhaps that's why&mdash;when considered as a whole&mdash;they're more given to explore, conquer, and expand their communities, even if that means taking from other species or other humans.", summary: ["Humans are among the youngest species, and perhaps that's why&mdash;when considered as a whole&mdash;they're more given to explore, conquer, and expand their communities, even if that means taking from other species or other humans. Individually, humans couldn't be more diverse. Which means you could be under 5 feet (150 cm) tall and barely 100 pounds (45 kg), or well over 6 feet (180 cm) tall and weigh in at 250 pounds (113 kg); have blue eyes or brown, black, green, or some other variation; have no hair, flowing golden locks, amazing dreads, a mohawk, or some other rakish cut; be all about your faith, exploring ancient places, keeping evil at bay, enriching yourself, or some other disposition; and so on. What's definitely true is that you are not afraid to strive for what you want and believe in."],  benefits: ["Choose a second descriptor and add its benefits to your regular descriptor.", ], sidebar: "<p>If you choose Human as your species, your character sentence \"I am an adjective species noun who verbs\" gains another element: your second descriptor. For example, your sentence might be \"I am a Brash and Rugged Human Fighter who Masters Weaponry.\"</p><p>In a game where everyone's human, using the Human species option may not make sense. Your GM might grant you the option to choose Human as a species only if other species are also part of the game.</p>", }, 
	{ name: "Mutant", ref: ["CCR 120",], genres: ["Science Fiction",], summarybrief: "Savage forces strong enough to destroy a world left you transformed.", summary: ["Savage forces strong enough to destroy a world left you transformed. Perhaps through latent mutations passed down from ancestors that survived the apocalypse, or because something about you reacts when exposed to radiation or some other mutagenic source, you've gained mutations. You might look relatively similar to others of your species, or you might have one or more obvious physical differences that make it hard to disguise your nature&mdash;work with your GM to decide your specific features. Not that you necessarily want to hide what you are; you might wish to proudly display what makes you different and, to your mind, better."],  benefits: ["You don't get a GM intrusion if you roll a 1 on a Might defense task.", "Choose any tier 1 ability from any focus; work with your GM to adapt that ability as your mutation.", ], }, 
	{ name: "Naron", ref: ["CCR 120",], genres: ["Science Fiction",], summarybrief: "You are descended from a species of natural telepaths that communicate mind to mind, not via spoken language. ", summary: ["You are descended from a species of natural telepaths that communicate mind to mind, not via spoken language. Standing about 5 feet (1.5 m) tall, your prominence&mdash;usually a subtle glow that faintly silhouettes your bald head&mdash;moves in slow waves when you're relaxed, or flashes and pulses when you're excited or stressed (unless you consciously suppress it). The naron are generally a peaceful people, but some of you have found the wider galaxy offers interesting opportunities in all walks of society among creatures where psi is a rare to vanishing trait."],  benefits: ["You can't produce vocal sounds but instead telepathically communicate with one, some, or all intelligent creatures within short range as easily as if you were talking back and forth out loud.", "You are trained in charm or deception.", "You are trained in recognizing motive.", ], sidebar: "<p>Naron telepathy doesn't allow you to read others' thoughts or even talk with them if they want to shut you out. But if you are a naron who wants to explore your latent telepathic gifts, choose Psion as your type and/or a psi-heavy focus such as Commands Mental Powers. However, other foci could be adapted or reskinned so the abilities granted are considered to be generated by your latent psi.</p>", }, 
	{ name: "Orc", ref: ["CCR 87",], genres: ["Fantasy",], summarybrief: "Other species are sometimes prejudiced against orcs, viewing them as misbegotten creatures destined to serve as fodder for more powerful evil overlords.", summary: ["Other species are sometimes prejudiced against orcs, viewing them as misbegotten creatures destined to serve as fodder for more powerful evil overlords. Perhaps that's true of some; however, you know orcs are a proud (if aggressive) people with a sense of honor. Though they can be deadly enemies, especially to humans and elves, they have been known to ally with others against a larger threat. Whatever your particular upbringing, you've ventured out into the wider world looking for new opportunities. How much your heritage affects your outlook is up to you&mdash;it might color everything, or it might only come up when someone flinches from your visage."],  benefits: ["You can  take one more minor wound than normal.", "You are trained in intimidation (except against other orcs).", "You inflict +1 damage with heavy melee weapons.", ], sidebar: "<p>Half-orcs gain either the Orc species characteristics or the <a href='#define-species-human'>Human</a> species characteristics, whichever you decide when creating your half-orc character.</p>", }, 
	{ name: "Prota", ref: ["CCR 121",], genres: ["Science Fiction",], summarybrief: "Your flesh is akin to stretchy clay in that you can change your overall shape between a basic sluglike blob (or circular sphere) to a being with up to several pseudopods useful as your arms and legs.", summary: ["Your flesh is akin to stretchy clay in that you can change your overall shape between a basic sluglike blob (or circular sphere) to a being with up to several pseudopods useful as your arms and legs. Your control over your shape is limited; you're unable to exactly replicate other creatures or objects, but you can evoke their shapes, though it takes you about ten minutes to achieve a new shape. Prota are rare&mdash;your homeworld was destroyed by war long before you were born. You rarely encounter others of your kind, so you've learned to get along with other beings, some of whom you've come to regard as your friends or found family."],  benefits: ["You can  take one more minor wound than normal.", "You are trained in charm.", "You gain an asset to a specific task that you've shaped your body for.", ], sidebar: "<p>Examples of tasks a prota can gain an asset for after spending ten minutes reshaping themselves include hiding in a distinct spot, squeezing through an explicit small aperture, climbing a particular wall, aiming at a specified location, carrying an especially heavy load, and so on.</p>", }, 
	{ name: "Rigellian", ref: ["CCR 121",], genres: ["Science Fiction",], summarybrief: "As a rigellian, you are a 7-foot (2 m) tall humanoid covered in thick fur.", summary: ["As a rigellian, you are a 7-foot (2 m) tall humanoid covered in thick fur. Rigellians are renowned for their strength, loyalty, and roaring language. Most rigellians are peaceful and enjoy life on a technologically advanced homeworld orbiting a distant blue supergiant star. While you may share the sense of honor most of your kind possess, you've probably left home behind to pursue adventure in the wider galaxy."],  benefits: ["You don't get a GM intrusion if you roll a 1 on an athletics task.", "You are trained in systems operation.", "You inflict +1 damage with ranged projectile weapons.", ], }, 
	{ name: "Stelan", ref: ["CCR 121",], genres: ["Science Fiction",], summarybrief: "If not for the angularity of your features compared with humans, outsiders would be hard-pressed to tell you apart. However, your difference in temperament is more obvious: You have little use for gut feelings, emotions that cloud sound judgment.", summary: ["If not for the angularity of your features compared with humans, outsiders would be hard-pressed to tell you apart. However, your difference in temperament is more obvious. It only takes a few minutes in your presence to understand that stelans prize rational thought above everything, having little use for gut feelings, emotions that cloud sound judgment, and the value of anecdote in the face of compiled data."],  benefits: ["You don't get a GM intrusion if you roll a 1 on an Intellect defense task.", "You are trained in gathering information.", "You can choose to force your target to lose its next turn instead of dealing damage with a successful unarmed attack.", ], }, 
	{ name: "Vendeer", ref: ["CCR 122",], genres: ["Science Fiction",], summarybrief: "You are a vendeer, which means that you are 9 feet (2.5 m) tall, slender, and purple-skinned. Your mane-like \"hair\" makes you slightly more sensitive to psychic phenomena, especially the thoughts and emotions of other creatures, intelligent or not.", summary: ["You are a vendeer, which means that you are 9 feet (2.5 m) tall, slender, and purple-skinned. Your mane-like \"hair\" makes you slightly more sensitive to psychic phenomena, especially the thoughts and emotions of other creatures, intelligent or not. Vendeer are native to a lush forest moon, and though not technically advanced, your kin enjoy rich cultural and spiritual lives. But the lure of other planets and stars pulled you far from home, and now you pursue a life far different than that of the hunter-gatherers you left behind."],  benefits: ["You don't get a GM intrusion if you roll a 1 on a recognizing motive task.", "You are trained in perception.", "You inflict +1 damage with spears (or high-tech versions of the same).", ], }, 
	{ name: "Zantari", ref: ["CCR 122",], genres: ["Science Fiction",], summarybrief: "Your antennae give you improved senses and your thick skin helps insulate you against the cold of the icy moon your people call home, but otherwise you appear humanoid.", summary: ["Your antennae give you improved senses and your thick skin helps insulate you against the cold of the icy moon your people call home, but otherwise you appear humanoid. However, appearances can be deceptive, as zantari have five genders, which outsiders find difficult to distinguish. As a zantari, you value honor, ritual combat, and military service, but also artistry. Others sometimes describe you as emotional, but for you that's a compliment&mdash;without intensity of feeling, how could life be worth living?"],  benefits: ["Reduce the severity of wounds you receive from ice and cold by one step.", "You are trained in perception.", "You inflict +1 damage with ranged energy weapons.", ], }, 
];
const typeList = [
	{ name: "Android", ref: ["CCR 100",], genres: ["Space Opera",], summarybrief: "You were manufactured, not born.", summary: "<p>You were manufactured, not born. Some might say that makes you superior to living people, especially those born without the benefit of strict genetic oversight. And even people who have used genetic engineering lack your ability to upgrade yourself as needed to deal with new situations, new jobs, and wherever your curiosity might lead. Your integument and frame are tougher than skin and bones, and you have a way with other machines that most living things never will.</p><p>As adaptable as you are, you can take multiple different roles on your team over time, including serving as a frontline combatant. You're equally useful in other situations, especially when interfacing with nearby machines. But even that pales in comparison to your android capacity to dump old skills and take on new training in something important to an emerging situation or upcoming mission.</p>", backgrounds: ["You just discovered you are an android, built to mimic humans, and now you want to find your maker and ask them some tough questions.", "You were sold as a \"nanny bot\" to a family to watch their children, which you excelled at until the dissident bomb. Now repurposed, you hope to one day bring retribution to the offenders.", "You had an earlier existence, but as you learned a few weeks ago, your memories were erased to give you your current identity.", "One of thousands of military androids that fought in the planetary wars, you ran away.", "Raised by the institute, your life has been protected and serene. Now you're looking for adventure farther away from the civilized worlds.", "You toiled for years to pay off your manufacture bond and were finally emancipated a few months ago.", "You've always loved space travel. One day you hope to upgrade yourself to become a shipmind capable of faster-than-light travel yourself.", "You were the target of a crime against artificial people a few years ago.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Might Pool", "Add +1 to Speed Pool", "Add +2 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use all weapons", "Freely use all armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A heavy blaster, five weapon energy packs (50 shots each), appropriate clothing, spray-on impact armor (ten uses), a smart device (glasses, badge, ring, or the like), a backpack, binoculars, a crowbar, digital intoxicant (works with Androids), a bag of light tools, an everlight, and eyeshades. Your character also starts with currency equivalent to a moderately priced item.", sidebar: "<p>Androids using Flex Skill usually accomplish the training by expanding data they already downloaded, compressed, and stored in their system, though in some cases accessing a specialized skill might require connecting to an external data hub.</p>", abilities: ["Built to Hack", "Flex Skill", "Machine Not Flesh", ], }, 
	{ name: "Archer", ref: ["CCR 64",], genres: ["Swords &amp; Sorcery", "Epic Fantasy",], summarybrief: "You're a War Arrow, a Hawkeye, a Death Whisper&mdash;or, as they sometimes call those like you, an Archer.", summary: "<p>You're a War Arrow, a Hawkeye, a Death Whisper&mdash;or, as they sometimes call those like you, an Archer. You down your foes from afar with whistling bolts, one shot after another, before they have a chance to close. Even when foes bite, hew, and curse you in turn, your steady hand and long experience wielding a bow in combat allow your aim to remain true.</p><p>You excel at ranged support for your allies, or sometimes downing foes from afar before hostilities have a chance to truly begin. You're also adept at watching over an area for your next target, protecting others in your band with the threat of your nocked arrow.</p>", backgrounds: ["You bow-hunted as a child to feed your family when your single parent was hurt by raiders&mdash;raiders who later burned your family's home to the ground, killing all but you.", "You won an archery contest a month ago despite allegations of cheating.", "You were stranded in a forlorn desert keep for years until rescued two months ago.", "You poached game from the royal forest to feed the starving (including yourself) until you were caught and served years in the dungeon. Recently, you escaped.", "You were part of an expedition to retrieve a sacred artifact that went missing here a year ago.", "A barbarian host saved your homeland from a dragon about six months earlier.", "Every year a famed archery contest is held. One day you hope to enter and win it.", "You found a weird arrow in a swamp-choked ruin a couple of weeks ago.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +4 to Speed Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A bow and quiver of 24 arrows, appropriate clothing, a bag of light tools (which include tools for fletching arrows and extra bowstrings), a backpack, a bedroll, 50 feet (16 m) of rope, a tent, a hand mirror, three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item", abilities: ["Expert Combatant", "Overwatch", "Quick Draw", ], }, 
	{ name: "Axe Fighter", ref: ["CCR 65",], genres: ["Swords &amp; Sorcery",], summarybrief: "When combat calls, your chosen weapon is a sturdy axe&mdash;maybe a handaxe, a battleaxe, or even a greataxe.", summary: "<p>When combat calls, your chosen weapon is a sturdy axe&mdash;maybe a handaxe, a battleaxe, or even a greataxe. Thus, they name you Deathhew, Axe Reaver, or maybe just what you are: an Axe Fighter. You've split many skulls with your axe, and if the gods continue to watch over you, many more will fall before you in the years ahead.</p><p>Like others in your band, you're ready for combat. You don't mind if an ally gets in the first blow against cursed creatures you often face, because you know you're more than capable of finishing the job with a final, sundering swing of your blade.</p>", backgrounds: ["Raised in a forest-bound village, you took up your axe to fight encroaching dire wolves.", "Six months ago in a miasmic jungle, you acquired a jade pommel for your axe.", "Last week you returned to a merchant's home for payment but found them dead.", "A clan warrior, you were exiled from your mountainous homeland at age 16 for killing (or at least being accused of killing) your best friend.", "A shrine to ancient, prehuman evils was discovered under your village a month ago.", "Your axe is scratched from countless skirmishes during your years as a mercenary, but now you wish to pursue a new goal. You're just not quite sure what.", "The monstrous troll head you mounted as a trophy disappeared last week.", "Your mother, who taught you the ways of the axe, went blind mysteriously a year ago.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +4 to Might Pool", "Add +1 Edge in Pool of your choice", "Freely use all axes", "Freely use all armor", "Gain one weapon of your choice (or accept the equipment bundle weapons)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A greataxe and a handaxe, appropriate clothing, chainmail armor, a backpack, a bedroll, 50 feet (16 m) of rope, a signal horn, three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Axe Hook", "Expert Combatant", "Split Skull", ], }, 
	{ name: "Barbarian", ref: ["CCR 45",], genres: ["Dungeon Fantasy", "Swords &amp; Sorcery",], summarybrief: "For you, every day is another chance to spill blood, drink ale, or both&mdash;and pick up a scar or two to commemorate the day.", summary: "<p>For you, every day is another chance to spill blood, drink ale, or both&mdash;and pick up a scar or two to commemorate the day. Born an outlander and a wanderer at heart, you've become an adventurer more by accident than design. They say you're savage, but only behind your back, lest they face your fury.</p><p>Out of everyone in your group, you tend to draw the most attention from foes because you give up trepidation for rage. Fears fall away when your blood is up; all you see is red. Frenzy gives you strength, battle-minded purpose, and, more times than not, a path to victory. But when your battle fever passes, your lore of the wild places helps guide you and your allies through uncivilized lands where monsters, bandits, and other barbarians roam.</p>", backgrounds: ["Your nomadic tribe hunted in the icy wastes, but the chief's son humiliated you in ritual combat, and now you seek to redeem yourself.", "You were the leader of a barbarian host for a while, but gave it up a year ago to wander.", "You've sworn to kill every dark wizard in a demonic cabal, but a few remain hidden.", "Two years ago you failed to protect a princess from a serpent cult and their snakes.", "Your folk dwelled in the rolling hills until they were slaughtered by treacherous devils from the city. You thirst for revenge.", "You taught yourself how to survive in the deep jungle and spent most of your life alone. Today, you seek companionship and the strength found in numbers.", "A friend of yours went their own way a few years ago. Rumors are they're now a bandit.", "You've come into great wealth a few times but always lost it&mdash;most recently a year ago.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +3 to Might Pool", "Add +1 to Speed Pool", "Add +1 Edge in Pool of your choice", "Freely use all weapons", "Freely use light and medium armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A greatsword, appropriate clothing, chainmail armor, a backpack, a bedroll, 50 feet (16 m) of rope, a crowbar, a wineskin (full), three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Frenzy", "Wilderness Survival", "Wounded Fury-v1", ], }, 
	{ name: "Bard", ref: ["CCR 46",], genres: ["Dungeon Fantasy",], summarybrief: "You're an entertainer: a singer, dancer, poet, storyteller, or something similar.", summary: "<p>You're an entertainer: a singer, dancer, poet, storyteller, or something similar. Naturally charismatic and talented, your diligence and study have only improved your art. You know old poems, songs, jokes, and stories, and you're skilled at creating new ones, too. Your seemingly beneficent nature puts others at their ease, and your performances lift spirits, ease mental burdens, and may even inspire.</p><p>Most characters on your team probably look to you for help, advice, and, if nothing else, a rousing performance to spark courage. Those same talents are useful when your group tries diplomacy. Whether you're relying on the truth or attempting a deception, your ability to flatter, smile, and delight others may open places that swords and spells can't.</p>", backgrounds: ["You spent years as a wandering minstrel collecting epic tales, but some still elude you.", "Your younger sibling asked to apprentice with you last week.", "You were a court entertainer and courtier until a jealous noble slandered you.", "The theater your uncle runs was struck and destroyed by a falling star last month.", "You wrote a song to galvanize the rebellion, but now the king's assassins hunt you.", "You've been getting gigs at an inn right outside the palace walls for almost a year.", "You received a rare book of poems as a gift from your lover, but it was stolen last week.", "Your instrument broke; you've been using a shoddy replacement since then.",], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Might Pool", "Add +1 to Speed Pool", "Add +2 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:",], equipment: "A rapier, a gittern (a musical instrument also known as a guitar) and pick, a shield, a backpack, a bedroll, 50 feet (16 m) of rope, a stage makeup kit, three torches, three days of rations and water, a tinderbox, and enough extra currency to buy a moderately priced item.", sidebar: "<p>As a Bard, who is focused more on Speed than Might, you probably prefer to make dodge defense rolls in combat; if so, you probably don't wear armor because that would hinder your Speed defense rolls to dodge.</p>", abilities: ["Expert Interlocuter", "Inspiring Performance", "A Smile and a Word", ], }, 
	{ name: "Burglar", ref: ["CCR 76",], genres: ["Epic Fantasy",], summarybrief: "Who would've thought that you'd one day be capably sneaking through goblin warrens and escaping dragons? Certainly not you.", summary: "<p>Who would've thought that you'd one day be capably sneaking through goblin warrens and escaping dragons? Certainly not you. But necessity is the best teacher, and you've learned that shadows are your friends when you need somewhere to hide, sneaking is more than its own reward if you need to accomplish something quickly when no one's watching, and escaping a foe is almost always the right choice, even if it's so you can circle around and attack them by surprise.</p><p>You prefer letting someone else in your group begin conflicts, allowing you to slip past unnoticed, possibly so you can avoid the combat altogether. When danger isn't imminent, you're among the best suited to carefully examine a new location and, when possible, steal whatever isn't spiked down.</p>", backgrounds: ["Raised in a small village, you learned to hide as a way to stay alive when orcs, goblins, and evil men started to appear.", "Your former company of six disbanded a month ago after another member disappeared.", "You recently burgled a group of trolls, though you've already run through most of the gold.", "A map of a nearby barrow's surprisingly large interior found its way to you two weeks ago.", "Your parents were sick and lame, so you learned to supplement the household with quick hands. Then, one terrible day, they paid the price for your pilfering.", "You won a drinking contest at a nearby inn and now get one free drink a night if you wish.", "Everything was taken from you. Now you seek to reclaim your stolen heritage, one pilfered valuable at a time.", "A keepsake and good luck charm you found on your very first adventure was stolen last week.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +2 to Speed Pool", "Add +2 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapons)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "Two daggers, appropriate clothing, a bag of light tools (including lockpicks), a backpack, a bedroll, 50 feet (16 m) of rope, a pipe and tobacco pouch, three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Burgle", "Escape", "Slip Into Shadow-v1", ], }, 
	{ name: "Cleric", ref: ["CCR 48",], genres: ["Dungeon Fantasy",], summarybrief: "You follow a divine being and serve as their representative among mortals.", summary: "<p>You follow a divine being and serve as their representative among mortals. The power of your deity (or deities) allows you to perform minor \"miracles\" on their behalf. How well or poorly you follow the teachings of your deity is up to you, but their main area of interest greatly influences how you see the world. For instance, a Cleric serving a god of fire may have different priorities than one who serves a goddess of the sea. But almost all deities agree on one thing: healing and blessing others is a good way to extend their influence in the world.</p><p>Your allies may see you as a vital support with your ability to bless their actions and heal their wounds after (or during!) a fight. But the truth is that you're a capable warrior in your own right, armed and armored nearly as well as front-rank fighters, and with the added capability of being able to turn away your god's most hated foes&mdash;usually the reanimated dead.</p>", backgrounds: ["In a moment of doubt a decade ago, you lost your faith. You've spent all these years since making up for your sin.", "Your temple burned to the ground last year, and you still don't know how or why.", "One month ago, you killed a demon-possessed fellow cleric of your order to save a child.", "Raised in a devout temple order, you're driven by a compassion to heal those in need.", "Six months ago, you recovered a gilt-edged holy book, but it remains magically sealed.", "The only survivor of a foray into a ruin two years ago, you still rarely speak of it.", "Hand-selected by a deity to wander, your holy task is to root out forces of evil and unlife.", "You were recently released from lockup following a drunken brawl in a tavern.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Might Pool", "Add +1 to Speed Pool", "Add +2 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use all armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A mace or hammer, appropriate clothing, chainmail armor, a backpack, a bedroll, 50 feet (16 m) of rope, extra bandages (eases four healing tasks before being used up), a book of prayers, two torches, three days of rations and water, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Combat Prowess", "Divine Radiance", "Healing Hand", ], }, 
	{ name: "Crimefighter", ref: ["CCR 130",], genres: ["Superheroes",], rank: 1, powershifts: 2, summarybrief: "You apply your keen intelligence to outwit the dark forces, reveal corruption, and put a stop to illegal activities.", summary: "<p>You apply your keen intelligence to outwit the dark forces, reveal corruption, and put a stop to illegal activities. Though some see you as a super-detective able to piece together fragmented clues and unravel complex mysteries that stump the police, you can also hold your own in a fight. You might be skilled in various martial arts, tactical combat, and/or strategic use of nonlethal gadgets, ensuring you can subdue opponents of all kinds.</p><p>You often work alone in the shadows, but sometimes you join other heroes, especially when they are looking for a way forward against a particularly cunning villain. You being part of the team means they gain something of your reputation&mdash;a terrifying enigma who will pursue criminals wherever they might lead.</p>", backgrounds: ["Your parent was a proud, long-serving member of a superhero group. You've dedicated yourself to taking up their role (if not their mantle).", "Busy fighting crime, you recently missed an engagement important to your secret identity.", "You've never had much. You've decided to fight crime, but you're also open to endorsements.", "A few months ago you learned your efforts to put down one villain helped give rise to another.", "You noticed some bad behavior but figured it wasn't your problem. But then someone you love was murdered. Now you never look the other way.", "The police sometimes take a dim view of your efforts, as happened last week, ruining your case.", "Your protégé of many years struck out on their own a few weeks ago.", "Despite what you've always thought, you recently learned you may have some living relatives.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +2 to Might Pool", "Add +3 to Speed Pool", "Add +5 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use all weapons", "Freely use all armor", "Two <a href='#power-shifts'>power shifts</a>", "One ability from the Origin Superhero Abilities list", "At tier 3 and tier 6, choose an appropriate ability from the Science Fiction Genre Abilities list or the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], abilities: ["Always Tinkering", "Sleuthing", "Super Combatant", "Superheroics",], }, 
	{ name: "Dealer", ref: ["CCR 110",], genres: ["Postapocalypse",], summarybrief: "You make your way through civilization's ruins as best you know how, trading for supplies with your natural talent for bullshit.", summary: "<p>You make your way through civilization's ruins as best you know how, trading for supplies with your natural talent for bullshit. When things go south, you run away, or maybe plant a knife in your would-be trading partner's back. You have a way of connecting people to the things they want&mdash;or at least promising to do so&mdash;and folks sometimes call you a Fixer or Supplier. And though you might be moved to help others with their needs, if we're being honest, your own skin is your most important commodity.</p><p>You're adept at talking, so you're probably one of the people your band relies on to deal with strangers, allies, and potential foes for as long as words serve the situation. Others in your band also benefit from your trading prowess, such as it is. But when the situation turns ugly, you're ready to dance away from a double-cross, or maybe instigate the same yourself.</p>", backgrounds: ["You raised a family before the apocalypse, but lost them in the interim. Now you're always looking for news about them despite the odds being stacked against their survival after all this time.", "You hid a stash of psychedelic drugs somewhere around here six months ago, but you forget where.", "The warlord you stabbed and left for dead a year ago is still alive, according to recent rumors.", "You got into a vehicle accident, and when you woke up from a coma months later, the apocalypse had happened. You're still not quite sure what caused it but are determined to find out one day.", "A few weeks ago you learned that one of the teenagers in the community is probably your child.", "The raider band that made camp nearby a month ago didn't attack your group because of your verbal skills.", "You managed a superstore before the apocalypse, but got separated from it. You believe that if you can get back to it, you'll be set up for decades.", "Last year you negotiated a deal that should've saved everyone, but you were double-crossed.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +2 to Speed Pool", "Add +2 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A medium handgun (with 10 bullets), appropriate clothing, a bag of trade goods (which include a few pieces of candy, a couple of batteries, a few lighters, and so on), a handaxe, a backpack, a sleeping bag, binoculars, a fishing rod and tackle, a cast-iron pot, a book of matches, two candles, a hammer, and a rusted knife. Your character also starts with currency or barter equivalent to a moderately priced item.", abilities: ["Fast Talk", "Sneak Attack", "When the Deal Bombs", ], }, 
	{ name: "Diplomat", ref: ["CCR 92",], genres: ["Hard Science Fiction", "Space Opera",], summarybrief: "You play the long game while everyone else is reacting to the latest provocation. You know how to smile, flatter, and offer gifts to your potential new ally, even when you'd prefer to jump across the table and strangle them.", summary: "<p>You play the long game while everyone else is reacting to the latest provocation. You know how to smile, flatter, and offer gifts to your potential new ally, even when you'd prefer to jump across the table and strangle them. Sometimes less obvious means are required for negotiation. When possible, you try to discover as much as you can about who you'll be talking to. If they won't do as you ask initially, perhaps they'll make a deal in light of something they need that you can help arrange&mdash;or, if you're not above making veiled threats, because you know something they'd prefer not come out.</p><p>You understand others, so you're probably someone who can advise and assist teammates and serve as an intermediary between your allies and strangers. Many times, a bit of diplomacy&mdash;or a bit of distraction through verbal diversion&mdash;is what allows the rest of the team to reach a sensitive location, talk your way out of the same, or, when the stakes are really high, avoid escalating tensions.</p>", backgrounds: ["Your family was part of an asteroid co-op, but your big mouth got you voted out and now you seek to better yourself.", "You brokered a deal between two multiplanetary corps last month, ending years of hostility.", "You, your parents, and your siblings went down in a moon shuttle crash when you were young. You've always suspected a conspiracy was behind it but haven't found any hard evidence. Yet.", "You were recently fired by the new head of the government bureau that employed you.", "One of your colleagues, a fellow analyst in a spy agency, was recently charged with treason.", "You were last in your graduating class, roundly reviled by your classmates, yet here you are, determined to make a difference and prove them all wrong.", "You can't say anything about your biggest diplomatic success lest you risk renewed war.", "Your grandchild helps keep you doing what you do&mdash;they deserve a better future.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Speed Pool", "Add +3 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A briefcase (vacuum-proof), a surelock (to keep others out of your briefcase), appropriate clothing, an extra set of very fine clothing, a smart device (glasses, badge, ring, or the like), a breather, an environmental tent, an everlight, two days of rations and water, a grooming and toiletry kit, and eyeshades. Your character also starts with currency equivalent to a moderately priced item.", abilities: ["Connected", "Fast Talk", "Inspiring Suggestion", ], }, 
	{ name: "Druid", ref: ["CCR 49",], genres: ["Dungeon Fantasy",], summarybrief: "You have a magical affinity for animals and the landscapes they inhabit.", summary: "<p>You have a magical affinity for animals and the landscapes they inhabit. Sometimes you serve as a protector of forests, grasslands, seas, or some other region natural creatures need to survive and thrive; other times you rely on your connection to such places to protect and empower yourself. You might be part of an ancient, far-flung priesthood or a self-taught celebrant channeling the magic of the forest, moon, storm, and beast.</p><p>Your expertise provides your group both offensive might and more discreet or tactful possibilities when you're traveling through or exploring wild environments. Your beast companion aids you and your allies in combat, and it also performs other tasks such as surveillance, distraction, tracking, reaching a location large creatures can't, and so on.</p>", backgrounds: ["You were a solitary hermit tending a sacred grove until raiders burned it. You still hunt them and the seeds they stole.", "News has it that a noble in the next town over is hunting a rare magical stag.", "A wanderer raised by animals, your integration into intelligent society has been rocky.", "For the last year, your recurring nightmare features an aggressive, reddish fungal blight.", "Your people tended a desert oasis until a mage's curse dried its waters. You hope to one day discover the curse-giver's identity.", "You found and returned the queen's runaway dog; now you wonder if you should've kept it.", "Rumors suggest that a long-vanished society of druids has become active again.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Might Pool", "Add +3 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapons)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A quarterstaff, a bow and quiver of 12 arrows, appropriate clothing, leather armor, a backpack, a bedroll, 50 feet (16 m) of rope, a tent, a candle, three days of rations and water, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Beast Companion", "Friend to Small Creatures", "Seeds of Fury-v1", ], }, 
	{ name: "Engineer", ref: ["CCR 93",], genres: ["Hard Science Fiction",], summarybrief: "Listen to those engines hum! Wait, are those harmonics in spec? For you, every machine is a potential opportunity to learn something, to fix something, or maybe even to make something new&mdash;however temporary&mdash;from its parts.", summary: "<p>Listen to those engines hum! Wait, are those harmonics in spec? For you, every machine is a potential opportunity to learn something, to fix something, or maybe even to make something new&mdash;however temporary&mdash;from its parts. If you don't know something, you know what archives are most likely to contain the blueprints or other answers you need, even if that knowledge is encoded in restricted databases.</p><p>You're a maker, a fixer, and a hard-edged knowledge worker with real-world experience in all kinds of scenarios. Because of your presence, your team's mission is more likely to succeed, rather than fail for want of a turbo encabulator.</p>", backgrounds: ["Having barely survived a system failure in your childhood asteroid habitat, you've dedicated yourself to technical pursuits to prevent similar disasters in the future.", "Last week, the news reported that an engineering professor you studied under was murdered.", "When the dissidents attacked, they cut the main power, resulting in your parents' deaths. You've sworn to one day find their leadership and return the favor.", "Your paper on an ion drive refinement means you're still recognized in narrow circles.", "You woke up from a medically induced coma ten years ago with no memory of your past and no identifying documents. After all these years, you still have no answers.", "Last month, the engines on a tramp freighter you were trying to repair exploded.", "You recently returned from a three-year tour of the outer planet deuterium refineries.", "When the colony radiation scrubber broke a month ago, you were able to make a quick fix.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Speed Pool", "Add +3 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light and medium armor", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A set of tools specialized for engineering, appropriate clothing, a backpack, a smart device (glasses, badge, ring, or the like), a breather, an environmental tent, a bolt cutter, an everlight, two days of rations and water, a grooming and toiletry kit, and eyeshades. Your character also starts with currency equivalent to a moderately priced item.", abilities: ["Connected Knowledge", "Expert Engineer", "Modify Device", ], }, 
	{ name: "Enhanced Hero", ref: ["CCR 132",], genres: ["Superheroes",], rank: 2, powershifts: 3, summarybrief: "You're more than human. Something made you that way.", summary: "<p>You're more than human. Something made you that way&mdash;your abilities might be due to cutting-edge cybernetics; a freak accident, such as exposure to exotic energies or chemicals; an experimental serum or genetic therapy, unlocking latent potential or rewriting your very DNA; an alien artifact or mystical ancient relic; or something else. Whatever the source of your enhancement, your abilities allow you to perform feats that are impossible for normal people.</p><p>Your abilities include those that lend themselves to combat, which means that a team-up with others usually has you among those taking the brunt of any hostilities, protecting allies whose enhancements aren't quite as fearsome as your own.</p>", backgrounds: ["After you and your friends crashed into a truck illegally hauling toxic waste, you were enhanced. They died. Now you use your abilities to protect others in their name.", "Recently your enhancement briefly flared with power, but erratically, without your control.", "They attacked you, trying to extract what made you special. Now you're dedicated to not only defending yourself, but going after everyone with similar selfish, criminal motives.", "A scientist who studied your abilities when they first appeared died three weeks ago.", "Your estranged sibling, who couldn't stand the sight of your enhancement, recently reached out.", "You've seen too many people suffer. You took on your role to show everyone that it's possible to fight for something better.", "You accidentally killed a villain you were bringing to justice about a year ago.", "It turns out there may be someone else with a duplicate of your enhancement&mdash;but that person is a villain.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +6 to Might Pool", "Add +6 to Speed Pool", "Add +2 to Intellect Pool", "Add +2 to the Pool you choose for your Superheroics ability", "Add +1 Edge in Pool of your choice", "Freely use all weapons", "Freely use all armor", "Three <a href='#power-shifts'>power shifts</a>", "One ability from the Origin Superhero Abilities list", "At tier 3 and tier 6, choose an appropriate ability from the Science Fiction Genre Abilities list or the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], abilities: ["No Need for Weapons", "Press Advantage", "Successive Attack", "Superheroics",], }, 
	{ name: "Fighter", ref: ["CCR 50",], genres: ["Dungeon Fantasy",], summarybrief: "Weapon tightly gripped, you charge your monstrous foes. Anyone willing to hold a sword might be called a \"fighter,\" but you're a cut above most.", summary: "<p>Weapon tightly gripped, you charge your monstrous foes. Anyone willing to hold a sword might be called a \"fighter,\" but you're a cut above most. Less well-trained warriors may serve as soldiers, guards, and muscle in a tavern, but a Fighter truly understands conflict and battlefield control. You've trained in specific weapons and methods of defense, have scars from past fights, and probably look forward to your next descent into an ancient ruin or enemy's outpost, if only so you can match your weapon against a foe's blade or spell.</p><p>In your group, you're usually the most physically capable, the most durable, and the most ready to meet danger head-on. This attribute probably leads to a role as a protector of your friends&mdash;particularly the least sturdy among them. If someone has to take the lead when entering the monster's den, you're among the first to charge in.<p>", backgrounds: ["You lost your childhood home in war and only survived because you fought. Now, years later, you still seek out the last remnants of the enemy army.", "You've only recently recovered from a major wound after a giant ambushed you.", "People still occasionally recognize you as the winner of a local combat tournament.", "You were a captain during the war, but after the kingdom lost, you kept a low profile.", "Your sibling died exploring a haunted keep. Their sword passed to you three days ago.", "The constabulary discharged you a few months ago, and you're still not sure why.", "The war was long and bloody, but now it's finally over, and you need work.", "You came up as a city guard&mdash;until the city was sacked. Now you seek to redeem yourself by safeguarding those less sturdy than you.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +3 to Might Pool", "Add +1 to Speed Pool", "Add +1 Edge in Pool of your choice", "Freely use all weapons", "Freely use all armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A sword, appropriate clothing, chainmail armor, a shield, a backpack, a bedroll, 50 feet (16 m) of rope, spikes and hammer set, two torches, three days of rations and water, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Expert Combatant", "Press Advantage", "Successive Attack", ], }, 
	{ name: "Heavy", ref: ["CCR 111",], genres: ["Postapocalypse",], summarybrief: "War never changes&mdash;it only changes people like you who have to fight in it or, after the war is lost, battle for survival in a world broken by conflict.", summary: "<p>War never changes&mdash;it only changes people like you who have to fight in it or, after the war is lost, battle for survival in a world broken by conflict. For you, the only way forward is to crush even potential enemies so quickly and violently that they'll never threaten you or that which you cherish again.</p><p>In an often violent postapocalyptic world, your allies appreciate your protection and, when necessary, your aggressive nature when you must force your way into a location that may contain the resources required to survive another day.</p>", backgrounds: ["You lost your children in the apocalypse. Now your goal is to help and preserve children whenever you can.", "You recently learned that you have a condition that will require before-times medical care.", "You were new to the army when the apocalypse happened before dawn. Since then, you've been determined to survive to honor your friends and family who died while still asleep.", "Three weeks ago, your ex-spouse rose to a position of power in your community of survivors.", "You raised a mountain lion from cub to adult, but the creature went missing a few months ago.", "You were given a cocktail of drugs to fight in the war, but the war was what precipitated the apocalypse. Now you try to find any remnants of the generals behind it so you can end them.", "According to new rumors, a community to the west can still manufacture ammunition.", "Last month you and your allies successfully defeated one of the warlords ravaging the area.", "You have a scar on your head from a bullet wound and sometimes experience headaches and blackouts.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +2 to Might Pool", "Add +2 to Speed Pool", "Add +1 Edge in Pool of your choice", "Freely use all weapons", "Freely use all armor", "Gain one weapon of your choice (or accept the equipment bundle weapons)", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A heavy handgun (with 10 bullets) and machete, appropriate clothing, a Kevlar vest, a backpack, a sleeping bag, a gas mask, 50 feet (16 m) of nylon rope, a teakettle, a book of matches, two candles, a hammer, and a rusted knife. Your character also starts with currency or barter equivalent to a moderately priced item.", sidebar: "<p>For a Heavy, Expert Combatant also means choosing training in weapons appropriate to the genre, such as pistols and rifles.</p>", abilities: ["Combat Prowess", "Desperate Feat", "Expert Combatant", ], }, 
	{ name: "Knife Fighter", ref: ["CCR 66",], genres: ["Swords &amp; Sorcery",], summarybrief: "Adversaries (especially those who are sword trained) often underestimate someone armed only with daggers.", summary: "<p>Adversaries (especially those who are sword trained) often underestimate someone armed only with daggers. If they challenge you, they learn their error when you flick a knife into their eye before they can even draw their oversized weapons. Maybe you prefer to be called a Quicksteel or a Shank, like some of your fellow students of the dagger, but in the end, Knife Fighter describes what you are as expeditiously as a knife thrust.</p><p>You're probably one more combatant in your group, though your ability to be among the first in a conflict to draw blood gives your comrades cover as they make their own attacks. It's especially useful if you can pin a foe to the wall or floor for a moment, because that could signal to your allies who they should attack next.</p>", backgrounds: ["You first picked up a knife as a street urchin in a sprawling city. You learned to be motivated by simple survival.", "You were muscle on a job to con a wealthy merchant two weeks ago but never got paid.", "A horrific extradimensional entity started whispering to you a year ago, but you mostly ignore it.", "When your parents' caravan was overrun, you spent years wandering treacherous wildlands with only a pet bear as your companion, until a hunter killed it.", "You and your sister joined a bandit gang; after she was killed a year ago, you left the life behind.", "Recently, the priest who took you in when you were orphaned died of a mysterious illness.", "You recovered an inlaid metal chest from the old ruins weeks ago but still can't get it open.", "You were trained as an enforcer for a cutthroat gang and now want to retire from violence. However, the world leaves you no choice but to use your knife to survive.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +4 to Speed Pool", "Add +1 Edge in Pool of your choice", "Freely use all knives", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapons)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "Five daggers, appropriate clothing, a backpack, a bedroll, 50 feet (16 m) of rope, a knife belt, three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Expert Combatant", "Gut Ripper", "Hindering Throw", ], }, 
	{ name: "Living God", ref: ["CCR 136",], genres: ["Superheroes",], rank: 5, powershifts: 6, summarybrief: "Literally a divine being and part of a divine pantheon (or this powerful for some other reason), you use your amazing abilities to end injustice and defeat evil.", summary: "<p>Literally a divine being and part of a divine pantheon (or this powerful for some other reason), you use your amazing abilities to end injustice and defeat evil. Whether you're a child of Mount Olympus, Asgard, or some other mythology; from a distant dimension or star; or the result of an experiment or process that bequeathed you unbelievable power, you've thrown in your lot with regular people, at least for now.</p><p>What can't a living god do, or at least credibly attempt? Your presence on a team almost ensures its eventual success, assuming the foes you face aren't also gods.</p>", backgrounds: ["Some time ago, your powers were stripped from you because of your selfish, cruel ways. Over the subsequent years, you matured and dedicated yourself to being a better, kinder person who helps others. Eventually, your powers returned. You hope your selfish ways never do.", "Three months ago you learned you might not be the only member of your family still alive.", "You're an alien raised by humans, and despite your differences (and amazing abilities), you see humans as your people and you'll do anything to protect them.", "The head of your pantheon called you back to the realm a year ago but you refused.", "Born of humans and another, stranger realm, you've dedicated yourself to protecting both, even though both humans and those of the other realm sometimes treat you unfairly.", "The anniversary of the alien invasion you helped defeat last year is coming up.", "You recently learned of a (luckily rare) substance that severely weakens you when it's nearby.", "Your secret identity was the target of identity theft, threatening your finances and, more importantly, your friends and found family among normal people.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +10 to Might Pool", "Add +10 to Speed Pool", "Add +10 to Intellect Pool", "Add +8 to the Pool you choose for your Superheroics ability", "Add +1 Edge in Pool of your choice", "Freely use all weapons", "Freely use all armor", "Six <a href='#power-shifts'>power shifts</a>", "One ability from the Origin Superhero Abilities list", "At tier 3 and tier 6, choose an appropriate ability from the Science Fiction Genre Abilities list or the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], sidebar: "<p>The rank 5 Living God type is extremely powerful, allowing PCs who emulate superheroes along the lines of Thor, Superman, and similar ultrapowerful beings.</p>", abilities: ["Hover", "Push on Through", "Second Focus", "Super Combatant", "Superheroics", ], }, 
	{ name: "Mage", ref: ["CCR 52",], genres: ["Dungeon Fantasy",], summarybrief: "You cast spells of blasting fire, magical protection, and force at a distance.", summary: "<p>You cast spells of blasting fire, magical protection, and force at a distance. As a spellcaster, you're always on the lookout for new arcane secrets, magic lore, and spells you can add to your repertoire. You understand that the most powerful spells&mdash;those that can alter a creature's form, open pathways to other worlds, or kill with a single word&mdash;are jealously guarded secrets even among friendly spellcasters, including between master and apprentice. But that only makes you willing to brave nearly any threat to search for such things, even in dangerous locations far below ground.</p><p>You're happy to rely on the physical protection provided by others in your group who are more armed and armored, leaving more esoteric threats and puzzles to your elevated talents. And any time potentially enchanted loot or treasure is discovered, others in the group are likely hoping you, with your intelligence and experience, can explain their function. That's not to say you're not a threat in your own right&mdash;you know at least one spell capable of magically blasting foes, and if you survive, you hope to learn even more.</p>", backgrounds: ["You spent your early years studying in a magical academy, until a covetous god sent her followers to sack it.", "A few days ago, the spellcaster you apprenticed under was murdered.", "You apprenticed under a cruel teacher who you barely managed to escape&mdash;but he still seeks you after all these years.", "You bid on a rare book of arcane lore at last week's auction but lost to a masked wizard.", "A trinket your sister called her lucky charm was delivered to you yesterday with no note.", "You learned your spells from an old book left to you by your uncle who disappeared mysteriously, and you still keep an eye out for news about him.", "More by accident than choice, you saved the life of the mayor's adventure-seeking son.", "A demon who taught you one of your spells showed up last week to call in a favor.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Speed Pool", "Add +3 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Cannot freely use any armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A dagger, appropriate clothing, a spellbook (which also serves as a field journal for taking arcane notes), pen, ink, a backpack, a bedroll, 50 feet (16 m) of rope, matchsticks (10), a magnifying glass, three torches, three days of rations and water, two flasks of oil, and enough extra currency to buy a moderately priced item.", abilities: ["Blast", "Mage Armor", "Prepare Spell", ], }, 
	{ name: "Medic", ref: ["CCR 94",], genres: ["Hard Science Fiction", "Space Opera",], summarybrief: "You fix people, reknitting their flesh, patching their ruptured organs, and coaxing their shattered bones back together.", summary: "<p>You fix people, reknitting their flesh, patching their ruptured organs, and coaxing their shattered bones back together. Your bedside manner doesn't really matter, especially when your skills are called on during disaster or war. And your comportment matters even less in situations when you use your medical knowledge and supplies to disable foes&mdash;sometimes, no one expects a medic to fight back.</p><p>Your role on a team that routinely encounters challenging environments or conflict is crucial. Without your expertise and care, the group's next job could prove its last. Luckily, you can also handle yourself in a fight. In fact, either hard experience or professional training means you're not someone who needs protection when the situation sours.</p>", backgrounds: ["Rebel anarchists spaced your small mining community and forcibly inducted you into their ranks. You escaped but still seek revenge on their remnants.", "You served as a doctor in an orbital surgical hospital (OSH) until it was recently destroyed.", "Your spacefaring clade hunted icy bodies in the Kuiper Belt, but a mistake you made led to the death of the administrator's child, and now you seek absolution.", "A doctor you worked under was charged with illegal organ sales last week.", "Your family helped found a Mars hab, but a criminal gang cracked it and killed almost everyone. You still dream of payback.", "Every so often, your expertise in an area of medical knowledge is requested by the military.", "You recently finished a refresher course on space medicine at the new lunar hospital.", "Your medical intervention saved someone who turned out to be a corrupt government official.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Speed Pool", "Add +3 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light and medium armor", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A medical field kit, appropriate clothing, an armored bodysuit, a smart device (glasses, badge, ring, or the like), a breather, an environmental tent, a single-use vacuum suit, an everlight, two days of rations and water, a grooming and toiletry kit, and eyeshades. Your character also starts with currency equivalent to a moderately priced item.", sidebar: "<p>A medical field kit allows you to treat patients quickly and efficiently. Depending on the setting (and the GM's approval), you might instead have different technology that functions the same way as a medical field kit, such as artificial organelles in your cells, subcutaneous equipment in your hands, or targeted gene editing that creates microtools and medication as needed.</p>",abilities: ["Bad Medicine", "Expert Doctor", "Prepared Medic", ], }, 
	{ name: "Monk", ref: ["CCR 55",], genres: ["Dungeon Fantasy",], summarybrief: "You don't use weapons&mdash;you are a weapon. With powerful punches, kicks, and full-body moves, you inflict incredible damage on your foes.", summary: "<p>You don't use weapons&mdash;you are a weapon. With powerful punches, kicks, and full-body moves, you inflict incredible damage on your foes. By focusing your energy (sometimes called chi, ki, or just \"grit\"), you magnify your power and speed. You probably gained your skills through intense training, fighting in real-world tournaments against your peers and betters, and, more recently, putting your unique skills to use in adventuring.</p><p>Weaponless martial artists are both feared and revered, which means your role in your group is likely unique in one sense. However, you join any other frontline warriors on your team, using your weapons of hand, foot, knee, and elbow far more nimbly than someone swinging around a bulky slab of metal.</p>", backgrounds: ["Brought up in a secluded monastery, you left before you completed your training and still regret it after all these years.", "The master you were training under was called to the capital two weeks ago.", "Your old rival appeared in town a few months ago and apparently wants a rematch.", "Your entire family was killed when a volcano erupted. Since then you've dedicated yourself to destroying primordial and elemental beings, especially those related to fire and earth.", "A document you found in a library a year ago claims your family descends from dragons.", "Growing up, you never lost a competitive bout in the monthly games in your community, except once. You still search for the one who beat you in hopes of a rematch.", "Your close friend disappeared a few months ago, and their debts became your debts.", "In off hours, you've been studying artful flower arrangement for the last couple of weeks.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +2 to Might Pool", "Add +2 to Speed Pool", "Add +1 Edge in Pool of your choice", "Cannot freely use any armor", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "Appropriate clothing, a backpack, a bedroll, 50 feet (16 m) of rope, a meditation mat, three torches, three days of rations and water, a tinderbox, and enough extra currency to buy an expensive item.", abilities: ["Flurry", "Nimble", "No Need for Weapons", ], }, 
	{ name: "Necromancer", ref: ["CCR 56",], genres: ["Dungeon Fantasy",], summarybrief: "Decomposing flesh radiates fading life force. You know how to siphon that power, twist and shape it, then reinfuse the dead with it to return them to ambulatory service.", summary: "<p>Decomposing flesh radiates fading life force. You know how to siphon that power, twist and shape it, then reinfuse the dead with it to return them to ambulatory service. You can also draw that energy directly from them to heal your own rent flesh or anyone near you. In fact, your necromantic prowess gives you a degree of control over undead of all sorts, allowing you to daze and repel them, or even briefly command their service. Because your abilities are so directly tethered to death, many people fear and hate you regardless of your deeds and true motivation.</p><p>Your animated helpers can aid whoever you command, including any allies willing to accept help from a corpse. Likewise, your ability to drain life from your foes to heal your flesh can also provide balm to allies willing to accept it. And should your group face an external necromantic threat, you have the knowledge and power to help confront it.</p>", backgrounds: ["When your spouse died, you dedicated your life to bringing them back, if not to life, then at least to a lifelike animated facsimile. But so far, it's been failure upon failure.", "About six months ago you animated a corpse that whispered your name before turning to dust.", "You recently discovered there's a bounty on you because you reportedly disturbed a graveyard.", "After nearly dying as a young person, you decided that seeking immortality through unlife was your goal.", "The dark school where you learned your craft was destroyed by lightning a few months ago.", "Your sibling was found dead a year ago, apparently killed by an undead host.", "You learned your craft from sigils scribed in the walls of ancient tombs, but now all the things buried there continually seek you out to \"reclaim\" what you stole.", "Your friend remains angry that you failed to turn up for an important ceremony three months ago.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +4 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A quarterstaff, appropriate clothing, a book of necrotic lore, a backpack, a bedroll, incense (10 sticks), matchsticks (10), a lantern, three days of rations and water, three flasks of oil, and enough extra currency to buy a moderately priced item.", abilities: ["Basic Necromancy-v1", "Drain Life", "Tribulation", ], }, 
	{ name: "Noble Warrior", ref: ["CCR 77",], genres: ["Epic Fantasy",], summarybrief: "A life well-lived, you believe, is a life in service to others.", summary: "<p>A life well-lived, you believe, is a life in service to others. Should glory and elevated status one day find you, you're confident you'll use that office to bring peace and aid to all who are in need of a protector. Until then, you're satisfied defending one ally at a time, pledging your weapon to their defense if their need be true.</p><p>You're excellent in a fight but equally concerned with aiding your allies. You have on several previous occasions even interceded, taking an attack that would've otherwise brought one of your fellows low. You're also adept at using the confusion such a sacrifice elicits in foes, returning the favor with the edge of your swift blade.</p>", backgrounds: ["One of the last direct descendants of a fallen kingdom, you hope to one day revive it.", "You tracked down a monstrous creature last year, but lost them in a cursed swamp.", "You grew up in a knightly order, advancing from squire to full knight, and now you are sustained by the oaths you swear.", "You successfully delivered important information last week, despite being hunted by undead.", "Last week you returned from one of your patrols protecting the area from encroaching shadows.", "Your sibling hopes to reclaim the throne from the rebels, and you pledged to help them so their claim can one day be made.", "Last year you learned you are heir to a kingdom lost and mostly forgotten during a previous age.", "You agreed to lead a company on a quest a month ago, but they still haven't departed.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +2 to Might Pool", "Add +2 to Speed Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light and medium armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A sword, appropriate clothing plus an extra set of refined clothing, chainmail armor, a backpack, a bedroll, 50 feet (16 m) of rope, a field journal (including pen and ink), three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Expert Combatant", "Noble Defender", "Noble Sacrifice", ], }, 
	{ name: "Noble", ref: ["CCR 102",], genres: ["Hard Science Fiction", "Space Opera",], summarybrief: "You descend from privilege, wealth, and power. Your family owns significant property, wields political control, and/or has vast wealth&mdash;or once did.", summary: "<p>You descend from privilege, wealth, and power. Your family owns significant property, wields political control, and/or has vast wealth&mdash;or once did. You've stepped away from that somewhat, though you still carry a noble title, whether you want to or not. People recognize you in certain circles, especially those who've had dealings with your family.</p><p>With access to the privileges your title can command, you might be able and willing to pay for your group's passage on a starship, or even provide them with passage outright if your family's resources are extensive enough (assuming you are on good terms with your siblings and parents). But even if your title is more of an honorific handed down from better times, your nobility still grants access that you and your friends might not otherwise be able to attain.</p><p>Different cultures have different titles for nobility. Examples include duke/duchess, marquis/marchioness, earl/countess, viscount/viscountess, and baron/baroness. Work with your GM to determine your title.</p><p>Your retainer could be a robot or alien pet if you prefer.</p>", backgrounds: ["You were adopted into the family and your siblings never let you forget it. Now your eldest is set to inherit, and you suspect they had something to do with your adopted parents' death.", "Some look down on you because your family only gained a noble title a few years ago.", "Your mother died a few months ago, and you've been under pressure to assume her role.", "Growing up, your only friend was the nanny's child, until the nanny and her child were cast out on allegations of theft. You've always wanted to find them again and make it right.", "You recently received a threat from a long-lost sibling who wasn't granted a noble's title.", "Orbital weapons recently destroyed another noble house; rumors say it wasn't an accident.", "Tales of derring-do in the border worlds kept you sane growing up, and now that you have funds of your own, you're keen to find adventure.", "You poured considerable family wealth into a project whose founder recently disappeared.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Might Pool", "Add +1 to Speed Pool", "Add +2 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light and medium armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A medium blaster and a weapon energy pack (50 shots), appropriate clothing, spray-on impact armor (ten uses), a smart device (glasses, badge, ring, or the like), a backpack, a breather, an environmental tent, a single-use vacuum suit, an auton, an everlight, two days of rations and water, a grooming and toiletry kit, and eyeshades. Your character also starts with currency equivalent to a moderately priced item, as well as something exorbitant; see Exorbitant Reach.", sidebar: "<p>Your retainer could be a robot or alien pet if you prefer.</p>", abilities: ["Exorbitant Reach", "Noble Bearing", "Retainer"], }, 
	{ name: "Operative", ref: ["CCR 95",], genres: ["Hard Science Fiction",], summarybrief: "You imagine yourself as the glitch in the system, or the \"ghost in the machine\" that gets in and then out without alerting automated surveillance until you're already elsewhere.", summary: "<p>You imagine yourself as the glitch in the system, or the \"ghost in the machine\" that gets in and then out without alerting automated surveillance until you're already elsewhere. As far as your foes are concerned, you're one of them, blending in with everyone else so that no one suspects you're an operative working for the enemy. But if you are caught out, you don't hesitate&mdash;you eliminate those who recognize you so quickly that they can't raise the alarm.</p><p>Some situations would benefit from having someone on your team already on the inside, which is perfect for you. Or at least someone who doesn't draw enemy fire until you can slip past perimeter security to shut down surveillance and/or take out guards who don't realize you're a foe.</p>", backgrounds: ["Orphaned, you survived in the hidden places of the spinning space habitat and spent most of your life alone. Today, you try to break out of that life and mindset, hoping to find friends despite how everything you've learned fights against that.", "On your last job, you discovered the corporation was into explicitly illegal activities.", "Your parents' belief that you're a musician who plays various gigs was recently shaken.", "Your family's moon mine was illegally seized by a megacorp. Now you work to expose and dismantle megacorps whenever you can.", "The stray data modules you grabbed on your last job turned out to contain classified info.", "They hired you to be a body double, but you fled after they told you to assassinate your target first.", "Raised from childhood to be an assassin, you escaped the daily tortures to make a new life for yourself. One day you hope to find and punish those who hurt you.", "Last month you discovered that your employers in turn work for a mysterious secret group.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +2 to Speed Pool", "Add +2 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light and medium armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A molecular blade, appropriate clothing, spray-onimpact armor (ten uses), extra clothes and accessories for disguise, a smart device (glasses, badge, ring, or the like), a backpack, a breather, an environmental tent, a single-use vacuum suit, an everlight, two days of rations and water, a grooming and toiletry kit, and eyeshades. Your character also starts with currency equivalent to a moderately priced item.", abilities: ["Escape", "Sneak Attack", "Spin Identity", ], }, 
	{ name: "Paladin", ref: ["CCR 58",], genres: ["Dungeon Fantasy",], summarybrief: "By the power granted to you through righteous divine will, you protect and heal the innocent, drive out and destroy the servants of evil, and strive to live up to your oaths of honor and service.", summary: "<p>By the power granted to you through righteous divine will, you protect and heal the innocent, drive out and destroy the servants of evil, and strive to live up to your oaths of honor and service. As witnessed before your god, you stand for justice and against the forces of corruption&mdash;usually delivered by the holy power you channel through your weapon.</p><p>You're among the first in your group to face your foes, seemingly fearless. You're most effective in situations where your presence can draw the attention of your foes away from your allies, especially as your gods-given power can serve as a proactive defense.</p>", backgrounds: ["You were first called to service by a divine vision of a coming world-ending disaster. If you gather enough power in your god's name, you believe you can avert it.", "You served for years in a holy war in a faraway land, but returned home last month.", "A few weeks ago, a seer claimed a demon was secretly attempting to corrupt you.", "After your parents were slain by evil dragons, you took up their path to honor their lives (and slay evil dragons).", "Last week you woke up with no memory at all of the preceding year.", "You were discharged from the temple a year ago under a cloud of suspicion.", "You were a simple priest until your temple was sacked. Then you took up the sword, driven by a zealous commitment to smite evil.", "You triumphantly drove a nest of ghouls from the local graveyard a few weeks ago.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +3 to Might Pool", "Add +1 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use all weapons", "Freely use all armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A greatsword, appropriate clothing, chainmail armor, a holy symbol or portable shrine depicting the higher power you serve, a backpack, a bedroll, 50 feet (16 m) of rope, three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Combat Prowess", "Holy Succor", "Sacred Smite", ], }, 
	{ name: "Pilot", ref: ["CCR 96",], genres: ["Hard Science Fiction",], summarybrief: "You're sensitive to the slightest vibration and yaw of ion, nuclear, and chemical rocket-propelled spacecraft, honed during many hundreds of hours of test flights, combat missions, and your personal zeal for piloting interplanetary craft between moons and planets.", summary: "<p>You're sensitive to the slightest vibration and yaw of ion, nuclear, and chemical rocket-propelled spacecraft, honed during many hundreds of hours of test flights, combat missions, and your personal zeal for piloting interplanetary craft between moons and planets. Your job combines sophisticated course plotting, long periods of gradual acceleration and deceleration, and, sometimes, intense moments of action where your reaction times make the difference between arriving at your destination and your spacecraft becoming one more drifting hulk in a decaying orbit.</p><p>If the team's mission requires an interplanetary trip, it's your job to get everyone there. Should enemy craft threaten the trip, your superior piloting skills help keep everyone alive, up to and including the Soldiers who, scary as they may be, probably couldn't last ten seconds piloting through an interplanetary naval engagement.</p>", backgrounds: ["You grew up in a floating city above Venus, until a crack in the dome required evacuation. Fancy shuttle piloting saved you, but most people died. Ever since, you've tried to improve your own piloting skills.", "After mustering out of service three years ago, you've been taking odd jobs piloting cargo craft.", "Raised in an experimental AI creche later deemed unethical and illegal, you've taken pains to hide your past, but secretly feel that persecution of artificial people is unjust.", "Your niece recently contacted you, asking you to teach her how to pilot spacecraft.", "You and your family were selected to be part of the first crew in a generation ship, but rebels seized it, killing almost everyone. You still harbor thoughts of vengeance.", "Crashing an experimental warcraft four months ago ended your test pilot career.", "Not long ago you returned from a years-long outer-planet survey; only you survived.", "Due at least in part to your long absences, your marriage fractured last month.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Speed Pool", "Add +3 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A vacuum pistol and a weapon energy pack (50 shots), appropriate clothing, spray-on impact armor (ten uses), a smart device (glasses, badge, ring, or the like), a backpack, a breather, an environmental tent, a single-use vacuum suit, a first aid kit, an everlight, two days of rations and water, a grooming and toiletry kit, and eyeshades. Your character also starts with currency equivalent to a moderately priced item.", abilities: ["Born to Pilot", "Expert Space Pilot", "Piloting Flourish", ], }, 
	{ name: "Powerhouse", ref: ["CCR 135",], genres: ["Superheroes",], rank: 4, powershifts: 5, summarybrief: "You embody raw, overwhelming power, making you a one-person force to be reckoned with.", summary: "<p>You embody raw, overwhelming power, making you a one-person force to be reckoned with. You have a formidable array of abilities, starting with amazing stamina, fluid dexterity, and a cutting intellect. But that's the least amazing thing about you&mdash;few can stand against you unless they are literal gods. And even those may fear your wrath.</p><p>Powerhouses are effective in almost every situation, though your particular suite of abilities could provide even more amazing aid to your allies, depending on the circumstances.</p>", backgrounds: ["Although you almost never get involved when trouble strikes, something came along that was too important to ignore. When this is all done, you intend to permanently return to your \"civilian\" secret identity life.", "Your mentor survived a supervillain attack two years ago but remains bedridden to this day.", "You were bequeathed this power for a reason, so you've dedicated yourself to making things better however you can.", "Your job as a national hero endorsed by the government ended three years ago.", "The first time you publicly used your abilities to help, the crowds lauded and celebrated your name. That's a feeling you'll chase to your grave.", "Recently, your ugly breakup with another superhero was dissected by all the gossip sites.", "You used your abilities to save an entire bridge from collapsing during a villain conflict.", "Last month you were offered a spot on an up-and-coming superteam, but you declined.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +8 to Might Pool", "Add +8 to Speed Pool", "Add +8 to Intellect Pool", "Add +6 to the Pool you choose for your Superheroics ability", "Add +1 Edge in Pool of your choice", "Freely use all weapons", "Freely use all armor", "Five <a href='#power-shifts'>power shifts</a>", "One ability from the Origin Superhero Abilities list", "At tier 3 and tier 6, choose an appropriate ability from the Science Fiction Genre Abilities list or the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], abilities: ["Always Mighty", "Enhanced Energy", "Push on Through", "Super Combatant", "Superheroics", ], }, 
	{ name: "Powerstar", ref: ["CCR 133",], genres: ["Superheroes",], rank: 2, powershifts: 3, summarybrief: "You have a single, often spectacular, core superpower. Beams of energy shoot from your eyes, the power of magnetism is yours to command, your flesh can burst into flames, you can generate lightning, or something equally amazing.", summary: "<p>You have a single, often spectacular, core superpower. Beams of energy shoot from your eyes, the power of magnetism is yours to command, your flesh can burst into flames, you can generate lightning, or something equally amazing. This ability forms the backbone of your heroic identity, allowing you to attempt incredible feats, though sometimes posing unique challenges in controlling your gift in all circumstances.</p><p>With a Powerstar on the team, the obstacles villains throw your way are easier to break, burn, or otherwise demolish. Most heroes welcome you into their ranks (or in a temporary team-up), as long as you can keep your volatile abilities leashed.</p>", backgrounds: ["Thinking it was your patriotic duty to help round up unregistered superhumans, you did your part. Then you discovered you were probably on the wrong side of history, and now you work against the agencies targeting those with abilities.", "Your secret identity was discovered by a journalist a month ago, but they've kept quiet so far.", "When the war broke out, it was your patriotic duty to serve. The war's long over, but you still feel a duty to protect.", "A year ago your power flared out of control and you nearly hurt innocent bystanders.", "After almost losing your abilities through disuse, you swore to yourself to get out there, make a difference, and, most importantly, use your power well (and often).", "The only way to stop a villain you fought recently was to kill them. But you never found the body.", "You were part of a superteam that disbanded after a series of setbacks six months earlier.", "Your sibling's child is showing signs of manifesting powers akin to your own.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +4 to Might Pool", "Add +4 to Speed Pool", "Add +6 to Intellect Pool", "Add +2 to the Pool you choose for your Superheroics ability", "Add +1 Edge in Pool of your choice", "Freely use light weapons", "Freely use all armor", "Three <a href='#power-shifts'>power shifts</a>", "One ability from the Origin Superhero Abilities list", "At tier 3 and tier 6, choose an appropriate ability from the Science Fiction Genre Abilities list or the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], abilities: ["Enhanced Energy", "Power Prowess", "Superheroics", "Wider Use", ], }, 
	{ name: "Priest", ref: ["CCR 67",], genres: ["Swords &amp; Sorcery",], summarybrief: "You propitiate the dark ones, ancient entities, or possibly a very real and present god who will punish you if you fail to continue singing their praises and offering sacrifices.", summary: "<p>You propitiate the dark ones, ancient entities, or possibly a very real and present god who will punish you if you fail to continue singing their praises and offering sacrifices. But in return for your worship and idolatry, you can call upon their antediluvian aid, allowing you to manifest inexplicable powers to heal, enhance, cleanse, or punish.</p><p>Your allies count on you to interpret strange dreams, identify lost gods and their works, heal and ward them against malign influences, and, when it matters most, step into a fight with your magic or weapon. You've journeyed long and far enough to know that the capacity to strike a foe down with an axe or sword is just as much a blessing as magic, as long as thanks are given afterward.</p>", backgrounds: ["Your natural carving talent was so advanced that the gods noticed you even as a child.", "A year ago another priest predicted you would soon die in a bloody, surprising manner.", "An idol you gave to a barbarian warlord was returned to you recently, bloodstained and hewn.", "A message from your father arrived a few weeks ago, demanding that you return to your homeland.", "Missionaries in an obscure faith raised you. Now you hope to spread the good word as far and wide as possible to grow your faith's reach.", "You woke in a tomb this morning. You got out but don't remember how you got there.", "Last month you cast out a demon that was possessing a bandit. Their promised reward is still pending.", "You believe the gods keep claiming credit for your innate magical abilities. One day you hope to cut them out entirely, but until then, you repeat their dogmas to the gullible.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +3 to Intellect Pool", "Add +1 to Might Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light and medium armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A battleaxe, appropriate clothing, chainmail armor, a shield, a backpack, a bedroll, 50 feet (16 m) of rope, a book of prayers, three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Cypher Use", "Idol", "Retribution", ], }, 
	{ name: "Psion", ref: ["CCR 103",], genres: ["Space Opera",], summarybrief: "Your latent psychic talents were coaxed forth via study, specialized training, and perhaps even genetic manipulation and/or cranial implants.", summary: "<p>Your latent psychic talents were coaxed forth via study, specialized training, and perhaps even genetic manipulation and/or cranial implants. Now you routinely tap into another fundamental force of the universe, possibly an extradimensional energy field that gives you a mental connection to both the physical world and the minds of other creatures. How you choose to use your somewhat rare abilities depends on your circumstances and ambitions.</p><p>With your ability to peer into the minds of others, you can help your team avoid conflict. Your allies benefit from letting you help mediate situations, since you might gain an insight into the secret hearts of the other negotiators. But should you fail to read their thoughts (or dislike what you find), you're also a capable combatant, able to veil yourself in mental distortion while peppering foes with psychic violence.</p>", backgrounds: ["Raised in the border worlds, you and your parents were always on the run because of some terrible secret related to your birth. Now that you're older, you hope to learn the truth.", "Recently, you were thrown out of the quasi-governmental psychic police force that trained you.", "Your sibling, also a psychic but more powerful than you, joined the military last year.", "Your parents went into debt to buy an experimental drug to save your life. The drug worked (and maybe gave you your abilities), but the debt got them killed and you on a wanted list.", "About six months ago, psychics from all around the system began turning up murdered.", "You were raised in idyllic surroundings by a caring clade. Now that you're grown, you want to bring similar peace to others with psi abilities that haven't been so lucky.", "You keep your psychic abilities hidden. Recently, you received a blackmail threat on the topic.", "Roughly a year ago, you started having unsettling dreams about a man with no face.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +4 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Cannot freely use armor", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A carryall pack, appropriate clothing, a dose of space-fit serum good for a month, a smart device (glasses, badge, ring, or the like), a backpack, a breather, an environmental tent, a single-use vacuum suit, an everlight, two days of rations and water, a grooming and toiletry kit, and eyeshades. Your character also starts with currency equivalent to a moderately priced item.", abilities: ["Mind Reading", "Onslaught", "Psychic Veil", ], }, 
	{ name: "Ranger", ref: ["CCR 59",], genres: ["Dungeon Fantasy",], summarybrief: "You're adept at traveling through perilous places.", summary: "<p>You're adept at traveling through perilous places. Hard experience has taught you that trust is something to be offered only rarely, and even then, might have to be traded for enmity. You know how to think like, track, and, if need be, bring down your prey, whether your quarry is wild game or someone you've determined must be hunted.</p><p>Your ability to navigate is important in any group where travel to distant unknown regions and/or through mazelike tunnels under the earth happens with any sort of regularity. Your skill in finding the right path makes you invaluable anytime your group needs to track a foe who's fled the scene and, once found, quickly dispatch them.</p>", backgrounds: ["Raised in the deepest wilds, your training was passed to you, and your duty is to one day pass that same training on to a worthy heir.", "An old friend asked you to help someone in need, but you were never able to find them.", "An enemy from your past recently tracked you down, but you lost them again.", "You served as a scout for a frontier settlement. One day upon your return, it was gone as if it had never been. You still search, as possible, for what might have happened.", "While serving as a bodyguard for a crime lord, you killed a city watch officer.", "Your sibling was devoured by a monster when you were young. To this day, you're motivated to hunt down and eliminate such creatures.", "You still trade on the baroness's gratitude for locating her missing son a few years ago.", "You gained your strange scar exploring a dungeon, but you don't remember how.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +1 to Might Pool", "Add +2 to Speed Pool", "Add +1 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light and medium armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A sword or bow (plus a quiver of 12 arrows), appropriate clothing, a compass, a backpack, a bedroll, 50 feet (16 m) of rope, a wineskin (full), three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Expert Tracker", "Find the Way", "Quarry-v1", ], }, 
	{ name: "Rogue", ref: ["CCR 60",], genres: ["Dungeon Fantasy",], summarybrief: "You're crafty; some might even say shady. That's because you survive risky endeavors with stealth, skill, and the grace that comes with quick reflexes.", summary: "<p>You're crafty; some might even say shady. That's because you survive risky endeavors with stealth, skill, and the grace that comes with quick reflexes. You size up the vulnerabilities of others with a glance, and when it's in your best interest, exploit opportunities to their fullest. What you lack in brawn you more than make up for in guile, furtiveness, and maybe a little bit of luck.</p><p>You prefer letting someone else in your group charge head-first into conflict, allowing you to slip past unnoticed, possibly so you can stick a dagger in an enemy's back. When danger isn't imminent, you're among the best suited to carefully examine a new location and, if necessary, remediate traps and unlock vaults.</p>", backgrounds: ["You got your start by working for a criminal guild and still retain an insatiable hunger for coin.", "Last week you \"helped\" the city watch unlock a safe found in an abandoned wagon.", "Your salvage of a sunken vessel in the harbor last month was interrupted by pirates.", "Your father disappeared two weeks ago with no explanation.", "You grew up on the streets, surviving on your wits, your nimble fingers, and the aid of a friend who later betrayed you nearly to your death. You still look for them.", "You built up a small retail business. That ended when it burned down three months ago.", "Raised a noble, you took up theft as an illicit \"hobby\" that grew out of control, and now lead something of a double life.", "Your acquaintance the duke invited you to a grand party scheduled for next month.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +3 to Speed Pool", "Add +1 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapons)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "Two daggers, appropriate clothing, a bag of light tools (including lockpicks), a backpack, a bedroll, 50 feet (16 m) of rope, a hand mirror, three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Detect Traps", "Expert Sneak", "Sneak Attack", ], }, 
	{ name: "Scoundrel", ref: ["CCR 104",], genres: ["Space Opera",], summarybrief: "You find that shading the truth, more often than not, benefits your endeavors.", summary: "<p>You find that shading the truth, more often than not, benefits your endeavors. You've even pulled off one or more lucrative confidence games during your career, bilking the gullible of their resources for your own benefit. This kind of behavior tends to catch up with a person, so you probably move around a lot, hoping to stay ahead of unfortunate realizations and subsequent reprisal.</p><p>Your group might lean on you when it comes to breaking into places without proper authorization or for distracting guards, officials, or foes with your capacity to make almost anything sound plausible even if it's a complete web of lies. If you're forced into armed conflict, you'll fight, but you're also remarkably good at seeing to your own welfare first.</p>", backgrounds: ["A happy childhood ended when a world ship collided with your planet. Since then you've grown up as best you could, but you've never stopped looking into who or what was responsible.", "You were the lieutenant of a crime boss until they were killed last year in a violent hit.", "Born into a well-to-do merchant family, you embezzled, were found out, and were banished. Now you're trying to figure out how to make it up and apologize.", "You recently finished blowing through the funds from your last successful con job.", "You hired a pilot to haul illegal cargo a few weeks ago, but they dumped it to avoid authorities.", "Your parents were traders, but you always wanted to do something else. To please them, you took up the trade but have never been very good at it. Maybe it's time to find a different life.", "Your sibling entered the government. After years of no contact, they want to talk.", "About three months ago, you finally kicked a serious drug habit.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +2 to Speed Pool", "Add +2 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A medium blaster and a weapon energy pack (50 shots), appropriate clothing, a false ID, an interface module, a smart device (glasses, badge, ring, or the like), a backpack, a breather, an environmental tent, a single-use vacuum suit, an everlight, two days of rations and water, a grooming and toiletry kit, and eyeshades. Your character also starts with currency equivalent to a moderately priced item.", abilities: ["Desperate Defense", "Fast Talk", "Hand to Eye", ], }, 
	{ name: "Soldier", ref: ["CCR 97",], genres: ["Hard Science Fiction", "Space Opera",], summarybrief: "You've seen things civilians wouldn't believe: attack ships shattering Mars domes with mini-nukes; fellow soldiers disintegrated by stray linear accelerator fire, floating ashes their only grave marker; gravity-dropping through the silent void, praying your lidar warns you quickly enough to pop your brake rockets before you slam into the unlit enemy asteroid.", summary: "<p>You've seen things civilians wouldn't believe: attack ships shattering Mars domes with mini-nukes; fellow soldiers disintegrated by stray linear accelerator fire, floating ashes their only grave marker; gravity-dropping through the silent void, praying your lidar warns you quickly enough to pop your brake rockets before you slam into the unlit enemy asteroid. The adrenaline kick of a firefight is like nothing else, but better yet is the fizzy exhilaration of another mission survived.</p><p>Made for combat, you're probably among the first on your team to confront armed foes. Your allies with other specialties are probably happy to let you; not everyone can rely on combat enhancements when adversaries begin firing kinetic weapons.", backgrounds: ["You came of age in a megalopolis slum, doing what was necessary to survive. You left it all behind, but sometimes you still wish you'd taken a couple of your friends with you.", "You witnessed a peace accord almost being signed two weeks ago, but an envoy vanished.", "You grew up in a farming collective that was ultimately killed by the climate cataclysm. You'll take corporate gigs, but you keep an eye out for the sorts of execs that put profit ahead of normal people's lives.", "A comrade in arms sent you a note to look them up a few months ago because they had \"news.\"", "You and your sister were raised by pirates operating in the belt. You got out but she didn't. You always wonder what happened to her but are afraid to find out.", "You mustered out of service about a year ago, and you've mostly spent through your payout.", "Last week you were offered a job training an ACI (artificial combat intelligence) from your brain.", "You completed a job serving as a diplomat's bodyguard six months ago, but now they're dead.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +2 to Might Pool", "Add +2 to Speed Pool", "Add +1 Edge in Pool of your choice", "Freely use all weapons", "Freely use all armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A vacuum rifle and a weapon energy pack (50 shots), appropriate clothing, an armored bodysuit, a smart device (glasses, badge, ring, or the like), a backpack, a breather, an environmental tent, a single-use vacuum suit, a restraint (binds subject's wrists together), an everlight, two days of rations and water, a grooming and toiletry kit, and eyeshades. Your character also starts with currency equivalent to a moderately priced item.", sidebar: "<p>For a Soldier, Expert Combatant means choosing training in weapons appropriate to the genre, such as laser pistols or rail guns (if available), or firing specific spacecraft weapons, such as point defense cannons, torpedo tubes, plasma casters, or something similar.</p><p>If you want a combat-capable character but don't want implants like those described under Combat Enhancement, you might prefer to use the Fighter type from the dungeon fantasy genre as the basis for your character, translating between the genres but otherwise using those abilities instead of the Soldier's.</p>", abilities: ["Combat Enhancement", "Expert Combatant", "Push Implant", ], }, 
	{ name: "Sorcerer", ref: ["CCR 68",], genres: ["Swords &amp; Sorcery",], summarybrief: "You're one of the rare few. You have the aptitude, inborn talent, and capacity to confer with dark entities without losing your mind, allowing you to unlock and command magic.", summary: "<p>You're one of the rare few. You have the aptitude, inborn talent, and capacity to confer with dark entities without losing your mind, allowing you to unlock and command magic. Most people gaze upon you with fear when they realize your abilities are not mere pageantry, but instead the secrets of a forgotten age reborn in you. When you open your inner eye, your mind expands, allowing you to see the unseen, bend others to your will, and lash their minds directly.</p><p>Your magic is useful in a fight, especially since you don't need to physically strike your foes to harm or sway them; however, you lean on others in your group to provide physical security lest you be overrun by mere force before you have a chance to shine. Outside a conflict, your deeper knowledge of ancient, sorcerous lore may spell the difference between a successful foray and an early grave.</p>", backgrounds: ["When you woke from a ten-year coma as a young adult, you had your abilities but no memories of your past. Now you hope to recover them if possible.", "Rumors suggest the small kingdom where you were born fell to shadows a year ago.", "You changed your name and look six months ago after being accused of necromancy.", "The thieves' guild sometimes contracts your services during interrogations.", "Your grandmother had the sight too, until assassins of the crown killed her. So you try to keep your abilities hidden, biding your time until you can claim your revenge.", "You sometimes dream of a \"smiling man\" whose whispers threaten madness.", "A monstrous alien species kidnapped you and performed strange tests on you, and when they released you, you had your abilities. You're afraid they also may have changed you in other ways that are still not apparent.", "You had a child who grew to adulthood, joined a war, and died three years ago.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +4 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A dagger, appropriate clothing, a book of lore, a backpack, a bedroll, incense (ten sticks), matchsticks (ten), a magnifying glass, three torches, two flasks of oil, rations and water for three days, and enough extra currency to buy a moderately priced item.", sidebar: "<p>Most types give you three abilities. Sorcerer only gives you two, but Cypher Use gives you additional options and Open Inner Eye is like three abilities wrapped in one.</p>", abilities: ["Cypher Use", "Open Inner Eye", ], }, 
	{ name: "Starpilot", ref: ["CCR 105",], genres: ["Space Opera",], summarybrief: "To you, the way the ship trembles right before you engage faster-than-light (FTL) speed communicates the stardrive's health.", summary: "<p>To you, the way the ship trembles right before you engage faster-than-light (FTL) speed communicates the stardrive's health. How the cockpit screens stutter expresses how much damage the ship has just suffered after that last enemy torpedo. And how much the deckplates buzz indicates how much more you can push your starship as you fly a looping, spinning trajectory past enemy starcraft.</p><p>When you're not conveying your allies between distant stars or outmaneuvering enemy fighters, you're reasonably competent in a hand-to-hand firefight. It seems like you've always got a little extra on your side&mdash;call it luck, audacity, or maybe just being too stubborn to know when to quit&mdash;potentially allowing you to defeat a larger force, or at least startle them long enough for you and your allies to get away.</p>", backgrounds: ["You were born thousands of years ago but were frozen in a freak accident. Though you have a new life, you're always on the lookout for an explanation or even a way to visit the distant past.", "You hot-wired a crime lord's personal starship to escape their wrath a year ago.", "Aliens raised you after they found your parents' crashed starship. Why they crashed, where they came from, and other details are mostly lost, but sometimes your dreams reveal more.", "Your sibling was executed by the establishment six months ago, but you still don't know why.", "Your copilot and comrade left your employ a few weeks ago to start a family on a colony world.", "You were born a lordling of a moon destroyed in the interstellar war. Most of your people were incinerated, but you've made a life. Still, you keep an eye out for ways to make the perpetrators pay.", "Recently, you learned of a potential location for a \"starship graveyard\" from a passing traveler.", "You successfully delivered a cargo hold full of rare goods to a distant world last month.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +2 to Speed Pool", "Add +2 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light and medium armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A medium blaster and a weapon energy pack (50 shots), appropriate clothing, an impact cloak, a smart device (glasses, badge, ring, or the like), a backpack, a breather, an environmental tent, a \"sidekick sphere\" (use auton stats), an everlight, two days of rations and water, a grooming and toiletry kit, and eyeshades. Your character also starts with currency equivalent to a moderately priced item.", sidebar: "<p>Talk to your GM before choosing Starpilot as your type to see whether they expect a scenario where you'll have reasonable access to a starcraft.</p>", abilities: ["Audacious Blast", "Cypher Use", "Redline Maneuver", ], }, 
	{ name: "Superhuman", ref: ["CCR 134",], genres: ["Superheroes",], rank: 3, powershifts: 4, summarybrief: "Your suite of extraordinary powers elevates you far beyond human capabilities.", summary: "<p>Your suite of extraordinary powers elevates you far beyond human capabilities. You might have a versatile combination of special attributes, possibly including enhanced strength and durability that allow you to withstand immense impacts and lift incredible weights, or super-speed for rapid movement and reaction, or even more exotic abilities like flight, energy manipulation, or advanced telepathy.</p><p>Superhumans are capable in a variety of different situations, though your particular specialty will determine how many ways you can benefit your group or allies during a team-up.</p>", backgrounds: ["You learned when you were young that if you didn't regularly use your special abilities, they would build up until they flared out of control. So becoming a \"superhero\" was more necessity than decision&mdash;doing anything less risks everyone around you.", "Your old college friend is running for senator on an anti-superhuman platform.", "You've decided the city or larger state is corrupt, and it's up to you to make it right.", "You recently saved hundreds by stabilizing a falling building long enough for everyone to flee.", "When the rampaging kaiju came ashore last week, you were one of the city's defenders.", "You were raised in a lab under harsh conditions. One day the researchers let you go and went into hiding. You've been trying to find them&mdash;and whoever was behind them&mdash;ever since.", "A few weeks ago, you got a message from a parent who you were told died when you were young.", "A villain with insect-control powers vowed to destroy you, but that was months ago.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +6 to Might Pool", "Add +6 to Speed Pool", "Add +6 to Intellect Pool", "Add +4 to the Pool you choose for your Superheroics ability", "Add +1 Edge in Pool of your choice", "Freely use all weapons", "Freely use all armor", "Four power shifts", "One ability from the Origin Superhero Abilities list", "At tier 3 and tier 6, choose an appropriate ability from the Science Fiction Genre Abilities list or the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], abilities: ["Inspiring Suggestion", "Push on Through", "Successive Attack", "Super Combatant", "Superheroics",], }, 
	{ name: "Survivor", ref: ["CCR 112",], genres: ["Postapocalypse",], summarybrief: "You get by, but sometimes only just.", summary: "<p>You get by, but sometimes only just. Surviving means enduring situations that may seem unbearable. Sustaining yourself could mean you've had to harden your heart; with limited resources, even others who initially survived the apocalypse might have only put off the inevitable. But not you&mdash;you know how to find needful things among the remains of the past, you have the reflexes to avoid danger, and you have the flexibility required to prevail during the most difficult times.</p><p>You help your team survive, mainly through your expertise in scavenging for food, shelter, and useful things. You're also reasonably good in a fight, though running away (at least a little bit) from immediate danger always gives you an edge in what happens next, which could be to help an ally.</p>", backgrounds: ["Your small-town life was placid until the apocalypse, but in the immediate aftermath, you were forced to make some horrifying decisions. Now you seek to atone.", "You were pressed into a raider gang until you were able to flee two months ago.", "You heard rumors of a refuge around here, but when you arrived recently, you found only bones.", "You survived the collapse holed up in a big-box store, but that's all gone because of a comrade's betrayal. Now, you hoard anything useful and find it hard to trust others.", "You emerged from a fallout shelter about a week ago when it ran out of resources.", "You were invited to join a community a few months ago, but you stole from them and fled the area instead.", "You were a before-times sheriff, but your decisions in the immediate aftermath of the disaster led to unnecessary deaths. Ashamed, you're driven to protect strangers to redeem your past failures.", "You kept a child alive for years, and they recently grew up and went their own way.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +1 to Might Pool", "Add +2 to Speed Pool", "Add +1 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A medium rifle (with 10 bullets), appropriate clothing, a flashlight (rechargeable with crank), a backpack, a sleeping bag, a bolt cutter, a first aid kit, a water filter straw, a cast-iron frying pan, a roll of duct tape, a book of matches, a manual hand drill, a crowbar, and a rusted knife. Your character also starts with currency or barter equivalent to a moderately priced item.", abilities: ["Despite My Wounds", "Enhanced Scavenging", "Get Out", ], }, 
	{ name: "Swashbuckler", ref: ["CCR 78",], genres: ["Epic Fantasy",], summarybrief: "Your skill, daring, and flamboyant style outshine most others. When battle beckons, you rely on agile swordplay rather than brute force.", summary: "<p>Your skill, daring, and flamboyant style outshine most others. When battle beckons, you rely on agile swordplay rather than brute force. You're not afraid to leap onto tables, slide down bannisters, and otherwise gamble on using the environment to your advantage. That same reckless confidence imbues your dashing grin, your witty banter, and your almost-theatrical charisma, allowing you to charm and beguile as you please.</p><p>Among those in your company, you're probably one of the most ostentatious. If a fight is in the offing, foes are likely to focus on you for as long as you wish, thereby providing your allies a measure of protection. Of course, your fencing skills are amazing, so that's no sacrifice on your part. In fact, combat is just another stage on which you can show off your style and wit, aiding in your efforts to negotiate or woo.</p>", backgrounds: ["Forsworn and ignored as a child, you are motivated by gaining the admiration and love of others (perhaps many others) through demonstrating your worthiness and skills.", "You wooed a lover with tales of stolen jewels, but last month they made off with your valuables.", "After fleeing a vast gambling debt last year, you took another name and changed your look.", "You picked up your skills while touring as part of a troupe of entertainers and thieves. That troupe splintered due to a mysterious murder, and you still seek answers as you can.", "You briefly captained a privateer ship, but only long enough to gain passage to where you are now.", "You were part of a spectacular prison escape last week that's still the talk of the town.", "Wanting to reinvent yourself, you continue to make changes through hard personal work and constant training.", "You found a treasure map stitched into a coat, though deciphering it still lies beyond your skill.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +3 to Speed Pool", "Add +1 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A rapier, flamboyant clothing (for example, a ruffled shirt, a feathered hat, a long cape, ornate boots, fine gloves, and an elaborate belt, often vibrant in color), a backpack, a bedroll, a hand mirror, a writing set (quill, ink, and parchment paper), gaming dice, five candles, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Attack Flourish", "Flamboyant Swordplay", "Romantic Flair", ], }, 
	{ name: "Sword Fighter", ref: ["CCR 70",], genres: ["Swords &amp; Sorcery",], summarybrief: "In some lands, you're known as a Swordsworn, a Steelhand, or a Blade Master.", summary: "<p>In some lands, you're known as a Swordsworn, a Steelhand, or a Blade Master. You don't care about a showy name&mdash;you just prefer to fight with a sword. You've fought with your sword for thousands of hours while training, in war, on expeditions, and during desperate battles in forgotten places of the world. Maybe you fight as a mercenary, for yourself, or as part of a group of adventurers. As long as you've got your sword, nothing can withstand you.</p><p>You are up for a fight anytime, even when startled directly from sleep. Sword held high, you're ready to protect your allies, even if that means drawing your foes' attention. So be it; they'll meet you at your sword's edge.</p>", backgrounds: ["You grew to adulthood as a pit fighter who lived by your sword until you escaped, but your former \"employers\" still hunt for you.", "Some weeks back you rescued an ally from a sorcerer's enchanted tower.", "You racked up a considerable gambling debt a few months ago, still unpaid.", "Born into a royal house, you were disowned after too many reckless duels, but you hope to return one day and seize your birthright.", "Your sibling was on a ship that disappeared on a journey across the misted sea last year.", "You fled the war, not because you were afraid to fight, but because you were press-ganged into service by the enemy force when you were young.", "The one who hired you to recover an artifact died last month before the mission started.", "A cult of rat worshipers tried to kidnap your family last year, but you burned out their den.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +2 to Might Pool", "Add +2 to Speed Pool", "Add +1 Edge in Pool of your choice", "Freely use all swords", "Freely use all armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A sword, appropriate clothing, chainmail armor, a shield, a backpack, a bedroll, 50 feet (16 m) of rope, a crowbar, three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Combat Prowess", "Expert Combatant", "Swing Through", ], }, 
	{ name: "Tech", ref: ["CCR 106",], genres: ["Space Opera",], summarybrief: "You're not simply good with machines; you're a galactic-level genius.", summary: "<p>You're not simply good with machines; you're a galactic-level genius. Where others see a pile of junk, a boring appliance, or a simple device, you see potential&mdash;circuits, energy conduits, and power cells enabling you to build an explosive, repair a weapon, fashion a new custom-built device, or keep a starship limping along when by all rights that last enemy disintegration beam should have spelled the end.</p><p>Others on your team probably celebrate your technical know-how, especially as it usually falls to you to bypass dumb devices like surveillance monitors and force screens. And if they can protect you from direct enemy action, you can produce a gadget that might just be the key to accomplishing the overall objective.</p>", backgrounds: ["You grew up in a hollowed-out asteroid away from all dangers, learning the secrets of technology from your clade. Now you're ready to step out and share your skills with the universe.", "Until you recently paid off your bond, you spent several years laboring for a megacorporation.", "You barely escaped your homeworld's destruction when the planet mind AI went rogue and converted all mass to computronium. Now you seek out and destroy malignant AI wherever you travel.", "You were paid to produce an explosive device, but recently discovered it was used as a weapon.", "A close friend of yours was murdered a year ago, but by who or why is still unknown.", "Your parents grew and assembled you from a biological printer. Tests say you're normal, but you're always concerned that someone will find out you're not \"real.\"", "The habitat air purification machine you built ten years ago still works, against all odds.", "You were part of a team of bounty hunters until six months ago, when the group disbanded.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Speed Pool", "Add +3 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A medium blaster and a weapon energy pack (50 shots), appropriate clothing, a set of tools specialized for building your devices, a smart device (glasses, badge, ring, or the like), a backpack, a breather, a bolt cutter, an environmental tent, a single-use vacuum suit, a first aid kit, an everlight, two days of rations and water, a grooming and toiletry kit, and eyeshades. Your character also starts with currency equivalent to a moderately priced item.", abilities: ["Always Tinkering", "Craft Device", "Cypher Use", ], }, 
	{ name: "Tender", ref: ["CCR 113",], genres: ["Postapocalypse",], summarybrief: "Even under the worst possible circumstances, you usually feel that your life&mdash;whatever remains of it&mdash;is best lived in service to others.", summary: "<p>Even under the worst possible circumstances, you usually feel that your life&mdash;whatever remains of it&mdash;is best lived in service to others. Depending on how you tend to others' needs, they might know you as a Sage, Doctor, Responder, or Minister. But names don't matter. You just want to help others survive, heal their hurts, and, if nothing else can be done for them, see that their ends are humane and painless.</p><p>Everyone probably welcomes your presence, or at least your skills, especially those in your group. Without your care and knowledge, their lives could come to a brutal, painful end. If conflict kicks off, you can handle a weapon, but you prefer trying to counteract the threat so you and your allies aren't hurt in the first place.</p>", backgrounds: ["You watched your family succumb to radiation sickness. You now scavenge relentlessly for before-times knowledge, determined that no one else should suffer a similar fate if you can help it.", "You saved a family from a virulent sickness a few months ago, and they still regularly thank you.", "You relied on a rare medicine to tend to many of your patients; a few weeks ago you used it up.", "A medical student before the apocalypse, you were ill-prepared to care for others when the bombs fell&mdash;you had to abandon countless dying strangers. You've found that icy dispassion hard to break free of and still rarely help those you don't know or trust.", "You were part of a survivor community until it was destroyed by advancing radiation a year ago.", "According to dealers that wander through occasionally, a working hospital operates nearby.", "In the immediate aftermath of the catastrophe, you were nursed back to health by a nameless wanderer who vanished afterward. You now feel obligated to pay that kindness forward, healing others as you were helped.", "Bad luck and a bad reaction caused a friend you were treating to die a few months ago.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Might Pool", "Add +1 to Speed Pool", "Add +2 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A light handgun (with 10 bullets), appropriate clothing, a scavenged doctor's bag, a backpack, a sleeping bag, a medical \"how to\" book, a bottle of aspirin (depletion of 1 in 1d20), a water filter straw, a water kettle, a book of matches, three candles, and a rusted knife. Your character also starts with currency or barter equivalent to a moderately priced item.", sidebar: "<p>A scavenged doctor's bag is a collection of bandages, stitches, medicines, and similar supplies you've scavenged from the wasteland. It has a depletion of 1 in 1d10. If the bag is depleted, a Tender can restock it after spending at least an hour picking through ruins where people once lived and spending 1 resource point.</p>", abilities: ["Foil Danger", "Inspiring Suggestion", "Wasteland Healer", ], }, 
	{ name: "Thief", ref: ["CCR 71",], genres: ["Swords &amp; Sorcery",], summarybrief: "You'll cop to Thief, but you're also a finagler, a swindler, and someone able to perform tricks that go beyond mere sleight of hand (or so you tell everyone).", summary: "<p>You'll cop to Thief, but you're also a finagler, a swindler, and someone able to perform tricks that go beyond mere sleight of hand (or so you tell everyone). More importantly, you're deadly with a blade when your tricks go wrong, but especially if you gain the drop on someone. You're no hulking warrior&mdash;rather, your feline grace allows you to slip into and out of danger with nary a scratch. The same can't be said of your foes.</p><p>You prefer to let others in your band jump headlong into a fight, allowing you to bypass the threat altogether, or perhaps deliver a decisive blow from behind. You're a natural when it comes to checking out new areas, disarming traps, and cracking open secure containers.</p>", backgrounds: ["Your parents sold you to the thieves' guild to pay off debts, but you hope to find them one day and get the story from them.", "You've been living under a false identity for a year since a disastrous night of thievery.", "Two months ago you stole a fabulous jewel but have since discovered it's too hot to fence.", "Pursued by vengeful cultists six months ago, you discovered a strange ruin in the forest.", "You came from a distant land and, unable to speak the language at first, learned to steal to live. You're in a better place now but have some scores to settle.", "You killed a vile sorcerer two years ago, but now their child seeks vengeance.", "Your patron has an amazing, uplifting plan, but it requires a large fortune to get off the ground, and thieving is how you've been helping to contribute.", "Lured by the promise of riches, you were lost in a labyrinth for months, only recently escaping.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +3 to Speed Pool", "Add +1 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A rapier, appropriate clothing, a bag of light tools (including lockpicks), a backpack, a bedroll, 50 feet (16 m) of rope, an oilcan for quieting squeaky hinges, three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Detect Traps", "Ferocious When Cornered", "Sneak Attack", ], }, 
	{ name: "Trader", ref: ["CCR 107",], genres: ["Space Opera",], summarybrief: "You know commerce, which means you know people.", summary: "<p>You know commerce, which means you know people. Your ability to both charm strangers and talk your way around unfortunate facts, combined with your knowledge of the best trade routes and berth rates, gives you a leg up when acquiring goods at a steep discount, only to sell them at a profit on some other moon or planet. You try to make your clients at least feel like they've just struck the deal of their life, even when nothing could be further from the truth.</p><p>You're someone who can open doors to new opportunities for the whole team. Your talent applies both broadly speaking, when it comes to finding new jobs and maybe more chances for a payout, but also simply when it comes to negotiating with potential foes, talking your way out of trouble, or, if there's nothing else for it, shooting your way out.</p>", backgrounds: ["Colliding black holes destroyed your childhood star system. Now you're always on the lookout for surviving relics of your obliterated past.", "Last year, you survived a starship crash, but your uninsured trade cargo did not.", "Your parents raised you to be a trader, and one day you hope to take over their business, or merge what you build in the meantime with theirs.", "Two weeks ago a merchant undercut you on a deal that would have been highly profitable.", "You are descended from a family of artists and your first trade was a treasured sculpture made by an ancestor. Devastated, your family disowned you, and now you're always on the lookout for that damned sculpture so you can get it back and atone.", "You parted ways with your trading partner of seven years a few months ago.", "You safeguarded illicit cargo recently, hiding it from the officials, and your client is grateful.", "You're storing some trade cargo for later, no questions asked, but there's something odd about it.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Speed Pool", "Add +3 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapons)", "At tier 3 and tier 6, choose an ability from the Science Fiction Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A medium blaster and a weapon energy pack (50 shots), an apex edge knife, appropriate clothing, an armored bodysuit, a smart device (glasses, badge, ring, or the like), a backpack, a breather, an environmental tent, a single-use vacuum suit, an everlight, two days of rations and water, a grooming and toiletry kit, and eyeshades. Your character also starts with currency equivalent to a moderately priced item.", abilities: ["Fast Talk", "A Smile and a Word", "Smooth Operator", ], }, 
	{ name: "Two-Weapon Fighter", ref: ["CCR 72",], genres: ["Swords &amp; Sorcery",], summarybrief: "In some lands they call you a Twin Fang; in others, a Blade Dancer. These and other names illustrate your fighting style.", summary: "<p>In some lands they call you a Twin Fang; in others, a Blade Dancer. These and other names illustrate your fighting style. A weapon clutched in each hand, you crash into your foes, attacking as if two people in one body. You deal out death to monsters of the wild lands and dark places, enemies, and whoever chooses to match themselves against you. So far, you've been the victor.</p><p>Your weaponplay is among the most conspicuous in your group, so foes may be drawn to you over the other warriors in your band. That's how you like it. You're a bit more specialized than they are, but that sacrifice in versatility means you're doubly armed and ready to meet whatever the fates throw your way.</p>", backgrounds: ["You learned your deadly skills guarding a ruthless crime lord. When they were slain anyway, their lover put a price on your head that you're still running from.", "You were hired to steal a fabled jewel a year ago but never found a map to its crypt.", "Chained against your will on a trader's galley, you escaped, reaching land a month ago.", "Your clan taught you the dance of two weapons, but they expect you to return one day to teach it to another aspirant.", "A year ago a frost giant killed your band of adventurers, leaving you the only survivor.", "You rescued the prince from bandits a month ago, and people now recognize you in the street.", "You were raised as an indentured miner until you and your gang fought your way to freedom. You're still hunting down remnants of your former \"employers\" as you can.", "Almost a year ago you learned that one of your parents, a general, was part of a secret conspiracy.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +2 to Might Pool", "Add +2 to Speed Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light and medium armor", "Gain two weapons of your choice (or accept the equipment bundle weapons)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A sword, a saber, a dagger, appropriate clothing, chainmail armor, a backpack, a bedroll, 50 feet (16 m) of rope, three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Dual Wield", "Expert Combatant", "Weapon Switch", ], }, 
	{ name: "Vigilante", ref: ["CCR 131",], genres: ["Superheroes",], rank: 1, powershifts: 2, summarybrief: "You use your fists, your agility, and your speed to bring justice to the streets, even if that means operating outside the law.", summary: "<p>You use your fists, your agility, and your speed to bring justice to the streets, even if that means operating outside the law. You're driven by a personal code, and maybe a tragedy from your past that yet lingers. You probably have no inherent superpowers, but instead rely on extensive conditioning, relentless martial arts training, and an unwavering desire to eliminate corruption and protect the innocent.</p><p>When you team up with other heroes for jobs that are too big for you to tackle alone, you make an ideal choice for scouting, getting in and out of places before anyone even realizes you're there. But if your foes do notice you, you're usually the first to react. And if a stand-up fight against villains is unavoidable, well, your entire body is a honed instrument of justice.</p>", backgrounds: ["Your grandfather was a victim of a criminal gang. You've sworn never to rest until they're all dealt with.", "Last week your old crimefighting partner disappeared. Maybe they went undercover?", "The villain you unmasked two months ago was a prominent philanthropist beloved by many.", "The bomb killed everyone you loved. Now you track down terrorists and other lowlifes and stop them before they can hurt others.", "You recently discovered an ancient ninja order is establishing new influence in the area.", "When you nearly lost your life due to corrupt business dealings by your former employer, you swore to take matters into your own hands, and you haven't stopped since.", "You saved another hero from captivity last year, and they still seem angry about it.", "A crime boss you helped put behind bars a few years ago is back in business.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +5 to Might Pool", "Add +3 to Speed Pool", "Add +2 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use all weapons", "Freely use all armor", "Two <a href='#power-shifts'>power shifts</a>", "One ability from the Origin Superhero Abilities list", "At tier 3 and tier 6, choose an appropriate ability from the Science Fiction Genre Abilities list or the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], sidebar: "<p>As a Vigilante, you probably choose unarmed attacks as your Super Combatant training.</p>", abilities: ["Nimble", "Sneak Attack", "Super Combatant", "Superheroics", ], }, 
	{ name: "Warrior", ref: ["CCR 79",], genres: ["Epic Fantasy",], summarybrief: "Strength. That's what you have. The familiar, comforting ache in your muscles is the echo of countless training bouts and bloody skirmishes.", summary: "<p>Strength. That's what you have. The familiar, comforting ache in your muscles is the echo of countless training bouts and bloody skirmishes. You have made yourself into someone that stories are told about; you are a Warrior of the realm, a slayer of those who would bring it down, and someone who would do anything to achieve your goals.</p><p>Strong and tough, you're usually among the first in your company to bring weapons to bear. Doing so means those with less strength of arms will survive to fight another day. Of course, you'd probably fight regardless; for you, it's as much about projecting power and building a legacy.</p>", backgrounds: ["You apprenticed as a royal guard, and that training remains&mdash;you still want to protect others.", "You were part of a larger force that took back a city overrun by monsters last year.", "Your sibling always scraped through life with your help, but six months ago they died mysteriously.", "You survived a war, coming away with your scars, your weapons, and a need to fight.", "You received word of a powerful weapon having been found, but not where or by who.", "You descend from a long line of warriors, and everyone expects the same of you. You're not so sure that's your destiny, but for now, you fight.", "Though you have little use for it, you protected a library from burning two weeks ago.", "You personally trained a soldier who recently was promoted to captain of the guard.", ], benefits: ["Able to take three more minor wounds and one more moderate wound", "Add +3 to Might Pool", "Add +1 to Speed Pool", "Add +1 Edge in Pool of your choice", "Freely use all weapons", "Freely use all armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A sword, appropriate clothing, chainmail armor, a shield, a backpack, a bedroll, 50 feet (16 m) of rope, spikes (six) and a hammer, three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Combat Prowess", "Despite My Wounds", "Expert Combatant", ], }, 
	{ name: "Witch", ref: ["CCR 73",], genres: ["Swords &amp; Sorcery",], summarybrief: "You are a master of potions, using herbs, minerals, and even bits and pieces such as frog eyes and dragon scales as your metaphorical canvas and paint.", summary: "<p>You are a master of potions, using herbs, minerals, and even bits and pieces such as frog eyes and dragon scales as your metaphorical canvas and paint. When you work with these materials to brew potions, you imagine and create new substances imbued with wondrous and magical effects. But your magical talents extend beyond potioncraft&mdash;you can call down curses on your foes with very real effects and, depending on your choices as you continue to study and explore, eventually learn all manner of other spells.</p><p>You are one of the most versatile members of your group, given that you can brew a potion for almost any need&mdash;healing, hiding, empowering, or straight-up blasting. When facing conflict, you prefer to let others take the brunt, but you're not inexperienced when it comes to weapons, and can give as good as you get if the need arises.</p>", backgrounds: ["You suffered demonic possession for years but finally cast them out, and now you do what you can to fix all the harms you wrought.", "A reclusive crone raised you, claiming she found you alone in the woods as a babe, though you've always been suspicious that there was more to the story.", "Weird glyphs appeared etched on the cliffs last week; you've seen them before in your dreams.", "When enemies overran your homeland, you swore dark oaths to obtain your witchcraft. Eventually, however, the soul debt you owe will come due.", "You cursed a noble after their carriage splashed you last week, and now they're dead.", "Creatures from a distant star seeped down and destroyed a nearby village three months ago.", "Raised by healers, you've always tried to further your parents' craft, though sometimes what you can do surprises even you.", "Unexpectedly, a potion you brewed last week transformed into an albino bat and flew away.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +3 to Intellect Pool", "Add +1 to Speed Pool", "Add +1 Edge in Pool of your choice", "Freely use light and medium weapons", "Freely use light armor", "Gain one weapon of your choice (or accept the equipment bundle weapons)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A quarterstaff, a dagger, appropriate clothing, a bag of light tools (including basic potion ingredients and brewing tools), a backpack, a bedroll, a book of lore, three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Brew Potion", "Evil Eye", "Potion Cyphers", ], }, 
	{ name: "Wizard", ref: ["CCR 80",], genres: ["Epic Fantasy",], summarybrief: "Your conjured lightning, flashing displays, and wizardly spells are just part of what makes you a wizard.", summary: "<p>Your conjured lightning, flashing displays, and wizardly spells are just part of what makes you a wizard. With your wisdom and knowledge, you have the opportunity to guide others to a larger goal, to learn ancient secrets, discover new truths, and maybe even become a major figure as history unfolds.</p><p>You may see your role as the voice of wisdom and reason in your company. More tactically, your spells aren't as quick as a flashing sword or swift-flying arrow, so you appreciate others in your fellowship who have the physical presence to keep aggressors away from you a few extra moments while you prepare one of your magical effects. And anytime enemy magic is found, you have the best chance to deal with and perhaps even counter it.</p>", backgrounds: ["As a child you were paid to clean the library of lore. You also snuck books to read, which awakened your gift for magic. Now you seek to find and preserve books of lore wherever you go.", "You provided magical displays to entertain guests at a friend's party last week to good reviews.", "A powerful magical artifact bequeathed to you was stolen years ago, and you seek to find the identity of the thief as your other duties allow.", "When you went to consult with a fellow wizard last month, they were mysteriously gone.", "You number among a few chosen who were granted magic by celestial beings, and they have charged you with keeping the world safe from evil.", "Rumors suggest that the evil that once resided in the old ruins has crept back in the last year.", "You've spent the last three months poring over ancient scrolls, seeking important magic lore.", "You recently received an invitation to visit allies who reside in a secret underground fortress.", ], benefits: ["Able to take two more minor wounds and one more moderate wound", "Add +1 to Might Pool", "Add +3 to Intellect Pool", "Add +1 Edge in Pool of your choice", "Freely use all light and medium weapons", "Cannot freely use armor", "Gain one weapon of your choice (or accept the equipment bundle weapon)", "At tier 3 and tier 6, choose an ability from the Fantasy Genre Abilities list", "At tier 1, you gain the following abilities:", ], equipment: "A quarterstaff, appropriate clothing, a spellbook (which also serves as a field journal for taking arcane notes), pen and ink, a backpack, a bedroll, 50 feet (16 m) of rope, matchsticks (ten), a pipe and tobacco pouch, three torches, rations and water for three days, a tinderbox, and enough extra currency to buy a moderately priced item.", abilities: ["Lightning Bolt", "Prepare Spell", "Wizard's Cunning", ], }, 
];
const focusList = [
{ 
name: "Abides in Stone", ref: ["CCR 146&ndash;147",], 
genres: [ {name: "Fantasy", theme: "Golem", }, {name: "Science Fiction", theme: "Crystal Alien", }, {name: "Superheroes", theme: "Rock Monster", }, ], 
summary: ["Your flesh is made of hard mineral, making you a hulking, difficult-to-harm humanoid.", ], 
gmintrusions: ["Creatures of stone sometimes forget their own strength or weight. A walking statue can terrify common folk.", ], 
abilities: [
		[
			{ name: "Intimidating Presence", }, 
			{ name: "Stone Body", }, 
			{ name: "Stoneknowing", }, 
		], 
		[
			{ name: "Field of Stones", req: ["Stoneknowing", "Stone Body",], }, 
			{ name: "Golem Grip", req: ["Stone Body",], }, 
			{ name: "Stone Bash", req: ["Intimidating Presence", "Stone Body",], }, 
		], 
		[
			{ name: "Golem Stomp", req: ["Field of Stones", "Golem Grip"], }, 
			{ name: "Improved Stone Body", req: ["Golem Grip", "Stone Bash"], }, 
		], 
		[
			{ name: "Deep Reserves", req: ["Improved Stone Body", "Golem Stomp",], }, 
			{ name: "Heavy Hands", req: ["Improved Stone Body",], }, 
			{ name: "Rolling Stone", req: ["Golem Stomp",], }, 
		], 
		[
			{ name: "Still As a Statue", req: ["Heavy Hands", "Deep Reserves",], }, 
			{ name: "Structural Brace", req: ["Deep Reserves", "Rolling Stone",], }, 
		], 
		[
			{ name: "Earthshake-v1", req: ["Structural Brace",], }, 
			{ name: "Mineralization", req: ["Still As a Statue",], }, 
		], 
	], 
},
{ name: "Blazes With Fire", ref: ["CCR 148&ndash;149",], genres: [ {name: "Fantasy", theme: "Fire Wizard", }, {name: "Science Fiction", theme: "Lava World Alien", }, {name: "Superheroes", theme: "Fiery Super", }, ], 
summary: ["You can sheathe your body in flames, which protect you and harm your foes.", ], 
gmintrusions: ["Fire burns flammable material. Fire spreads out of control. Primitive creatures fear fire and often attack what they fear.", ], 
abilities: [
		[
			{ name: "Gentle Warmth", }, 
			{ name: "Shroud of Flame", }, 
			{ name: "Warm Air", }, 
		], 
		[
			{ name: "Flameblade", req: ["Shroud of Flame",], }, 
			{ name: "Hurl Flame", req: ["Shroud of Flame",], }, 
			{ name: "Spreading Fire", req: ["Shroud of Flame",], }, 
		], 
		[
			{ name: "Desperate Flame", req: ["Flameblade", "Hurl Flame", "Spreading Fire", "Fiery Hand of Doom", "Wings of Fire",], }, 
			{ name: "Fiery Hand of Doom", req: ["Desperate Flame", "Flameblade", "Spreading Fire",], }, 
			{ name: "Wings of Fire", req: ["Desperate Flame", "Flameblade", "Hurl Flame", ], }, 
		], 
		[
			{ name: "Enhanced Flames", req: ["Desperate Flame", "Fiery Hand of Doom", "Wings of Fire",], }, 
		], 
		[
			{ name: "Fire Tendrils", req: ["Enhanced Flames",], }, 
			{ name: "Plasma Field", req: ["Enhanced Flames",], }, 
		], 
		[
			{ name: "Inferno Trail", req: ["Plasma Field",], }, 
			{ name: "Fire Servant", req: ["Fire Tendrils",], }, 
		], 
	], 
},
{ name: "Builds Allies", ref: ["CCR 150&ndash;151",], genres: [ {name: "Fantasy", theme: "Golem Crafter", }, {name: "Real World", theme: "(Robot Builder", }, {name: "Science Fiction", theme: "Robot Builder", }, {name: "Superheroes", theme: "Robot Builder", }, ], 
summary: ["You create automatons, robots, constructs, or other artificial creatures that do as you command.", ], 
gmintrusions: ["Creatures of stone sometimes forget their own strength or weight. A walking statue can terrify common folk.", ], 
abilities: [
		[
			{ name: "Automaton Assistant", }, 
			{ name: "Efficient Builder", }, 
			{ name: "Identify Machine", }, 
		], 
		[
			{ name: "Automaton Armor Upgrade", req: ["Automaton Assistant",], }, 
			{ name: "Automaton Cypher Upgrade", req: ["Automaton Assistant",], }, 
			{ name: "Charm Machine", req: ["Automaton Assistant",], }, 
		], 
		[
			{ name: "Expert Automaton", req: ["Automaton Armor Upgrade", "Automaton Cypher Upgrade",], }, 
			{ name: "Quick Control", req: ["Automaton Cypher Upgrade", "Charm Machine",], }, 
		], 
		[
			{ name: "Automaton Flight Upgrade", req: ["Expert Automaton", "Quick Control"], }, 
			{ name: "Automaton Turret Upgrade", req: ["Expert Automaton", "Quick Control",], }, 
		], 
		[
			{ name: "Automaton Fleet", req: ["Automaton Flight Upgrade", "Automaton Turret Upgrade",], }, 
			{ name: "Automaton Force Field Upgrade", req: ["Automaton Flight Upgrade", "Automaton Turret Upgrade",], }, 
		], 
		[
			{ name: "Automaton Evolution", req: ["Automaton Fleet", "Automaton Force Field Upgrade",], }, 
			{ name: "Automaton Heavy Armor Upgrade", req: ["Automaton Fleet", "Automaton Force Field Upgrade",], }, 
		], 
	], 
},
{ name: "Carries a Gun", ref: ["CCR 152&ndash;153",], genres: [ {name: "Fantasy", theme: "Musketeer", }, {name: "Historical", theme: "Soldier", }, {name: "Real World", theme: "Soldier", }, {name: "Science Fiction", theme: "Soldier", }, ], 
summary: ["You carry a firearm (whether a conventional gunpowder pistol or some kind of blaster or energy weapon) and you know how to use it in a fight.", ], 
equipment: ["You have a medium or small firearm.",], 
gmintrusions: ["Weapons misfire or jam; the attack fails and the action is lost, plus an additional action is needed to fix the problem. An attack strikes sensitive equipment or an unintended target.", ], 
abilities: [
		[
			{ name: "Concealed Carry", }, 
			{ name: "Excellent Gunner", }, 
			{ name: "Keen Eye", }, 
		], 
		[
			{ name: "Careful Shot", req: ["Concealed Carry", "Keen Eye", "Excellent Gunner",], }, 
			{ name: "Reload", req: ["Concealed Carry", "Keen Eye", "Excellent Gunner",], }, 
			{ name: "Sneak Attack", req: ["Concealed Carry", "Excellent Gunner",], }, 
		], 
		[
			{ name: "Damage Dealer-v1", req: ["Careful Shot", "Reload",], }, 
			{ name: "Spray", req: ["Reload", "Sneak Attack",], }, 
		], 
		[
			{ name: "Snap Shot", req: ["Damage Dealer-v1", "Spray",], }, 
			{ name: "Special Shot", req: ["Damage Dealer-v1", "Spray",], }, 
		], 
		[
			{ name: "Arc Spray", req: ["Arc Spray", "Special Shot",], }, 
			{ name: "Sniper", req: ["Snap Shot", "Sniper",], }, 
		], 
		[
			{ name: "Lethal Capability", req: ["Arc Spray", "Sniper",], }, 
			{ name: "Shot Collision", req: ["Arc Spray", "Sniper",], }, 
		], 
	], 
},
{ name: "Casts Spells", ref: ["CCR 154&ndash;157",], genres: [ {name: "Fantasy", theme: "Sorcerer, Wizard", }, {name: "Real World", theme: "Magician", }, {name: "Superheroes", theme: "Mastery of the Mystic Arts", }, ], 
summary: ["You have a book of various spells and can change which ones you have ready to cast each day&mdash;blasts of energy, summoning monsters, magical flight, teleportation, and copying cyphers can all be part of your repertoire.", ], 
gmintrusions: ["A spell goes wrong. A summoned creature turns on the caster. A rival spellcaster is drawn to the magic use.", ], 
abilities: [
		[
			{ name: "Blast", }, 
			{ name: "Hedge Magic", }, 
			{ name: "Prepare Spell", }, 
			{ name: "Sense Magic", }, 
		], 
		[
			{ name: "Confusion Ray", req: ["Enchant Object", "Hedge Magic", "Hover", "Prepare Spell",], }, 
			{ name: "Enchant Object", req: ["Blast", "Confusion Ray", "Hedge Magic", "Prepare Spell",], }, 
			{ name: "Hover", req: ["Confusion Ray", "Hedge Magic", "Prepare Spell", "Sense Magic",], }, 
		], 
		[
			{ name: "Arcane Flight", req: ["Confusion Ray", "Hover", "Identify Magic"], }, 
			{ name: "Fireball", req: ["Confusion Ray", "Enchant Object", "Summon Giant Spider",], }, 
			{ name: "Identify Magic", req: ["Confusion Ray", "Hover",], }, 
			{ name: "Summon Giant Spider", req: ["Enchant Object",], }, 
		], 
		[
			{ name: "Arcane Teleportation", req: ["Arcane Flight", "Fireball",], }, 
			{ name: "Soul Interrogation", req: ["Arcane Flight", "Fireball",], }, 
		], 
		[
			{ name: "Divination", req: ["Granite Wall", "Soul Interrogation",], }, 
			{ name: "Granite Wall", req: ["Divination", "Arcane Teleportation",], }, 
		], 
		[
			{ name: "Conjure Supernatural Creature", req: ["Divination", "Granite Wall",], }, 
			{ name: "Word of Death", req: ["Divination", "Granite Wall",], }, 
		], 
	], 
},
{ name: "Changes Shape", ref: ["CCR 158&ndash;161",], genres: [ {name: "Fantasy", theme: "Animal Druid", }, {name: "Science Fiction", theme: "Shapeshifter", }, {name: "Superheroes", theme: "Shapeshifter", }, ], 
summary: ["You can transform into various animals, gaining their natural abilities as if you were born with them.", ], 
gmintrusions: ["Something triggers an involuntary transformation. An NPC is frightened by or aggressive toward the shapeshifter. The transformation takes longer than expected.", ], 
abilities: [
		[
			{ name: "Animal Shape", }, 
			{ name: "Keen Eye", }, 
			{ name: "Scent Transformation", }, 
		], 
		[
			{ name: "Beast Communication", req: ["Animal Shape",], }, 
			{ name: "Soothe the Savage", req: ["Animal Shape",], }, 
		], 
		[
			{ name: "Bigger Animal Shape", req: ["Beast Communication", "Soothe the Savage",], }, 
			{ name: "Shapechanger Healing", req: ["Beast Communication", "Soothe the Savage",], }, 
		], 
		[
			{ name: "Animal Scrying", req: ["Bigger Animal Shape", "Movement Adaptation", "Shapechanger Healing",], }, 
			{ name: "Movement Adaptation", req: ["Animal Scrying", "Bigger Animal Shape",], }, 
		], 
		[
			{ name: "Enhanced Animal Shape", req: ["Movement Adaptation", "Not Dead Yet",], }, 
			{ name: "Not Dead Yet", req: ["Animal Scrying", "Enhanced Animal Shape", "Movement Adaptation",], }, 
		], 
		[
			{ name: "Hard to See", req: ["Enhanced Animal Shape", "Not Dead Yet",], }, 
			{ name: "Lend Animal Shape", req: ["Enhanced Animal Shape",], }, 
			{ name: "Lethal Capability", req: ["Enhanced Animal Shape", "Not Dead Yet",], }, 
		], 
	], 
},
{ name: "Commands Mental Powers", ref: ["CCR 162&ndash;163",], genres: [ {name: "Fantasy", theme: "Enchanter", }, {name: "Real World", theme: "Telepath", }, {name: "Science Fiction", theme: "Telepath", }, {name: "Superheroes", theme: "Telepath", }, ], 
summary: ["You can send and receive thoughts as easily as communicating by voice.", ], 
gmintrusions: ["Something glimpsed in the target's mind is horrifying. A feedback loop allows the target to read the character's mind.", ], 
abilities: [
		[
			{ name: "Empathic Sense", }, 
			{ name: "Sense Psionics", }, 
			{ name: "Telepathic", }, 
		], 
		[
			{ name: "Mind Reading", req: ["Sense Psionics", "Telepathic",], }, 
			{ name: "Telepathic Bond", req: ["Empathic Sense", "Telepathic",], }, 
		], 
		[
			{ name: "Identify Psionics", req: ["Mind Reding",], }, 
			{ name: "Psychic Burst", req: ["Mind Reading", "Telepathic Bond",], }, 
			{ name: "Psychic Suggestion", req: ["Telepathic Bond",], }, 
		], 
		[
			{ name: "Extended Range", req: ["Identify Psionics", "Psychic Burst", "Psychic Suggestion", "Use Senses of Others",], }, 
			{ name: "Use Senses of Others", req: ["Extended Range", "Identify Psionics", "Psychic Burst", "Psychic Suggestion",], }, 
		], 
		[
			{ name: "Precognition", req: ["Extended Range", "Use Senses of Others",], }, 
		], 
		[
			{ name: "Mind Control", req: ["Precognition",], }, 
			{ name: "Telepathic Network", req: ["Precognition",], }, 
		], 
	], 
},
{ name: "Consorts With the Dead", ref: ["CCR 164&ndash;165",], genres: [ {name: "Fantasy", theme: "Necromancer", }, {name: "Real World", theme: "Mad Scientist", }, {name: "Superheroes", theme: "Mad Scientist", }, ], 
summary: ["The dead answer your questions, and their reanimated corpses serve you.", ], 
gmintrusions: ["The character's necromantic reputation precedes them. A corpse seeks revenge for being reanimated.", ], 
abilities: [
		[
			{ name: "Basic Necromancy-v2", }, 
			{ name: "Bone Lore", }, 
			{ name: "Speaker for the Dead", }, 
		], 
		[
			{ name: "Blood Sorcery", req: ["Basic Necromancy-v2", "Bone Lore", "Speaker for the Dead",], }, 
			{ name: "Improved Necromancy", preq: ["Basic Necromancy-v2",], req: ["Bone Lore",],}, 
			{ name: "Improved Speaker", req: ["Speaker for the Dead",], }, 
		], 
		[
			{ name: "Reading the Room", req: ["Blood Sorcery", "Improved Speaker",], }, 
			{ name: "Repair Flesh", req: ["Improved Speaker", "Improved Necromancy",], }, 
		], 
		[
			{ name: "Greater Necromancy", req: ["Repair Flesh", ], }, 
			{ name: "Wraith Cloak", req: ["Repair Flesh", "Reading the Room",], }, 
		], 
		[
			{ name: "Terrifying Gaze", req: ["Wraith Cloak",], }, 
			{ name: "Wall of Bones", req: ["Greater Necromancy", "Wraith Cloak",], }, 
		], 
		[
			{ name: "True Necromancy", req: ["Wall of Bones",], }, 
			{ name: "Word of Death", req: ["Terrifying Gaze", "Wall of Bones",], }, 
		], 
	], 
},
{ name: "Controls Beasts", ref: ["CCR 166&ndash;167",], genres: [ {name: "Fantasy", theme: "Druid, Ranger", }, {name: "Real World", theme: "Animal Telepath", }, {name: "Science Fiction", theme: "Animal Telepath", }, {name: "Superheroes", theme: "Animal Telepath", }, ], 
summary: ["Your ability to communicate and lead beasts is uncanny.", ], 
gmintrusions: ["The community is reluctant to welcome dangerous animals. Out-of-control beasts become a hazard.", ], 
abilities: [
		[
			{ name: "Beast Companion", }, 
			{ name: "Friend to Small Creatures", }, 
			{ name: "Understand Beast", }, 
		], 
		[
			{ name: "Beast Communication", req: ["Beast Companion",], }, 
			{ name: "Soothe the Savage", req: ["Beast Companion",], }, 
		], 
		[
			{ name: "Mount", req: ["Beast Communication",], }, 
			{ name: "Stronger Together", req: ["Beast Communication", "Soothe the Savage",], }, 
		], 
		[
			{ name: "Beast Eyes", req: ["Mount",], }, 
			{ name: "Improved Companion", req: ["Mount", "Stronger Together",], }, 
		], 
		[
			{ name: "Beast Betterment", req: ["Beast Eyes",], }, 
			{ name: "Beast Call", req: ["Beast Eyes", "Improved Companion",], }, 
		], 
		[
			{ name: "Armored Beast", req: ["Beast Betterment",], }, 
			{ name: "Control the Savage", req: ["Beast Betterment", "Beast Call",], }, 
		], 
	], 
},
{ name: "Crafts Illusions", ref: ["CCR 168&ndash;169",], genres: [ {name: "Fantasy", theme: "Illusionist", }, {name: "Science Fiction", theme: "Hologram Artist", }, {name: "Superheroes", theme: "Hologram Artist", }, ], 
summary: ["You fashion images from light that are so perfect they seem real.", ], 
gmintrusions: ["The illusion isn't believable. The illusion is pierced at just the wrong moment.", ], 
abilities: [
		[
			{ name: "Hedge Magic", }, 
			{ name: "Minor Illusion", }, 
			{ name: "Sense Magic", }, 
		], 
		[
			{ name: "Illusory Disguise", req: ["Hedge Magic",], }, 
			{ name: "Reveal Illusion", req: ["Minor Illusion", "Sense Magic",], }, 
		], 
		[
			{ name: "Cast Illusion", req: ["Illusory Disguise", "Major Illusion", "Reveal Illusion",], }, 
			{ name: "Major Illusion", req: ["Cast Illusion", "Illusory Disguise", "Reveal Illusion",], }, 
		], 
		[
			{ name: "Illusion Cocoon", req: ["Major Illusion",], }, 
			{ name: "Illusory Selves", req: ["Cast Illusion",], }, 
		], 
		[
			{ name: "Invisibility", req: ["Illusion Cocoon", "Illusory Selves",], }, 
			{ name: "Terrifying Image", req: ["Illusion Cocoon",], }, 
		], 
		[
			{ name: "Grandiose Illusion", req: ["Permanent Illusion", "Terrifying Image",], }, 
			{ name: "Permanent Illusion", req: ["Invisibility", "Grandiose Illusion",], }, 
		], 
	], 
},
{ name: "Doesn't Do Much", ref: ["CCR 170&ndash;171",], genres: [ {name: "Any Genre", theme: "Free Spirit, Itinerant", }, ], 
summary: ["You're a slacker, but you know a little about a lot of things.", ], 
gmintrusions: ["New situations are confounding and stressful. Past actions (or inactions) come back to haunt the character.", ], 
abilities: [
		[
			{ name: "Joy in Small Things", }, 
			{ name: "Life Lessons", }, 
			{ name: "Picking Up the Slack", }, 
		], 
		[
			{ name: "Inspiring Ease", req: ["Joy in Small Things", "Life Lessons",], }, 
			{ name: "Totally Chill", req: ["Joy in Small Things", "Life Lessons", "Picking Up the Slack",], }, 
		], 
		[
			{ name: "Extra Padding", req: ["Totally Chill",], }, 
			{ name: "Improvise", req: ["Inspiring Ease",], }, 
		], 
		[
			{ name: "Agile Wit", req: ["Extra Padding", "Improvise",], }, 
			{ name: "Gather Your Strength", req: ["Extra Padding", "Improvise",], }, 
		], 
		[
			{ name: "Attention to Detail", req: ["Agile Wit", "Gather Your Strength",], }, 
		], 
		[
			{ name: "Drawing on Life's Experiences", req: ["Attention to Detail",], }, 
		], 
	], 
},
{ name: "Employs Magnetism", ref: ["CCR 172&ndash;173",], genres: [ {name: "Fantasy", theme: "Iron Mage", }, {name: "Science Fiction", theme: "Asteroid Miner", }, {name: "Superheroes", theme: "Energy Wielder", }, ], 
summary: ["You command metal and the power of magnetism.", ], 
gmintrusions: ["The metal twists, bends, or produces shrapnel. A lapse in concentration might cause something to slip or drop at just the wrong time.", ], 
abilities: [
		[
			{ name: "Craft Metal", }, 
			{ name: "Move Metal", }, 
			{ name: "Sense Metal", }, 
		], 
		[
			{ name: "Electromagnetic Eyes", req: ["Move Metal",], }, 
			{ name: "Electromagnetically Charge", req: ["Move Metal",], }, 
			{ name: "Repel Metal", req: ["Move Metal",], }, 
		], 
		[
			{ name: "Guide Bolt", req: ["Electromagnetically Charge", "Rend Metal",], }, 
			{ name: "Rend Metal", req: ["Electromagnetically Charge", "Guide Bolt", "Repel Metal",], }, 
		], 
		[
			{ name: "Magnetic Field", req: ["Guide Bolt", "Rend Metal",], }, 
			{ name: "Magnetize", req: ["Guide Bolt", "Rend Metal",], }, 
		], 
		[
			{ name: "Command Metal", req: ["Iron in the Blood", "Magnetize",], }, 
			{ name: "Iron in the Blood", req: ["Command Metal", "Magnetic Field",], }, 
		], 
		[
			{ name: "Diamagnetism", req: ["Iron in the Blood",], }, 
			{ name: "Iron Punch", req: ["Command Metal",], }, 
		], 
	], 
},
{ name: "Entertains", ref: ["CCR 174&ndash;175",], genres: [ {name: "Fantasy", theme: "Bard", }, {name: "Historical", theme: "Bard, Entertainer", }, {name: "Real World", theme: "Entertainer", }, {name: "Science Fiction", theme: "Entertainer", }, ], 
summary: ["You perform, mostly for the benefit of others.", ], 
gmintrusions: ["The audience is annoyed or offended. Musical instruments break. Paints dry in their pots. The words to a poem or song are forgotten.", ], 
abilities: [
		[
			{ name: "Anecdote", }, 
			{ name: "Inspiring Suggestion", }, 
			{ name: "Knowing the Audience", }, 
		], 
		[
			{ name: "Inspiring Ease", req: ["Inspiring Suggestion", "Knowing the Audience",], }, 
			{ name: "Rising Courage", req: ["Anecdote", "Knowing the Audience",], }, 
		], 
		[
			{ name: "Find Motivation", req: ["Inspiring Ease",], }, 
			{ name: "Perfect Stranger", req: ["Rising Courage",], }, 
		], 
		[
			{ name: "Calm", req: ["Find Motivation", "Perfect Stranger",], }, 
			{ name: "Captivate or Inspire", req: ["Find Motivation", "Perfect Stranger",], }, 
		], 
		[
			{ name: "Willing Sacrifice", req: ["Calm", "Captivate or Inspire",], }, 
		], 
		[
			{ name: "Master Entertainer", preq: ["Inspiring Ease"], req: ["Willing Sacrifice",], }, 
			{ name: "Vindictive Performance", req: ["Willing Sacrifice",], }, 
		], 
	], 
},
{ name: "Explores", ref: ["CCR 176&ndash;177",], genres: [ {name: "Fantasy", theme: "Druid, Ranger", }, {name: "Survivor", theme: "Postapocalypse", }, {name: "Science Fiction", theme: "Planetary Explorer", }, {name: "Science Fiction", theme: "Survivor", }, ], 
summary: ["You love discovering and exploring new locations, whether a tranquil valley, a dangerous wasteland, or a forbidding planet&mdash;and you have the necessary skills to survive and thrive in those places.", ], 
gmintrusions: ["Maps get lost. An important detail is overlooked. An NPC disparages the character for being ignorant or uncivilized.", ], 
abilities: [
		[
			{ name: "Exploration Survivor", }, 
			{ name: "Tough", }, 
			{ name: "Untamed Recovery", }, 
		], 
		[
			{ name: "Beast Companion", req: ["Exploration Survivor", "Untamed Recovery",], }, 
			{ name: "Experienced Explorer", req: ["Exploration Survivor", "Untamed Recovery",], }, 
		], 
		[
			{ name: "Animal Senses and Sensibilities", req: ["Experienced Explorer", "Wilderness Encouragement",], }, 
			{ name: "Wilderness Encouragement", req: ["Animal Senses and Sensibilities", "Beast Companion",], }, 
		], 
		[
			{ name: "Wilderness Awareness", req: ["Animal Senses and Sensibilities", "Wilderness Encouragement",] , }, 
			{ name: "Wild Camouflage", req: ["Animal Senses and Sensibilities", "Wilderness Encouragement",], }, 
		], 
		[
			{ name: "Explorer's Awareness", req: ["The Wild Is on Your Side", "Wilderness Awareness",], }, 
			{ name: "The Wild Is on Your Side", req: ["Explorer's Awareness", "Wild Camouflage",], }, 
		], 
		[
			{ name: "One With the Wild", req: ["Explorer's Awareness", "The Wild Is on Your Side",], }, 
			{ name: "Survivor", req: ["Explorer's Awareness", "The Wild Is on Your Side",], }, 
		], 
	], 
},
{ name: "Fights Dirty", ref: ["CCR 178&ndash;178",], genres: [ {name: "Any Genre", theme: "Troublemaker, Loner", }, ], 
summary: ["You'll do anything to win a fight: bite, scratch, kick, trick, and worse.", ], 
gmintrusions: ["People look poorly upon those who cheat or fight without honor. Sometimes a dirty trick backfires.", ], 
abilities: [
		[
			{ name: "Dirty Trick", }, 
			{ name: "Go for the Eyes", }, 
			{ name: "Scratching and Kicking", }, 
		], 
		[
			{ name: "Despite My Wounds", req: ["Dirty Trick",], }, 
			{ name: "Sneak Attack", req: ["Dirty Trick",], }, 
			{ name: "When the Deal Bombs", req: ["Dirty Trick",], }, 
		], 
		[
			{ name: "Fast Kill", req: ["Despite My Wounds", "Sneak Attack",], }, 
			{ name: "Incapacitating Attack", req: ["Sneak Attack", "When the Deal Bombs",], }, 
		], 
		[
			{ name: "Feint", req: ["Fast Kill", "Incapacitating Attack",], }, 
			{ name: "Mind Games", req: ["Fast Kill", "Incapacitating Attack",], }, 
		], 
		[
			{ name: "Knock Out", req: ["Feint",], }, 
			{ name: "Using the Environment", req: ["Mind Games",], }, 
		], 
		[
			{ name: "Lethal Strike", req: ["Knock Out", "Using the Environment",], }, 
			{ name: "Twisting the Knife", req: ["Knock Out", "Using the Environment",], }, 
		], 
	], 
},
{ name: "Fights Unarmed", ref: ["CCR 180&ndash;181",], genres: [ {name: "Fantasy", theme: "Brawler, Monk", }, {name: "Real World", theme: "Boxer, Martial Artist", }, {name: "Science Fiction", theme: "Boxer, Martial Artist",}, {name: "Superheroes", theme: "Boxer, Martial Artist", }, ], 
summary: ["You're a scrapper and love a good fight. Punches, kicks, and full-body movements are your weapons.", ], 
gmintrusions: ["Brawlers trip and fall. Even the battlefield can work against you with things falling or collapsing. Striking certain foes hurts you as much as it hurts them. Opponents with weapons have greater reach. Complicated martial arts moves can knock you off balance.", ], 
abilities: [
		[
			{ name: "Body as a Tool", }, 
			{ name: "No Need for Weapons", }, 
			{ name: "Resilience", }, 
		], 
		[
			{ name: "Advantage to Disadvantage", req: ["No Need for Weapons",], }, 
			{ name: "Fearsome Reputation", req: ["No Need for Weapons",], }, 
			{ name: "High and Low", req: ["No Need for Weapons",], }, 
		], 
		[
			{ name: "Moving Like Water", req: ["Advantage to Disadvantage", "High and Low",], }, 
			{ name: "Throw", req: ["Fearsome Reputation", "High and Low",], }, 
		], 
		[
			{ name: "Divert Attacks", req: ["Moving Like Water",], }, 
			{ name: "Knock Out", req: ["Throw",], }, 
		], 
		[
			{ name: "Stunning Attack", req: ["Divert Attacks", "Knock Out",], }, 
		], 
		[
			{ name: "Lethal Capability", req: ["Stunning Attack",], }, 
			{ name: "Master of Unarmed Fighting Style", req: ["Stunning Attack",], }, 
		], 
	], 
},
{ name: "Fights With Panache", ref: ["CCR 182&ndash;183",], genres: [ {name: "Fantasy", theme: "Pirate, Swashbuckler", }, {name: "Historical", theme: "Pirate, Swashbuckler", }, {name: "Science Fiction", theme: "Duelist, Swordmaster", }, ], 
summary: ["You're a swashbuckling daredevil who fights with a flamboyant style that's entertaining to watch.", ], 
gmintrusions: ["The display comes off looking silly, clumsy, or unattractive.", ], 
abilities: [
		[
			{ name: "Attack Flourish", }, 
			{ name: "Roguish Smile", }, 
			{ name: "Taunting Defense", }, 
		], 
		[
			{ name: "Dashing Defense", req: ["Attack Flourish", "Roguish Smile", "Wounded Fury-v2",], }, 
			{ name: "Fast Kill", req: ["Taunting Defense", "Roguish Smile", "Wounded Fury-v2",], }, 
			{ name: "Wounded Fury-v2", req: ["Attack Flourish", "Dashing Defense", "Fast Kill",], }, 
		], 
		[
			{ name: "Acrobatic Attack", req: ["Dashing Defense", "Quick Adjustment", "Wounded Fury-v2",], }, 
			{ name: "Flamboyant Boast", req: ["Fast Kill", "Quick Adjustment", "Wounded Fury-v2",], }, 
			{ name: "Quick Adjustment", req: ["Acrobatic Attack", "Flamboyant Boast", "Wounded Fury-v2",], }, 
		], 
		[
			{ name: "Improved Dashing Defense", req: ["Acrobatic Attack",], }, 
			{ name: "Misdirect", req: ["Flamboyant Boast",], }, 
		], 
		[
			{ name: "Agile Wit", req: ["Improved Dashing Defense", "Misdirect",], }, 
			{ name: "Using the Environment", req: ["Improved Dashing Defense", "Misdirect",], }, 
		], 
		[
			{ name: "Again and Again", req: ["Again and Again", "Agile Wit",], }, 
			{ name: "Return to Sender", req: ["Return to Sender", "Using the Environment",], }, 
		], 
	], 
},
{ name: "Fuses Flesh and Steel", ref: ["CCR 184&ndash;185",], genres: [ {name: "Science Fiction", theme: "Cyborg, Robot", }, {name: "Superheroes", theme: "Cyborg, Robot", }, ], 
summary: ["Your body is partly or fully machine.", ], 
gmintrusions: ["People in most societies are afraid of someone who is revealed to have mechanical parts.", ], 
abilities: [
		[
			{ name: "Defensive Cybernetics", }, 
			{ name: "Hidden Shield", }, 
			{ name: "Powered Cybernetics", }, 
		], 
		[
			{ name: "High-Speed Interface", req: ["Defensive Cybernetics",], }, 
			{ name: "HUD", req: ["Hidden Shield",], }, 
		], 
		[
			{ name: "Enhanced Self-Repair", req: ["High-Speed Interface", "HUD",], }, 
			{ name: "Weaponization", req: ["High-Speed Interface", "HUD",], }, 
		], 
		[
			{ name: "Deep Reserves", req: ["Fusion", "Weaponization",], }, 
			{ name: "Fusion", req: ["Deep Reserves", "Enhanced Self-Repair",], }, 
		], 
		[
			{ name: "Bolts of Power", req: ["Deep Reserves",], }, 
			{ name: "Closed Loop Body", req: ["Fusion",], }, 
		], 
		[
			{ name: "Cybernetic Alacrity", req: ["Bolts of Power", "Closed Loop Body",], }, 
			{ name: "Embedded Drone", req: ["Bolts of Power", "Closed Loop Body",], }, 
		], 
	], 
},
{ name: "Fuses Mind and Machine", ref: ["CCR 186&ndash;187",], genres: [ {name: "Science Fiction", theme: "Cyborg, Living Computer", }, {name: "Superheroes", theme: "Cyborg, Living Computer", }, ], 
summary: ["Electronic aids implanted in your brain make you a mental powerhouse.", ], 
gmintrusions: ["Machines malfunction and shut down. Powerful machine intelligences can take control of lesser thinking machines. Some people don't trust a person who isn't fully organic.", ], 
abilities: [
		[
			{ name: "Data Processor", }, 
			{ name: "Think Fast", }, 
			{ name: "Wireless Interface", }, 
		], 
		[
			{ name: "Analytic Processor", req: ["Think Fast", "Wireless Interface",], }, 
			{ name: "Machine Reading", req: ["Think Fast", "Wireless Interface",], }, 
		], 
		[
			{ name: "Action Processor", preq: ["Data Processor", ], req: ["Analytic Processor", "Machine Reading",], }, 
			{ name: "Awareness", req: ["Machine Reading",], }, 
		], 
		[
			{ name: "Expanded Wireless", preq: ["Wireless Interface"], req: ["Awareness",], }, 
			{ name: "Locked Skill", req: ["Action Processor",], }, 
		], 
		[
			{ name: "Precognition", req: ["Expanded Wireless", "Locked Skill",], }, 
		], 
		[
			{ name: "Machine Enhancement", req: ["Precognition",], }, 
			{ name: "Mind Surge", req: ["Precognition",], }, 
		], 
	], 
},
{ name: "Grows to Towering Heights", ref: ["CCR 188&ndash;189",], genres: [ {name: "Fantasy", theme: "Giant", }, {name: "Science Fiction", theme: "Alien", }, {name: "Superheroes", theme: "Bruiser", }, ], 
summary: ["You can grow larger and, with enough experience, to towering heights.", ], 
gmintrusions: ["Rapid growth knocks over furnishings or smashes through ceilings or hanging lights. An enlarged character breaks through the floor.", ], 
abilities: [
		[
			{ name: "Enlarge", }, 
			{ name: "Longstrider", }, 
			{ name: "Mighty Leap", }, 
		], 
		[
			{ name: "Preternaturally Strong", req: ["Enlarge",], }, 
			{ name: "Scary Big", req: ["Enlarge",], }, 
		], 
		[
			{ name: "Bigger", req: ["Preternaturally Strong", "Scary Big", "Towering Throw",], }, 
			{ name: "Towering Throw", req: ["Bigger", "Preternaturally Strong", "Scary Big",], }, 
		], 
		[
			{ name: "Huge", req: ["Bigger", "Towering Strike",], }, 
			{ name: "Towering Strike", req: ["Huge", "Towering Throw",], }, 
		], 
		[
			{ name: "Gargantuan", req: ["Huge", "Might for Mind",], }, 
			{ name: "Might for Mind", req: ["Gargantuan","Towering Strike",], }, 
		], 
		[
			{ name: "Colossal", req: ["Gargantuan", "Grab",], }, 
			{ name: "Grab", req: ["Colossal", "Might for Mind",], }, 
		], 
	], 
},
{ name: "Howls at the Moon", ref: ["CCR 190&ndash;193",], genres: [ {name: "Fantasy", theme: "Lycanthrope", }, {name: "Science Fiction", theme: "Genetic Mishap", }, {name: "Superheroes", theme: "Lycanthrope", }, ], 
summary: ["For brief periods, you become a fearsome and powerful creature with control issues.", ], 
gmintrusions: ["The change happens in an uncontrolled fashion. People are terrified of monsters. Self-control (if any) is lost during this transformation.", ], 
abilities: [
		[
			{ name: "Beast Form", }, 
			{ name: "Call Upon the Beast", }, 
			{ name: "Keen Eye", }, 
		], 
		[
			{ name: "Beast Senses", req: ["Beast Form",], }, 
			{ name: "Controlled Change", req: ["Beast Form",], }, 
			{ name: "Scales", req: ["Beast Form",], }, 
			{ name: "Talons or Claws", req: ["Beast Form",], }, 
		], 
		[
			{ name: "Bigger Beast Form", req: ["Controlled Change", "Scales",], }, 
			{ name: "Sleeker Beast Form", req: ["Beast Senses", "Talons or Claws",], }, 
			{ name: "Wounded Fury-v3", req: ["Scales",], }, 
		], 
		[
			{ name: "Beast Healing", req: ["Bigger Beast Form", "Sleeker Beast Form",], }, 
			{ name: "Greater Controlled Change", req: ["Bigger Beast Form", "Sleeker Beast Form",], }, 
			{ name: "Poison Bite", req: ["Bigger Beast Form", "Wounded Fury-v3",], }, 
			{ name: "Wings", req: ["Sleeker Beast Form",], }, 
		], 
		[
			{ name: "Brute Squad", req: ["Beast Healing", "Wings",], }, 
			{ name: "Enhanced Beast Form", req: ["Greater Controlled Change", "Poison Bite",], }, 
		], 
		[
			{ name: "Constrict", req: ["Enhanced Beast Form",], }, 
			{ name: "Lethal Capability", req: ["Brute Squad",], }, 
			{ name: "Perfect Control", req: ["Brute Squad", "Enhanced Beast Form",], }, 
		], 
	], 
},
{ name: "Hunts", ref: ["CCR 194&ndash;195",], genres: [ {name: "Fantasy", theme: "Assassin, Ranger", }, {name: "Real World", theme: "Bounty Hunter", }, {name: "Science Fiction", theme: "Bounty Hunter", }, {name: "Superheroes", theme: "Bounty Hunter", }, ], 
summary: ["You are a stalking hunter who excels at bringing down your selected quarry, whether person or beast.", ], 
gmintrusions: ["Your target notices you. The target isn't as vulnerable as it seemed. Someone reacts poorly to knowing you hunt.", ], 
abilities: [
		[
			{ name: "Hunter's Determination", }, 
			{ name: "Knowledge of Nature", }, 
			{ name: "Sneak Attack", }, 
		], 
		[
			{ name: "Fast Kill", req: ["Hunter's Determination", "Sneak Attack",], }, 
			{ name: "Quarry-v2", req: ["Hunter's Determination", "Sneak Attack",], }, 
		], 
		[
			{ name: "Awareness", req: ["Fast Kill",], }, 
			{ name: "Horde Fighting", req: ["Fast Kill", "Quarry-v2",], }, 
			{ name: "Poison Crafter", req: ["Quarry-v2",], }, 
		], 
		[
			{ name: "Better Sneak Attack", preq: ["Sneak Attack",], req: ["Awareness", "Horde Fighting", "Sprint and Grab",], }, 
			{ name: "Sprint and Grab", req: ["Better Sneak Attack", "Horde Fighting", "Poison Crafter",], }, 
		], 
		[
			{ name: "Damage Dealer-v2", req: ["Better Sneak Attack", "Sprint and Grab",], }, 
			{ name: "Hunter's Drive", preq: ["Quarry-v2",], req: ["Sprint and Grab",], }, 
		], 
		[
			{ name: "Escape Plan", req: ["Damage Dealer-v2", "Hunter's Drive",], }, 
			{ name: "Lethal Strike", req: ["Damage Dealer-v2", "Hunter's Drive",], }, 
			{ name: "Multiple Quarries", preq: ["Quarry-v2",], req: ["Hunter's Drive",], }, 
		], 
	], 
},
{ name: "Infiltrates", ref: ["CCR 196&ndash;197",], genres: [ {name: "Any Genre", theme: "Spy", }, ], 
summary: ["Subtlety, guile, and stealth allow you to get in where others can't.", ], 
gmintrusions: ["are treated harshly when caught. Allies disavow infiltrators who get caught. Some secrets are better left unknown.", ], 
abilities: [
		[
			{ name: "Fast Talk", }, 
			{ name: "Letting Their Guard Down", }, 
			{ name: "Master of Disguise-v1", }, 
			{ name: "Natural Sneak", }, 
		], 
		[
			{ name: "Awareness", req: ["Master of Disguise-v1", "Natural Sneak",], }, 
			{ name: "Flight Not Fight", req: ["Master of Disguise-v1", "Natural Sneak",], }, 
		], 
		[
			{ name: "Blend In", req: ["Flight Not Fight", "Scrutinize Defenses",], }, 
			{ name: "Defend and Respond", req: ["Awareness", "Scrutinize Defenses",], }, 
			{ name: "Scrutinize Defenses", req: ["Awareness", "Blend In", "Defend and Respond", "Flight Not Fight",], }, 
		], 
		[
			{ name: "Convenient Device", req: ["Scrutinize Defenses",], }, 
		], 
		[
			{ name: "Invisibility", req: ["Convenient Device",], }, 
			{ name: "Persistence Training", req: ["Convenient Device",], }, 
		], 
		[
			{ name: "Brainwashing", req: ["Persistence Training",], }, 
			{ name: "Spring Away", req: ["Invisibility",], }, 
		], 
	], 
},
{ name: "Leads", ref: ["CCR 198&ndash;199",], genres: [ {name: "Fantasy", theme: "Bard", }, {name: "Historical", theme: "Bard, Politician", }, {name: "Real World", theme: "Politician", }, {name: "Science Fiction", theme: "Politician", }, ], 
summary: ["Your natural leadership capability allows you to command others, including a loyal band of followers.", ], 
gmintrusions: ["Followers fail, betray, lie, become corrupted, get kidnapped, or die. A political opponent becomes prominent. An ally becomes aware of a broken promise.", ], 
abilities: [
		[
			{ name: "Always Witty", }, 
			{ name: "Inspiring Suggestion", }, 
			{ name: "Lighting a Fire Under Them", }, 
		], 
		[
			{ name: "Basic Follower", req: ["Inspiring Suggestion", "Lighting a Fire Under Them", "Natural Leader",], }, 
			{ name: "Natural Leader", req: ["Basic Follower", "Inspiring Suggestion", "Lighting a Fire Under Them",], }, 
		], 
		[
			{ name: "Advanced Command", req: ["Basic Follower", "Natural Leader",], }, 
			{ name: "Expert Follower", req: ["Basic Follower",], }, 
		], 
		[
			{ name: "Calm", req: ["Advanced Command", "Expert Follower",], }, 
			{ name: "Captivate or Inspire", req: ["Expert Follower",], }, 
		], 
		[
			{ name: "Improved Follower", preq: ["Captivate or Inspire",], req: ["Basic Follower", "Expert Follower",], }, 
			{ name: "Stimulate", req: ["Calm", "Captivate or Inspire",], }, 
		], 
		[
			{ name: "Band of Followers", req: ["Improved Follower", "Stimulate",], }, 
			{ name: "Mind of a Leader", req: ["Improved Follower", "Stimulate",], }, 
		], 
	], 
},
{ name: "Masters Telekinesis", ref: ["CCR 200&ndash;201",], genres: [ {name: "Fantasy", theme: "Mind Witch", }, {name: "Real World", theme: "Telekinetic", }, {name: "Science Fiction", theme: "Telekinetic", }, {name: "Superheroes", theme: "Telekinetic", }, ], 
summary: ["You can telekinetically move objects with your mind without physically touching them.", ], 
gmintrusions: ["One mental slip, and moving objects drop or fragile objects break. Sometimes the wrong item moves, falls, or breaks.", ], 
abilities: [
		[
			{ name: "Push", }, 
			{ name: "Steady Hand", }, 
			{ name: "Telekinesis", }, 
		], 
		[
			{ name: "Deflect Attacks", req: ["Push", "Telekinesis",], }, 
			{ name: "Energize Object", req: ["Steady Hand", "Telekinesis",], }, 
		], 
		[
			{ name: "Armoring Debris", req: ["Energize Object",], }, 
			{ name: "Enhance Strength", req: ["Deflect Attacks",], }, 
		], 
		[
			{ name: "Apportation", req: ["Enhance Strength", "Armoring Debris",], }, 
			{ name: "Mind for Speed", req: ["Enhance Strength", "Armoring Debris",], }, 
		], 
		[
			{ name: "Psychokinetic Attack", req: ["Apportation", "Mind for Speed",], }, 
		], 
		[
			{ name: "Improved Apportation", preq: ["Apportation",], req: ["Psychokinetic Attack",], }, 
			{ name: "Reshape", req: ["Psychokinetic Attack",], }, 
		], 
	], 
},
{ name: "Masters Weaponry", ref: ["CCR 202&ndash;203",], genres: [ {name: "Fantasy", theme: "Paladin, Ranger", }, {name: "Historical", theme: "Weapons Master", }, {name: "Real World", theme: "Weapons Master", }, {name: "Science Fiction", theme: "Weapons Master", }, {name: "Superheroes", theme: "Weapons Master", }, ], 
summary: ["You are a master user of a particular type of weapon, be it a sword, whip, dagger, bow, gun, or something else.", ], 
equipment: ["You have a weapon appropriate to your area of mastery."], 
gmintrusions: ["Weapons break. Weapons can be stolen. Weapons can be dropped or forced out of your hand.", ], 
abilities: [
		[
			{ name: "Battle Competence", }, 
			{ name: "Display of Skill", }, 
			{ name: "Weapon Master", }, 
		], 
		[
			{ name: "Careful Shot", req: ["Weapon Master",], }, 
			{ name: "Perfect Attack", req: ["Battle Competence",], }, 
			{ name: "Throw Weapon", req: ["Display of Skill",], }, 
		], 
		[
			{ name: "Disarming Strike", req: ["Careful Shot", "Perfect Attack", "Throw Weapon",], }, 
			{ name: "Rapid Attack", req: ["Careful Shot", "Perfect Attack", "Throw Weapon",], }, 
			{ name: "Spray", req: ["Careful Shot",], }, 
		], 
		[
			{ name: "Never Fumble", req: ["Disarming Strike",], }, 
			{ name: "Rival Talent", req: ["Rapid Attack",], }, 
			{ name: "Special Shot", req: ["Rapid Attack", "Spray",], }, 
		], 
		[
			{ name: "Arc Spray", req: ["Rival Talent", "Special Shot",], }, 
			{ name: "That Was a Feint", req: ["Never Fumble", "Rival Talent", ], }, 
		], 
		[
			{ name: "Lethal Strike", req: ["That Was a Feint",], }, 
			{ name: "Perfect Follow-Through", req: ["That Was a Feint",], }, 
			{ name: "Shot Collision", req: ["Arc Spray", "That Was a Feint",], }, 
		], 
	], 
},
{ name: "Moves Like the Wind", ref: ["CCR 204&ndash;205",], genres: [ {name: "Fantasy", theme: "Coward, Messenger, Scout", }, {name: "Historical", theme: "Coward, Messenger, Scout", }, {name: "Real World", theme: "Athlete, Coward, Messenger, Scout", }, {name: "Science Fiction", theme: "Athlete, Coward, Scout", }, {name: "Superhero", theme: "Speedster", }, ], 
summary: ["You are an incredibly fast runner, whether moving toward a foe or away from danger.", ], 
gmintrusions: ["Quick movements sometimes lead to dropped items, slipping on uneven ground, or going the wrong way by accident.", ], 
abilities: [
		[
			{ name: "Fleet of Foot", }, 
			{ name: "Get Out", }, 
			{ name: "Recover Faster", }, 
		], 
		[
			{ name: "Escape", req: ["Fleet of Foot",], }, 
			{ name: "Obstacle Running", req: ["Fleet of Foot", "Get Out",], }, 
		], 
		[
			{ name: "Incredible Running Speed", genre: true, req: ["Obstacle Running",], }, 
			{ name: "Speedy Threat", req: ["Obstacle Running", "Escape",], }, 
		], 
		[
			{ name: "Blink of an Eye", genre: true, req: ["Incredible Running Speed",], }, 
			{ name: "Increasing Determination", req: ["Incredible Running Speed", "Speedy Threat",], }, 
			{ name: "Speed for Mind", req: ["Speedy Threat",], }, 
		], 
		[
			{ name: "Go to Ground", req: ["Blink of an Eye", "Increasing Determination", "Speed for Mind",], }, 
			{ name: "Hard to See", genre: true, req: ["Blink of an Eye",], }, 
		], 
		[
			{ name: "Speed Surge", req: ["Go to Ground", "Hard to See",], }, 
			{ name: "Up to Speed", genre: true, req: ["Hard to See",], }, 
		], 
	], 
},
{ name: "Never Says Die", ref: ["CCR 206&ndash;207",], genres: [ {name: "Fantasy", theme: "Fighter", }, {name: "Postapocalypse", theme: "Soldier, Survivor", }, {name: "Real World", theme: "Soldier, Survivor", }, {name: "Science Fiction", theme: "Soldier, Survivor", }, {name: "Superheroes", theme: "Tank", }, ], 
summary: ["You never quit, can shrug off a beating, and always come back for more.", ], 
gmintrusions: ["Sometimes, it's equipment or weapons that give out.", ], 
abilities: [
		[
			{ name: "Determination", }, 
			{ name: "Push on Through", }, 
			{ name: "Safe Fall", }, 
		], 
		[
			{ name: "Always Mighty", req: ["Push on Through", "Safe Fall",], }, 
			{ name: "Ignore the Pain", req: ["Push on Through", "Safe Fall",], }, 
		], 
		[
			{ name: "Blood Fever", req: ["Hidden Reserves", "Ignore the Pain",], }, 
			{ name: "Hidden Reserves", req: ["Always Mighty", "Blood Fever",], }, 
		], 
		[
			{ name: "Increasing Determination", req: ["Blood Fever",], }, 
			{ name: "Outlast the Foe", req: ["Hidden Reserves",], }, 
		], 
		[
			{ name: "Not Dead Yet", req: ["Increasing Determination", "Outlast the Foe",], }, 
		], 
		[
			{ name: "Final Defiance", req: ["Not Dead Yet",], }, 
			{ name: "Ignore Affliction", req: ["Not Dead Yet",], }, 
		], 
	], 
},
{ name: "Performs Feats of Strength", ref: ["CCR 208&ndash;209",], genres: [ {name: "Fantasy", theme: "Fighter", }, {name: "Real World", theme: "Athlete", }, {name: "Science Fiction", theme: "Athlete", }, {name: "Superheroes", theme: "Brick", }, ], 
summary: ["A muscled prodigy, you can haul incredible weight, hurl your body through the air, and punch through doors.", ], 
gmintrusions: ["It's easy to break delicate things or hurt someone accidentally.", ], 
abilities: [
		[
			{ name: "Always Mighty", }, 
			{ name: "Hitting Harder", }, 
			{ name: "Inspiring Display", }, 
		], 
		[
			{ name: "Desperate Feat", req: ["Always Mighty", "Hitting Harder", "Inspiring Display",], }, 
			{ name: "Feat of Strength", req: ["Always Mighty", "Hitting Harder",], }, 
			{ name: "Naturally Strong", req: ["Hitting Harder", "Inspiring Display",], }, 
		], 
		[
			{ name: "Deep Reserves", req: ["Desperate Feat", "Feat of Strength",], }, 
			{ name: "Iron Fist", req: ["Desperate Feat", "Naturally Strong",], }, 
		], 
		[
			{ name: "Amazing Strength", req: ["Deep Reserves",], }, 
			{ name: "Throw", req: ["Iron Fist",], }, 
		], 
		[
			{ name: "Brute Strike", req: ["Amazing Strength", "Throw",], }, 
		], 
		[
			{ name: "Brute Squad", req: ["Brute Strike",], }, 
			{ name: "Jump Attack", req: ["Brute Strike",], }, 
		], 
	], 
},
{ name: "Quells Evil", ref: ["CCR 210&ndash;211",], genres: [ {name: "Fantasy", theme: "Cleric", }, {name: "Real World", theme: "Priest", }, {name: "Superheroes", theme: "Spiritual Super", }, ], 
summary: ["You are skilled in finding, destroying, and banishing undead, demons, and creatures of similar ilk.", ], 
gmintrusions: ["Some evil creatures are more powerful and resilient than they first seem. Too much evil contact risks contagion with evil influence.", ], 
abilities: [
		[
			{ name: "Inspiring Trust", }, 
			{ name: "Sense Evil", }, 
			{ name: "Tribulation", }, 
		], 
		[
			{ name: "Invisibility to Evil", req: ["Sense Evil", "Tribulation",], }, 
			{ name: "Shield Against Evil", req: ["Sense Evil", "Tribulation",], }, 
		], 
		[
			{ name: "Blast Evil", req: ["Invisibility to Evil", "Unearth Evil",], }, 
			{ name: "Unearth Evil", req: ["Blast Evil", "Shield Against Evil",], }, 
		], 
		[
			{ name: "Rebuke Evil", req: ["Blast Evil",], }, 
			{ name: "Righteous Cloak", req: ["Unearth Evil",], }, 
		], 
		[
			{ name: "Shrug Off Evil", req: ["Blast Evil", "Unearth Evil",], }, 
		], 
		[
			{ name: "Fence Out Evil", req: ["Shrug Off Evil",], }, 
			{ name: "Supreme Retribution", req: ["Shrug Off Evil",], }, 
		], 
	], 
},
{ name: "Reveres a Supernatural Force", ref: ["CCR 212&ndash;213",], genres: [ {name: "Fantasy", theme: "Eldritch Knight", }, {name: "Psychic Knight", theme: "Science Fiction", }, ], 
summary: ["You are a member of a religious order that studies the mystical power that unites all things across galactic distances, granting you psychic and physical abilities.", ], 
gmintrusions: ["Sensing a sudden and massive number of deaths can be overwhelming. A foe reveals their own connection to the mystic power.", ], 
abilities: [
		[
			{ name: "Defensive Precognition", }, 
			{ name: "Push", }, 
			{ name: "Use the Force", }, 
		], 
		[
			{ name: "Desperate Feat", req: ["Use the Force",], }, 
			{ name: "Telekinesis", req: ["Use the Force",], }, 
			{ name: "Telepathic Message", req: ["Defensive Precognition", "Use the Force",], }, 
		], 
		[
			{ name: "Acrobatic Attack", req: ["Desperate Feat", "Telekinesis",], }, 
			{ name: "Psychic Suggestion", req: ["Desperate Feat", "Telepathic Message",], }, 
		], 
		[
			{ name: "Telekinetic Crush", req: ["Acrobatic Attack", "Psychic Suggestion",], }, 
			{ name: "Unbalancing Strike", req: ["Acrobatic Attack", "Psychic Suggestion",], }, 
		], 
		[
			{ name: "Telekinetic Throw", req: ["Telekinetic Crush",], }, 
			{ name: "Total Awareness", req: ["Unbalancing Strike",], }, 
		], 
		[
			{ name: "Lethal Capability", req: ["Telekinetic Throw", "Total Awareness",], }, 
			{ name: "Return to Sender", req: ["Telekinetic Throw", "Total Awareness",], }, 
		], 
	], 
},
{ name: "Rides the Lightning", ref: ["CCR 214&ndash;215",], genres: [ {name: "Fantasy", theme: "Wizard, Nature Cleric", }, {name: "Science Fiction", theme: "Alien", }, {name: "Superheroes", theme: "Lightning Wielder", }, ], 
summary: ["You emit and manipulate lightning and thunder.", ], 
gmintrusions: ["Targets other than those intended are shocked. Objects explode. Loud noises attract attention.", ], 
abilities: [
		[
			{ name: "Control Electric Device", }, 
			{ name: "Lightning Hand", }, 
			{ name: "Thunder Crash", }, 
		], 
		[
			{ name: "Bolt Rider", req: ["Lightning Hand",], }, 
			{ name: "Radiohead", req: ["Lightning Hand", "Control Electric Device",], }, 
			{ name: "Resist the Storm", req: ["Lightning Hand", "Thunder Crash",], }, 
		], 
		[
			{ name: "Deafening Bolt", req: ["Bolt Rider", "Resist the Storm",], }, 
			{ name: "Electric Armor", req: ["Bolt Rider", "Radiohead",], }, 
		], 
		[
			{ name: "Bolts of Power", req: ["Deafening Bolt",], }, 
			{ name: "Subsonic Rumble", req: ["Electric Armor",], }, 
		], 
		[
			{ name: "Discharge", req: ["Bolts of Power", "Subsonic Rumble",], }, 
			{ name: "Electric Flight", req: ["Subsonic Rumble",], }, 
		], 
		[
			{ name: "Flash Across the Miles", req: ["Discharge", "Electric Flight",], }, 
			{ name: "Wall of Lightning", req: ["Discharge", "Electric Flight",], }, 
		], 
	], 
},
{ name: "Sneaks Through the Shadows", ref: ["CCR 216&ndash;217",], genres: [ {name: "Fantasy", theme: "Burglar, Thief, Treasure Hunter", }, {name: "Historical", theme: "Thief, Spy", }, {name: "Real World", theme: "Thief, Spy", }, {name: "Science Fiction", theme: "Thief, Spy", }, {name: "Superheroes", theme: "Thief, Spy", }, ], 
summary: ["You use shadows and darkness to make your way unseen, moving quickly and smoothly, and you never seem to be where danger is. Maybe you use these abilities to hunt treasures, or maybe just to steal.", ], 
gmintrusions: ["You get thrown in jail. Powerful enemies are made. You have a moment of clumsiness.", ], 
abilities: [
		[
			{ name: "Always Speedy", }, 
			{ name: "Eyes Adjusted", }, 
			{ name: "Natural Sneak", }, 
		], 
		[
			{ name: "Safe Fall", req: ["Eyes Adjusted", "Natural Sneak",], }, 
			{ name: "Underworld Contacts", req: ["Always Speedy", "Natural Sneak",], }, 
		], 
		[
			{ name: "Nine Lives", req: ["Retaliatory Swipe", "Safe Fall", "Underworld Contacts",], }, 
			{ name: "Retaliatory Swipe", req: ["Nine Lives", "Safe Fall", "Underworld Contacts",], }, 
		], 
		[
			{ name: "Hard-Won Resilience", req: ["Nine Lives",], }, 
			{ name: "Unbalancing Strike", req: ["Retaliatory Swipe",], }, 
		], 
		[
			{ name: "Dirty Fighter", req: ["Hard-Won Resilience", "Unbalancing Strike",], }, 
			{ name: "Slippery Customer", preq: ["Eyes Adjusted",], req: ["Hard-Won Resilience",], }, 
		], 
		[
			{ name: "Again and Again", req: ["Dirty Fighter", "Slippery Customer",], }, 
			{ name: "Alley Rat", req: ["Dirty Fighter", "Slippery Customer",], }, 
		], 
	], 
},
{ name: "Solves Mysteries", ref: ["CCR 218&ndash;219",], genres: [ {name: "Fantasy", theme: "Truthfinder", }, {name: "Real World", theme: "Detective", }, {name: "Science Fiction", theme: "Detective", }, {name: "Superheroes", theme: "Detective", }, ], 
summary: ["You're a master of deduction, using evidence to find the answer.", ], 
gmintrusions: ["Evidence disappears, red herrings confuse, and witnesses lie. Initial research can be faulty.", ], 
abilities: [
		[
			{ name: "Investigative Knack", }, 
			{ name: "Sense Weakness", }, 
			{ name: "Sleuthing", }, 
		], 
		[
			{ name: "Master of Disguise-v2", req: ["Investigative Knack", "Sense Weakness",], }, 
			{ name: "Out of Harm's Way", req: ["Sense Weakness", "Sleuthing",], }, 
		], 
		[
			{ name: "Combat Prowess", req: ["Master of Disguise-v2", "Out of Harm's Way",], }, 
			{ name: "Ditch Assumption", req: ["Master of Disguise-v2", "Out of Harm's Way",], }, 
		], 
		[
			{ name: "Defend and Respond", req: ["Combat Prowess",], }, 
			{ name: "Lead by Inquiry", req: ["Ditch Assumption",], }, 
		], 
		[
			{ name: "Defuse Situation", req: ["Defend and Respond", "Lead by Inquiry",], }, 
		], 
		[
			{ name: "Infer Thoughts", req: ["Defuse Situation",], }, 
			{ name: "Knowing the Unknown", req: ["Defuse Situation",], }, 
		], 
	], 
},
{ name: "Speaks for the Land", ref: ["CCR 220&ndash;221",], genres: [ {name: "Fantasy", theme: "Nature Priest, Plant Druid", }, {name: "Real World", theme: "Real World", }, {name: "Science Fiction", theme: "Real World", }, {name: "Superheroes", theme: "Plant Psychic", }, ], 
summary: ["Your spiritual connection to nature and the environment grants you mystical abilities.", ], 
gmintrusions: ["An injured natural (but dangerous) creature is discovered. Someone is poaching wildlife for their skins, leaving the carcasses to rot. A tree falls in the forest, one of the last elder trees.", ], 
abilities: [
		[
			{ name: "Healing Fruit", }, 
			{ name: "Seeds of Fury-v2", }, 
			{ name: "Wild Affinity", }, 
		], 
		[
			{ name: "Communication", req: ["Healing Fruit", "Seeds of Fury", "Wild Affinity",], }, 
			{ name: "Wilderness Experience", req: ["Healing Fruit", "Seeds of Fury-v2", "Wild Affinity",], }, 
		], 
		[
			{ name: "Nature's Grip", req: ["Communication", "Nature's Voice",], }, 
			{ name: "Nature's Voice", req: ["Nature's Grip", "Wilderness Experience",], }, 
		], 
		[
			{ name: "Moon Shape", req: ["Nature's Grip", "Nature's Voice"], }, 
			{ name: "Wilderness Encouragement", req: ["Nature's Grip", "Nature's Voice"], }, 
		], 
		[
			{ name: "Insect Eruption", req: ["Moon Shape", "Wilderness Encouragement",], }, 
		], 
		[
			{ name: "Call the Storm", req: ["Insect Eruption",], }, 
			{ name: "Earthshake-v2", req: ["Insect Eruption",], }, 
		], 
	], 
},
{ name: "Stands Like a Bastion", ref: ["CCR 222&ndash;223",], genres: [ {name: "Fantasy", theme: "Stalwart Warrior", }, {name: "Superheroes", theme: "Tank", }, ], 
summary: ["Your armor, along with your size, strength, incredible training, or machine enhancement, makes you difficult to move or hurt.", ], 
equipment: ["You have a set of medium or heavy armor."],
gmintrusions: ["Armor is damaged. Small foes conspire in ingenious ways.", ], 
abilities: [
		[
			{ name: "Battle Competence", }, 
			{ name: "Imperturbable", }, 
			{ name: "Nothing but Defend", }, 
		], 
		[
			{ name: "Resist the Elements", req: ["Battle Competence", "Nothing but Defend",], }, 
			{ name: "Shield Master", req: ["Battle Competence", "Imperturbable",], }, 
		], 
		[
			{ name: "Defend and Respond", req: ["Resist the Elements",], }, 
			{ name: "Throw Shield", req: ["Shield Master",], }, 
			{ name: "Unmovable", req: ["Resist the Elements", "Shield Master",], }, 
		], 
		[
			{ name: "Hard-Won Resilience", req: ["Defend and Respond", "Unmovable",], }, 
			{ name: "Inspiring Defense", req: ["Throw Shield",], }, 
		], 
		[
			{ name: "Tower of Will", req: ["Inspiring Defense",], }, 
			{ name: "Weave an Iron Wall", req: ["Hard-Won Resilience", "Inspiring Defense",], }, 
		], 
		[
			{ name: "Attenuate Threat", req: ["Tower of Will",], }, 
			{ name: "Bouncing Shield", req: ["Tower of Will",], }, 
			{ name: "Lethal Capability", req: ["Weave an Iron Wall",], }, 
		], 
	], 
},
{ name: "Strikes With Mystic Might", ref: ["CCR 224&ndash;225",], genres: [ {name: "Fantasy", theme: "Mystic Monk", }, {name: "Superheroes", theme: "Mystic Monk", }, ], 
summary: ["Your unarmed techniques are infused with otherworldly energies, enabling you to move beyond the merely physical.", ], 
gmintrusions: ["Powerful strikes resonate, drawing unwanted attention or breaking nearby objects.", ], 
abilities: [
		[
			{ name: "Mystic Hand", }, 
			{ name: "No Need for Weapons", }, 
			{ name: "Supernatural Leap", }, 
		], 
		[
			{ name: "Safe Fall", req: ["Mystic Hand", "No Need for Weapons",], }, 
			{ name: "Surging Hand", req: ["Mystic Hand", "No Need for Weapons", "Supernatural Leap",], }, 
		], 
		[
			{ name: "Mystic Flurry", req: ["Surging Hand",], }, 
			{ name: "Perfecting the Body", req: ["Safe Fall",], }, 
		], 
		[
			{ name: "Mystic Step", req: ["Mystic Flurry", "Perfecting the Body",], }, 
		], 
		[
			{ name: "Exploding Hand", req: ["Mystic Step",], }, 
			{ name: "Resonant Palm", req: ["Mystic Step",], }, 
		], 
		[
			{ name: "Lethal Strike", req: ["Exploding Hand", "Resonant Palm",], }, 
			{ name: "Perfected Form", req: ["Exploding Hand", "Resonant Palm",], }, 
		], 
	], 
},
{ name: "Talks to Machines", ref: ["CCR 226&ndash;227",], genres: [ {name: "Fantasy", theme: "Golem Whisperer", }, {name: "Real World", theme: "Coder", }, {name: "Science Fiction", theme: "Cyber Mind", }, {name: "Superheroes", theme: "Cyber Mind", }, ], 
summary: ["You use your brain like a computer, interfacing \"wirelessly\" with any electronic device. You can control and influence them in ways that others can't.", ], 
gmintrusions: ["The machine malfunctions or acts unpredictably.", ], 
abilities: [
		[
			{ name: "Charm Machine", }, 
			{ name: "Control Electric Device", }, 
			{ name: "Friend to Intelligent Machines", }, 
		], 
		[
			{ name: "Coaxing Power", req: ["Charm Machine", "Friend to Intelligent Machines",], }, 
			{ name: "Locate Machine", req: ["Control Electric Device", "Charm Machine",], }, 
			{ name: "Machine Control", req: ["Control Electric Device", "Charm Machine", "Friend to Intelligent Machines",], }, 
		], 
		[
			{ name: "Disable Mechanism", req: ["Locate Machine", "Machine Control",], }, 
			{ name: "Quick Control", req: ["Coaxing Power", "Machine Control",], }, 
		], 
		[
			{ name: "Compile Robotic Offense", req: ["Disable Mechanism", "Quick Control",], }, 
			{ name: "Machine Companion-v2", req: ["Disable Mechanism",], }, 
		], 
		[
			{ name: "Information Gathering", req: ["Compile Robotic Offense", "Machine Companion-v2",], }, 
		], 
		[
			{ name: "Improved Machine Companion", req: ["Information Gathering",], }, 
			{ name: "Recompile Machine", req: ["Information Gathering",], }, 
		], 
	], 
},
{ name: "Tends to the Wounded", ref: ["CCR 228&ndash;229",], genres: [ {name: "Fantasy", theme: "Healer", }, {name: "Real World", theme: "Doctor", }, {name: "Science Fiction", theme: "Doctor", }, {name: "Superheroes", theme: "Doctor", }, ], 
summary: ["You can heal others with a touch, can alter time to help others, and are generally beloved by everyone.", ], 
gmintrusions: ["Attempts to heal might cause harm instead. A community or individual needs a healer so desperately that they hold one against their will.", ], 
abilities: [
		[
			{ name: "Easing the Pain", }, 
			{ name: "Healing Hand", }, 
			{ name: "Resilience", }, 
		], 
		[
			{ name: "Alleviate Malady", req: ["Resilience", "Healing Hand",], }, 
			{ name: "Healing Beacon", req: ["Easing the Pain", "Healing Hand",], }, 
		], 
		[
			{ name: "Font of Healing", req: ["Healing Beacon",], }, 
			{ name: "Font of Recovery", req: ["Alleviate Malady",], }, 
		], 
		[
			{ name: "Healing Shield", req: ["Font of Healing", "Font of Recovery",], }, 
			{ name: "Resuscitate", req: ["Font of Healing", "Font of Recovery",], }, 
		], 
		[
			{ name: "Ranged Healer", req: ["Resuscitate",], }, 
			{ name: "Rewind Time", req: ["Healing Shield",], }, 
		], 
		[
			{ name: "Greater Healing Hand", req: ["Ranged Healer", "Rewind Time",], }, 
			{ name: "Superior Healer", req: ["Ranged Healer", "Rewind Time",], }, 
		], 
	], 
},
{ name: "Walks Through Walls", ref: ["CCR 230&ndash;231",], genres: [ {name: "Fantasy", theme: "Magical Being", }, {name: "Science Fiction", theme: "Science Prodigy", }, {name: "Superheroes", theme: "Phase Walker", }, ], 
summary: ["A bit translucent when you want to be, you can move through solid objects.", ], 
gmintrusions: ["The character is sent phasing into an unexpected dimension. The character becomes lost in a large solid.", ], 
abilities: [
		[
			{ name: "Light Step", }, 
			{ name: "Soft Whisper", }, 
			{ name: "Walk Through Walls", }, 
		], 
		[
			{ name: "Defensive Phasing", req: ["Walk Through Walls",], }, 
			{ name: "Phase Grasp", req: ["Walk Through Walls",], }, 
			{ name: "Slip Into Shadow-v2", req: ["Walk Through Walls",], }, 
		], 
		[
			{ name: "Faster Phase", req: ["Defensive Phasing", "Phase Grasp",], }, 
			{ name: "Phased Attack", req: ["Phase Grasp", "Slip Into Shadow-v2",], }, 
		], 
		[
			{ name: "Phase Door", req: ["Faster Phase", "Phased Attack",], }, 
			{ name: "Phase Friend", req: ["Faster Phase", "Phased Attack",], }, 
		], 
		[
			{ name: "Quick Phase", req: ["Phase Friend",], }, 
			{ name: "Untouchable", req: ["Phase Door",], }, 
		], 
		[
			{ name: "Phase Foe", req: ["Quick Phase", "Untouchable",], }, 
			{ name: "Selective Phase Attack", preq: ["Phased Attack"], req: ["Quick Phase", "Untouchable",], }, 
		], 
	], 
},
{ name: "Wears a Sheen of Ice", ref: ["CCR 232&ndash;233",], genres: [ {name: "Fantasy", theme: "Elemental Ancestry", }, {name: "Superheroes", theme: "Lord of Ice", }, ], 
summary: ["You command the wintry power of cold and ice.", ], 
gmintrusions: ["Ice makes surfaces slippery. Extreme cold causes objects to crack and break.", ], 
abilities: [
		[
			{ name: "Cool Water", }, 
			{ name: "Ice Armor", }, 
			{ name: "Lower Temperature", }, 
		], 
		[
			{ name: "Frost Bolt", req: ["Ice Armor",], }, 
			{ name: "Ice Slide", req: ["Ice Armor",], }, 
		], 
		[
			{ name: "Ice Creation", req: ["Frost Bolt", "Ice Slide",], }, 
			{ name: "Winter's Grip", req: ["Frost Bolt", "Ice Slide",], }, 
		], 
		[
			{ name: "Improved Ice Armor", req: ["Ice Creation", "Winter's Grip",], }, 
		], 
		[
			{ name: "Cold Burst", req: ["Improved Ice Armor",], }, 
		], 
		[
			{ name: "Ice Monster", req: ["Cold Burst",], }, 
			{ name: "Winter Gauntlets", req: ["Cold Burst",], }, 
		], 
	], 
},
{ name: "Works for a Living", ref: ["CCR 234&ndash;235",], genres: [ {name: "Real World", theme: "Contractor", }, {name: "Science Fiction", theme: "Technician, Engineer", }, ], 
summary: ["You take great satisfaction in a job well done, whether it's coding, building houses, or mining asteroids.", ], 
gmintrusions: ["Repairs sometimes fail. Wiring can be tricky to decipher and still carry an electrical charge. Some people are rude to those who work for a living.", ], 
abilities: [
		[
			{ name: "Fitting In", }, 
			{ name: "Handy", }, 
			{ name: "Muscles of Iron", }, 
		], 
		[
			{ name: "Danger Instinct", req: ["",], }, 
			{ name: "Endurance", req: ["",], }, 
		], 
		[
			{ name: "Eye for Detail", req: ["",], }, 
			{ name: "Improvise", req: ["",], }, 
		], 
		[
			{ name: "Device Insight", req: ["",], }, 
			{ name: "Hard-Won Resilience", req: ["",], }, 
		], 
		[
			{ name: "Polymath", req: ["",], }, 
		], 
		[
			{ name: "Expert Handyman", req: ["",], }, 
			{ name: "On the Crew", req: ["",], }, 
		], 
	], 
},
];
const abilityList = [
	{ name: "Intimidating Presence", ref: ["CCR 146",], effects: ["Because of your stony presence, you gain an asset on all attempts to intimidate.", ], }, 
	{ name: "A Bit of Magic", ref: ["CCR 82",], note: "Magic",  effects: ["Each day you can pick a different magical effect and cast it as a spell. Choose a low-power or medium-power manifest cypher. You can cast that spell as an action, costing 3 Intellect for a low-power cypher or 5 Intellect for a medium-power cypher. This spell does not count toward your cypher limit. Unlike when using a cypher, you do not lose this spell after casting it.", "As part of making a ten-hour recovery, you can change which cypher you've taken as a spell.", "Ten minutes to prepare a cypher as a spell; action to cast a cypher as a spell.", "<em>At tier 6:</em> You can use this ability to choose a low-, mid-, or advanced-power cypher as a spell. You can cast an advanced-power cypher spell as an action, costing 7 Intellect.", ], }, 
	{ name: "A Smile and a Word", ref: ["CCR 47",], effects: ["When you successfully interact with a creature by succeeding on a charm, deception, or intimidation task&mdash;even those having to do with calming animals or communicating with someone or something whose language you do not speak&mdash;you also learn one small useful or at least interesting bit of information. For instance, if you convince the guard to let you pass, you might also learn that their supervisor is due back in ten minutes. Action.", ], }, 
	{ name: "Acrobatic Attack", dupminor: true, ref: ["CCR 183", "CCR 212",], cost: 1, plus: true, pool: "Speed", effects: ["You leap into the attack, twisting or flipping through the air. If you use Effort on the attack roll, you get a free level of Effort on it.", "If you roll a natural 17 or 18, instead of inflicting extra damage you can choose to have a minor effect.", "You can't use this ability if you can't freely use the armor you're wearing.", "Enabler."], }, 
	{ name: "Action Processor", ref: ["CCR 186",], cost: 4, pool: "Intellect", effects: ["Your Data Processor ability can now grant you training in physical skills as well, such as athletics, gymnastics, dodging or blocking, or attacks with a specific weapon. This does not change how many skills Data Processor can simultaneously give you training in. Enabler."], }, 
	{ name: "Adhesive Mobility", ref: ["CCR 138",], effects: ["You can effortlessly adhere to most physical objects and surfaces nimbly enough that you can effectively walk or run up walls and ceilings as if they were level ground, using as much or as little of your body surface as makes sense. For example, you could simply hang from a surface with one hand or lie across a wall for maximum surface contact. In addition, you rarely drop objects, and others can't easily take objects away from you; your tasks related to retaining your grip on an object are eased.", ], }, 
	{ name: "Advanced Command", ref: ["CCR 198",], cost: 4, plus: true, pool: "Intellect", effects: ["You give a command to a creature within short range who can hear and understand you. If you succeed at an Intellect roll against them, they obey that command for one round. If the command would cause direct harm to them or their allies, the attack is hindered.", "<em>Effort:</em> Attempt to give them one command each following round (make an Intellect attack for each additional command); the ability ends when you fail the attack.", "Action."], }, 
	{ name: "Advantage to Disadvantage", ref: ["CCR 180",], cost: 3, pool: "Speed", effects: ["You make a hindered attack featuring several quick moves against an armed foe. If you hit, you inflict damage and disarm them&mdash;choose whether you want to be holding their weapon or it is knocked to the ground 10 feet (3.5 m) away. For the rest of the combat encounter, you gain an asset on intimidation tasks against your foe.", "First action."], }, 
	{ name: "Again and Again", ref: ["CCR 183", "CCR 217",], cost: 6, pool: "Speed", effects: ["You can take an extra action on your turn. Enabler."], }, 
	{ name: "Agile Wit", ref: ["CCR 171", "CCR 183",], effects: ["When attempting a Speed task, you can spend points from your Intellect Pool instead of your Speed Pool, and vice versa. Use the Edge stat for the Pool you're spending points from."], }, 
	{ name: "Alleviate Malady", ref: ["CCR 228",], cost: 3, pool: "Intellect", effects: ["You cancel or cure a disease, poison, or similar malady in a creature you touch if you succeed at an Intellect roll against the malady's level. (Some maladies may require multiple successes to be cured.) Action."], }, 
	{ name: "Alley Rat", ref: ["CCR 217",], cost: 6, pool: "Intellect", effects: ["While in a city, you attempt to find or create a significant shortcut, secret entrance, or emergency escape route where it looked like none existed. To do so, you must succeed at an Intellect task, with the difficulty set by the GM based on the situation. You and the GM should work out the details of your unexpected path, but it should let you move at least a short distance away from where you are now. Action."], }, 
	{ name: "Always Mighty", ref: ["CCR 137", "CCR 206", "CCR 208",], effects: ["Every time you use a recovery, if your Might Pool isn't already full, you get 1 extra point to restore to your Might Pool. You can select this ability up to three times.", ], sidebar: "<p>One way you could choose Always Mighty again is if your focus is Performs Feats of Strength, which includes this ability as an option.</p>", }, 
	{ name: "Always Speedy", ref: ["CCR 216",], effects: ["Every time you use a recovery, if your Speed Pool isn't already full, you get 1 extra point to restore to your Speed Pool. You can select this ability up to three times."], }, 
	{ name: "Always Tinkering", ref: ["CCR 106", "CCR 130",], effects: ["You build a single-use technological device. You can choose its effect from the Low-Power Manifest Cyphers table. Your device counts toward your cypher limit (or the limit of anyone you give the device to). If you are already at your cypher limit, your choice of one of your current cyphers shorts out, had to be salvaged for parts to create the new device, or something similar, and the new device takes its place.", "Ten minutes to build.", "<em>At tier 3:</em> You can choose a low or medium-power manifest cypher as a single-use device.", "<em>At tier 6:</em> You can choose a low, medium-, or advanced-power manifest cypher as a single-use device.", ], sidebar: "<p>Each time you use Always Tinkering, you can choose a different manifest cypher you want to build.</p>", }, 
	{ name: "Always Witty", ref: ["CCR 198",], effects: ["Every time you use a recovery, if your Intellect Pool isn't already full, you get 1 extra point to restore to your Intellect Pool. You can select this ability up to three times."], }, 
	{ name: "Amazing Invulnerability", ref: ["CCR 138",], effects: ["Choose one kind of energy, such as cold, electricity, fire, psychic, radiation, and so on. You reduce the severity of wounds you take from this energy by three steps (major, moderate, and minor to none). You can't become invulnerable to kinetic energy using this ability. You can use this ability to become invulnerable to damaging magical blasts (but not magical effects that aren't based on damage, such as mind control or telekinesis).", ], }, 
	{ name: "Amazing Strength", ref: ["CCR 209",], effects: ["When you use Effort from your Might Pool on a noncombat task, you get a free level of Effort on that task. Enabler."], }, 
	{ name: "Amazing Tools", ref: ["CCR 138",], effects: ["You have a utility belt, supersuit, or other device that provides you with a useful effect when you need it. Pick a low-power manifest cypher accessed through this device. You can activate the device as an action, costing 2 Intellect. The chosen ability does not count toward your cypher limit. Unlike when using a cypher, you do not lose this ability after activating it.", "Whenever you take a ten-hour recovery, you can change which cypher you've incorporated into this device.", "If you lose your device, you can (depending on your skill) craft a replacement or arrange for one to be made for you, requiring 1d6 days of concerted effort.", ], }, 
	{ name: "Analytic Processor", ref: ["CCR 186",], cost: 4, pool: "Intellect", effects: ["Ask the GM a question you want answered. The GM sets a difficulty for the answer&mdash;the more obscure the answer, the more difficult the task. If you succeed at an Intellect task against this difficulty, you get a short answer to the question. If you fail, you take 4 Intellect damage from digital feedback. Action."], }, 
	{ name: "Anecdote", ref: ["CCR 174",], cost: 2, pool: "Intellect", effects: ["You can lift the spirits of a group of creatures and help them bond together by entertaining them with an uplifting or pointed anecdote. Choose one task (other than an attack or defense task) related to your anecdote. Until you use a one-hour or longer recovery, those who pay attention to your story are trained in that task.", "Alternatively, you can spend time interacting with a group of people within short range. As long as they are at least neutral toward you (rather than hostile), they become friendly toward you until you use a one-hour or longer recovery.", "Action to initiate; one minute to complete."], }, 
	{ name: "Animal Scrying", ref: ["CCR 159",], cost: 4, plus: true, pool: "Intellect", effects: ["If you know the general location of an animal that is friendly toward you and within 1 mile (1.6 km) of your location, you can sense through its senses until you use a ten-minute or longer recovery. You must be in animal form or a form similar to that animal to activate this ability.", "<em>Effort:</em> Activate this ability even if you are not in animal form or a form similar to that animal.", "Action to establish."], }, 
	{ name: "Animal Senses and Sensibilities", ref: ["CCR 177",], effects: ["Most of the time, if you're about to walk into an ambush or a trap that is level 4 or lower, the GM should alert you (though depending on the circumstances, you may not have time to warn your companions).", "Even if you are unaware of an incoming attack, the attacker doesn't gain any advantage against you, such as from surprise."], }, 
	{ name: "Animal Shape", ref: ["CCR 158",], cost: 3, plus: true, pool: "Intellect", effects: ["You change into an animal as small as a rat or up to your own size (such as a large dog or small bear) until you use a recovery. Each time you transform, you can take a different animal shape. Your equipment becomes part of the transformation, rendering it unusable unless it has a passive effect, such as armor. In this form your stats remain the same as your normal form, but you can move and attack according to your animal shape (attacks from most human-sized animals inflict 4 damage; attacks from smaller animals inflict 2 damage) without penalty. Tasks requiring hands (such as using door handles or pushing buttons) are hindered when in animal form. You cannot speak but can still use abilities that don't rely on human speech. You gain a minor ability associated with the creature you become (see the <a href='#ability-animal-shape-supplement'>Animal Form Minor Abilities</a> box). For example, if you transform into a bat, you can fly up to a long distance each round. If you transform into an octopus, you can breathe underwater.", "<em>Effort:</em> Gain an asset to one skill associated with the creature you become (see the <a href='#ability-animal-shape-supplement'>Animal Form Minor Abilities</a> box).", "<em>Effort:</em> Become a talking animal; this looks exactly like a normal animal, but you can still talk and use any abilities that rely on human speech.", "<em>Effort:</em> Take a hybrid shape; this is like your normal form but with animalistic features, even if that animal is something much smaller than you (such as a bat or rat). In hybrid form you can speak, use all of your abilities, make attacks like an animal, and perform tasks using hands without being hindered. Anyone who sees you clearly in hybrid form would never mistake you for a mere animal.", "Action to change or revert."], sidebar: "<p>\"Animals\" and \"beasts\" are intentionally not rigorously defined, because it depends on the setting. The terms are, in fact, interchangeable synonyms. In an Earth-like setting, badgers, wolves, and eagles are animals and beasts. In a very different fantasy world, in a very different time period, or on a science fiction planet, a warg, a triceratops, and a rigellian stinkpig are beasts and animals, while a basilisk, a robot dog, and a Saturnian silicon spider probably are not. Basically, if it's more or less an animal, it is one. If it's supernatural or has some kind of special powers, it is not.</p>", }, 
	{ name: "Apportation", ref: ["CCR 201",], cost: 4, pool: "Intellect", effects: ["You pull a physical object to you across almost any distance. You can choose any piece of normal equipment on the equipment list for your genre, or (once between each ten-hour recovery) you can let the GM randomly determine what object appears. You can't use this ability to take an item held by another creature. The object appears next to you. Action."], sidebar: "<p><strong>d20: Random Object</strong></p><ul class='list-unstyled og-hang'><li><strong>1&ndash;10:</strong> Standard equipment</li><li><strong>11&ndash;12:</strong> Manifest cypher</li><li><strong>13&ndash;20:</strong> Worthless junk</li></ul>", }, 
	{ name: "Arc Spray", ref: ["CCR 116", "CCR 153", "CCR 203",], cost: 3, pool: "Speed", effects: ["If a weapon has the ability to fire rapid shots without reloading (usually called a rapid-fire weapon, such as a crank crossbow or submachine gun), you can fire your weapon at three targets (all next to one another) at once. Make a separate hindered attack roll against each target. Action.", ], }, 
	{ name: "Arcane Flight", ref: ["CCR 156",], cost: 3, plus: true, pool: "Intellect", effects: ["You can float and fly through the air at your normal land speed until you use a ten-minute or longer recovery. In terms of overland movement, a flying creature moves about 20 miles (32 km) per hour and is not affected by terrain.", "<em>Effort:</em> Affect one additional touched creature of your size or smaller; you direct their movement and they must remain within sight of you or they fall.", "Action to initiate."], sidebar: "<p>Arcane Flight is better than Hover, so if you have both, you can exchange Hover for another tier 2 or lower ability from the Casts Spells focus.</p>", }, 
	{ name: "Arcane Teleportation", ref: ["CCR 156",], cost: 4, plus: true, pool: "Intellect", effects: ["You instantly teleport to any location within a short distance that you can see.", "<em>Effort:</em> Increase your range by a short distance. Teleport to a location you can't see. Bring one creature (of your size or smaller) with you.", "At tier 5: If you spend 5 Intellect, your base distance and distance increment for Effort increase to long range, and each level of Effort applied lets you bring two people with you.", "<em>At tier 6:</em> If you spend 6 Intellect, your base distance increases to anywhere on the same planet, and each level of Effort used lets you bring three people with you.", "Action."], }, 
	{ name: "Armored Beast", ref: ["CCR 167",], effects: ["Your beast's Armor increases by 2."], }, 
	{ name: "Armored Body", ref: ["CCR 138",], note: "rank 2+", effects: ["You are very resistant to damage due to your body being composed of rock or metal, your incredible toughness, or a similar reason.", "You ignore minor wounds.", "You can take an additional moderate wound and major wound.", ], }, 
	{ name: "Armoring Debris", ref: ["CCR 200",], cost: 5, pool: "Intellect", effects: ["You use nearby small objects from the environment (rocks, broken items, clumps of dirt, and so on) to intercept incoming attacks until you use a ten-minute or longer recovery. This allows you to attempt to better block wounds (block tasks are eased by one additional step; dodge tasks are unaffected). Action to initiate."], }, 
	{ name: "Assassin Strike", ref: ["CCR 84",], cost: 5, pool: "Speed", effects: ["If you successfully attack a creature that was previously unaware of your presence, you deal +6 damage. (If you also have From the Shadows, add the extra damage from both abilities.) Enabler.", ], }, 
	{ name: "Astonishing Teleport", ref: ["CCR 138",], effects: ["You can instantly teleport anywhere you can see or that you know exists.", "You can instantly teleport to a location within immediate range and then take a First action, such as attacking with a light weapon or opening a door (the teleportation happens before your First action, not the other way around).", "You can take an action, then teleport within short range as an extra action on your turn.", "As a Last action, you can teleport to a location within long range.", "First action, action, or Last action.", ], }, 
	{ name: "Attack Flourish", ref: ["CCR 78", "CCR 182",], effects: ["When you attack, you add stylish moves, entertaining quips, or a certain something that entertains or impresses others. One creature you choose within short range who can see you gains an asset to their next task if taken within a round or two. Enabler.", ], }, 
	{ name: "Attention to Detail", ref: ["CCR 171",], effects: ["Your task this round (other than an attack) has an asset if you attempt it as a Last action instead of an action or First action. Enabler."], }, 
	{ name: "Attenuate Threat", ref: ["CCR 223",], effects: ["If you make your attack this round as a Last action instead of as an action or a First action, you can ignore one wound you take before the beginning of your next turn. Enabler."], }, 
	{ name: "Audacious Blast", ref: ["CCR 105",], cost: 1, pool: "Speed", effects: ["You attack with a blaster (or other genre-appropriate ranged weapon) in a way that has a greater risk of making an error but gains an additional benefit. Your GM intrusion range for this attack increases by 2 (from 1 on a d20 to 1&ndash;3 on a d20), but if you hit you can choose one of the following additional effects:", ["<em>Disarming Shot:</em> The attack inflicts 1 less damage, but your foe drops something they are holding in one hand (such as a weapon or shield). To retrieve the object, the foe must use an action.", "<em>Piercing Accuracy:</em> The foe takes +2 damage.", ], "Action.", ], sidebar: "<p>Audacious Blast GM intrusions: Your blaster runs out of power. Your blaster shot ricochets, hitting you or an ally for a moderate wound. The attack draws the attention of other hostiles.</p>"}, 
	{ name: "Automaton Armor Upgrade", ref: ["CCR 150",], cost: 3, pool: "Intellect", effects: ["You've built a new capability into one of your automatons&mdash;it can use its action to transform into an armored suit that you wear until you use a one-hour or longer recovery. If you are within an immediate distance when it transforms, it automatically forms itself around you. The transformed automaton acts as light armor; because it anticipates and reacts to your movements, you can freely use this armor. Enabler."], }, 
	{ name: "Automaton Assistant", ref: ["CCR 150",], effects: ["You have built a level 2 automaton follower of your size or smaller that accompanies you and follows your instructions. You and the GM must work out the details of your automaton's appearance and personality.", "If the automaton is damaged, a few minutes of your attention mends it&mdash;the automaton regains 2 health.", "If the automaton is destroyed, it can be restored using your resources if you spend a few days tinkering."], sidebar: "<p>Depending on the genre, your automatons might be metallic robots, animated objects, organic androids, magical golems, steampunk constructs, awakened statues, or something else entirely.</p>", }, 
	{ name: "Automaton Cypher Upgrade", ref: ["CCR 150",], cost: 3, pool: "Intellect", effects: ["You've built a new capability into one of your automatons&mdash;for one day, the automaton increases your cypher limit by one. Enabler."], }, 
	{ name: "Automaton Evolution", ref: ["CCR 151",], effects: ["One of your automaton followers is upgraded, increasing its level by 1. You can select this ability multiple times. Each time, the level of one of your automatons increases by 1."], }, 
	{ name: "Automaton Fleet", ref: ["CCR 151",], effects: ["You've built four level 2 automaton followers, each no larger than yourself. You and the GM must work out the details of each automaton's appearance and personality.", "If one of these automatons is destroyed, it can be restored using your resources after a few days of labor."], }, 
	{ name: "Automaton Flight Upgrade", ref: ["CCR 151",], effects: ["You've built a new capability into one of your automatons&mdash;as its normal movement, it can fly up to a long distance. If you wish, it can carry you but can only move at a rate of up to 20 feet (6 m) per round in any direction while doing so."], }, 
	{ name: "Automaton Force Field Upgrade", ref: ["CCR 151",], effects: ["You've built a new capability into one of your automatons&mdash;it can erect a translucent level 5 force field around itself and anyone within immediate range of it until you use a ten-minute or longer recovery. Any creature protected by the field reduces incoming wounds by one severity (NPCs take 3 less damage). Enabler."], }, 
	{ name: "Automaton Heavy Armor Upgrade", ref: ["CCR 151",], cost: 6, pool: "Intellect", effects: ["You've built a new capability into one of your automatons&mdash;the robot can use its action to transform into an armored suit that you wear until you use a one-hour or longer recovery. If you are within an immediate distance when it transforms, it automatically forms itself around you. The transformed automaton acts as heavy armor; because it anticipates and reacts to your movements, you can freely use this armor. Enabler."], }, 
	{ name: "Automaton Turret Upgrade", ref: ["CCR 151",], effects: ["You've built a new capability into one of your automatons&mdash;it can reconfigure itself and become an immobile energy weapon on a gimbal mount. The turret is a heavy weapon with very long range that inflicts 7 damage. If you have the automaton act on its own, it makes one hindered attack per round. If you or an ally use the turret as a weapon, attacks with it are eased. Action to change the automaton's configuration; Last action to attack with turret."], sidebar: "<p>In a fantasy setting, the automaton turret probably shoots fire or lightning. In a science fiction setting, it probably shoots lasers.</p>", }, 
	{ name: "Awareness", ref: ["CCR 186", "CCR 194", "CCR 196"], cost: 3, pool: "Intellect", effects: ["You become hyperaware of your surroundings until you use a ten-minute or longer recovery. You are aware of all living things within long range (including their general position). By using an action to concentrate, you can choose one of them and attempt to learn their general health and power level. Action."], sidebar: "<p>If you have the Fuses Mind and Machine focus, you are also aware of thinking machines in long range.</p>", }, 
	{ name: "Awesome Force Field", ref: ["CCR 138",], effects: ["An invisible force field surrounds you, lasting until you take a ten-minute or longer recovery. This allows you to try blocking attacks with an eased Intellect defense roll instead of a Might defense roll; if you succeed, you reduce the severity of the wound by one step. If the blocked attack would still inflict a wound, you can spend 5 Intellect to completely negate it, shattering your force field until your next turn.", "<em>Effort:</em> Create a level 6 force field up to a short distance away that is identical to a force field cypher, lasting until you take a ten-minute or longer recovery. You can have more than one such force field active at a time, but each one beyond the first requires you to use an additional level of Effort to activate it (two levels for a second force field, and so on). Your personal force field doesn't count toward this total.", "Action.", ], }, 
	{ name: "Axe Hook", ref: ["CCR 65",], cost: 1, pool: "Might", effects: ["This is an axe attack that relies on your axe's \"beard\" (the portion of the blade directly below the axe's cutting edge) to hook a target's weapon or shield. A successful attack deals 2 less damage than normal but causes them to drop one or the other. To retrieve their weapon or shield, the target must use an action.", "Alternatively, you can hook a limb to pull your target off balance. This attack deals 1 less damage than normal but hinders your target's tasks until your next turn.", "Action.", ], }, 
	{ name: "Bad Medicine", ref: ["CCR 94",], cost: 2, plus: true, pool: "Intellect or Speed", effects: ["With access to a medical field kit (or similar equipment), you deliberately misuse a medication normally meant to heal, such as a skin spray, injector, or similar device. Make an attack against a creature in immediate range; the medical device is a light weapon (the attack is eased). If you succeed, they can't take any actions on their next turn.", "<em>Effort:</em> Instead make the creature unconscious until you use a recovery (requires two levels of Effort).", "Action to prepare medicine; action to attack.", ], sidebar: "<p>Bad Medicine doesn't allow you to exceed your normal Effort limit.</p>", }, 
	{ name: "Band of Followers", ref: ["CCR 199",], effects: ["You gain four level 3 followers, each with three level 4 modifications of your choice.", "Instead of gaining four new level 3 followers, you can advance four existing level 2 followers to level 3 and gain a new level 2 follower in place of each of them."], }, 
	{ name: "Basic Follower", ref: ["CCR 198",], effects: ["You gain a level 2 follower who has two level 3 modifications (one of which is charm).", "You can take this ability multiple times, each time gaining another follower."], }, 
	{ name: "Basic Necromancy-v1", dupmajor: true, ref: ["CCR 56",], cost: 3, pool: "Intellect", effects: ["You animate the body of a dead creature of approximately your size or smaller within immediate range, creating a level 1 follower that is an undead creature. It has none of the intelligence, memories, or special abilities that it had in life. The creature follows your verbal commands until you use a one-hour or longer recovery, after which it becomes an inert corpse. Unless the creature is killed by damage, you can reanimate it again when its time expires, but any damage it had when it became inert applies to its newly reanimated state.", "If you use Basic Necromancy to animate a second body, any body you've already animated with this ability becomes an inert corpse again.", "Action to animate.", ], }, 
	{ name: "Basic Necromancy-v2", dupmajor: true, ref: ["CCR 164",], cost: 3, pool: "Intellect", effects: ["You animate the body of a dead creature of approximately your size or smaller within immediate range, creating a level 1 follower that is an undead creature. It has none of the intelligence, memories, or special abilities that it had in life. The creature follows your verbal commands until you use a one-hour or longer recovery, at which point it becomes an inert corpse. You can reanimate it again when it becomes inert or if it is \" killed\"  by damage (though you may have to spend a few minutes with a needle and thread to reattach detached or loose parts).", "Last action to animate.", ], }, 
	{ name: "Battle Competence", ref: ["CCR 203", "CCR 222",], effects: ["You can freely use all weapons and all armor.", "As an action, you learn the level of up to three creatures that you can see within short range. This ability can be foiled by disguises or shapechanging.", "Enabler for weapon use; action for evaluating creatures."], sidebar: "<p>The weapon use aspect of Battle Competence is a \"catch up\"  ability for characters whose type doesn't give them the ability to use most weapons and armor, and they don't want to be limited to just their chosen weapon. Most characters with this focus won't need the catch-up aspect of Battle Competence at all.</p>", }, 
	{ name: "Beast Betterment", ref: ["CCR 167",], effects: ["When you take a recovery within immediate range of your beast companion, you gain an additional 3 Pool points. Enabler."], }, 
	{ name: "Beast Call", ref: ["CCR 167",], cost: 5, pool: "Intellect", effects: ["You temporarily summon one level 4 beast or a horde of small beasts (who together function as a level 4 creature) to help you. The beast or beasts do your bidding for as long as you focus your attention, but you must use your action each turn to direct them. The beasts are native to the area and arrive under their own power, so if you're in an unreachable place, this ability won't work. Action."], }, 
	{ name: "Beast Communication", ref: ["CCR 159", "CCR 167",], cost: 2, pool: "Intellect", effects: ["You can convey a basic concept to a creature that normally can't speak or understand speech. The creature can also give you a very basic answer to a simple question. Action."], }, 
	{ name: "Beast Companion", dupminor: true, ref: ["CCR 49", "CCR 166", "CCR 176",], effects: ["You gain a follower that is a level 2 beast of your size or smaller that accompanies you and follows your instructions. You and the GM must work out the appearance and personality of your beast. Its movement is based on its creature type (avian, swimmer, and so on).", "If your beast companion dies, you can use your resources hunting in the wild for a few days to locate and befriend a new one.", ], sidebar: "<p>When working out the details of your follower, you might decide you'd like an animated plant companion rather than an animal.</p>", }, 
	{ name: "Beast Eyes", ref: ["CCR 167",], cost: 3, pool: "Intellect", effects: ["You link your mind to your beast companion (or a beast you've calmed with Soothe the Savage, if they remain well disposed toward you), perceiving through their senses if they are within 1 mile (1.6 km) of you. This ability lasts until you use a ten-minute or longer recovery. Action to initiate."], }, 
	{ name: "Beast Form", ref: ["CCR 190",], cost: 0, plus: true, pool: "Might", effects: ["On five consecutive nights each month, you uncontrollably change into a monstrous beast until the first hint of dawn or the moon sets (but see below). Work with your GM to determine the details of this form. In this new form, you add +4 to your Might Pool, +1 to your Might Edge, +2 to your Speed Pool, and +1 to your Speed Edge; you ignore the first moderate wound you take; and you can freely use your unarmed attacks as light weapons (eased attack, 2 damage) or medium weapons (unmodified attack, 4 damage), whichever seems appropriate for that attack.", "While in beast form, you can't spend Intellect points for any reason other than to try to change to your normal form before the duration is over (a difficulty 4 task). In addition, you attack any and every living creature within short range. After you revert to your normal form, all your tasks are hindered until you use a one-hour or longer recovery. If you did not kill and eat at least one substantial creature while in beast form, the hindrance is two steps instead of one and lasts until you use a ten-hour recovery.", "<em>Effort:</em> You can intentionally change into your beast form if you succeed at a difficulty 4 Intellect task. If you fail, you can keep trying each round (at no additional Might cost to activate this ability) until you succeed or decide to give up.", "Enabler to involuntarily change into beast form; action to voluntarily change into beast form; action to change back to your normal form.", ], sidebar: "<p>A PC in beast form usually loses or at least leaves behind their regular-sized clothing and armor.</p>", }, 
	{ name: "Beast Healing", ref: ["CCR 192",], effects: ["When you change into your beast form, you are immediately healed of one wound of any severity. This ability renews after you take a ten-hour recovery. Enabler."], }, 
	{ name: "Beast Senses", ref: ["CCR 191",], effects: ["You have heightened senses; you have an asset to perception and initiative tasks. If you are in beast form, you have two assets, and even if you are unaware of an incoming attack, the attacker doesn't gain any advantage against you, such as from surprise."], }, 
	{ name: "Better Sneak Attack", ref: ["CCR 195",], effects: ["When using Sneak Attack, you gain an asset on the attack. On your next turn, your target takes an additional 5 damage (ignores armor). The target can prevent this additional damage by taking a recovery, using any ability that heals it, or using its action to attend to the injury. Enabler."], }, 
	{ name: "Bigger Animal Shape", ref: ["CCR 159",], effects: ["When you use Animal Shape, you can grow to about twice your normal size. Being so large, your animal shape gains the following additional benefits: you can ignore the first moderate wound you take, your unarmed attacks inflict an additional 4 damage, and you gain an asset on your unarmed attack rolls. However, your dodge tasks are hindered.", "While using Bigger Animal Shape, you also gain an asset to tasks that are easier for a larger creature to perform, like climbing, intimidating, wading rivers, and so on."], }, 
	{ name: "Bigger Beast Form", ref: ["CCR 191",], effects: ["When you use Beast Form, you grow larger, during which time you achieve a height of 12 feet (4 m). Being so large, your beast form gains the following additional benefits: you can ignore the first moderate wound you take, your unarmed attack rolls have an asset, you can freely use your unarmed attacks as heavy weapons (6 damage), and you gain an asset to tasks that are easier for a larger creature to perform (like climbing or wading). While in your bigger beast form, your dodge tasks are hindered. Enabler."], }, 
	{ name: "Bigger", ref: ["CCR 188",], effects: ["When you use Enlarge, if you spend an additional 1 Might, you grow to a height of 12 feet (4 m). While bigger, you add +1 to your Might Edge, you can ignore the first two moderate wounds you take, your unarmed attacks inflict 6 damage, and you gain an asset to tasks that are easier for a larger creature to perform (like climbing or wading). While bigger, your dodge tasks are hindered by two steps. Enabler."], sidebar: "<p>When you spend extra Might to use Bigger, Huge, Gargantuan, or Colossal, the benefits from those abilities replace the benefits you get from Enlarge.</p>", }, 
	{ name: "Black Thumb", ref: ["CCR 114",], effects: ["When repairing, modifying, or building machines or devices of any kind, your task takes you half as long as normal.", ], }, 
	{ name: "Blast Evil", ref: ["CCR 210",], cost: 4, pool: "Intellect", effects: ["You blast an adjacent immediate area with cleansing radiance, inflicting 3 damage on up to three targets in the area&mdash;make a separate attack roll against each. If the targets are undead, demons, or creatures of similar ilk, they take 6 damage instead. If any targets are possessed by a spirit, demon, or similar entity, they gain another opportunity to resist the effect and eject their possessor. Action."], }, 
	{ name: "Blast", ref: ["CCR 154",], cost: 1, plus: true, pool: "Intellect", effects: ["You emit a short-range blast of energy inflicting 4 damage on a target with a successful attack roll. Work with the GM to determine the type of energy comprising your blast.", "You can tune the effect to make it hot enough to slice through material of up to level 5 that's no more than 1 foot (30 cm) thick if given a few rounds to concentrate on doing so.", "If you have another damaging attack ability (from this focus or your type), you can use Blast to augment that ability, increasing its damage by 1.", "<em>Effort:</em> Gain fine control over the effect until you use a ten-minute or longer recovery, varying the intensity as you wish within immediate range; for instance, you could use it to warm the area, cook food without burning it, provide bright light in the area, and so on. Increase the maximum level of material that you can cut through by 1.", "Action to attack; Last action to initiate fine control; enabler to augment another attack ability.", ], sidebar: "<p>You can change the name of the Blast ability so it relates to the kind of energy you create, such as Blast of Fire, or something more evocative suggesting the name of the spellcaster who created it, such as Malhavoc's Destructive Blast.</p>", }, 
	{ name: "Blast", ref: ["CCR 52", "CCR 154",], cost: 1, plus: true, pool: "Intellect", effects: ["You emit a short-range blast of energy inflicting 4 damage on a target with a successful attack roll. Work with the GM to determine the type of energy comprising your blast.", "You can tune the effect to make it hot enough to slice through material of up to level 5 that's no more than 1 foot (30 cm) thick if given a few rounds to concentrate on doing so.", "If you have another damaging attack ability (from your focus or your type), you can use Blast to augment that ability, increasing its damage by 1.", "<em>Effort:</em> Gain fine control over the effect until you use a ten-minute or longer recovery, varying the intensity as you wish within immediate range; for instance, you could use it to warm the area, cook food without burning it, provide bright light in the area, and so on. Increase the maximum level of material that you can cut through by 1.", "Action to attack; Last action to initiate fine control; enabler to augment another attack ability.", ], sidebar: "<p>The type of energy you release could be fire, in which case you might call this ability Blast of Fire. Alternatively, your focus might suggest the energy type. For instance, this ability could produce a ray of electricity&mdash;especially if your focus is Rides the Lightning&mdash;and be called Blast of Lightning.</p>", }, 
	{ name: "Blend In", ref: ["CCR 197",], cost: 4, pool: "Intellect", effects: ["By changing your posture, your facial expression, and perhaps your clothing, you make yourself appear unimportant but not out of place for wherever you are. For example, you could look like a janitor in an office building, an orderly in a hospital, or a clerk in a police station. People can still see you, but those of level 3 or less attach no importance to your presence. If a higher-level creature notices you, you can attempt an Intellect task against their level to retain your unimportant-seeming status. While blending in, you gain two assets to dodge and stealth tasks. This effect ends if you do something to call attention to your presence or position&mdash;attacking, using an ability, moving a large object, and so on&mdash;or if you use a ten-minute or longer recovery. This ability works even if the NPC observes you through a security camera or similar device. Attempting to fool an animal (such as a guard dog or police dog) is hindered. Action to initiate."], }, 
	{ name: "Blink of an Eye", ref: ["CCR 205",], cost: 4, pool: "Speed", effects: ["You move up to 1,000 feet (300 m). (This movement doesn't hinder your tasks.) Last action."], }, 
	{ name: "Blood Fever", ref: ["CCR 206",], effects: ["While at least one of your Pools has no points, or while you have at least two moderate wounds or one major wound, you gain an asset to attacks or defense rolls (your choice), as well as to intimidation rolls. Enabler."], }, 
	{ name: "Blood Sorcery", ref: ["CCR 164",], effects: ["You draw upon your own blood, spirit, or life energy to power your abilities. You take a moderate wound and add +1 Edge to the Pool of your choice while you retain that wound. Enabler.", "Only one +1 Edge can be gained at a time using Blood Sorcery."], }, 
	{ name: "Body as a Tool", ref: ["CCR 180",], effects: ["n addition to making your body a weapon, you can use it as a tool. You gain an asset to athletics and gymnastics tasks."], }, 
	{ name: "Bolt Rider", ref: ["CCR 214",], cost: 4, pool: "Intellect", effects: ["You can move a long distance from one location to another almost instantaneously, carried by a bolt of lightning. You must be able to see the new location, and there must be no intervening barriers. Action."], }, 
	{ name: "Bolts of Power", dupminor: true, ref: ["CCR 185", "CCR 215"], cost: 5, pool: "Intellect", effects: ["You simultaneously unleash four lightning bolts, making four separate attacks against targets within short range. Each bolt inflicts 4 damage, or 1 damage on a failed attack roll. Action."], }, 
	{ name: "Bone Lore", ref: ["CCR 164",], cost: 1, pool: "Intellect", effects: ["With a touch, you ascertain the cause of death of a corpse, how long since its death, and its species when it was alive. Last action."], }, 
	{ name: "Born to Pilot", ref: ["CCR 96",], cost: 2, plus: true, pool: "Intellect", effects: ["When you roll to pilot a spacecraft and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.) Spacecraft piloting tasks include specific maneuvers like safely docking the craft, turning or accelerating the ship gradually enough to avoid dangerously high gravity for sustained periods, noticing something unusual come up on the sensors, and so on.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "This ability renews when you take a recovery.", "Action.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12.", ], }, 
	{ name: "Bouncing Shield", ref: ["CCR 223",], cost: 3, plus: true, pool: "Speed", effects: ["You throw your shield as a light weapon at a foe in short range. Whether the shield hits or misses, it rebounds to attack two additional targets (the third target can be the same as the first target). Make separate attacks against each target. At the end of these attacks, the shield bounces back to your grasp if you succeed on a difficulty 2 Speed task; otherwise it lands within immediate range of you.", "<em>Effort:</em> A successful hit with the shield hinders the target for one round.", "Action."], }, 
	{ name: "Brainwashing", ref: ["CCR 197",], cost: 6, plus: true, pool: "Intellect", effects: ["You use trickery, well-spoken lies, and mind-affecting chemicals (or other means, like magic or high technology, as appropriate to your genre) to control the actions of another creature you touch. The creature must be level 3 or lower and you must succeed at an Intellect attack against them. Control lasts until you use a ten-minute or longer recovery, and if you can see them you decide on a case-by-case basis if they follow your orders or if they can act freely.", "When the duration ends, the creature doesn't remember being controlled or anything it did while under your command.", "<em>Effort:</em> Increase the maximum level of the creature you can affect by 1.", "Action to initiate."], }, 
	{ name: "Brew Potion", ref: ["CCR 73",], effects: ["You brew a potion. You can choose its effect from the Low-Power Manifest Cyphers table. Your brewed potion cypher counts toward your cypher limit (or to the limit of anyone you give the potion to), plus the allowance granted by Potion Cyphers. If you are already at your cypher limit, your choice of one of your current cyphers loses its magic so you can have the new potion cypher.", "Ten minutes to brew.", "<em>At tier 3:</em> You can choose a low or medium-power manifest cypher as your brewed potion.", "<em>At tier 6:</em> You can choose a low, medium-, or advanced-power manifest cypher as your brewed potion.", ], }, 
	{ name: "Brute Squad", ref: ["CCR 192", "CCR 209",], cost: 8, pool: "Might", effects: ["You can perform two Might tasks on this turn, one with your normal action and one with an extra action. For example, you could make a melee attack and smash open a door, throw a heavy couch and jump over a wall, or make two melee attacks. Enabler."], }, 
	{ name: "Brute Strike", ref: ["CCR 209",], cost: 4, pool: "Might", effects: ["When you hit with a Might attack, you deal an additional 6 damage. You can't use this ability in two consecutive rounds. Enabler."], }, 
	{ name: "Built to Hack", ref: ["CCR 100",], cost: 2, plus: true, pool: "Intellect", effects: ["When you roll to hack an unintelligent computer or machine and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.) Hacking tasks&mdash;which you can initiate using your ability to wirelessly network or by directly connecting to the target machine&mdash;include breaking into secure databases, taking temporary control of remote turrets, unlocking electronically secured entrances, and so on.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Enabler.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12.", ], }, 
	{ name: "Burgle", ref: ["CCR 76",], cost: 2, pool: "Speed", effects: ["When you succeed on a stealth task, you can also undertake one of the following tasks as an extra action on your turn, even if the task is usually a Last action: attempt to pick a lock, grab a loose object up to a fifth of your size and conceal it on your person, move up to a long distance, or attack a target in immediate range with a light weapon. Enabler.", ], }, 
	{ name: "Call the Storm", ref: ["CCR 221",], cost: 7, pool: "Intellect", effects: ["You create dark, rumbling storm clouds in a very long area. As an action, you can make an Intellect attack to strike a foe with lightning, inflicting 4 damage (you can use Effort on the attack or damage normally). This ability lasts until you use a ten-minute or longer recovery.", "Three actions to initiate; action to call a lightning strike."], }, 
	{ name: "Call Upon the Beast", ref: ["CCR 190",], cost: 1, pool: "Intellect", effects: ["While not in beast form, you can call upon your beastly nature for a moment and give a menacing growl or have your eyes become more animal-like. If you do this, you gain a free level of Effort on an intimidation task. Enabler."], }, 
	{ name: "Calm", dupminor: true, ref: ["CCR 174", "CCR 199",], cost: 3, pool: "Intellect", effects: ["If you succeed on an Intellect attack against a living foe who can see and hear you, you prevent them from attacking anyone or anything for one round by way of your jokes, song, or other performance. Action."], }, 
	{ name: "Captivate or Inspire", ref: ["CCR 175", "CCR 199",], effects: ["You can use this ability in one of two ways.", ["<em>Captivate:</em> Your words keep the attention of all NPCs that hear them for as long as you speak.", "<em>Inspire:</em> Your words inspire all NPCs that hear them, allowing them to perform tasks as if one level higher until you use a one-hour or longer recovery.", ], "In either case, you choose which NPCs are affected. If anyone in the crowd is attacked while you're trying to speak to them, you lose the crowd's attention.", "Action to initiate."], }, 
	{ name: "Careful Shot", dupminor: true, ref: ["CCR 152", "CCR 202",], effects: ["You can use Speed Effort or Intellect Effort to increase your ranged weapon damage.", "In addition, if you use an action to line up your shot, the attack on your next turn inflicts 2 additional damage per level of Effort applied to increase damage (5 damage total per level of Effort). Enabler."], }, 
	{ name: "Cast Illusion", ref: ["CCR 168",], effects: ["Your immediate-range illusions (such as Minor Illusion, Major Illusion, and Grandiose Illusion) increase to short range.", "Disguises created by your Illusory Disguise last about a minute after the disguised creatures move out of your sight."], }, 
	{ name: "Charm Machine", dupminor: true, ref: ["CCR 150", "CCR 226"], cost: 2, pool: "Intellect", effects: ["You convince an unintelligent machine or automaton within immediate range to \"like\"  you with a successful Intellect attack roll. A machine that likes you is 50 percent less likely to function if said function would cause you harm. For example, if a foe attempts to detonate a bomb near you controlled by a detonator that likes you, there is a 50 percent chance that it won't explode. The target likes you until you use a ten-minute or longer recovery. Action to initiate."], }, 
	{ name: "Closed Loop Body", ref: ["CCR 185",], effects: ["You don't need to eat or breathe, and you suffer no ill effects from vacuum or extreme temperatures (though fire, cold, and other attacks are suffered normally)."], }, 
	{ name: "Coaxing Power", ref: ["CCR 226",], cost: 2, pool: "Intellect", effects: ["You boost the power or function of a machine so that it operates at one level higher than normal, lasting until you use a one-hour or longer recovery. Action to initiate."], }, 
	{ name: "Cold Burst", ref: ["CCR 233",], cost: 5, plus: true, pool: "Intellect", effects: ["You emit a short-range burst of cold in all directions from yourself. Make an Intellect attack against any number of creatures in range; success means they take 5 damage from cold. Each level of Effort you use for extra damage increases the damage by 2 points, or 1 point on a failed attack.", "<em>Effort:</em> Attempt to blind all targets you successfully hit (a successful second attack roll against a target means they are blinded, hindering all vision-based tasks by two steps, until you use a ten-minute or longer recovery).", "Action."], }, 
	{ name: "Colossal", ref: ["CCR 189",], effects: ["When you use Enlarge, if you spend an additional 7 Might, you grow to a height of 60 feet (18 m). While colossal, you add +2 to your Might Edge, you can ignore the first three moderate wounds and first two major wounds you take, your unarmed attacks inflict 9 damage, and you gain two assets to tasks that are easier for a larger creature to perform (like climbing or wading). You can make an unarmed attack against all creatures in an immediate area (make separate attack rolls for each). While colossal, you can't effectively dodge attacks from creatures one-quarter your size or smaller (attacks from such creatures automatically hit you). If you fall prone while colossal, you take a moderate wound and require a Last action to get up. Enabler."], }, 
	{ name: "Combat Enhancement", ref: ["CCR 97",], cost: 2, plus: true, pool: "Speed or Intellect", effects: ["Your military combat enhancement&mdash;likely some kind of nerve implant, subdermal hardware, or genetic modification&mdash;lowers your reaction time in response to unexpected threats so that you're rarely surprised. Roll initiative as normal, but if your roll is less than a 15, treat the roll as a 15. (This means you don't get a GM intrusion if you roll a 1.)", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Enabler.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 18.", ], }, 
	{ name: "Combat Prowess", ref: ["CCR 48", "CCR 58", "CCR 70", "CCR 79", "CCR 111", "CCR 218", ], effects: ["You add +1 damage to one type of weapon attack of your choice: melee weapon attacks or ranged weapon attacks.", ], }, 
	{ name: "Command Metal", ref: ["CCR 173",], cost: 5, pool: "Intellect", effects: ["You reshape a metallic object you can see in short range as you desire. The item's mass can be no greater than your own. You can affect multiple items at once as long as their combined mass does not exceed yours. You can fuse multiple items together. You can use this power to destroy a metal object (as the Rend Metal ability), or you can craft it into another desired shape (crudely, unless you succeed on a sculpting or crafting task). You can then move the new object anywhere within range. For example, you could take a few metal shields or panels, fuse them together, and use the resulting shape to block a doorway.", "You can use this ability to attack one target within short range, causing a foe's armor to constrict, rendering a metal item into shards that you fling across the battlefield, and so on. Regardless of the form of the attack, it is an Intellect attack that deals 7 damage.", "Last action; action to attack."], }, 
	{ name: "Communication", ref: ["CCR 220",], cost: 2, pool: "Intellect", effects: ["You can convey a basic concept to a creature that normally can't speak or understand speech. The creature can also give you a very basic answer to a simple question. Action."], }, 
	{ name: "Compile Robotic Offense", ref: ["CCR 227",], effects: ["Your attack against a robot or intelligent machine this round has an asset if you make it as a Last action instead of as an action or a First action. Enabler."], }, 
	{ name: "Concealed Carry", ref: ["CCR 152",], effects: ["You can easily hide a one-handed firearm on your person, drawing or holstering it as an extra action (a First action) on your turn. Tasks to hide this weapon (whether from someone looking at you or actually searching you) are eased by two steps.", "You gain an asset on any task to spin, twirl, quick draw, or do another trick task involving your firearm and its holster.", "You can perform skillful manipulations with your firearm, including gunspinning (twirling it around one finger), shooting an icon from a playing card at long range, shooting an object held in someone's hand at long range, shooting a coin tossed skyward at long range, and so on, after which you can reholster your firearm in the blink of an eye. These acts can't hurt or affect a creature (or their equipment); however, if you do this to impress or intimidate a foe, that task is eased."], }, 
	{ name: "Concussive Force", ref: ["CCR 84",], cost: 7, pool: "Intellect", note: "Magic",  effects: ["You cause a pulse of force to explode out from a point you choose within long range. The pulse extends up to short range in all directions, dealing 5 damage to everything in the area (make separate attack rolls against each). Even if you fail the attack roll against a creature in the area, it still takes 1 damage. Action.", ], }, 
	{ name: "Confusion Ray", ref: ["CCR 155",], cost: 2, pool: "Intellect", effects: ["You project a grey beam of disruptive mental energy at a creature within short range. Make an Intellect attack against your foe; success means you deal 1 damage (ignores armor) and their tasks are hindered until your next turn. Action."], }, 
	{ name: "Conjure Supernatural Creature", ref: ["CCR 157",], cost: 7, plus: true, pool: "Intellect", effects: ["A supernatural creature from another dimension such as an angel, demon, or elemental manifests in a physical form within immediate range. The creature acts according to its nature, usually by attacking a nearby foe that is opposed to its own ethos (an angel would attack a demon or necromancer, a demon would attack an innocent or a holy priest, and an elemental would attack a creature of the opposing element). The creature remains until you use a ten-minute or longer recovery, then fades away (although a demon or elemental might remain for a while to cause trouble).", "<em>Effort:</em> Make the supernatural creature understand you and obey your verbal instructions.", "Action to initiate.", ], sidebar: "<p><strong>Angel:</strong> level 5; health 15; physical, magical, or energy attack inflicts 6 damage; flies a short distance each round</p><p><strong>Demon:</strong> level 5; health 25; physical, magical, or energy attack inflicts 6 damage; flies a short distance each round</p><p><strong>Elemental:</strong> level 5; health 25; physical or energy attack inflicts 5 damage; amorphous form can pass through spaces as small as 1 foot (30 cm); air elemental flies a long distance each round; earth elemental has Armor 3; fire elemental has Armor 10 against fire; water elemental swims a long distance each round</p>", }, 
	{ name: "Connected Knowledge", ref: ["CCR 93",], cost: 1, pool: "Intellect", effects: ["You can connect to restricted data (via an implant, a handheld device, a robotic drone assistant, or the like) that isn't publicly accessible. Ask your GM a question and get a short but accurate answer if you succeed on an Intellect task. The difficulty is routine if it's something anyone could learn via their own method of access, level 3 if the sensitive or secret knowledge is primarily an engineering or scientific topic, and level 5 or higher if your GM decides the information is particularly sensitive or secret, whether scientific in nature or not. Last action.", ], }, 
	{ name: "Connected", ref: ["CCR 92",], cost: 2, plus: true, pool: "Intellect", effects: ["You know people who get things done&mdash;not just respected people in positions of authority, but also a variety of online hackers and regular street criminals. These people are not necessarily your friends and might not be trustworthy, but they owe you a favor or two. When you use this ability, you remember or otherwise establish a level 2 contact you can reach out to in a specific location. You and your GM can work out the specifics." , "<em>Effort:</em> Increase the level of the new contact by 1." , "This ability renews when you access a new location or when at least a month has elapsed in the same location where you last used this ability." , "Enabler.", "<em>At tier 3:</em> You can establish two contacts in a specific location simultaneously.", ], }, 
	{ name: "Constrict", ref: ["CCR 192",], effects: ["While in beast form, if you make an unarmed attack as a Last action, your attack deals 2 less damage and you grab the target, possibly by wrapping part of your body around them. All the grabbed target's tasks are hindered, including any attempts to escape. Each round they remain grabbed, you can use your action to inflict 5 damage on them (no roll required). Last action to initiate; action to constrict a grabbed target."], }, 
	{ name: "Control Electric Device", ref: ["CCR 215", "CCR 226",], cost: 2, plus: true, pool: "Intellect", effects: ["You can attempt to control or disrupt an electric device (in other words, a non-intelligent device or machine that is powered by electricity) at long range. Make an Intellect attack against the device. If your roll is less than a 12, treat the roll as a 12. (This means you don't get a GM intrusion if you roll a 1.)", "If you succeed, you can control the device as if you were next to it, even if normally you would have to touch it, read a screen, or manually operate it. If the machine is protected against casual access via some kind of security protocol, your tasks to hack or otherwise bypass that security are hindered unless you are within immediate range. If it is held by another creature, you must succeed against the creature's level or the device's level, whichever is higher.", "If attempting to disrupt the device, success means it shorts out and, if you wish, also explodes in an immediate radius, dealing 1 damage to all creatures in the area (make separate Intellect attack rolls against each creature).", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Action.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 15."], }, 
	{ name: "Control the Savage", ref: ["CCR 167",], cost: 6, pool: "Intellect", effects: ["Make an Intellect attack roll to control a calm nonhuman beast within short range. You control it as long as you use your action each round to concentrate on the target. Action."], }, 
	{ name: "Controlled Change", ref: ["CCR 191",], effects: ["You can try to use your Beast Form ability to change into your beast form on any night (a difficulty 4 Intellect task). Any transformations you make using this power are in addition to the five nights per month that you change involuntarily. Action to change."], }, 
	{ name: "Convenient Device", ref: ["CCR 197",], cost: "variable", pool: "Intellect", effects: ["Because you planned ahead or were given a special tool to overcome an obstacle, you produce a piece of equipment that removes one harmful or negative condition affecting you or an ally within immediate range. For example, if you are poisoned, you have an antidote. If an ally is blinded by pepper spray, you have a salve that negates the irritant. If you are handcuffed, you have a miniature lockpick or a pen laser that cuts metal. The device works only once (but you can use this ability again to produce another one). The Intellect cost for using this ability is equal to the level of the effect you're trying to overcome. Action."], }, 
	{ name: "Cool Water", ref: ["CCR 232",], cost: 1, pool: "Intellect", effects: ["You cause water in the air to condense, creating enough potable cold water to sustain five creatures for one day. Action."], }, 
	{ name: "Craft Device", ref: ["CCR 106",], cost: 5, plus: true, pool: "Intellect", effects: ["You build a new&mdash;but somewhat fragile&mdash;device if you succeed at a difficulty 3 engineering task. You can choose its effect from the Low-Power Manifest Cyphers table. The resulting device is not a cypher, doesn't count toward your cypher limit, and usually isn't limited to one use; instead, it has a depletion of 1 in 1d6. The device is small enough that you can carry it.", "One hour to build.", "<em>At tier 3:</em> If you apply a level of Effort to this ability you can choose a medium-power manifest cypher as your device.", "<em>At tier 6:</em> If you apply two levels of Effort to this ability you can choose an advanced-power manifest cypher as your device.", ], }, 
	{ name: "Craft Metal", ref: ["CCR 172",], effects: ["You can manipulate metal easily, allowing you to craft metal objects without heat. You also gain an asset to all tasks involving crafting metal."], }, 
	{ name: "Cybernetic Alacrity", ref: ["CCR 185",], effects: ["Any time you use Effort on a noncombat Speed task, add your choice of the following options: a free level of Effort on the action or a minor effect on the action. Enabler."], }, 
	{ name: "Cypher Use", ref: ["CCR 67", "CCR 68", "CCR 105", "CCR 106", "CCR 114", ], effects: ["You can bear one additional cypher at a time. You can gain this ability multiple times (as a character advancement or in place of a new focus ability). Each time you do, you can bear one additional cypher at a time.", ], }, 
	{ name: "Damage Dealer-v1", dupmajor: true, ref: ["CCR 152",], effects: ["You've become better at killing with firearms, inflicting an additional 3 damage with them."], }, 
	{ name: "Damage Dealer-v2", dupmajor: true, ref: ["CCR 195",], effects: ["You've become better at killing with one kind of weapon. Choose one melee or ranged weapon. You inflict an additional 3 damage with this weapon. You can select this ability up to two times for any particular weapon (for a total of 6 damage)."], }, 
	{ name: "Danger Instinct", dupminor: true, ref: ["CCR 82", "CCR 234",], cost: 3, pool: "Speed", effects: ["If you are attacked by surprise, whether by a creature, a device, or simply an environmental hazard (such as a tree falling on you), you move an immediate distance before the attack occurs. If moving prevents the attack, you are safe. If the attack can still potentially affect you&mdash;if the attacking creature can move to keep pace, if the attack fills an area too big to escape, and so on&mdash;your defense against it is eased. Enabler.", ], }, 
	{ name: "Dashing Defense", ref: ["CCR 182",], effects: ["When wielding a light or medium weapon against a foe of your size or smaller, if you fail to dodge an attack, you can still attempt to block it. Enabler."], }, 
	{ name: "Data Processor", ref: ["CCR 186",], cost: 1, plus: true, pool: "Intellect", effects: ["Drawing upon stored information and the ability to process incoming data at amazing speeds, you temporarily become trained in a mental task. Each time you activate this ability, choose one Intellect skill, such as hacking, Intellect defense, a knowledge skill, or perception; you become trained in that skill until you use a ten-minute or longer recovery.", "Normally you can use this ability to become trained in only one skill at a time; activating it again replaces the previous use with a new trained skill.", "<em>Effort:</em> Increase your maximum number of temporary trained skills by one.", "Action to initiate."], }, 
	{ name: "Deafening Bolt", ref: ["CCR 214",], cost: 3, pool: "Intellect", effects: ["You unleash a bolt of lightning at a target within long range. If your attack succeeds, the target takes 5 damage and is deafened until you use a ten-minute or longer recovery, during which time they can't hear anything and their defense tasks are hindered. Action."], }, 
	{ name: "Deep Reserves", dupminor: true, ref: ["CCR 147", "CCR 184",], effects: ["When others are exhausted, you can push through. You can transfer up to 6 points among your Pools in any combination, at a rate of 1 point per round. For example, you could transfer 3 points of Speed to Might and 3 points of Intellect to Might, which would take a total of six rounds. This ability renews when you use a ten-hour recovery. Action.", ], }, 
	{ name: "Defend and Respond", ref: ["CCR 197", "CCR 219", "CCR 223",], cost: 3, pool: "Might or Speed", effects: ["If you block or dodge a melee attack, you can immediately make a melee attack against your attacker. You can't use this ability more than once per turn. Enabler."], }, 
	{ name: "Defensive Cybernetics", ref: ["CCR 184",], effects: ["Some of your body is made of durable machine parts, some internal, some external. Work with your GM to decide your exact form and configuration.", "If you have a minor or moderate wound, you can rally to remove it as an action without using any Might points. This ability renews each time you take a recovery."], }, 
	{ name: "Defensive Phasing", ref: ["CCR 230",], cost: 2, pool: "Intellect or Speed", effects: ["Until you use a ten-minute or longer recovery, you gain an asset to your dodge tasks as you selectively change your phase so that some attacks pass through you harmlessly. Action to initiate."], }, 
	{ name: "Defensive Precognition", ref: ["CCR 212",], cost: 4, pool: "Intellect", effects: ["You automatically dodge all ranged attacks (no roll required). However, on your next turn after you're attacked with a ranged attack, all your other actions are hindered. This ability lasts until you use a ten-minute or longer recovery. Action to initiate."], }, 
	{ name: "Deflect Attacks", ref: ["CCR 200",], cost: 4, pool: "Intellect", effects: ["You automatically block, deflect, or dodge any ranged projectile attacks (no roll required). However, on your next turn after you're attacked with ranged projectiles, all your other actions are hindered. This ability lasts until you use a ten-minute or longer recovery. Action to initiate."], }, 
	{ name: "Defuse Situation", ref: ["CCR 219",], cost: 4, pool: "Intellect", effects: ["During the course of an investigation, your questions sometimes elicit an angry or even violent response. Through dissembling, verbal distraction, or similar evasion, you prevent a living foe from attacking anyone or anything for one round if you succeed on a charm, deception, intimidation, or other interaction task. Action."], }, 
	{ name: "Desperate Defense", ref: ["CCR 104",], effects: ["While you have at least one moderate or one major wound, you can choose to enter a state of heightened awareness against threats. While in this state, you can't use points from your Intellect Pool, but you add +1 to your Speed Edge and gain two assets to block and dodge tasks. If you choose to end the heightened state while you remain wounded, you can't resume it again until after you use a recovery. Enabler.", ], }, 
	{ name: "Desperate Feat", ref: ["CCR 111", "CCR 212", "CCR 208",], effects: ["While you have at least one moderate or major wound, you add +1 Edge to the Pool of your choice. Enabler.", ], }, 
	{ name: "Desperate Flame", ref: ["CCR 149",], effects: ["While you have at least three moderate wounds or at least one major wound, you gain two free levels of Effort you can apply to one fire attack each round. This benefit lasts until you take your next ten-minute or longer recovery or you no longer have the qualifying wounds. Enabler."], }, 
	{ name: "Despite My Wounds", ref: ["CCR 79", "CCR 112", "CCR 178",], effects: ["While you have two or more moderate wounds or one major wound, you get a free reroll on one action each round (as if you had spent 1 XP). Enabler.", ], }, 
	{ name: "Detect Traps", ref: ["CCR 61", "CCR 71"], cost: 2, plus: true, pool: "Speed or Intellect", effects: ["When you roll to find a trap and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.) You retain your increased trap sensitivity until you use a ten-minute or longer recovery.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Action.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12.", ], }, 
	{ name: "Determination", ref: ["CCR 206",], effects: ["When you retry a failed task, in addition to the required level of Effort you must use, you gain a free level of Effort. You cannot use this ability again until after you have taken a recovery. Enabler."], }, 
	{ name: "Device Insight", ref: ["CCR 235",], cost: 3, pool: "Intellect", effects: ["When examining any unknown, alien, supernatural, or high-technology device, you can ask the GM one question to gain an idea of its capabilities, how it functions, how it can be activated or deactivated, what its weaknesses are (if any), how it can be repaired, or any other similar query. This insight is for difficult or strange things beyond those readily identified by using the appropriate knowledge or technical skill. Action."], }, 
	{ name: "Diamagnetism", ref: ["CCR 173",], effects: ["You magnetize any nonmetallic object within short range so that it can be affected by your other magnetic powers, as if using Magnetize at range and on the fly (to permanently magnetize an object, you must spend Intellect as noted for Magnetize). Therefore, with Move Metal, you can move any object you can see. With Repel Metal, you have an asset to all block and dodge rolls, regardless of whether the incoming attack uses metal (even pure energy attacks bend slightly to your will). And so on."], }, 
	{ name: "Dirty Fighter", ref: ["CCR 217",], cost: 2, pool: "Speed", effects: ["Make a Speed attack against a foe within long range who you want to distract, blind, annoy, hamper, or otherwise interfere with. If you succeed, you hinder their attacks and defenses until you use a ten-minute or longer recovery. Action."], }, 
	{ name: "Dirty Trick", ref: ["CCR 178",], cost: 1, pool: "Intellect", effects: ["You attempt to distract your foe (by getting them to look elsewhere, making a clumsy feint to set up your real strike, and so on) so you can follow up with an attack. Make an Intellect attack to deceive your foe; success means their defense against your melee attack this round is hindered. Because your foes catch on that you're tricky, each time after the first that you use this ability in a combat encounter, the Intellect attack is hindered by one step.", "Instead of following up with an attack, you can follow up with some other action, and if you succeed at an eased bluffing task against them, they don't realize what you did. For example, you could distract a foe and then press the button that opens all of the lion cages, throw an incriminating object into a trash can, or even attempt to pickpocket them.", "Enabler."], }, 
	{ name: "Disable Mechanism", ref: ["CCR 114", "CCR 227",], cost: 3, plus: true, pool: "Intellect", effects: ["With a successful Intellect attack to hack a machine, robot, or device (intelligent or not) within immediate range, you disrupt it in one of the following ways:", ["All the machine's tasks are hindered until you use a ten-minute or longer recovery.", "The machine's speed is halved.", "The machine can take no action for one round.", "The severity of the machine's attacks are reduced by one step (minimum of a minor wound) until you use a ten-minute or longer recovery.", ], "You must touch the machine, robot, or device to disrupt it (if you are making an attack, it inflicts no damage).", "<em>Effort:</em> Increase the range to as far as you can directly see (through your own eyes, not through a remote camera or other interface). Target a mechanism through a network interface you have unrestricted access to (this requires two levels of Effort).", "Action.", ], }, 
	{ name: "Disappear Into Shadow", ref: ["CCR 82",], effects: ["Even if in full view of up to three creatures, your successful stealth task allows you to slip away from them and hide from view in a nearby shadow, behind a tree or furnishing, or in the next room as your action.", "<em>Effort:</em> Attempt to slip away from one additional target looking directly at you (attempt a separate stealth task against each).", "Enabler.", ], }, 
	{ name: "Disarming Strike", ref: ["CCR 202",], cost: 3, pool: "Speed", effects: ["Make an attack against a foe with your chosen weapon. If you hit, you inflict 1 less damage than normal, but you disarm your foe, knocking their weapon to the ground 10 feet (3.5 m) away.", "If your chosen weapon is a whip, you can instead choose to hinder your attack, and if it succeeds, the foe's weapon lands in your other hand.", "If your chosen weapon is a bow, you can instead choose to hinder your attack, and if it succeeds, the foe's weapon is \"nailed\"  to a nearby object or structure.", "Action."], }, 
	{ name: "Discerning Mind", ref: ["CCR 82",], cost: 2, pool: "Intellect", effects: ["Your mind resists injury from one mental attack, psychic trauma, or similar effect, reducing its wound severity by one step (major to moderate, moderate to minor, minor to none). Enabler.", ], }, 
	{ name: "Discharge", ref: ["CCR 215",], cost: 5, plus: true, pool: "Intellect", effects: ["You take on a visible shine, tone, or crackling energy discharge. This is harmless unless you choose to direct it outward. While this ability is active, as an action you can strike up to three targets in short range (make separate Intellect attack rolls). Success means you inflict 4 damage.", "This ability lasts until you use a ten-minute or longer recovery.", "<em>Effort:</em> Increase the effect on a target so that in addition to taking damage, they lose their next turn.", "Action to initiate."], }, 
	{ name: "Display of Skill", ref: ["CCR 202",], cost: 2, pool: "Intellect", effects: ["Seeing you use your weapon in combat (or perform showy moves outside of combat) gives one ally confidence that equates to a free level of Effort they can use on an action of their choice before their (or your) next ten-minute or longer recovery. Conversely, one foe can be cowed by this display, giving you a free level of Effort on a subsequent intimidation task. Enabler; action if used outside of combat."], }, 
	{ name: "Ditch Assumption", ref: ["CCR 218",], cost: 4, pool: "Intellect", effects: ["After careful observation and investigation (questioning one or more NPCs on a topic, searching an area or a file, reassessing your prior beliefs, or similar activity), you gain clarity on a topic&mdash;the GM identifies one false assumption you have regarding your current investigation. For instance, if you have come to mistakenly believe a fact, the GM lets you know. Alternatively, if you have several possible suspects for a crime, the GM eliminates one. However, if you're not operating with false information or running down a red herring, and you don't have incorrect suspects to eliminate, you learn nothing. This ability renews after you take a ten-hour recovery.", "Ten minutes to initiate."], }, 
	{ name: "Divert Attacks", ref: ["CCR 181",], cost: 4, pool: "Speed", effects: ["Until you use a ten-minute or longer recovery, you automatically deflect, block, or dodge any ranged projectile attacks (no roll required). However, on your next turn after you're attacked with ranged projectiles, all your other actions are hindered. Action to initiate."], }, 
	{ name: "Divination", ref: ["CCR 157",], cost: 6, pool: "Intellect", effects: ["You contact a powerful entity (such as a deity, demon lord, or creature from a dimension of knowledge), ask one question, and get a general answer. The GM assigns a level to the question, so the more obscure the answer, the more difficult the task. Generally, knowledge that you could find by looking somewhere other than your current location is level 1, obscure knowledge of the past is level 7, and specific knowledge of future events beyond the next few minutes is impossible. Action."], }, 
	{ name: "Divine Radiance", ref: ["CCR 48",], cost: "1", plus: true, stat: "Intellect", effects: ["You channel divine influence to gain one of the following effects.", [["<em>Blessing:</em> A target within short range is charged with benevolent divine grace. At any point before they've taken their next ten-minute or longer recovery, they gain an asset to one action.", "<em>Effort:</em> Affect two additional targets.", "Action.", ], ["<em>Turn Undead:</em> Up to five undead creatures of level 2 or less within short range are blasted by divine radiance (make separate Intellect attack rolls against each target). Affected targets are repulsed and must spend their next turn fleeing your presence.", "<em>Effort:</em> Affect two additional targets. Increase the maximum level of undead you can affect by 1.", "Action.", "<em>At tier 3:</em> Instead of causing affected targets to flee, you can make them unable to take actions for one turn.", ], ], ], sidebar: "<p>Depending on the game, your GM may decide Turn Undead works on demons or creatures of similar ilk instead of (or in addition to) undead.</p>", }, 
	{ name: "Drain Life", ref: ["CCR 57", "CCR 210",], cost: 1, plus: true, pool: "Intellect", effects: ["You send forth an ashy tendril reaching up to short range, inflicting 2 damage to a living target with a successful Intellect attack roll. You benefit from their drained life, healing a minor wound from yourself or an ally within immediate range. Action.", "<em>At tier 3:</em> If you apply two levels of Effort, a successful attack inflicts 5 damage and heals a moderate or minor wound from yourself or an ally within immediate range.", ], }, 
	{ name: "Drawing on Life's Experiences", ref: ["CCR 171",], cost: 6, pool: "Intellect", effects: ["You've seen a lot and done a lot, and that experience comes in handy. Ask the GM one question, and you'll receive a general answer. The GM assigns a level to the question, so the more obscure the answer, the more difficult the task. Generally, knowledge that you could find by looking somewhere other than your current location is level 1, and obscure knowledge of the past is level 7. Action."], }, 
	{ name: "Dual Wield", ref: ["CCR 72",], effects: ["You can use two light melee weapons at the same time or one light melee weapon and one medium melee weapon at the same time. You can make an attack with either one as your action, then attack with the other weapon as an extra action on your turn. Enabler.", "<em>At tier 3:</em> You can choose to use two medium melee weapons at the same time.", ], sidebar: "<p>When using Dual Wield to attack twice on your turn, you can't use a First action to attack with a light melee weapon and then attack again with your other weapon as an action; instead, your two actions take place in regular initiative order.</p>", }, 
	{ name: "Duplicate", ref: ["CCR 139",], cost: 2, plus: true, pool: "Might", effects: ["You cause a temporary instance of yourself to appear at any point you can see within short range. It persists until you use a ten-minute or longer recovery. The instance is a level 2 follower that appears with copies of your clothing and equipment (minus any cyphers and artifacts) and has all your memories. The instance obeys your commands and does as you direct. The instance dissipates earlier if you dismiss it as an extra action on your turn, if you use this ability again, or if it is killed. When the instance disappears, any clothing or equipment it appeared with also vanishes, and any new equipment it acquired remains behind. Each time an instance is killed, you take a moderate wound.", "Normally, you can only have one instance at a time; creating a second makes the first one disappear.", "<em>Effort:</em> Spawn one additional duplicate of yourself, which is simultaneously active with the normal duplicate from this ability; each duplicate can be individually dismissed as an extra action on your turn. Increase the level of one of your duplicates by 1.", "Action to initiate.", ], }, 
	{ name: "Earthshake-v1", dupmajor: true, ref: ["CCR 147",], cost: 7, pool: "Might or Intellect", effects: ["You trigger a violent earth movement in a short area within very long range. Buildings and terrain features are damaged, reducing their levels by 1 to 3, shedding debris and rubble. Creatures in the area take 6 damage from shaking and/or falling debris (roll a separate attack roll against each). Even on a failed attack, creatures in the area still take 3 damage. Action.", ], }, 
	{ name: "Earthshake-v2", dupmajor: true, ref: ["CCR 221",], cost: 8, pool: "Might or Intellect", effects: ["You trigger a violent earth movement in a short area within very long range. Buildings and terrain features are damaged, reducing their levels by 1 to 3, shedding debris and rubble. All creatures in the area take 7 damage from shaking or 13 damage if in or adjacent to an affected building or terrain feature (no roll required). Last action."], }, 
	{ name: "Easing the Pain", ref: ["CCR 228",], effects: ["Allies within immediate range (including you) that take a recovery add +1 to their roll."], }, 
	{ name: "Efficient Builder", ref: ["CCR 150",], effects: ["Anytime you gain resource points, you gain 1 additional point, but that point can be spent only on repairing or crafting."], }, 
	{ name: "Electric Armor", ref: ["CCR 214",], cost: 3, pool: "Intellect", effects: ["Lightning crackles across your body until you use a ten-minute or longer recovery. The electricity doesn't harm you, but it automatically inflicts 3 damage on anyone who tries to touch you or strike you with a melee attack (no roll required).", "While this ability is active, you ignore moderate and minor wounds from electricity.", "While this ability is active, you can make a touch attack that inflicts 2 damage from electricity.", "Enabler."], }, 
	{ name: "Electric Flight", ref: ["CCR 215",], cost: 0, plus: true, pool: "Intellect", effects: ["While Electric Armor is active, you can fly. You can move a short distance and take an action, or move a long distance as your action. (Unlike a normal situation of taking an action and moving a short distance, this doesn't hinder your tasks.) You can carry one creature of your size or smaller with you. They aren't harmed by your Electric Armor.", "<em>Effort:</em> Cover and protect a passenger with Electric Armor as if they were you.", "Enabler."], }, 
	{ name: "Electromagnetic Eyes", ref: ["CCR 172",], cost: 2, pool: "Intellect", effects: ["You sense your environment using the electromagnetic fields that invisibly fill most locations&mdash;invisible to others, but not to you. You can \"see\"  up to long range even in complete darkness, and you have an asset on perception tasks related to noticing hiding living creatures (which have their own electromagnetic fields) as well as metal and magnetic objects and powered devices. You can see otherwise invisible creatures normally.", "You always know which way is north (assuming you're on a planet with magnetic poles).", "This ability lasts until you use a ten-minute or longer recovery.", "Action to initiate."], }, 
	{ name: "Electromagnetically Charge", ref: ["CCR 172",], cost: 1, plus: true, pool: "Intellect", effects: ["You gather energy from the electromagnetic fields that invisibly fill most locations, then use it to heal yourself, reducing the severity of one of your wounds. You are healed of a minor wound, reduce a moderate wound to a minor wound, or reduce a major wound to a moderate wound.", "Alternatively, you can use this ability to restore charge to a mundane handheld device, such as a cell phone or small radio, that uses electricity and has lost its charge or whose batteries have been exhausted.", "Each time you use this ability, the Intellect point cost increases by 1. The cost returns to 1 after you take a recovery.", "Last action."], }, 
	{ name: "Elemental Protection", ref: ["CCR 82",], cost: 4, plus: true, pool: "Intellect", note: "Magic",  effects: ["You and every creature you designate within immediate range gains protection against one kind of energy damage (such as fire, electricity, or cold). The creatures reduce the severity of wounds from that energy by one step (major to moderate, moderate to minor, minor to none). This protection lasts for a creature until they use a one-hour or longer recovery; one individual ending the ability doesn't affect the duration for other creatures.", "<em>Effort:</em> Reduce the wound severity by another step.", "Action.", ], }, 
	{ name: "Embedded Drone", ref: ["CCR 185",], cost: 3, pool: "Intellect", effects: ["You have an embedded drone built into your body that you can launch and control until you use a one-hour or longer recovery (at which time it returns to you). The drone is no larger than 1 foot (30 cm) on a side. It has manipulators, allowing it to attempt to accomplish physical tasks, and a built-in firearm that it can use to make attacks. The drone can immediately take an action on the turn that you launch it. If the drone is destroyed, you can use your resources to restore it over several days. Action to initiate."], sidebar: "<p><strong>Embedded drone:</strong> level 4; long-range embedded pistol inflicts 4 damage; flies a short distance each round</p>", }, 
	{ name: "Empathic Sense", ref: ["CCR 162",], effects: ["You sense the general mental state of a being within short range. You can sense their general emotion, and in particular how they feel about you. Last action."], }, 
	{ name: "Enchant Object", ref: ["CCR 155",], cost: 2, pool: "Intellect", effects: ["You imbue a weapon, tool, or other usable item with magic that enhances its performance, lasting until you (or the user of the object) use a ten-minute or longer recovery. At any point while the ability is active, the creature using the object gains an asset to one action requiring the object. You decide if the object looks the same, glows like a candle, or gains a magical rune for the duration of the spell. Action."], }, 
	{ name: "Endurance", ref: ["CCR 234",], effects: ["Any duration dealing with physical actions is either doubled or halved, whichever is better for you. For example, if the typical person can hold their breath for thirty seconds, you can hold it for one minute. If the typical person can march for four hours without stopping, you can do so for eight hours. In terms of harmful effects, if a poison paralyzes its victims for one minute, you are paralyzed for thirty seconds. The minimum duration is always one round. Enabler."], }, 
	{ name: "Energize Object", ref: ["CCR 200",], cost: 3, pool: "Intellect", effects: ["You channel energy into an object (like a melee or ranged weapon). Until you use a one-hour or longer recovery, any attack you make with the energized object inflicts an additional 1 damage from energy (if the weapon fires projectiles, such as bullets from a rifle, this damage applies to the projectiles). The energy drains out if you stop holding or carrying the object, but as an extra action on your turn, you can energize a different object. Action.", "When you energize an object, you use psychokinetic energy, which tends to give affected weapons a subtle purple glimmer."], }, 
	{ name: "Enhance Strength", ref: ["CCR 200",], cost: 3, plus: true, pool: "Intellect", effects: ["Until you use a ten-minute or longer recovery, you use your telekinesis to augment your physical actions. When you roll on a task using brute force, such as moving a heavy object or smashing down a door, and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.)", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Action to initiate."], }, 
	{ name: "Enhanced Animal Shape", ref: ["CCR 160",], effects: ["When you use Animal Shape, your animal form gains the following additional bonuses: +3 to your Might Pool, +2 to your Speed Pool, and you can ignore minor wounds from physical attacks. Enabler."], }, 
	{ name: "Enhanced Beast Form", ref: ["CCR 192",], effects: ["When you use Beast Form, your beast form gains the following additional bonuses: +3 to your Might Pool, +2 to your Speed Pool, and you can ignore all minor wounds from physical attacks."], }, 
	{ name: "Enhanced Energy", ref: ["CCR 133", "CCR 135",], effects: ["When you succeed on an important task using your powers as determined by your GM, you regain 4 points to your Intellect Pool. Each time you do, you regain 1 less point. This ability renews after you take a ten-hour recovery. Enabler.", ], }, 
	{ name: "Enhanced Flames", ref: ["CCR 149",], effects: ["Fire damage you deal using special abilities increases by 2 damage per attack."], }, 
	{ name: "Enhanced Scavenging", ref: ["CCR 112",], cost: 2, plus: true, pool: "Intellect", effects: ["When you roll to scavenge the postapocalyptic landscape for something useful and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.) Your enhanced effect persists until you take a ten-minute or longer recovery.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Enabler.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12.", ], }, 
	{ name: "Enhanced Self-Repair", ref: ["CCR 184",], effects: ["You reduce the Might cost of rallying to remove wounds by 2."], }, 
	{ name: "Enhanced Stat", ref: ["CCR 82", "CCR 114"], effects: ["You gain 4 points to one Pool of your choice.", ], }, 
	{ name: "Enlarge", ref: ["CCR 188",], cost: 1, plus: true, pool: "Might", effects: ["You grow to a height of 9 feet (3 m) until you use a recovery. Your equipment increases size with you. While enlarged, you add +1 to your Might Edge, you can ignore the first moderate wound you take, and your unarmed attacks inflict 4 damage. While enlarged, your dodge tasks are hindered.", "Each time you use Enlarge, the Might cost increases by 1. The cost resets after you take a recovery.", "Last action; enabler to use again to remain enlarged."], sidebar: "<p>If you have multiple abilities that let you grow to a larger size, their effects don't add together&mdash;you just get the benefits from the biggest one.</p>", }, 
	{ name: "Escape Plan", ref: ["CCR 195",], effects: ["When you kill a foe, you can attempt a stealth task as an extra action on your turn to hide from anyone around, assuming that a suitable hiding place is nearby. Enabler."], }, 
	{ name: "Escape", dupminor: true, ref: ["CCR 76", "CCR 95", "CCR 204",], cost: 2, plus: true, pool: "Speed", effects: ["When you roll to escape (such as slipping your restraints, squeezing through the bars, breaking the grip of a creature holding you, or pulling free from sucking quicksand) and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.) Action.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12.", ], }, 
	{ name: "Evil Eye", ref: ["CCR 73",], cost: 1, plus: true, pool: "Intellect", effects: ["You make the sign of the evil eye, targeting a creature within short range with your Intellect attack. On a success, they are afflicted by a spirit of misfortune until you use a one-hour recovery. During this period, the GM afflicts them by introducing (or intruding, if against a PC) inconvenient events such as tripping, losing an item, missing an appointment, and so on.", "<em>Effort:</em> Increase the misfortune duration so it lasts until you use a ten-hour recovery. Inflict2 Intellect damage per level of Effort on a successful attack (in addition to the misfortune aspect of the ability).", "Last action.", "<em>At tier 3:</em> You can use two levels of Effort to make the misfortune permanent; it is a level 4 curse for the purpose of abilities that remove afflictions.", ], }, 
	{ name: "Excellent Gunner", ref: ["CCR 152",], effects: ["You can freely use firearms and suffer no penalty when using one.", "You inflict an additional 1 damage with firearms.", "For one attack you make with a firearm, you can roll twice and use the better result. This ability renews when you make a ten-minute or longer recovery. Enabler."], }, 
	{ name: "Exceptional Follower", ref: ["CCR 83", "CCR 114"], effects: ["You gain a level 3 follower.", ], }, 
	{ name: "Exorbitant Reach", ref: ["CCR 102",], effects: ["You have an exorbitant item of your choice, such as a personal force field or a small spaceship. Work with your GM to determine something appropriate for the setting.", "<em>At tier 3:</em> You gain another exorbitant item.", ], }, 
	{ name: "Expanded Wireless", ref: ["CCR 187",], effects: ["The base range for Wireless Interface increases to anywhere on the planet."], }, 
	{ name: "Experienced Explorer", ref: ["CCR 176",], effects: ["Your experience with creatures, plants, and substances in various regions gives you some additional protection against them. Your defense rolls against poison are eased and you reduce wounds from poison by one step (major to moderate, moderate to minor, minor to none). For example, if you are bitten by a snake whose poison inflicts a moderate wound, you take only a minor wound from the poison.", "You are immune to natural diseases.", "When in the wild, natural effects such as tall grass, thick brush, rugged terrain, landslides, and bad weather do not hinder you or slow your movement, and any wounds from them are reduced by one step.", "Finally, you can find edible food and potable water in the wilderness, enough to feed yourself and a few other people, if given an hour or so to explore."], }, 
	{ name: "Expert Automaton", ref: ["CCR 151",], effects: ["You've built a level 3 automaton follower. It otherwise functions much like your level 2 automaton from Automaton Assistant.", "Instead of gaining a new level 3 automaton, you can upgrade an existing level 2 or 3 automaton follower (increasing its level by 1) and gain a new level 2 automaton.", "You can take this ability multiple times, each time gaining another automaton."], }, 
	{ name: "Expert Combatant", ref: ["CCR 51", "CCR 64", "CCR 65", "CCR 66", "CCR 70", "CCR 72", "CCR 77", "CCR 79", "CCR 97", "CCR 111",], effects: ["You are trained in a specific weapon attack of your choice, such as swords, axes, or bows; or in a broader category of attacks, such as light bashing weapons, light bladed weapons, light ranged weapons, medium bashing weapons, medium bladed weapons, medium ranged weapons, and so on.", "<em>At tier 2:</em> You can choose to become specialized in the same attack method you chose at tier 1, but you must gain the skill normally (such as from a character advancement).", "<em>At tier 6:</em> You can become an expert in a specific attack method (either the one you chose at tier 1 or another weapon skill you're already specialized in), but you must gain the skill normally.", ], }, 
	{ name: "Expert Doctor", ref: ["CCR 94",], effects: ["You are trained in healing.", "<em>At tier 6:</em> You can become an expert in healing if you are already specialized, but you must gain the skill normally (such as from a character advancement).", ], }, 
	{ name: "Expert Engineer", ref: ["CCR 93",], effects: ["You are trained in engineering.", "<em>At tier 6:</em> You can become an expert in engineering if you are already specialized, but you must gain the skill normally (such as from a character advancement).", ], }, 
	{ name: "Expert Follower", ref: ["CCR 198",], effects: ["You gain a level 3 follower who has three level 4 modifications of your choice.", "Instead of gaining a new level 3 follower, you can advance an existing follower to level 3 and gain a new level 2 follower.", "You can take this ability multiple times, each time gaining another follower."], }, 
	{ name: "Expert Handyman", ref: ["CCR 235",], effects: ["When you use resource points to craft, repair, or build something, the resulting object is superior to other objects of a similar kind. Work with the GM to determine exactly how that manifests, but typically they are 2 levels higher than they'd otherwise be."], }, 
	{ name: "Expert Interlocuter", ref: ["CCR 47",], effects: ["You are trained in your choice of charm, deception, or intimidation.", "<em>At tier 6:</em> You can become an expert in that same skill if you are already specialized, but you must gain the skill normally (such as from a character advancement).", ], }, 
	{ name: "Expert Sneak", ref: ["CCR 61",], effects: ["You are trained in stealth.", "<em>At tier 6:</em> You can become an expert in stealth if you are already specialized, but you must gain the skill normally (such as from a character advancement).", ], }, 
	{ name: "Expert Space Pilot", ref: ["CCR 96",], effects: ["You are trained in piloting spacecraft.", "<em>At tier 6:</em> You can become an expert in piloting spacecraft if you are already specialized, but you must gain the skill normally (such as from a character advancement).", ], }, 
	{ name: "Expert Tracker", ref: ["CCR 59",], effects: ["You are trained in tracking.", "<em>At tier 6:</em> You can become an expert in tracking if you are already specialized, but you must gain the skill normally (such as from a character advancement).", ], }, 
	{ name: "Exploding Hand", ref: ["CCR 225",], cost: 5, pool: "Speed", effects: ["You call upon your mystic source and project it at a target within long range and two additional targets within immediate range of the first target. Make separate attacks against each. A successful attack inflicts 4 damage; even on a miss you still inflict 1 damage. Action."], }, 
	{ name: "Exploration Survivor", ref: ["CCR 176",], effects: ["You know how to survive in new and strange locations. After spending at least ten minutes in a region and succeeding on a outdoor survival task (generally difficulty 2, or whatever the GM determines is appropriate to the area), you find something useful you were seeking. The useful thing might be shelter in the form of a cave or tree hollow, materials to start a fire, fresh water, a game animal you bring down with ease, edible plants and fungi, or something to counteract a bleeding wound or poison.", "You are able to feed yourself and five allies for as long as you remain in this region.", "Once you've been to a notable location within a region (such as your campsite or a prominent landmark), you know the general direction and distance to it from where you are right now.", "Enabler."], }, 
	{ name: "Explorer's Awareness", ref: ["CCR 177",], effects: ["You're instinctively vigilant about potential threats, foes, obstacles, and hazards in your line of sight. When you use Effort on initiative and perception tasks, you gain two free levels of Effort. Enabler."], }, 
	{ name: "Extended Range", ref: ["CCR 163",], effects: ["You increase how far one of your mental abilities can reach. Choose one of your focus abilities that affects another creature. Your range for this ability increases by one range category (touch to immediate, then short, long, very long, 1 mile, 100 miles, and finally anywhere on the same planet). You can choose this ability multiple times, each time increasing the range of that ability or another ability by an additional range category."], }, 
	{ name: "Extra Padding", ref: ["CCR 171",], cost: 1, plus: true, pool: "Might", effects: ["You carry around a little more weight than most&mdash;maybe muscle, maybe fat, or a mix of both. This extra padding provides extra protection from physical threats, allowing you to ignore a minor wound you just took (do not mark the wound on your character sheet).", "This ability renews after your ten-hour recovery.", "<em>Effort:</em> Ignore a moderate wound instead of a minor wound. Ignore a major wound instead of a minor wound (this requires two levels of Effort).", "Enabler."], }, 
	{ name: "Extraordinary Leap", ref: ["CCR 139",], effects: ["When you move, instead of walking or running you can jump up, down, or across to anywhere you choose within long range if you have a clear and unobstructed path to that location. For example, you could jump to the top of a ten-story building or down to the ground from the top of that building.", "If you do nothing but jump for three actions in a row, you can go farther with each leap until you're jumping a very long distance each round, effectively moving at around 55 miles per hour (88 kph) for up to about ten minutes.", ], }, 
	{ name: "Eye for Detail", ref: ["CCR 235",], cost: 2, pool: "Intellect", effects: ["When you spend five minutes or so thoroughly exploring an area no larger than a short distance in diameter or an object you have direct access to, you can ask the GM one question about the area or object. The GM must answer you truthfully. This ability resets when you use a ten-hour recovery. Five minutes to explore the area or object. "], }, 
	{ name: "Eyes Adjusted", ref: ["CCR 216",], effects: ["You can see in very dim light as though it were bright light. You can see in total darkness as if it were very dim light."], }, 
	{ name: "Fantastic Armament", ref: ["CCR 139",], effects: ["You have a weapon, either mystical or technological in nature. You can freely use this weapon. Work with your GM to determine its origin, its history, and whether it's a ranged or melee weapon.", "You wield this weapon as a medium weapon that inflicts an additional +2 damage.", "Your weapon also has one power of its own. Choose an ability from the Low-Power Manifest Cyphers or Medium-Power Manifest Cyphers table. You can use that power as your action, costing 3 Intellect if it's a low-power ability or 5 Intellect if it's a medium-power ability.", "If you lose your weapon, you can (depending on your skill) craft a replacement or arrange for one to be made for you, requiring 1d6 days of concerted effort.", ], }, 
	{ name: "Fantastic Vehicle", ref: ["CCR 139",], effects: ["You have a vehicle, either mystical or technological in nature, that you can freely use. Work with your GM to determine whether it's a flying vehicle, a burrowing vehicle, a land vehicle, a watercraft, or something else.", "Your vehicle can comfortably carry you and up to six other creatures of your size.", "Your vehicle also has one power of its own. Choose an ability from the Low-Power or Medium-Power Manifest Cyphers table. You can use that power as your action, costing 3 Intellect if it's a low-power ability or 5 Intellect if it's a medium-power ability.", "If you lose your vehicle, you can (depending on your skill) craft a replacement or arrange for one to be made for you, requiring 1d6 days of concerted effort.", ], }, 
	{ name: "Fast Kill", ref: ["CCR 178", "CCR 182",], cost: 2, pool: "Might or Speed", effects: ["When you hit with a melee or ranged attack, you deal an additional 4 damage. You can't use this ability in two consecutive rounds. Enabler."], }, 
	{ name: "Fast Talk", ref: ["CCR 92", "CCR 104", "CCR 107", "CCR 110", "CCR 196", ], cost: 1, pool: "Intellect", effects: ["When speaking with an intelligent creature who can understand you and isn't hostile, you convince them to take one reasonable action in the next round. A reasonable action must be agreed upon by your GM; it should not put the creature or its allies in obvious danger or be wildly out of character. Action.", ], }, 
	{ name: "Faster Phase", ref: ["CCR 231",], effects: ["When you use Walk Through Walls, you pass through physical barriers faster, increasing your base rate by an additional 3 feet (1 m) per round, and doing so is an action rather than a Last action (you can take your normal movement before or after you use your phasing action). Enabler."], }, 
	{ name: "Fearsome Reputation", ref: ["CCR 180",], cost: 3, pool: "Might or Intellect", effects: ["You announce yourself (perhaps mentioning one of your intimidating deeds) to all foes within long range who can hear and understand you. Make a separate Intellect attack roll for each foe. Success means they are afraid of you, easing your tasks against them until you use a ten-minute or longer recovery. Action."], }, 
	{ name: "Feat of Strength", ref: ["CCR 208",], cost: 1, pool: "Might", effects: ["Your physical action is impressive, inspiring an ally or intimidating a foe. After succeeding at a task that depends on brute force (such as smashing down a barred door, tearing open a locked container, lifting or moving a heavy object, or striking someone with a melee weapon), choose a creature who saw you succeed. If they are an ally, you ease their next task. If they are a foe, you can either hinder one of their tasks on their next turn or immediately attempt an eased intimidation task against them. Enabler."], }, 
	{ name: "Feint", ref: ["CCR 178",], cost: 2, pool: "Speed", effects: ["If you use one action creating a misdirection or diversion, in the next round you can take advantage of your opponent's lowered defenses. Make a melee attack roll against that opponent. You gain an asset on this attack. If your attack is successful, it inflicts an additional 4 damage. Action."], }, 
	{ name: "Fence Out Evil", ref: ["CCR 210",], cost: 6, plus: true, pool: "Intellect", effects: ["You encircle a short area in a transparent, immaterial wall of cleansing light until you use a ten-minute or longer recovery. When the wall appears, each undead, demon, or creature of similar ilk within its area&mdash;or that enters the area&mdash;automatically takes 3 damage (ignores armor) from the light (no attack roll required) each round. In addition, you can attempt an Intellect attack against a qualifying creature in the area each round as your action. If you succeed, that creature is affected as if you successfully used Rebuke Evil against them. Action to initiate; action for each targeted use."], }, 
	{ name: "Ferocious When Cornered", ref: ["CCR 71",], effects: ["While you have at least three minor wounds, at least two moderate wounds, or at least one major wound, you gain one free level of Effort you can apply to one of your attacks each round. Enabler.", "<em>At tier 3:</em> The benefit increases to two free levels of Effort.", ], }, 
	{ name: "Field of Stones", ref: ["CCR 146",], effects: ["You can attempt to hide in natural terrain, appearing as a natural rock formation. If the terrain is rocky and your stealth roll is a 15 or less, you can treat the roll as a 15. (This means you don't get a GM intrusion if you roll a 1.) In other terrain, your stealth task to blend in as rocks is eased by two steps.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 18."], }, 
	{ name: "Fiery Hand of Doom", ref: ["CCR 149",], cost: 3, pool: "Intellect", effects: ["While your Shroud of Flame is active, you can reach into your halo and produce a hand composed of animate flame with a handspan of up to 3 feet (1 m), lasting until you use a ten-minute or longer recovery. The hand is a level 3 creature that inflicts 1 extra fire damage when it attacks (4 damage total). The hand acts as you direct, floating in the air. Directing the hand is an action. Without a command, the hand does nothing but follow you. It can move a long distance in a round, but it never moves farther away from you than long range. The hand can attack, grab, move, and carry things. It inflicts 3 damage each round to any flammable object it holds. Action to create; action to direct."], }, 
	{ name: "Final Defiance", ref: ["CCR 207",], effects: ["When you would normally be dead, you instead remain conscious and active for one more round. (This ability activates before Not Dead Yet activates.)", "As an extra action on your turn each round thereafter, you can attempt a difficulty 5 Might task to remain alive for one additional round.", "During these extra rounds of life, all your tasks are hindered.", "If by the last round you're alive you do not receive healing, gain points in a Pool, or otherwise rally or remove a wound that killed you, Not Dead Yet activates.", "Enabler."], }, 
	{ name: "Find Motivation", ref: ["CCR 174",], cost: 3, plus: true, pool: "Intellect", effects: ["When your mind would be negatively affected by an effect of level 4 or less (psychic commands, illness, fear, boredom, mind control, and so on), you can ignore the effect. If the effect lasts for a while (such as fear or mind control), it has no power over you until you use a ten-minute or longer recovery. If the effect is instantaneous (such as a psychic blast that inflicts damage), it doesn't affect you at all.", "<em>Effort:</em> Increase the maximum effect level you can ignore by 1.", "Enabler."], }, 
	{ name: "Find the Way", ref: ["CCR 59",], effects: ["When you are tracking a creature, have gotten lost, don't know the first step to take to begin a journey, or are attempting to choose between two or more routes to take, you can ask your GM one question about the task and get a very short, helpful answer. Once you use this ability, you can't use it again until after your next recovery. Action.", ], }, 
	{ name: "Fire Servant", ref: ["CCR 149",], cost: 6, pool: "Intellect", effects: ["You use your Shroud of Flame to create an automaton of fire that is your general shape and size, lasting until you use a ten-minute or longer recovery. This NPC ally acts as you direct each round. Directing the automaton is an action, and you can command it only when you are within long range of it. Without a command, the automaton continues to follow your previous command. You can also give it a simple programmed action, such as \"Wait here and attack anyone who comes within short range until they're dead.\"  Action to create; action to direct."], sidebar: "<p><strong>Fire automaton:</strong> level 5; Armor 1; bash attacks deal 6 damage (1 from fire)</p>", }, 
	{ name: "Fire Tendrils", ref: ["CCR 149",], cost: 5, pool: "Intellect", effects: ["Your Shroud of Flame sprouts three tendrils of flame that last until you use a ten-minute or longer recovery. You can attack with each tendril as an extra action on your turn. Each tendril inflicts 3 damage (5 damage with Enhanced Flames). If you don't use the tendrils to attack, they remain but do nothing. Action to initiate.", "Following the round in which you initiate Fire Tendrils, attacking with them&mdash;as extra actions on your turn&mdash;counts as your overall action for that round."], }, 
	{ name: "Fireball", ref: ["CCR 156",], cost: 4, plus: true, pool: "Intellect", effects: ["You create a burst of fire within long range, filling an immediate area. Roll against each creature in the area; you inflict 3 damage on a success, or 1 damage on a failure. Flammable objects may catch fire. Each level of Effort applied to increase damage adds 2 damage to each target (instead of 3). Action."], }, 
	{ name: "Fitting In", ref: ["CCR 234",], cost: 2, pool: "Intellect", effects: ["You can blend in among any intelligent creatures other than the upper classes or the authorities. Working or common people can still see you, but those of level 3 or less attach no importance to your presence. If a higher-level creature notices you, you can attempt an Intellect task against their level to retain your unimportant-seeming status. This effect ends if you do something to call attention to your presence or position&mdash;attacking, using an ability, moving a large object, and so on&mdash;or if you use a ten-minute or longer recovery. Action to initiate."], }, 
	{ name: "Flamboyant Boast", ref: ["CCR 183",], cost: 1, pool: "Intellect", effects: ["You boastfully describe an act that you will accomplish, and then as an extra action on your turn, you attempt it. If an average person would find the action difficult (or impossible) and you succeed on it, non-allies who witnessed it are so amazed and confused that all actions they attempt on their next turn are hindered.", "The GM will help you determine whether your boast is something that would significantly impress onlookers.", "If you fail the boasted task, until you use a ten-minute or longer recovery your attempts to affect witnesses (with attacks, special abilities, or skills) are hindered.", "Enabler."], }, 
	{ name: "Flamboyant Swordplay", ref: ["CCR 78",], cost: 1, pool: "Speed", effects: ["You attack in a way that has a greater risk of making an error but gains an additional benefit. Your GM intrusion range for this attack increases by 2 (from 1 on a d20 to 1&ndash;3 on a d20), but if you hit you can choose one of the following additional effects:", ["<em>Daring Lunge:</em> The foe takes +2 damage.", "<em>Disarming Agility:</em> The attack inflicts 1 less damage, but your foe drops something they are holding in one hand (such as a weapon or shield). To retrieve the dropped item, the foe must use an action.", ], "Action.", ], sidebar: "<p><strong>Flamboyant Swordplay GM intrusions:</strong> Your foe's disarmed object strikes your ally for a minor wound. The tip of your weapon gets embedded in the floor or wall, requiring an action to free it. The attack impact jars you, hindering tasks with that hand until you use an action to shake it off.</p>", }, 
	{ name: "Flameblade", ref: ["CCR 148",], cost: 2, pool: "Intellect", effects: ["Your Shroud of Flame covers one weapon you wield in flame, such as a manufactured weapon like a sword or bow. (You could also intensify the flame already shrouding your hand, improving your unarmed attacks.) Any attack you make with the flaming weapon inflicts an additional 1 damage from fire (if the weapon fires projectiles, such as arrows from a bow, this damage applies to the projectiles). The flame ends if you stop holding or carrying the weapon, but as an extra action on your turn you can cover a different weapon you wield with flames. This ability ends automatically when you use a ten-minute or longer recovery. Enabler."], }, 
	{ name: "Flash Across the Miles", ref: ["CCR 215",], cost: 6, plus: true, pool: "Intellect", effects: ["You move as a bolt of lightning almost instantaneously to a location you're familiar with on the same planet. The location must be outdoors or open to the sky.", "<em>Effort:</em> Travel to an indoor location if a lightning bolt could find an open route to that spot from the outside (such as through a window or doorway).", "Action."], }, 
	{ name: "Fleet of Foot", ref: ["CCR 204",], cost: 1, plus: true, pool: "Speed", effects: ["As an extra action on this turn you can move up to a short distance. (This movement doesn't hinder your tasks.)", "<em>Effort:</em> As an extra action on this turn you can move up to a long distance (instead of a short distance); this movement doesn't hinder your tasks.", "Enabler."], }, 
	{ name: "Flex Skill", ref: ["CCR 100",], effects: ["Choose one task (other than an attack or defense skill) on which you will concentrate. For the rest of the day, you're trained in that task. You can't use this ability with a skill in which you're already trained to become specialized. This ability refreshes when you use a ten-hour recovery. Enabler.", ], }, 
	{ name: "Flight Not Fight", ref: ["CCR 196",], effects: ["If you use your action only to move, your dodge tasks are eased until your next turn. Enabler."], }, 
	{ name: "Flurry", ref: ["CCR 55",], cost: 2, pool: "Speed", effects: ["After making a light unarmed attack, as an extra action on your turn you make another light unarmed attack against the same target or a different one. Action.", "<em>At tier 3:</em> You can make a third light unarmed attack as a third action on your turn.", ], sidebar: "<p>A few character abilities allow you to treat your unarmed attack as a medium weapon instead of a light weapon. You can't use Flurry with a medium unarmed attack.</p>", }, 
	{ name: "Foil Danger", ref: ["CCR 113",], cost: 2, pool: "Intellect", effects: ["If you are aware of a danger within immediate distance and succeed on an Intellect roll against its level, you negate that danger for one round. For instance, the danger could be a feature of the landscape like a mud or acid pit, a trap triggered by a wire, or a creature's natural ability (like a snake's venom or a radiation blast from a glowing roach). It could even be a foe's mundane attack or action (such as a weapon attack or their attempt to flip a switch), in which case this ability means they can't take that action on their next turn. Action.", ], }, 
	{ name: "Font of Healing", ref: ["CCR 229",], effects: ["You have healing power within you that others can access with a touch. If an ally uses their action to touch you and spends 2 Intellect, they choose whether they are healed of two minor wounds, healed of a moderate wound, or (if they spend 5 Intellect) healed of a major wound. Once the ally uses this ability, they can't do so again until after they use a ten-hour recovery. Enabler."], }, 
	{ name: "Font of Recovery", ref: ["CCR 229",], effects: ["You have restorative power within you that others can access with a touch. If an ally uses their action to touch you and they spend 1 Intellect, they choose whether they regain 1d6 Might points or regain 1d6 Speed points. Once the ally uses this ability, they can't do so again until after they use a ten-hour recovery. Enabler."], }, 
	{ name: "Frenzy", ref: ["CCR 45",], cost: 1, plus: true, pool: "Intellect", effects: ["While in combat, you can enter a state of frenzy. While in this state, you can't use Intellect points, but you add +1 to your Might Edge and your Speed Edge. This effect lasts as long as you wish, but it ends if no combat is taking place within range of your senses.", "<em>Effort:</em> Ease your allies' attacks against one foe of your choice for the rest of the combat.", "Enabler.", ], }, 
	{ name: "Friend to Intelligent Machines", ref: ["CCR 226",], effects: ["You have an asset to tasks to charm or positively interact with intelligent machines. You can use this asset if you attempt to hack or otherwise gain control of the intelligent machine (whether or not you know it is intelligent when you make the attempt), but never again for that machine regardless of whether the attempt succeeds. Enabler."], }, 
	{ name: "Friend to Small Creatures", dupminor: true, ref: ["CCR 49",], cost: 1, plus: true, pool: "Intellect", effects: ["A type of small creature you name that exists in the surrounding environment (such as insects, rats, bats, or birds) comes under your influence if you succeed on a difficulty 2 Intellect task for outdoor survival. Affected creatures within short range will not harm you or those you designate as allies until you use a ten-minute or longer recovery.", "This ability doesn't work against hostile swarms of creatures of level 3 or higher.", "Your creatures&mdash;even common insects (level 0)&mdash;can swarm in large-enough numbers to hinder the attacks or defenses of a single target, or take some other action.", "You can use this ability to calm or command vines, grass blades, creepers, roots, or branches of nearby plants instead of animals.", "<em>Effort:</em> Your creatures collectively respond to your commands as an NPC ally.", "Action.", ], sidebar: "<p>An NPC ally can provide an asset to one task each round, like perception or defense, unless your GM decides the ally isn't capable of providing that kind of asset.</p>", }, 
	{ name: "From the Shadows", ref: ["CCR 83",], effects: ["Your successful attack against a creature that was previously unaware of your presence deals +3 damage. Enabler.", ], }, 
	{ name: "Frost Bolt", ref: ["CCR 232",], cost: 3, pool: "Intellect", effects: ["You emit a ray of intense cold at a foe within short range. If it hits, it inflicts 4 damage from cold.", "Instead of attacking with a ray, you can increase the intensity of the cold that Ice Armor has on your hands, adding 2 damage to your cold touch and to your melee and ranged weapon damage. This aspect of this ability lasts until you use a ten-minute or longer recovery.", "Action; action to initiate more intense cold."], }, 
	{ name: "Fury", ref: ["CCR 83",], cost: 3, pool: "Might", effects: ["Your melee attacks inflict+2 damage. This ability lasts until you use a ten-minute or longer recovery. Action.", ], }, 
	{ name: "Fusion", ref: ["CCR 185",], effects: ["You can fuse your manifest cyphers and artifacts with your body. You can use these fused devices with First actions (assuming their normal use requires a regular action).", "Action to fuse item with your body or detach it.", ], }, 
	{ name: "Gargantuan", ref: ["CCR 189",], effects: ["When you use Enlarge, if you spend an additional 5 Might, you can grow to a height of 30 feet (9 m). While gargantuan, you add +2 to your Might Edge, you can ignore the first three moderate wounds and first major wound you take, your unarmed attacks inflict 8 damage, and you gain two assets to tasks that are easier for a larger creature to perform (like climbing or wading). You can make an unarmed attack against all creatures in an immediate area (make separate attack rolls for each). While gargantuan, your dodge tasks are hindered by three steps. If you fall prone while gargantuan, you take a moderate wound and require a Last action to get up. Enabler."], }, 
	{ name: "Gather Your Strength", ref: ["CCR 171",], effects: ["Your attack this round deals an additional 2 damage if you make it as a Last action instead of as an action or a First action. Enabler."], }, 
	{ name: "Gentle Warmth", ref: ["CCR 148",], cost: 1, pool: "Intellect", effects: ["You make it up to 30&deg; F (15&deg; C) warmer in an immediate area until you take a ten-minute or longer recovery (this reduces wound severity from cold temperature environments by two steps). This effect is centered on you and moves with you. Action."], }, 
	{ name: "Get Out", ref: ["CCR 112", "CCR 204"], effects: ["If you move at least an immediate distance away from the most obvious threat or toward what promises to offer safety, one task you attempt next round is eased. Enabler.", ], }, 
	{ name: "Go for the Eyes", ref: ["CCR 178",], cost: 2, pool: "Speed", effects: ["You attempt to injure your foe's eye, such as by gouging it or throwing dirt in their face. Make a hindered melee attack; success means their vision is impaired until you use a ten-minute or longer recovery, hindering their tasks that rely on sight (which is most tasks). Action."], }, 
	{ name: "Go to Ground", ref: ["CCR 205",], cost: 4, pool: "Speed", effects: ["As your action, you move up to a long distance and then attempt to hide. You gain an asset on the stealth task to blend in, disappear, or otherwise escape the senses of everyone previously aware of your presence (this movement doesn't hinder your stealth task). Action."], }, 
	{ name: "Golem Grip", ref: ["CCR 146",], cost: 3, pool: "Might", effects: ["You can easily grab foes with your stone fists. Make an eased attack against a foe. If you succeed, you restrict their movement, preventing them from moving away and hindering their physical attacks and attempts to break free.", "If the target attempts to break free as their action, you must make a Might roll to continue holding them.", "If you are holding a target, you can squeeze them automatically on your turn (no roll required), inflicting 4 damage.", "Action.", ], }, 
	{ name: "Golem Stomp", ref: ["CCR 147",], cost: 4, pool: "Might", effects: ["You stomp on the ground with all of your strength, creating a shock wave. Make separate attacks against three creatures in immediate range. Each creature you hit takes 3 damage and you choose if they are pushed out of immediate range or are knocked prone. Action.", ], }, 
	{ name: "Grab", ref: ["CCR 189",], effects: ["If you make an unarmed attack as a Last action, your attack deals 2 less damage and the target is grabbed. All the grabbed target's tasks are hindered, including any attempts to escape your grip. As an attack, you can deal 4 damage to your grabbed foe (no attack roll required).", "While bigger than normal, each increment (Enlarge, Bigger, Huge, Gargantuan, and Colossal) hinders the target's escape attempts by an additional step and increases your grip damage by 1. ", "Last action to initiate; action to squeeze grabbed targets."], }, 
	{ name: "Grandiose Illusion", ref: ["CCR 169",], cost: 8, pool: "Intellect", effects: ["You create a fantastically complex scene of images that fit within a 1-mile (1.6 km) cube, the nearest edge of which must be within immediate range of you. You must be able to see the images when you create them. The images can move in the cube and act in accordance with your desires. They can also act logically (such as reacting appropriately to fire or attacks) when you aren't directly observing them. The illusion includes sound and smell. For example, armies can clash in battle, with air support from machines or flying creatures, on and above terrain of your creation. The illusion lasts until you stop concentrating on it or you use a one-hour or longer recovery. Last action to initiate."], }, 
	{ name: "Granite Wall", ref: ["CCR 157",], cost: 5, plus: true, pool: "Intellect", effects: ["You create a level 5 granite wall within short range. The wall is four 10-foot by 10-foot (3.5 m by 3.5 m) squares, each 1 inch (2.5 cm) thick, arranged as you wish. The wall lasts until you use a one-hour or longer recovery, after which it crumbles to dust.", "<em>Effort:</em> Increase the duration to until you use a ten-hour recovery. Make the duration permanent (this requires three levels of Effort).", "Action."], }, 
	{ name: "Greater Controlled Change", ref: ["CCR 192",], effects: ["It's easier to change into and out of the shape granted by your Beast Form ability. Transforming either way is now a difficulty 2 Intellect task."], }, 
	{ name: "Greater Healing Hand", ref: ["CCR 229",], cost: 4, plus: true, pool: "Intellect", effects: ["You remove all of a touched character's minor wounds, reduce two moderate wounds to minor wounds, or reduce two major wounds to moderate wounds.", "Each time you use Greater Healing Hand, the Intellect point cost increases by 2. The cost returns to its base value after you use a recovery.", "Enabler."], }, 
	{ name: "Greater Necromancy", ref: ["CCR 164",], cost: 5, plus: true, pool: "Intellect", effects: ["You animate the body of a dead creature up to twice your size within short range, creating a level 3 follower that is an undead creature. It has none of the intelligence, memories, or special abilities that it had in life. The creature follows your verbal commands until you use a one-hour or longer recovery, at which time it becomes an inert corpse. You can reanimate it again when it becomes inert, or if it is \"killed\"  by damage (though you may have to spend some time with a needle and thread to reattach detached or loose parts).", "Each animated creature beyond the first costs 2 additional Intellect points (so 7 points for two bodies, 9 points for three, and so on).", "Action to animate."], }, 
	{ name: "Guide Bolt", ref: ["CCR 173",], cost: 3, plus: true, pool: "Intellect", effects: ["When you make an attack with metallic ammunition&mdash;including bullets, thrown knives, metallic bolts, or metal-tipped arrows&mdash;on a target within short range, you can improve the attack's aim and velocity, which grants an asset to the attack and inflicts an additional 3 damage. You can use this ability only once per round.", "<em>Effort:</em> Affect an ally's attack instead of your own if their attack passes within short range.", "Enabler."], }, 
	{ name: "Gut Ripper", ref: ["CCR 66,"], pool: "1 Speed", effects: ["You attack with a knife in a way that has a greater risk of making an error but gains an additional benefit. Your GM intrusion range for this attack increases by 2 (from 1 on a d20 to 1&ndash;3 on a d20), but if you hit you can choose one of the following additional effects:", ["<em>Deep Slice:</em> The foe takes +2 damage.", "<em>Let Them Bleed:</em> The wound bleeds; on your next turn, the foe takes 2 damage that ignores armor.", ], "Action.", ], sidebar: "<p><strong>Gut Ripper GM intrusions:</strong> Your knife gets stuck in your foe and slips from your grasp. Instead of hurting your foe, you accidentally inflict a minor wound on yourself. Your knife sheath is empty and you can't complete the attack.</p>", }, 
	{ name: "Hand to Eye", ref: ["CCR 104",], cost: 2, pool: "Speed or Intellect", effects: ["When you roll to accomplish a task involving manual dexterity or mental agility&mdash;pickpocketing, lockpicking, games involving agility, and so on&mdash;and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.)", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Enabler.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12.", ], }, 
	{ name: "Hands on the Wheel", ref: ["CCR 115",], cost: 2, plus: true, pool: "Intellect", effects: ["When you pilot or drive a mechanical craft and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.) This ability's benefit persists until you take a ten-minute or longer recovery.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Enabler.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12.", ], }, 
	{ name: "Handy", ref: ["CCR 234",], effects: ["You're trained in crafting. Anytime you gain resource points, you gain 1 additional point, but that point can only be spent on repairing or crafting."], }, 
	{ name: "Hard to See", dupminor: true, ref: ["CCR 160", "CCR 205",], effects: ["When you move, you are a blur. It is impossible to make out your identity as you pass by someone at speed.", "In addition, if you do nothing but move on your turn, your dodge and stealth tasks are eased by three steps until your next turn. Enabler."], }, 
	{ name: "Hard-Won Resilience", dupminor: true, ref: ["CCR 216", "CCR 223", "CCR 235",], effects: ["Due to your experiences, you've been exposed to all sorts of terrible things and are developing a general resistance. You can take one more moderate wound than normal. Enabler."], }, 
	{ name: "Healing Beacon", ref: ["CCR 228",], cost: 3, pool: "Intellect", effects: ["One of your allies automatically is healed whenever you use your healing power. Choose one ally to be your healing beacon. Until you use a one-hour or longer recovery, when you use Healing Hand or a similar ability, the beacon ally gets to reduce the severity of one of their own wounds too (as long as it's not a higher severity than the one you're healing). The beacon ally must be within short range of you to gain this healing.", "The beacon ally doesn't gain this effect if you directly heal them.", "Action to initiate."], }, 
	{ name: "Healing Fruit", ref: ["CCR 220",], cost: 1, pool: "Intellect", effects: ["You infuse one fruit or seed with healing magic. A creature that eats it regains 1d6 to a stat Pool of their choice or recovers a minor wound. A creature cannot gain this benefit again until they take a ten-minute or longer recovery. An uneaten fruit automatically loses its healing magic when you use a ten-minute or longer recovery. Action."], }, 
	{ name: "Healing Hand", dupminor: true, ref: ["CCR 48", "CCR 228"], cost: 1, plus: true, pool: "Intellect", effects: ["With a touch, you reduce one wound's severity by one step (unless the target can take no more wounds of that lower severity). A healed minor wound is gone completely, one moderate wound becomes a minor wound, or one major wound becomes a moderate wound.", "Each time you use Healing Hand, the Intellect cost increases by 1. The cost returns to 1 after you take a recovery.", "Last action.", ],  sidebar: "<p>An NPC recipient of Healing Hand regains 5 health.</p>", }, 
	{ name: "Healing Shield", ref: ["CCR 229",], effects: ["You bolster an ally's health with healing power, protecting them against injury. Choose an ally within short range; they gain an asset that they can use on one block roll of their choice, which is expended once they use it. This ability renews when you take a recovery. Enabler."], }, 
	{ name: "Heavy Hands", ref: ["CCR 147",], effects: ["Your unarmed attacks deal an additional 2 damage.", ], }, 
	{ name: "Hedge Magic", ref: ["CCR 154", "CCR 168",], cost: 1, pool: "Intellect", effects: ["You can perform small tricks: temporarily change the color or basic appearance of a small object, cause small objects to float through the air, clean a small area, mend a broken object, prepare (but not create) food, and so on. You can't use Hedge Magic to harm another creature or object. Action."], }, 
	{ name: "Hidden Reserves", ref: ["CCR 206",], effects: ["When you use a one-action recovery, you add +1 to your Might Edge and your Speed Edge until you use a ten-minute or longer recovery. Enabler."], }, 
	{ name: "Hidden Shield", ref: ["CCR 184",], effects: ["You have a shield built into your body (probably your arm) made of a composite of metal and advanced polymers. The shield is concealed until you wish to use it.", "You can freely use the shield in one hand as a light melee weapon.", "As an extra action on your turn, you can make a melee attack with the shield, but if you do so the main attack and shield attack are both hindered.", "If your shield is destroyed due to blocking wounds, you cannot use it until you use your resources to repair it, taking about one day."], }, 
	{ name: "High and Low", ref: ["CCR 180",], effects: ["You and an ally tag-team a foe for greater effectiveness. Choose one ally you can see. If you hit a foe that they've hit with a melee attack this turn, your attack inflicts an additional 2 damage. Enabler."], }, 
	{ name: "High-Speed Interface", ref: ["CCR 184",], effects: ["By directly plugging into a machine or device within immediate range, you ease tasks to identify and operate it.", "The interface allows you to interact with the device as fast as it can process information, which is usually faster than a regular person could manipulate the device (such as through a keyboard or voice interface)."], }, 
	{ name: "Hindering Throw", ref: ["CCR 66",], cost: 3, pool: "Speed", effects: ["Your successful ranged knife attack sticks in the target, catching in their clothing, their flesh, the floor, or another adjacent surface in a way that deals normal damage and hinders their tasks on their next turn.", "Action.", ], }, 
	{ name: "Hitting Harder", ref: ["CCR 208",], effects: ["You inflict an additional 1 damage with unarmed attacks."], }, 
	{ name: "Holy Succor", ref: ["CCR 58",], cost: 1, plus: true, pool: "Intellect", effects: ["While an ally within immediate range of you has at least three moderate wounds or at least one major wound, you can extend your divine grace, granting them one free level of Effort they can apply each round to an attack or defense roll. The divine grace they are afforded lasts until the wounds are healed or they use a ten-minute or longer recovery.", "Each time you use Holy Succor, the Intellect cost increases by 1. The cost returns to 1 after you take a recovery.", "Enabler.", ], }, 
	{ name: "Horde Fighting", ref: ["CCR 194",], effects: ["When two or more foes attack you at once in melee, you can use them against each other. Each round, choose whether you gain an asset to block and dodge rolls against them or to attack rolls against them. Enabler."], }, 
	{ name: "Hover", ref: ["CCR 136", "CCR 155",], cost: 2, pool: "Intellect", effects: ["You float slowly into the air. If you concentrate, you can control your movement to remain motionless in the air or float up to a short distance as your action; otherwise, you drift with the wind or with any momentum you have gained. This effect lasts until you use a ten-minute or longer recovery. Action.", ], }, 
	{ name: "HUD", ref: ["CCR 184",], cost: 0, plus: true, pool: "Intellect", effects: ["You have a heads-up display (HUD) system that helps you perceive your environment. You can see in very dim light as though it were bright light. You can see in total darkness as if it were very dim light. You can see up to a short distance through fog, smoke, and other obscuring phenomena.", "<em>Effort:</em> You can use Effort in varying amounts to gain alternate effects as follows:", ["<em>Combat HUD:</em> If you use two levels of Effort, the HUD outlines your foes and predicts their attacks this round, giving you an asset on your next block or dodge task.", "<em>Magnifier HUD:</em> If you use one level of Effort, for the next two rounds the HUD magnifies your vision range to 5 miles (8 km) and allows you to see through level 4 or lower basic materials (such as wood, concrete, plastic, and stone) to a short distance in false color images.", "<em>Scanner HUD:</em> If you use two levels of Effort, for the next two rounds the HUD lets you see through level 4 or lower special materials (such as solid lead or an opaque force field) to an immediate distance in false color images. If you succeed on an Intellect task, you can see through level 5 or higher materials.", ], "Enabler.", ], }, 
	{ name: "Huge", ref: ["CCR 189",], effects: ["When you use Enlarge, if you spend an additional 2 Might, you grow to a height of 16 feet (5 m). While huge, you add +1 to your Might Edge, you can ignore the first three moderate wounds you take, your unarmed attacks inflict 7 damage, and you gain an asset to tasks that are easier for a larger creature to perform (like climbing or wading). While huge, your dodge tasks are hindered by two steps. Enabler."], }, 
	{ name: "Hunter's Determination", ref: ["CCR 194",], effects: ["When you attack a foe and miss, you gain an asset on your attacks and defenses against that foe. If you miss them again, you gain a second asset against them. You lose these assets if you change targets or the combat ends. Enabler."], }, 
	{ name: "Hunter's Drive", ref: ["CCR 195",], cost: 5, pool: "Intellect", effects: ["You gain greater prowess in the hunt. If your quarry is within 10 miles (16 km) of you, your movement rate is doubled if you are trying to reach them.", "You gain an additional asset on tasks related to your quarry.", "This ability lasts until you use a ten-minute or longer recovery.", "Enabler."], }, 
	{ name: "Hurl Flame", ref: ["CCR 148",], cost: 2, pool: "Intellect", effects: ["While your Shroud of Flame is active, you can reach into your halo and hurl a handful of fire at a target within short range, inflicting 4 fire damage if you succeed on an Intellect attack. Action."], }, 
	{ name: "Ice Armor", ref: ["CCR 232",], cost: 1, pool: "Intellect", effects: ["You cover your body in a sheen of ice until you use a ten-minute or longer recovery, easing your Might defense rolls to block attacks.", "In addition, reduce the severity of wounds from cold and ice effects used against you by one step (major to moderate, moderate to minor, minor to none). For example, if you are hit by a blast of cold that causes a moderate wound, you instead take a minor wound.", "You can make a \"cold touch\"  light unarmed attack against a foe, inflicting 2 cold damage from the ice armor if your attack succeeds.", "Enabler."], }, 
	{ name: "Ice Creation", ref: ["CCR 233",], cost: 4, plus: true, pool: "Intellect", effects: ["You create an object of your size or smaller that is made of level 3 ice. It is crude and can have no moving parts, so you can make a sword, a shield, a small wall, a short ladder, and so on. If you aren't within short range of the object, it breaks or melts once you use a ten-minute or longer recovery.", "You can choose this ability multiple times. Each additional time you choose it, you double the base size of the object you can create.", "<em>Effort:</em> Double the maximum size of the object you can create. Increase the distance the object can be from you by one range category.", "Action."], sidebar: "<p>A wall of ice that is about 5 feet by 5 feet and 1 inch thick (1.5 m by 1.5 m and 3 cm thick) is about the same size as a person.</p>", }, 
	{ name: "Ice Monster", ref: ["CCR 233",], cost: 6, pool: "Intellect", effects: ["You create an automaton made of snow or ice that is your general shape and size, lasting until you use a ten-minute or longer recovery. This NPC ally acts as you direct each round. Directing the monster is an action, and you can command it only when you are within long range of it. Without a command, the monster continues to follow your previous command. You can also give it a simple programmed action, such as \"Wait here and attack anyone who comes within short range until they're dead.\"  Action to create; action to direct."], sidebar: "<p><strong>Automaton:</strong> level 5; Armor 1; bash attacks deal 6 damage (half from intense cold)</p>", }, 
	{ name: "Ice Slide", ref: ["CCR 232",], cost: 2, pool: "Intellect", effects: ["You create a path of smooth ice from yourself to a location within long range and safely slide to there. You must have a clear and unobstructed path to that location, but otherwise it can be above, below, or even across a gap. The ice melts away after a few seconds. Action."], }, 
	{ name: "Identify Machine", ref: ["CCR 150",], cost: 1, pool: "Intellect", effects: ["You understand the purpose, function, level, and status of a single robot or powered device within immediate range. Last action."], }, 
	{ name: "Identify Magic", ref: ["CCR 156",], cost: 3, pool: "Intellect", effects: ["If you have sensed magic using the tier 1 ability, you can gain more specifics about what you sense: the level of the magic, the source of the magic (a spellcaster, a magical creature, an ongoing magical effect, or an enchanted object), and the general effects of the magic at play. Last action."], }, 
	{ name: "Identify Psionics", ref: ["CCR 162",], cost: 3, pool: "Intellect", effects: ["If you have sensed psionics using the tier 1 ability, you can gain more specifics about what you sense: the level of the effect, the source of the effect (a creature or an ongoing psychic effect), and the general effects of the psionics at play. Last action."], }, 
	{ name: "Idol", ref: ["CCR 67",], cost: 3, plus: true, pool: "Intellect", effects: ["At the conclusion of a ten-minute ritual, you create an idol that persists until its magic is exhausted. The idol could be a symbol etched in stone, a figurine woven from twigs, a small carving, or something similar. The idol must be set on a solid surface with a nod toward being protected from the elements, such as being set in a tree hollow, at the base of a wall, or inside a structure.", "The idol's holy connection to the ineffable provides your choice of one of the following fixed benefits. Whoever prays to the idol as their action gains this benefit whether you are present or not. The idol has a depletion of 1&ndash;2 in 1d6; roll each time it grants its benefit to someone.", [["<em>Bestial Fury:</em> The supplicant is infused with a latent spirit of bestial fury. The fury activates when the supplicant loses their temper or they choose to rouse it as an extra action on their turn.", "When the fury emerges, the character visibly changes into a swollen, rage-filled version of themselves. While furious, they can't spend Intellect points for any reason other than to try to regain their composure. They attack any and every living creature within short range, rolling twice for each attack and taking the better result. The fury lasts until they use a ten-minute or longer recovery or they use an action to succeed on a difficulty 2 Intellect task. When the supplicant reverts to normal, the physical toll of the change deals two moderate wounds. (A furious NPC supplicant is effectively one level higher and takes 6 damage when the fury ends.)"], "<em>Healing:</em> The severity of one of the supplicant's wounds is reduced by one step.", ["<em>Spiritual Cleanse:</em> The supplicant is freed from one curse, demonic possession, or similar spiritual affliction of level 5 or less.", "<em>Effort:</em> You can carry the idol with you.", "Ten minutes to initiate.", ], ], ], }, 
	{ name: "Ignore Affliction", ref: ["CCR 207",], cost: 5, pool: "Might", effects: ["Until you use a one-hour or longer recovery, you ignore any unwanted condition or affliction (such as disease, paralysis, mind control, broken limb, and so on, but not damage) and act as if it does not affect you. If the condition would normally last less than an hour, it is entirely negated. You can use this ability even if the condition prevents you from taking actions. Action."], }, 
	{ name: "Ignore the Pain", ref: ["CCR 206",], effects: ["You ignore one step of hindrance from one major wound or from having taken all your moderate wounds.", "You can choose this ability up to three times. Each time you choose it, it allows you to ignore another step of hindrance caused by wounds.", "Enabler."], }, 
	{ name: "Illusion Cocoon", ref: ["CCR 169",], cost: 4, pool: "Intellect", effects: ["With a successful Intellect attack, you wrap a target within long range in a full-sensory illusion so all-encompassing that they are helpless, losing their turn each round until you use a ten-minute or longer recovery, or until they take direct physical damage. Action."], }, 
	{ name: "Illusory Disguise", ref: ["CCR 168",], cost: 2, plus: true, pool: "Intellect", effects: ["You appear to be someone or something else, roughly of your size and shape, until you use a one-hour or longer recovery. Once created, the disguise requires no concentration.", "<em>Effort:</em> Disguise one additional creature (1 Intellect); if you lose sight of a disguised creature, they lose their disguise.", "Action."], }, 
	{ name: "Illusory Selves", ref: ["CCR 169",], cost: 4, pool: "Intellect", effects: ["You create four illusions of yourself within short range. These each last until you use a ten-minute or longer recovery. You mentally direct their actions; they aren't mirror images, and each one can do different things. If an image is struck violently, you choose whether it freezes motionless or disappears permanently. Action to initiate."], }, 
	{ name: "Imperturbable", ref: ["CCR 222",], effects: ["You have a sense of calm around you that affects others as well. You cannot be forced to flee against your will (such as from magical fear) and the defense rolls of allies within immediate range against such attacks are eased."], }, 
	{ name: "Improved Apportation", ref: ["CCR 201",], cost: 6, pool: "Intellect", effects: ["You pull a creature of level 3 or lower to you across almost any distance. You can choose a kind of creature that you've already encountered, or (once between each ten-hour recovery) you can let the GM randomly determine what creature appears. The creature appears next to you. They have no memory of anything before being called by you, but they have the general knowledge of a typical creature of their type. The creature is open to communicating and helping you. Action."], sidebar: "<p><strong>d20: Random Creature</strong></p><ul class='list-unstyled og-hang'><li><strong>1&ndash;16:</strong> Level 3</li><li><strong>17&ndash;18:</strong> Level 4</li><li><strong>19&ndash;20:</strong> Level 5</li></ul>", }, 
	{ name: "Improved Companion", ref: ["CCR 167",], effects: ["Increase the level of your beast companion (and their modifiers, if any) by 1. You can select this ability up to three times. Each additional time you select it, increase your beast's level by 1."], }, 
	{ name: "Improved Dashing Defense", ref: ["CCR 183",], effects: ["One ally within immediate range who is using a light or medium weapon gains the benefit of Dashing Defense until your next turn. Enabler."], }, 
	{ name: "Improved Follower", ref: ["CCR 199",], effects: ["One of your followers increases their overall power, knowledge, and ability. Choose one of your followers. Their level increases by 1, their existing modifications each increase by 1, and they gain a new modification (equal to their base level plus 1).", "You can take this ability once per tier, each time improving a follower (the same one or a different one).", ], }, 
	{ name: "Improved Ice Armor", ref: ["CCR 233",], effects: ["Your Ice Armor eases your Might defense rolls to block attacks by an additional step.", "The damage from your Ice Armor's cold touch, Frost Bolt, and Winter's Grip increases by 1."], }, 
	{ name: "Improved Machine Companion", dupminor: true, ref: ["CCR 116", "CCR 227",], effects: ["You create, find, or otherwise acquire a level 5 intelligent machine companion follower that accompanies you and acts as you direct. If it's destroyed, it can be restored using your resources after a few days of labor. If you already have a lower-level machine companion, you choose whether it is upgraded to level 5 or you retain it as is and gain a new level 5 companion.", ], }, 
	{ name: "Improved Necromancy", ref: ["CCR 164",], effects: ["You can use Basic Necromancy to animate multiple bodies at the same time. Each animated creature beyond the first costs 1 additional Intellect point (so 4 points for two bodies, 5 points for three, and so on).", "Your range for Basic Necromancy (including when animating multiple bodies) increases to short."], }, 
	{ name: "Improved Speaker", ref: ["CCR 164",], effects: ["When using Speaker for the Dead, for each additional Intellect point you spend beyond the initial ability cost, you can ask one additional question. Enabler.", ""], }, 
	{ name: "Improved Stone Body", ref: ["CCR 147",], effects: ["You can take one more moderate wound than normal.", ], }, 
	{ name: "Improvise", ref: ["CCR 171", "CCR 235"], cost: 3, pool: "Intellect", effects: ["If you aren't trained in a task, you can improvise to gain an asset on that task&mdash;a tool you cobble together, sudden insight, or just dumb luck. The asset lasts until you use a ten-minute or longer recovery. Enabler.", ], }, 
	{ name: "Incapacitating Attack", ref: ["CCR 178",], cost: 4, pool: "Speed", effects: ["Your successful attack also briefly incapacitates the target. Until you use a ten-minute or longer recovery (or until someone uses an action to give them aid), they are prone, unable to stand or crawl more than an immediate distance each round, and their defenses are hindered. Enabler."], }, 
	{ name: "Increasing Determination", dupminor: true, ref: ["CCR 207",], effects: ["If you fail at a noncombat physical task (such as pushing open a door or climbing a cliff) and then retry the task, the task is eased. If you fail again, you gain no special benefits. Enabler."], }, 
	{ name: "Incredible Health", ref: ["CCR 115",], effects: ["Due to some unusual circumstances&mdash;alien physiology, injection of nanobots, exposure to strange radiation, your natural immune system coming into its own, or something else&mdash;you are now immune to diseases (and, if youwish, mutations) of any kind.", ], }, 
	{ name: "Incredible Instinct", ref: ["CCR 140",], effects: ["If you are attacked by surprise, whether by a creature, a device, or simply an environmental hazard (such as poison gas from a vent), you move an immediate distance before the attack occurs. If moving prevents the attack, you are safe. If the attack can still potentially affect you (the attacking creature can move to keep pace, the attack fills an area too big to escape, and so on), your defense against it is eased.", "When you roll for initiative and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.)", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12.", ], }, 
	{ name: "Incredible Running Speed", ref: ["CCR 205",], effects: ["You move much farther than normal in a round.", "When using Fleet of Foot, all distances you move are doubled.", "If you run a long distance as your entire action, all your tasks are hindered by one step until the end of your next turn (instead of two steps).", "As a Last action, you can run up to 500 feet (150 m), but all your tasks are hindered by two steps until the end of your next turn.", "Enabler."], }, 
	{ name: "Incredible Velocity", ref: ["CCR 140",], effects: ["You can move a long distance as a First action (instead of moving only an immediate distance as a First action), but your tasks are hindered by two steps until the end of your next turn.", "Alternatively, you can take an action, then move a short distance as part of your turn (instead of only an immediate distance), without your tasks being hindered until the end of your next turn.", "If you do nothing but move for three actions in a row, you accelerate greatly and can move up to 700 miles per hour (1,100 kph) for up to about ten minutes.", ], }, 
	{ name: "Infer Thoughts", ref: ["CCR 219",], cost: 4, plus: true, pool: "Intellect", effects: ["If you interact with or study a target of level 4 or less for at least a round, you gain so much insight into its surface thoughts that you're essentially reading its mind (no roll required), even if the subject doesn't want you to. You must be able to see the target. Once you have gained a sense of what it's thinking&mdash;through its body language, its speech, and what it does and doesn't say&mdash;you can continue to infer the target's surface thoughts until you use a ten-minute or longer recovery as long as you can still see and hear the target.", "<em>Effort:</em> Increase the maximum level of a target you can affect by 1.", "Action to prepare; action to initiate."], }, 
	{ name: "Inferno Trail", ref: ["CCR 149",], cost: 6, pool: "Intellect", effects: ["Your Shroud of Flame leaves a trail of fire in your wake. The trail matches your path, creating a wall of flame about 6 feet (2 m) high that inflicts 5 damage on any creature that passes through it. If targets are flammable, they also catch on fire for an additional 1 damage each round until they spend a round putting out the fire. You can suppress the trail of fire when you wish as an extra action on your turn (and restart it the same way) or end the overall effect early. Otherwise, the effect ends after you use a ten-minute or longer recovery. Action."], }, 
	{ name: "Information Gathering", ref: ["CCR 227",], cost: 5, pool: "Intellect", effects: ["You speak wirelessly with any or all non-intelligent machines within 1 mile (1.6 km). You can ask one basic question about themselves or anything happening near them and receive a simple answer. For example, while in an area with many machines, you could ask about the location of a specific creature or individual, and if they are within range, one or more machines will probably provide the answer. Action."], }, 
	{ name: "Insect Eruption", ref: ["CCR 221",], cost: 6, pool: "Intellect", effects: ["You call a swarm of insects to obey you until you use a ten-minute or longer recovery. The insects appear within long range and do as you command. They automatically hinder any number of foes within range (no rolls required).", "If you use an action to concentrate the swarm on an immediate area, you can make an Intellect attack on each foe in that area; success means affected creatures take 2 damage.", "You can use the swarm to move heavy objects through collective effort, eat through wooden walls, and perform other actions suitable for a supernatural swarm.", "You can't use this ability in an area where insects cannot reach, such as a sealed room.", "Action to initiate."], }, 
	{ name: "Inspire Action", ref: ["CCR 84", "CCR 116",], cost: 4, pool: "Intellect", effects: ["If one ally can see and easily understand you, you can instruct that ally to take an action. If the ally chooses to take that exact action, they can do so as an additional action immediately. Doing so doesn't interfere with the ally taking a normal action on their turn. Action.", ], }, 
	{ name: "Inspiring Defense", ref: ["CCR 223",], effects: ["When you succeed on a defense roll against an attack that would have dealt you an especially powerful blow or effect as determined by your GM, you regain 4 points to your Might Pool. Each use of this ability after the first time restores 1 fewer Pool point; this renews after you take a ten-hour recovery. Enabler."], }, 
	{ name: "Inspiring Display", ref: ["CCR 208",], cost: 2, pool: "Might", effects: ["After succeeding at a task that depends on brute force (such as smashing down a barred door, tearing open a locked container, lifting or moving a heavy object, or striking someone with a melee weapon), choose an ally who saw you. A chosen PC regains 2 points to a Pool of their choice; a chosen NPC regains 2 health. Enabler."], }, 
	{ name: "Inspiring Ease", ref: ["CCR 170", "CCR 174"], effects: ["Through stories, songs, art, or other forms of entertainment, you inspire your allies. When you and any number of allies spend a ten-hour recovery together (yours or theirs), the allies are inspired by you. Once per day, each inspired ally can ease one task. This inspiration remains while you remain within a long distance of them. The inspiration is suspended at greater distances, but resumes automatically if you get within range. The inspiration ends if you use a ten-hour recovery while away from the ally. Ten-hour recovery to initiate."], }, 
	{ name: "Inspiring Performance", ref: ["CCR 47",], cost: 2, plus: true, pool: "Intellect", effects: ["With a rousing speech or inspiring music, you lift the spirits of and inspire three allies who can hear and see you. While you continue to speak or perform each round as your action, affected allies gain an asset in a task you choose (combat or noncombat) related to your performance.", "Even after the effect ends, affected allies are so inspired that they add +1 to their next recovery.", "<em>Effort:</em> Affect three additional allies.", "Action.", "<em>At tier 3:</em> Affected allies add +2 to their next recovery.", ], }, 
	{ name: "Inspiring Suggestion", ref: ["CCR 92", "CCR 113", "CCR 134", "CCR 174", "CCR 198",], cost: 2, pool: "Intellect", effects: ["When you make a helpful suggestion to an ally, they have a better chance of succeeding at what they're doing. Choose an ally who can see and understand you, then suggest a specific action for them to take, such as \"attack the leader\" or \"climb the wall.\" If the ally chooses to take that exact action, they gain two assets on that task. First action.", ], }, 
	{ name: "Inspiring Trust", ref: ["CCR 210",], cost: 1, pool: "Intellect", effects: ["Allies in your presence that share your sense of good versus evil add +1 to their recoveries. Enabler."], }, 
	{ name: "Intangible", ref: ["CCR 140",], effects: ["You (including your clothing and equipment) can pass through physical barriers of up to level 5 at a rate of 3 feet (1 m) per round as your action. You can perceive while phased within a barrier or object, which allows you to peek through walls. You can't pass through energy barriers.", "In addition, you could take an action, and instead of moving up to an immediate distance afterward, you can phase through a physical barrier. (You can't use this ability as a First action.)", "<em>Effort:</em> Increase the maximum level of the barrier you can pass through by 1. Use the ability as an enabler to ease your dodge defense roll against an attack by one step.", "Action; enabler if used defensively.", ], }, 
	{ name: "Investigative Knack", ref: ["CCR 218",], cost: 2, plus: true, pool: "Intellect", effects: ["You have a keen eye for detail and can pick up subtle cues that indicate someone is lying or withholding information.", "When you study an area for clues or converse with (or interrogate) someone for information, if you roll a 9 or less on your perception, interaction, or recognizing motive task, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.) This ability lasts until you use a ten-minute or longer recovery.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Action to initiate.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12."], }, 
	{ name: "Invisibility to Evil", ref: ["CCR 210",], cost: 2, plus: true, pool: "Intellect", effects: ["You or a touched ally become becomes effectively invisible to undead, demons, or creatures of similar ilk of level 3 or less until you use a ten-minute or longer recovery. This effect ends if the target does something to reveal their presence or position&mdash;attacking, using an ability, moving a large object, and so on.", "<em>Effort:</em> Increase the maximum level of foes who can't perceive the invisible target by 1.", "Action to initiate."], }, 
	{ name: "Invisibility", dupminor: true, ref: ["CCR 84", "CCR 169", "CCR 197",], cost: 4, plus: true, pool: "Intellect", note: "Magic",  effects: ["You become invisible. This effect ends if you do something to reveal your presence or position&mdash;attacking, using an ability, moving a large object, and so on&mdash;or you use a ten-minute or longer recovery.", "An NPC's invisibility lasts until you use a ten-minute or longer recovery.", "<em>Effort:</em> Use this ability on a creature you touch; that creature becomes invisible (instead of yourself), lasting until they use a ten-minute or longer recovery.", "Action.", ], sidebar: "<p>An invisible character's attack is eased by two steps. Attacks on an invisible character are hindered by four steps or are nearly impossible if the attacker has no idea where they might be.</p>", }, 
	{ name: "Invisible Knack", ref: ["CCR 140",], effects: ["When you wish, you (including your clothing and equipment) becomes invisible. The effect ends if you do something to reveal your presence or position&mdash;attacking, using an ability, moving a large object, and so on&mdash;but you can become invisible again on your next turn.", "If you use an action, you can confer the invisibility effect on a creature or object you touch instead of, or in addition to, yourself. This invisibility lasts until the affected target does something to reveal their presence, the object is struck or forcibly moved, or they or you use a ten-minute or longer recovery.", "<em>Effort:</em> Affect a creature or object within long range instead of touch range.", "Enabler for yourself; action for another creature or object.", ], sidebar: "<p>An invisible character's attack is eased by two steps. Attacks on an invisible character are hindered by four steps or are nearly impossible if the attacker has no idea where they might be.</p>", }, 
	{ name: "Iron Fist", ref: ["CCR 211",], effects: ["You inflict an additional 3 damage with unarmed attacks.", ], }, 
	{ name: "Iron in the Blood", ref: ["CCR 173",], effects: ["You have honed your magnetic senses, allowing you to sense and manipulate the trace amounts of iron in flesh and blood. You can now move creatures with Move Metal and attack them directly with Rend Metal (inflicting 5 damage with a successful attack) and Command Metal (inflicting 7 damage), although your Intellect attack is hindered when doing so."], }, 
	{ name: "Iron Punch", ref: ["CCR 173",], cost: 8, plus: true, pool: "Intellect", effects: ["You magnetically pick up a heavy metallic object within short range and hurl it at a target within short range. With a successful Intellect attack, you deal 10 damage to the target and the object.", "<em>Effort:</em> Affect an additional target that is adjacent to the first target.", "Action."], sidebar: "<p>Diamagnetism supersedes Magnetize, so if you have both, you can exchange Magnetize for another equal or lower-tier ability from this focus.</p>", }, 
	{ name: "Joy in Small Things", ref: ["CCR 170",], effects: ["When you learn or figure out something important (as determined by your GM), you regain 4 points to your Intellect Pool. Each use of this ability after the first time restores 1 fewer Pool point; this renews after you take a ten-hour recovery. Enabler."], }, 
	{ name: "Jump Attack", dupminor: true, ref: ["CCR 84", "CCR 209",], cost: 5, plus: true, pool: "Might", effects: ["You jump up to 4 feet (1 m) into the air and make a melee attack against a foe on the way up or down. If you hit, you inflict damage and can attempt a difficulty 4 Might roll to inflict an additional 4 damage and knock them prone.", "<em>Effort:</em> Add 2 feet to the jump height and +2 damage to the attack (whether or not you knock the target prone).", "Action.", ], }, 
	{ name: "Keen Eye", ref: ["CCR 152", "CCR 158", "CCR 190",], effects: ["You can see perfectly well half again as far as normal. You ignore attack and perception penalties for fog, smoke, mist, dim light, and very dim light."], }, 
	{ name: "Knock Out", ref: ["CCR 178", "CCR 181",], cost: 5, plus: true, pool: "Might", effects: ["Make a hindered melee attack against a foe of level 3 or lower. If the attack hits, instead of inflicting damage you knock them unconscious until you use a ten-minute or longer recovery (or someone uses an action to bring them back around).", "<em>Effort:</em> Increase the maximum level of the foe you can affect by 1.", "Action."], }, 
	{ name: "Knowing the Audience", ref: ["CCR 174",], cost: 1, pool: "Intellect", effects: ["You ascertain the general mood of a group of people within short range. If they are trying to conceal that information, you may attempt a difficulty 3 task to learn the truth of their attitude. On the following round, you also gain an asset to a single recognizing motive task regarding one person in that group to gain more detail and information about that individual. Last action."], }, 
	{ name: "Knowing the Unknown", ref: ["CCR 219",], cost: 6, pool: "Intellect", effects: ["By accessing the resources appropriate to your character, you can ask the GM one question and get a general answer. The GM assigns a level to the question, so the more obscure the answer, the more difficult the task. Generally, knowledge that you could find by looking somewhere other than your current location is level 1, and obscure knowledge of the past is level 7. Gaining knowledge of the future is impossible. Action."], }, 
	{ name: "Knowledge Expert", ref: ["CCR 116",], effects: ["You are trained as an expert in two broad science and/or knowledge skills (such as mathematics, physics, engineering, geology, history, hacking, and the like) that you are already specialized in. Alternatively, you can increase your skill in two science or knowledge skills (from no skill to trained, or from trained to specialized). Enabler.", ], }, 
	{ name: "Knowledge of Nature", ref: ["CCR 194",], effects: ["While in the wilderness, you can always find edible food of some kind and potable water if it exists. Likewise, you can find medicinal herbs or natural remedies that grant you an asset on treatments to heal wounds, disease, or poison."], }, 
	{ name: "Lead by Inquiry", ref: ["CCR 219",], effects: ["When you and any number of allies spend a ten-hour recovery together (yours or theirs), the allies are treated as if trained in perception and recognizing motive. This benefit remains while you remain within a long distance of them. The benefit is suspended at greater distances, but resumes automatically if you get within range. The benefit ends if you use a ten-hour recovery while away from the allies. Enabler."], }, 
	{ name: "Lend Animal Shape", ref: ["CCR 160",], cost: 6, plus: true, pool: "Intellect", effects: ["You change into an animal as if using Animal Shape, and one willing creature within immediate range also transforms into an animal of that type (bear, tiger, wolf, and so on) until you use a ten-minute or longer recovery, as if they were using your Animal Shape ability. All creatures transforming with you must be your size or smaller. A creature can revert to its normal form as an action, but it cannot then change back into the animal form. One creature (whether you or someone else) changing form does not affect any other creature affected by this ability.", "<em>Effort:</em> Affect an additional creature.", "Action."], }, 
	{ name: "Lethal Capability", dupminor: true, ref: ["CCR 116", "CCR 153", "CCR 160", "CCR 181", "CCR 192", "CCR 213", "CCR 223",], effects: ["You've mastered how to kill with a particular attack. You inflict an additional 5 damage with attacks of one specific type, such as your a swing of an axe, a thrown knife, a shot with a blaster or firearm, unarmed attacks, your claws, your bite, a tail slap, or some other specific attack you prefer.", "You can gain this ability more than once. Each time you do, choose a different specific attack.", ], }, 
	{ name: "Lethal Strike", ref: ["CCR 178", "CCR 195", "CCR 203", "CCR 225",], cost: 6, pool: "Speed", effects: ["With a swift and sudden melee or ranged weapon attack, you strike a foe in a vital spot. If you hit, you inflict an additional 7 damage. Action."], }, 
	{ name: "Letting Their Guard Down", ref: ["CCR 196",], cost: 1, pool: "Intellect", effects: ["If you interact with an intelligent NPC and successfully use disguise or deception against them, they reveal some minor additional information, such as which door is never locked, how many guards are on the upper level, or which way the king plans on ruling on a matter before him. Enabler."], }, 
	{ name: "Life Lessons", ref: ["CCR 170",], effects: ["You've learned a little of this and that, and you have a knack for getting things done. Choose any two noncombat skills. When you use Effort on either of those skills, you can apply a free level of Effort. Enabler."], }, 
	{ name: "Light Step", ref: ["CCR 230",], effects: ["You can reduce the weight of your footprints to about the weight of a piece of paper, which means you don't trigger pressure plates or similar weight-based devices.", "You also reduce your falling damage by one wound severity."], }, 
	{ name: "Lighting a Fire Under Them", ref: ["CCR 198",], effects: ["You issue a command to a follower or ally within short range and that person's next action is a First action (if the action would have been Last, it happens normally). You can't use this ability again until after your next ten-minute or longer recovery. Last action."], }, 
	{ name: "Lightning Bolt", ref: ["CCR 80",], cost: 1, pool: "Intellect", effects: ["You unleash a bolt of lightning at a target within long range, inflicting 6 damage with a successful attack roll. Alternatively, work with your GM if you want your bolt to be composed of a different kind of energy or use the same energy type as that suggested by your focus. For instance, if your focus is Blazes With Fire, this ability could produce a ray of fire and be called Fiery Bolt. Last action.", "<em>At tier 3:</em> The bolt branches and also attacks a second target in short range of the first target (make separate attack rolls for each).", ], }, 
	{ name: "Lightning Hand", ref: ["CCR 214",], cost: 1, pool: "Intellect", effects: ["Your hands crackle with electricity, allowing you to make either one touch attack or one long-range lightning blast attack, inflicting 4 damage.", "Alternatively, if you wield a weapon, it crackles with electricity and inflicts an additional 1 damage. This version of the ability lasts until you use a ten-minute or longer recovery.", "Action for touch; enabler for weapon."], sidebar: "<p>Touch attacks are effectively light unarmed attacks, and therefore are eased.</p>", }, 
	{ name: "Locate Machine", ref: ["CCR 226",], cost: 2, pool: "Intellect", effects: ["You can track down a specific machine from miles away. Choose a machine, robot, or intelligent device you've identified, either finding identifying information about them through network research or because you've personally interacted with them. If you succeed on an Intellect attack, you can sense their general direction or distance as long as they are within 10 miles (16 km) of you if you spend an action concentrating, checking your device, or something similar. If they are beyond that distance, you can only sense their general direction. A machine that becomes aware of your trace attempts to remove it; you must succeed on a new Intellect attack roll every ten hours to maintain the trace.", "Action to initiate; action to update directional and/or distance information."], }, 
	{ name: "Locked Skill", ref: ["CCR 187",], effects: ["When you activate Data Processor, choose one of the skills it gives you training in; this is your \"locked\"  skill. Your training in the locked skill lasts until you use a ten-hour recovery.", "If you activate Data Processor again before you use this recovery, you can reset the duration of your locked skill or choose another skill to be your locked skill.", "You can select this ability up to three times. Each time you select it, your maximum number of locked skills increases by one.", "Enabler."], }, 
	{ name: "Longstrider", ref: ["CCR 188",], effects: ["When you are larger than normal, your long-term movement speed (not your movement each round, but when walking, running, or hiking over a minute or longer) is doubled thanks to your bigger stride and your greater endurance."], }, 
	{ name: "Lower Temperature", ref: ["CCR 232",], cost: 1, pool: "Intellect", effects: ["You make it up to 30&deg; F (15&deg; C) cooler in an immediate area until you make a ten-minute or longer recovery (this reduces wound severity from warm temperature environments by two steps). This effect is centered on you and moves with you. Action."], }, 
	{ name: "Machine Companion-v1", dupmajor: true, ref: ["CCR 115",], effects: ["A level 3 robot of your size or smaller (purchased or built by you) accompanies you and follows your instructions as an intelligent follower. You and your GM must work out the details of your robot. If the robot is destroyed, it can be restored using your resources and a few days of tinkering.", "If you already have a robot assistant, machine companion, or similar device, you either gain a new one or upgrade the current one by 1 level, whichever you choose.", ], }, 
	{ name: "Machine Companion-v2", dupmajor: true, ref: ["CCR 227",], effects: ["You create, find, or otherwise acquire a level 3 intelligent machine companion follower that accompanies you and acts as you direct. If it's destroyed, it can be restored using your resources if you spend a few days tinkering."], }, 
	{ name: "Machine Control", ref: ["CCR 227",], cost: 2, plus: true, pool: "Intellect", effects: ["You use your knowledge of robot commands and controls against a robot, mechanized system, or intelligent machine within short range (or within short range of a device you can remotely transmit signals from). Choose whether you want to command one creature or deactivate multiple creatures, and make separate Intellect attack rolls against each target. If your roll is less than a 6, treat the roll as a 6. (This means you don't get a GM intrusion if you roll a 1.)", ["<em>Command:</em> Success means you take active control of your target until you use a ten-minute or longer recovery, commanding it to do simple tasks on your behalf while you concentrate.", "<em>Deactivate:</em> Success means you make affected targets unable to take actions for as long as you concentrate on them.", ], "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Action to initiate.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 9."], }, 
	{ name: "Machine Enhancement", ref: ["CCR 187",], effects: ["Anytime you use Effort on an Intellect action, add your choice of the following options: a free level of Effort on the action or a minor effect on the action. Enabler."], }, 
	{ name: "Machine Not Flesh", ref: ["CCR 100",], effects: ["You are a sophisticated, intelligent machine with a generally humanoid shape; work with your GM to determine specifics. This gives you the following benefits:", ["You gain an additional +4 points to permanently distribute among your Pools.", "You gain an additional +1 Edge in one Pool of your choice.", "Your nonbiological body is immune to standard poisons, diseases, and the vacuum of space, and you do not need to eat, drink, or breathe (though you must still rest and take recoveries).", "If you can connect to an electrical conduit, charging station, or similar location that can provide you with power, you can take an extra one-action recovery each day.", "You ease any hacking tasks you attempt.", ], "Your machine nature also comes with some downsides.", ["Instead of using healing, treatment of your wounds requires engineering. Accelerated healing methods developed for biological creatures (such as the Prepared Medic ability from the Medic type) don't work on you at all.", "If you cannot connect to a suitable power supply during your ten-hour recovery, you lose your normal one-action recovery and your bonus (connected to power) recovery until you do so.", "Some biologicals look down on androids. At the GM's discretion, your positive interaction tasks with such individuals are hindered.", ], "Repair tasks to successfully treat (remove) your minor, moderate, and major wounds are level 1, level 3, and level 5, respectively.", ], }, 
	{ name: "Machine Reading", ref: ["CCR 186",], cost: 2, pool: "Intellect", effects: ["You can read the surface \"thoughts\"  of a machine within short range, even if it doesn't want you to. You must be able to see it. Once you have established contact, you can read the machine's thoughts until you use a ten-minute or longer recovery. Action to initiate."], }, 
	{ name: "Mage Armor", ref: ["CCR 53",], cost: 1, pool: "Intellect", effects: ["An invisible field of energy surrounds you until you use a ten-hour recovery. This allows you to try blocking attacks with an eased Intellect defense roll instead of a Might defense roll; if you succeed, you reduce the severity of the wound by one step. Action.", "<em>At tier 3:</em> Your Intellect defense roll to block an attack is eased by two steps total.", ], }, 
	{ name: "Magic Portal", ref: ["CCR 84",], cost: 6, pool: "Intellect", note: "Magic",  effects: ["You create a tunnel through space that allows transportation to a location within long range. You must be able to see this location or know that it exists (such as beyond a closed door or an open space underground beneath you). This hole in reality is large enough to accommodate you and creatures of your size or smaller. Anything moving into the hole immediately emerges from the other side. The hole remains open until you use a ten-minute or longer recovery. Action.", ], }, 
	{ name: "Magnetic Field", ref: ["CCR 173",], cost: 5, pool: "Intellect", effects: ["A field of magnetism around you pulls incoming, ranged, metallic projectile attacks (such as arrows, bullets, a thrown metal knife, and so on) to the ground. It also disperses energy attacks such as electricity, x-rays, lasers, and other attacks that are part of the electromagnetic spectrum. You are immune to such attacks for one round. You must be aware of an attack to foil it. Enabler."], }, 
	{ name: "Magnetize", ref: ["CCR 173",], cost: 4, plus: true, pool: "Intellect", effects: ["Your touch permanently magnetizes an object (regardless of whether it is metallic) no larger than you with a level 5 magnetic force, or demagnetizes an object no larger than you whose magnetic force is level 5 or less. A magnetized object attracts metal brought within 1 foot (30 cm) of it. Pulling the metal away requires a successful Might task. Magnetizing or demagnetizing electronic equipment destroys it if its level is 5 or less. You can use magnetic abilities (such as Move Metal and Command Metal) on a magnetized object.", "Alternatively, you can create a magnetic field that repels metal objects of level 3 or less (in effect, this is much like a force field that only affects metal things).", "<em>Effort:</em> Increase the level of a new magnetic force by 1. Increase the maximum level of an existing magnetic force you want to demagnetize by 1.", "Action."], }, 
	{ name: "Major Illusion", ref: ["CCR 168",], cost: 3, plus: true, pool: "Intellect", effects: ["You create a complex scene of images within immediate range. The entire scene must fit within a long area. The images can move, but they can't leave the area. The illusion includes sound and smell. It lasts until you use a ten-minute or longer recovery and changes as you direct (no concentration is needed). If you move beyond immediate range of the illusion's edge, the illusion vanishes.", "Instead of a realistic illusion, you can create illusory confusing images around a creature within short range, hindering their attacks and defenses until you use a ten-minute or longer recovery (no attack roll needed to affect them). You do not need to use your action each round to maintain this effect.", "<em>Effort:</em> Affect an additional creature with confusing images.", "Action to create."], }, 
	{ name: "Mask", ref: ["CCR 84",], cost: 5, pool: "Intellect", note: "Magic",  effects: ["You transform your body to become someone else. You can change any physical characteristic you wish, including coloration, height, weight, gender, and distinguishing markings. You can also change the appearance of whatever you are wearing or carrying. Your stats, as well as the stats of your items, do not change. You remain in this form for up to a day or until you use an action to resume your normal appearance. If using this ability as a disguise that comes under direct scrutiny or challenge, your disguise task is eased by three steps. Action.", ], }, 
	{ name: "Master Entertainer", ref: ["CCR 175",], effects: ["Your allies affected by Inspiring Ease can ease a second task each day, or ease one task by two steps instead of just one."], }, 
	{ name: "Master of Disguise-v1", dupmajor: true, ref: ["CCR 196",], cost: 2, plus: true, pool: "Intellect", effects: ["You disguise yourself in well under half the time&mdash;one Last action&mdash;rather than the minute or more normally required when attempting a disguise task, and if the disguise comes under direct scrutiny or challenge, you gain an additional asset to your disguise tasks to maintain the deception. Last action."], }, 
	{ name: "Master of Disguise-v2", dupmajor: true, ref: ["CCR 218",], cost: 2, plus: true, pool: "Intellect", effects: ["You can create a disguise as a Last action instead of the minute or more typically required.", "When you roll on a disguise task and your roll is less than a 6, treat the roll as a 6. (This means you don't get a GM intrusion if you roll a 1.) This ability renews when you take a recovery.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Enabler.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 9."], }, 
	{ name: "Master of Unarmed Fighting Style", ref: ["CCR 181",], effects: ["You inflict an additional 3 damage with unarmed attacks.", "When you succeed on a Might defense roll to block an unarmed attack against you, reduce its severity by two steps instead of one (major to minor, moderate and minor to none).", "Enabler."], }, 
	{ name: "Might for Mind", ref: ["CCR 189",], effects: ["When performing a task that would normally require spending points from your Might Pool, you can spend points from your Intellect Pool instead, and vice versa."], }, 
	{ name: "Mighty Leap", ref: ["CCR 188",], cost: 1, pool: "Might", effects: ["When you are larger than normal and jump, you move twice as far as normal, either horizontally or vertically. Enabler."], }, 
	{ name: "Mind Control", ref: ["CCR 163",], cost: 6, plus: true, pool: "Intellect", effects: ["You control the actions of another creature you touch. The creature must be level 2 or lower and you must succeed at an Intellect attack against them. Control lasts until you use a ten-minute or longer recovery. While you have control, you maintain mental contact with the target and sense what they sense. You decide on a case-by-case basis if they follow your orders or if they can act freely.", "When the duration ends, the creature doesn't remember being controlled or anything it did while under your command.", "<em>Effort:</em> Increase the maximum level of the target you can affect by 1.", "Action to initiate."], }, 
	{ name: "Mind for Speed", ref: ["CCR 201",], effects: ["When performing a task that would normally require spending points from your Intellect Pool, you can spend points from your Speed Pool instead, and vice versa."], }, 
	{ name: "Mind Games", ref: ["CCR 178",], cost: 4, pool: "Intellect", effects: ["You use lies and trickery, mockery, and perhaps even hateful, obscene language against a foe that can understand you. If you succeed, the foe is confused, enraged, or otherwise distracted enough that they lose their next turn, and on the turn thereafter, their tasks are hindered. Action."], }, 
	{ name: "Mind of a Leader", ref: ["CCR 199",], cost: 6, pool: "Intellect", effects: ["When you develop a course of action to deal with a future situation, you can ask the GM one very general question about what is likely to happen if you carry out the plan, and you will get a simple, brief answer.", "Each of the allies who know the plan (including you) gain an asset to one roll of their choice related to that future situation, as long as the situation occurs within a few days of creating the plan.", "Action to initiate planning; enabler for asset."], }, 
	{ name: "Mind Reading", dupminor: true, ref: ["CCR 103", "CCR 115", "CCR 162", ], cost: 2, pool: "Intellect", effects: ["You can read the surface thoughts of a creature you can see within short range. If the creature is unwilling, you must make an Intellect attack against them to read their thoughts. Once you have established contact, you can read the target's thoughts until you use a ten-minute or longer recovery. Action.", ], }, 
	{ name: "Mind Surge", ref: ["CCR 187",], effects: ["You have an extra one-action recovery each day that can only be used to replenish your Intellect Pool."], }, 
	{ name: "Mineralization", ref: ["CCR 147",], effects: ["You can take one more major wound than normal.", ], }, 
	{ name: "Minor Illusion", ref: ["CCR 168",], cost: 1, pool: "Intellect", effects: ["You create a single image of a creature or object within immediate range. The image must fit within an immediate area. The image can move (for example, you could make the illusion of a person walk or attack), but it can't leave the area. The illusion includes sound but not smell. It lasts until you use a ten-minute or longer recovery, but if you want to change the original illusion significantly&mdash;such as making a creature appear to be wounded&mdash;you must use an action to concentrate on it again. If you move out of range, the illusion vanishes.", "Instead of a realistic illusion, you can create a confusing pattern of images around a creature within short range. As long as you use your action to change this pattern, you hinder the creature's attacks and defenses (no attack roll needed to affect them).", "Action to create; action to modify."], sidebar: "<p>You usually don't have to make a roll against a casual observer to get them to believe your illusion is real, but you probably do if they're doubtful or searching for unusual details. An observer who recognizes something as an illusion can ignore it, but it can still distract them and interfere with what they can see.</p>", }, 
	{ name: "Misdirect", ref: ["CCR 183",], cost: 3, pool: "Speed", effects: ["When an opponent misses you, you can redirect their attack to another target of your choosing that's within immediate range of you. Make an unmodified attack roll against the new target (do not use any of your or the opponent's modifiers to the attack roll, but you can apply Effort for accuracy). If the attack hits, the target takes damage equal to the attacking foe's level. Enabler."], }, 
	{ name: "Modify Device", ref: ["CCR 93",], effects: ["You quickly jury-rig a piece of equipment or a power source in order to repair or upgrade it. This requires access to appropriate parts and tools.", ["<em>Repair:</em> If you succeed on an engineering task (difficulty equal to the device's level + 1), you temporarily repair a piece of broken equipment or an inactive power source to get a few more uses out of it.", "<em>Upgrade:</em> If you succeed at a difficulty 3 engineering task, you make the device function about 25 percent above its rated specifications. When you take a ten-hour recovery, the device breaks, requiring a full repair (as opposed to another Modify Device task) to regain its original, unmodified function. For example, you could overclock a medium blaster so that it deals 1 additional damage, modify a food printer so that each cup of coffee made with it tastes better, modify a spacecraft's engine so that its acceleration is improved by 25 percent, and so on.", ], "Whether you repair or upgrade the device, it now has a depletion of 1&ndash;6 on a d20 (check each use).", "Ten minutes to complete.", "<em>At tier 3:</em> The modified device's depletion improves to 1&ndash;2 on a d20.", ], sidebar: "<p>Fully repairing a device&mdash;as opposed to the jury-rigged repair of Modify Device&mdash;is often possible, but usually requires at least a few days, specialized tools and parts, and the application of resource points).</p>", }, 
	{ name: "Moon Shape", ref: ["CCR 221",], cost: 4, plus: true, pool: "Intellect", effects: ["You become a primal beast ruled by fury and instinct until you use a one-hour or longer recovery. You cannot activate this ability if you are not in moonlight (at least a half moon). In beast form, you add 8 points to your Might Pool and 2 points to your Speed Pool, and add +2 to your Might Edge and Speed Edge.", "As a GM intrusion, you might enter a rage, attacking every living creature within short range. The rage lasts until you revert to your normal form.", "Intentionally reverting to your normal form is a difficulty 2 Intellect task. Once back in your normal form, you are hindered until you use a one-hour or longer recovery. Furthermore, if you did not kill and eat at least one substantial creature while in beast form, your tasks are hindered until you use a ten-hour recovery.", "<em>Effort:</em> Activate this ability even if you are not in moonlight.", "Action to change; action to revert."], }, 
	{ name: "Mount", ref: ["CCR 166",], effects: ["You gain a follower that is a level 3 beast who serves you as a mount. You and the GM must work out the appearance and personality of your beast. Its movement is based on its creature type (avian, swimmer, and so on).", "Instead of gaining a new creature as your mount, your beast companion can become your mount (this may involve a growth spurt), increasing their level to 3, in which case you gain a different level 2 beast companion.", "While riding your mount, on your turn they can move and you can make an attack, and you gain an asset on the attack. (This is a special exception to how followers normally can aid your attack.)", "Any focus ability you have that affects your beast companion (such as Beast Eyes or Improved Companion) can instead affect your mount (your choice).", "If your mount dies, you can use your resources hunting in the wild for about a week to locate and train a new one."], }, 
	{ name: "Move Metal", ref: ["CCR 172",], cost: 1, pool: "Intellect", effects: ["Until you use a one-hour or longer recovery, you can exert force on metal objects within short range as your action. Each use of this ability requires an action, allowing you to move an object at a distance if it contains metal or is made of metal. You can only move or manipulate an object if you could physically do so with your own hands. For example, you could lift and pull a light metal object anywhere within range to yourself or move a heavy object (like a piece of furniture) an immediate distance. This power lacks the fine control to wield a weapon or move objects with much speed, so in most situations, it's not a means of direct attack; however, you could pull a metallic object from another creature's grasp, push a creature in metallic armor an immediate distance, or hinder a creature's attack or defense by applying restraining pressure to an armored leg or arm or to a metallic weapon. Affecting an unwilling creature or their equipment requires an Intellect attack roll.", "You can use your action to create a magnetic disruption within short range, hindering electronic devices, electronic machines, and machine creatures (such as robots) by two steps for one round.", "Action to initiate; action to move metal or disrupt electronics."], }, 
	{ name: "Movement Adaptation", ref: ["CCR 159",], cost: 4, pool: "Might", effects: ["You can modify your animal shape, either growing wings so you can fly or becoming aquatic with fins and gills (for example, if you are in the form of a gorilla, you could become a winged gorilla or a fishlike gorilla). If you choose flight, you can fly a long distance each round. If you choose aquatic, you can breathe water and swim at your normal land speed. You can carry a creature of your size or smaller, or if affected by Bigger Animal Shape, three creatures of your regular size or smaller. If you use Animal Shape, you gain the benefit of this ability without having to spend an action to trigger it. Action; enabler when using Animal Shape."], }, 
	{ name: "Moving Like Water", ref: ["CCR 181",], cost: 3, pool: "Speed", effects: ["Until you use a ten-minute or longer recovery, if you fail to dodge an attack, you can still attempt to block it, but the block task is hindered. Enabler."], }, 
	{ name: "Multiple Quarries", ref: ["CCR 195",], effects: ["When you activate Quarry, you can select four creatures you can see to be your quarry instead of just one. Each additional quarry you select adds 2 Intellect to the cost of Quarry. Enabler."], }, 
	{ name: "Muscles of Iron", ref: ["CCR 234",], cost: 2, pool: "Might", effects: ["Until you use a ten-minute or longer recovery, all Might actions other than attack rolls that you attempt are eased. Enabler."], }, 
	{ name: "Mystic Flurry", ref: ["CCR 224",], effects: ["You inflict an additional 1 damage with unarmed attacks with your mystic source."], }, 
	{ name: "Mystic Hand", ref: ["CCR 224",], effects: ["You inflict an additional 1 damage with unarmed attacks with your mystic source.", "Once per round, if you take a wound and are not helpless, you can spend 3 Speed to reduce the wound's severity by one step. Enabler."], }, 
	{ name: "Mystic Step", ref: ["CCR 225",], cost: 4, plus: true, pool: "Speed", effects: ["You harness your mystic source to instantly transport yourself to a new location you can see within long range. If you appear within immediate range of a foe, you can make one unarmed attack against them as an extra action.", "<em>Effort:</em> Reach a location within range that you can't see directly because it's blocked by a wall or structure.", "First action."], sidebar: "<p>If you try to use Mystic Step to reach a location that has no room for you, the ability automatically fails and you don't leave your original location.</p>", }, 
	{ name: "Natural Leader", ref: ["CCR 198",], cost: 3, plus: true, pool: "Intellect", effects: ["When you roll to bargain, bluff, charm, interrogate, or intimidate a character and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.)", "This ability renews when you take a recovery.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Enabler.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12."], sidebar: "<p>A person manipulated by Natural Leader becomes more difficult to work with; the GM should treat them as one level higher for later uses of the ability.</p>", }, 
	{ name: "Natural Sneak", dupminor: true, ref: ["CCR 196", "CCR 216",], cost: 2, plus: true, pool: "Intellect", effects: ["When you roll on a lockpicking, perception, pickpocketing, or stealth task and your roll is less than a 6, treat the roll as a 6. (This means you don't get a GM intrusion if you roll a 1.)", "This ability renews when you take a recovery.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Enabler.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 9."], }, 
	{ name: "Naturally Strong", ref: ["CCR 208",], cost: 2, plus: true, pool: "Might", effects: ["When you roll on a task to carry, climb, jump, or smash, and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.)", "This ability renews when you take a recovery.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Enabler.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12."], }, 
	{ name: "Nature's Grip", ref: ["CCR 221",], cost: 3, plus: true, pool: "Intellect", effects: ["Make an Intellect attack against a foe within short range. Success means branches, grass, or other natural foliage snags and holds the foe until you use a ten-minute or longer recovery. The foe can't move from their current position, and their physical tasks (including attacks and defense) are hindered.", "If the foe tries to break free, you can continue to restrain them with another Intellect roll.", "You can use this ability to repel entangling plants in an immediate area within short range, leaving a clear space with no obstructions.", "<em>Effort:</em> Inflict 3 damage on the round the foe is first held.", "Action."], }, 
	{ name: "Nature's Voice", ref: ["CCR 221",], cost: 3, plus: true, pool: "Intellect", effects: ["Make an Intellect attack roll to calm a nonhuman beast within long range that can see you. You must speak to them (although they don't need to understand your words). They remain calm until you use a ten-minute or longer recovery or for as long as you keep using your action to calm them.", "<em>Effort:</em> Affect an additional beast (2 Intellect).", "Action."], sidebar: "<p>The GM has final say over what counts as a nonhuman beast. Unless some kind of deception is at work, you should know whether you can affect a creature before you attempt to use Nature's Voice on them. Aliens, extradimensional entities, very intelligent creatures, and robots never count.</p>", }, 
	{ name: "Never Fumble", ref: ["CCR 203",], effects: ["If you roll a natural 1 when attacking with your chosen weapon, you can ignore or countermand the GM intrusion for that roll.", "You can never be disarmed of your chosen weapon, nor will you ever drop it accidentally."], }, 
	{ name: "Nimble", ref: ["CCR 55", "CCR 131"], cost: 2, pool: "Speed", effects: ["As a First action, you move up to a short distance and then can take another First action, such as attacking with a light weapon or opening a door (the movement happens before the First action, not the other way around). Unlike a normal situation of taking an action and moving a short distance, this movement doesn't hinder your tasks. Enabler.", ], }, 
	{ name: "Nine Lives", ref: ["CCR 216",], effects: ["You can use Might Effort or Speed Effort on block rolls."], }, 
	{ name: "No Need for Weapons", ref: ["CCR 55", "CCR 132", "CCR 180", "CCR 224",], effects: ["Your unarmed attacks (such as punches, kicks, elbows, or knees) inflict an additional 2 damage.", ], }, 
	{ name: "Noble Bearing", ref: ["CCR 102",], cost: 2, pool: "Intellect", effects: ["You are adept at claiming the rewards that a noble background can generate. When you use this ability, strangers who are not already attacking give you at least a round to have your say. Alternatively, you can secure a place to stay somewhere that provides accommodations (even if that means others are turned out), get into a restricted area, ignore rules (minor ones, anyway), get in to see and speak with an important person, or gain some similar benefit without needing to succeed on an interaction task (unless your GM determines special circumstances apply, in which case you gain an asset to the task). Enabler.", ], }, 
	{ name: "Noble Defender", ref: ["CCR 77",], cost: 2, pool: "Might or Speed", effects: ["Choose one character you can see. That character comes under your protection. You gain an asset on all tasks involving finding, healing, interacting with, and protecting them. When you use the help action to aid their block or dodge, you give them two assets instead of one. You can use the help action to aid their Intellect defense (including direct attacks like fear and mind control and subtle influences like charm and intimidation) and give them two assets when you do so. You can only protect one character at a time.", "First action.", "<em>At tier 3:</em> Two characters at a time can be under your protection.", ], }, 
	{ name: "Noble Sacrifice", ref: ["CCR 77",], cost: 2, pool: "Might or Speed", effects: ["When you take the attack meant for another character, you gain a benefit for your selflessness. The attack automatically hits you and inflicts its normal damage (plus the additional minor wound for taking the attack). You can immediately retaliate with an attack against a foe within range. If you took the attack for a person you are protecting with Noble Defender, this attack is eased. Enabler.", ], }, 
	{ name: "Not Dead Yet", dupminor: true, ref: ["CCR 160", "CCR 207",], effects: ["When you would normally be dead, you instead fall unconscious for one round and then awaken.", "When you awaken this way, you immediately gain 1d6 + 6 points to restore your stat Pools, and you remove one moderate wound and one major wound.", "Once you use this ability, your tasks are hindered until you use a ten-hour recovery.", "If you die again before you use your ten-hour recovery, you are truly dead.", "You can select this ability twice. The second time you select it, the healing increases to 1d6 + 12 and you remove double the number of wounds.", "Enabler."], }, 
	{ name: "Nothing but Defend", ref: ["CCR 222",], effects: ["When guarding, you gain an asset to all defense tasks. Action."], }, 
	{ name: "Obstacle Running", ref: ["CCR 204",], cost: 3, pool: "Speed", effects: ["Any movement you take this round ignores most difficult terrain that would otherwise slow your movement, allowing you to travel at normal speed through areas with rubble, fences, tables, and similar objects that you would have to climb over or move around. This movement might include sliding on a railing, briefly running along a wall, or even stepping on a creature to boost yourself over something. If an obstacle would normally require a Might or Speed task to overcome, such as swinging on a rope, balancing on a rope, or jumping over a hole, the task is eased. Enabler."], }, 
	{ name: "On the Crew", ref: ["CCR 235",], cost: 4, plus: true, pool: "Intellect", effects: ["While you are working with a team of at least two other allies, you give them a short pep talk and grant yourself and them one of the following abilities until you use a ten-minute or longer recovery.", ["+1 damage on attacks", "Ignore the first minor wound taken", "Add +6 to next recovery", ], "Last action to initiate. "], }, 
	{ name: "One With the Wild", ref: ["CCR 177",], cost: 6, pool: "Intellect", effects: ["You and your allies gain an unusual connection to the wilderness within long range until you use a one-hour or longer recovery. This has three effects:", ["Natural animals and plants in the area will not knowingly harm you or your allies.", "You and your allies increase their Might Edge, Speed Edge, and Intellect Edge by 1.", "Any recoveries made during this period restore twice as many points.", ], "Action to initiate."], }, 
	{ name: "Onslaught", ref: ["CCR 103",], cost: 1, pool: "Intellect", effects: ["You attack a foe using energies that assail either their physical form or their mind. In either case, you must be able to see your target. If the attack is physical, you emit a short-range ray of force that inflicts 4 damage. If the attack is mental, you focus your mental energy to blast their thought processes with a mindslice that inflicts 2 Intellect damage (ignores armor). Some creatures without minds (such as robots) might be immune to your mindslice. Action.", "<em>At tier 3:</em> You deal 1 additional damage with Onslaught.", ], }, 
	{ name: "Open Inner Eye", ref: ["CCR 69",], cost: 2, plus: true, pool: "Intellect plus 1 minor wound", effects: ["After a ten-minute ritual that concludes by you or an ally puncturing your forehead with a blade (inflicting a minor wound), you can peer into the spiritual realm until you use a ten-hour recovery. While your inner eye is open, your perception tasks in physical reality are hindered, but you gain additional abilities.", "While your inner eye is open, you can use any of the following abilities, paying the Pool point cost for each use.", [["<em>Detect Spirit (2+ Intellect):</em> Make an Intellect roll to scan for mental presences of living creatures and undead spirits within short range. You detect any such creature whose level is equal to or less than the level of your result. Barriers of higher level than the level of your result block this sense.", "<em>Effort:</em> Until your next turn you can pinpoint those presences in physical space.", "Action."], ["<em>Mindslice (1 Intellect):</em> You mentally attack a target you can see within short range, focusing your mind to blast their thoughts for 2 damage (ignores armor). Creatures without minds (such as relatively mindless undead) might be immune. Action.", ], ["<em>Sorcerous Suggestion (2 Intellect):</em> If you succeed on an Intellect attack against a creature with a mind, on their next turn they attempt one of the following actions that you specify: identify themself, say why they are present, close or open a door or container, drop something or pick something up, move an immediate distance, pass something they're holding to you, or just stand quietly and do nothing. Action.", "Ten minutes to activate (one minute to activate at tier 3 and higher).", "<em>At tier 3:</em> The time you need to activate the ritual is reduced to one minute and your perception tasks in the real world are no longer hindered."], ], ], }, 
	{ name: "Out of Harm's Way", ref: ["CCR 218",], cost: 2, pool: "Speed", effects: ["When you succeed on a dodge task, you can immediately move an immediate distance even though it's not your turn. Enabler."], }, 
	{ name: "Outlast the Foe", ref: ["CCR 207",], effects: ["If you have been in combat for five full rounds, you have an asset for all tasks in the remainder of the combat, and you deal an additional 1 damage per attack. Enabler."], }, 
	{ name: "Overwatch", ref: ["CCR 64",], cost: 2, pool: "Speed", effects: ["You use a ranged weapon to target a limited area (such as a doorway, a hallway, or the eastern side of the clearing you're in); as soon as a viable target enters the area, you can attack them. This works like delaying, but you also negate any benefit the target would have from cover, position, surprise, range, illumination, or visibility. Your attack inflicts +1 damage. You can remain on overwatch as long as you wish, within reason. Alternatively, you can use this ability against a target already in the limited area on your turn. Action.", ], }, 
	{ name: "Perfect Attack", ref: ["CCR 202",], cost: 2, plus: true, pool: "Might or Speed", effects: ["Make an attack with your chosen weapon. If your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.)", "If you succeed, the attack inflicts normal damage.", "This ability doesn't allow you to succeed at an attack that would be impossible, such as slashing a person a mile away or shooting an arrow at the moon.", "This ability renews when you take a recovery.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Action.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12."], }, 
	{ name: "Perfect Control", ref: ["CCR 192",], effects: ["You no longer need to attempt an Intellect task to use Beast Form or revert back to your normal form. You can change back and forth as your action. While in beast form, you no longer have to eat a creature to avoid being hindered after you revert to normal."], }, 
	{ name: "Perfect Follow-Through", ref: ["CCR 203",], cost: 8, pool: "Might or Speed", effects: ["You can attack with your chosen weapon and take another action as an extra action on your turn. Enabler."], }, 
	{ name: "Perfect Stranger", ref: ["CCR 174",], cost: 3, pool: "Intellect", effects: ["You completely throw yourself into a role, becoming almost unrecognizable until you use a one-hour or longer recovery. This often involves altering your voice, posture, accent, or clothing to \"sell\"  this new guise.", "All tasks to pretend to be someone other than yourself are eased. Three times while this ability is active, if you use Effort on an interaction or knowledge task related to this role, you gain a free level of Effort.", "Action to initiate."], }, 
	{ name: "Perfected Form", ref: ["CCR 225",], effects: ["Your mystic source infuses you until you use a one-hour or longer recovery, granting you 3 points that you can add to any of your Pools, even if that would exceed their normal maximums. The points remain until you spend them or the duration expires.", "In addition, while the duration lasts, your eyes and hands glow with the power of your mystic source, and you inflict an additional 3 damage with your unarmed attacks.", "This ability renews after your next one-hour or longer recovery.", "Last action."], }, 
	{ name: "Perfecting the Body", ref: ["CCR 224",], effects: ["Your daily kata infuse and protect you, granting you immunity from the effects of fear, mental control, disease, and poison."], }, 
	{ name: "Permanent Illusion", ref: ["CCR 169",], cost: 9, pool: "Intellect", effects: ["You make one of your ongoing illusions permanent. Choose an illusion (or portion of an illusion) that you created. The illusion must fit within an immediate area and remains in that area. The illusion is permanent, persisting on its own without your attention or presence. You can permanently end the illusion as an action, but anyone else who wants to end it must expend exceptional ingenuity to prevent it from regenerating after a while. Enabler."], }, 
	{ name: "Persistence Training", ref: ["CCR 197",], cost: 5, plus: true, pool: "Might", effects: ["You immediately end mind control affecting you. You also regain your ability to take your next turn normally and/or take it without hindrance by shaking off a lingering disabling effect.", "<em>Effort:</em> Use this ability on an ally within immediate range instead of yourself.", "Enabler for yourself; action for another."], }, 
	{ name: "Phase Door", ref: ["CCR 231",], cost: 4, plus: true, pool: "Intellect", effects: ["You can phase into an adjacent solid object and then phase out of any other solid object within long range of the first, even if the two objects are not connected. There must be no intervening barriers between the two objects, and you must be aware of or able to see the destination object.", "<em>Effort:</em> Increase the traveling range by a long distance.", "Action."], }, 
	{ name: "Phase Foe", ref: ["CCR 231",], cost: 8, plus: true, pool: "Intellect", effects: ["You gather disrupting energy in your fingertip and touch a creature. If your attack succeeds, they are phased as if you used Untouchable on them. However, unless they can figure out how to control their movement while phased, which most creatures have no experience with, they sink through the ground or other solid matter. If they can't later gain control or end the effect, they might be gone for good because when they become solid again after a minute, they're probably deep underground. You can only use this ability against a target of level 4 or lower.", "<em>Effort:</em> Increase the maximum level of the target you can affect by 1.", "Action."], }, 
	{ name: "Phase Friend", ref: ["CCR 231",], cost: 4, plus: true, pool: "Intellect", effects: ["When using a phasing ability, you bring along an ally within immediate range.", "<em>Effort:</em> Bring an additional ally.", "Enabler."], }, 
	{ name: "Phase Grasp", ref: ["CCR 230",], cost: 3, pool: "Intellect", effects: ["You phase an object within long range so it vanishes and reappears in your hands or within immediate range of you. You must be able to see the object and it must be something you could carry with two hands. If the object is held by a creature or behind a barrier, you must succeed on an Intellect attack against the creature or barrier to transport it. Action."], }, 
	{ name: "Phased Attack", ref: ["CCR 231",], cost: 3, pool: "Intellect", effects: ["Attacks you make this turn ignore your foe's armor. Enabler."], sidebar: "<p>Phased Attack used against a PC means their block attempts fail.</p>", }, 
	{ name: "Picking Up the Slack", ref: ["CCR 170",], cost: 1, pool: "Intellect", effects: ["You can fill in for a skilled ally when they're unable to perform a specific task. If an ally within long range is trained (or more) in a skill but can't attempt the task (such as if there's a lock to be picked, but the skilled ally is unconscious or too far away), you gain an asset on that task. You cannot use this ability if you are trained (or better) in that skill. Enabler."], }, 
	{ name: "Piloting Flourish", ref: ["CCR 96",], effects: ["When you handle a spacecraft, your impressive piloting chops, your diverting quips, and/or a certain something in the way you accomplish a maneuver entertains or impresses others. One creature you choose on or near the spacecraft who can see you or is otherwise aware of your maneuver gains an asset to their next task if taken within a round or two.", "<em>At tier 3:</em> You can impress up to three chosen creatures simultaneously.", "Enabler.", ], }, 
	{ name: "Plasma Field", ref: ["CCR 149",], cost: 5, pool: "Intellect", effects: ["A selected portion of your fire shroud spikes to a temperature hot enough to incinerate incoming ranged attacks (such as arrows, bullets, a thrown metal knife, and so on), instantly turning them to ash. You are immune to such attacks for one round. You must be aware of an attack to incinerate it. Enabler."], }, 
	{ name: "Poison Bite", ref: ["CCR 192",], cost: 4, pool: "Might", effects: ["You grow fangs and an extended overbite or underbite, allowing you to make poisonous bite attacks as light unarmed attacks (eased attack, 2 damage) until you use a ten-minute or longer recovery. If your bite attack succeeds, the target takes an additional 5 damage (ignores armor) from poison and their tasks are hindered for one round. Action when in your normal form; enabler when using Beast Form."], }, 
	{ name: "Poison Crafter", ref: ["CCR 194",], effects: ["If you have about an hour, you can use your resources to craft one dose of poison you can use as a contact poison on a weapon. A weapon coated with the poison (requiring a Last action to carefully apply) inflicts an additional 2 damage until you use a one-hour or longer recovery.", "Your experience with poison gives you some additional related benefits. You gain an asset on detecting, identifying, and resisting poison. Your defense rolls against poison are eased, and you take 2 less Speed damage from poison (if the poison inflicts Speed damage) or reduce wounds from poison by one step (major to moderate, moderate to minor, minor to none). For example, if you are hit by an attack that adds a moderate wound from poison, you only take a minor wound from the poison."], sidebar: "<p>Poison crafting uses resource points&mdash;in this case, use Craft Cypher and the weapon augmentation cypher to create a poison you can apply to your weapon. The poison, a manifest cypher, applies toward your cypher limit.</p>", }, 
	{ name: "Polymath", ref: ["CCR 235",], cost: 0, plus: true, pool: "Intellect", effects: ["When you roll on a task you're trained in (other than an attack or defense task) and your roll is less than a 12, treat the roll as a 12. (This means you don't get a GM intrusion if you roll a 1.)", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Enabler.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 15."], }, 
	{ name: "Potion Cyphers", ref: ["CCR 73",], effects: ["You can bear two additional cyphers at a time as long as they are cyphers you created with Brew Potion.", ], }, 
	{ name: "Power Cypher Use", ref: ["CCR 142",], effects: ["You can bear one additional cypher or power boost cypher at a time.", ], }, 
	{ name: "Power Prowess", ref: ["CCR 133",], effects: ["You inflict +1 damage with any attack you make involving your powers.", ], }, 
	{ name: "Powered Cybernetics", ref: ["CCR 184",], cost: 2, plus: true, pool: "Might", effects: ["You can use your cybernetics to support and enhance your physical actions. When you roll on a task to carry, climb, jump, or smash and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.) This ability renews when you take a recovery.", "Enabler; action to carry, climb, jump, or smash.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12."], }, 
	{ name: "Powerful Blast", ref: ["CCR 140",], effects: ["You can emit a long-range blast of energy inflicting 4 damage with a successful attack roll, or 6 points if you use a Last action to attack. Work with your GM to determine the type of energy comprising your blast (cold, electricity, fire, and so on). Action or Last action.", ], }, 
	{ name: "Precognition", dupminor: true, ref: ["CCR 163", "CCR 187",], cost: 6, pool: "Intellect", effects: ["You dimly sense the future. Until you use a ten-minute or longer recovery, you gain the following benefits:", ["You gain an asset on defense tasks.", "You can predict the actions of those around you. You gain an asset to seeing through deceptions and attempts to betray you as well as avoiding traps and ambushes.", "You know what people are probably thinking and what they will say before they say it. You gain an asset to all interaction tasks."], "Enabler."], }, 
	{ name: "Prepare Spell", dupminor: true, ref: ["CCR 53", "CCR 81", "CCR 154",], effects: ["Each day you can pick a different magical effect and cast it as a spell. Choose a low-power manifest cypher. After spending ten minutes preparing, you gain that cypher's effect as a spell (a character special ability). You can cast that spell as an action, costing 2 Intellect. This spell does not count toward your cypher limit. Unlike when using a cypher, you do not lose this spell after casting it.", "As part of making a ten-hour recovery, you can change which cypher you've taken as a spell. Changing which cypher you have prepared as a spell ends all of your durations of the previous prepared spell.", "You can select this ability up to three times (as a character advancement or in place of a new focus ability), allowing you to choose one, two, or three cyphers each day as spells.", "Ten minutes to prepare a cypher as a spell; action to cast a cypher as a spell.", "<em>At tier 3:</em> You can use this ability to choose a low- or medium-power cypher as a spell. You can cast a medium-power cypher spell as an action, costing 4 Intellect.", "<em>At tier 6:</em> You can use this ability to choose a low-, medium-, or advanced-power cypher as a spell. You can cast an advanced-power cypher spell as an action, costing 6 Intellect.", ], }, 
	{ name: "Prepared Medic", ref: ["CCR 94",], cost: 2, plus: true, pool: "Intellect", effects: ["With access to a medical field kit (or similar equipment), you can use treatment in half the normal amount of time or treat twice as many wounds for one character in the normal time. Enabler.", ], }, 
	{ name: "Press Advantage", ref: ["CCR 51", "CCR 132",], effects: ["When your damage-dealing attack roll is 17 or higher, you deal +1 damage with the attack. If you roll a 19 or 20, you inflict the extra damage regardless of whether you choose to deal additional damage or take a special minor or major effect.", ], }, 
	{ name: "Preternaturally Strong", ref: ["CCR 188",], cost: 2, pool: "Might", effects: ["When you roll for a carrying, climbing, jumping, or smashing task and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.) While bigger than normal, each size increment (Enlarge, Bigger, Huge, Gargantuan, and Colossal) increases this minimum number rolled by 3. This ability renews when you take a recovery.", "Enabler.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12."], }, 
	{ name: "Pry Open Defense", ref: ["CCR 83",], cost: 4, pool: "Intellect", note: "Magic",  effects: ["With a successful Intellect attack, you tear apart the defenses of a creature within long range. Any magic-based defenses they have (such as a warding spell) are negated. If the creature has no magical defenses, its armor is reduced by 2. If it has no magic-based defenses or armor, its defense tasks are hindered. This lasts until you use a ten-minute or longer recovery. Action.", ], }, 
	{ name: "Psychic Burst", ref: ["CCR 162",], cost: 3, plus: true, pool: "Intellect", effects: ["You blast waves of mental force into the minds of three targets within short range (make an Intellect roll against each target). This burst inflicts 3 Intellect damage (ignores armor).", "<em>Effort:</em> Attack an additional target.", "Action."], }, 
	{ name: "Psychic Suggestion", dupminor: true, ref: ["CCR 163", "CCR 213",], cost: 4, pool: "Intellect", effects: ["If your Intellect attack succeeds, a target within short range takes the action you indicate on their next turn. If this action would cause direct harm to the creature or their allies, your mental attack is hindered. Action."], }, 
	{ name: "Psychic Veil", ref: ["CCR 103",], cost: 1, pool: "Intellect", effects: ["Your appearance is distorted as if viewed through the visual aura of a migraine until you take a ten-minute or longer recovery. The distortion doesn't interfere with your actions, but your dodge and Intellect defense rolls are eased.", "While active, the distortion protects you from mental attacks, reducing their wound severity by one step (major to moderate, moderate to minor, minor to none). For example, if you are hit by a psychic blast attack that causes a moderate wound, you instead take a minor wound.", "Enabler.", ], }, 
	{ name: "Psychokinetic Attack", ref: ["CCR 201",], cost: 5, pool: "Intellect", effects: ["You can use this ability in one of two ways.", ["<em>Heavy Throw:</em> You telekinetically grab an object within short range and hurl it at a target within short range. (To throw a creature instead of an object, you first have to telekinetically grab them with a successful Intellect attack.) Make an Intellect attack against your target. If you succeed, your target and whatever you throw take 6 damage.", "<em>Shattering Burst:</em> You unleash your power directly against an object up to half your size within short range. Make an Intellect attack (this is eased by three steps compared to using physical strength to attack the object). If you succeed, you instantly destroy the object.",], "Action."], }, 
	{ name: "Puncturing Attack", ref: ["CCR 83",], effects: ["Your attacks ignore 2 points of your opponent's armor.", ], }, 
	{ name: "Push Implant", ref: ["CCR 97", "CCR 212",], effects: ["After attacking, you can activate a combat implant to make an additional attack as an extra action on your turn. Doing this inflicts a moderate wound on yourself. Enabler.", ], }, 
	{ name: "Push on Through", dupminor: true, ref: ["CCR 134", "CCR 135", "CCR 136", "CCR 206",], effects: ["Instead of a ten-minute recovery, you have a second one-action recovery. Thus, your first two recoveries are one action, the third is one hour, and the fourth is ten hours.", "You can take one more moderate wound than normal.", "You can use one of your one-action recoveries to allow an ally to use one of their ten-minute recoveries as an action.", ], }, 
	{ name: "Push", ref: ["CCR 200",], cost: 2, pool: "Intellect", effects: ["You telekinetically push a target within short range an immediate distance in any direction. You must be able to see the target, it must be your size or smaller, and it must not be affixed to anything. The push is quick, and the force is about as direct and crude as a kick or punch. Action."], }, 
	{ name: "Quarry-v1", dupmajor: true, ref: ["CCR 59", "CCR 194"], cost: 2, pool: "Intellect", effects: ["Choose one creature you can see to be your quarry. You gain an asset on all tasks involving following, understanding, interacting with, attacking, or defending against your quarry. Your attacks against your quarry deal +1 damage. This benefit encompasses hunting-related tasks, if appropriate, such as skinning, dressing, the best way to prepare and preserve any resulting game meat, and so on. You can have only one quarry at a time. Action.", "<em>At tier 3:</em> You can have two quarries at a time.", ], }, 
	{ name: "Quarry-v2", dupmajor: true, ref: ["CCR 194",], cost: 2, pool: "Intellect", effects: ["You pick a creature and focus your intention on pursuing them. Choose one creature you can see to become your quarry. You gain an asset on all tasks involving following, understanding, interacting with, attacking, or defending against your quarry. This asset includes hunting-related tasks, if appropriate, such as skinning, dressing, the best way to prepare and preserve any resulting game meat, and so on. You can have only one quarry at a time. Action to initiate."], }, 
	{ name: "Quick Adjustment", ref: ["CCR 183",], cost: 2, pool: "Speed", effects: ["Your nonlethal attack (an attempt to disarm, an attack against an inanimate object, or an attack to subdue) is a First action. Enabler."], }, 
	{ name: "Quick Control", dupminor: true, ref: ["CCR 151", "CCR 227",], cost: 4, pool: "Intellect", effects: ["A successful Intellect attack allows you to command a machine or automaton (intelligent or not) within short range to take one action within its capabilities on its next turn, regardless of its normal programming or attitudes. If this action would cause the machine or automaton direct harm to itself or its allies, your Intellect attack against it is hindered. (If you use this ability to command an intelligent machine or automaton, it likely becomes hostile to you afterward.) Action."], }, 
	{ name: "Quick Draw", ref: ["CCR 64",], cost: 2, pool: "Speed", effects: ["Once per turn if you take down a foe with your medium or heavy ranged attack, you can immediately make another attack on that same turn against a new foe within short range as an extra action on your turn. Enabler.", ], }, 
	{ name: "Quick Phase", ref: ["CCR 231",], effects: ["When you use Walk Through Walls, you pass through physical barriers much more quickly, increasing your base rate by an additional 10 feet (3.5 m) per round.", "Alternatively, you can phase up to 10 feet (3.5 m) as a First action.", "Enabler."], }, 
	{ name: "Radiohead", ref: ["CCR 214",], effects: ["You can transmit and receive radio transmissions across a broad range of frequencies. You can keep your radio communications entirely private, or relay them audibly as if you were a standard radio. If attempting to access an encrypted digital radio signal, you must succeed on an Intellect task against the encryption's level. Communicating this way is as natural for you as verbal speech, which means sometimes you may overhear something interesting over the radio even when not searching for it. Enabler."], }, 
	{ name: "Ranged Healer", ref: ["CCR 229",], effects: ["All of your short-range focus abilities work at long range. All of your touch and immediate range focus abilities work at short range."], }, 
	{ name: "Rapid Attack", ref: ["CCR 202",], cost: 3, pool: "Speed", effects: ["You make an additional attack on your turn with your chosen weapon. You can use this ability only once per round. Enabler."], }, 
	{ name: "Reading the Room", ref: ["CCR 165",], cost: 3, pool: "Intellect", effects: ["You gain knowledge about an area by speaking with dead spirits or their residual energies.", "You may ask the GM one question, which must be simple and matter-of-fact. You must succeed at an Intellect roll against the difficulty of the question, as set by the GM. \"What killed the cattle in this barn?\"  is a good example of a simple question. \"Why were these cattle killed?\"  is not an appropriate question because it has more to do with the mindset of the killer than the barn. Simple questions usually have a difficulty of 2, but extremely technical questions or those that involve facts meant to be kept secret can have a much higher difficulty.", "Action."], }, 
	{ name: "Rebuke Evil", ref: ["CCR 210",], cost: 4, plus: true, pool: "Intellect", effects: ["You rebuke one undead, demon, or creature of similar ilk within short range that you make a successful Intellect attack against. The affected creature does their best to accomplish a goal you specify in your rebuke, even if it would cause them or their allies harm, until you use a ten-minute or longer recovery.", "<em>Effort:</em> Affect an additional foe (make a separate attack roll against each foe); you must give the same command to all affected creatures.", "Last action."], }, 
	{ name: "Recompile Machine", ref: ["CCR 227",], cost: 8, plus: true, pool: "Intellect", effects: ["With a successful Intellect attack against a machine (intelligent or not) of level 4 or lower within long range, you connect directly into their core system. Choose one of the following effects.", ["The machine ceases all function&mdash;it is \"bricked.\"", "The machine reboots after a few rounds, then functions as an additional machine companion to you for about a day. After you finish a ten-hour recovery, you must reuse this ability on the machine to ensure it doesn't reset back to its original programming (or sense of self, if an intelligent machine).", "The machine explodes, inflicting 4 damage to all creatures in immediate range; make a separate Intellect attack roll against each.", ], "<em>Effort:</em> Increase the maximum level of the machine you can affect by 1.", "Last action."], }, 
	{ name: "Recover Faster", ref: ["CCR 204",], effects: ["When you rally as your action, you gain an extra action on your turn that you can only use for moving. Enabler."], }, 
	{ name: "Redline Maneuver", ref: ["CCR 105",], cost: 1, pool: "Speed or Intellect", effects: ["You attempt a risky maneuver piloting the starcraft, increasing the GM intrusion range by 2 on your task, and \"redlining\" the craft beyond its regular operating envelope.", "If you succeed on a difficulty 2 (or potentially higher, depending on your GM's assessment of the situation) task, you can accomplish something normally ill-advised when flying a starcraft. For instance, you could fire its weapons as you put the entire ship into an accelerating spiral, possibly directly into the swarm of fighters as opposed to fleeing, hoping to shatter their coordination and maybe cause a couple of crashes in the process. You could try to graze a star's corona (or even chromosphere) to lose pursuing ships. You could jump the starcraft to FTL more quickly than is usually possible, or closer to a gravitational source than is normally thinkable. Or you could move much farther or faster through FTL than normally works out well for the craft.", "Action.", ], sidebar: "<p>Redline Maneuver GM intrusions: The FTL engines fail. The ship takes significant damage. Someone's console within the ship explodes, inflicting a moderate wound.</p>", }, 
	{ name: "Regenerative Healing", ref: ["CCR 141",], effects: ["Your healing factor is constantly at work, healing your wounds automatically without requiring your will or actions.", "You automatically heal one minor wound each round.", "If you have no minor wounds, you can heal one moderate wound each round if you spend 2 Might to do so.", "If you have no minor or moderate wounds, you can heal one major wound each minute if you spend 5 Might to do so.", "If you would be killed by wounds but spend 5 Might to heal a major wound, your regeneration keeps you alive but unconscious while it's healing that wound.", "You decide whether or not to spend Might to heal a wound, even if you are unconscious or unable to take actions. (In other words, you don't have to spend Might to heal if you don't want to.)", ], }, 
	{ name: "Reload", ref: ["CCR 152",], cost: 1, pool: "Speed", effects: ["You can reload a firearm as an extra action on your turn. Enabler."], }, 
	{ name: "Rend Metal", ref: ["CCR 173",], cost: 3, plus: true, pool: "Intellect", effects: ["You instantly tear, rip, or burst a metal object of up to level 3 that is within short range. You must be able to see the object and it can't be bigger than half your size (or, if part of a larger object like a wall, a section that is no bigger than half your size). The affected object is destroyed; optionally, it also expels shrapnel, inflicting 1 damage per level on all creatures in immediate range (make separate Intellect attack rolls).", "Affecting an unwilling creature's equipment requires an Intellect attack roll, but the roll is eased by two steps.", "<em>Effort:</em> Increase the maximum level of the metal object you can affect by 1.", "Action."], }, 
	{ name: "Repair Flesh", ref: ["CCR 165",], cost: 3, pool: "Intellect", effects: ["You can knit back together damaged flesh with a touch.", "You can reduce a wound by one severity: major to moderate, moderate to minor, or minor to none.", "Instead of curing a wound, you can enhance a character's next recovery by +2 Pool points.", "If used on a living or undead NPC, you restore 3 health.", "Action."], }, 
	{ name: "Repel Metal", ref: ["CCR 172",], effects: ["By manipulating magnetism, you have an asset to block and dodge rolls against attacks that include metal, such as bullets, thrown knives, metal-tipped arrows and crossbow bolts, and so on."], }, 
	{ name: "Reshape", ref: ["CCR 201",], cost: 5, pool: "Intellect", effects: ["You reshape matter within short range in an area no larger than a 5-foot (1.5 m) cube. If you use only one action on this ability, the changes you make are crude at best. If you spend at least ten minutes and succeed at an appropriate hindered crafting task, you can make complex changes to the material. You can't change the nature of the material, only its shape. For example, you can make a hole in a wall or floor, seal up a hole, create a sword from a piece of iron, or break or repair a chain. Using this ability multiple times lets you make larger changes, such as building a wall, bridge, or similar structure. Action."], }, 
	{ name: "Resilience", ref: ["CCR 84", "CCR 180", "CCR 228",], effects: ["You can take one more moderate wound than normal.", ], }, 
	{ name: "Resist the Elements", ref: ["CCR 222",], effects: ["You become resistant to one type of harmful energy. Choose one kind of energy, such as fire or electricity. Reduce the severity of wounds from that energy by one step (major to moderate, moderate to minor, minor to none)."], }, 
	{ name: "Resist the Storm", ref: ["CCR 214",], effects: ["You're resistant to the natural hazards of storms. Choose either electricity or sonic energy. If attacked with this kind of energy, reduce the severity of the wound by one step (major to moderate, moderate to minor, minor to none).", "You can take this ability twice, each time selecting a different kind of energy.", "Enabler."], }, 
	{ name: "Resonant Palm", ref: ["CCR 225",], cost: 7, pool: "Speed", effects: ["You forge a mystic connection with a willing creature you touch or a foe you successfully attack (this attack deals 2 less damage than normal). At any point within the next ten days, you can attempt to affect the target in one of the following ways, no matter how far you are from them. This connection breaks once you make this attempt, you force a connection with a different creature, or ten days pass.", ["Transfer one wound from the creature to yourself. No abilities, effects, or equipment can reduce the severity of this wound, but you can rally or attempt to heal it using normal methods.", "Make an eased unarmed attack against the target or an eased attack against them with one of your abilities, as if they were in range.", ], "Last action to initiate; action to heal or attack the creature."], }, 
	{ name: "Resuscitate", ref: ["CCR 229",], cost: 5, plus: true, pool: "Intellect", effects: ["You can resuscitate an injured PC you touch. The character is healed of their choice of one major wound, one moderate wound, or three minor wounds.", "If the character is dead from wounds but is otherwise in one piece and less than a minute has passed since they died, you can resuscitate them as described above if you succeed at a level 6 healing task.", "If you use this ability on a dead NPC who has no health but is otherwise in one piece and has been dead for less than a minute, you resuscitate them with 1 health.", "Each time you use Resuscitate, the Intellect point cost increases by 3. The cost returns to its base value after you use a recovery.", "Action."], }, 
	{ name: "Retainer", ref: ["CCR 102",], effects: ["You enjoy the services of a loyal level 2 follower who looks after your affairs, accounts, meals, clothing, and other trivial needs so you don't have to. Work with your GM to flesh out the details of your retainer.", "By spending 2 Intellect, you can have your retainer take the attack meant for you. If the attack brings them to 0 health, they are unconscious but not dead and can be restored by using your resource points and arranging or providing for a few days of care.", "At higher tiers: Your follower improves when you reach tier 3 and again at tier 5 (this is explained in the section about followers).", ], }, 
	{ name: "Retaliatory Swipe", ref: ["CCR 216",], cost: 3, pool: "Speed", effects: ["If a melee attack hits you, you can immediately make a melee attack against your attacker. You can't use this ability more than once per turn. Enabler."], }, 
	{ name: "Retribution", ref: ["CCR 67",], cost: 1, pool: "Intellect", effects: ["You call forth the powers of a deity to assail a foe within short range that you can see. If your Intellect attack hits, the target takes3 damage; they are also marked with an obvious sign relating to that deity until you take a ten-minute or longer recovery. For example, if you call for the retribution of Thesk the Serpent Lord, the attack looks like ephemeral snakes twining around and biting your foe, and they are marked on their forehead or another obvious location with glowing fangs or a snake's head.", "Last action.", "<em>At tier 3:</em> The retribution increases to 5 damage.", ], }, 
	{ name: "Return to Sender", ref: ["CCR 183", "CCR 213",], cost: 3, pool: "Speed", effects: ["If you successfully block or dodge a melee attack, you can immediately make a melee attack against the attacking foe. You can't use this ability again until after you take your normal turn. Enabler."], }, 
	{ name: "Reveal Illusion", ref: ["CCR 168",], cost: 2, plus: true, pool: "Intellect", effects: ["When you roll to find an illusion or invisible target within short range and your roll is less than a 12, treat the roll as a 12. (This means you don't get a GM intrusion if you roll a 1.) This ability lasts until you use a ten-minute or longer recovery. Action to initiate.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 15."], }, 
	{ name: "Rewind Time", ref: ["CCR 229",], cost: 5, pool: "Intellect", effects: ["You rewind time a few seconds, allowing someone to undo what they just did and take a different action. Choose a creature within short range who most recently took an action. Time rewinds to just before they took that action; it is now their turn. They can repeat the same action or try something different. The creature isn't aware of what they did before or that you reversed time, but they might be aware that you did something. This ability renews when you use a recovery. Enabler."], }, 
	{ name: "Righteous Cloak", ref: ["CCR 210",], cost: 4, pool: "Intellect", effects: ["You shine with wholesome light, automatically inflicting 4 damage (no roll needed) on anyone who tries to touch you or strike you with a melee attack. While Righteous Cloak is active, bright light illuminates a short area around you if you wish. This ability lasts until you use a ten-minute or longer recovery. Enabler."], }, 
	{ name: "Rising Courage", ref: ["CCR 174",], cost: 2, pool: "Intellect", effects: ["A target you choose within immediate range has an asset to their next Intellect defense task and next initiative task. Enabler."], }, 
	{ name: "Rival Talent", ref: ["CCR 203",], effects: ["You can tell a lot about someone by the weapon they wield. You ease all tasks (attacking, defending, influencing, tracking, and so on) against any foe using the same kind of weapon as your chosen weapon."], }, 
	{ name: "Roguish Smile", ref: ["CCR 182",], cost: 1, plus: true, pool: "Intellect", effects: ["With a smile and perhaps a wink, you erase the last round from the memory of a target of level 3 or less within immediate distance (make an Intellect attack against them to succeed).", "<em>Effort:</em> Increase the maximum level of the foe you can affect by 1.", "Action."], }, 
	{ name: "Rolling Stone", ref: ["CCR 147",], cost: 5, pool: "Might", effects: ["You can dive forward and contract your limbs, becoming a careening boulder moving up to a long distance. During this movement you can attack three foes by colliding with them. Make separate attack rolls for each; success means you inflict 6 damage. Last action.", ], }, 
	{ name: "Romantic Flair", ref: ["CCR 78",], cost: 2, plus: true, pool: "Intellect", effects: ["Your accompanying exuberant charm, bold confidence, perfectly timed bow, or suggestive wink means if your roll to charm or impress is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.)", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Action.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12.", ], }, 
	{ name: "Sacred Smite", ref: ["CCR 58",], cost: 2, pool: "Intellect", effects: ["Choose one creature you can see that you want to be punished for their transgressions. Until you attack a different creature, your attacks against that creature deal +1 damage from divine energy coursing through your melee or ranged weapon. If the target is an undead creature, a demon, or of similar ilk as designated by your GM, you choose whether your successful attack inflicts +2 damage or your foe must flee from you for one turn. Enabler.", "<em>At tier 3:</em> The bonus damage against undead, demons, and similar ilk increases to +3.", ], }, 
	{ name: "Safe Fall", ref: ["CCR 206", "CCR 224"], effects: ["When you take a wound from a fall, reduce its severity by one step. Enabler."], }, 
	{ name: "Scales", ref: ["CCR 191",], cost: 2, pool: "Might", effects: ["You grow scales all across your body until you use a ten-minute or longer recovery, during which time your block tasks are eased. Action when in your normal form; enabler when using Beast Form."], }, 
	{ name: "Scary Big", ref: ["CCR 188",], effects: ["Even when you're not larger than normal, your presence is compelling; you have an asset to charm and intimidation tasks. If you have grown larger than your normal size, you have two assets. Enabler."], }, 
	{ name: "Scent Transformation", ref: ["CCR 158",], cost: 1, pool: "Intellect", effects: ["You alter your scent so that you smell like an animal of your choosing until your next ten-minute or longer recovery. This can foil tracking attempts that are based on smell, and when attempting to interact with animals of your chosen type that rely heavily on smell, your tasks are eased by two steps. You can use this ability no matter what your shape is. Action to initiate."], }, 
	{ name: "Scratching and Kicking", ref: ["CCR 178",], cost: 1, pool: "Speed", effects: ["Your melee attack deals an additional 1 damage due to it including some combination of scratching, kicking, and/or biting. Enabler."], }, 
	{ name: "Scrutinize Defenses", ref: ["CCR 197",], cost: 3, plus: true, pool: "Intellect", effects: ["When you spend an hour or so thoroughly exploring an area (whether directly, through surveillance footage or a blueprint, or questioning people familiar with the area) no larger than a long distance in diameter, you can ask the GM one question about the area's defensive systems and procedures. The GM must answer you truthfully. For example, you could ask how often guards pass by a particular spot, what the guards are armed with (if anything), or if there are electronic or magical alarms. This ability resets when you use a ten-hour recovery.", "<em>Effort:</em> Ask an additional question.", "Action to initiate; one hour to complete."], }, 
	{ name: "Second Focus", ref: ["CCR 136",], effects: ["You have two foci instead of one. At tier 1 you gain two abilities from each of them. When you advance to a new tier, you gain a new ability from each focus.", ], }, 
	{ name: "Seeds of Fury-v1", dupmajor: true, ref: ["CCR 49",], cost: 1, pool: "Intellect", effects: ["You throw a handful of seeds in the air that ignite and speed toward a target within long range, scorching the air with twisting smoke trails. A successful attack deals 3 damage and catches the target on fire, inflicting +1 damage per round until the target uses an action to douse the flames or until you've taken your next recovery. Action.", ], }, 
	{ name: "Seeds of Fury-v2", dupmajor: true, ref: ["CCR 220",], cost: 1, pool: "Intellect", effects: ["You throw a handful of seeds in the air that ignite and speed toward a target within long range, scratching the air with twisting smoke trails. A successful attack deals 3 damage and catches the target on fire, inflicting an additional 1 damage per round until the target uses an action to douse the flames or until you use a ten-minute or longer recovery. Action to initiate.", ], }, 
	{ name: "Selective Phase Attack", ref: ["CCR 231",], effects: ["One attack each round you make using Phased Attack deals an additional 5 damage. Enabler."], }, 
	{ name: "Sense Evil", ref: ["CCR 210",], cost: 2, plus: true, pool: "Intellect", effects: ["When you use an action to perceive undead, demons (or creatures possessed by demons), or creatures of similar ilk within immediate range, if you roll a 9 or less, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.) This ability lasts until you use a ten-minute or longer recovery.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Action to initiate.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12."], }, 
	{ name: "Sense Magic", ref: ["CCR 154", "CCR 168",], cost: 1, pool: "Intellect", effects: ["If there is magic of any kind at work within short range, you are aware of that fact (but not the specifics). Last action."], }, 
	{ name: "Sense Metal", ref: ["CCR 172",], cost: 1, pool: "Intellect", effects: ["If there is ferromagnetic metal of any kind within short range, you are aware of that fact, as well as the amount, type, and general location. Last action."], }, 
	{ name: "Sense Psionics", ref: ["CCR 162",], cost: 1, pool: "Intellect", effects: ["If there are mental powers, psionic abilities, or other psychic phenomena at work within short range, you are aware of that fact (but not the specifics). Last action."], }, 
	{ name: "Sense Weakness", ref: ["CCR 218",], cost: 2, pool: "Intellect", effects: ["After observing a creature for one round, you know of any special weaknesses they may have and your attacks inflict an additional 1 damage against them. Action to initiate."], }, 
	{ name: "Severe Machine Disruption", ref: ["CCR 116"], cost: 5, plus: true, pool: "Intellect", effects: ["With a successful Intellect attack to hack a machine, robot, mechanism, or device (intelligent or not) within immediate range, you disrupt it in all the following ways simultaneously:", ["All the machine's tasks are hindered until you use a ten-minute or longer recovery.", "The machine's speed is halved.", "The machine can take no action for one round.", "The severity of the machine's attacks are reduced by one step (minimum of a minor wound) until you use a ten-minute or longer recovery.", ], "You must touch the machine to disrupt it (if you are making an attack, it inflicts no damage).", "<em>Effort:</em> Increase the range to as far as you can directly see (through your own eyes, not through a remote camera or other interface). Target a machine through a network interface you have unrestricted access to (this requires two levels of Effort).", "Action.", ], }, 
	{ name: "Shapechanger Healing", ref: ["CCR 159",], effects: ["When you change into an animal form, you are healed of one wound of any severity. This ability renews after you take a ten-hour recovery. Enabler."], }, 
	{ name: "Shield Against Evil", ref: ["CCR 210",], cost: 1, pool: "Intellect", effects: ["You bless yourself or a touched ally with protection against undead, demons, or creatures of similar ilk until you use a ten-minute or longer recovery. The protection eases defense rolls against the specified creature variety and grants immunity against mental influence, fear, and possession (from any source). Action."], }, 
	{ name: "Shield Master", ref: ["CCR 222",], effects: ["When you use a shield, it can take one more moderate wound than normal before being destroyed."], }, 
	{ name: "Shot Collision", dupminor: true, ref: ["CCR 153", "CCR 203",], cost: 4, plus: true, pool: "Speed", effects: ["Once per round, if someone attacks you with a firearm, thrown weapon, or other physical projectile (such as an arrow, bullet, or crossbow bolt), instead of attempting a defense task, you can attempt to shoot the projectile out of the air. Make an attack against the projectile at the same difficulty as the defense task. If you hit, your shot deflects, destroys, or otherwise prevents the projectile from hitting you.", "If you wish, the successfully deflected object explosively shatters in an immediate radius you select between you and the attacker, dealing 2 damage to all creatures and objects in the area (roll a separate attack against each). If you apply Effort to increase the damage, you deal 2 additional damage per level of Effort (instead of 3); targets in the area take 1 damage even if you fail the attack roll.", "Enabler."], }, 
	{ name: "Shrink", ref: ["CCR 141",], cost: 1, plus: true, pool: "Might)", effects: ["Your size proportionally decreases to a height of 1 inch (3 cm) until you use a ten-minute or longer recovery. Your clothing and equipment changes size with you. While small, you add 7 points to your Speed Pool and add +2 to your Speed Edge. While you are this small, your dodge and stealth tasks are eased by two steps and your movement speed is one-tenth normal; your melee attacks still inflict normal damage because the force is concentrated in a very small area.", "Each time you use Shrink, the Might cost increases by 1. The cost returns to 1 after you take a recovery.", "First action; enabler to use again to remain shrunken.", ], }, 
	{ name: "Shroud of Flame", ref: ["CCR 148",], cost: 1, pool: "Intellect", effects: ["At your command, your entire body becomes shrouded in flames until you use a ten-minute or longer recovery. The fire doesn't burn you or your equipment, but it inflicts 2 damage on anyone who tries to touch you or strike you with a melee attack (no roll required).", "While you are shrouded in flame, reduce the severity of wounds from heat and flames used against you by one step (major to moderate, moderate to minor, minor to none). For example, if you are hit by a fire attack that causes a moderate wound, you instead take a minor wound.", "While shrouded in flame, you can touch a foe as a light unarmed attack, inflicting 2 fire damage.", "Enabler."], }, 
	{ name: "Shrug Off Evil", ref: ["CCR 210",], effects: ["You are immune to mental influence, fear, and possession (from any source).", "You ignore one wound inflicted by undead, demons, or creatures of similar ilk. This aspect of this ability renews after you take a ten-hour recovery. Enabler.", ], }, 
	{ name: "Skill Exemplar", ref: ["CCR 141",], effects: ["You are among the best of the best when it comes to your area of expertise. Choose one skill that you are trained or specialized in (other than an attack skill or defense skill), such as healing, athletics, stealth, physics, pickpocketing, hacking, gymnastics, and so on. When you roll for this skill and your roll is less than a 15, treat the roll as a 15. (This means you don't get a GM intrusion if you roll a 1.)", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 18.", ], }, 
	{ name: "Sleeker Beast Form", ref: ["CCR 191",], effects: ["When you use Beast Form, your beast form gains the following additional bonuses: +1 to your Might Edge, +2 to your Speed Pool, and +1 to your Speed Edge. Enabler."], }, 
	{ name: "Sleuthing", dupminor: true, ref: ["CCR 130", "CCR 218",], cost: 3, pool: "Intellect", effects: ["When you're tracking a target of interest, looking for anything out of the ordinary (such as a clue or a single piece of evidence) at the scene of interest, or otherwise attempting to learn something about a mystery, you can ask the GM one question about the task and get a very short helpful answer that might be obvious to the character, but not to the player who doesn't have their character's experience. Action."], }, 
	{ name: "Slip Into Shadow-v1", dupmajor: true, ref: ["CCR 76", "CCR 230",], effects: ["Even if in full view of a creature, your successful stealth task allows you to slip away from that creature and hide from view in a nearby shadow, behind a tree or furnishing, or in the next room as your action.", "<em>Effort:</em> Attempt to slip away from one additional target looking directly at you (attempt a separate stealth task against each).", "Enabler.", "<em>At tier 3:</em> You can attempt to hide from two additional creatures, whether or not you use Effort.", ], }, 
	{ name: "Slip Into Shadow-v2", dupmajor: true, ref: ["CCR 230",], cost: 0, plus: true, pool: "Intellect", effects: ["Even if in full view of a target, your successful stealth task allows you to slip away from that creature and hide from view in a nearby shadow, behind a tree or furnishing, or in the next room as your action.", "<em>Effort:</em> Increase the number of creatures you can hide from by one (attempt a separate stealth task against each).", "Enabler.", "<em>At tier 3:</em> The base number of targets you can attempt to hide from increases to three.", ], sidebar: "<p>Slipping into shadow and other stealth-based tasks for someone who Walks Through Walls is partly enabled by their ability to phase into translucence.</p>", }, 
	{ name: "Slippery Customer", ref: ["CCR 217",], effects: ["You ignore all penalties from very dim light and darkness.", "You ignore penalties for actions in cramped spaces.", "You gain an asset on stealth tasks in dim light, very dim light, and darkness."], }, 
	{ name: "Smooth Operator", ref: ["CCR 107",], cost: 2, plus: true, pool: "Intellect", effects: ["You purchase an expensive item for the cost of a moderately priced item. You can only use this ability in a location where services and items are routinely bought and sold.", "<em>Effort:</em> Purchase a very expensive item for the cost of an expensive item (this requires two levels of Effort). Purchase an exorbitant item for the cost of a very expensive item (this requires four levels of Effort).", "This ability renews when you access a new market or when at least a month has elapsed at the same market where you last used this ability.", "Enabler.", "<em>At tier 3:</em> You can use this ability twice before it must be renewed by going somewhere else or letting enough time pass.", ], }, 
	{ name: "Snap Shot", ref: ["CCR 153",], effects: ["You can attack with your firearm and then attack again as an extra action on your turn. The second attack is hindered by two steps. Enabler.", ], }, 
	{ name: "Sneak Attack", ref: ["CCR 61", "CCR 71", "CCR 95", "CCR 110", "CCR 131", "CCR 152", "CCR 178", "CCR 194"], cost: 1, pool: "Speed", effects: ["If you use a light weapon to attack a foe under one of the following conditions, your attack inflicts +5 damage. (This ability doesn't work with medium or heavy weapons.)", ["You attack with surprise.", "An ally uses their action to ease your attack.", "Your foe's defenses are hindered due to some other ongoing direct distraction.", "Your foe is unable to take their next turn due to some disabling attack or situation.", ], ], }, 
	{ name: "Snipe", ref: ["CCR 83", "CCR 115",], cost: 2, pool: "Speed", effects: ["You spend one action aiming at a foe. If you attack that foe on your next turn, your attack is eased, and if you hit you inflict an additional 5 damage. First action.", ], }, 
	{ name: "Sniper", ref: ["CCR 153",], effects: ["You are effective at much longer range than normal. Double the range of any firearm in your hands. If making a shot at very long range (or longer), you inflict an additional 1 damage."], }, 
	{ name: "Soft Whisper", ref: ["CCR 230",], cost: 1, pool: "Intellect", effects: ["You can say something to a being within immediate range that no one else will hear. Enabler."], }, 
	{ name: "Soothe the Savage", ref: ["CCR 159", "CCR 166",], cost: 2, pool: "Intellect", effects: ["Make an Intellect attack roll to calm a nonhuman beast within short range that can see you. You must speak to them (although they don't need to understand your words). They remain calm until you use a ten-minute or longer recovery or for as long as you keep using your action to calm them. Action."], }, 
	{ name: "Soul Interrogation", ref: ["CCR 156",], cost: 5, pool: "Intellect", effects: ["You attempt to learn secret information about a foe that you can use against them. Make an Intellect attack against a creature within long range. Success means you learn their level, basic abilities, and obvious weaknesses (such as a vulnerability to fire or silver), as well as their mannerisms and personal qualities that you could discover by conversing with them for an extended time. For the next few months, your actions against them are eased. Action."], }, 
	{ name: "Speaker for the Dead", ref: ["CCR 164",], cost: 2, pool: "Intellect", effects: ["You touch a corpse of a dead being and ask it a question. It can't answer questions that it wouldn't have understood in life, and it can't provide answers that it wouldn't have known in life.", "The dead being is not compelled to answer you at all, so you might need to interact with it in a way that would have convinced it to answer while it was alive. For example, you might promise to give the corpse a proper burial, avenge their death, or carry a message to someone they knew when they were alive. This probably requires an interaction roll (typically charm or intimidation).", "Action."], }, 
	{ name: "Special Shot", ref: ["CCR 153", "CCR 203",], effects: ["When you hit a target with a firearm attack, you can choose to reduce the damage by 1 point but hit the target in a precise spot. Some of the possible effects include (but are not limited to) the following:", ["Shoot an object out of someone's hand.", "Shoot the target's leg, wing, or other limb they use to move, reducing their maximum movement speed to immediate for a few days or until they receive expert medical care.", "Shoot a strap holding a backpack, armor, or a similarly strapped-on item so that it falls off.", ], "Enabler."], }, 
	{ name: "Speed for Mind", ref: ["CCR 206",], effects: ["When attempting a Speed task, you can spend points from your Intellect Pool instead of your Speed Pool, and vice versa. Use the Edge stat for the Pool you're spending points from. Enabler.", ], }, 
	{ name: "Speed Surge", ref: ["CCR 205",], effects: ["You immediately recover 1d6 + 6 points to your Speed Pool. This ability renews when you make a ten-hour recovery. Enabler."], }, 
	{ name: "Speedy Threat", ref: ["CCR 205",], effects: ["You spin and move such that your attacks are aided by your quick motion. If you move at least an immediate distance on your turn, your melee attack that turn gains an asset. Enabler."], }, 
	{ name: "Spellbreaker", ref: ["CCR 84",], cost: 4, plus: true, pool: "Intellect", note: "Magic",  effects: ["You immediately end one ongoing magical effect (such as an effect created by a character ability, cypher, or magical device) within immediate range if you succeed on an Intellect attack against it. If you target a cypher or magical device and succeed on your Intellect attack, it doesn't function until you use a ten-minute or longer recovery.", "<em>Effort:</em> Use this ability as an enabler, allowing you to use it in response to an attack when it isn't your turn.", "Action (enabler if used defensively).", ], }, 
	{ name: "Spin Attack", ref: ["CCR 84",], cost: 5, plus: true, pool: "Speed", effects: ["You stand in one place and attack up to five foes, each as an extra action on your turn. All of the attacks have to be the same sort of attack (melee or ranged attacks). Make a separate attack roll for each foe.", "<em>Effort:</em> Attack one additional creature with this ability.", "Action.", ], }, 
	{ name: "Spin Identity", ref: ["CCR 95",], cost: 2, plus: true, pool: "Intellect", effects: ["When you roll to convince an intelligent creature (including computers and surveillance systems) that you are someone or something other than who you actually are, and your roll is less than a 6, treat the roll as a 6. (This means you don't get a GM intrusion if you roll a 1.)", ], }, 
	{ name: "Split Skull", ref: ["CCR 65",], cost: 1, pool: "Might", effects: ["You attack with an axe in a way that has a greater risk of making an error but gains an additional benefit. Your GM intrusion range for this attack increases by 2 (from 1 on a d20 to 1&ndash;3 on a d20), but if you hit you can choose one of the following additional effects:", ["<em>Brute Force:</em> The foe takes +2 damage.", "<em>Head Trauma:</em> The attack inflicts 1 less damage, but the foe's actions are hindered until they use an action to recover.", ], "Action.", ], sidebar: "<p><strong>Split Skull GM intrusions:</strong> Your axe flies out of your hand, landing a short distance away. Your axe head becomes stuck in the foe and pulls free of your grasp. Your axe haft splinters or breaks, making it unusable until repaired. Your axe ricochets and you inflict a moderate wound on yourself.</p>", }, 
	{ name: "Spray", ref: ["CCR 115", "CCR 153", "CCR 202",], cost: 2, pool: "Speed", effects: ["If a weapon has the ability to fire rapid shots without reloading (usually called a rapid-fire weapon, such as a crank crossbow or submachine gun), you can spray multiple shots around your target to increase the chance of hitting, gaining an asset to the attack. This ability uses 1d6 + 1 attacks' worth of ammunition or power (or all of the weapon's stores, if it has less ammo or power than the number rolled). If the attack is successful, it deals 1 less damage than normal. You can also use this ability on multiple thrown weapons (such as stones, shuriken, daggers, and so on) if you're carrying them on your person or they are all within reach. Action.", ], }, 
	{ name: "Spreading Fire", ref: ["CCR 148",], cost: 2, pool: "Intellect", effects: ["Once per turn if you take down a foe with an attack that inflicted fire damage, you can immediately make another fire-based attack on that same turn against a new foe within short range as an extra action on your turn. Enabler."], }, 
	{ name: "Spring Away", ref: ["CCR 197",], cost: 5, pool: "Speed", effects: ["After successfully dodging an attack or some other danger, you can immediately move up to a short distance. (This movement doesn't hinder your tasks.) Once you use this ability, you can't use it again until your next turn. Enabler."], }, 
	{ name: "Sprint and Grab", ref: ["CCR 195",], cost: 2, pool: "Speed", effects: ["You move a short distance and make a melee attack to grab a foe of your size or smaller. (Unlike a normal situation of taking an action and moving a short distance, this doesn't hinder your tasks.) A successful attack means you grab the foe and bring it to a halt if it was moving (this can be treated as a tackle, if appropriate). Action."], }, 
	{ name: "Steady Hand", ref: ["CCR 200",], cost: 1, pool: "Intellect", effects: ["Using your telekinesis to stabilize yourself or improve your grip, you gain a free level of Effort to use on one physical noncombat task. You can't use this ability again until after you take a recovery action. Enabler."], }, 
	{ name: "Still As a Statue", ref: ["CCR 147",], cost: 5, pool: "Might", effects: ["You freeze in place, burying your essence deep in your stone core. During this time, you lose all mobility as well as the ability to take physical actions. You cannot sense what's happening around you, and no time seems to pass for you. While using this ability, any wounds you take are reduced in severity by two steps. You rouse to normal wakefulness and mobility 24 hours later, removing three wounds of any severity. If an ally shakes you hard enough (with a minimum cost of 2 Might on their part), you rouse earlier, but no wounds (if you have any) are removed. Action to initiate.", ], }, 
	{ name: "Stimulate", ref: ["CCR 199",], cost: 6, pool: "Intellect", effects: ["Your words encourage a target in immediate range who can understand you. The next action they take is eased by three steps. (For this task, the asset limit is three instead of two.) Action.", ], }, 
	{ name: "Stone Bash", ref: ["CCR 146",], effects: ["Your unarmed attack this round inflicts an additional 2 damage if you make it as a Last action.", ], }, 
	{ name: "Stone Body", ref: ["CCR 146",], effects: ["Your body is made of a hard substance like stone or crystal. Work with your GM to decide your exact form, though it is likely about the shape and size of a humanoid. You do not need to eat, drink, or breathe (though you do need rest and sleep).", "As a being of mineral, you can take two more minor wounds than normal and ease block rolls, and your unarmed attacks deal an additional 2 damage.", "Due to your relative mineral inflexibility, you have an inability in dodge tasks.", ], }, 
	{ name: "Stoneknowing", ref: ["CCR 146",], cost: 1, pool: "Intellect", effects: ["You are trained in working any kind of stone.", "In addition, if you touch a crystal or stone object or structure and concentrate, you learn its level and perhaps some relevant facts about its materials and structure. For example, you could learn that a brick wall is level 3 and conceals a hidden space behind it or that a boulder is level 5 and contains iron ore. Your GM may require an Intellect task for you to learn something especially subtle or secret. Last action.", ], }, 
	{ name: "Strategize", ref: ["CCR 83",], cost: 4, pool: "Intellect", effects: ["Having an action plan in place before facing a challenge improves the odds of success, even if that plan is eventually changed or discarded once it's put into play. If you and your allies spend at least ten minutes going over a plan of action and you try to enact the plan before you use a ten-hour recovery, your GM provides a useful piece of information about the situation, either immediately if you've missed something or as it comes up sometime during the execution of the plan. The plan of action must be something concrete and executable in order to gain this benefit. Ten minutes to activate.", ], }, 
	{ name: "Stretchy", ref: ["CCR 141",], effects: ["Your body is elastic and rubbery, granting you the following benefits." , "You can take an extra moderate wound." , "As your action, you can stretch and reshape your body and limbs thin enough to easily pull free from mundane bindings, or squeeze through a tight spot as small as half an inch (1 cm) in diameter.", "You can stretch your arms up to a long distance, allowing you to touch, grab, or interact with anything you can see as if you were standing next to it and could use your hands normally.", "You can attempt to grab a creature as an eased attack by enveloping yourself around them or wrapping them in extra lengths of your stretchy limbs. If you hit, you prevent them from moving on their turn, and their physical attacks are hindered. If they try to escape, you must succeed at a Might task to maintain your grip. As your action, you can automatically inflict 4 damage to a grabbed target by squeezing them.", ], }, 
	{ name: "Stronger Together", ref: ["CCR 167",], effects: ["When you and your beast companion (or a beast you've calmed with Soothe the Savage) are within immediate distance of each other, you inflict an additional 2 damage when you attack and both of you gain an asset to defense tasks. Enabler."], }, 
	{ name: "Structural Brace", ref: ["CCR 147",], cost: 5, plus: true, pool: "Might", effects: ["You serve as a structural brace, additional pillar, or other support buttress for a structure in danger of collapsing. If you need to roll to prevent the structure from collapsing and your roll is 18 or less, treat the roll as an 18. (This means you don't get a GM intrusion if you roll a 1.) While serving as a brace, you cannot move from where you are and you automatically fail dodge tasks. You can take an extra action on your turn to end the effect early; otherwise it ends when you take a ten-hour recovery.", "Alternatively, you can simply hold up a mighty weight of up to 50 tons (45 tonnes) or use this ability to hold a door or gate shut (treating a roll of 18 or less as an 18, or higher with Effort).", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3. Increase the weight you can hold by 10 tons (9 tonnes).", "Action to initiate.", ], }, 
	{ name: "Stunning Attack", ref: ["CCR 181",], effects: ["When making an unarmed attack, you can choose to have the attack roll be hindered; if you hit, in addition to the normal effect of the attack, the foe loses their next turn. Enabler."], }, 
	{ name: "Subsonic Rumble", ref: ["CCR 215",], cost: 5, pool: "Intellect", effects: ["You emit an unnerving subsonic rumble that most living creatures can't hear but that affects them all the same. For creatures within short range, attempts to charm them, intimidate them, or frighten them are eased by two steps. You continue to emit this rumble until you use a ten-minute or longer recovery. Action to initiate."], }, 
	{ name: "Successive Attack", ref: ["CCR 51", "CCR 132", "CCR 134",], cost: 2, pool: "Speed or Might", effects: ["Once per turn if you take down a foe, you can immediately make another attack on that same turn against a new foe within your reach as an extra action on your turn. You can use this ability with melee attacks and ranged attacks. Enabler.", ], }, 
	{ name: "Summon Giant Spider", ref: ["CCR 156",], cost: 4, plus: true, pool: "Intellect", effects: ["You conjure a giant spider, which appears within immediate range. The spider acts according to its nature, attacking a nearby creature that looks like suitable prey. The spider remains until you use a ten-minute or longer recovery, then fades away.", "<em>Effort:</em> Make the spider understand you and obey your verbal instructions.", "Action to initiate."], sidebar: "<p><strong>Giant spider:</strong> level 3, perception as level 5, Speed defense as level 4 due to quickness; health 12; bite inflicts 3 damage plus 1 Speed damage from poison (ignores armor); moves a long distance each round when on webs</p>", }, 
	{ name: "Super Combatant", ref: ["CCR 130", "CCR 131", "CCR 134", "CCR 135", "CCR 137",], effects: ["You are trained in a specific attack of your choice, such as eye lasers, punches, or guns; or in a broader category of attacks such as light bashing weapons, light bladed weapons, light ranged weapons, medium bashing weapons, medium bladed weapons, medium ranged weapons, and so on.", "<em>At tier 2:</em> You can choose to become specialized in the same attack method you chose at tier 1, but you must gain the skill normally (such as from a character advancement).", "<em>At tier 6:</em> You can become an expert in a specific attack method (either the one you chose at tier 1 or another weapon skill you're already specialized in), but you must gain the skill normally.", ], }, 
	{ name: "Superhero Versatility", ref: ["CCR 144",], effects: ["Gain 12 Pool points, dividing them among your Pools as you wish.", ], }, 
	{ name: "Superheroics", ref: ["CCR 129", "CCR 130", "CCR 131", "CCR 132", "CCR 133", "CCR 134", "CCR 135", "CCR 137"], effects: ["Choose one Pool: Might, Speed, or Intellect. For tasks using your chosen Pool, add your rank to the amount of Effort you can apply, allowing you to apply additional levels of Effort to tasks in that Pool.", "In addition, you can choose to push yourself so hard that you take a moderate wound in exchange for two free levels of Effort you can apply to tasks in your chosen Pool (as long as this doesn't push you past your Effort limit for that Pool).", "Finally, add your rank as a bonus to your recovery, with those points going only into the Pool you have chosen.", ], }, 
	{ name: "Superior Healer", ref: ["CCR 229",], cost: 0, plus: true, pool: "Intellect", effects: ["If you have Font of Recovery or Font of Healing, the ally can spend 2 additional Intellect for twice the normal benefit.", "If you have Resuscitate, it heals twice the normal number of wounds, and you can revive a creature who has been dead for no more than an hour.", "If you have Healing Shield, the ally gains two assets instead of one, and can use them together on one block roll or separately on two different block rolls.", "<em>Effort:</em> Extend the death time limit of Resuscitate to 24 hours, a week (two levels of Effort), a month (three levels of Effort), or a year (five levels of Effort).", "Enabler."], }, 
	{ name: "Supernatural Leap", ref: ["CCR 224",], effects: ["When you jump, you move twice as far as normal, either horizontally or vertically. Enabler."], }, 
	{ name: "Supreme Retribution", ref: ["CCR 210",], cost: 8, pool: "Intellect", effects: ["You call down a shaft of roaring radiant flame in an immediate area within long range. Make separate Intellect attacks against each creature in the area. Success means you inflict 4 damage; all creatures take 1 damage even on a failed attack roll. Choose one creature in the area to take an additional 3 damage regardless of whether your attack succeeded or failed. Action."], }, 
	{ name: "Surging Hand", ref: ["CCR 224",], cost: 2, pool: "Speed", effects: ["You call upon your mystic source and project it at a target within short range, inflicting 4 damage with a successful Speed attack. Action."], }, 
	{ name: "Survivor", ref: ["CCR 177",], effects: ["If you have a minor or moderate wound, you can rally without using any Might points. This ability renews each time you take a recovery. Enabler."], }, 
	{ name: "Swing Through", ref: ["CCR 70",], cost: 1, pool: "Speed", effects: ["You attack with a sword in a way that has a greater risk of making an error but gains an additional benefit. Your GM intrusion range for this attack increases by 2 (from 1 on a d20 to 1&ndash;3 on a d20), but if you hit you can choose one of the following additional effects:", ["<em>Eat Steel:</em> The foe takes +2 damage.", "<em>Slice and Step:</em> You reposition your foe or yourself an immediate distance away, easing your attack on your next turn (whether against that foe or a different one).", ], "Action.", ], sidebar: "<p><strong>Swing Through GM intrusions:</strong> Your sword chips or bends, reducing its damage by 1 until repaired. Your sword goes flying, landing a short distance away. Your foe deflects your attack, and you inflict a moderate wound on yourself.</p>", }, 
	{ name: "Talons or Claws", ref: ["CCR 191",], cost: 1, pool: "Might", effects: ["You can make your fingertips grow sharp talons or claws (whichever matches your beast form) until you use a ten-minute or longer recovery, during which time your unarmed attacks deal an additional 1 damage. Action when in your normal form; enabler when using Beast Form."], }, 
	{ name: "Taunting Defense", ref: ["CCR 182",], cost: 2, pool: "Intellect", effects: ["When you defend against a melee attack, your mocking moves, entertaining quips at your foe's expense, or a certain something draws out your foe's anger. Your foe's attack is hindered, but if they hit, they deal an additional minor wound. Enabler."], }, 
	{ name: "Team-Up Ally", ref: ["CCR 144",], effects: ["You have an NPC ally who is a level 4 superhero. They have one ability from the Origin Superhero Abilities list (other than Team-Up Ally) and the modifications of a level 4 follower. You and your GM must work out their name, appearance, and personality, and how their superhero ability works as an NPC ability. (Alternatively, your ally could be an unusual super-powered pet, such as a tiny dragon from an alternate dimension, a strange alien techno-organic being, or something else unexpected.)" , "Anytime you wish to have your ally accompany you on an outing, your GM decides if they're available, depending on circumstances, and you must succeed at a difficulty 2 charm task.", "If your ally is supposedly killed, they were actually only knocked unconscious or severely hurt. They can be restored using your resource points plus several weeks of care you arrange or provide.", ], }, 
	{ name: "Technology Expert", ref: ["CCR 116",], effects: ["When you roll to use any kind of mechanical device (other than a weapon) and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.)", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "<em>At tier 3:</em> The minimum number rolled for this ability increases to 12.", ], }, 
	{ name: "Telekinesis", dupminor: true, ref: ["CCR 200",], cost: 2, pool: "Intellect", effects: ["You telekinetically affect an object you can see within long range that is not too heavy for you to physically affect if you were standing next to it and could use your hands normally. Options include closing or opening a door, writing a simple symbol or a few words with a writing instrument, transferring an object a short distance, wresting an object from another creature's grasp (on a successful Intellect roll versus their level), pushing a creature an immediate distance (with a successful attack roll), or even hindering a creature's attack or defense by applying restraining pressure to a leg or arm (with a successful attack roll). In all cases, the effect must occur over the course of one round. Action."], }, 
	{ name: "Telekinetic Crush", ref: ["CCR 213",], cost: 4, pool: "Intellect", effects: ["Make a hindered Intellect attack against a nonliving foe (such as a robot or zombie). If you succeed, you crush them, inflicting 6 damage. Action."], }, 
	{ name: "Telekinetic Throw", ref: ["CCR 213",], cost: 5, pool: "Intellect", effects: ["You telekinetically grab an object within short range and hurl it at a target within short range. (To throw a creature instead of an object, you first have to telekinetically grab them with a successful Intellect attack.) Make an Intellect attack against your target. If you succeed, your target and whatever you throw each take 6 damage. Action."], }, 
	{ name: "Telepathic Bond", ref: ["CCR 162",], cost: 2, pool: "Intellect", effects: ["You create a bond between yourself and another creature, allowing the two of you to communicate mentally at will. You must touch the creature to activate this and they must be willing. Either of you can dissolve the bond as a Last action. You two can speak telepathically with each other at any time as long as you are both willing and are within 100 miles (160 km) of each other. You can have only one telepathic bond at a time. Last action to form bond or dissolve it."], }, 
	{ name: "Telepathic Message", ref: ["CCR 212",], cost: 2, plus: true, pool: "Intellect", effects: ["You can send a one-way telepathic message lasting about a minute. You must have at least seen the target before, and they must be on the same planet as you. The target recognizes the contact as a telepathic message and may recognize your mental \"voice.\"", "<em>Effort:</em> Increase the range to anywhere in the same star system. Increase the range to anywhere in the same galaxy (this requires three levels of Effort). Action to initiate."], }, 
	{ name: "Telepathic Network", dupminor: true, ref: ["CCR 116", "CCR 163",], cost: 0, plus: true, pool: "Intellect", effects: ["You create a telepathic network between yourself and up to ten willing creatures you know, no matter where they are. All creatures in the network are linked and can communicate telepathically with one another. They can also \"overhear\" anything said in the network. Activating or using this ability doesn't require an action and doesn't cost Intellect points; to you, it's as easy as speaking out loud. The network lasts until you choose to end it.", "<em>Effort:</em> Increase the base number of people in the network to twenty (5 Intellect), lasting until you use a ten-minute or longer recovery; each additional ten people costs 1 Intellect.", "Enabler to create a network; action to create an expanded network (twenty or more people).", ], }, 
	{ name: "Telepathic Prodigy", ref: ["CCR 144",], effects: ["You can speak telepathically with a creature within long range. Communication is two-way, but the other party must be willing and able to communicate. You don't have to see the target, but you must know that they are within range.", "<em>Effort:</em> Read an unwilling creature's surface thoughts if you succeed at an Intellect task against them; this also allows you to telepathically speak to them even if they don't want to listen, and lasts until you use a ten-minute or longer recovery. Enabler.", ], }, 
	{ name: "Telepathic", ref: ["CCR 162",], cost: 1, plus: true, pool: "Intellect", effects: ["You can speak telepathically with others who are within long range. Communication is two-way, but the other party must be willing and able to communicate. You don't have to see the target, but you must know that they're within range. You can have more than one active contact at once, but you must establish contact with each target individually. Each contact lasts until you use a ten-minute or longer recovery.", "<em>Effort:</em> Increase the duration so it lasts until you use a ten-hour recovery. ", "Action to establish contact."], }, 
	{ name: "Terrifying Gaze", ref: ["CCR 165",], cost: 6, pool: "Intellect", effects: ["You project a fearsome gaze at up to five living creatures within short range who can see you. Make a separate Intellect attack roll for each creature. Success means that the creature is frozen in fear, not moving or taking actions until you use a ten-minute or longer recovery, they are attacked, or you leave their field of view. Some creatures without minds (such as slime monsters or animated statues) might be immune to Terrifying Gaze. Action."], }, 
	{ name: "Terrifying Image", ref: ["CCR 169",], cost: 6, pool: "Intellect", effects: ["You can terrify foes with illusions created from their own fears. Make separate Intellect attacks against up to five creatures within long range. Success means a creature flees in terror, pursued by their nightmares until they've fled at least a very long distance or you use a ten-minute or longer recovery. Failure means the creature ignores the images, which do not hamper them in any way. Action."], }, 
	{ name: "That Was a Feint", ref: ["CCR 203",], cost: 5,  pool: "Might or Speed", effects: ["You immediately retry a failed attack roll with your chosen weapon, except this time you have an asset on the task. If this retry fails, you can't use this ability to retry it again. Enabler."], }, 
	{ name: "The Wild Is on Your Side", ref: ["CCR 177",], cost: 5, pool: "Intellect", effects: ["Nature itself intervenes against your foes within short range. Until you use a ten-minute or longer recovery, rocks trip them, vines entangle them, insects bite them, small animals distract or confuse them, and so on, hindering all their tasks. You can only use this ability when in a wilderness environment. Enabler."], }, 
	{ name: "Think Fast", ref: ["CCR 186",], effects: ["Your mind is quick and elusive. You are trained in Intellect defense."], }, 
	{ name: "Throw Shield", ref: ["CCR 223",], cost: 0, plus: true, pool: "Speed", effects: ["You throw your shield as a short-range light weapon. Whether the shield hits or misses, it bounces back to your grasp if you succeed on a difficulty 2 Speed task.", "<em>Effort:</em> A successful hit with the shield also hinders the target for one round.", "Action."], sidebar: "<p>When using Throw Shield, if you throw your shield and fail to catch it when it rebounds, it most likely ends up a short distance from you.</p>", }, 
	{ name: "Throw Weapon", ref: ["CCR 202",], cost: 1, plus: true, pool: "Speed", effects: ["You throw your light or medium melee weapon at a foe within short range as if it were a medium thrown weapon. Whether the weapon hits or misses, it rebounds back to your grasp if you succeed on a difficulty 3 Speed task (or difficulty 4 if the weapon is edged).", "<em>Effort:</em> Throw a heavy weapon (instead of a light or medium weapon) as a Last action.", "Action; Last action to throw heavy weapon."], sidebar: "<p>If you throw your weapon and fail to catch it after it rebounds, it most likely ends up a short distance from you.</p>", }, 
	{ name: "Throw", ref: ["CCR 181",], cost: 2, pool: "Might", effects: ["When your unarmed attack damages a creature of your size or smaller, you throw that creature 1d20 feet away from you. The creature lands prone. Enabler."], }, 
	{ name: "Thunder Crash", ref: ["CCR 214",], cost: 2, pool: "Intellect", effects: ["You affect a target in long range with overwhelming thunder. With a successful Speed attack, you inflict 2 damage and induce a tremor in their body. Each round after this initial attack, as an extra action on your turn you can make another attack roll for the destructive tremor to inflict an additional 1 damage on the target. If you fail this roll, the tremor ends.", "Action to initiate."], }, 
	{ name: "Total Awareness", ref: ["CCR 213",], effects: ["You automatically and frequently use your special senses to check your immediate vicinity, making it very difficult to surprise, hide from, or sneak up on you. When you use Effort on initiative and perception tasks, you gain two free levels of Effort. Enabler."], }, 
	{ name: "Totally Chill", ref: ["CCR 170",], effects: ["Your ten-minute recovery takes you only one action, and your hour-long recovery takes ten minutes."], }, 
	{ name: "Tough", ref: ["CCR 83", "CCR 176",], effects: ["You can take an additional minor wound.", ], }, 
	{ name: "Tower of Will", ref: ["CCR 223",], effects: ["You have an asset to Intellect defense tasks and add +3 points to your Intellect Pool. Enabler."], }, 
	{ name: "Towering Strike", ref: ["CCR 189",], cost: 3, pool: "Might", effects: ["When you hit with a Might attack, you deal an additional 4 damage. While bigger than normal, each increment (Enlarge, Bigger, Huge, Gargantuan, and Colossal) inflicts an additional 1 damage. This ability renews after you take a recovery. Enabler."], }, 
	{ name: "Towering Throw", ref: ["CCR 188",], cost: 2, pool: "Might", effects: ["When you deal damage to a creature of your size or smaller with an unarmed attack, you throw that creature 1d20 feet away from you. The creature lands prone. While bigger than normal, each increment (Enlarge, Bigger, Huge, Gargantuan, and Colossal) increases the distance you throw the creature by another 1d6 feet and deals an additional 1 damage upon their impact. Enabler."], }, 
	{ name: "Tribulation", ref: ["CCR 57", "CCR 210",], cost: 1, plus: true, pool: "Intellect", effects: ["You conjure pure spiritual energy to blast up to five undead, demons, and creatures of similar ilk of level 2 or less within short range. If you succeed on a separate Intellect attack against each foe, you choose whether they spend their next turn fleeing or lose their next turn.", "<em>Effort:</em> Increase the maximum level of the foe you can affect by 1. Specify some other action for the creatures to perform for one round, such as attacking a foe of your choice.", "Last action.", ], sidebar: "<p>\" Creatures of similar ilk\"  could include additional categories of ineffably evil entities, depending on the campaign. Work with your GM to determine the details if there are any questions. For instance, other hellish creatures, fallen angels, Lovecraftian creatures, creatures from the \"Crawling Deeps,\"  or creatures born of \"the Strange\"  might be just as anathematic as undead and demons.</p>", }, 
	{ name: "True Necromancy", ref: ["CCR 165",], cost: 8, plus: true, pool: "Intellect", effects: ["You animate the body of a dead creature up to twice your size within short range, creating a level 5 follower that is an undead creature. It has none of the intelligence, memories, or special abilities that it had in life. The creature follows your verbal commands until you use a one-hour or longer recovery, at which time it becomes an inert corpse. You can reanimate it again when it becomes inert or if it is \"killed\"  by damage (though you may have to spend some time with a needle and thread to reattach detached or loose parts).", "Each animated creature beyond the first costs 3 additional Intellect points (so 11 points for two bodies, 14 points for three, and so on).", "Action to animate."], }, 
	{ name: "Twisting the Knife", ref: ["CCR 178",], cost: 4, pool: "Speed", effects: ["If you've hit a foe with a melee weapon in this combat, you automatically hit them again with that same weapon (no roll required), dealing normal damage. You can't use this ability with a special attack or if you want to use Effort to increase damage, but abilities that automatically affect your damage do apply to this attack. Action."], }, 
	{ name: "Unbalancing Strike", ref: ["CCR 213", "CCR 216",], cost: 4, pool: "Speed", effects: ["Make a melee attack to knock your foe off balance. This attack is eased by two steps. If you succeed, you inflict damage and all actions they attempt on their next turn are hindered. Action."], }, 
	{ name: "Unbelievable Transformation", ref: ["CCR 144",], effects: ["Your body physically changes from its base state, allowing you to alter your posture, voice, hair, skin, features, and size (up or down by an apparent 50 percent). You can even change the clothing and equipment you appear to wear or carry; however, these are actually part of you and, as such, have limited functionality.", "You can choose random features or adopt the appearance of a specific individual you've spent at least one minute carefully studying within short range. Effectively, you don't need a disguise kit to attempt a disguise, nor do you require the minute or more it normally takes to apply a mundane disguise. If this disguise comes under direct scrutiny or challenge, you gain two additional assets to your disguise task to maintain the deception.", "Last action.", ], }, 
	{ name: "Uncanny Flight", ref: ["CCR 144",], effects: ["You can fly. You can move a short distance and take an action, or move a long distance as your action. You have fine control over your flight, can hover in place, and can attempt complicated flight maneuvers. You can carry one creature of your size or smaller (or possibly much more, depending on your strength).", ], }, 
	{ name: "Understand Beast", ref: ["CCR 166",], cost: 2, pool: "Intellect", effects: ["You sense the level, the nature, and any special abilities of a nonhuman creature within immediate range. Last action."], sidebar: "<p>The GM has final say over what counts as a nonhuman beast. Unless some kind of deception is at work, you should know whether you can affect a creature before you attempt to use Soothe the Savage on them. Aliens, extradimensional entities, very intelligent creatures, and robots never count.</p>", }, 
	{ name: "Underworld Contacts", ref: ["CCR 216",], effects: ["You know many people in a variety of communities who engage in illegal activities. These people are not necessarily your friends and might not be trustworthy, but they recognize you as a peer. You and the GM should work out the details of your underworld contacts.", ], }, 
	{ name: "Unearth Evil", ref: ["CCR 210",], cost: 4, plus: true, pool: "Intellect", effects: ["You detect the faint whiff of undead, demons, and similar ilk from a great distance. When you use this ability, you generate a mental \"heat map\"  of qualifying creatures within a 10-mile (16 km) radius. Affected creature locations are accurate to within about 100 feet (30 m). This takes anywhere from an hour to a full day of concentration, depending on what the GM feels is appropriate due to time, distance, or other mitigating circumstances. However, you don't know in advance how long it will take. Creatures of level 4 or higher are aware that something has noticed them, but they don't necessarily realize what.", "<em>Effort:</em> Once you have established where each qualifying target is located, you retain a sense of their locations (so if they move, you are aware of their new position) until you use a one-hour or longer recovery (this requires two levels of Effort).", "Action to initiate."], sidebar: "<p>A heat map is a simple map of an area using colors to show the intensity of something in a visual way, like showing where things are \"hot\"  or \"cold\" &mdash;or, in this case, \"evil.\"</p>", }, 
	{ name: "Unmovable", ref: ["CCR 223",], cost: 3, pool: "Might", effects: ["You avoid being knocked down, pushed back, or moved against your will as long as you are upright and able to take actions. Enabler."], }, 
	{ name: "Untamed Recovery", ref: ["CCR 176",], effects: ["You gain an extra one-action recovery each day."], }, 
	{ name: "Untouchable", ref: ["CCR 230",], cost: 6, pool: "Intellect", effects: ["You change your phase state so that you can't affect or be affected by normal matter or energy. Only mental attacks and special transdimensional energies, devices, or abilities can affect you, but likewise you can't physically attack, touch, or otherwise affect anything. This lasts until you use a ten-minute or longer recovery. Action to initiate."], }, 
	{ name: "Unyielding Shield", ref: ["CCR 144",], effects: ["You carry a nearly unbreakable shield. If it takes a major wound for you, instead of it being destroyed, you lose your next turn from the force traveling through the shield (or the GM may instead trigger a GM intrusion).", "Whenever you take a recovery, remove all minor and moderate wounds from the shield.", "You can freely use the shield in one hand as a light melee weapon. You can throw your shield as a short-range light weapon. Whether the thrown shield hits or misses, you can attempt a difficulty 2 Speed task for it to bounce back to your grasp.", "<em>Effort:</em> A successful hit with the shield also hinders the target for one round.", ], sidebar: "<p>If you lose your shield, you can (depending on your skill) craft a replacement or arrange for one to be made for you, requiring 1d6 days of concerted effort.</p>", }, 
	{ name: "Up to Speed", ref: ["CCR 205",], effects: ["If you do nothing but move for three actions in a row, you accelerate greatly and can move up to about 200 mph (320 km/h)&mdash;about 2000 feet (600 m) each round&mdash;for ten minutes or about 35 miles (60 km). After this you must stop and take a recovery. Enabler."], }, 
	{ name: "Use Senses of Others", ref: ["CCR 163",], cost: 4, pool: "Intellect", effects: ["You can see, hear, smell, touch, and taste through the senses of another creature within long range. You don't need to see the creature, but you must know that they are within range, and if they are intelligent and unwilling, you must succeed on an Intellect attack to begin sensing through their senses. Your shared senses last until you use a ten-minute or longer recovery. Action to establish."], }, 
	{ name: "Use the Force", ref: ["CCR 212",], cost: 2, pool: "Intellect", effects: ["You gain an asset on a single noncombat task you attempt this turn. You cannot use this ability again until after you take a recovery. Enabler."], }, 
	{ name: "Using the Environment", dupminor: true, ref: ["CCR 178", "CCR 183",], cost: 4, pool: "Intellect", effects: ["You can use the environment to your advantage. If there is something within immediate distance that plausibly could provide cover (a table, chandelier, banister, second foe, and so on), you have cover and an asset on your melee attacks.", "It is a routine task (no roll required) for you to move anywhere that it is physically possible for you to reach as part of normal movement, climbing, or jumping, and you ignore obstacles and difficult terrain when you do so. For example, you could climb up a tapestry to a balcony or slide down a ship's sail, but not slip through an arrow slit or enter a locked cage.", "This ability lasts until you use a ten-minute or longer recovery.", "Enabler."], }, 
	{ name: "Vindictive Performance", ref: ["CCR 175",], cost: 5, pool: "Intellect", effects: ["When you tell a joke, perform a song or poem, draw a picture, relate an anecdote, or otherwise provide entertainment, you can select one creature within short range who is able to understand you. During your performance, you heap indirect but biting derision on this creature. If you succeed, the creature doesn't realize that they've become the victim of your performance until you wrap up the entertainment at a moment you choose in a way that strikes home. The creature takes 6 Intellect damage (ignores armor) and loses their next turn. One or more actions to initiate."], }, 
	{ name: "Walk Through Walls", ref: ["CCR 230",], cost: 2, plus: true, pool: "Intellect", effects: ["You can slowly pass through physical barriers of level 5 or lower at a rate of 1 foot (30 cm) per round (minimum of one Last action to pass through any barrier). You can perceive while phased within a barrier or object, which could allow you to peek through walls. You can't use this ability to pass through energy barriers.", "<em>Effort:</em> Increase the maximum level of the barrier you can pass through by 1.", "Last action."], }, 
	{ name: "Wall of Bones", ref: ["CCR 165",], cost: 5, pool: "Intellect", effects: ["You create a barrier of bones tainted with undeath composed of four 10-foot by 10-foot (3.5 m by 3.5 m) squares, each 1 inch (2.5 cm) thick, arranged as you wish. The wall is a level 5 barrier. One or both sides emanate necrotic energy; anyone within immediate distance of such a side takes 5 damage (no rolls required) or double that if they pass through. The wall lasts until you use a ten-minute or longer recovery. Action to create."], }, 
	{ name: "Wall of Lightning", ref: ["CCR 215",], cost: 8, pool: "Intellect", effects: ["You create a barrier of crackling electricity composed of six 10-foot by 10-foot (3.5 m by 3.5 m) squares, each 1 inch (2.5 cm) thick, arranged as you wish. The wall is a level 7 barrier. One or both sides crackle with excess electricity; anyone within immediate distance of an energized side takes 10 damage (no rolls required), or double that if they pass through. The wall lasts until you use a ten-minute or longer recovery. Action to create."], }, 
	{ name: "Warm Air", ref: ["CCR 148",], effects: ["While your Shroud of Flame is active, you heat the air beneath you, allowing you to fall up to 10 feet (3.5 m) safely. Falls of greater than 10 feet are treated as 10 feet less. Enabler."], }, 
	{ name: "Wasteland Healer", ref: ["CCR 113",], cost: 2, pool: "Intellect", effects: ["With access to a scavenged doctor's bag (or similar equipment), you can use treatment in half the normal amount of time or treat twice as many wounds for one character in the normal time. Enabler.", ], }, 
	{ name: "Weapon Master", ref: ["CCR 202",], effects: ["You're proficient in using one kind of weapon (such as medium blades, light bashing, or heavy ranged) that would otherwise be unfamiliar to you. You can freely use this kind of weapon and suffer no penalty when using one.", "You inflict an additional 1 damage with this kind of weapon.", "You are trained in crafting your chosen kind of weapon. (Crafting training allows you to easily craft and repair weapons of that type using your resources.)", "You can gain this ability multiple times. Each time you do so, pick a new kind of weapon to master."], }, 
	{ name: "Weapon Switch", ref: ["CCR 72",], effects: ["As an extra action on your turn, you change which weapons you're holding in each hand. This might entail swapping your left and right weapons, sheathing them and drawing new ones, flipping and catching one or both of them, dropping one to switch to a two-handed grip, or something similar. This maneuver is so startling, unexpected, and impressive that your next attack is eased by two steps. Once you use this ability, you can't use it again until after your next recovery. Enabler.", ], }, 
	{ name: "Weaponization", ref: ["CCR 184",], effects: ["You have a weapon built into your body. Choose one light or medium one-handed weapon, such as a broadsword, baton, or medium pistol. You are trained in this weapon. You can hide or reveal this weapon as an extra action on your turn.", "If your embedded weapon is a firearm, it reloads through a slot in your arm, can hold ten shots, and fires through a disguised barrel in the center of the palm of your hand.", "Instead of embedding a weapon, you can embed a multitool that counts as either a set of light tools or a set of heavy tools (your choice when you gain this ability)."], }, 
	{ name: "Weave an Iron Wall", ref: ["CCR 223",], cost: 5, pool: "Might or Speed", effects: ["You slash and weave your weapons so quickly, they almost resemble a wall. This barrier is large enough to block access through an immediate area. You must use your action every round to maintain the barrier. Any creature that attempts to cross through your barrier takes 10 damage (no roll needed); as an extra action you can attempt a melee attack against them, pushing them back if you succeed. Action to initiate."], }, 
	{ name: "When the Deal Bombs", ref: ["CCR 110", "CCR 178"], effects: ["There's always a risk that someone you deal with will try to turn on you. After successfully charming, deceiving, interacting positively with, or using Fast Talk or a similar ability on a creature, if they become hostile to you within a day or so, you automatically reduce the wound severity of their first successful attack against you by one step. Enabler.", "<em>At tier 3:</em> Instead of reducing the wound's severity, you ignore it completely (no damage).", ], }, 
	{ name: "Wider Use", ref: ["CCR 133",], effects: ["When you pick your focus, in addition to choosing two tier 1 abilities, you also choose one tier 2 ability.", ], }, 
	{ name: "Wild Affinity", ref: ["CCR 220",], effects: ["A natural wild animal in its right mind and in its natural environment will not attack you unless provoked or controlled."], }, 
	{ name: "Wild Camouflage", ref: ["CCR 177",], cost: 4, pool: "Intellect", effects: ["By adjusting your clothing, using various disguise tricks, and drawing upon your deep knowledge of your surroundings, you are hard to make out in the wilderness until you use a ten-minute or longer recovery. While you are camouflaged, you gain two assets to dodge and stealth. This effect ends early if you do something to reveal your presence or position&mdash;attacking, using a special ability with an obvious effect, moving a large object, and so on. Action."], }, 
	{ name: "Wilderness Awareness", ref: ["CCR 177",], cost: 4, pool: "Intellect", effects: ["Your connection to the natural world extends to a degree that some would call supernatural. While in the wilderness, you can extend your senses 1 mile (1.6 km) in any direction and ask the GM a very simple, general question about that area, such as \"Where is the enemy camp?\"  or \"Is my friend Deithan still alive?\"  or \"Where's the most poisonous thing I could find?\"  If the answer you seek is not in the area, you receive no information. Action."], }, 
	{ name: "Wilderness Encouragement", ref: ["CCR 177", "CCR 221"], cost: 3, pool: "Intellect", effects: ["Your knowledge and experience allow you to help others rest and recover. While in the wilderness or when talking about your time in the wilderness, choose one ally within short range who can understand you (you can choose yourself). The ally can immediately make an extra one-action recovery or remove a moderate wound. You can't use this ability on the same creature again until they've used one of their own recoveries. Action."], }, 
	{ name: "Wilderness Experience", ref: ["CCR 220",], effects: ["Given an hour or so, you can always find edible food and potable water in the wilderness, enough to feed yourself and a few other people.", "Your experience with venomous animals and poisonous plants gives you some additional protection against them. Your defense rolls against poison are eased and you reduce the severity of wounds from poison by one step (major to moderate, moderate to minor, minor to none). For example, if you are bitten by a snake whose poison inflicts a moderate wound, you'd only take a minor wound from the poison.", "You are immune to natural diseases.", "When in the wild, you ignore any task penalties and movement penalties affecting you due to tall grass, thick brush, rugged terrain, weather, and other natural causes."], }, 
	{ name: "Wilderness Survival", ref: ["CCR 45",], effects: ["You know how to survive in unpeopled lands. After spending at least ten minutes in the wilderness and succeeding on a difficulty 2 outdoor survival task (or a difficulty your GM determines is appropriate to the area), you find something useful you were seeking. The useful thing might be shelter in the form of a cave or tree hollow, all the makings necessary to start a fire, a game animal you bring down with ease, or berries, mushrooms, root vegetables, or other food. You know how to best prepare any game or vegetation you find and are able to feed yourself and up to five allies.", ], }, 
	{ name: "Will of a Leader", ref: ["CCR 84",], cost: 9, pool: "Intellect", effects: ["You harden your allies' dedication and capabilities with an inspiring speech that lasts at least a minute. All allies within immediate range (including yourself) add +1 Edge to one stat (chosen by each individual). This lasts until they use a one-hour or longer recovery; one individual ending the ability doesn't affect the duration for other allies. One minute to complete.", ], }, 
	{ name: "Willing Sacrifice", ref: ["CCR 175",], effects: ["When you successfully draw the attack or take the attack meant for another character and you fail to dodge or block the attack, reduce the severity of the attack's wound by one step (major to moderate, moderate to minor, minor to none).", "You can draw or take more than one attack in a given round if all of the attacks were meant for one target.", "Enabler."], }, 
	{ name: "Wings of Fire", ref: ["CCR 149",], cost: 4, pool: "Intellect", effects: ["While your Shroud of Flame is active, you can spread wings of fire and fly until you use a ten-minute or longer recovery, moving at a rate of up to 20 feet (6 m) per round in any direction. You can also take one other non-movement action as an extra action on your turn. Action to initiate."], }, 
	{ name: "Wings", ref: ["CCR 192",], cost: 4, pool: "Might", effects: ["You sprout wings massive enough to give you the power to fly up to a long distance each round. You can carry a creature your size or smaller (if using Bigger Beast Form, you can carry up to three creatures of your normal size or smaller). Action when in your normal form; enabler when using Beast Form."], }, 
	{ name: "Winning Smile", ref: ["CCR 83",], cost: 2, plus: true, pool: "Intellect", effects: ["When you roll to charm or influence someone and your roll is less than a 9, treat the roll as a 9. (This means you don't get a GM intrusion if you roll a 1.) Your increased influence persists until your nextten-minute or longer recovery.", "<em>Effort:</em> Increase the minimum number rolled for this ability by 3.", "Action.", ], }, 
	{ name: "Winter Gauntlets", ref: ["CCR 233",], effects: ["Your Frost Bolt ray inflicts an additional 3 damage, or an additional 3 damage as part of a touch or weapon attack. Any creature you hit with Frost Bolt, cold touch, or a cold-enhanced weapon attack is restrained in place (as Winter's Grip). Enabler."], }, 
	{ name: "Winter's Grip", ref: ["CCR 233",], cost: 3, plus: true, pool: "Intellect", effects: ["Make an Intellect attack against a foe within short range. Success means they are restrained by a layer of ice until you use a ten-minute or longer recovery or until they use an action to break free. The foe can't move from their current position, and their physical tasks (including attacks and defense) are hindered.", "If Ice Armor is active and you instead touch the foe, the Intellect attack is eased and you add the 2 damage from your cold touch.", "<em>Effort:</em> Inflict 3 damage from cold on the round the foe is first held.", "Action."], }, 
	{ name: "Wireless Interface", ref: ["CCR 186",], cost: 1, plus: true, pool: "Intellect", effects: ["You can mentally communicate with machines within short range. Communication is two-way, but the machine must be willing and able to communicate. You don't have to see the target, but you must know that it's within range. You can have more than one active contact at once, but you must establish contact with each machine individually.", "Once you've established contact, tasks involving that machine take half the normal time, and tasks that are an action become a First action.", "Each contact lasts until you use a ten-minute or longer recovery.", "<em>Effort:</em> Increase the duration so it lasts until you use a one-hour or longer recovery. Increase the range by a step (long, very long, 1 mile, 10 miles, or anywhere on the planet).", "Action to establish contact."], }, 
	{ name: "Wizard's Cunning", ref: ["CCR 81",], cost: 2, pool: "Intellect", effects: ["When you succeed on an Intellect roll for magic lore against a difficulty set by your GM, you identify and understand the purpose of something magical within short range (if any). In addition, you can attempt to immediately dispel one magical effect (such as an effect created by a character, creature, or item) within the same area by succeeding on another magic lore task against its level.", "Alternatively, you can attempt to create a small magical effect within short range. The effect might be to create a firework-like display of light and sound, permanently change the color or basic appearance of a small mundane object, cause small objects to float through the air, ask a moth or other small creature to carry a message for you, mend a broken object, urge a little more alacrity from a mount (lasting until you use a one-hour or longer recovery), and so on. Using this ability offensively is possible with some ingenuity, but it can't inflict more than 1 or 2 damage.", "Last action.", ], }, 
	{ name: "Word of Death", ref: ["CCR 157", "CCR 165",], cost: 6, pool: "Intellect", effects: ["You speak a magic word so potent that it can instantly kill a foe. Make an Intellect attack against a foe within short range. If you succeed, you inflict 10 damage. Action."], }, 
	{ name: "Wounded Fury-v1", dupmajor: true, ref: ["CCR 45",], effects: ["While you have at least three moderate wounds or at least one major wound, you gain one free level of Effort you can apply to one of your attacks each round. Enabler.", "<em>At tier 3:</em> The benefit increases to two free levels of Effort.", ], }, 
	{ name: "Wounded Fury-v2", dupmajor: true, ref: ["CCR 182",], effects: ["While you have at least three moderate wounds or at least one major wound, you gain one free level of Effort you can apply to your attack each round (easing your chance to hit or dealing 3 extra damage). This benefit lasts until you take your next ten-minute or longer recovery (or you no longer suffer from those wounds)", "<em>At tier 3:</em> The benefit increases to two free levels of Effort.", "Enabler.", ], }, 
	{ name: "Wounded Fury-v3", dupmajor: true, ref: ["CCR 191",], effects: ["While you have at least three moderate wounds or at least one major wound, you gain two free levels of Effort you can apply to an attack each round. This benefit lasts until you take your next ten-minute or longer recovery (or you no longer suffer from those wounds). Enabler.", ], }, 
	{ name: "Wraith Cloak", ref: ["CCR 165",], cost: 4, pool: "Intellect", effects: ["At your command, a nearby undead spirit wraps itself around you until you use a ten-minute or longer recovery. The spirit is empowered during this period, automatically inflicting 4 damage (no roll required) to anyone who tries to touch you or strike you with a melee attack. While the wraith cloak is active, all your stealth tasks are eased. Enabler."], }, 
];
const abilitySortList = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", ];
const cypherList = [
{ name: "Adhesion Bomb", ref: ["CCR 268",], manifest: true, pow: ["Med"], effect: ["Creates an immediate-radius explosion of sticky goo up to a short distance away. Make separate Speed attacks against each creature in the area. Success means they are held in place. The goo lasts until you use a ten-minute or longer recovery but can be cut, broken, or burned (inflicting 4 damage from fire to anyone held in it). NPCs can break free as an action (you can prevent this by making a Speed roll against them).", ], genreitems: [["scroll of web", "Fantasy", ], ["restraint grenade", "Science Fiction", ], ], sidebar: "<p>Rather than strands of sticky goo, some adhesion bombs fill the area with quick-hardening foam, constricting vines, spectral tentacles, or similar effects with the same result.", }, 
{ name: "Amazing Effort", ref: ["CCR 254",], effect: ["You add two free levels of Effort to your task. You can use this cypher before or after you roll.", ], explanation: ["Time to go all out. If you mess this up, someone dies. You don't even know how you did that.", ], }, 
{ name: "Amazing Feat", ref: ["CCR 280",], powerboost: true, effect: ["You perform an amazing feat not normally defined by your powers or one that would normally be beyond your limits. For example, you use your flame blasts to weld metal, or you push your super-strength so you can catch a falling helicopter.", ], }, 
{ name: "Area Boost", ref: ["CCR 280",], powerboost: true, effect: ["Your ability affects a larger area. If it normally affects one creature, it also affects the immediate area around that creature. Abilities that already affect an area increase to the next larger area size (immediate to short, short to long, long to very long, very long to 1,000 feet [300 m] across).", ], }, 
{ name: "Berserk", ref: ["CCR 254",], effect: ["You go berserk in combat. While in this state, you can't use Intellect points, but you add +1 to your Might Edge or your Speed Edge (your choice). You end this effect early when you wish, and it ends automatically if no combat is taking place within range of your senses or if you use a ten-minute or longer recovery.", ], explanation: ["That was the last straw. They hurt or insulted someone you care for deeply. They reminded you of a villain who once did you wrong.", ], }, 
{ name: "Best Tool", ref: ["CCR 254",], effect: ["When using a tool on a task, you get two additional assets on the task, even if that means exceeding the normal limit of two assets. You can use this cypher before or after you roll.", ], explanation: ["Everything lines up perfectly. This is a tool the professionals use. It only needed a quarter turn more.", ], }, 
{ name: "Bleed", ref: ["CCR 254",], effect: ["Your successful physical attack gives your foe a bleeding wound that inflicts an additional 3 damage (ignores armor) on your next turn. The foe can prevent this additional damage by using any ability that heals them or using their action to stop the bleeding.", "You can use this cypher before or after you roll. If you use Effort on the attack specifically for this cypher, the bleeding wound lasts an additional round for each level of Effort you use this way.", ], explanation: ["You hit a large blood vessel on the surface of their skin. You nicked an artery. Head wounds bleed a lot.", ], }, 
{ name: "Burst Boost", ref: ["CCR 280",], powerboost: true, effect: ["Your single-target ranged attack emanates from you. The range decreases to immediate (centered on you), but it affects everything within immediate range. If the ability is an attack, you gain an asset on your attack roll against creatures in the area.", ], }, 
{ name: "Burst of Speed", ref: ["CCR 254",], effect: ["As an extra action on your turn, you can move a short or long distance If you use this extra action to move a short distance, this doesn't hinder your tasks. If you use this extra action to move a long distance, your tasks until your next turn are only hindered by one step instead of two.", ], explanation: ["It was a little bit downhill the whole way. You were the fastest kid in school. Fear is a strong motivator.", ], }, 
{ name: "Calm Sniper", ref: ["CCR 254",], nonstandard: true, effect: ["If you use one action to aim at a target beyond extreme range, in the next round your attack roll against them gets three assets. (For this task, the asset limit is three instead of two.)", ], explanation: ["You found the calm state that quiets your breathing and heartbeat. Your tactical position overcomes extreme-distance factors that would impede your attack, like the angle of the sun and the speed of the wind. You mastered the sniper level in your favorite videogame.", ], }, 
{ name: "Cluster Bomb", ref: ["CCR 268",], manifest: true, pow: ["High"], effect: ["Upgrades a bomb cypher (such as a fiery bomb or shrapnel bomb) to have long range and create an additional delayed effect. When the upgraded cypher explodes, it also creates four additional bombs that each move a short distance in a different random direction, then explode on the next round in the same way as the original (unmodified) bomb cypher.", "Once a cluster bomb cypher is used to upgrade another cypher, the cluster bomb is expended and no longer counts toward your cypher limit.", ], genreitems: [["scroll of metamagical destruction", "Fantasy", ], ["bomb cascade", "Science Fiction", ], ], sidebar: "<p>Some GMs might decide that if a character finds a cluster bomb cypher, it's actually an existing bomb cypher that's already been upgraded with a cluster bomb cypher.", }, 
{ name: "Collateral Damage", ref: ["CCR 254",], effect: ["A melee or ranged attack by you or a foe also damages a nearby object (not something you or the foe have) up to level 4, automatically breaking or destroying it.", ], explanation: ["Your backswing broke the table. Their shot shattered the window. Your follow-through cracked a steam pipe.", ], }, 
{ name: "Combat Enhancer", ref: ["CCR 254",], effect: ["You get two assets on a combat or noncombat task. You can use this cypher before or after you roll.", ], explanation: ["This must be what bullet time feels like. They made a fatal mistake. Two hits&mdash;you hitting them, them hitting the floor.", ], }, 
{ name: "Comprehension", ref: ["CCR 268",], manifest: true, pow: ["Low"], effect: ["Over a few minutes of interacting with a creature or device that uses a language you don't understand, you learn the language and can communicate using it. This learning is permanent and does not count toward your cypher limit.", ], genreitems: [["scroll of translation", "Fantasy", ], ["translator implant", "Science Fiction", ], ], sidebar: "<p>Some comprehension cyphers have a preset language rather than allowing you to choose an unfamiliar language. A comprehension cypher works even if you normally don't use language&mdash;for example, if you're naturally telepathic.</p>", }, 
{ name: "Contingent Activator", ref: ["CCR 268",], manifest: true, pow: ["Low"], effect: ["You create a remote link with a manifest cypher you are touching and specify a condition that will activate the linked cypher. For example, if you create a contingent link with a healing cypher, you could specify that it activates if you take a major wound or if you are knocked unconscious. The linked cypher can still be activated normally (without the contingent trigger). The contingent activator counts against your cypher limit until the linked cypher is used, lost, or discarded.", ], genreitems: [["candle of contingent activation", "Fantasy", ], ["remote control", "Science Fiction", ], ], }, 
{ name: "Corrosive Bomb", ref: ["CCR 268",], manifest: true, pow: ["Adv"], effect: ["Creates an immediate-radius explosion of acid up to a short distance away. Make separate Speed attacks against each living creature in the area. Success means they take 4 damage; failure means they still take 2 damage.", ], genreitems: [["scroll of acid burst", "Fantasy", ], ["corrosion grenade", "Science Fiction", ], ], }, 
{ name: "Counterattack", ref: ["CCR 254",], effect: ["In response to being hit with an attack, you immediately make an eased attack against that foe with an attack of your own, even though it is not your turn. Your attack must be of the same kind (melee or ranged) as the attack that hit you.", ], explanation: ["You have an itchy trigger finger. You allowed yourself to get hit to set up a counterattack. They were at the perfect angle for you to respond.", ], }, 
{ name: "Crying Jag", ref: ["CCR 254",], nonstandard: true, effect: ["Make a hindered interaction roll against a foe in short range who can see and hear you. If you succeed, you upset them enough that they start crying. This might hinder them by two steps for about a round, make them leave the area for a while, or prompt one of their allies to comfort them.", ], explanation: ["You found a topic they are really sensitive about. They were already having a bad day. You're a mean drunk.", ], }, 
{ name: "Damage Boost", ref: ["CCR 280",], powerboost: true, effect: ["Your attack ability inflicts additional damage as if you had applied two levels of Effort to damage.", ], }, 
{ name: "Darksight", ref: ["CCR 268",], manifest: true, pow: ["Low"], effect: ["Until you use a ten-hour recovery, you can see in darkness out to immediate range as if it were dim light, and out to short range as if it were very dim light. You can use this cypher on up to six creatures, in which case it lasts until they use a one-hour or longer recovery (one individual ending the cypher doesn't affect the duration for other creatures).", ], genreitems: [["potion of darksight", "Fantasy", ], ["nightsight drops", "Science Fiction", ], ], }, 
{ name: "Decay Metal", ref: ["CCR 268",], manifest: true, pow: ["Med"], effect: ["You create a stream of liquid or foam that covers an area about 3 feet by 3 feet (1 m by 1 m) within an immediate distance. Metal in the area of level 6 or less becomes as brittle as thin glass (level 0) to a depth of about 6 inches (15 cm). To affect metal of level 7 or higher, you must succeed at an Intellect attack against it.", ], genreitems: [["rusting gauntlet", "Fantasy", ], ["metal metaoxidizer", "Science Fiction", ], ], }, 
{ name: "Deflect Wound", ref: ["CCR 255",], effect: ["An attack on you that would inflict a minor or moderate wound instead doesn't harm you at all.", ], explanation: ["Some bit of your clothing or equipment deflected the damage. Something distracted your foe. You're tougher than you thought.", ], }, 
{ name: "Depth Scanner", ref: ["CCR 268",], manifest: true, pow: ["Low"], effect: ["Until you use a ten-minute or longer recovery, you can see through opaque matter. As an action, you can concentrate on something within immediate range, seeing through it to a depth of 2 feet (60 cm) for one round as if it were transparent. You can see through substances up to level 6 (typically wood, flesh, plastic, stone, and even metal, but specially reinforced or exotic materials may remain opaque).", ], genreitems: [["crystal lens of piercing vision", "Fantasy", ], ["x-ray goggles", "Science Fiction", ], ], }, 
{ name: "Device Controller", ref: ["CCR 269",], manifest: true, pow: ["Low"], effect: ["Attach one part of this cypher to an unintelligent device or machine. Until you use a one-hour or longer recovery, if you are holding the other part of the cypher, you can mentally control that device at long range, making it do anything it could do normally. For example, you could activate or deactivate a computer, open or close a door, pilot a vehicle, and so on. You can only control one device with this cypher&mdash;removing the remote part and reattaching it to a different device has no effect.", ], genreitems: [["glove of manipulation", "Fantasy", ], ["ultrapotent remote", "Science Fiction", ], ], }, 
{ name: "Disarm", ref: ["CCR 255",], effect: ["After a successful attack, you attempt to disarm a foe as an extra action. Make an attack roll (using the same Pool as the original attack). If you succeed, they immediately drop whatever they are holding in a hand that you choose, and it lands an immediate distance away. Instead of allowing it to fall to the ground, if you apply a level of Effort on this attack and you have a free hand, you can grab or catch whatever the foe dropped.", ], explanation: ["You struck a nerve cluster. The thing is more slippery than they thought. You saw this trick in a movie once.", ], }, 
{ name: "Disease Immunity", ref: ["CCR 269",], manifest: true, pow: ["Med"], effect: ["Cures any disease of level 6 or lower that is currently in your system. Against diseases of level 7 and higher affecting you, make a new defense roll (with two assets) against the disease; success means you overcome it.", "Until you use a one-hour or longer recovery, you are immune to diseases of level 6 and lower, and you get two assets against diseases of level 7 and higher.", ], genreitems: [["amulet of fortitude", "Fantasy", ], ["immune system stimulant", "Science Fiction", ], ], }, 
{ name: "Disease Recovery", ref: ["CCR 255",], effect: ["One disease of level 4 or lower that is currently in your system has no further effect on you.", ], explanation: ["You have a strong immune system. You've been exposed to this disease before. The strain of infection was already weakened before it got to you.", ], }, 
{ name: "Disguise Module", ref: ["CCR 269",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, you are disguised as another person. About half of these cyphers allow you to disguise yourself as a person you've interacted with (your choice of who), and the other half have a preset generic disguise (such as a security guard, business person, or store clerk). Disguise tasks to pretend to be that person are eased by two steps.", ], genreitems: [["oil of the doppelganger", "Fantasy", ], ["biomorphic restructurer", "Science Fiction", ], ], sidebar: "<p>Some disguise modules take a couple of minutes to fully change your appearance, either to or from the disguise.</p>", }, 
{ name: "Double Attack", ref: ["CCR 255",], effect: ["In place of one attack, you make two hindered attacks with the same weapon.", ], explanation: ["You have two fists. The weapon has a sensitive trigger. You had just enough time for a double tap.", ], }, 
{ name: "Eagleseye", ref: ["CCR 269",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, you can see ten times as far as normal as if using powerful binoculars, without interfering with your ability to see things up close.", ], genreitems: [["potion of farsight", "Fantasy", ], ["nanobinocs", "Science Fiction", ], ], }, 
{ name: "Efficacy Boost", ref: ["CCR 280",], powerboost: true, effect: ["You get two assets on an ability that requires a skill roll. You can use this cypher before or after you roll.", ], }, 
{ name: "Endure Climate", ref: ["CCR 269",], manifest: true, pow: ["Low"], effect: ["For one day, you're resistant to hot or cold temperatures, as if you were wearing appropriate clothing. For example, you could walk through the Sahara Desert without getting heatstroke or a sunburn, or go out in the snow without risking frostbite or hypothermia.", ], genreitems: [["ring of comfort", "Fantasy", ], ["environmental regulator", "Science Fiction", ], ], }, 
{ name: "Energy Blast", ref: ["CCR 269",], manifest: true, pow: ["Med"], effect: ["Projects a ray of destructive energy at a target within very long range, inflicting 8 damage. You may instead split the ray and fire at two targets within range that are within a short distance of each other (make separate attack rolls for each target), inflicting 5 damage on each. Roll a d00 to determine the type of energy.", ], genreitems: [["crystal fire dart", "Fantasy", ], ["one-shot blaster", "Science Fiction", ], ], }, 
{ name: "Energy Resistance", ref: ["CCR 270",], manifest: true, pow: ["Low"], effect: ["Choose one type of energy or special attack damage, such as acid, cold, electricity, fire, shadow, or thorn. Until you use a one-hour or longer recovery, if you take a wound caused by this sort of attack, reduce the severity of the wound by one step. For example, if mitigating fire damage, a moderate wound from fire becomes a minor wound. Alternatively, you can use this cypher on an object, hindering this kind of energy attack against it by two steps until you use a one-hour or longer recovery.", ], genreitems: [["potion of fire resistance", "Fantasy", ], ["countermeasure spray", "Science Fiction", ], ], }, 
{ name: "Enhanced Armor", ref: ["CCR 270",], manifest: true, pow: ["Adv"], effect: ["Until you use a one-hour or longer recovery, your block tasks are eased and the severity of any wounds you take (blocked or not) is reduced by one step.", ], genreitems: [["oil of armor enhancement", "Fantasy", ], ["tensile nanoinjection", "Science Fiction", ], ], }, 
{ name: "Enhanced Climbing", ref: ["CCR 270",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, you can climb or walk on walls and ceilings as easily as walking on floors, moving at your normal ground movement speed. You must keep at least two extremities (hands or feet) in contact with the surface to climb it.", ], genreitems: [["potion of spider climbing", "Fantasy", ], ["nanotube grips", "Science Fiction", ], ], }, 
{ name: "Enhanced Dodging", ref: ["CCR 270",], manifest: true, pow: ["Adv"], effect: ["Until you use a one-hour or longer recovery, your dodge tasks are eased, and even if you fail a dodge task, the severity of the wound is reduced by one step.", ], genreitems: [["amulet of defense", "Fantasy", ], ["deflecting force field", "Science Fiction", ], ], }, 
{ name: "Enhanced Jumping", ref: ["CCR 270",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, you can make incredible jumps. A standing vertical jump (up or down) of 10 feet (3.5 m) or a standing horizontal jump of 20 feet (6 m) is a routine task for you. Running at least a short distance before the jump doubles how far you can go as a routine task. If you attempt a longer jump, you get two assets on the roll and you don't get a GM intrusion if you roll a 1.", ], genreitems: [["potion of jumping", "Fantasy", ], ["batrachian augmentation", "Science Fiction", ], ], }, 
{ name: "Enhanced Reflexes", ref: ["CCR 270",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, you have an asset on noncombat tasks requiring manual dexterity, such as pickpocketing, lockpicking, juggling, defusing a bomb, or performing surgery.", ], genreitems: [["potion of adept fingers", "Fantasy", ], ["hand stabilizer", "Science Fiction", ], ], }, 
{ name: "Enhanced Strength", ref: ["CCR 270",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, you have an asset on noncombat tasks requiring raw strength, such as breaking down a door, lifting a heavy boulder, or bending a metal gate.", ], genreitems: [["belt of strength", "Fantasy", ], ["muscle augmenter", "Science Fiction", ], ], }, 
{ name: "Enhanced Swimming", ref: ["CCR 270",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, you can easily and effectively swim at a superhuman level. You can swim an immediate distance as your turn and still take another action, swim a short distance as your entire action, or swim a long distance as your entire action if you succeed at a difficulty 4 swimming task (to \"run\"). Your swimming tasks (such as to avoid a current or whirlpool) are eased by two steps. Your melee attacks while swimming ignore the normal penalties for fighting in water.", ], genreitems: [["potion of swimming", "Fantasy", ], ["drag-suppressing nanosuit", "Science Fiction", ], ], }, 
{ name: "Equipment Cache", ref: ["CCR 255",], nonstandard: true, effect: ["You rummage around and create or find one piece of standard equipment (such as a weapon, piece of armor, or rope, but not a cypher or artifact) up to level 4. The piece of equipment persists for up to one day, unless it's the sort of equipment that is expended after use (such as a box of bullets or a grenade).", ], sidebar: "<p>An equipment cache cypher probably means you discover a forgotten stash of equipment or find something useful on a fallen foe.</p>", }, 
{ name: "Extended Breath", ref: ["CCR 255",], nonstandard: true, effect: ["You have an extra minute's worth of breathing in a situation where you can't breathe normally, such as underwater or in space. During this time, you're not distracted or hindered by needing air. Once this time is over, your need for air resumes at the point it was when you activated the cypher.", ], explanation: ["You got really calm in order to conserve oxygen. Your air tank had one last lungful in it. You found a big bubble that you could make use of.", ], sidebar: "<p>A typical person without training can hold their breath for about a minute, or two minutes if they remain still.</p>", }, 
{ name: "Extra Cyphers", ref: ["CCR 270",], manifest: true, pow: ["Med"], effect: ["Until you use a one-hour or longer recovery, your cypher limit increases by two. Once you activate this cypher, it doesn't count against your cypher limit.", ], genreitems: [["bag of safe storage", "Fantasy", ], ["stabilization field", "Science Fiction", ], ], }, 
{ name: "Fear", ref: ["CCR 271",], manifest: true, pow: ["Low"], effect: ["Make an Intellect attack against a foe within short range. If you succeed, they are filled with fear of you and attempt to flee the area, remaining away until you use a ten-minute or longer recovery. If they can't get away, all their tasks against you are hindered until you use a ten-minute or longer recovery.", ], genreitems: [["rune of fear", "Fantasy", ], ["amygdala stimulator", "Science Fiction", ], ], sidebar: "<p>Some creatures (such as automatons and mindless entities) cannot feel fear and are immune to a fear cypher.</p>", }, 
{ name: "Feat of Strength", ref: ["CCR 255",], effect: ["For one task, you have three assets in an appropriate skill requiring a lot of physical strength, such as breaking down a door, carrying a heavy weight, lifting a bed above your head, pulling someone out of a hole, or pushing a car off a cliff. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["You found a weak spot. You had leverage. You got a surge of adrenaline.", ], }, 
{ name: "Fiery Bomb", ref: ["CCR 271",], manifest: true, pow: ["Adv"], effect: ["Creates an immediate-radius explosion of fire or heat up to a short distance away. Make separate Speed attacks against each creature in the area. Success means they take 4 damage; failure means they still take 2 damage.", ], genreitems: [["scroll of fireball", "Fantasy", ], ["incendiary grenade", "Science Fiction", ], ], }, 
{ name: "Flash Bomb", ref: ["CCR 271",], manifest: true, pow: ["Med"], effect: ["Creates an immediate-radius explosion of bright light up to a short distance away. Make separate Speed attacks against each creature in the area. Success means they are blinded until you use a ten-minute or longer recovery.", ], genreitems: [["scroll of blindness", "Fantasy", ], ["flash grenade", "Science Fiction", ], ], }, 
{ name: "Flight", ref: ["CCR 271",], manifest: true, pow: ["Med"], effect: ["Until you use a one-hour or longer recovery, you can fly at your normal ground movement speed in any direction. You can carry additional weight (up to about the weight of an average adult human), slowing your movement to about an immediate distance as your action, but any more weight than that prevents you from flying.", ], genreitems: [["cloak of flying", "Fantasy", ], ["jetpack", "Science Fiction", ], ], sidebar: "<p>The specific mechanism of your flight varies for each flight cypher. One might carry you on a translucent force field that you mentally control, another might temporarily give you wings, and another might propel you with jets of air.</p>", }, 
{ name: "Focus Fire", ref: ["CCR 255",], effect: ["If you attack a foe that your ally attacked this turn, you gain an asset on the attack, and if you hit you inflict an additional 5 damage. You can use this cypher before or after you roll.", ], explanation: ["The foe is overwhelmed. Your ally distracted the foe. You and your ally practiced this combo.", ], }, 
{ name: "Force Field", ref: ["CCR 271",], manifest: true, pow: ["Adv"], effect: ["You create a level 6 force field up to a short distance away. Choose whether the force field is a cube, sphere, wall, or path. A force cube or sphere is about an immediate distance across. A wall is an immediate distance high and a short distance wide (or vice versa). A path is like a wall, but horizontal instead of vertical. The force field otherwise conforms to the space available (stopping at solid obstacles but not exerting pressure on them). The force field lasts until you make a one-hour or longer recovery. You can use a force cube or sphere to trap foes within its area; make Intellect attacks against each foe to contain them. Gas can't permeate the force field, but the volume inside a cube or sphere is enough that anyone inside probably won't suffocate.", ], genreitems: [["cube of force", "Fantasy", ], ["force field generator", "Science Fiction", ], ], sidebar: "<p>Individual force fields may be invisible, transparent, translucent, or opaque.</p>", }, 
{ name: "Fortuitous Moment", ref: ["CCR 156",], effect: ["Something happens that makes the encounter (or specifically your next action) a little easier for you. You can call for a player intrusion without spending any XP.", ], explanation: ["You have friends everywhere. The universe finally gave you a break. All that good karma finally paid off.", ], }, 
{ name: "Fortunate Fluke", ref: ["CCR 156",], effect: ["Reroll the die you just rolled, even if it was a natural 1. You must use the new result, even if it's a 1.", ], explanation: ["Things don't always turn out like they first appear. Luck favors the prepared. It's not that you were lucky&mdash;it was that they were unlucky.", ], }, 
{ name: "Freezing Bomb", ref: ["CCR 271",], manifest: true, pow: ["Adv"], effect: ["Creates an immediate-radius explosion of intense cold up to a short distance away. Make separate Speed attacks against each creature in the area. Success means they take 4 damage; failure means they still take 2 damage.", ], genreitems: [["scroll of cold burst", "Fantasy", ], ["cryonic grenade", "Science Fiction", ], ], }, 
{ name: "Friction Reducer", ref: ["CCR 271",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, an immediate area within short range becomes extremely slippery. Movement tasks (acrobatics, balance, physical attacks and defense, running, and so on) in the area are hindered by three steps.", ], genreitems: [["oil of slipperiness", "Fantasy", ], ["defrictioning spray", "Science Fiction", ], ], }, 
{ name: "Frost Wall", ref: ["CCR 271",], manifest: true, pow: ["Med"], effect: ["You create a wall of swirling frost up to a short distance away, lasting until you use a ten-minute or longer recovery. The wall is up to 30 feet by 30 feet by 1 foot (9 m by 9 m by 30 cm) and it conforms to the space available. Anything passing through it takes 3 damage.", ], genreitems: [["frost diamond", "Fantasy", ], ["cryoplane module", "Science Fiction", ], ], }, 
{ name: "Future Potential", ref: ["CCR 272",], manifest: true, pow: ["Med"], effect: ["Choose one ability from your focus that you don't currently have. The ability must be one you could select as an advancement at your current tier or one tier higher. Until you use a one-hour or longer recovery, you can use this ability as if you had chosen it as an advancement (you must pay any Pool point or other costs to activate the ability, as normal). For example, if you're a tier 1 character with the Blazes With Fire focus, you can use this cypher to temporarily learn one tier 1 focus ability you don't know or one tier 2 focus ability.", ], genreitems: [["potion of future glory", "Fantasy", ], ["personal tachyon extractor", "Science Fiction", ], ], }, 
{ name: "Get to the Point", ref: ["CCR 156",], effect: ["During a conversation where you're trying to charm, intimidate, convince, negotiate with, or influence a person, and the conversation is likely to take at least several minutes, make one interaction roll. If you succeed, you and the person wrap things up and come to a reasonable agreement in a matter of seconds.", ], explanation: ["Bullet points are enough. They were ready to agree with you anyway. You're being very intense right now.", ], }, 
{ name: "Giant Size", ref: ["CCR 272",], manifest: true, pow: ["Med"], effect: ["Until you use a ten-minute or longer recovery, you grow to about one and a half times your normal size. While at this larger size, you add 4 points to your Might Pool and +2 to your Might Edge, but your Speed defense rolls are hindered. When the cypher ends, your Might Edge returns to normal, you lose the penalty to Speed defense, and you take 4 Might damage.", "If an NPC uses this cypher, they temporarily gain 4 health, ease their Might tasks by two steps, and hinder their Speed defense tasks.", ], genreitems: [["potion of growth", "Fantasy", ], ["bodily expander", "Science Fiction", ], ], }, 
{ name: "Gigantic Bomb", ref: ["CCR 272",], manifest: true, pow: ["Ultra"], effect: ["Upgrades a bomb cypher (such as a fiery bomb or shrapnel bomb) to affect a short area instead of an immediate area.", "Once a gigantic bomb cypher is used to upgrade another cypher, the gigantic bomb is expended and no longer counts toward your cypher limit.", ], genreitems: [["scroll of enlarged magical burst", "Fantasy", ], ["bomb expander", "Science Fiction", ], ], sidebar: "<p>Some GMs might decide that if a character finds a gigantic bomb cypher, it's actually an existing bomb cypher that's already been upgraded with a gigantic bomb cypher.</p>", }, 
{ name: "Gravity Bomb", ref: ["CCR 272",], manifest: true, pow: ["Adv"], effect: ["Creates an immediate-radius explosion of increased gravity up to a short distance away. Make separate Speed attacks against each creature in the area. Success means they take 3 damage, are knocked to the ground, and can't take physical actions for one round. Failure means they still take 1 damage but are not knocked down and can act normally.", ], genreitems: [["lodestone", "Fantasy", ], ["singularity grenade", "Science Fiction", ], ], }, 
{ name: "Hamper Foe", ref: ["CCR 156",], nonstandard: true, effect: ["Choose a foe you can see. Their attacks and defenses against you are hindered by four steps until your next turn.", ], explanation: ["You're familiar with their combat style. You practiced at the same military academy. They just got a cramp.", ], }, 
{ name: "Homing Projectile", ref: ["CCR 272",], manifest: true, pow: ["Adv"], effect: ["You launch a self-guiding projectile at a foe within long range. Make a Speed attack against this foe. Success means it inflicts 8 damage. Failure means it misses but will try again one round later on your turn (requiring another attack roll, but not an action). The projectile is expended if it misses four times.", "The type of damage depends on the cypher, with cold, electricity, fire, piercing, or poison being the most common.", ], genreitems: [["seeking arrow", "Fantasy", ], ["seeking drone", "Science Fiction", ], ], }, 
{ name: "Horizon Observer", ref: ["CCR 156",], effect: ["You have three assets on your long-distance perception task, affecting noticing things that are at least a long distance away. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["You've watched a lot of live sports from the nosebleed section. You can feel something in the air. You grew up in a very flat part of the world.", ], }, 
{ name: "Ignite", ref: ["CCR 156",], nonstandard: true, effect: ["An object within immediate range ignites in flame, taking 5 damage each round. If the object's level is 4 or less, the fire destroys it within a few rounds; a higher-level object instead has its level reduced by 1 to 3. Nearby objects may catch on fire as it burns.", ], explanation: ["You had a lighter or matchstick. There was an electrical spark or short circuit. A window or curved glass magnified the sunlight.", ], }, 
{ name: "Image Projector", ref: ["CCR 272",], manifest: true, pow: ["Low"], effect: ["Projects a specific illusory or holographic scene in an immediate area up to a short distance away from you. The scene remains in place after it is created, and it includes appropriate movement, sound, and scent. For example, the scene might contain a ferocious wolf that paces back and forth but doesn't leave the area. The scene lasts until you use a one-hour or longer recovery.", "Roll to determine the image.", ], genreitems: [["illusion gem", "Fantasy", ], ["hologram projector", "Science Fiction", ], ], }, 
{ name: "Improved Acrobatics", ref: ["CCR 156",], effect: ["You have three assets on your acrobatics or balance task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["Your ears popped and that slight vertigo finally went away. You gave your back a good crack to limber up. You practiced these exact moves when you were in school.", ], }, 
{ name: "Improved Blocking", ref: ["CCR 156",], effect: ["You have three assets on your block task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["Your foe's attacks are weak and ineffective. You've noticed a flaw in their attack strategy. Your armor is especially good against these attacks.", ], }, 
{ name: "Improved Charm", ref: ["CCR 156",], effect: ["You have three assets on your charm task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["Something about your tone is comforting to them. You remind them of someone they like and respect. You happened to say just the right thing to put them in an agreeable mood.", ], }, 
{ name: "Improved Climbing", ref: ["CCR 156",], effect: ["You have three assets on your climbing task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["This wall isn't as smooth as it looked. You watched some climbing training videos last night. You've got an inspirational theme song playing in your head.", ], }, 
{ name: "Improved Deception", ref: ["CCR 156",], effect: ["You have three assets on your deception task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["They were sympathetic to your lie. They didn't get much sleep last night. Your explanation resonated with them.", ], }, 
{ name: "Improved Dexterity", ref: ["CCR 257",], effect: ["You gain three assets on one noncombat task requiring manual dexterity, such as pickpocketing, lockpicking, juggling, defusing a bomb, or performing surgery. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["You have a hidden talent for this sort of thing. It's easier than it looks. Beginner's luck.", ], }, 
{ name: "Improved Disguising", ref: ["CCR 257",], effect: ["You have three assets on your disguise task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["People aren't really paying attention to your look. You actually resemble the person you're disguised as. You used a clever trick to turn something into a prop or costume piece.", ], }, 
{ name: "Improved Dodging", ref: ["CCR 257",], effect: ["You have three assets on your dodge task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["Your foe's attacks are slow and clumsy. You have the high ground. You've practiced against the foe's combat style.", ], }, 
{ name: "Improved Driving", ref: ["CCR 257",], effect: ["You have three assets on your driving or piloting task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["It's just like riding a bike. You play a videogame with a vehicle like this. The vehicle has driver-assist technology.", ], sidebar: "<p>The Improved Driving cypher works for most civilian-level vehicles (bicycles, motorcycles, mopeds, cars, small boats, and small planes) but is less effective when controlling a cruise ship, large passenger aircraft, or military tank.</p>", }, 
{ name: "Improved Escaping", ref: ["CCR 257",], effect: ["You have three assets on your escaping task (from ropes, handcuffs, tight spaces, and so on). (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["This type of handcuffs has a design flaw. The ropes weren't as tight as planned. The cage bars were loose.", ], }, 
{ name: "Improved Healing", ref: ["CCR 258",], effect: ["You have three assets on your healing, medicine, or surgery task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["They weren't as badly hurt as it first appeared. You just studied how to treat this kind of injury. Everything easily popped back into place.", ], }, 
{ name: "Improved Initiative", ref: ["CCR 258",], nonstandard: true, effect: ["You have three assets on your initiative task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", "If the GM calls for another initiative roll as part of the encounter (for example, if reinforcements arrive), this cypher applies to the new initiative roll as well.", ], explanation: ["You noticed someone slowly reaching for a weapon. You had a feeling things were about to get dangerous. You heard something that drew your attention to a threat.", ], }, 
{ name: "Improved Intimidation", ref: ["CCR 258",], effect: ["You have three assets on your intimidation task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["You remind a foe of someone they're afraid of. That vein in your forehead just started throbbing. They greatly underestimated how tough you look.", ], }, 
{ name: "Improved Jumping", ref: ["CCR 258",], effect: ["You have three assets on your jumping task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["You found the perfect spot on the floor to launch from. Your shoes were made for this. You're very afraid.", ], }, 
{ name: "Improved Lockpicking", ref: ["CCR 258",], effect: ["You have three assets on your lockpicking task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["Whoever locked it didn't realize that it didn't fully \"click.\" You just watched a video about this kind of lock. Your favorite videogame has a realistic lockpicking minigame.", ], }, 
{ name: "Improved Perception", ref: ["CCR 258",], effect: ["You have three assets on your perception task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["You happened to be looking in the right direction. You got a hunch that something was out of place. You accidentally nudged the hidden thing.", ], }, 
{ name: "Improved Pickpocketing", ref: ["CCR 258",], effect: ["You have three assets on your pickpocketing task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["Your mark's pockets are especially loose. Something distracts your mark just as you're about to steal from them. You're just the right height to grab what you want from the mark.", ], }, 
{ name: "Improved Repairing", ref: ["CCR 258",], effect: ["For one repair task, you are trained in an appropriate kind of crafting for that repair, and can repair the device as if you spent 1 resource point on it.", ], explanation: ["You used to rebuild this sort of device for fun. There's a repair manual for the device nearby (or online). The device wasn't really broken, just jammed or dirty.", ], }, 
{ name: "Improved Sneaking", ref: ["CCR 259",], effect: ["You have three assets on your hiding, sneaking, or stealth task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["The people are distracted and not paying attention to you. Your shoes are especially quiet on this kind of floor. Someone just did maintenance on the floor to fix a loud squeak.", ], }, 
{ name: "Improved Swimming", ref: ["CCR 259",], effect: ["You have three assets on your swimming task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", ], explanation: ["You remembered your old lifeguard training. You found a current moving in the direction you want to go. You thought you saw a shark.", ], }, 
{ name: "Improvised Range", ref: ["CCR 259",], effect: ["You attack with a weapon at a foe within short range even if the attack wouldn't normally be effective or possible at that range. For example, you could throw a sword, use a punch or kick to propel a heavy object, or throw an empty pistol. Make an eased attack against the foe as if you were attacking them with the weapon normally; for example, skill in swords, unarmed combat, or pistols applies to the attack roll. If the attack succeeds, the foe takes damage as if you had hit them with the weapon in the normal way.", ], explanation: ["You've been practicing this trick. Weapon training includes unorthodox attack methods. It's basic physics.", ], }, 
{ name: "Improvised Shelter", ref: ["CCR 259",], nonstandard: true, effect: ["You find something in the area that is large enough to cover you, providing shelter from the weather or concealment from a pursuer. It might even block one attack before breaking or collapsing.", ], explanation: ["This thick tangle of branches is unexpectedly sturdy. This old tarp blends in pretty well with the dirt. This heavy cardboard box is much bigger than you thought.", ], }, 
{ name: "Improvised Shield", ref: ["CCR 259",], effect: ["You use a piece of your equipment or an object within reach to block an attack, negating the wound from the attack as if you had used a shield. This probably destroys the object the way that a shield negates a major wound.", ], explanation: ["That was an expensive chair. That sword was a family heirloom. Good thing you were next to that door.", ], }, 
{ name: "Incredible Speed", ref: ["CCR 273",], manifest: true, pow: ["Ultra"], effect: ["You can take one extra action on your turn (but no more than once per turn). For example, you can take all your normal actions on your turn, then take an extra action to move or attack. The cypher ends after you use this ability three times or if you use a one-hour or longer recovery.", ], genreitems: [["potion of haste", "Fantasy", ], ["accelerative harness", "Science Fiction", ], ], }, 
{ name: "Inferno Wall", ref: ["CCR 273",], manifest: true, pow: ["Med"], effect: ["You create a wall of shimmering heat or flickering flames up to a short distance away, lasting until you use a ten-minute or longer recovery. The wall is up to 30 feet by 30 feet by 1 foot (9 m by 9 m by 30 cm) and it conforms to the space available. Anything passing through it takes 3 damage.", ], genreitems: [["inferno ruby", "Fantasy", ], ["infernoplane module", "Science Fiction", ], ], }, 
{ name: "Information Scanner", ref: ["CCR 273",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, you gain an exceptional awareness of objects, creatures, and locations you're viewing. If you use an action to scrutinize a target within short range, you learn relevant details, such as its level, its name, its species (if a creature), if it is magical or technological, and possibly other facts (such as a person's address and phone number, the general purpose or function of a device or magic item, and so on). After you've used this sense six times, the cypher ends.", ], genreitems: [["amulet of scrutiny, wand of magic detection", "Fantasy", ], ["facial recognition datalink", "Science Fiction", ], ], }, 
{ name: "Inhibit Foe", ref: ["CCR 259",], nonstandard: true, effect: ["As a second action after a successful attack, you hamper your foe so that until your next turn the severity of the wounds their attacks inflict decreases by one step.", ], explanation: ["Your attack hobbled them. They were demoralized by your aggression. They were distracted by something.", ], }, 
{ name: "Insanity Suppressor", ref: ["CCR 273",], manifest: true, pow: ["Low"], effect: ["You ignore the effects and symptoms of a mental disorder, brain injury, or other impairing mental condition until you make a ten-hour recovery. Examples include clinical depression, generalized anxiety disorder, delusions, manias, phobias, dementia, obsessive-compulsive disorder, attention deficit hyperactivity disorder, and schizophrenia, as well as external effects (such as poisons, psychic attacks, or magic) that cause erratic or uncontrolled behaviors (including fear and rage).", ], genreitems: [["circlet of mental clarity", "Fantasy", ], ["cortical modulator", "Science Fiction", ], ], }, 
{ name: "Inspire Aggression", ref: ["CCR 259",], nonstandard: true, effect: ["A foe of level 4 or less within short range uses their next turn to attack a creature of your choice within short range. The attacking creature inflicts damage equal to their level.", ], explanation: ["You convinced them the creature said or did something unforgivable. Your taunt confused them. They thought the creature they attacked was on your side.", ], }, 
{ name: "Instant Building", ref: ["CCR 273",], manifest: true, pow: ["Med"], effect: ["Creates a simple one-room building in a space adjacent to you. The building's minimum size is 10 feet by 10 feet by 20 feet (3.5 m by 3.5 m by 6 m). It consists of one room, a door, and a transparent window, and it is made from a durable, nonflammable material similar to sandstone. The building is permanent and immobile once created. If there isn't sufficient room for the building to reach its full size, it fills the available space, but its appearance and growth does not apply any force or pressure against the confining surfaces.", ], genreitems: [["scroll of secure shelter", "Fantasy", ], ["structural fabrication unit", "Science Fiction", ], ], }, 
{ name: "Instant Healing", ref: ["CCR 273",], manifest: true, pow: ["Med"], effect: ["You heal a moderate or major wound, as well as all of your minor wounds.", ], genreitems: [["potion of healing", "Fantasy", ], ["stimpack", "Science Fiction", ], ], }, 
{ name: "Instant Outfit", ref: ["CCR 273",], manifest: true, pow: ["Low"], effect: ["You create a fashionable outfit. It fits you perfectly and is very flattering. When you activate the cypher, you can specify what the outfit looks like or describe an event or situation and allow the cypher to become something appropriate. Until you take a ten-hour recovery, the outfit gives you an asset on interaction tasks, after which it becomes normal clothing that doesn't provide any additional benefit.", ], genreitems: [["costume chrysoberyl", "Fantasy", ], ["clothier nanospray", "Science Fiction", ], ], }, 
{ name: "Instant Servant", ref: ["CCR 273",], manifest: true, pow: ["Low"], effect: ["Creates (or turns into) a humanoid automaton (level 1) that is roughly 2 feet (60 cm) tall and lasts until you use a one-hour or longer recovery. It cannot speak but it can understand your verbal commands (commanding it is not an action). Like a follower, it can perform tasks independently or assist you with your tasks. It never intentionally moves farther than long range from you. It is not artificially intelligent or capable of initiating actions on its own and does only as commanded. At the GM's discretion, it might have specialized knowledge, such as how to operate a particular device or how to get to the home of the person who created it.", ], genreitems: [["servant stone", "Fantasy", ], ["disposable robot", "Science Fiction", ], ], }, 
{ name: "Intellect Booster", ref: ["CCR 274",], manifest: true, pow: ["Med"], effect: ["Until you use a one-hour or longer recovery, your Intellect Edge increases by 1.", ], genreitems: [["potion of mental clarity", "Fantasy", ], ["brain stimulator", "Science Fiction", ], ], }, 
{ name: "Intellect Replenisher", ref: ["CCR 260",], effect: ["You restore 4 points to your Intellect Pool.", ], explanation: ["Your coffee just kicked in. Something just reminded you of your favorite person. Your theme music just started playing.", ], }, 
{ name: "Intellect Restorer", ref: ["CCR 274",], manifest: true, pow: ["Med"], effect: ["You restore 6 points to your Intellect Pool.", ], genreitems: [["potion of meditation", "Fantasy", ], ["synaptic rejuvenator", "Science Fiction", ], ], }, 
{ name: "Intense Perception", ref: ["CCR 274",], manifest: true, pow: ["Med"], effect: ["Until you use a one-hour or longer recovery, you ignore all penalties associated with attacking or defending against a foe who has cover, has a superior position, is camouflaged, or is invisible.", ], genreitems: [["lenses of true seeing", "Fantasy", ], ["multispectrum sensor lenses", "Science Fiction", ], ], }, 
{ name: "Invisibility", ref: ["CCR 274",], manifest: true, pow: ["Adv"], effect: ["You become invisible. The invisibility is suspended if you do something to reveal your presence or position, such as attacking, using a character ability, moving a large object, and so on. You can reactivate the suspended invisibility by using an action to focus on hiding; otherwise, it ends after you use a one-hour or longer recovery.", ], genreitems: [["potion of invisibility", "Fantasy", ], ["stealthshroud", "Science Fiction", ], ], sidebar: "<p>An invisible character's attack is eased by two steps. Attacks on an invisible character are hindered by four steps or are nearly impossible if the attacker has no idea where they might be.</p>", }, 
{ name: "Invulnerability Enhancement", ref: ["CCR 274",], manifest: true, pow: ["Ultra"], effect: ["Until you use a recovery, you ignore all minor, moderate, and major wounds.", ], genreitems: [["potion of invulnerability; neutrino shield", "Science Fiction", ], ], }, 
{ name: "Knockout", ref: ["CCR 260",], effect: ["As a second action after a successful melee attack, make a Might or Intellect roll against your foe (hindered by two steps if the foe is level 5 or higher). If you succeed, you knock them out (or something similar that incapacitates them, such as knocking the wind out of them) for a few rounds.", ], explanation: ["A good bonk on the head can take out almost anyone. You and your high school friends used to choke each other out for fun. You learned how to do a solar plexus jab by watching a lot of boxing matches.", ], }, 
{ name: "Knowledge Augmentation", ref: ["CCR 274",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, you gain two assets in one area of knowledge. Roll on the table below to find what kind of knowledge the cypher provides.", ], genreitems: [["potion of knowledge", "Fantasy", ], ["academic implant", "Science Fiction", ], ], sidebar: "<p><strong>Knowledge augmentation GM intrusion:</strong> The character becomes addicted to the instant training from the cypher, permanently hindering one skill that they've used this sort of cypher for.</p>", }, 
{ name: "Lightning Wall", ref: ["CCR 274",], manifest: true, pow: ["Med"], effect: ["You create a wall of arcing electricity up to a short distance away, lasting until you use a ten-minute or longer recovery. The wall is up to 30 feet by 30 feet by 1 foot (9 m by 9 m by 30 cm) and it conforms to the space available. Anything passing through it takes 3 damage.", ], genreitems: [["lightning topaz", "Fantasy", ], ["electroplane module", "Science Fiction", ], ], }, 
{ name: "Lucid Moment", ref: ["CCR 260",], effect: ["You ignore the effects and symptoms of a mental disorder, brain injury, or other impairing mental condition until you use a ten-hour recovery. Examples include clinical depression, generalized anxiety disorder, delusions, manias, phobias, dementia, obsessive-compulsive disorder, attention deficit hyperactivity disorder, and schizophrenia.", ], explanation: ["Your medication dosage is precisely what you need right now. You've found a way to compensate for a little while. Some unknown factor (such as diet, exercise, or rest) has swung things your way.", ], }, 
{ name: "Maintain Temperature", ref: ["CCR 260",], effect: ["Until you use a one-hour or longer recovery, you're resistant to hot or cold temperatures, as if you were wearing appropriate clothing. For example, you could walk through the Sahara Desert without getting heatstroke or a sunburn, or go out in the snow without risking frostbite or hypothermia.", ], explanation: ["You grew up with weather like this. You've always run a little hot/cold. That extra-large hot/cold drink was exactly what you needed.", ], }, 
{ name: "Make Passage", ref: ["CCR 260",], effect: ["As part of your movement, you create or use an opening in a barrier (up to level 4) and pass through it.", ], explanation: ["The floor was rotting away. The drywall was poorly installed. The mortar between the bricks was weak.", ], sidebar: "<p>You can also use a make passage cypher to open an existing door or gate, or even have an elevator arrive when you need it.</p>", }, 
{ name: "Master Password", ref: ["CCR 260",], nonstandard: true, effect: ["You have three assets on your computer or hacking task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", "If you succeed, your interaction with the device is better than you expected in some way. For example, you might gain access to a secure folder on a computer, the device might think you're an administrator, follow-up tasks with the device might be eased, or you might be able to use it for a longer time before it deactivates or you get locked out of the system.", ], explanation: ["You accidentally guessed the master password. Your biometrics are almost identical to those of the device's creator. The device is glitching.", ], }, 
{ name: "Memory Wipe", ref: ["CCR 274",], manifest: true, pow: ["Med"], effect: ["Make an Intellect attack against one thinking creature within long range that you can see. If you succeed, they lose their next turn and have no memory of the previous hour.", ], genreitems: [["scroll of mind fog", "Fantasy", ], ["amnesia emitter", "Science Fiction", ], ], }, 
{ name: "Mental Concentration", ref: ["CCR 260",], effect: ["You have three assets on your Intellect defense task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", "If you fail your Intellect defense task, the attack inflicts 4 less Intellect damage (or, if you are out of Intellect and the attack would inflict wounds, it reduces the severity of the wound by one step).", ], explanation: ["Eye of the tiger. Keep your eye on the ball. Your friends are counting on you."], }, 
{ name: "Mental Vigilance", ref: ["CCR 274",], manifest: true, pow: ["Med"], effect: ["Until you use a one-hour or longer recovery, you gain two assets on Intellect defense tasks and reduce the severity of any mental wound you take by one step.", ], genreitems: [["crown of iron will", "Fantasy", ], ["cerebral stimulator", "Science Fiction", ], ], }, 
{ name: "Might Booster", ref: ["CCR 274",], manifest: true, pow: ["Med"], effect: ["Until you use a one-hour or longer recovery, your Might Edge increases by 1.", ], genreitems: [["potion of strength", "Fantasy", ], ["muscle stimulator", "Science Fiction", ], ], }, 
{ name: "Might Replenisher", ref: ["CCR 261",], effect: ["You restore 4 points to your Might Pool.", ], explanation: ["You're not as tired as you thought. You were faking an injury. Something just made you really angry.", ], }, 
{ name: "Might Restorer", ref: ["CCR 274",], manifest: true, pow: ["Med"], effect: ["You restore 6 points to your Might Pool.", ], genreitems: [["potion of stamina", "Fantasy", ], ["stem cell cocktail", "Science Fiction", ], ], }, 
{ name: "Mind Control", ref: ["CCR 275",], manifest: true, pow: ["Adv"], effect: ["Make an Intellect attack against a foe within short range (if the foe is level 7 or higher, the attack is hindered by two steps). Success means the creature becomes calm and doesn't attack you or your allies unless threatened or attacked, lasting until you use a ten-minute or longer recovery. The creature obeys your verbal commands. If you command them to do something against their ethics or moral code (such as betray or attack their allies or harm themselves), you must succeed at another Intellect attack against them (at the same difficulty as the original attack); otherwise they break free of your control.", "If you use this cypher against a nonsapient creature (typically something with animal-level intelligence), it lasts until you use a one-hour or longer recovery.", ], genreitems: [["scroll of mind control", "Fantasy", ], ["cerebral dominator", "Science Fiction", ], ], }, 
{ name: "Motion Sensor", ref: ["CCR 275",], manifest: true, pow: ["Med"], effect: ["Until you use a one-hour or longer recovery, you know when any movement occurs within short range and when large creatures or objects move within long range (you can tell the difference between the two). You sense this motion even if the source is hidden, behind a barrier, or invisible. When you detect this motion, you also know the number and size of what is moving.", ], genreitems: [["potion of alertness", "Fantasy", ], ["omnidar", "Science Fiction", ], ], }, 
{ name: "Motivated Aid", ref: ["CCR 261",], effect: ["If you use your action to help someone, they gain a total of three assets on their task. (For this task, the asset limit is three instead of two.) You can use this cypher before or after they roll.", ], explanation: ["You couldn't stand to see them fail. You remembered when they went out of their way for you. You want them to owe you a favor.", ], }, 
{ name: "Near-Death Experience", ref: ["CCR 261",], nonstandard: true, effect: ["If you died within the last minute, you revive. Whatever injury, wound, or effect that supposedly killed you is undone. You are hindered until you take a recovery. The number of moderate wounds you can take permanently decreases by one.", "You can use this cypher on an ally instead of yourself. If they are an NPC, instead of being hindered until they take a recovery, they're hindered until they rest for an hour; their maximum health decreases by 5 (to a minimum of 1).", ], explanation: ["It must have bounced off your thick skull. You're not dying today. Your guardian angel is keeping busy.", ], }, 
{ name: "Noncombat Enhancer", ref: ["CCR 261",], effect: ["You get two assets on a noncombat task. You can use this cypher before or after you roll.", ], explanation: ["Wow, you're really good at this! Fake it until you make it. Your horoscope said this would happen today.", ], }, 
{ name: "Not Me", ref: ["CCR 261",], effect: ["You have three assets on your deception or charm task to convince an intelligent creature that you are someone other than who you actually are. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", "This cypher doesn't allow you to impersonate a specific individual. Instead, you convince the target that you're someone belonging to a certain category of people. For example, \"I'm just making a delivery.\" \"I work in maintenance.\" \"I'm selling baked goods; want some?\"", ], explanation: ["You're good at impressions. You happened to have something that served as a convincing prop. The target didn't really care that much or was distracted.", ], }, 
{ name: "Nullification", ref: ["CCR 275",], manifest: true, pow: ["Adv"], effect: ["Choose one ongoing effect within long range, such as an energy wall, illusion, or paralysis effect. If the effect is caused by an artifact, cypher, or creature ability and is level 5 or lower, it ends immediately; you can affect something of level 6 or higher if you succeed at a hindered Intellect attack against it.", "If the effect is caused by a PC ability, you and the other PC both make Intellect rolls. If your roll is better than theirs, the effect ends.", ], genreitems: [["dispelling rune", "Fantasy", ], ["omniscrambler", "Science Fiction", ], ], }, 
{ name: "Object Duplicator", ref: ["CCR 275",], manifest: true, pow: ["Med"], effect: ["You duplicate a touched item that you can hold in one hand (such as a weapon, shield, or piece of equipment), creating a working copy. The original item must be level 6 or less. The duplicated item persists until you take a one-hour or longer recovery, unless it's the sort of equipment that is expended after use (such as a box of bullets or a grenade).", ], genreitems: [["promethean clay", "Fantasy", ], ["nanoreplicator", "Science Fiction", ], ], }, 
{ name: "Obstacle Bomb", ref: ["CCR 275",], manifest: true, pow: ["Low"], effect: ["Turns a short area within long range into difficult terrain, lasting until you take a one-hour or longer recovery. Most cyphers of this type create something appropriate to the location (ice, heavy snow, mud, rubble, bushes, and so on), but some create strange or fantastic obstacles (giant thorns, shadowy limbs, marbles, and so on).", ], genreitems: [["thorn burst rune", "Fantasy", ], ["rubble bomb", "Science Fiction", ], ], }, 
{ name: "Offensive Object Break", ref: ["CCR 261",], effect: ["A common nearby object (one that is close enough for you to touch) harms a foe within immediate range of it, either by striking them or by breaking and its pieces hitting them. This automatically inflicts 4 damage if the foe's level is 4 or less, or 1 damage if the foe is of level 5 or higher. This can't affect objects that are fixed in place or held by another creature.", ], explanation: ["You tipped over the vase. You smashed the glass pitcher. You shoved the sculpture.", ], }, 
{ name: "Overpowered Bomb", ref: ["CCR 275",], manifest: true, pow: ["Ultra"], effect: ["Upgrades a bomb cypher that inflicts damage (such as a fiery bomb or shrapnel bomb) so it inflicts an additional 4 damage.", "Once an overpowered bomb cypher is used to upgrade another cypher, the overpowered bomb is expended and no longer counts toward your cypher limit.", ], genreitems: [["scroll of empowered magical burst", "Fantasy", ], ["bomb expander", "Science Fiction", ]], sidebar: "<p>Some GMs might decide that if a character finds an overpowered bomb cypher, it's actually an existing bomb cypher that's already been upgraded with an overpowered bomb cypher.</p>", }, 
{ name: "Pacify Beast", ref: ["CCR 261",], nonstandard: true, effect: ["You have two assets on your interaction, intimidation, or charm task to calm a beast or make it uninterested in attacking you or your allies. If you have food or a treat appropriate to the beast's diet or interests, you get an additional asset on this attack. These assets can exceed the normal limit of two assets on a task. You can use this cypher before or after you roll.", "After a while, the creature reverts to its previous behavior or leaves, as appropriate to the situation (a guard dog would continue to guard, but a wild bear would wander off).", ], explanation: ["You grew up on a farm. You always had a way with animals. This creature is just scared and hungry.</p>",], }, 
{ name: "Paralyzer", ref: ["CCR 275",], manifest: true, pow: ["Med"], effect: ["Make an Intellect attack against a foe within short range (if the foe is level 7 or higher, the attack is hindered by two steps). If you succeed, they are stunned and unable to take actions until you use a ten-minute or longer recovery.", ], genreitems: [["crystal paralysis dart", "Fantasy", ], ["neurosuppressor", "Science Fiction", ], ], }, 
{ name: "Penultimate Enhancement", ref: ["CCR 276",], manifest: true, pow: ["Ultra"], effect: ["Until you use a one-hour or longer recovery, you have the ability to add three assets to one task. (For this task, the asset limit is three instead of two.) The cypher ends after you use this ability one time.", ], genreitems: [["potion of heroism", "Fantasy", ], ["probability adjuster", "Science Fiction", ], ], }, 
{ name: "Penultimate Key", ref: ["CCR 276",], manifest: true, pow: ["Med"], effect: ["Until you use a one-hour or longer recovery, when you roll to unlock or lock something, if you roll an 18 or less, treat the roll as an 18. (This means you don't get a GM intrusion if you roll a 1.) This ability only works on devices that use a key, such as doors, cabinets, treasure chests, and so on.", ], genreitems: [["chime of opening", "Fantasy", ], ["universal locksmith", "Science Fiction", ], ], }, 
{ name: "Perfect Moment", ref: ["CCR 261",], effect: ["You treat your next action as if you had rolled a natural 20.", ], explanation: ["Your trainer wouldn't let you stop until you got this move right. You dreamed about this and now it's happening exactly as you dreamed it. That shot was one in a million, kid.", ], sidebar: "<p>Because rolling a natural 20 means you get back any points you used to apply Effort on the task, there's no reason not to apply as much Effort as you can afford on this task, since you'll immediately get the points back.</p>", }, 
{ name: "Perfection", ref: ["CCR 276",], manifest: true, pow: ["Ultra"], effect: ["Until you use a one-hour or longer recovery, you have the ability to perform one task perfectly. When you activate this ability as part of the task, you treat the task as if you had rolled a natural 20. This cypher ends after you use this ability one time.", ], genreitems: [["potion of liquid luck", "Fantasy", ], ["quantum probability focuser", "Science Fiction", ], ], }, 
{ name: "Phase Changer", ref: ["CCR 276",], manifest: true, pow: ["Adv"], effect: ["Until you use a one-hour or longer recovery, you can go out of phase, allowing you to pass through solid objects up to level 6. When in this insubstantial state, you cannot make physical attacks or be physically attacked. You can remain out of phase until you use a recovery, and can end the effect whenever you want.", ], genreitems: [["ghost salve", "Fantasy", ], ["paradimensional shield", "Science Fiction", ], ], }, 
{ name: "Phasing Ray", ref: ["CCR 276",], manifest: true, pow: ["Adv"], effect: ["Choose part of a physical structure within short range, such as a wall, floor, or other space up to about 10 feet by 10 feet (3.5 m by 3.5 m). Until you use a one-hour or longer recovery, that area goes out of phase, allowing creatures and objects to pass through it as if it weren't there. The area looks the same as it did before (for example, a wall still blocks light and you can't see through it). The cypher can't affect structures above level 5.", ], genreitems: [["oil of ghost wall", "Fantasy", ], ["paradimensional resonator", "Science Fiction", ], ], }, 
{ name: "Pidgin", ref: ["CCR 262",], effect: ["Using gestures, facial expressions, and a few meaningful words, you're able to understand and be understood by someone even though you don't have a common language. This communication is simple and limited (like \"caveman talk\") but is enough to express concepts like friend, enemy, help, danger, sunrise/sunset, give, trade, and so on. After a few minutes of communicating like this, the other person probably ends the conversation out of boredom, frustration, or having other things to do; in any case, this understanding ends if you use a ten-minute or longer recovery.", ], explanation: ["You have an expressive face. You and they have a talent for pantomime. Some words in your language are similar to related words in their language.", ], }, 
{ name: "Poison Bomb", ref: ["CCR 276",], manifest: true, pow: ["Adv"], effect: ["Creates an immediate-radius explosion of toxic gas up to a short distance away. Make separate Speed attacks against each creature in the area. Success means they take 4 damage; failure means they still take 2 damage. About half of these cyphers inflict Might damage and half inflict Speed damage.", ], genreitems: [["venom emerald", "Fantasy", ], ["toxin grenade", "Science Fiction", ], ], }, 
{ name: "Poison Immunity", ref: ["CCR 276",], manifest: true, pow: ["Med"], effect: ["Until you use a one-hour or longer recovery, you are immune to poison of level 5 and lower, and you get two assets on defense tasks against poisons of level 6 and higher. (For this task, the asset limit is three instead of two.)", ], genreitems: [["amulet of fortitude", "Fantasy", ], ["antivenom injection", "Science Fiction", ], ], }, 
{ name: "Poison Recovery", ref: ["CCR 262",], effect: ["One poison of level 4 or lower that is currently in your system has no further effect on you.", ], explanation: ["The wound was only a scratch and barely any poison got into you. You've spent time building up a resistance to this particular poison. A medication you're taking interferes with the poison.", ], }, 
{ name: "Press the Advantage", ref: ["CCR 262",], effect: ["Against a foe who has already taken damage in this combat, your attack inflicts an additional 5 damage. You can use this cypher before or after you roll for the attack.", ], explanation: ["You got the scent of blood. Your attacks hit them right where they were most wounded. The foe started to panic.", ], }, 
{ name: "Push", ref: ["CCR 262",], effect: ["After a successful melee or ranged attack, you attempt to move a foe as an extra action. Make a Might or Speed attack (using the same Pool as the original attack). If this attack succeeds, you also move the foe horizontally an immediate distance. If you use a level of Effort on the attack specifically for this cypher, the successful attack also knocks them prone.", ], explanation: ["They were surprised by how strong you are. You caught them off-balance. They tripped on something.", ], }, 
{ name: "Question", ref: ["CCR 276",], manifest: true, pow: ["High"], effect: ["You can ask the GM one question and get a general answer. The GM assigns a level to the question, so the more obscure the answer, the more difficult the task. Generally, knowledge that you could find by looking somewhere other than your current location is level 1, and obscure knowledge of the past is level 7. Gaining knowledge of the future is level 10, and such knowledge is always open to interpretation. The cypher cannot provide an answer to a question above level 6.", ], genreitems: [["tome of divination", "Fantasy", ], ["omnilibrarian", "Science Fiction", ], ], }, 
{ name: "Quick Disable", ref: ["CCR 262",], nonstandard: true, effect: ["You have three assets on your task to deactivate, pause, disable, or shut down a device. (For this task, the asset limit is three instead of two.) You can use this cypher before or after you roll.", "If you succeed, attempts to reverse what you did are hindered by two steps (even if you're the one trying). For example, you could shut down a sentient artificial intelligence and make it hard for anyone to reactivate it, or pause the countdown clock on a time bomb and make it hard to start it up again.", ], explanation: ["You tried so many keyboard combinations that the thing froze up. You told it to print all files to the network printer. If all else fails, start cutting wires.", ], }, 
{ name: "Quick Feint", ref: ["CCR 262",], effect: ["If you succeed at an Intellect task against a foe you're in melee with, you make a feint, misleading them. You have three assets on your melee attack against them this turn. (For this task, the asset limit is three instead of two.)", ], explanation: ["Their shoes are untied. Aim high, stab low. You are not left-handed.", ], }, 
{ name: "Quick Funds", ref: ["CCR 262",], effect: ["You come up with the money or other resources required to purchase an item that is inexpensive, moderately priced, or expensive.", ], explanation: ["You have a line of credit. You found the coins hidden beneath a loose board. It's a loan from someone.", ], }, 
{ name: "Range Boost", ref: ["CCR 280",], powerboost: true, effect: ["The range of your ability increases. If the ability affects only yourself, you can use it on someone you touch. Otherwise, its range increases by one range category (immediate to short, short to long, and so on).", ], }, 
{ name: "Range Extender", ref: ["CCR 277",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, the range of any ranged weapon you use increases by one category (immediate to short, short to long, long to very long, very long to 1,000 feet [300 m]). A weapon with a range greater than very long has its range doubled.", ], genreitems: [["oil of far shots", "Fantasy", ], ["sniper scope", "Science Fiction", ], ], }, 
{ name: "Reality Spike", ref: ["CCR 277",], manifest: true, pow: ["Med"], effect: ["The cypher physically locks itself in its current position forever (even if it is in midair). It can be dislodged with a successful level 6 Might action or by a creature of level 7 or higher, but this destroys the cypher and ends the effect.", ], genreitems: [["immovable rod", "Fantasy", ], ["locational mooring", "Science Fiction", ], ], }, 
{ name: "Regeneration", ref: ["CCR 277",], manifest: true, pow: ["Adv"], effect: ["Until you use a one-hour or longer recovery, you regain 1 point to one of your Pools each round (you choose which Pool each time). If all of your Pools are full, this recovery pauses until at least one of your Pools is no longer full.", ], genreitems: [["ring of regeneration", "Fantasy", ], ["healing stimulant", "Science Fiction", ], ], }, 
{ name: "Remembering", ref: ["CCR 263",], effect: ["You remember about a minute's worth of details from your past, even if at the time it didn't seem like you were paying attention. For example, you could remember all the details of a person's outfit, the exact words of an overheard conversation, the license plates of several vehicles leaving a crime scene, or the password you saw someone type on a computer.", "Instead of remembering a past action, you can use this cypher to memorize something that's happening now or about to happen within one minute.", ], explanation: ["You were only pretending that you weren't observing. What they said became an earworm and it just now clicked. You got an unexpected bit of clarity about what happened.", ], }, 
{ name: "Remote Mapper", ref: ["CCR 277",], manifest: true, pow: ["Med"], effect: ["You launch a tiny object that moves at great speed, mapping and scanning an area you choose, starting a short distance away. The object travels up to a total of 3,000 feet (900 m), scanning an area 1800 feet (540 m) per level away from it, creating a path that optimizes how much area it can cover. It identifies basic layout, creatures, and major energy sources and either transmits this information back to you (perhaps by telepathy or an electronic signal) or returns to you to show what it saw. Its movement is blocked by any physical or energy barrier.", ], genreitems: [["spying crystalline eye", "Fantasy", ], ["infiltration drone", "Science Fiction", ], ], }, 
{ name: "Remote Viewer", ref: ["CCR 277",], manifest: true, pow: ["Low"], effect: ["Choose a location within very long range. Until you use a one-hour or longer recovery, you can concentrate to see, hear, and smell through the cypher, no matter how far it is from you. The cypher doesn't grant you any additional senses; for example, if the location of the cypher is dark, you can't see anything where it is unless you normally can see in the dark.", ], genreitems: [["demon eye crystal", "Fantasy", ], ["microcamera", "Science Fiction", ], ], }, 
{ name: "Repair", ref: ["CCR 277",], manifest: true, pow: ["Med"], effect: ["You repair an object that is damaged or neglected, restoring it to its full working condition if it originally was level 6 or lower. For example, you can restore a broken laptop or rusted sword to be as good as new. If the object was originally level 7 or higher, it isn't fully repaired but instead regains 1 to 2 levels lost to damage. The repair happens at an accelerated pace; depending on the genre, it might be instantaneous or happen over the course of about a minute. This repair doesn't cost you resource points.", ], genreitems: [["rune of repairing", "Fantasy", ], ["repairbot", "Science Fiction", ], ], }, 
{ name: "Repel", ref: ["CCR 263",], nonstandard: true, effect: ["Make an Intellect attack against a foe within short range. If you succeed, they decide to leave the area for some reason and stay away until you take a recovery. If they can't get away, all their tasks against you are hindered by two steps until you take a recovery.", ], explanation: ["You scared them away. They have to use the bathroom. They remembered an important appointment.", ], }, 
{ name: "Restrain", ref: ["CCR 263",], nonstandard: true, effect: ["As an extra action after a successful melee attack, make a Might or Speed roll against your foe (hindered if the foe is level 5 or higher). If you succeed, you restrain them (with an armlock, a headlock, a length of rope, or something similar) and the foe is unable to attack or move away from their current position. The foe can use their action to escape the restraints, but if you actively interfere (costing you your next action) you can make an eased roll against them to restrain them for another round.", ], explanation: ["You've watched a lot of wrestling. Reunions for your family tend to get unruly. You have a knack for ropes.", ], }, 
{ name: "Resurrection", ref: ["CCR 277",], manifest: true, pow: ["High"], effect: ["If you died within the last hour, you revive. Whatever injury, wound, or effect supposedly killed you is undone. You are hindered until you take a recovery. The number of moderate wounds you can take permanently decreases by one.", "You can use this cypher on another creature instead of yourself. If they are an NPC, instead of being hindered until they take a recovery, they're hindered until they rest for an hour; their maximum health decreases by 5 (to a minimum of 1).", ], genreitems: [["rod of resurrection", "Fantasy", ], ["Lazarus module", "Science Fiction", ], ], }, 
{ name: "Retaliation", ref: ["CCR 277",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, anyone within melee range striking you automatically takes 2 damage (no action or roll needed). The source of this damage depends on the cypher; some create a burst of electricity or fire, some inject a toxin or destructive nanites, and others temporarily cover your body with spikes or sharp scales.", ], genreitems: [["fire shield rune", "Fantasy", ], ["deterrence field", "Science Fiction", ], ], }, 
{ name: "Reveal Unseen", ref: ["CCR 263",], nonstandard: true, effect: ["Until your next turn, you ignore all penalties associated with attacking or defending against a foe who has cover, has a superior position, is camouflaged, or is invisible.", ], explanation: ["They accidentally revealed exactly where they are. You got a weird feeling and guessed right. They stumbled or were distracted and briefly moved out of cover.", ], }, 
{ name: "Sated", ref: ["CCR 263",], nonstandard: true, effect: ["You can go without food and water for a while, as if you'd just eaten a very filling meal and had plenty of fluids.", ], explanation: ["You had a big breakfast. You eat like a bird. You're basically a camel.", ], }, 
{ name: "Secret", ref: ["CCR 263",], effect: ["You can ask the GM one question and get a general answer. The GM assigns a level to the question, so the more obscure the answer, the more difficult the task. Generally, knowledge that you could find by looking somewhere other than your current location is level 1, and obscure knowledge of the past is level 7. Gaining knowledge of the future is level 10, and such knowledge is always open to interpretation. The cypher cannot provide an answer to a question above level 4.", ], explanation: ["You just watched a documentary about this. Someone left behind a note with relevant information. The answer was on the tip of your tongue.", ], }, 
{ name: "Shift Boost", ref: ["CCR 280",], powerboost: true, effect: ["You gain one additional power shift for one round. This shift must be a category of shift that you already have. For example, if you have shifts in Dexterity and Resilience, you can gain an additional shift in either Dexterity or Resilience for one round.", ], }, 
{ name: "Shock Bomb", ref: ["CCR 278",], manifest: true, pow: ["Adv"], effect: ["Creates an immediate-radius explosion of electricity up to a short distance away. Make separate Speed attacks against each creature in the area. Success means they take 4 damage; failure means they still take 2 damage.", ], genreitems: [["scroll of lightning burst", "Fantasy", ], ["amperage grenade", "Science Fiction", ], ], }, 
{ name: "Shrapnel Bomb", ref: ["CCR 278",], manifest: true, pow: ["Adv"], effect: ["Creates an immediate-radius explosion of sharp shrapnel up to a short distance away. Make separate Speed attacks against each creature in the area. Success means they take 4 damage; failure means they still take 2 damage.", ], genreitems: [["exploding dagger", "Fantasy", ], ["shrapnel grenade", "Science Fiction", ], ], }, 
{ name: "Silent Message", ref: ["CCR 263",], effect: ["Using only gestures and facial expressions, you silently communicate a concept to an ally who can see you. The concept can be anything you could say verbally in about twenty words or ten seconds, and your ally understands exactly what you mean.", ], explanation: ["You spent one semester working as a mime in an amusement park. You're a big fan of silent movies. You and the ally had the same military training.", ], }, 
{ name: "Sleep Inducer", ref: ["CCR 278",], manifest: true, pow: ["Med"], effect: ["Make an Intellect attack against each living creature in an immediate area within short range (if the creature is level 7 or higher, the attack is hindered by two steps). Success means the creature falls asleep until you use a ten-minute or longer recovery. Damage, extremely loud noise, or a violent action (such as shaking them) awakens a sleeper.", ], genreitems: [["scroll of sleep", "Fantasy", ], ["somnotron", "Science Fiction", ], ], }, 
{ name: "Slippery", ref: ["CCR 263",], nonstandard: true, effect: ["You find and use something nearby that makes an immediate area slippery and hard to pass through, such as a pan full of warm grease, a bag of marbles, a bucket of soapy water, or a planter full of wet soil. Movement tasks in the area are hindered at least for a few rounds or until the area is cleaned up.", ], explanation: ["The kitchen had a tray full of greasy runoff from a recent meal. The old plumbing only needed a hard kick to start spraying water everywhere. A kid left behind a bag of marbles.", ], }, 
{ name: "Snap Alert", ref: ["CCR 264",], effect: ["You end one effect that is limiting your actions, such as being stunned, unconscious, terrified, or blinded.", ], explanation: ["No sleeping on the job. Heroes get things done. Pull yourself together.", ], }, 
{ name: "Sonic Bomb", ref: ["CCR 278",], manifest: true, pow: ["Adv"], effect: ["Creates an immediate-radius explosion of intense sound up to a short distance away. Make separate Speed attacks against each creature in the area. Success means they take 3 damage and are deafened until you use a ten-minute or longer recovery. Failure means they still take 1 damage but are not deafened.", ], genreitems: [["scroll of sonic burst", "Fantasy", ], ["decibel grenade", "Science Fiction", ], ], }, 
{ name: "Sound Dampener", ref: ["CCR 278",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, sound within immediate range of you is dampened, giving everyone in the area an asset on stealth tasks and hindering sound-based attacks and effects originating within or entering the area.", ], genreitems: [["scroll of silence", "Fantasy", ], ["decibel suppressor", "Science Fiction", ], ], sidebar: "<p>A deaf creature's perception tasks to hear are hindered by two to four steps depending on the extent of their hearing loss.</p>", }, 
{ name: "Source Boost", ref: ["CCR 280",], powerboost: true, effect: ["Your ability costs 6 fewer Pool points.", ], }, 
{ name: "Speed Booster", ref: ["CCR 278",], manifest: true, pow: ["Med"], effect: ["Until you use a one-hour or longer recovery, your Speed Edge increases by 1.", ], genreitems: [["potion of agility", "Fantasy", ], ["nerve stimulator", "Science Fiction", ], ], }, 
{ name: "Speed Replenisher", ref: ["CCR 264",], effect: ["You restore 4 points to your Speed Pool.", ], explanation: ["You took a moment for a really good stretch. You cracked your back or neck and it made a really satisfying noise. That knot in your muscle finally relaxed.", ], }, 
{ name: "Speed Restorer", ref: ["CCR 278",], manifest: true, pow: ["Med"], effect: ["You restore 6 points to your Speed Pool.", ], genreitems: [["potion of soothed reflexes", "Fantasy", ], ["primephetamine", "Science Fiction", ], ], }, 
{ name: "Speeding Bullet", ref: ["CCR 278",], manifest: true, pow: ["Low"], effect: ["Your movement speed increases until you use a one-hour or longer recovery. You can move a short distance as part of another action (instead of an immediate distance) without hindering your tasks, or a long distance as your entire action (instead of a short distance) and only hinder your tasks by one step, or a very long distance as your entire action (instead of a long distance) and hinder your tasks by two steps until the end of your next turn.", ], genreitems: [["longstrider potion", "Fantasy", ], ["sprint module", "Science Fiction", ], ], }, 
{ name: "Split Boost", ref: ["CCR 280",], powerboost: true, effect: ["Your ability affects twice as many targets or twice as many areas. For example, if you have a mind control ability that affects one creature, you can use it on two creatures; if you have a blast of fire that affects an immediate area, you can affect two immediate areas. The targets or areas must be within range of you but otherwise do not have to be near each other. Choosing the same target twice or overlapping two areas has no effect. If the ability is an attack, make separate attacks for the targets or areas.", ], }, 
{ name: "Stamina Enhancer", ref: ["CCR 278",], manifest: true, pow: ["Med"], effect: ["Until you use a one-hour or longer recovery, the number of moderate wounds you can take increases by one.", ], genreitems: [["amulet of constitution", "Fantasy", ], ["dermal enhancer", "Science Fiction", ], ], }, 
{ name: "Summon Creature", ref: ["CCR 278",], manifest: true, pow: ["Med"], effect: ["A random level 6 creature from somewhere in the world (or perhaps another world or dimension) appears in a location of your choice within short range. The creature attacks the closest foe (switching to new foes if it defeats the initial one) until you use a ten-minute or longer recovery, after which it returns to where it came from.", ], genreitems: [["scroll of monster summoning", "Fantasy", ], ["zoology portal", "Science Fiction", ], ], sidebar: "<p>In some settings, a summon creature cypher might actually create a single-use combat robot or temporarily clone a creature instead of bringing one from elsewhere.</p>", }, 
{ name: "Sustenance", ref: ["CCR 279",], manifest: true, pow: ["Low"], effect: ["For one day you can go without food and water without any ill effects, as if you've been eating and drinking healthily during this time.", ], genreitems: [["amulet of sustenance", "Fantasy", ], ["nutrition recycler", "Science Fiction", ], ], }, 
{ name: "Take One for the Team", ref: ["CCR 264",], effect: ["When you take the attack against a foe of level 4 or less, the attack inflicts no damage, and you also don't take the extra minor wound that you'd normally incur.", ], explanation: ["The foe was too surprised by your move to make a telling blow. Your movement to intercept partially deflected the attack. You got instant karma.", ], }, 
{ name: "Teach Trick", ref: ["CCR 264",], nonstandard: true, effect: ["If you spend about ten minutes interacting with a beast (such as a dog, cat, bear, or other common animal), you can teach it one basic trick that it can physically perform (roll over, heel, spin, shake, go to an indicated place within long range, and so on). The beast's knowledge of this trick doesn't expire, but after a few days it probably needs a reminder about the trick in order to do it well.", ], explanation: ["You have a good connection to this beast. This animal is unusually smart. This might actually be an escaped pet.", ], }, 
{ name: "Telekinesis", ref: ["CCR 279",], manifest: true, pow: ["Med"], effect: ["Until you use a one-hour or longer recovery, you can move objects and creatures within short range using your mind. Choose whether you want to use this ability with strength or finesse.", ["<em>Strength:</em> You attempt to pull, push, or lift a target and move them up to a short distance. The target must be no larger than yourself and no heavier than your weight. Make an Intellect attack against the target. If you succeed, you move the target a short distance in any direction, either gently or with force. If they hit something, at your discretion they take 4 damage from the impact. If you use a level of Effort on the attack specifically for this cypher, the successful attack also knocks them prone.", "<em>Finesse:</em> You can manipulate an object or creature with finesse for one round as if you were touching it directly. For example, you could type on a keyboard, turn a doorknob and open a door, yank something from a creature's grasp, or lift something out of a creature's pocket. Using telekinesis this way requires a roll only if performing the task directly would require one.", ], "The cypher ends after you have used the telekinesis six times.", ], genreitems: [["ring of telekinesis", "Fantasy", ], ["personal tractor beam", "Science Fiction", ], ], }, 
{ name: "Telepathy", ref: ["CCR 279",], manifest: true, pow: ["Low"], effect: ["Until you use a ten-minute or longer recovery, you can telepathically communicate (sending and receiving) with any number of thinking creatures within long range. You must be able to perceive them to initiate contact, but thereafter, as long as they're in range you can remain in contact with them.", ], genreitems: [["circlet of telepathy", "Fantasy", ], ["telepathy module", "Science Fiction", ], ], }, 
{ name: "Teleporter", ref: ["CCR 279",], manifest: true, pow: ["Med", "Adv", "High", "Ultra"], effect: ["You teleport to a location within range, arriving safely. The teleportation includes your equipment but cannot bring other creatures with you. If you can't fit in the chosen destination, you appear in the closest open space to it. Roll to determine what kind of teleportation the cypher can perform.", ], genreitems: [["scroll of teleportation", "Fantasy", ], ["portal gun", "Science Fiction", ], ], }, 
{ name: "Tiny Size", ref: ["CCR 279",], manifest: true, pow: ["Med"], effect: ["Until you use a ten-minute or longer recovery, you shrink to about one-tenth your normal size. While at this smaller size, you add 4 points to your Speed Pool and +2 to your Speed Edge, but all of your Might actions are hindered by two steps. When the cypher ends, your Speed Edge returns to normal, you lose the penalty to Might actions, and you take 4 Speed damage.", "If an NPC uses this cypher, they ease their Speed tasks by two steps and hinder their Might tasks by two steps.", ], genreitems: [["potion of shrinking", "Fantasy", ], ["bodily compressor", "Science Fiction", ], ], }, 
{ name: "Tracer", ref: ["CCR 279",], manifest: true, pow: ["Low"], effect: ["Choose a target within short range. Until you take a ten-hour recovery, you know the direction and distance to that target, as long as it is within 100 miles (160 km) of you.", ], genreitems: [["crystal spider dart", "Fantasy", ], ["microtracker", "Science Fiction", ], ], }, 
{ name: "Traumatic Amnesia", ref: ["CCR 264",], nonstandard: true, effect: ["Make a Might, Speed, or Intellect attack against someone in immediate range who you've just surprised, harmed, or threatened. If you succeed, their memory of what just happened is confused, hindering by two steps their recollection of you and the details of the last minute or so.", ], explanation: ["You did or said something that triggered them. They were already on the verge of a crisis. They startle easily.", ], }, 
{ name: "Trick Embedder", ref: ["CCR 280",], manifest: true, pow: ["Low"], effect: ["Choose a non-intelligent beast within short range. The beast immediately learns two tricks of your choosing that they can physically perform (roll over, heel, spin, shake, go to an indicated place within long range, and so on). The beast never forgets this trick.", ], genreitems: [["beast trick rune", "Fantasy", ], ["pheromonal training dart", "Science Fiction", ], ], sidebar: "<p>You can use a trick embedder to teach tricks to a hostile or indifferent beast, but that won't make them obey you.</p>", }, 
{ name: "Ultimate Enhancement", ref: ["CCR 280",], manifest: true, pow: ["Ultra"], effect: ["Until you use a recovery, all your tasks are eased by two steps.", ], genreitems: [["potion of superheroism", "Fantasy", ], ["improbability adjuster", "Science Fiction", ], ], }, 
{ name: "Ultimate Healing", ref: ["CCR 280",], manifest: true, pow: ["Ultra"], effect: ["You heal all your minor, moderate, and major wounds.", ], genreitems: [["potion of ultimate healing", "Fantasy", ], ["advanced stimpack", "Science Fiction", ], ], }, 
{ name: "Uninterruptible Power Source", ref: ["CCR 280",], manifest: true, pow: ["Med"], effect: ["You attach the cypher to another device of up to level 6, providing power to it until you use a ten-hour recovery.", ], genreitems: [["power stone", "Fantasy", ], ["microgenerator", "Science Fiction", ], ], sidebar: "<p>Typically a modern or sci-fi uninterruptible power source cypher is providing electrical power, but exotic technology might be able to activate a gasoline engine or a nuclear-powered machine.</p>", }, 
{ name: "Virtual Shield", ref: ["CCR 280",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, you are protected as if you were using a shield. The cypher immediately ends if you use this protection to negate a major wound.", ], genreitems: [["scroll of shield", "Fantasy", ], ["ablative armor", "Science Fiction", ], ], }, 
{ name: "Water Breathing", ref: ["CCR 280",], manifest: true, pow: ["Low"], effect: ["Until you use a ten-hour recovery, you can breathe water as well as you do air. You can use this cypher on up to six creatures, in which case it lasts until they use a one-hour or longer recovery (one individual ending the cypher doesn't affect the duration for other creatures).", ], genreitems: [["potion of water breathing", "Fantasy", ], ["respiratory fluid", "Science Fiction", ], ], }, 
{ name: "Weapon Augmentation", ref: ["CCR 280",], manifest: true, pow: ["Low"], effect: ["Choose a physical weapon such as a sword or pistol. Until you use a one-hour or longer recovery, attacks with that weapon inflict an additional 2 damage (a projectile weapon such as a bow, crossbow, or pistol adds this damage to the projectile). The source of this extra damage depends on the cypher; some add a special effect such as cold, electricity, fire, or poison, others release a burst of necromantic energy or cell-disrupting nanites, and others just make the weapon innately more effective (such as by sharpening a blade or increasing the mass of a projectile at the moment of impact). Instead of using the cypher on a manufactured physical weapon, you can use it on a part of your body you make unarmed attacks with, such as a fist or foot.", ], genreitems: [["oil of weapon enhancement", "Fantasy", ], ["density modulator", "Science Fiction", ], ], }, 
{ name: "Wound Recovery", ref: ["CCR 264",], effect: ["You heal two minor wounds, heal a moderate wound, or reduce a major wound to a moderate wound.", ], explanation: ["The hit wasn't as bad as it looked. You can tough this one out. Your foe must have pulled their punch.", ], }, 
{ name: "Wounded Desperation", ref: ["CCR 264",], effect: ["You gain an asset on your attack, and the attack inflicts an additional 5 damage.", "You can only activate this cypher if you are hindered from wounds.", ], explanation: ["It was fight or die. The adrenaline kicked in. They hurt you and you needed to settle the score.", ], }, 
{ name: "Zone of Privacy", ref: ["CCR 280",], manifest: true, pow: ["Low"], effect: ["Until you use a one-hour or longer recovery, an area within immediate range of you becomes shielded against effects outside the area that attempt to see, hear, or otherwise sense what occurs inside. Any attempts to do so allow you to roll an Intellect defense task; success means the area appears as a blur to any sense applied."], genreitems: [["amulet of nondetection", "Fantasy", ], ["surveillance scrambler", "Science Fiction", ], ], }, 
];
const abilityActionVocabList = [
	{ dt: "Action", dd: "You use your action to gain the effect.", }, 
	{ dt: "First action", dd: "You can use the ability as a First action or an action.", }, 
	{ dt: "Last action", dd: "You can only use the ability as a Last action.", }, 
	{ dt: "Enabler", dd: "The ability works whenever you want it to without using an action.", }, 
	{ dt: "Hours or Minutes", dd: "Similar to an \"action\" ability, but activating it takes the listed number of minutes or hours instead of just an action.", }, 
	{ dt: "Perpetual", dd: "Similar to an enabler ability, but it constantly affects you (such as letting you breathe water) or permanently modifies you (such as adding +1 to your crossbow damage). If an ability doesn't state that it's an action or enabler, it's perpetual.", }, 
	{ dt: "GM Intrusions", dd: "Some abilities suggest GM intrusions because you're more likely to trigger an intrusion when using those them.", }, 
];
const genreList = [
	{ 
		genre: "Real World", 
		ref: ["CCR 31", "CCR 37", "CCR 240&ndash;242"], 
		summary: ["We're all families with the real world, at least contemporarily&mdash;cities, cars, smartphones, the internet, and so on. You might model your character on someone you pass in the street or see regularly on the internet or TV for these kinds of stories&mdash;for example:", ["Authorities gather outside a bank where a robbery has gone wrong and the criminals are trying to negotiate a hostage swap.", "Movers are hired by an agency to clear out a mansion after the eccentric owner dies without heirs.", "Friends rent a cabin near a wilderness lake, hoping to do some fishing, relaxing, and maybe a hike to the old fire lookout tower.", "Protesters gather outside a building where they believe injustices occur. A team of firefighters responds to flames blazing through a skyscraper and must identify which floors require the most immediate attention.", ], "Real world situations can be exciting, even without the addition of fantastic elements. Then again, who knows&mdash;the GM might have plans to take the scenario in an unexpected direction once you've established your characters.", ], 
		character: ["Start with a <a href='#define-core-character'>core character</a>.", ], 
		skills: ["<strong><em>Special Skill Restriction Exception:</em></strong> At character creation, you can choose <a href='#define-skill-attacking'>attacking</a> with a kind of medium or heavy weapon as <a href='#define-skill'>skill</a>&mdash;canceling out the <a href='#define-skill'>inability</a> from your <a href='#define-core-character'>core character</a>&mdash;for example, if you have a military background, you might select \"medium rifles\" as your background skill."], 
		skillsoptions: ["Animal care", "Astronomy", "Athletics", "Attacking", "Biology", "Charm", "Chemistry", "Crafting", "Deception", "Defending*", "Disguise", "Driving", "Engineering", "Escaping", "Farming", "Firefighting", "Forensics", "Gathering information", "Geology", "Gunnery", "Gymnastics", "Hacking", "Healing", "Heavy equipment operation", "History", "Identifying", "Initiative", "Intimidation", "Lockpicking", "Magic lore", "Mathematics", "Mechanics", "Mining", "Navigation", "Outdoor survival", "Perception", "Performance", "Philosophy", "Physics", "Pickpocketing", "Piloting", "Psychology", "Publishing", "Recognizing motive", "Religious lore", "Riding", "Scavenging", "Skilled trade", "Stealth", "Systems operation", "Tracking", ], 
		species: ["Choose or create a <a href='#define-descriptor'>descriptor</a>.", "Real-world characters are usually <a href='#define-species-human'>Human</a>.", ], 
		type: ["You don't have a <a href='#define-type'>type</a>. Instead, choose a profession or something else central to your identity&mdash;for example, a job, hobby, or interest&mdash;and gain training in a related <a href='#define-skill'>skill</a>. Use this choice instead of type in your character sentence&mdash;for example, a <em>Clever lawyer</em>, an <em>Honorable journalist</em>, a <em>Brash doctor</em>, or <em>Strong stunt driver</em>. Choose a background or create your own.", ], 
		focus: ["Real world characters don't typically have a <a href='#define-focus'>focus</a>.", ], 
		manifestcyphers: ["Usually none.", ], 
		backgroundoptions: [["Life has been good to you for the most part. Now you feel like it's time to give back in some way&mdash;to volunteer, work for a charity, or take on some other new role that has a positive social component.", "You finally landed your dream job after years of hard work, only to have it eliminated. Now you're not sure what to do&mdash;though you do need to pay the bills.", "You've been working in your profession for years and had some success. But now you're feeling burned out and are looking for something different, or at least a break.", "You were raised in a loving family and were quite close to your siblings. However, one of them disappeared without a trace a few years ago, and you promised yourself you'd find them one day.", "Your spouse died five years ago, and only now do you feel like you're up for restarting your life.", "Your research partner and friend stole your research and published it as if they'd done the work. Nothing you can do about that, but now you're looking for validation and recognition elsewhere.", "A relative left you a large inheritance, but you've always abhorred how they made their money. You've sworn to give it all away to a charity or other group doing prosocial work.", "As the child of missionaries, you spent your young life traveling. As an adult, you haven't decided if you share your parents' faith, but you've definitely got their penchant for travel.", "One of your parents was a famous entertainer, but you never saw that as a plus. You spend most of your time trying to evade the notice of others, especially as it relates to fame.", "When you were young, you were positive magic was real. As you've grown older and wiser, you've come to realize you were probably wrong, and the sadness of that realization remains.", "Your medical practice was too small to go it alone in the face of all the consolidation and insurance overheads, so you shuttered it and are considering your options.", "You served in the military. You saw things during that time that left you questioning your choices and decided to go into business for yourself&mdash;but doing what?", ], ], 
		currency: ["Currency underlying price categories is whatever is used in the setting&mdash;for example, dollars, euros, pounds, or pesos.", ], 
		equipment: ["Choose the following from these equipment tables, or use the Real World Equipment Bundle:", ["Appropriate clothing", "One expensive item", "Five moderately priced items", "Up to six inexpensive items", "Currency equivalent to a moderately priced item"], "<strong>Real World Equipment Bundle:</strong> Appropriate clothing, a raincoat, a used vehicle, a smartphone, a smartwatch or wireless earbuds, a laptop or tablet computer, a basic purse or wallet, a sticky notes pad and pen, a tin of breath fresheners, a bottle of painkillers, and a penknife. You have currency equivalent to a moderately priced item.", ], 
		equipmenttable: "Real World", 
		wounds: ["True to its name, the real world is a <strong>realistic</strong> genre.", ], 
		advancement: [["<em>At tier 3:</em> You gain training in a <a href='#define-skill'>skill</a>.", "<em>At tier 6:</em> you gain training in a <a href='#define-skill'>skill</a>.",], ], 
	}, 
	{ 
		genre: "Real World", 
		subgenre: "Espionage", 
		ref: ["CCR 32",], 
		summary: ["Not all spying is sponsored by nation-states. There are many semi-secret organizations that sell their services to governments and corporations&mdash;for example:", ["You're a secret agent sent on a series of missions in exotic locales under an assumed identity allowing you to engage in spying.", "You travel openly in your role as an entertainer or author, but have a covert agenda that requires you to infiltrate someplace under the control of a foreign power, corporation, multinational, or billionaire's personal empire.", "You and the other PCs are agents of a special department of a national government intelligence agency&mdash;for example, the FBI, SIS (MI6), FSB, or CIA.", ], ], 
		touchstones: ["Leverage", "Burn Notice", "Alias", "The Blacklist", "James Bond", "Mission Impossible", "Jason Bourne movies", "Man from U.N.C.L.E.", ], 
		alert: { name: "Tradecraft", description: ["During World War II, \"Tradecraft\" emerged as term for spy work, and persisted throughout the Cold War. In an espionage game, you'll want to develop your tradecraft by advancing your set of particular <a href='#define-skill'>skills</a>&mdash;perception, deception, charm, disguise, ferreting information out of files or computer networks, and hiding one's intrusions after the fact.", ], }, 
	}, 
	{ 
		genre: "Real World", 
		subgenre: "Crime Thriller", 
		ref: ["CCR 32",], 
		summary: ["In a crime thriller game, you'll likely find yourself trying to solve one or more crimes&mdash;possibly a series of connected crimes&mdash;especially murder. For example:", ["You're a detective, forensic specialist, journalist, true crime podcaster, author, police consultant, or a private investigator.", "You're part of a criminal gang, the mob, or another group on the wrong side of the law.", ], "Choose skills to choose include those useful in crime scene investigation, interviewing witnesses and suspects, finding clues through keen perception, gathering information with a wide net, analyzing evidence, and putting the pieces together.", ], 
		touchstones: ["Bones", "Law &amp; Order", "Castle", "Person of Interest", "Mare of Easttown", ], 
	}, 
	{ 
		genre: "Real World", 
		subgenre: "Action and Adventure", 
		ref: ["CCR 33",], 
		summary: ["Real-world action and adventure RPG scenarios include situations like:", ["A secret service agent&mdash;or just someone in the wrong place at the wrong time&mdash;faces off against kidnappers who've taken a loved one or other person of interest, or radicals attacking or hijacking a skyscraper, a jetliner in mid-flight, a political capitol, a high-security prison, or some other high-value location.", "Archaeologists travel to foreign lands to unearth secrets guarded by traps and mazes built by ancient civilizations.", "Those living on the edge plan and attempt to execute a heist of well-guarded treasure secured by modern, high-tech means.", ], "Action games benefit from PCs with diverse <a href='#define-skill'>skill</a> specialties&mdash;for example, a tracker, a lockpicking professional, a surveillance expert, someone with a military background, an archaeologist, an animal handler, a con artist, a demolitions expert, a mechanic, or a driver.", ], 
		touchstones: ["Die Hard", "Raiders of the Lost Ark (and other Indiana Jones movies)", "Fountain of Youth", "Ocean's 11", "Romancing the Stone", "Air Force One", "Olympus Has Fallen", "Speed", ], 
		alert: { name: "Optional Rules for Action and Adventure Games", description: [["<strong>Action Wounds:</strong> Your real-world action character can take two more <a href='#define-wound'>minor wounds</a> and one more <a href='#define-wound'>moderate wound</a>.", "<strong>Wound Treatment:</strong> <a href='#define-treatment'>Treatment</a> uses the <strong>heroic</strong> option.", "<strong>Desperate Actions:</strong> When the situation becomes desperate and the GM declares Desperate Actions mode, your character rises to the occasion, as is expected of an action hero. In Desperate Actions mode, if you have at least two <a href='#define-wound'>moderate wounds</a> or one <a href='#define-wound'>major wound</a>, you get a free <a href='#define-spending-xp'>reroll</a> on one <a href='#define-action'>action</a> each round (as if you had <a href='#define-spending-xp'>spent 1 XP</a>).",], ], }, 
	}, 
	{ 
		genre: "Real World", 
		subgenre: "Rescue", 
		ref: ["CCR 34",], 
		summary: ["A rescue game has a lot in common with an action game: dangerous things are happening. Usually, it's your job to deal with them and the immediate aftermath. Your concerns likely revolve around helping other people through:", ["Natural disasters&mdash;for example, floods, tsunamis, fires, earthquakes, volcanoes&mdash;maybe even meteor strikes.", "Human-caused calamities&mdash;for example, nuclear meltdowns, highly contagious disease vectors, biological weapons facilities, oil spills, or a sinking cruise ship.", ], "You might be a firefighter, paramedic, pilot, dispatcher, hazmat technician, civil or nuclear engineer. Your profession might suggest additional skills&mdash;for example, training in firefighting is important for a firefighter."], 
		touchstones: ["Backdraft", "Emergency!", "Chicago Fire", "9-1-1", "Station 19", "Rescue Me", ], 
	}, 
	{ 
		genre: "Real World", 
		subgenre: "Historical", 
		ref: ["CCR 35",], 
		summary: ["History provides endless settings across human existence and culture&mdash;for example, World War II, the Renaissance, the 1930s, ancient Greece, feudal Japan, ancient Egypt, a Mayan city-state.", "The GM should provide you with information on appropriate characters&mdash;for example, if the game is set in medieval Europe, you might be a knight, courtier, noble, minstrel, or scofflaw. If the game is set in ancient Greece, maybe you're an artisan, merchant, soldier (sometimes called a hoplite), scholar, philosopher, or athlete of the era.", "The game might begin with a major historical incident to give you the thrill of \"being there\".", ], 
		type: ["In historical games where fighting, raiding, or soldiering are important, the GM might allow PCs to choose a <a href='#define-type'>type</a> instead of a <a href='#define-genre-real-world-types'>profession</a>. If the setting it strictly historical, you can't use your type to choose magic abilities."], 
		typeoptions: ["Archer", "Axe Fighter", "Barbarian", "Bard", "Burglar", "Knife Fighter", "Noble Warrior", "Ranger", "Swashbuckler", "Sword Fighter", "Thief", "Two-Weapon Fighter", "Warrior", ], 
		alert: { name: "Historiness", description: ["\"Historiness\" is the quality of seeming historical or evoking a historical feeling&mdash;even if it's not necessarily historically accurate. Fiction set in historical time is a gold mine of interesting options. Consider the works of Jane Austen, Charles Dickens, or even William Shakespeare. Imagine a game weaving in and out of Pride and Prejudice, A Tale of Two Cities, or Macbeth.", ], }, 
	}, 
	{ 
		genre: "Real World", 
		subgenre: "Horror", 
		ref: ["CCR 36", "CCMG 124"], 
		summary: ["Horror RPG scenarios usually begin with PCs unaware their life will be compromised in a terrifying way&mdash;supernatural elements are just stories.", ["You and the other PCs have been hired to house-sit, clean, or visit an out-of-the-way cabin or mansion.", "You and the other PCs have decided it would be fun to explore an abandoned psychiatric hospital.", "You discover a part of your house that hasn't been opened in over fifty years.", "You receive samples from an ice core thousands of years old that contain weird spores.", "You are presented an interesting situation that requires more investigation."], "Your PC doesn't know what they're getting into, even if you have an inkling. Simply surviving might be the point, so <a href='#define-skills'>skills</a> related to stealth, perception, and recognizing motive could be important. If a horror can be defeated, gathering information and magic lore might be important.", ], 
		touchstones: ["The Ring", "It Follows", "Poltergeist", "Supernatural", "A Nightmare on Elm Street", "Hereditary", "It", "The Exorcist", "The Babadook", ], 
	}, 
	{ 
		genre: "Real World", 
		subgenre: "&mldr;and there's Magic", 
		ref: ["CCR 36", "CCMG 120"], 
		summary: ["In some games, magic exists in what otherwise seems like the real world. Magic's existence probably isn't the point. Even if the game begins with magic's existence being be secret, its revelation probably leads to a greater revelation&mdash;for example:", ["Magic real, and there's an entire shadow society containing practitioners, mythical entities, monsters, magic schools, and supernatural elements lurking beneath the surface of the modern world.",], "You might face magic practitioners gone bad, monsters, ghosts, or gods. Mundane challenges might arise, where magic might prove an interesting advantage&mdash;or disadvantage.", ], 
		touchstones: ["Buffy the Vampire Slayer", "Supernatural", "Pride and Prejudice and Zombies", "Penny Dreadful (TV series)", "The League of Extraordinary Gentlemen", "Shades of Milk and Honey", ], 
	}, 
	{
		genre: "Fantasy", 
		ref: ["CCR 40&ndash;41", "CCR 82&ndash;84", "CCR 242&ndash;243"], 
		summary: ["The fantasy genre is an exploration of worlds where magic exists side by side with untamed forests and expansive mountain ranges that are home to elves, dwarves, and other mythical creatures&mdash;for example:", ["A mage flinging lightning and death spells faces off against an ancient dragon whose fiery breath has seared whole armies.", "A knight bedecked in bright armor rides forth with the sunrise and the kingdom's acclaim, sworn to a worthy quest that might last years.", "A party of travelers, swords sheathed and bows unstrung, enters a firelit inn just before the evening rain hits, drawn by the smell of roast beast and delicate notes from a song performed by an elven bard.", "A band of explorers descends into a sprawling, buried ruin left behind by vanished forerunners, eager to find treasure and magic.", ], "Wielding magic, enchanted tools and weapons, and extraordinary special abilities, you and your fellow PCs embark on quests, confront supernatural threats, and grapple with themes of destiny, power, and good versus evil."], 
		character: ["Start with a <a href='#define-core-character'>core character</a>. The <a href='#define-genre-dungeon-fantasy'>Dungeon Fantasy</a>, <a href='#define-genre-swords-and-sorcery'>Swords &amp; Sorcery</a>, and <a href='#define-genre-epic-fantasy'>Epic Fantasy</a> subgenres share the skills and advancement options below, but differ in other aspects.", ], 
		skills: ["These skills are appropriate for dungeon fantasy, swords &amp; sorcery, and epic fantasy games.", ], 
		skillsoptions: ["Animal care", "Athletics", "Attacking", "Charm", "Crafting", "Deception", "Defending", "Disarming traps", "Disguise", "Escaping", "Farming", "Gathering information", "Gymnastics", "Healing", "History", "Initiative", "Intimidation", "Lockpicking", "Magic lore", "Mining", "Navigation", "Outdoor survival", "Perception", "Performance", "Pickpocketing", "Psychic lore", "Recognizing motive", "Religious lore", "Riding", "Scribing", "Stealth", "Tracking", "Woodcutting", ], 
		equipment: ["In addition to a set of clothing, choose the following from these equipment tables:", ["Six inexpensive items", "Five moderately priced items", "One expensive item", "Enough extra currency to buy a moderately priced item.", ], "Alternatively, choose the equipment bundle included in your <a href='#define-type'>type</a>."], 
		equipmenttable: "Fantasy", 
		advancement: [["<em>At tier 3:</em> Choose an ability from the <a href='#genre-fantasy-abilities-mid-tier'>Mid-Tier Fantasy Abilities</a> list.", "<em>At tier 6:</em> Choose an ability from the <a href='#genre-fantasy-abilities-high-tier'>Mid-High Fantasy Abilities</a> list. You can also replace an ability you gained from the <a href='#genre-fantasy-abilities-mid-tier'>Mid-Tier Fantasy Abilities</a> list with a different one.", "<strong>Magic Abilities:</strong> Depending on setting, magic abilities might not be available&mdash;for example, in a <a href='#define-genre-swords-and-sorcery'>Swords &amp; Sorcery</a> game.</p>", "<strong>Spellcasting:</strong> Magic abilities can be described as \"spells\" or \"rituals\" to provide them appropriate narrative feel. Spellcasters might incant strange syllables, make strange hand gestures, consult a grimoire, brandish a holy symbol, or rely on pouches of odd components.", ], ], 
		abilitiesmid: ["A Bit of Magic", "Cypher Use", "Danger Instinct", "Disappear Into Shadow", "Discerning Mind", "Elemental Protection", "Enhanced Stat", "Exceptional Follower", "From the Shadows", "Fury", "Pry Open Defense", "Puncturing Attack", "Snipe", "Strategize", "Tough", "Winning Smile", ], 
		abilitieshigh: ["Assassin Strike", "Concussive Force", "Inspire Action", "Invisibility", "Jump Attack", "Magic Portal", "Mask", "Resilience", "Spellbreaker", "Spin Attack", "Will of a Leader", ], 
	}, 
	{ 
		genre: "Fantasy", 
		subgenre: "Dungeon Fantasy", 
		ref: ["CCR 41&ndash;43", "CCR 243",], 
		summary: ["A dungeon fantasy game usually includes challenges presented by a host of bizarre monsters and life-draining undead, traps, curses, and&mdash;eventually&mdash;dragons or gods. PCs explore perilous places&mdash;for example, dungeons, caverns, and ancient ruins. But the rewards include treasures of gold, gems, jewelry&mdash;and best of all&mdash;magic.", ], 
		species: ["Choose or create a <a href='#define-descriptor'>descriptor</a>, and pair it with  one of the species available in the setting.", "Unless the GM says otherwise, PCs can't see in complete darkness&mdash;regardless of species."], 
		speciesoptions: ["Dragonfolk", "Dwarf", "Elf", "Gnome", "Halfling", "Hellborn", "Human", "Orc", ],  
		type: ["Each type includes suggestions for your character's background. Choose one or create your own.", ],
		typeoptions: ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Mage", "Monk", "Necromancer", "Paladin", "Ranger", "Rogue", ],  
		focus: ["Most foci's abilities are something a your character might accomplish&mdash;for example, through dedicated pursuit of magic, a birthright of extradimensional parentage, or divine power channeled from a god.", ], 	
		focusoptions: ["Abides in Stone", "Blazes With Fire", "Casts Spells", "Commands Mental Powers", "Consorts With the Dead", "Controls Beasts", "Crafts Illusions", "Doesn't Do Much", "Entertains", "Explores", "Fights Dirty", "Fights Unarmed", "Fights With Panache", "Howls at the Moon", "Hunts", "Infiltrates", "Leads", "Masters Telekinesis", "Masters Weaponry", "Moves Like the Wind", "Never Says Die", "Performs Feats of Strength", "Quells Evil", "Reveres a Supernatural Force", "Rides the Lightning", "Sneaks Through the Shadows", "Speaks for the Land", "Strikes With Mystic Might", "Tends to the Wounded", "Wears a Sheen of Ice", ],  
		currency: ["The currency underlying price categories in a dungeon fantasy setting are usually coins minted from valuable metal&mdash;for example, copper, silver, gold, and platinum.", ], 
		manifestcyphers: ["These cyphers are usually in the form of potions, scrolls, runes, and charms.", ], 
		wounds: ["Resting causing the passage of time is an important part of this <strong>standard</strong> genre.", ], 
	}, 
	{
		genre: "Fantasy", 
		subgenre: "Swords &amp; Sorcery", 
		ref: ["CCR 62&ndash;63", ], 
		summary: ["Swords &amp; sorcery games tend toward a raw, \"low fantasy\" feel. PCs are probably usually some kind of warrior. Magic&mdash;\"sorcery\"&mdash;is more of a threat than a reliable tool for heroes. When magic does appear, it is a corrupting force in the hands of sinister villains. If you do choose to explore magic, expect it to take longer to achieve and its effects to be less overt.", "The forces of evil are usually sorcerers and dark cults made up of other humans, the occasional monstrous creature and sorcery-summoned demon might appear. PCs must rely more on themselves and each other, rather than the gods&mdash;who are indolent or amoral at best, and petty and cruel at worst. Successful might earn you treasure, but swords & sorcery heroes embrace the simple satisfaction of saving the day and gaining the adoration of common people.", ], 
		touchstones: ["Conan", "Elric of Melniboné", ], 
		species: ["Choose or create a <a href='#define-descriptor'>descriptor</a>.", "Swords &amp sorcery characters are usually <a href='#define-species-human'>Human</a>.", ], 
		type: ["Each type includes suggestions for your character's background. Choose one or create your own.", ], 
		typeoptions: ["Archer", "Axe Fighter", "Barbarian", "Knife Fighter", "Priest", "Sorcerer", "Sword Fighter", "Thief", "Two-Weapon Fighter", "Witch", ], 
		focus: ["Swords &amp sorcery foci don't include overtly magical options, but the GM might make the occasional exception in response to events in the unfolding story."], 
		focusoptions: ["Controls Beasts", "Doesn't Do Much", "Entertains", "Explores", "Fights Dirty", "Fights Unarmed", "Fights With Panache", "Howls at the Moon", "Hunts", "Infiltrates", "Leads", "Masters Weaponry", "Moves Like the Wind", "Never Says Die", "Performs Feats of Strength", "Sneaks Through the Shadows", "Tends to the Wounded", ], 
		currency: ["The currency underlying price categories in a dungeon fantasy setting are usually coins minted from valuable metal&mdash;for example, copper, silver, and gold.", ], 
		manifestcyphers: ["These cyphers are usually in the form of herbs, charms, and tattoos.", ], 
		wounds: ["Swords &amp; sorcery is a <strong>heroic</strong> genre. PCs' ability to withstand injury reinforces the theme that strength, agility, wisdom, and cunning&mdash;not powerful spells&mdash;are virtues that provide your best weapons against dark forces.", ], 

	}, 
	{
		genre: "Fantasy", 
		subgenre: "Epic Fantasy", 
		ref: ["CCR 74&ndash;75", ], 
		summary: ["An epic fantasy game is a grand scale and a sweeping narrative that propels your&mdash;perhaps unlikely&mdash;PC into a wider world, where the struggle between good and evil is undecided. The initial threats you face may seem mundane, but dangerous enough to prepare you and your allies for an epic final struggle against shadow kings, dragons, evil gods, or demon lords.", ], 
		touchstones: ["The Lord of the Rings", "King Arthur (various adaptations)", "and any myth where prophecy, destiny, and ancient evils are common themes", ], 
		species: ["Choose or create a <a href='#define-descriptor'>descriptor</a>.", "Epic fantasy settings often feature <a href='#define-species-human'>Humans</a> but could also include additional fantasy species.", "Unless the GM says otherwise, PCs can't see in complete darkness&mdash;regardless of species."], 
		speciesoptions: ["Dwarf", "Elf", "Halfling", "Human", "Orc", ], 
		type: ["Each type includes suggestions for your character's background. Choose one or create your own.", ], 
		typeoptions: ["Archer", "Burglar", "Noble Warrior", "Swashbuckler", "Warrior", "Wizard", ], 
		focus: ["Viable foci in an epic fantasy game includes magical options&mdash;just not some of the most extreme ones.", ],
		focusoptions: ["Casts Spells", "Consorts With the Dead", "Controls Beasts", "Crafts Illusions", "Doesn't Do Much", "Entertains", "Explores", "Fights Dirty", "Fights Unarmed", "Fights With Panache", "Howls at the Moon", "Hunts", "Infiltrates", "Leads", "Masters Weaponry", "Moves Like the Wind", "Never Says Die", "Performs Feats of Strength", "Quells Evil", "Reveres a Supernatural Force", "Sneaks Through the Shadows", "Speaks for the Land", "Strikes With Mystic Might", "Tends to the Wounded", ], 
		currency: ["The currency underlying price categories in an epic fantasy setting is usually silver and copper coins. Other metal coins exist, but are not in common circulation&mdash;for example, those minted in precious gold.", ], 
		manifestcyphers: ["Manifest cyphers are rare in this setting because magic is rare, profound, and powerful, not fleeting or easily used.", ], 
		wounds: ["Epic Fantasy is a <strong>realistic</strong> genre. Grievous injuries might require prolonged attention from a healer.", ], 
	}, 
	{
		genre: "Science Fiction", 
		ref: ["CCR 88&ndash;89", "CCR 114&ndash;118"], 
		summary: ["In a science fiction game, you might find yourself struggling to repair sensors and field generators, plunging deep into Jupiter's gravity well, or shambling into a neon-drenched spaceport bar eager for some rest and relaxation after your latest escapades, or descending into the lightless chasms of a derelict megastructure left behind by a long-dead species of galactic architects.", "The setting might involve advanced technology, space exploration, artificial intelligence, genetic engineering, parallel universes, the possibility of extraterrestrial life, or the possible aftermaths of postapocalyptic annihilation. Despite all this sheer possibility, science fiction focuses on how the situation affects the society and characters within the setting."], 
		character: ["Start with a <a href='#define-core-character'>core character</a>. The <a href='#define-genre-hard-science-fiction'>Hard Science Fiction</a>, <a href='#define-genre-space-opera'>Space Opera</a>, and <a href='#define-genre-postapocalypse'>Postapocalypse</a> subgenres share advancement options below, but differ in other aspects.", ], 
		advancement: [["<em>At tier 3:</em> Choose an ability from the <a href='#genre-science-fiction-abilities-mid-tier'>Mid-Tier Science Fiction Abilities</a> list.", "<em>At tier 6:</em> Choose an ability from the <a href='#genre-science-fiction-abilities-high-tier'>High-Tier Science Fiction Abilities</a> list. You can also replace an ability you gained from the <a href='#genre-fantasy-abilities-mid-tier'>Mid-Tier Science Fiction Abilities</a> list with a different one.", "<strong>Setting Restrictions:</strong> Work with your GM to make sure your ability choices make sense in the seeing. For example, in an <a href='#define-genre-postapocalypse'>postapocalypse</a> setting, capacity for technological marvels might be long gone."], ], 
		abilitiesmid: ["Black Thumb", "Cypher Use", "Disable Mechanism", "Enhanced Stat", "Exceptional Follower", "Hands on the Wheel", "Incredible Health", "Machine Companion-v1", "Mind Reading", "Snipe", "Spray", ], 
		abilitieshigh: ["Arc Spray", "Inspire Action", "Knowledge Expert", "Lethal Capability", "Severe Machine Disruption", "Technology Expert", "Telepathic Network", ], 
	}, 
	{
		genre: "Science Fiction", 
		subgenre: "Hard Science Fiction", 
		ref: ["CCR 89&ndash;91", "CCR 117", "CCR 244&ndash;247", ], 
		summary: ["These settings are often set in a future version of the <a href='#define-genre-real-world'>real world</a>. Perhaps after a few hundred years, humans manage to colonize the solar system, including the moon, Mars, cloud cities in Venus's upper atmosphere, hollowed-out asteroids in the asteroid belt, and a variety of stations and orbitals around the outer planets.", "Challenges include dealing with the limitations of real-world science&mdash;for example, vacuum, the effects of low gravity and acceleration, and long ship travel times, working with and against various factions, and perhaps the implications of brand-new technologies that might break through long-accepted limits of science.", ], 
		touchstones: ["The Expanse", "The Three-Body Problem", "The Power", ], 
		skills: ["These skills are appropriate for hard science fiction games.", ], 
		skillsoptions: ["Astronomy", "Athletics", "Attacking", "Biology", "Charm", "Chemistry", "Crafting", "Cybernetics", "Deception", "Defending", "Disguise", "Driving", "Engineering", "Escaping", "Forensics", "Gathering information", "Geology", "Gunnery", "Gymnastics", "Hacking", "Healing", "Heavy equipment operation", "History", "Identifying", "Initiative", "Intimidation", "Lockpicking", "Magic lore", "Mathematics", "Mining", "Navigation", "Outdoor survival", "Perception", "Performance", "Philosophy", "Physics", "Pickpocketing", "Piloting", "Piloting spacecraft", "Psychic lore", "Psychology", "Publishing", "Recognizing motive", "Religious lore", "Riding", "Scavenging", "Stealth", "Systems operation", "Tracking", "Zero-G fluency", ], 
		species: ["Hard science fiction settings usually center on <a href='#define-species-human'>Humans</a>&mdash;although first contact with another species could make for an exciting story."], 
		type: ["Each type includes suggestions for your character's background. Choose one or create your own.", ],
		typeoptions: ["Diplomat", "Engineer", "Medic", "Noble ", "Operative", "Pilot", "Soldier", ], 
		focus: ["Foci appropriate for a hard science fiction setting focus on technologies that might not exist yet, but whose underlying theory is supported by the science of today."], 
		focusoptions: ["Builds Allies", "Carries a Gun", "Controls Beasts", "Doesn't Do Much", "Entertains", "Explores", "Fights Dirty", "Fights Unarmed", "Fights With Panache", "Fuses Flesh and Steel", "Fuses Mind and Machine", "Hunts", "Infiltrates", "Leads", "Masters Weaponry", "Never Says Die", "Performs Feats of Strength", "Sneaks Through the Shadows", "Solves Mysteries", "Stands Like a Bastion", "Talks to Machines", "Tends to the Wounded", "Works for a Living", ], 
		currency: ["The currency underlying price categories in a hard science fiction setting are nonphysical credits controlled by a hidden financial network, accessible by a variety of different machines, including your character's smart device.", ], 
		equipment: ["In addition to a set of clothing, choose the following from these equipment tables:", ["Six inexpensive items", "Five moderately priced items", "One expensive item", "Enough extra currency to buy a moderately priced item.", ], "Alternatively, choose the equipment bundle included in your <a href='#define-type'>type</a>."], 
		equipmenttable: "Science Fiction", 
		wounds: ["Hard science fiction is a <strong>realistic</strong> genre.", ], 
		manifestcyphers: ["These cyphers are available only in settings where weird prototypes or mysterious alien tech exist.", ], 
	}, 
	{
		genre: "Science Fiction", 
		subgenre: "Space Opera", 
		ref: ["CCR 98&ndash;99", "CCR 117", "CCR 244&ndash;247", ], 
		summary: ["If you're playing in a space opera game, you can expect faster-than-light (FTL) ships, and technology so advanced it may as well be magic. This makes sense: space operas incorporate elements and themes from <a href='#define-genre-fantasy'>fantasy</a>. Some space operas place a premium on a feeling of real-world verisimilitude, while \"pulp\" settings can veer into surreal.", "Travel times might not be important, psychic abilities might be prevalent, and planets might be covered in a single biome. Alien creatures might be monsters, or almost suspiciously similar to humans. An entire space opera could occur inside a megastructure orbiting the event horizon of <em>Sagittarius A*</em>&mdash;the supermassive black hole at the center of the Milky Way. Space operas can also explore the struggle against the underlying rules of reality itself.", ], 
		touchstones: ["Star Wars", "Star Trek", "Culture", "Known Space", "Foundation", "Flash Gordon", "The Martian Chronicles", "John Carter of Mars", "Sargasso of Space", "The Time Traders.", ], 
		skills: ["These skills are appropriate for space opera games.", ], 
		skillsoptions: ["Astronomy", "Athletics", "Attacking", "Biology", "Charm", "Chemistry", "Crafting", "Cybernetics", "Deception", "Defending", "Disguise", "Driving", "Engineering", "Escaping", "Forensics", "Gathering information", "Geology", "Gunnery", "Gymnastics", "Hacking", "Healing", "Heavy equipment operation", "History", "Identifying", "Initiative", "Intimidation", "Lockpicking", "Magic lore", "Mathematics", "Mining", "Navigation", "Outdoor survival", "Perception", "Performance", "Philosophy", "Physics", "Pickpocketing", "Piloting", "Piloting spacecraft", "Psychic lore", "Psychology", "Publishing", "Recognizing motive", "Religious lore", "Riding", "Scavenging", "Stealth", "Systems operation", "Tracking", "Zero-G fluency", ], 
		species: ["Choose or create a <a href='#define-descriptor'>descriptor</a>, and pair it with one of the species available in the setting. If you'd like to play a \"near-human\" alien, choose the <a href='#define-species-human'>Human</a> descriptor and work out any interesting biological quirks about your species with the GM.", "In some cases, a species might so advanced or fundamentally <em>different</em> that your choice of <a href='#define-type'>type</a> or <a href='#define-focus'>focus</a> is a better way of addressing species&mdash;for example, the <a href='#define-type-android'>Android</a> type."], 
		speciesoptions: ["Aarak", "Cyborg", "Delph", "D'nec", "Drakain", "Human", "Mutant", "Naron", "Prota", "Rigellian", "Stelan", "Vendeer", "Zantari", ], 
		type: ["Each type includes suggestions for your character's background. Choose one or create your own.", ],
		typeoptions: ["Android", "Diplomat", "Medic", "Noble", "Psion", "Scoundrel", "Soldier", "Starpilot", "Tech", "Trader", ], 
		focusoptions: ["Abides in Stone", "Blazes With Fire", "Builds Allies", "Carries a Gun", "Changes Shape", "Commands Mental Powers", "Crafts Illusions", "Doesn't Do Much", "Employs Magnetism", "Entertains", "Explores", "Fights Dirty", "Fights Unarmed", "Fights With Panache", "Fuses Flesh and Steel", "Fuses Mind and Machine", "Hunts", "Infiltrates", "Leads", "Masters Telekinesis", "Masters Weaponry", "Moves Like the Wind", "Never Says Die", "Performs Feats of Strength", "Reveres a Supernatural Force", "Rides the Lightning", "Sneaks Through the Shadows", "Solves Mysteries", "Stands Like a Bastion", "Strikes With Mystic Might", "Talks to Machines", "Tends to the Wounded", "Walks Through Walls", "Wears a Sheen of Ice", "Works for a Living", ], 
		currency: ["The currency underlying price categories in a space opera setting are nonphysical credits controlled by a hidden financial network, accessible by a variety of different machines, including your character's smart device.", ], 
		equipment: ["In addition to a set of clothing, choose the following from these equipment tables:", ["Six inexpensive items", "Five moderately priced items", "One expensive item", "Enough extra currency to buy a moderately priced item.", ], "Alternatively, choose the equipment bundle included in your <a href='#define-type'>type</a>."], 
		equipmenttable: "Science Fiction", 
		wounds: ["Stimpacks, subdermal regenerators, and regeneration tanks make space opera a <strong>heroic</strong> genre.", ], 
		manifestcyphers: ["These cyphers are present only in settings where weird prototypes or mysterious alien tech exists.", ]
	}, 
	{
		genre: "Science Fiction", 
		subgenre: "Postapocalypse", 
		ref: ["CCR 108&ndash;109", "CCR 248&ndash;249",], 
		summary: ["Postapocalypse games are grounded in a (somewhat) realistic portrayal of life would bin the aftermath of a world-ending sequence of events. The world has transformed into a harsh place where the only answer is constant scavenging for food and water in a ruinscape of collapsing buildings, rotting food stores, radiation, crazed animals, and desperate bands of raiders after everything you have. Survival is a common theme.", ], 
		touchstones: ["The Road", "Children of Men", "Mad Max", "The Walking Dead", ], 
		skills: ["These skills are appropriate for postapocalypse games.", ], 
		skillsoptions: ["Animal care", "Astronomy", "Athletics", "Attacking", "Biology", "Charm", "Chemistry", "Crafting", "Deception", "Defending", "Disguise", "Driving", "Engineering", "Escaping", "Firefighting", "Forensics", "Gathering information", "Geology", "Gymnastics", "Hacking", "Healing", "Heavy equipment operation", "History", "Identifying", "Initiative", "Intimidation", "Lockpicking", "Magic lore", "Mathematics", "Mechanics", "Mining", "Navigation", "Outdoor survival", "Perception", "Performance", "Philosophy", "Physics", "Pickpocketing", "Piloting", "Psychology", "Publishing", "Recognizing motive", "Religious lore", "Riding", "Scavenging", "Stealth", "Tracking", ], 
		type: ["Each type includes suggestions for your character's background. Choose one or create your own.", ], 
		typeoptions: ["Dealer", "Heavy", "Survivor", "Tender", ], 
		species: ["Choose or create a <a href='#define-descriptor'>descriptor</a>.", "Postapocalypse settings usually center on <a href='#define-species-human'>Humans</a>."], 
		focus: ["Postapocalypse games don't usually include foci based on magic or science fiction elements.", ], 
		focusoptions: ["Carries a Gun", "Controls Beasts", "Doesn't Do Much", "Entertains", "Explores", "Fights Dirty", "Fights Unarmed", "Fights With Panache", "Hunts", "Infiltrates", "Leads", "Masters Weaponry", "Never Says Die", "Performs Feats of Strength", "Sneaks Through the Shadows", "Solves Mysteries", "Stands Like a Bastion", "Talks to Machines", "Tends to the Wounded", ], 
		currency: ["The currency underlying price categories in a postapocalypse setting are most likely barter, but especially organized and resource-rich groups might develop scrip or something similar within their region of influence.", "These settings usually \"reset\" the common currency and amounts to small, manageable numbers, and don't generally have inflation to drive up prices of common items to more than what you can carry in one hand&mdash;for example, bottle caps, teeth, bullets, cans of food, quarters, or gold rings.", ], 
		equipment: ["In a postapocalyptic game a few long-lasting items from the <a href='#define-genre-real-world-equipment'>Real World Equipment</a> table might be available. Fuel, batteries, and working devices that rely on them are rare&mdash;and probably more expensive.", "In addition to a set of clothing, choose the following from these equipment tables", ["Six inexpensive items", "Five moderately priced items", "One expensive item", "Enough extra currency to buy a moderately priced item.", ], "Alternatively, choose the equipment bundle included in your <a href='#define-type'>type</a>.", ], 
		equipmenttable: "Postapocalypse", 
		wounds: ["Postapocalypse is a <strong>realistic</strong> genre.", ], 
		manifestcyphers: ["Usually none.", ], 
	}, 
	{
		genre: "Superheroes", 
		ref: ["CCR 82&ndash;84", "CCR 114&ndash;118", "CCR 123&ndash;131",], 
		summary: ["The superhero genre puts extraordinary powers in the hands of relatively few: heroes and villains in a world that otherwise looks much like our own. Some superheroes operate openly, others in the shadows. Either way, heroes try to save the day&mdash;whether the public appreciates it or not.", "As a superheroic character, you'll probably take on dangerous missions, confront superpowered threats, and perhaps grapple with whether the justice you seek to preserve is legitimate in the face of the rule of law. Regardless, you'll have superhuman strength, flight, energy manipulation, or some other extraordinary power that gives you a leg up on regular people.",], 
		touchstones: ["Iron Man", "Thor", "Superman", "the Flash", "MCU", "DCU", ], 
		characters: ["Because of their extraordinary powers, Superhero PCs face <em>really impossible tasks</em>, with difficulties reaching as high as 15.", "Start with a <a href='#define-core-character'>core character</a>.", ], 
		skills: ["These skills are appropriate for superhero games.", ], 
		skillsoptions: ["Animal care", "Astronomy", "Athletics", "Attacking", "Biology", "Charm", "Chemistry", "Crafting", "Deception", "Defending", "Disguise", "Driving", "Engineering", "Escaping", "Farming", "Firefighting", "Forensics", "Gathering information", "Geology", "Gunnery", "Gymnastics", "Hacking", "Healing", "Heavy equipment", "operation", "History", "Identifying", "Initiative", "Intimidation", "Lockpicking", "Magic lore", "Mathematics", "Mechanics", "Mining", "Navigation", "Outdoor survival", "Perception", "Performance", "Philosophy", "Physics", "Pickpocketing", "Piloting", "Psychic lore", "Psychology", "Publishing", "Recognizing motive", "Religious lore", "Riding", "Scavenging", "Skilled trade", "Stealth", "Systems operation", "Tracking", ], 
		species: ["Choose or create a <a href='#define-descriptor'>descriptor</a>.", "Superhero settings usually feature <a href='#define-species-human'>Humans</a>, but it's possible your superpowers are from being an alien. Maybe your species isn't important as your <a href='#define-type'>type</a> and <a href='#define-focus'>focus</a>. But given how the genre tends to draw in elements from <a href='#define-genre-fantasy'>fantasy</a> and <a href='#define-genre-science-fiction'>science fiction</a>, alternate species could be an important part of the setting.", ],
		type: ["Superhero types are different than types in other genres, as they are ranked from 1 to 5. Each rank indicates a higher power level than the one before. A rank 1 superhero is basically a well-trained, well-equipped human. A rank 3 Superhuman is far capable than a normal person.", "Each type includes the number of <a href='#define-power-shift'>power shifts</a> you gain, and suggestions for your character's background. Choose one or create your own.", ], 
		typeoptions: ["Crimefighter", "Vigilante", "Enhanced Hero", "Powerstar", "Superhuman", "Powerhouse", "Living God", ], 
		focus: ["Superhero genre is a rambunctious, wide-open genre that can accommodate almost any focus.",], 
		focusoptions: ["Abides in Stone", "Blazes With Fire", "Builds Allies", "Carries a Gun", "Casts Spells", "Changes Shape", "Commands Mental Powers", "Consorts With the Dead", "Controls Beasts", "Crafts Illusions", "Doesn't Do Much", "Employs Magnetism", "Entertains", "Explores", "Fights Dirty", "Fights Unarmed", "Fights With Panache", "Fuses Flesh and Steel", "Fuses Mind and Machine", "Grows to Towering Heights", "Howls at the Moon", "Hunts", "Infiltrates", "Leads", "Masters Telekinesis", "Masters Weaponry", "Moves Like the Wind", "Never Says Die", "Performs Feats of Strength", "Quells Evil", "Reveres a Supernatural Force", "Rides the Lightning", "Sneaks Through the Shadows", "Solves Mysteries", "Speaks for the Land", "Stands Like a Bastion", "Strikes With Mystic Might", "Talks to Machines", "Tends to the Wounded", "Walks Through Walls", "Wears a Sheen of Ice", "Works for a Living", ], 
		currency: ["Currency underlying price categories is whatever is used in the setting&mdash;for example, dollars, euros, pounds, or pesos.", ], 
		equipment: ["The superhero genre traditionally take place on modern-day earth, so you can probably use the <a href='#define-genre-real-world-equipment'>Real-World Equipment</a> table. For most superheroes, powers and skills make equipment almost irrelevant. However, the following items may be useful for a busy hero on the go.", ["<strong>Secret Identity Equipment Bundle:</strong> Appropriate clothing, a raincoat, a used vehicle, a smartphone, a smartwatch or wireless earbuds, a laptop or tablet computer, a basic purse or wallet, a sticky notes pad and pen, a tin of breath fresheners, a bottle of painkillers, and a penknife. Your character also starts with currency equivalent to a moderately priced item.</em>", ], ], 
		equipmenttable: "Superheroes", 
		manifestcyphers: ["These are possible, in the form of high-tech gadgets, strange serums, power jewels, and alien technology.", ], 
		wounds: ["True to its name, superheroes is a <strong>heroic</strong> genre.", ["<strong>Rally:</strong> You can spend 10 Might points to <a href='#define-rallying'>rally</a> a <a href='#define-wound'>major wound</a> as an action.", ], ], 
		advancement: [["<em>At tier 1:</em> Your <a href='#define-genre-superheroes-types'>superhero type</a> provides a choice from the <a href='#genre-superheroes-abilities-origin'>Origin Superhero Abilities</a> list. Use this choice to extend, supplement, or complement your <a href='#define-descriptor'>descriptor</a>, <a href='#define-type'>type</a>, and <a href='#define-focus'>focus</a>&mdash;for example, the <a href='#define-ability-intangible'>Intangible</a> ability gives a speedster with the <a href='#define-focus-moves-like-the-wind'>Moves Like the Wind</a> focus the ability to vibrate through walls. If your character's powers already feel complete, choose <a href='#define-ability-power-cypher-use'>Power Cypher Use</a>, <a href='#define-ability-superhero-versatility'>Superhero Versatility</a>, or <A href='#define-ability-team-up-ally'>Team-Up Ally</a>.", "<em>At tier 1:</em> Choose a number of <a href='#define-power-shift'>power shifts</a> assigned by the rank of your <a href='#define-genre-superheroes-types'>type</a>, but no more than three power shifts in any one category.", "<em>At tier 3:</em> Choose an ability from the <a href='#superheroes-abilities-mid-tier'>Mid-Tier Superheroes Abilities</a> list.", "<em>At tier 6:</em> Choose an ability from the <a href='#superheroes-abilities-high-tier'>High-Tier Superheroes Abilities</a> list. You can also replace an ability you gained from the <a href='#superheroes-abilities-high-tier'>Mid-Tier Superheroes Abilities</a>.", ], ], 
		abilitiesorigin: ["Adhesive Mobility", "Amazing Invulnerability", "Amazing Tools", "Armored Body", "Astonishing Teleport", "Awesome Force Field", "Duplicate", "Extraordinary Leap", "Fantastic Armament", "Fantastic Vehicle", "Incredible Instinct", "Incredible Velocity", "Intangible", "Invisible Knack", "Power Cypher Use", "Powerful Blast", "Regenerative Healing", "Shrink", "Skill Exemplar", "Stretchy", "Superhero Versatility", "Team-Up Ally", "Telepathic Prodigy", "Unbelievable Transformation", "Uncanny Flight", "Unyielding Shield", ], 
		abilitiespowershifts: [
			{ dt: "Accuracy", dd: "All attack rolls.", }, 
			{ dt: "Dexterity", dd: "Dodging, Speed defense rolls, movement, acrobatics, gymnastics, initiative.", }, 
			{ dt: "Flight", effort: false, dd: "Can fly as fast as a regular human's ground speed; not particularly maneuverable; can carry a creature of your size or smaller.", }, 
			{ dt: "Healing", effort: false, dd: "One extra one-action recovery each day.", }, 
			{ dt: "Increased Range", effort: false, dd: "Increases the range of one ability; touch or immediate becomes short, short becomes long, long becomes very long.", }, 
			{ dt: "Intelligence", dd: "Intellect defense; all knowledge skills, science skills, and crafting skills.", }, 
			{ dt: "Power", dd: "Effects and damage of one of your character abilities, but not attack rolls with it.", }, 
			{ dt: "Prodigy", effort: false, dd: "Trade one of your tier 1 abilities for a tier 2 focus ability, or trade two tier 1 abilities for a tier 3 focus ability. (This skips earlier abilities in your focus flowchart.)", }, 
			{ dt: "Resilience", dd: "Blocking, Might defense rolls, tasks requiring hardiness and endurance.", }, 
			{ dt: "Savant", dd: "Two specific skills (other than an attack skill, a defense skill, or a character ability that requires an attack roll), such as history, perception, or charm. You can assign this shift to an ability that treats your roll as a minimum number, such as Incredible Instinct.", }, 
			{ dt: "Single Attack", dd: "Attack rolls and damage for one specific kind of attack, such as pistols, punches, swords, or an attack special ability like laser eyes or a psychic blast.", }, 
			{ dt: "Strength", dd: "Athletics, noncombat strength rolls, melee damage, thrown weapon damage." }, 
		],
		abilitiesmid: ["A Bit of Magic", "Black Thumb", "Cypher Use", "Danger Instinct", "Disable Mechanism", "Disappear Into Shadow", "Discerning Mind", "Elemental Protection", "Enhanced Stat", "Exceptional Follower", "From the Shadows", "Fury", "Hands on the Wheel", "Incredible Health", "Machine Companion-v1", "Mind Reading", "Pry Open Defense", "Puncturing Attack", "Snipe", "Spray", "Strategize", "Tough", "Winning Smile", ], 
		abilitieshigh: ["Arc Spray", "Assassin Strike", "Concussive Force", "Inspire Action", "Invisibility", "Jump Attack", "Knowledge Expert", "Lethal Capability", "Magic Portal", "Mask", "Resilience", "Severe Machine Disruption", "Spellbreaker", "Spin Attack", "Technology Expert", "Telepathic Network", "Will of a Leader", ], 
	}, 
];
const tableList = [
	{
		name: "Skill Training", 
		ref: ["CCR 12", "CCR 290", ], 
		cols: ["Skill Level", "Task", "Description", ], 
		colstyle: [" og-nowrap", "text-center og-nowrap", "", ],
		rows: [["Inability", "Hindered", "An inability is a task your character isn't good at.", ], ["Freely Use", "&mdash;", "If you can't freely use a <a href='#define-weapon'>weapon</a>, attacks with it are hindered. If you can't freely use <a href='#define-armor'>armor</a>, its dodge penalty applies your Speed tasks.", ], ["Trained", "Eased", "If you become trained in a skill with which you have an inability, they cancel out.", ], ["Specialized", "Eased two steps", "At <a href='#define-tier'>tier 2</a>, if you gain second source of training you become specialized.", ], ["Expert", "Eased three steps", "Gaining expertise usually requires a special ability&mdash;for example, <a href='#define-ability-expert-combatant'>Expert Combatant</a>.", ], ], 
	}, 
	{
		name: "Price Categories",
		ref: ["CCR 237",], 
		cols: ["Price Category", "Description", "Examples", ], 
		colstyle: [" og-nowrap", "", ""], 
		rows: [["Inexpensive", "Something that people commonly buy.", "A simple meal,  drink at the bar, pen and some paper, book or magazine", ], ["Moderately priced", "Something people buy, but not often or in quantity", "A small piece of furniture, concert ticket, expensive meal, or new outfit", ], ["Expensive", "Something that would strain most people's finances", "Rent, a major piece of furniture, fancy outfit, or travel expenses", ], ["Very expensive", "A rare purchase for most people", "Jewelry or luxury furnishings", ], ["Exorbitant", "Something only the rich can afford", "A very nice house, yacht, or rare artwork.", ], ], 
	},
	{
		name: "Attacking",
		ref: ["298",], 
		cols: ["Type", "Range", "Stat", ], 
		colstyle: ["", "text-center", "text-center", ], 
		rows: [["Melee", "<a href='#define-range'>Immediate</a>", "<a href='#define-stat'>Might</a> or <a href='#define-stat'>Speed</a>", ], ["Ranged", "<a href='#define-range'>Short</a> or further", "<a href='#define-stat'>Speed</a>", ], ["Special Ability", "<em>Varies</em>", "<em>Varies (usually tied to ability cost)</em>", ], ], 
	},
	{
		name: "Defending",
		ref: ["304",], 
		cols: ["Defense", "Stat", "Success", ], 
		colstyle: ["", "text-center", "", ], 
		rows: [["Block", "<a href='#define-stat'>Might</a>", "Reduce <a href='#define-wound'>wound</a> severity by one step, but remain subject to any touch-based effects&mdash;for example, being grabbed by a giant", ], ["Dodge", "<a href='#define-stat'>Speed</a>", "Avoid being hit; hindered by <a href='#define-attack'>area attacks</a> and <a href='#define-armor'>armor</a> you can't <a href='#define-skill'>freely use</a>", ], ], 
	},
	{
		name: "Weapons",
		ref: ["CCR 238", "CCR 304",], 
		cols: ["Weapon", "Attack", "Damage", "Cost", "Examples", ], 
		colstyle: ["", "", "text-center", "text-center", "og-tooltip-omit", ], 
		rows: [["Light", "<a href='#define-attack'>Attack</a> eased, can attack as a <a href='#define-action'>First action</a>", "2", "Moderately priced", "Punches, kicks, knives, handaxes, darts, small handguns", ], ["Medium", "&mdash;", "4", "Expensive", "Broadswords, crossbows, handguns, sawed-off shotguns", ], ["Heavy", "Requires two hands and a <a href='#define-action'>Last action</a> to <a href='#define-attack'>Attack</a>&mdash;you can move an <a href='#define-range'>immediate distance</a> before or after, but the attack is hindered", "6", "Very expensive", "Greatswords, heavy crossbows, rifles, shotguns", ],["Explosive", "<a href='#define-attack'>Area attack</a>", "<em>Varies</em>", "<em>Varies</em>", "Bombs, grenades, missiles", ], ["Ammunition", "&mdash;", "&mdash;", "Inexpensive", "<em>The game might ignore ammunition count.</em>", ], ], 
	},
	{
		name: "Armor", 
		ref: ["CCR 238", "CCR 304",], 
		cols: ["Armor", "Block Rolls", "Dodge Penalty", "Examples", ], 
		colstyle: ["", "text-center", "text-center", "og-tooltip-omit", ], 
		rows: [["Light", "Eased", "Hindered", "Leather armor", ], ["Medium", "Eased two steps", "Hindered two steps", "Chainmail", ], ["Heavy", "Eased three steps", "Hindered three steps", "Plate mail", ], ], 
	}, 
	{ 
		name: "Difficulty", 
		ref: ["CCR 289",], 
		cols: ["Level", "Difficulty", "Target Number", "Success Rate", "Description", ], 
		colstyle: ["", "text-center", "text-center", "text-center", "og-tooltip-omit", ], 
		rows: [["0", "Routine", "0", "100%", "You can do this (no roll required).", ], 
		["1", "Simple", "3", "90%", "Most people can do this most of the time.", ], 
		["2", "Standard", "6", "75%", "Typical task, most people can usually do this.", ], 
		["3", "Demanding", "9", "60%", "Requires attention.", ], 
		["4", "Difficult", "12", "45%", "<a href='#define-skill'>Training</a> would help.", ], 
		["5", "Challenging", "15", "30%", "Even <a href='#define-skill'>trained</a> people fail.", ], 
		["6", "Intimidating", "18", "15%", "Normal people almost never succeed.", ], 
		["7", "Formidable", "21", "&mdash;", "Impossible without <a href='#define-skill'>skills</a> or great <a href='#define-effort'>effort</a>.", ], 
		["8", "Heroic", "24", "&minus;15%", "A task worthy of tales told for years afterward.", ], 
		["9", "Immortal", "27", "&minus;30%", "A task worthy of legends that last lifetimes.", ], 
		["10", "Impossible", "30", "&minus;45%", "A task that normal humans couldn't consider (but one that doesn't break the laws of physics).", ], ],
	}, 
	{
		name: "Special Rolls", 
		ref: ["CCR 292",], 
		cols: ["d20", "Effects"], 
		colstyle: ["", "", "Effects"], 
		rows: [
			["1", "<a href='#define-earning-xp'>GM intrusion</a> (no XP awarded)", ], 
			["17", "+1 damage", ], 
			["18", "+2 damage", ], 
			["19", "+3 damage or minor effect", ], 
			["20", "+4 damage or major effect, and <a href='#define-pool'>Pool</a> points spent on the task are refunded", ], 
		], 
	},
	{
		name: "Range", 
		ref: ["CCR 294",], 
		cols: ["Range", "Approximate Distance", "Movement", ], 
		colstyle: [" og-nowrap", "text-center"], 
		rows:[["Immediate", "10 feet (3.5 m)", "Move and take an <a href='#define-action'>action</a>."], ["Short", "50 feet (16 m)", "Move as an <a href='#define-action'>action</a>, or move and take an <a href='#define-action'>action</a>, but all your tasks are hindered until the end of your next turn."], ["Long", "100 feet (30 m)", "Move as a <a href='#define-action'>Last action</a>, but all your tasks are hindered by two steps until the end of your next turn.", ], ["Very long", "500 feet (150 m)", "&mdash;", ], ],
	}, 
	{
		name: "Wounds",
		ref: ["CCR 12", "CCR 299"], 
		cols: ["Severity", "Effects", "Examples"],
		colstyle: ["", "", "", ], 
		rows: [["Minor", "If you've take your last minor wound, any minor wounds you take are moderate wounds instead.", "Inconsequential injuries that no longer hurt after a few hours&mdash;Nicks, scratches, bruises", ], ["Moderate", "When you take your last moderate wound, all of your actions are hindered. If you've take your last moderate wound, any moderate wounds you take are major wounds instead.", "Injuries that no longer hurt after a few days&mdash;open cuts, weapon grazes, sprains, minor fractures"], ["Major", "Each major wound hinders your actions. If you take your last major wound, you die.", "Significant injuries that can take days or weeks to recover from&mdash;fractures, large open cuts, gunshot wounds", ], ], 
	}, 
	{
		name: "Pool Damage to Wound Conversions", 
		ref: ["CCR 299"], 
		cols: ["Pool Damage", "Wound Severity", ], 
		colstyle: ["text-center", "text-center", ], 
		rows: [["1&ndash;4", "Minor", ], ["5&ndash;8", "Moderate", ], ["9+", "Major", ], ], 
	}, 
	{ 
		name: "Rallying",
		ref: ["CCR 301",], 
		cols: ["Severity", "Cost", "Time Required", ], 
		colstyle: ["", "text-center", "", ], 
		rows: [["Minor wound", "2 Might points", "One action", ], ["Moderate wound", "5 Might points", "One action", ], ["Major wound", "&mdash;", "Most PCs can't rally  a major wound&mdash;<a href='#define-genre-superheroes-wounds'>superheroes</a> can.", ], ], 
	}, 
	{ 
		name: "Treatment",
		ref: ["CCR 301",], 
		cols: ["Treatment", "Task Difficulty", "Realistic", "Standard", "Heroic", ], 
		colstyle: ["", "text-center", "text-center", "text-center", "text-center", ], 
		rows: [["Minor wound", "0 (routine)", "Ten minutes", "One minute", "Last action", ], ["Moderate wound", "3", "One hour", "Ten minutes", "One minute", ], ["Major wound", "6", "One week", "One hour", "Ten minutes", ], ], 
	}, 
	{
		name: "Recoveries",
		ref: ["CCR 12", "CCR 301",], 
		cols: ["Recovery Time", "Pool Points", "Effects", ], 
		colstyle: ["og-nowrap", "og-nowrap text-center", "", "", ], 
		rows: [["One-action", "1d6 + <a href='#define-tier'>tier</a>", "If used as a Last action, add +2 to the roll.", ], ["Ten-minute", "1d6 + <a href='#define-tier'>tier</a>", "Remove <em>all</em> <a href='#define-wound'>minor wounds</a>", ], ["One-hour", "1d6 + <a href='#define-tier'>tier</a>", "Remove one <a href='#define-wound'>moderate wound</a> or <em>all</em> <a href='#define-wound'>minor wounds</a>", ], ["Ten-hour", "1d6 + <a href='#define-tier'>tier</a>", "Remove <em>all</em> <a href='#define-wound'>moderate wounds</a>. You can remove <em>all</em> <a href='#define-wound'>minor wounds</a> instead of one <a href='#define-wound'>moderate wound</a>. If you succeed a difficulty 6 Might task, remove one <a href='#define-wound'>major wound</a>.", ], ], 
	}, 
	{ 
		name: "Cypher Crafting Requirements", 
		cols: ["Resource Points", "Cypher Power Level", "Training Required", ], 
		colstyle: ["", "text-center", "text-center", ], 
		rows: [["2", "Low power", "Trained", ], ["3", "Medium power", "Specialized", ], ["4", "Advanced power", "Expert", ], ],
	}, 
	{
		name: "Research", 
		cols: ["Resource Points", "Information Level", ], 
		colstyle: ["", "text-center", ], 
		rows: [["1", "1&ndash;3", ], ["2", "4&ndash;5", ], ["3", "6&ndash;7", ], ], 
	}, 
	{
		name: "Scavenging and Related Tasks",
		ref: ["CCR 23",], 
		cols: ["Difficulty", "Description",], 
		colstyle: ["", "", "",],
		rows: [["5", "<strong>Resources:</strong> Find enough food and clean water for one day.", ], ["5", "<strong>Refuge:</strong> Find a place of relative safety to regroup, take shelter from the elements, and hide from dangerous groups or creatures.", ], ["Hindered", "If searching for more than five people, the task is hindered one step every two additional people.", ], ["Eased", "If searching for less than five people, the task is eased one step every two fewer people.", ], ], 
	}, 
	{
		name: "Animal Form Minor Abilities", 
		ref: ["CCR 161",], 
		cols: ["Animal", "Minor Ability", "Skill Asset",],
		colstyle: ["", "text-center", "text-center", ], 
		rows: [["Ape", "Hands", "Climbing",], ["Badger", "Scent", "Climbing",], ["Bat", "Flying", "<a href='#define-skill-perception'>Perception</a>",], ["Bear", "Scent", "Climbing",], ["Bird", "Flying", "<a href='#define-skill-perception'>Perception</a>",], ["Boar", "Scent", "<a href='#define-skill-defending'>Might defense</a>",], ["Cat", "Small", "Climbing or <a href='#define-skill-stealth'>stealth</a>",], ["Constrictor snake", "Constrict", "Climbing",], ["Crocodile", "Constrict", "<a href='#define-skill-stealth'>Stealth</a> or swimming",], ["Deinonychus", "Fast", "<a href='#define-skill-perception'>Perception</a>",], ["Dolphin", "Fast", "<a href='#define-skill-perception'>Perception</a>",], ["Fish", "Aquatic", "<a href='#define-skill-stealth'>Stealth</a> or swimming",], ["Frog", "Aquatic", "Jumping or <a href='#define-skill-stealth'>stealth</a>",], ["Horse", "Fast", "<a href='#define-skill-perception'>Perception</a>",], ["Leopard", "Fast", "Climbing or <a href='#define-skill-stealth'>stealth</a>",], ["Lizard", "Small", "Climbing or <a href='#define-skill-stealth'>stealth</a>",], ["Octopus", "Aquatic", "<a href='#define-skill-stealth'>Stealth</a>",], ["Shark", "Aquatic", "Swimming",], ["Turtle", "Armor", "<a href='#define-skill-defending'>Might defense</a>",], ["Venomous snake", "Venom", "Climbing",], ["Wolf", "Scent", "<a href='#define-skill-perception'>Perception</a>",], ], 
	}, 
	{
		name: "Real World Currency", 
		ref: ["CCR 241",], 
		cols: ["Category", "Dollar Value", ], 
		colstyle: ["w-20", "",], 
		rows: [["Inexpensive", "$10&ndash;$20", ], ["Moderate", "$100&ndash;$200", ], ["Expensive", "$1,000&ndash;$2,000", ], ["Very expensive", "$10,000&mdash;$20,000", ], ["Exorbitant", "$100,000&mdash;$200,000", ], ], 
	}, 
	{ 
		name: "Real World Inexpensive Items", 
		ref: ["CCR 240",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Bullets (50)", "Ammunition for handguns and rifles", ], ["Case of beer", "&mdash;", ], ["Duct tape roll", "Level 2 adhesive, level 3 with multiple layers; eases various tasks", ], ["Energy bars, box of 12", "Reasonable one-day sustenance for two or three people", ], ["Fast food", "One serving", ], ["Flashlight", "Normal light out to short distance", ], ["Hostel room", "One night in a shared room; traveler provides own bedding", ], ["Knife, simple", "Light weapon; easily destroyed", ], ["Padlock with keys", "Level 3 lock", ], ["Snack food", "&mdash;", ], ["Trail rations (1 day)", "&mdash;", ], ], 
	}, 
	{
		name: "Real World Moderately Priced Items", 
		ref: ["CCR 240",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Backpack", "&mdash;", ], ["Bag of heavy tools", "&mdash;", ], ["Bag of light tools", "&mdash;", ], ["Binoculars", "Asset for perception tasks at long range or longer", ], ["Bolt cutter", "Cuts objects like bolts, chains, and bars up to level 5", ], ["Climbing gear", "Asset for climbing tasks", ], ["Crowbar", "Asset for prying open things", ], ["Electric lantern", "Normal light in an immediate area, dim light in a short area; three to four hours", ], ["First aid kit", "Asset for healing tasks; five uses", ], ["Hand grenade", "Explosive weapon, can be thrown a short distance, inflicts 4 damage in immediate radius", ], ["Handcuffs", "Level 4 restraints", ], ["Hunting knife", "Light weapon", ], ["Leather jacket", "Light armor", ], ["Machete", "Medium weapon", ], ["Mobile phone", "&mdash;", ], ["Nightstick", "Light weapon", ], ["Rope", "Nylon, 50 feet (16 m)", ], ["Shield", "Can block wounds", ], ["Sleeping bag", "&mdash;", ], ["Tent", "Fits two adults", ], ], 
	}, 
	{
		name: "Real World Expensive Items", 
		ref: ["CCR 241",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Bow", "Medium weapon, long range", ], ["Cold weather camping gear", "Wounds from cold temperature environments are reduced by two steps", ], ["Computer/Laptop", "Apps and internet, asset on knowledge-based tasks", ], ["Disguise kit", "Asset for disguise tasks; five uses", ], ["High-end meal", "Hearty and extravagant meal for two or three at a high-end restaurant", ], ["Hotel room, moderate", "One week in a modern room with wifi", ], ["Kevlar vest", "Medium armor", ], ["Light handgun", "Light weapon, short range", ], ["Lodge room", "Extravagant couple of nights for two", ], ["Medium handgun", "Medium weapon, long range", ], ["Nightvision goggles", "Reasonably accurate vision in darkness up to long range", ], ["Portable hidden camera", "Transmits at long range", ], ["Portable hidden microphone", "Transmits at long range", ], ["Rifle", "Medium weapon, long range, attack hindered if fired with one hand", ], ["Scuba gear", "Breathe underwater for an hour, down to 130 feet (40 m)", ], ["Shotgun", "Heavy weapon, immediate range, extreme range extends to short range, attack hindered if fired with one hand", ], ["Shotgun (sawed off)", "Medium weapon, immediate range, extreme range extends to short range", ], ["Smartphone", "Mobile phone with apps, internet access, and immediate-range flashlight, asset on knowledge tasks that can be found on the internet", ], ["Straightjacket", "Level 4 restraint, hand tasks hindered by two steps", ], ], 
	}, 
	{
		name: "Real World Very Expensive Items", 
		ref: ["CCR 241",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Assault rifle", "Heavy weapon, rapid-fire weapon, long range", ], ["Heavy handgun", "Heavy weapon, long range", ], ["Heavy rifle", "Heavy weapon, 300-foot (90 m) range", ], ["Military body armor", "Heavy armor", ], ["Small boat", "Sail or engine, comfortably carries about six people", ], ["Submachine gun", "Medium weapon, rapid-fire weapon, short range", ], ["Used car", "Fairly reliable, seats four", ], ], 
	}, 
	{
		name: "Real World Exorbitant Items", 
		ref: ["CCR 241",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Large boat", "Sail or engine, comfortably carries twenty people", ], ["Luxury car", "SUV, limousine, or anything with advanced features, comfortably seats four to six people", ], ["Sports car", "Fast and flashy, seats two or three", ], ], 
	}, 
	{
		name: "Dungeon Fantasy Currency", 
		ref: ["CCR 243",], 
		cols: ["Category", "Gold Piece Value", ], 
		colstyle: ["w-20", "",], 
		rows: [["Inexpensive", "Less than 1", ], ["Moderate", "1&ndash;10", ], ["Expensive", "100&ndash;500", ], ["Very expensive", "1,000&ndash;10,000", ], ["Exorbitant", "10,000+", ], ], 
	}, 
	{
		name: "Fantasy Inexpensive Items", 
		ref: ["CCR 242",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Arrows (12)", "Ammunition for bow", ], ["Burlap sack", "&mdash;", ], ["Candle", "Dim light in an immediate area; one hour", ], ["Common meal", "&mdash;", ], ["Crossbow bolts (12)", "Ammunition for crossbow", ], ["Gallon of ale", "&mdash;", ], ["Inn room, average", "One night in your own decent room", ], ["Inn room, poor", "One week sharing a cheap room or sleeping on the common floor", ], ["Iron rations (1 day)", "&mdash;", ], ["Loaf of bread", "Unsustainable sustenance for two or three people", ], ["Meat", "One serving", ], ["Pitcher of cheap wine", "&mdash;", ], ["Poor meal", "Minimal sustenance for two or three people", ], ["Tinderbox", "Asset for creating fire", ], ["Torch (3)", "Normal light in an immediate area, dim light in a short area; one hour", ], ["Waterskin", "For water, wine, beer, and so on", ], ["Wooden club", "Light weapon", ], ], 
	}, 
	{
		name: "Fantasy Moderately Priced Items", 
		ref: ["CCR 242",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Backpack", "&mdash;", ], ["Bedroll", "&mdash;", ], ["Blowgun", "Light weapon, short range", ], ["Bottle of good wine", "&mdash;", ], ["Crowbar", "Asset for prying open things", ], ["Dagger", "Light weapon, melee or thrown short range", ], ["Good meal", "Hearty sustenance for one person", ], ["Grappling hook", "&mdash;", ], ["Guard dog", "level 3, attacks and perception as level 4; suitable for patrolling an area but not for accompanying adventurers into dangerous locations", ], ["Hammer", "Medium weapon, can be thrown up to short range", ], ["Handaxe", "Light weapon, melee or thrown short range", ], ["Hand mirror", "Useful for signaling or seeing around corners", ], ["Hides and furs", "Light armor", ], ["Hourglass", "&mdash;", ], ["Inn room, good", "One night in a nice, clean room", ], ["Lantern", "Normal light in an immediate area, dim light in a short area; three to four hours", ], ["Leather jerkin", "Light armor", ], ["Lockpicks", "Asset on lockpicking for mechanical locks", ], ["Mace", "Medium weapon", ], ["Magnifying glass", "Asset on perception to notice close-up details", ], ["Matchsticks (10)", "Asset for creating fire", ], ["Oil flask", "Fuels a lamp for three to four hours; can be prepped with a wick, lit, and thrown up to short range for 2 fire damage", ], ["Rapier", "Light weapon", ], ["Rope", "Hemp, 50 feet (16 m)", ], ["Shield", "Can block wounds", ], ["Signal horn", "Can be heard up to 1 mile (1.6 km) away", ], ["Spikes and hammer", "10 spikes", ], ["Tent", "Fits two adults", ], ], 
	}, 
	{
		name: "Fantasy Expensive Items", 
		ref: ["CCR 243",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Bag of heavy tools", "&mdash;", ], ["Bag of light tools", "&mdash;", ], ["Banquet", "Hearty and extravagant meal for one person", ], ["Battleaxe", "Medium weapon", ], ["Blank book", "For writing notes or spells, 100 pages", ], ["Book of lore", "Asset on one type of knowledge tasks", ], ["Bow", "Medium weapon, long range", ], ["Breastplate", "Medium armor", ], ["Brigandine", "Medium armor", ], ["Broadsword", "Medium weapon", ], ["Chainmail", "Medium armor", ], ["Compass", "Points north, eases some navigation tasks", ], ["Disguise kit", "Asset for disguise tasks; five uses", ], ["Healer's kit", "Asset for healing tasks; five uses", ], ["Light crossbow", "Medium weapon, long range", ], ["Maul", "Heavy weapon", ], ["Musical instrument", "Guitar, harp, flute, hand drum, or something similar", ], ["Quarterstaff", "Medium weapon (requires two hands)", ], ["Riding horse", "level 3; moves a long distance each round", ], ["Saber", "Medium weapon", ], ], 
	}, 
	{
		name: "Fantasy Very Expensive Items", 
		ref: ["CCR 243",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Dwarven breastplate", "Medium armor, eases block tasks by an additional step", ], ["Full plate armor", "Heavy armor", ], ["Greatsword", "Heavy weapon", ], ["Heavy crossbow", "Heavy weapon, long range", ], ["Spyglass", "Asset for perception tasks at long range or longer", ], ["Warhorse", "level 4; moves a long distance each round", ], ], 
	}, 
	{
		name: "Fantasy Exorbitant Items", 
		ref: ["CCR 243",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Elven chainmail", "Medium armor, encumbers as light armor", ], ["Sailing ship (small)", "&mdash;", ], ], 
	}, 
	{
		name: "Sci-fi Currency", 
		ref: ["CCR 247",], 
		cols: ["Category", "Currency Value", ], 
		colstyle: ["w-20", "",], 
		rows: [["Inexpensive", "$10&ndash;$20", ], ["Moderate", "$100&ndash;$200", ], ["Expensive", "$1,000&ndash;$2,000", ], ["Very expensive", "$10,000&mdash;$20,000", ], ["Exorbitant", "$100,000&mdash;$200,000", ], ], 
	}, 
	{
		name: "Science Fiction Inexpensive Items", 
		ref: ["CCR 244",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Bullets (50)", "Ammunition for handguns and rifles", ], ["Capsule room", "One night in tiny, coffin-like pod", ], ["Cryo storage", "One month (or more&mldr;) in an unused deep freeze locker", ], ["Energy pack (50)", "Ammunition for blaster weapons", ], ["Everlight<span class='ps-1'>&dagger;</span>", "Normal light out to very long distance, radio isotope power cell lasts years", ], ["Flashlight", "Normal light out to short distance", ], ["Knife (simple)", "Light weapon; easily destroyed", ], ["Needles (50)", "Ammunition for needler", ], ["Nutritabs, sleeve", "Reasonable one-day sustenance for two or three people", ], ["Snack food", "&mdash;", ], ["Stim", "Inhalant provides mild, low-level intoxication for one person", ], ["Survival rations (1 day)", "&mdash;", ], ], 
	}, 
	{
		name: "Science Fiction Moderately Priced Items", 
		ref: ["CCR 245",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Apex edge knife", "Light weapon; resists breaking and damage as level 8 object", ], ["Auton<span class='ps-1'>&dagger;</span>", "Robot follower: level 1, one modification as level 2", ], ["Backpack", "&mdash;", ], ["Bag of heavy tools", "&mdash;", ], ["Bag of light tools", "&mdash;", ], ["Binoculars", "Asset for perception tasks at long range or longer", ], ["Bottle of good wine", "&mdash;", ], ["Breather", "Eight hours of breathable air", ], ["Climbing gear", "Asset for climbing tasks", ], ["Communicator", "Planetary range", ], ["Crowbar", "Asset for prying open things", ], ["Digital intoxicant", "Smart device app that makes character inebriated, easing social tasks and hindering physical tasks for one hour; any additional doses end the easing and each hinders all tasks by one step", ], ["Electric lantern", "Normal light in an immediate area, dim light in a short area; three to four hours", ], ["Environment tent", "Wounds from extreme temperature environments are reduced by two steps", ], ["First aid kit", "Asset for healing tasks; five uses", ], ["Grenade", "Equivalent to a bomb cypher (adhesion, fiery, flash, poison, shrapnel, or sonic)", ], ["Handcuffs", "Level 4 restraints", ], ["Holographic suite", "One night for two in a room using holograms for decoration", ], ["Hunting knife", "Light weapon", ], ["Interface module", "Electronic device that allows user to connect to a wide variety of different computer systems or computerized devices, usually for the purpose of hacking", ], ["Leather jacket", "Light armor", ], ["Machete", "Medium weapon", ], ["Nightvision goggles", "Reasonably accurate vision in darkness up to long range", ], ["Restaurant meal", "Nutritious (if desired) sustenance for one person", ], ["Restraints", "Plastic wrist handcuffs, hinders escape attempts by two steps", ], ["Rope", "Nylon, 50 feet (16 m)", ], ["Sleeping bag", "&mdash;", ], ["Smart device", "As modern smartphone, but available in various shapes (wristwatch, badge, glasses, and so on); has apps, internet access, and immediate-range flashlight, asset on knowledge tasks when searching the internet", ], ["Space-fit serum", "Restores 3 points to one Pool; gives one month of protection against long-term health problems caused by space travel's low gravity and cosmic radiation", ], ["Vacuum suit", "Single-use mass-produced one-size-fits-all vacuum-protection \"suit\" of thin polymer; action to wear; GM intrusion on a roll of 1&ndash;2 on any physical action means the suit tears", ], ], 
	}, 
	{
		name: "Science Fiction Expensive Items", 
		ref: ["CCR 246",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Advanced scanner<span class='ps-1'>&dagger;</span>", "Palm-sized device; two assets on tasks to detect and identify life forms, machines, metal deposits, electronic transmissions, energy fields, and power sources in long range", ], ["Armored bodysuit", "Medium armor", ], ["Cloud spire room", "Extravagant couple of nights for two", ], ["Computer/Laptop", "Apps and internet, asset on knowledge-based tasks", ], ["Disguise kit", "Asset for disguise tasks; five uses", ], ["Environment suit", "24 hours of breathable air; wounds from extreme temperatures are reduced by two steps", ], ["False ID", "False identification accurate enough to get the character past most official checkpoints", ], ["High-end meal", "Hearty and extravagant meal for two or three at a high-end restaurant", ], ["Holographic suite", "A couple of weeks for two in a room using holograms for decoration", ], ["Light blaster pistol<span class='ps-1'>&dagger;</span>", "Light weapon, short range", ], ["Lightweight body armor", "Medium armor", ], ["Medical field kit", "Two assets for five healing tasks, then one asset for five healing tasks", ], ["Medium blaster pistol<span class='ps-1'>&dagger;</span>", "Medium weapon, long range", ], ["Needler", "Light weapon, long range", ], ["Portable hidden camera", "Transmits at long range", ], ["Portable hidden microphone", "Transmits at long range", ], ["Portable scanner", "Two-handed device; asset on tasks to detect and identify life forms, machines, metal deposits, electronic transmissions, energy fields, and power sources in long range", ], ["Shotgun", "Heavy weapon, immediate range, extreme range extends to short range, attack hindered if fired with one hand", ], ["Shotgun (sawed off)", "Medium weapon, immediate range, extreme range extends to short range", ], ["Spray-on impact armor", "Device creates nanofiber armor over skin or clothing for ten minutes, protects as light armor without hindering dodge tasks; applicator depletion 1 in 1d10", ], ["Stunstick", "Medium weapon, inflicts no damage, level 2 or lower creature loses their next action, level 3 or higher is hindered by two steps for a round or two", ], ["Surelock<span class='ps-1'>&dagger;</span>", "Level 6 lock, can be attached to any opening with level 8 adhesive", ], ["Wrist computer", "Asset for most knowledge-based tasks", ], ], 
	}, 
	{
		name: "Science Fiction Very Expensive Items", 
		ref: ["CCR 247",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Antigravity belt<span class='ps-1'>&dagger;</span>", "Provides flight at walking speed for an hour; several hours to recharge", ], ["Battlesuit", "Heavy armor; 24 hours of breathable air; wounds from extreme temperatures are reduced by two steps", ], ["Carryall<span class='ps-1'>&dagger;</span>", "Backpack with dimensional-folding tech and unlimited capacity for items that fit through its mouth", ], ["Gravity regulator<span class='ps-1'>&dagger;</span>", "Belt device that regulates wearer's gravity to 1G if within 0&ndash;3 G conditions", ], ["Heavy blaster pistol<span class='ps-1'>&dagger;</span>", "Heavy weapon, long range", ], ["Heavy blaster rifle<span class='ps-1'>&dagger;</span>", "Heavy weapon, 300-foot (90 m) range", ], ["Hovercraft", "Comfortably carries about six people", ], ["Impact cloak<span class='ps-1'>&dagger;</span>", "Fashionable cloak with attached hood; hardens if wearer is attacked, protecting as heavy armor but encumbering as light armor", ], ["Infiltrator", "Asset on lockpicking for mechanical locks", ], ["Jetpack", "Flies a long distance each round, or 120 mph (190 kph) overland, refuel every 1,000 miles (1,600 km)", ], ["Monomolecular blade", "Light weapon, ignores 1 point of physical armor, cuts through physical materials up to level 6", ], ["Nanodoctor<span class='ps-1'>&dagger;</span>", "Palm-sized device; reduces treatment time by 90%", ], ["Pulse laser pistol", "Medium weapon, rapid-fire weapon, long range", ], ["Stealthsuit", "Asset for stealth tasks", ], ["Vacuum assault rifle", "Heavy weapon, rapid-fire weapon, long range; can switch to medium weapon configuration as an action", ], ["Vacuum pistol", "Medium weapon, long range", ], ],
		sidebar: ["Vacuum pistols and vacuum assault rifles use special self-propelling rounds that can fire in oxygen-free environments; the rounds produce no recoil, so firing the weapon doesn't push or spin the character.", ], 
	}, 
	{
		name: "Science Fiction Exorbitant Items", 
		ref: ["CCR 247",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Blast cannon", "Heavy weapon, 10 damage, very long range, requires a tripod and two people to operate, rapid-fire weapon", ], ["Luxury car", "SUV, limousine, or anything with advanced features, comfortably seats four to six people", ], ["Personal force field<span class='ps-1'>&dagger;</span>", "Eases block and dodge tasks for one hour; several hours to recharge", ], ["Robot servant", "level 3, positive social interactions as level 4; not permitted to harm people or pets", ], ["Small spaceship", "Comfortably carries about six people", ], ], 
	}, 
	{
		name: "Postapocalypse Currency", 
		ref: ["CCR 248",], 
		cols: ["Category", "Currency Value", ], 
		colstyle: ["w-20", "",], 
		rows: [["Inexpensive", "1&ndash;2", ], ["Moderate", "5&ndash;10", ], ["Expensive", "50&ndash;100", ], ["Very expensive", "500&ndash;1,000", ], ["Exorbitant", "10,000+", ], ], 
	}, 
	{
		name: "Postapocalypse Inexpensive Items", 
		ref: ["CCR 248",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Animal hide", "Light armor, odor hinders stealth tasks", ], ["Candle", "Dim light in an immediate area; one hour", ], ["Duct tape roll", "Level 2 adhesive, level 3 with multiple layers", ], ["Knife (simple)", "Light weapon; easily destroyed", ], ["Plastic bag", "Easily destroyed", ], ["Preserved food (1 day)", "&mdash;", ], ["Shield", "Can block wounds", ], ["Wooden club", "Medium weapon", ], ], 
	}, 
	{
		name: "Postapocalypse Moderately Priced Items", 
		ref: ["CCR 248",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Backpack", "&mdash;", ], ["Baseball bat", "Medium weapon", ], ["Binoculars", "Asset for perception tasks at long range or longer", ], ["Bolt cutter", "Cuts objects like bolts, chains, and bars up to level 5", ], ["Bullets (50)", "Ammo for handguns and rifles", ], ["Climbing gear", "Asset for climbing tasks", ], ["Crank flashlight", "Normal light out to short distance; recharges with built-in crank", ], ["Crowbar", "Asset for prying open things", ], ["First aid kit", "Asset for healing tasks; five uses", ], ["Gas mask", "Breathable air for four hours", ], ["Handaxe", "Light weapon, melee or thrown short range", ], ["Leather jacket", "Light armor", ], ["Machete", "Medium weapon", ], ["Multitool knife", "Light weapon; asset to small repair tasks", ], ["Padlock with keys", "Level 3 lock", ], ["Rope", "Nylon, 50 feet (16 m)", ], ["Scavenged doctor's bag", "Asset for healing tasks; five uses", ], ["Shield", "Can block wounds", ], ["Sleeping bag", "&mdash;", ], ["Water filter straw", "Removes bacteria and parasites while drinking", ], ], 
	}, 
	{
		name: "Postapocalypse Expensive Items", 
		ref: ["CCR 248",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Antiradiation pill (5)", "Asset on defense rolls against radiation effects for 12 hours", ], ["Electric lantern, solar", "Normal light in an immediate area, dim light in a short area; three to four hours, recharges in eight hours of sunlight", ], ["Kevlar vest", "Medium armor", ], ["Nightvision goggles", "Reasonably accurate vision in darkness up to long range", ], ["Radiation detector", "Alert noise increases with intensity", ], ["Radiation tent", "Prevents radiation damage for three days", ], ["Riot gear", "Medium armor", ], ], 
	}, 
	{
		name: "Superheroes Inexpensive Items", 
		ref: ["CCR 249",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Homemade costume", "Looks cheap, easily destroyed", ], ], 
	}, 
	{
		name: "Superheroes Moderately Priced Items", 
		ref: ["CCR 249",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Simple cape", "Mostly cosmetic, easily destroyed", ], ["Spandex costume", "Elastic, fairly durable", ], ], 
	}, 
	{
		name: "Superheroes Expensive Items", 
		ref: ["CCR 249",], 
		cols: ["Item", "Note", ], 
		colstyle: ["w-20", "",], 
		rows: [["Advanced synthetic costume", "Elastic, durable, adapts to unusual superpowers (like stretching and invisibility)", ], ["Dramatic cape", "Enhances dramatic entrances, risks getting snagged", ], ], 
	}, 
	{
		name: "Random Cyphers", 
		ref: ["CCR 253",], 
		def: "cypher", 
		cols: ["d00", "Cypher", ], 
		colstyle: ["w-25 text-center og-nowrap", "",],
		rows: [["01&ndash;03", "Amazing effort", ], ["04", "Berserk", ], ["05&ndash;06", "Best tool", ], ["07", "Bleed", ], ["08", "Burst of speed", ], ["09", "Calm sniper", ], ["10", "Collateral damage", ], ["11&ndash;12", "Combat enhancer", ], ["13", "Counterattack", ], ["14", "Crying jag", ], ["15&ndash;16", "Deflect wound", ], ["17", "Disarm", ], ["18", "Disease recovery", ], ["19", "Double attack", ], ["20", "Equipment cache", ], ["21", "Extended breath", ], ["22", "Feat of strength", ], ["23", "Focus fire", ], ["24", "Fortuitous moment", ], ["25", "Fortunate fluke", ], ["26", "Get to the point", ], ["27&ndash;28", "Hamper foe", ], ["29", "Horizon observer", ], ["30", "Ignite", ], ["31", "Improved acrobatics", ], ["32", "Improved blocking", ], ["33", "Improved charm", ], ["34", "Improved climbing", ], ["35", "Improved deception", ], ["36", "Improved dexterity", ], ["37", "Improved disguising", ], ["38", "Improved dodging", ], ["39", "Improved driving", ], ["40", "Improved escaping", ], ["41", "Improved healing", ], ["42", "Improved initiative", ], ["43", "Improved intimidation", ], ["44", "Improved jumping", ], ["45", "Improved lockpicking", ], ["46", "Improved perception", ], ["47", "Improved pickpocketing", ], ["48", "Improved repairing", ], ["49", "Improved sneaking", ], ["50", "Improved swimming", ], ["51", "Improvised range", ], ["52", "Improvised shelter", ], ["53", "Improvised shield", ], ["54", "Inhibit foe", ], ["55", "Inspire aggression", ], ["56", "Intellect replenisher", ], ["57", "Knockout", ], ["58", "Lucid moment", ], ["59", "Maintain temperature", ], ["60", "Make passage", ], ["61", "Master password", ], ["62", "Mental concentration", ], ["63", "Might replenisher", ], ["64&ndash;66", "Motivated aid", ], ["67", "Near-death experience", ], ["68&ndash;70", "Noncombat enhancer", ], ["71", "Not me", ], ["72", "Offensive object break", ], ["73", "Pacify beast", ], ["74", "Perfect moment", ], ["75", "Pidgin", ], ["76", "Poison recovery", ], ["77", "Press the advantage", ], ["78", "Push", ], ["79", "Quick disable", ], ["80", "Quick feint", ], ["81", "Quick funds", ], ["82", "Remembering", ], ["83", "Repel", ], ["84", "Restrain", ], ["85", "Reveal unseen", ], ["86", "Sated", ], ["87", "Secret", ], ["88", "Silent message", ], ["89", "Slippery", ], ["90", "Snap alert", ], ["91", "Speed replenisher", ], ["92", "Take one for the team", ], ["93", "Teach trick", ], ["94", "Traumatic amnesia", ], ["95&ndash;97", "Wound recovery", ], ["98&ndash;00", "Wounded desperation", ], ], 
	}, 
	{
		name: "Random Manifest Cyphers", 
		ref: ["CCR 266",], 
		def: "cypher", 
		cols: ["d00", "Cypher Power", ], 
		colstyle: ["w-25 text-center og-nowrap", "",],
		rows: [["01&ndash;45", "Low", ], ["46&ndash;80", "Medium", ], ["81&ndash;92", "Advanced", ], ["93&ndash;98", "High", ], ["99&ndash;00", "Ultra", ], ], 
	}, 
	{
		name: "Low-Power Manifest Cyphers", 
		ref: ["CCR 267",], 
		def: "cypher", 
		cols: ["d00", "Name", ], 
		colstyle: ["w-25 text-center og-nowrap", "",],
		rows: [["01&ndash;02", "Comprehension", ], ["03&ndash;05", "Contingent activator", ], ["06&ndash;08", "Darksight", ], ["09&ndash;10", "Depth scanner", ], ["11&ndash;12", "Device controller", ], ["13&ndash;15", "Disguise module", ], ["16&ndash;17", "Eagleseye", ], ["18&ndash;19", "Endure climate", ], ["20&ndash;23", "Energy resistance", ], ["24&ndash;28", "Enhanced climbing", ], ["29&ndash;33", "Enhanced jumping", ], ["34&ndash;36", "Enhanced reflexes", ], ["37&ndash;40", "Enhanced strength", ], ["41&ndash;44", "Enhanced swimming", ], ["45&ndash;47", "Fear", ], ["48&ndash;50", "Friction reducer", ], ["51&ndash;52", "Image projector", ], ["53&ndash;54", "Information scanner", ], ["55&ndash;56", "Insanity suppressor", ], ["57&ndash;58", "Instant outfit", ], ["59&ndash;60", "Instant servant", ], ["61&ndash;64", "Knowledge augmentation", ], ["65&ndash;67", "Obstacle bomb", ], ["68&ndash;69", "Range extender", ], ["70&ndash;72", "Remote viewer", ], ["73&ndash;75", "Retaliation", ], ["76&ndash;77", "Sound dampener", ], ["78&ndash;79", "Speeding bullet", ], ["80&ndash;81", "Sustenance", ], ["82&ndash;83", "Telepathy", ], ["84&ndash;86", "Tracer", ], ["87&ndash;88", "Trick embedder", ], ["89&ndash;92", "Virtual shield", ], ["93&ndash;95", "Water breathing", ], ["96&ndash;98", "Weapon augmentation", ], ["99&ndash;00", "Zone of privacy", ], ], 
	}, 
	{
		name: "Medium-Power Manifest Cyphers", 
		ref: ["CCR 267",], 
		def: "cypher", 
		cols: ["d00", "Name", ], 
		colstyle: ["w-25 text-center og-nowrap", "",],
		rows: [["01&ndash;03", "Adhesion bomb", ], ["04&ndash;06", "Decay metal", ], ["07&ndash;08", "Disease immunity", ], ["09&ndash;12", "Energy blast", ], ["13&ndash;15", "Extra cyphers", ], ["16&ndash;17", "Flash bomb", ], ["18&ndash;20", "Flight", ], ["21&ndash;22", "Frost wall", ], ["23&ndash;24", "Future potential", ], ["25&ndash;26", "Giant size", ], ["27&ndash;28", "Inferno wall", ], ["29&ndash;30", "Instant building", ], ["31&ndash;33", "Instant healing", ], ["34&ndash;36", "Intellect booster", ], ["37&ndash;40", "Intellect restorer", ], ["41&ndash;43", "Intense perception", ], ["44&ndash;46", "Lightning wall", ], ["47&ndash;49", "Memory wipe", ], ["50&ndash;51", "Mental vigilance", ], ["52&ndash;54", "Might booster", ], ["55&ndash;58", "Might restorer", ], ["59&ndash;60", "Motion sensor", ], ["61&ndash;62", "Object duplicator", ], ["63&ndash;64", "Paralyzer", ], ["65&ndash;66", "Penultimate key", ], ["67&ndash;69", "Poison immunity", ], ["70&ndash;71", "Reality spike", ], ["72&ndash;73", "Remote mapper", ], ["74&ndash;75", "Repair", ], ["76&ndash;78", "Sleep inducer", ], ["79&ndash;81", "Speed booster", ], ["82&ndash;85", "Speed restorer", ], ["86&ndash;88", "Stamina enhancer", ], ["89&ndash;91", "Summon creature", ], ["92&ndash;94", "Telekinesis", ], ["95&ndash;96", "Teleporter (bounder)", ], ["97&ndash;98", "Tiny size", ], ["99&ndash;00", "Uninterruptible power source", ], ], 
	}, 
	{
		name: "Advanced-Power Manifest Cyphers", 
		ref: ["CCR 267",], 
		def: "cypher", 
		cols: ["d00", "Name", ], 
		colstyle: ["w-25 text-center og-nowrap", "",],
		rows: [["01&ndash;07", "Corrosive bomb", ], ["08&ndash;12", "Enhanced armor", ], ["13&ndash;19", "Enhanced dodging", ], ["20&ndash;26", "Fiery bomb", ], ["27&ndash;31", "Force field", ], ["32&ndash;37", "Freezing bomb", ], ["38&ndash;41", "Gravity bomb", ], ["42&ndash;48", "Homing projectile", ], ["49&ndash;53", "Invisibility", ], ["54&ndash;56", "Mind control", ], ["57&ndash;62", "Nullification", ], ["63&ndash;65", "Phase changer", ], ["66&ndash;68", "Phasing ray", ], ["69&ndash;74", "Poison bomb", ], ["75&ndash;77", "Regeneration", ], ["78&ndash;83", "Shock bomb", ], ["84&ndash;90", "Shrapnel bomb", ], ["91&ndash;97", "Sonic bomb", ], ["98&ndash;00", "Teleporter (traveler)", ], ], 
	}, 
	{
		name: "High-Power Manifest Cyphers", 
		ref: ["CCR 267",], 
		def: "cypher", 
		cols: ["d00", "Name", ], 
		colstyle: ["w-25 text-center og-nowrap", "",],
		rows: [["01&ndash;30", "Cluster bomb", ], ["31&ndash;70", "Question", ], ["71&ndash;80", "Resurrection", ], ["81&ndash;00", "Teleporter (planetary)", ], ], 
	}, 
	{
		name: "Ultra-Power Manifest Cyphers", 
		ref: ["CCR 267",], 
		def: "cypher", 
		cols: ["d00", "Name", ], 
		colstyle: ["w-25 text-center og-nowrap", "",],
		rows: [["01&ndash;13", "Gigantic bomb", ], ["14&ndash;23", "Incredible speed", ], ["24&ndash;33", "Invulnerability enhancement", ], ["34&ndash;46", "Overpowered bomb", ], ["47&ndash;56", "Penultimate enhancement", ], ["57&ndash;68", "Perfection", ], ["69&ndash;78", "Teleporter (interstellar)", ], ["79&ndash;90", "Ultimate enhancement", ], ["91&ndash;00", "Ultimate healing", ], ], 
	}, 
	{
		name: "Power Boost Cyphers", 
		ref: ["CCR 281",], 
		def: "cypher", 
		cols: ["d00", "Cypher", ], 
		colstyle: ["w-25 text-center og-nowrap", "",],
		rows: [["01&ndash;04", "Amazing feat", ], ["05&ndash;08", "Area boost", ], ["09&ndash;12", "Burst boost", ], ["13&ndash;16", "Damage boost", ], ["17&ndash;20", "Efficacy boost", ], ["21&ndash;24", "Range boost", ], ["25&ndash;28", "Shift boost", ], ["29&ndash;32", "Source boost", ], ["33&ndash;36", "Split boost", ], ["37&ndash;00", "Roll on Random Cypher table", ], ], 
	}, 
	{
		name: "Superhero Types", 
		cols: ["Type", "Rank", "Power Shifts",], 
		colstyle: ["", "text-center", "text-center",],
		rows: [["Crimefighter", "1", "2",], ["Vigilante", "1", "2",], ["Enhanced Hero", "2", "3",], ["Powerstar", "2", "3",], ["Superhuman", "3", "4",], ["Powerhouse", "4", "5",], ["Living God", "5", "6",], ], 
	}, 
	{
		name: "Superhero Type Adaptation", 
		cols: ["Rank", "Pool Point Total", "Pool Bonus Max", "Superheroics Pool Bonus", "Power Shifts",], 
		colstyle: ["", "text-center", "text-center", "text-center", "text-center", ], 
		rows: [["Rank 1", "10", "+5", "&mdash;", "2",], ["Rank 2", "14", "+6", "+2", "3",], ["Rank 3", "18", "+6", "+4", "4"], ["Rank 4", "24", "+8", "+6", "5",], ["Rank 5", "30", "+10", "+8", "6",]], 
	}, 
	{
		name: "Energy Blast Cypher", 
		cols: ["d00", "Energy Type", ], 
		colstyle: [" og-nowrap", "",],
		rows: [["01&ndash;15", "Cold", ], ["16&ndash;40", "Electricity", ], ["41&ndash;50", "Force", ], ["51&ndash;80", "Heat/concentrated light", ], ["81&ndash;85", "Magnetic wave", ], ["86&ndash;90", "Molecular bond disruption", ], ["91&ndash;00", "Radiation", ], ], 
	}, 
	{
		name: "Image Projector Cypher", 
		cols: ["d00", "Image", ], 
		colstyle: [" og-nowrap", "",],
		rows: [["01&ndash;10", "Copy of you that imitates your movements and speech (10-foot [3.5 m] cube)", ], ["11&ndash;30", "Terrifying creature, perhaps extinct or fictional (10-foot [3.5 m] cube)", ], ["31&ndash;40", "Huge machine or natural feature that obscures sight (30-foot [9 m] cube)", ], ["41&ndash;50", "Beautiful pastoral scene (50-foot [16 m] cube)", ], ["51&ndash;60", "Food that looks delicious but may not be familiar (10-foot [3.5 m] cube)", ], ["61&ndash;80", "Solid color that obscures sight (50-foot [16 m] cube)", ], ["81&ndash;00", "Incomprehensible scene that is disorienting and strange (20-foot [6 m] cube)", ], ], 
	}, 
	{
		name: "Knowledge Augmentation Cypher", 
		cols: ["d00", "Knowledge", ], 
		colstyle: [" og-nowrap", "",],
		rows: [["01&ndash;07", "Astronomy", ], ["08&ndash;15", "Biology", ], ["16&ndash;23", "Chemistry", ], ["24&ndash;31", "Geology", ], ["32&ndash;39", "History", ], ["40&ndash;47", "Magic lore", ], ["48&ndash;54", "Mathematics", ], ["55&ndash;61", "Philosophy", ], ["62&ndash;69", "Physics", ], ["70&ndash;77", "Psychic lore", ], ["78&ndash;84", "Psychology", ], ["85&ndash;92", "Religious lore", ], ["93&ndash;00", "Other (campaign-specific)", ], ], 
	}, 
	{
		name: "Teleporter Cypher", 
		cols: ["d00", "Power", "Type", ], 
		colstyle: [" og-nowrap", "text-center", ""],
		rows: [["01&ndash;50", "Medium", "<strong>Bounder:</strong> A location within 500 feet (150 m) that you can see, or up to 500 feet in the direction and distance you specify (such as \"200 feet west and 20 feet upward\").", ], ["51&ndash;80", "Advanced", "<strong>Traveler:</strong> A location within 500 miles (800 km) that you can see or have previously visited or seen.", ], ["81&ndash;95", "High", "<strong>Planetary:</strong> A location on the same planet that you can see or have previously visited or seen.", ], ["96&ndash;00", "Ultra", "<strong>Interstellar:</strong> A location in the same galaxy that you can see or have previously visited or seen.", ], ], 
	}, 
];
// construction functions
function createHeader(h, id, c, s) {
	let pt = 0;
	let css = "";
	if (s == "og-border") { css = " pt-3"; }
	return "<h" + h + " class='" + s + css + "' id='" + id +"'>" + c + "<a class='og-h-anchor' href='#" + id + "' title='Permalink' aria-hidden='true'></a></h" + h + ">";
}
function createRow(c) {
	return "<div class='row'>" + c + "</div>";
};
function createCol(c) {
	return "<div class='col-12 col-md-6'>" + c + "</div>";
};
function createDef(id, c) {
	return "<div id='define-" + id + "'>" + c + "</div>";
}
function createAlert(c) {
	return "<div class='alert ps-4 pb-0 og-tooltip-omit'>" + c + "</div>";
};
function createID(label) {
	let id = "";
	id = label.toLowerCase();
	id = id.replace("?", "");
	id = id.replace(":", "");
	id = id.replace("'", "");
	id = id.replace("(", "");
	id = id.replace(")", "");
	id = id.replace("&amp;", "and");
	id = id.replace("&mdash;", "");
	id = id.replace("&ndash;", "");
	id = id.replace("&mldr;", "");
	id = id.replace(/\s/g, "-");
	return id;
};
function createRef(array) {
	let r = "";
	r += "<ul class='list-inline og-ref og-tooltip-omit'>";
	for (let pp = 0; pp < array.length; pp++) {
		r += "<li class='list-inline-item'>" + array[pp] + "</li>";
	}
	r += "</ul>";
	return r;
};
function createSidebar(block) {
	return "<div class='fst-italic mt-3 mb-3 ps-3 pe-2 pt-3 pb-1 og-sidebar og-tooltip-omit'>" + block + "</div>";
};
function createEdnote(block) {
	return "<p class='fst-italic mt-2 mb-2 ps-3 pe-2 pt-3 pb-3 og-ed og-tooltip-omit'><strong>Editor's Notes &mdash;</strong> " + block + "</p>";
};
function createTable(table) {
	for (let t = 0; t < tableList.length; t++)  {
		if (tableList[t].name == table) {
			let tc = "";
			tc += "<div class='table-responsive' id=" + createID("table-" + table) + ">";
			tc += "<table class='table table-light table-striped table-sm'>";
			tc += "<caption class='visually-hidden'>" + table + "</caption>";
			tc += "<thead>";
			// create columns
			for (let c = 0; c < tableList[t].cols.length; c++) {
				tc += "<th scope='col' class='";
				if (tableList[t].colstyle != undefined && tableList[t].colstyle[c] != "") {
					tc += tableList[t].colstyle[c];
				}
				tc += "'>" + tableList[t].cols[c] + "</th>";
			}
			tc += "</thead>";
			tc += "<tbody>";
			// create rows
			for (let r = 0; r < tableList[t].rows.length; r++) {
				tc += "<tr>"
				// header length truncates columning.
				for (let c = 0; c < tableList[t].cols.length; c++) {
					// row header
					if (c == 0 ) { 
						tc += "<th scope='row' class='fw-normal"
						if (tableList[t].colstyle != undefined && tableList[t].colstyle[c] != "") {
							tc += " " + tableList[t].colstyle[c];
						}
						tc += "'>";
						if (tableList[t].name == "Superhero Types") { tc += getDef(createID("type-" + tableList[t].rows[r][c]), tableList[t].rows[r][c]); }
						// fill table data
						else { tc += " " + tableList[t].rows[r][c]; }
						tc += "</th>"; 
					}
					// table 
					else { 
						tc += "<td class='";
						if (tableList[t].colstyle != undefined) {
							tc += tableList[t].colstyle[c];
						}
						tc += "'>"
						if (tableList[t].def != undefined) {
							// link cypher tables
							if (tableList[t].name == "Random Manifest Cyphers") { tc += "<a href='#" + tableList[t].rows[r][c].toLowerCase() + "-power-manifest-cyphers" + "'>" + tableList[t].rows[r][c] + "</a>"; }
							else if (tableList[t].name == "Medium-Power Manifest Cyphers" && tableList[t].rows[r][c] == "Teleporter (bounder)" ) { tc += getDef("cypher-teleporter", "Teleporter") + " (bounder)";}
							else if (tableList[t].name == "Advanced-Power Manifest Cyphers" && tableList[t].rows[r][c] == "Teleporter (traveler)" ) { tc += getDef("cypher-teleporter", "Teleporter") + " (traveler)";}
							else if (tableList[t].name == "High-Power Manifest Cyphers" && tableList[t].rows[r][c] == "Teleporter (planetary)" ) { tc += getDef("cypher-teleporter", "Teleporter") + " (planetary)";}
							else if (tableList[t].name == "Ultra-Power Manifest Cyphers" && tableList[t].rows[r][c] == "Teleporter (interstellar)" ) { tc += getDef("cypher-teleporter", "Teleporter") + " (interstellar)";}
							else if (tableList[t].name == "Power Boost Cyphers" && tableList[t].rows[r][c] == "Roll on Random Cypher table" ) { tc += "Roll on <a href='#random-cyphers'>Random Cypher table</a>";}
							// fill table data
							else { tc += getDef(createID(tableList[t].def + "-" + tableList[t].rows[r][c]), tableList[t].rows[r][c]); }
						}
						else { tc += tableList[t].rows[r][c]; }
						tc += "</td>";
					}
				}
				tc += "</tr>";
			}
			tc += "</tbody>";
			tc += "</table>";
			tc += "</div>"; // close table container
			return tc;
		}
	}
	return printerror;
};
// retrieval functions
function getAbility(ability, refs) {
	for (let a = 0; a < abilityList.length; a++) {
		if (abilityList[a].name == ability) { 
			let ab = "";
			// name (trim major duplicates)
			ab += "<p class='mb-1'><strong>"; 
			if (abilityList[a].dupmajor == true) { ab += abilityList[a].name.slice(0, -3); }
			else { ab += abilityList[a].name; }
			// cost
			if (abilityList[a].cost != undefined) {
				ab += " (" + abilityList[a].cost; 
				if (abilityList[a].plus == true) { ab += "+"; }
				ab += " " + abilityList[a].pool + ")";
			}
			if (abilityList[a].note != undefined) {
				ab += " (" + abilityList[a].note + ")";
			}
			ab += ": </strong>";
			// effects
			for (let e = 0; e < abilityList[a].effects.length; e++) {
				// make a list if needed
				if (Array.isArray(abilityList[a].effects[e])) {
					ab += "<ul class='og-list-disc'>";
					for (let li = 0; li < abilityList[a].effects[e].length; li++) {
						// account for intra-list paragraphs
						if (Array.isArray(abilityList[a].effects[e][li])) {
							ab += "<li>"; 

							for (let lie = 0; lie < abilityList[a].effects[e][li].length; lie++) {
								ab += "<p class='mb-1'>" + abilityList[a].effects[e][li][lie]; + "</p>";
							}
							ab += "</li>"; 
						}
						else { ab += "<li>" + abilityList[a].effects[e][li] + "</li>"; }
					}
					ab += "</ul>";
				}
				else {
					if (e > 0) { ab += "<p class='mb-1'>"; }
					ab += abilityList[a].effects[e] + "</p>";
				}
			}
			if (refs == true) {
				ab += "<ul class='list-inline og-ref og-tooltip-omit'>";
				for (let pp = 0; pp < abilityList[a].ref.length; pp++) {
					ab += "<li class='list-inline-item'>" + abilityList[a].ref[pp] + "</li>";
				}
				ab += "</ul>";
			}
			if (abilityList[a].sidebar != undefined) {
				ab += createSidebar(abilityList[a].sidebar);
			}
			if (abilityList[a].dupminor == true) {
				ab += createEdnote("There are multiple  \"" + abilityList[a].name + "\" abilities. Each shares identical mechanics, with different phrasing. The OG-CRD condenses these to a single entry, so you may notice small discrepancies between this ability's appearance in your <a href='#define-type'>type</a> or <a href='#define-focus'>focus</a> in the <a href='https://www.montecookgames.com/store/product/cypher-corebooks/'>Cypher Character Rulebook</a>.");
			}
			if (abilityList[a].dupmajor == true) {
				ab += createEdnote("There are multiple \"" + abilityList[a].name.slice(0, -3) + "\" abilities. Each has unique mechanics. See <a href='#" + createID("ability-" + abilityList[a].name.slice(0, -3) + "-v1") + "'>Abilities Index: \"" + abilityList[a].name.slice(0, -3) + "\"</a>.");
			}
			return ab;
		}
	}
	return printerror;
};
function getBody(p) {
	let body = "";
	for (let e = 0; e < p.length; e++) {
		if (Array.isArray(p[e]) == false) {
			body += "<p>" + p[e] + "</p>";
		}
		else if (Array.isArray(p[e])) {
			body += "<ul>";
			for (let li = 0; li < p[e].length; li++) {
				body += "<li class='mb-1'>" + p[e][li] + "</li>";
			}
			body += "</ul>";
		}
		if (e == (p.length - 1)) {
			return body;
		}
	}
	return printerror;
};
function getDef(id, text) {
	return "<a href='#define-" + id + "'>" + text + "</a>";
};
function getSkill(skill, lowercase) {
	for (let s = 0; s < skillList.length; s++) {
		if (lowercase == true && skill == skillList[s].name) { return "<a href='#" + createID("define-skill-" + skillList[s].name) + "'>" + skillList[s].name.toLowerCase() + "</a>"; }
		else if (lowercase == false && skill == skillList[s].name) { return "<a href='#" + createID("define-skill-" + skillList[s].name) + "'>" + skillList[s].name.toLowerCase() + "</a>"; }
	}
	// can't throw errors in case of descriptors with unusual skills, so just return the text
	return skill;
};
function getGenreList(genre, subgenre, option, style, alert) {
	let i = "";
	let tr = "<p class='small'>&dagger; &mdash; <em><a href='#define-skill'>tier-restricted skill</a></em></p>";
	let trx = "<span class='ps-1'>&dagger;</span>";
	// skills
	if (option == "skills") { 
		// generic skills
		if (genre == undefined && subgenre == undefined) {
			i += tr;
			i += "<ul class='" +  style + "'>";
			for (li = 0; li < skillList.length; li++) {
				i += "<li>" + getDef(createID("skill-" + skillList[li].name), skillList[li].name);
				if (skillList[li].tierrestricted == true) { i += trx; }
				i += "</li>";
			}
			i += "</ul>";
			if (alert == true) { return createAlert(i); }
			else { return i; }
		}
		// genre skills
		else { 
			for (let g = 0; g < genreList.length; g++) {
				if (genreList[g].genre == genre && genreList[g].subgenre == subgenre && genreList[g].skillsoptions != undefined) {
					i += tr;
					i += "<ul class='" +  style + "'>";
					for (let gs = 0; gs < genreList[g].skillsoptions.length; gs++) {
						for (let li = 0; li < skillList.length; li++) {
							if (genreList[g].skillsoptions[gs] == skillList[li].name) {
								i += "<li>" + getDef(createID("skill-" + skillList[li].name), skillList[li].name)
							if (skillList[li].tierrestricted == true) { i += trx; }
							i += "</li>";
							}
						}
					}
					i += "</ul>";
					if (alert == true) { return createAlert(i); }
					else { return i; }
				}
			}
		}
	}
	// descriptors
	else if (option == "descriptor") {
		// generic descriptors
		i += "<ul class='list-unstyled og-qr-compact'>";
		for (let d = 0; d < descriptorList.length; d++) {
			i += "<li><a href='#" + createID("define-descriptor-" + descriptorList[d].name) + "'>" + descriptorList[d].name + "</a></li>";
		}
		i += "</ul>";
		if (alert == true) { return createAlert(i); }
		else { return i; }
	}
	// species
	else if (option == "species") {
		// generic species
		if (genre == undefined && subgenre == undefined) {
			i += "<ul class='list-unstyled og-qr-compact'>";
			for (let sp = 0; sp < speciesList.length; sp++) {
				i += "<li><a href='#" + createID("define-species-" + speciesList[sp].name) + "'>" + speciesList[sp].name + "</a></li>";
			}
			i += "</ul>";
			if (alert == true) { return createAlert(i); }
			else { return i; }
		}
		// genre species
		else { 
			for (let g = 0; g < genreList.length; g++) {
				if (genreList[g].genre == genre && genreList[g].subgenre == subgenre && genreList[g].speciesoptions != undefined) {
					i += "<ul class='" + style + "'>";
					for (let gs = 0; gs < genreList[g].speciesoptions.length; gs++) {
						for (let li = 0; li < speciesList.length; li++) {
							if (genreList[g].speciesoptions[gs] == speciesList[li].name) {
								i += "<li>" + getDef(createID("species-" + speciesList[li].name), speciesList[li].name) + "</li>";
							}
						}
					}
					i += "</ul>";
					if (alert == true) { return createAlert(i); }
					else { return i; }
				}
			}
		}
	}
	// types
	else if (option == "types") { 
		// generic types
		if (genre == undefined && subgenre == undefined) {
			i += "<ul class='" + style + "'>";
			for (let t = 0; t < typeList.length; t++) {
				i += "<li><a href='#" + createID("define-type-" + typeList[t].name) + "'>" + typeList[t].name + "</a></li>";
			}
			i += "</ul>";
			if (alert == true) { return createAlert(i); }
			else { return i; }
		}
		// genre types
		else { 
			for (let g = 0; g < genreList.length; g++) {
				if (genreList[g].genre == genre && genreList[g].subgenre == subgenre && genreList[g].typeoptions != undefined) {
					i += "<ul class='" + style + "'>";
					for (let gt = 0; gt < genreList[g].typeoptions.length; gt++) {
						for (let li = 0; li < typeList.length; li++) {
							if (genreList[g].typeoptions[gt] == typeList[li].name) {
								i += "<li>" + getDef(createID("type-" + typeList[li].name), typeList[li].name) + "</li>";
							}
						}
					}
					i += "</ul>";
					if (alert == true) { return createAlert(i); }
					else { return i; }
				}
			}
		}
	}
	// foci
	else if (option == "focus") { 
		// generic foci
		if (genre == undefined && subgenre == undefined) {
			i += "<ul class='" + style + "'>";
			for (let f = 0; f < focusList.length; f++) {
				i += "<li><a href='#" + createID("define-focus-" + focusList[f].name) + "'>" + focusList[f].name + "</a></li>";
			}
			i += "</ul>";
			if (alert == true) { return createAlert(i); }
			else { return i; }
		}
		// genre foci
		else { 
			for (let g = 0; g < genreList.length; g++) {
				if (genreList[g].genre == genre && genreList[g].subgenre == subgenre && genreList[g].focusoptions != undefined) {
					i += "<ul class='" + style + "'>";
					for (let gf = 0; gf < genreList[g].focusoptions.length; gf++) {
						for (let li = 0; li < focusList.length; li++) {
							if (genreList[g].focusoptions[gf] == focusList[li].name) {
								i += "<li>" + getDef(createID("focus-" + focusList[li].name), focusList[li].name) + "</li>";
							}
						}
					}
					i += "</ul>";
					if (alert == true) { return createAlert(i); }
					else { return i; }
				}
			}
		}
	}
	// genre abilities
	else if (option == "abilitiesmid" || option == "abilitieshigh" || option == "abilitiesorigin") { 
		for (let g = 0; g < genreList.length; g++) {
			if (genreList[g].genre == genre && genreList[g].subgenre == subgenre && genreList[g].abilitiesmid != undefined) {
				let mark = "";
				if (genre == "Fantasy" && subgenre == undefined) { 
					mark = "<span class='ps-1'>&dagger;</span>";
					i += "<p class='small'>&dagger; &mdash; <em>Magic ability</em></p>"; 
				}
				i += "<ul class='" + style + "'>";
				//origin
				if (option == "abilitiesorigin" && genreList[g].abilitiesorigin != undefined) {
					for (let a = 0; a < genreList[g].abilitiesorigin.length; a++) {
						for (let li = 0; li < abilityList.length; li++) {
							if (genreList[g].abilitiesorigin[a] == abilityList[li].name) {
								i += "<li>" + getDef(createID("ability-" + abilityList[li].name), abilityList[li].name) + "</li>";
							}
						}
					}
				}
				// mid-tier
				else if (option == "abilitiesmid" && genreList[g].abilitiesmid != undefined) {
					for (let a = 0; a < genreList[g].abilitiesmid.length; a++) {
						for (let li = 0; li < abilityList.length; li++) {
							if (genreList[g].abilitiesmid[a] == abilityList[li].name) {
								let aname = abilityList[li].name;
								if (abilityList[li].dupmajor == true) { aname = aname.slice(0, -3); }
								i += "<li>" + getDef(createID("ability-" + abilityList[li].name), aname);
								if (abilityList[li].note == "Magic") { i += mark; }
								i += "</li>";
							}
						}
					}
				}
				// high-tier
				else if (option == "abilitieshigh" && genreList[g].abilitieshigh != undefined) {
					for (let a = 0; a < genreList[g].abilitieshigh.length; a++) {
						for (let li = 0; li < abilityList.length; li++) {
							if (genreList[g].abilitieshigh[a] == abilityList[li].name) {
								let aname = abilityList[li].name;
								if (abilityList[li].dupmajor == true) { aname = aname.slice(0, -3); }
								i += "<li>" + getDef(createID("ability-" + abilityList[li].name), aname);
								if (abilityList[li].note == "Magic") { i += mark; }
								i += "</li>";
							}
						}
					}
				}
				i += "</ul>";
				if (alert == true) { return createAlert(i); }
				else { return i; }
			}
		}
	}
	else { return printerror; }
};
function getSection(ch) {
	let chx = ""; // builds over a section
	let def = ""; // assemble a definitions
	let alert = ""; // assemble an alert
	if (sectionList[ch].name == "Introduction") { 
		chx = "";
		chx += "<p class='lead'>Welcome Reader&mdash;</p>";
		chx += getBody(["<strong>Old Gus' Cypher Reference Document (OG-CRD)</strong> is a hypertext version of the <a href='https://col.montecookgames.com/license/'>Cypher Reference Document</a> (revised July 29, 2026), published under the <a href=' http://col.montecookgames.com'>Cypher Open License</a>.", "This document has been edited and condensed. You can use this edition to quickly look up rules, share them with others, or copy text into a character sheet that works for you. Don't mistake anything you read here for the \"rules as written\".", "The OG-CRD contains most of the text of the <a href='https://www.montecookgames.com/store/product/cypher-corebooks/'>Cypher Character Rulebook</a>, but it is not a replacement for the real thing, which contains additional information, examples of play, and advice for playing Cypher&mdash;not to mention gorgeous artwork and the seductive odor of cardboard and book glue.", "You may also find some good use for material from <a href='https://callmepartario.github.io/og-csrd'>Old Gus' Cypher System Reference Document</a>, which covers the prior edition of the game published from 2015&ndash;2025.", "Thanks to <a href='https://www.montecookgames.com/'>Monte Cook Games</a> for this amazing resource, and thank you for reading&mdash;may this record bring you and yours many happy adventures!"]);
		chx += "<p class='lead'>&mdash;Old Gus</p>";
		chx += createEdnote("If you'd like to support this work, buy Old Gus a <a href='https://ko-fi.com/oldgus'><span class='fst-normal'>&#9749;</span> Ko-fi</a>!");
		chx += createHeader(3, "editorial-mission", "Editorial Mission", "og-border");
		chx += "<dl><dt>Incorporate Cypher Content</dt><dd>Condense the Cyher Reference Document into fewer, more complete topics, and incorporate updates or errata. Provide page number references for the <a href='https://www.montecookgames.com/store/product/cypher-corebooks/'>Cypher Character Rulebook (CCR)</a> and Cypher Game Master's Guide (CGMG)</dd><dt>Use Plain Language</dt><dd>Edit explanations, instructions, definitions, and procedures in plain language so they are complete, clear, consistent, and concise. Correct suspected misprints. Preserve the text of character options.</dd><dt>Address Players First</dt><dd>Organize information for those who haven't played a tabletop role-playing game (TTRPG) before, and write to the player. \"You\" is you, the player&mdash;or your Player Character (PC). \"The GM\" is the Game Master (GM).</dd><dt>Improve Accessibility and Inclusion</dt><dd>Avoid flow charts the reader might not be able to use. Add metric unit conversions. Provide a mobile-friendly format, extensive hyperlinks, tooltips, quick-references, and a variety of reader modes&mdash;for example, light mode, dark mode, and a dyslexic reader mode.</dd><dt>Add Tools</dt><dd>Add and expand useful indices and a <a href='#glossary'>glossary</a>.</dd><dt>Human-Made, Human-Forward</dt><dd>No ads. No accounts. No data collection. No algorithms. No machine learning. No large-language models. No vibe coding. This is a living document&mdash;revisions are an ongoing project.</dd></dl>";
		chx += createHeader(3, "cypher-open-license", "Cypher Open License", "og-border");
		chx += "<div class='row'>";
		chx += "<div class='col-12 col-sm-4 col-md-3 col-lg-2 text-center'>";
		chx += "<img class='d-block ms-auto me-auto pb-2 img-light' style='width: 180px;' src='images/col-logo-black.png' alt='Cypher Combatible Logo'>";
		chx += "<img class='d-block ms-auto me-auto pb-2 img-dark' style='width: 180px;' src='images/col-logo-white.png' alt='Cypher Combatible Logo'>";
		chx += "</div>";
		chx += "<div class='col'>";
		chx += getBody(["This product is an independent production and is not affiliated with <a href='http://montecookgames.com'>Monte Cook Games, LLC</a>. It is published under the Cypher Open License, found at <a href='https://col.montecookgames.com'>https://col.montecookgames.com</a>.", "CYPHER and its logo are trademarks of Monte Cook Games, LLC in the U.S.A. and other countries. All Monte Cook Games characters and character names, and the distinctive likenesses thereof, are trademarks of Monte Cook Games, LLC."]);
		chx += "</div>";
		chx += "</div>";
		return chx;
	}
	else if (sectionList[ch].name == "Player Characters") { 
		alert = createHeader(3, "choose-characteristic", "Quick-Reference: Player Characters", "h6");
		alert += "<ul class='list-unstyled og-qr-compact'>";
		for (let qr = 0; qr < characteristicList.length; qr++) {
			alert += "<li><a href='#" + createID("define-" + characteristicList[qr].dt) + "'>" + characteristicList[qr].dt + "</a></li>";
		}
		alert += "</ul>";
		chx += createAlert(alert);
		dex = createHeader(3, "choose-characters", "Characters", "");
		def += createRef(["CCR 10", "CCR 287"]);
		def += getBody(["A character is any being capable of <a href='#define-action'>action</a>. This section covers vocabulary related to <strong>player characters (PCs)</strong>. It includes everything you need to understand a <a href='#define-core-character'>core character</a> and the statistics on your character sheet.", ["<strong>Nonplayer characters (NPCs):</strong> These characters are usually controlled by the GM, unless they're a <a href='#define-followers'>follower</a>."]]);
		chx += createDef("character", def);
		for (let char = 0; char < characteristicList.length; char++) {
			// exception for core character
			if (characteristicList[char].dt == "Core Character") {
				// core character
				def = createHeader(3, "core-character", "Core Character", "");
				def += createRef(["CCR 8", "CCR 10", "CCR 13","CCR 18"]);
				def += getBody(["<strong>Your core character starts with the following:</strong>", ["8 <a href='#define-stat'>Might</a> / 8 <a href='#define-stat'>Speed</a> / 8 <a href='#define-stat'>Intellect</a>", "6 additional points to allocate in <a href='#define-stat'>Might</a>, <a href='#define-stat'>Speed</a>, and/or <a href='#define-stat'>Intellect</a>", "Capacity to take three minor / three moderate / three major <a href='#define-wound'>wounds</a>", "<a href='#define-effort'>Effort</a>: 1", "<a href='#define-cypher-limit'>Cypher limit</a>: 2", "<a href='#define-skill'>Freely use</a> light <a href='#define-weapon'>weapons</a>", "Cannot <a href='#define-skill'>freely use</a> any <a href='#define-armor'>armor</a>", "Two <a href='#define-skill'>genre skills</a>", "<em>Optional:</em> One additional <a href='#define-skill'>genre skill</a> in exchange for an <a href='#define-skill'>inability</a> in a genre skill", "One set of appropriate clothing, enough extra cash to pay for a moderately expensive item, and a set of basic equipment (from the genre you're playing in)"]]);
				def += "<p class='og-hang'><strong>Background Skill:</strong> One of your two <a href='#define-skill'>genre skills</a> is your background skill. Use it as a seed to create a revealing narrative about your past&mdash;or come up with your background first, then select a relevant skill.</p>";
				def += "<p class='og-hang'><strong>Character Sentence:</strong> The character sentence is <em>\"I am an adjective noun who verbs\"</em>. The adjective is your <a href='#define-descriptor'>descriptor</a>&mdash;and maybe your <a href='#define-species'>species</a>. The noun is your <a href='#define-type'>type</a>). The verb is your <a href='#define-focus'>focus</a>. Your available choices are informed by the game's genre.</p>";
				chx += createAlert(createDef("core-character", def));
			}
			else {
				def = createHeader(3, createID(characteristicList[char].dt), characteristicList[char].dt, "og-border-lg");
				// quick references, etc.
				if (characteristicList[char].dt == "Skill") {
					alert = createHeader(4, "skill", "Quick-Reference: Skills", "h6");
					alert += getGenreList(undefined, undefined, "skills", "list-unstyled og-qr", false);
					def += createAlert(alert);
				}
				else if (characteristicList[char].dt == "Descriptor") {
					alert = createHeader(4, "choose-descriptor", "Quick-Reference: Descriptors", "h6");
					alert += getGenreList(undefined, undefined, "descriptor", "list-unstyled og-qr", false)
					def += createAlert(alert);
				}
				else if (characteristicList[char].dt == "Species") {
					alert = createHeader(4, "choose-species", "Quick-Reference: Species", "h6");
					alert += getGenreList(undefined, undefined, "species", "list-unstyled og-qr", false)
					def += createAlert(alert);
				}
				else if (characteristicList[char].dt == "Type") {
					alert = createHeader(4, "choose-type", "Quick-Reference: Types", "h6");
					alert += getGenreList(undefined, undefined, "types", "list-unstyled og-qr-compact", false);
					def += createAlert(alert);
				}
				else if (characteristicList[char].dt == "Focus") {
					alert = createHeader(4, "choose-type", "Quick-Reference: Foci", "h6");
					alert += getGenreList(undefined, undefined, "focus", "list-unstyled og-qr", false);
					def += createAlert(alert);
				}
				// print basics
				{
					def += createRef(characteristicList[char].ref);
					def += getBody(characteristicList[char].dd);
				}
				// in-def supplements
				if (characteristicList[char].dt == "Skill") {
					def += createTable("Skill Training");
					def += "<p><strong><em>Skills can't ease a task more than three steps.</em></strong></p>";
				}
				else if (characteristicList[char].dt == "Wound") {
					def += createTable("Wounds");
				}
				else if (characteristicList[char].dt == "Recovery") {
					def += createTable("Recoveries");
				}
				else if (characteristicList[char].dt == "Currency") {
					def += createTable("Price Categories");
				}
				// report definition
				chx += createDef(createID(characteristicList[char].dt), def);
				// add definition-ommitted information
				if (characteristicList[char].ddomit != undefined) {
					chx += getBody(characteristicList[char].ddomit);
				}
				// sidebar
				if (characteristicList[char].sidebar != undefined) {
					chx += createSidebar(getBody(characteristicList[char].sidebar));
				}
				// supplements and unique subsections
				if (characteristicList[char].dt == "Skill") {
					chx += createSidebar("<p><a href='#define-skill-engineering'>Engineering</a>, <a href='#define-skill-hacking'>hacking</a>, and <a href='#define-skill-systems-operation'>systems operation</a> sound similar, but there are differences:<ul><li class='mb-1'><a href='#define-skill-engineering'>Engineering</a> eases tasks to create, repurpose, or repair complex items and systems through physical alterations&mdash;potentially requiring resources.</li><li class='mb-1'><a href='#define-skill-hacking'>Hacking</a> eases tasks to warp, distort, or otherwise use software embedded in a device or network in unintended ways that don't involve physical alterations to devices.</li><li class='mb-1'><a href='#define-skill-systems-operation'>Systems operation</a> eases tasks to use complex items and systems as intended, including computers and regular computer programming that don't doesn't require physical alterations to devices.</li></ul>");
					for (let sk = 0; sk < skillList.length; sk++) {
						let skill = "";
						skill += createHeader(5, createID("skill-" + skillList[sk].name), skillList[sk].name, "og-border");
						skill += createRef(skillList[sk].ref);
						skill += "<ul class='og-list-tag'>";
						// mark skill type
						if (skillList[sk].combat == true) { skill += "<li class='og-tag-danger'>Combat Skill</li>"; }
						else { skill += "<li>Noncombat Skill</li>"; }
						if (skillList[sk].tierrestricted == true) {
							skill += "<li class='og-tag-danger'>Tier-Restricted</li>";
						}
						for (let g = 0; g < genreList.length; g++) {
							if (genreList[g].skillsoptions != undefined) {
								for (let gs = 0; gs < genreList[g].skillsoptions.length; gs++) {
									if (skillList[sk].name == genreList[g].skillsoptions[gs]) {
										let gname = genreList[g].genre;
										if (genreList[g].subgenre != undefined) { gname = genreList[g].subgenre; }
										skill += "<li class='og-tag-primary'>" + gname + "</li>";
									}
								}
							}
						}
						// mark skill genres
						skill += "</ul>";
						skill += "<p>" + skillList[sk].description + "</p>";
						if (skillList[sk].name == "Scavenging") {
							skill += createTable("Scavenging and Related Tasks");
						}
						if (skillList[sk].sidebar != undefined) {
							skill += createSidebar(skillList[sk].sidebar);
						}
						chx += createDef(createID(("skill-" + skillList[sk].name)), skill);
					}
				}
				else if (characteristicList[char].dt == "Equipment") {
					def = createHeader(4, "weapons", "Weapons", "og-border");
					def += createRef(["CCR 13", "CCR 238", "CCR 304",]);
					def += getBody(["If you <a href='#define-attack'>attack</a> with a weapon you can't <a href='#define-skill'>freely use</a>, the attack roll is hindered.", ["<strong>Melee:</strong> You can use a melee weapon to attack a foe within immediate range.", "<strong>Ranged:</strong> Ranged weapons specify a maximum range. If a target is beyond the weapon's range, your attack is hindered.", "<strong>Explosive Weapons:</strong> Explosions are an area attack that usually affects an immediate area."]]);
					def += createTable("Weapons");
					chx += createDef("weapon", def);
					def = createHeader(4, "armor", "Armor", "og-border");
					def += createRef(["CCR 13", "CCR 238", "CCR 300", "CCR 304",]);
					def += getBody(["Armor protects you from <a href='#define-wound'>wounds</a> by easing the task of <a href='#define-block'>blocking</a> them. If you can't <a href='#define-skill'>freely use</a> the armor you're wearing, its dodge penalty applies to all your <a href='#define-stat'>Speed</a> tasks.", ["<strong>Shields:</strong> You can use a shield to protect yourself from an attack. When you succeed at a block roll, instead of reducing the severity of the <a href='#define-wound'>wound</a>, you can cause the shield to take the wound instead. A shield can take three minor wounds, two moderate wounds, and one major wound. If a shield takes a major wound, it is broken, ruined, or destroyed."], ]); 
					def += createTable("Armor");
					chx += createDef("armor", def);
				}
				else if (characteristicList[char].dt == "Wound") {
					// rallying
					def = createHeader(4, "rallying", "Rallying", "");
					def += createRef(["CCR 301"]);
					def += getBody(["You can remove a <a href='#define-wound'>wound</a> by spending <a href='#define-stat'>Might</a> points. Your <a href='#define-stat'>Might Edge</a> doesn't reduce the cost of rallying. Narratively, rallying represents you shrugging it off, toughing it out, catching your breath, or just discovering you're lucky, and it wasn't as bad as it could have been.", ""]);
					def += createTable("Rallying");
					chx += createDef("rallying", def)
					// treatment
					def = createHeader(4, "treatment", "Treatment", "");
					def += createRef(["CCR 301"]);
					def += getBody(["You can remove a <a href='#define-wound'>wound</a> by treating it with an Intellect task. The <a href='#define-skill-healing'>healing</a> skill is relevant. Treatment time depends on genre:"]);
					def += createTable("Treatment");
					chx += createDef("treatment", def)
				}
				// build descriptors
				else if (characteristicList[char].dt == "Descriptor") {
					for (let d = 0; d < descriptorList.length; d++) {
						let desc = "";
						desc += createHeader(4, createID("descriptor-" + descriptorList[d].name), descriptorList[d].name, "og-border");
						desc += createRef(descriptorList[d].ref);
						desc += "<ul class='og-list-tag'>";
						desc += "<li>Descriptor</li>";
						desc += "</ul>";
						desc += "<p>" + descriptorList[d].description + "</p>";
						desc += "<p><strong>You gain the following characteristics:</strong></p>";
						desc += "<ul>";
						desc += "<li>+2 to your " + descriptorList[d].pool + " Pool</li>";
						desc += "<li>Trained in ";
						for (let ds = 0; ds < descriptorList[d].skills.length; ds++) {
							desc += getSkill(descriptorList[d].skills[ds], false);
							if (ds < (descriptorList[d].skills.length - 1) && descriptorList[d].skills.length == 2) {
								desc += " or ";
							}
							else if (ds < (descriptorList[d].skills.length - 1) && descriptorList[d].skills.length > 2) {
								desc += ", ";
								if (ds == (descriptorList[d].skills.length - 2)) {
									desc += "or ";
								}
							}
						}
						desc += "</li>";
						desc += "</ul>";
						// compile
						chx += createDef(createID("descriptor-" + descriptorList[d].name), desc);
					}
				}
				// build species
				else if (characteristicList[char].dt == "Species") {
					for (let sp = 0; sp < speciesList.length; sp++) {
						let species = "";
						species += createHeader(4, createID("type-" + speciesList[sp].name), speciesList[sp].name, "og-border");
						species += createRef(speciesList[sp].ref);
						species += "<ul class='og-list-tag'>";
						for (g = 0; g < speciesList[sp].genres.length; g++) {
							if (speciesList[sp].genres[g] == "Any Genre") { species += "<li>Species (" + speciesList[sp].genres[g] + ")</li>"; }
							else { species += "<li class='og-tag-primary'>Species (" + speciesList[sp].genres[g] + ")</li>"; }
						}
						species += "</ul>";
						species += "<p class='og-tooltip-only'>" + speciesList[sp].summarybrief + "</p>";
						species += "<div class='og-tooltip-omit'>";
						species += "<p>" + speciesList[sp].summary; + "</p>";
						species += "</div>";
						species += "<p><strong>You gain the following characteristics:</strong></p>";
						species += "<ul>";
						for (let b = 0; b < speciesList[sp].benefits.length; b++) {
							species += "<li class='mb-1'>" + speciesList[sp].benefits[b] + "</li>";
						}
						species += "</ul>";
						if (speciesList[sp].sidebar != undefined) {
							species += createSidebar(speciesList[sp].sidebar);
						}
						chx += createDef(createID("species-" + speciesList[sp].name), species);
					}
				}
				// build types
				else if (characteristicList[char].dt == "Type") {
					for (let t = 0; t < typeList.length; t++) {
						let type = "";
						type += createHeader(4, createID("type-" + typeList[t].name), typeList[t].name, "og-border");
						type += createRef(typeList[t].ref);
						type += "<ul class='og-list-tag'>";
						// genres
						for (g = 0; g < typeList[t].genres.length; g++) {
							if (typeList[t].genres[g] == "Superheroes") {
								type += "<li class='og-tag-primary'>Type (Superhero, Rank " + typeList[t].rank + ")</li>";
							}
							else {
								type += "<li class='og-tag-primary'>Type (" + typeList[t].genres[g] + ")</li>";
							}
						}
						type += "</ul>";
						// summary, equipment, gm intrusion
						type += "<p class='og-tooltip-only'>" + typeList[t].summarybrief + "</p>";
						type += "<div class='og-tooltip-omit'>";
						type += typeList[t].summary;
						type += createHeader(5, createID("type-" + typeList[t].name + "-abilities"), (typeList[t].name + " Abilities"), "");
						type += "</div>";
						type += "<ul>";
						for (let b = 0; b < typeList[t].benefits.length; b++) {
							type += "<li class='mb-1'>" + typeList[t].benefits[b] + "</li>";
						}
						type += "</ul>";
						// abilities for tooltips
						type += "<ul class='og-list-abilities-inline og-tooltip-only'>";
						for (let a = 0; a < typeList[t].abilities.length; a++) {
							type += "<li class='og-list-ability'>";
							for (d = 0; d < abilityList.length; d++) {
								if (typeList[t].abilities[a] == abilityList[d].name) {
									if (abilityList[d].dupmajor == true) { type += typeList[t].abilities[a].slice(0, -3); }
									else { type += abilityList[d].name; }
								}
							}
							type += "</li>";
						}
						type += "</ul>";
						// abilities verbose
						type += "<ul class='og-list-abilities og-tooltip-omit'>";
						for (let a = 0; a < typeList[t].abilities.length; a++) {
							type += "<li class='og-list-ability'>" + getAbility(typeList[t].abilities[a], false) + "</li>";
						}
						type += "</ul>";
						if (typeList[t].sidebar != undefined) {
							type += createSidebar(typeList[t].sidebar);
						}
						chx += createDef(createID("type-" + typeList[t].name), type);
						// background options
						chx += "<div class='accordion'>" // open accordion
						chx += "<div class='accordion-item'>"; // open item
						chx += "<h5 class='accordion-header' id='" + createID(typeList[t].name + "backgrounds") + "'>";
						chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#" + createID(typeList[t].name + "backgrounds") + "-collapse' aria-expanded='false' aria-controls='" + createID(typeList[t].name + "backgrounds") + "-collapse'>" + typeList[t].name + " Background Options </button>";
						chx += "</h5>";
						chx += "<div id='" + createID(typeList[t].name + "backgrounds") + "-collapse' class='accordion-collapse collapse' aria-labelledby='" + createID(typeList[t].name + "backgrounds") + "'>"; // open collapse
						chx += "<div class='accordion-body p-2 pt-3 og-stripe'>"; // open body
						chx += "<ul>"
						for (let b = 0; b < typeList[t].backgrounds.length; b++) {
							chx += "<li class='mb-1'>" + typeList[t].backgrounds[b] + "</li>";
						}
						chx += "</ul>";
						chx += "</div>"; // close body
						chx += "</div>"; // close collapse
						chx += "</div>"; // close item
						chx += "</div>"; // close accordion
						chx += "<div class='mb-3'></div>"; // space accordion
						// compile
					}
				}
				// build foci
				else if (characteristicList[char].dt == "Focus") {
					chx += createSidebar(getBody(["Avoid choosing focus abilities that are too similar to one you gained from your <a hef='#define-type'>type</a>."]));
					alert = createHeader(4, "focus-story", "The Story Behind the Focus", "");
					alert += getBody(["How you character came to have your focus is up to you. Think about how your focus' origin informs your relationship to your background in the setting, and other parts of your character&mdash;for example, if your character <a href='#define-focus-entertains'>Entertains</a>, maybe you grew up as part of a traveling troupe, or found yourself in the role accidentally in order to make ends meet.", "It's okay for you to know things your character doesn't."]);
					chx += createAlert(alert);
					for (let f = 0; f < focusList.length; f++) {
						let focusDef = "";
						focusDef += createHeader(4, createID("focus-" + focusList[f].name), focusList[f].name, "og-border");
						focusDef += createRef([focusList[f].ref]);
						focusDef += "<ul class='og-list-tag'>";
						focusDef += "<li class='og-tag-primary'>Focus</li>"
						// genre and themes
						for (g = 0; g < focusList[f].genres.length; g++) {
							focusDef += "<li class='og-tag-primary'>" + focusList[f].genres[g].name + " (" + focusList[f].genres[g].theme + ")</li>";
						}
						focusDef += "</ul>";
						// summary, equipment, and gm intrusions
						focusDef += "<p>" + focusList[f].summary + "</p>";
						if (focusList[f].equipment != undefined) {
							focusDef += "<p class='og-hang'><em>Additional Equipment:</em> " + focusList[f].equipment + "</p>";
						}
						focusDef += createSidebar("<p><em>GM intrusions:</em> " + focusList[f].gmintrusions + "</p>");
						// tooltip ability table
						focusDef += "<div class='table-responsive og-tooltip-only'>"; // open table container
						focusDef += "<table class='table table-light table-striped table-sm'>";
						focusDef += "<caption class='visually-hidden'>" + focusList[f].name + " Abilities</caption>";
						focusDef += "<thead class='og-tooltip-omit'>";
						focusDef += "<th scope='col'>Tier</th>";
						focusDef += "<th scope='col'>Abilities</th>";
						focusDef += "</thead>";
						for (let t = 0; t < focusList[f].abilities.length; t++) {
							let tier = t + 1;
							focusDef += "<tr>"
							focusDef += "<th scope='row' class='og-nowrap'>Tier " + tier + "</th>";
							focusDef += "<td>";
							focusDef += "<ul class='og-list-abilities-inline mb-0'>";
							for (let a = 0; a < focusList[f].abilities[t].length; a++) {
								let abilityname = focusList[f].abilities[t][a].name;
								if (abilityname.charAt(abilityname.length - 3) == "-" && abilityname.charAt(abilityname.length - 2) == "v") { abilityname = abilityname.slice(0, -3); }
								focusDef += "<li class='og-nowrap'><a href='#define-focus-" + createID(focusList[f].name + "-" + focusList[f].abilities[t][a].name) + "'>" + abilityname + "</a></li>";
							}
							focusDef += "</ul>";
							focusDef += "</td>";
							focusDef += "</tr>";
						}
						focusDef += "</tbody>";
						focusDef += "</table>";
						focusDef += "</div>"; // close table container
						// create definiton
						chx += createDef(createID("focus-" + focusList[f].name), focusDef);
						// verbose abilities
						let fa = "";
						for (let t = 0; t < focusList[f].abilities.length; t++) {
							let tier = t + 1;
							// row striping
							fa += "<div class='row ms-1 me-1 ";
							if (tier == 1 || tier == 3 || tier == 5) {  fa += " og-stripe"; }
							fa += "'>";
							fa += "<div class='col-12 col-sm-2 col-lg-1 pt-2'>"; // open col
							fa += createHeader(5, createID("focus-" + focusList[f].name + "-tier-" + tier), ("Tier " + tier), "og-nowrap");
							fa += "</div>"; // close col
							fa += "<div class='col pt-3'>"; // open col
							for (let a = 0; a < focusList[f].abilities[t].length; a++) {
								let faDef = "";
								let abilityname = focusList[f].abilities[t][a].name;
								if (abilityname.charAt(abilityname.length - 3) == "-" && abilityname.charAt(abilityname.length - 2) == "v") { abilityname = abilityname.slice(0, -3); }
								faDef += createHeader(6, createID("focus-" + focusList[f].name + "-" + focusList[f].abilities[t][a].name), abilityname, "");
								if (focusList[f].abilities[t][a].genre == true) { faDef += "<div class='mb-1'><span class='d-inline-block badge bg-danger'>Genre-Restricted Ability</span></div>"; }
								// advanced oxford comma logic
								if (focusList[f].abilities[t][a].req != undefined) {
									faDef += "<p class='small'><em>Requires ";
									if (focusList[f].abilities[t][a].preq != undefined) {
										for (let p = 0; p < focusList[f].abilities[t][a].preq.length; p++) {
											abilityname = focusList[f].abilities[t][a].preq[p];
											if (abilityname != undefined && abilityname.charAt(abilityname.length - 3) == "-" && abilityname.charAt(abilityname.length - 2) == "v") { abilityname = abilityname.slice(0, -3); }
											faDef += "<a href='#" + createID("define-focus-" + focusList[f].name + "-" + focusList[f].abilities[t][a].preq[p]) + "'>" + abilityname + "</a>";
											if (p < focusList[f].abilities[t][a].preq.length - 1 && focusList[f].abilities[t][a].preq.length > 1 ) {
												faDef += " or "; 
											}
											else if (p == focusList[f].abilities[t][a].preq.length - 1 && focusList[f].abilities[t][a].req.length > 1) {
												faDef += ", and either "; 
											}
											else if (focusList[f].abilities[t][a].preq.length == 1 && focusList[f].abilities[t][a].req.length == 1) {
												faDef += " and "; 
											}
										}
									}
									for (let r = 0; r < focusList[f].abilities[t][a].req.length; r++) {
										abilityname = focusList[f].abilities[t][a].req[r];
										if (abilityname != undefined && abilityname.charAt(abilityname.length - 3) == "-" && abilityname.charAt(abilityname.length - 2) == "v") { abilityname = abilityname.slice(0, -3); }
										faDef += "<a href='#" + createID("define-focus-" + focusList[f].name + "-" + focusList[f].abilities[t][a].req[r]) + "'>" + abilityname + "</a>";
										if (r == 0 && focusList[f].abilities[t][a].req.length == 2) {
											faDef += " or "
										}
										else if (r < (focusList[f].abilities[t][a].req.length - 1) && focusList[f].abilities[t][a].req.length > 2) {
											if (r == focusList[f].abilities[t][a].req.length - 2) { faDef += ", or "; }
											else { faDef += ", "; }
										}
									}
									faDef += "</em></p>";
								}
								faDef += "<ul class='og-list-abilities'>";
								faDef += "<li class='og-list-ability'>" + getAbility(focusList[f].abilities[t][a].name, false) + "</li>", 
								faDef += "</ul>";
								fa += createDef(createID("focus-" + focusList[f].name + "-" + focusList[f].abilities[t][a].name), faDef);
							}
							fa += "</div>"; // close col
							fa += "</div>"; // close row
						}
						chx += fa;
					}
				}
				else if (characteristicList[char].dt == "Experience Points (XP)") {
					def = createHeader(4, "earning-xp", "Earning XP", "");
					def += createRef(["CCR 309&mdash;311"]);
					def += getBody([["<strong>GM Intrusion:</strong> At any time, the GM can introduce a complication&mdash;for example, the rope you're climbing begins to fray. When the GM intrudes on you, you gain 1 XP, and choose another PC, who also gains 1 XP. Explain why&mdash;for example, they had a good idea, or they brought snacks.", "<strong>Story Awards:</strong> XP is awarded for progressing the story the GM wants to tell&mdash;for example, exploring a new area, rescuing someone, or learning significant information.", "<strong>Character Arcs:</strong> In lengthier campaigns, PCs progress through a personal story and changes over time. Work with the GM to choose a character arc. At the end of each session, talk to the GM your character arc progress. If the GM agrees that you have made a \"step\" in your arc, you gain 1 XP. Arcs reach a climax point where you succeed or fail. If you succeed, you earn 4 XP. If you fail, you still earn 2 XP. You can take on different character arcs by spending 1 XP (to a maximum of 4)."]]);
					chx += createDef("earning-xp", def);
					chx += createSidebar(getBody(["Each session, the GM intrudes up to twice per character. You also a trigger a GM intrusion when you roll a 1 on an action roll, but triggered intrusions don't cause PCs to earn XP.", "It's not a good idea to hoard XP, and the GM might force you spend some on an advancement."]));
					chx += "<div class='accordion'>" // open accordion
					chx += "<div class='accordion-item'>"; // open item
					chx += "<h5 class='accordion-header' id='example-character-arcs'>";
					chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#example-character-arcs-collapse' aria-expanded='false' aria-controls='example-character-arcs-collapse'>Example Character Arcs</button>";
					chx += "</h5>";
					chx += "<div id='example-character-arcs-collapse' class='accordion-collapse collapse' aria-labelledby='example-character-arcs'>"; // open collapse
					chx += "<div class='accordion-body p-2 pt-3 og-stripe'>"; // open body
					// character arcs
					chx += createHeader(6, "arc-avenge", "Avenge", "");
					chx += getBody(["Someone close to you or important to you in some way has been wronged. The most overt version of this arc is to avenge someone's death. When you take this arc, you might declare (publicly or privately) your intentions, such as killing the offender, imprisoning them for their crime, or returning something valuable to its proper owner.", ["<strong>Step(s):</strong> <em>Tracking the Guilty</em>. You track down the guilty party. The details of this step depend on what you know&mdash;learning their identity, discovering their location, and so on. You repeat this step as many times as needed. Each of these steps is worth 1 XP.", "<strong>Step:</strong> <em>Finding the Guilty</em>. You finally find the guilty party, or find a path or make a plan to reach them. Now all that's left is to confront them. This step is worth 1 XP.", "<strong>Climax:</strong> <em>Confrontation</em>. You confront the guilty party. This might be a public accusation and demonstration of guilt, a trial, or an attack to kill, wound, or apprehend them&mdash;whatever you choose to be appropriate. Success means you earn 4 XP; failure means you earn 2 XP.", "<strong>Resolution:</strong> After a successful confrontation, you resolve the outcome and its later ramifications, then decide what to do next. This step is worth 1 XP and completes the arc."]]);
					chx += createHeader(6, "arc-join-an-organization", "Join an Organization", "");
					chx += getBody(["You want to join an organization. This might be a guild, corporation, military organization, secret society, religion, or something else. There's probably a specific reward you're interested in for doing so, such as wealth, status, access to secrets, or learning a special combat technique or magic spell. When you take this arc, you've learned what you can about the organization and what you have to do to become a member, and you've decided to make it happen.", ["<strong>Step(s):</strong> <em>Making a Contact.</em> Friends on the inside are always important. With one or more people like this on your side, you can move forward to prove yourself to the organization. This step is worth 1 XP.", "<strong>Step(s):</strong> <em>Performing a Deed.</em> The organization might want to test your worth, or this might be a ceremony you must take part in. It might include paying some sort of dues or fee. Or all of these things. This step is worth 1 XP.", "<strong>Climax:</strong> <em>Proving Your Worth.</em> This is the point at which you attempt to show the organization that they would be better off with you as a member. This is usually a significant challenge related to the needs and goals of the organization, such as defeating a powerful member of a rival group, uncovering secret information or an object the group needs or wants, and so on. Success means you earn 4 XP; failure means you earn 2 XP.", "<strong>Resolution:</strong> After successful proof of your worth, you consider your efforts and assess what your membership gets you. This step is worth 1 XP and completes the arc."]]);
					chx += createHeader(6, "arc-additional-ideas", "Additional Arc Ideas", "");	
					chx += "<ul>";
					for (let a = 0; a < arcideasList.length; a++) {
						chx += "<li class='mb-1'><strong>" + arcideasList[a].dt + ":</strong> " + arcideasList[a].dd + "</li>";
					}
					chx += "</ul>";
					chx += "</div>"; // close body
					chx += "</div>"; // close collapse
					chx += "</div>"; // close item
					chx += "</div>"; // close accordion
					chx += "<div class='mb-3'></div>"; // space accordion
					chx += createSidebar(getBody(["It's common for PCs to help each other through their character arcs, or even share them."]));
					chx += createEdnote("There's additional detail on most of these arcs from the prior edition. See <a href='https://callmepartario.github.io/og-csrd/#character-arcs'>Old Gus' Cypher System Reference Document: Character Arcs</a>.");
					def = createHeader(4, "spending-xp", "Spending XP", "");
					def += createRef(["CCR 286", "CCR 312&mdash;313"]);
					def += getBody([["<strong>Rerolling:</strong> Spend 1 XP to reroll any dice roll and use the better result&mdash;for example, an action roll, recovery roll, depletion roll&mdash;even a roll you didn't make. You can spend additional XP to keep rerolling.", "<strong>Player Intrusion:</strong> Spend 1 XP for a player intrusion, altering something in the campaign to benefit your character (no action required). Player intrusion usually introduces a change to the circumstances rather than changing your PC. If the GM refuses your intrusion, you don't spend any XP.", "<strong>Lucky Shot:</strong> If you know there's a foe nearby but you have no idea where they are&mdash;for example, they're invisible, or you're blinded by complete darkness. Normally, you can't attack, but if you spend 1 XP, you can attack that's hindered four steps."]]);
					chx += createDef("spending-xp", def);
					chx += "<div class='accordion'>" // open accordion
					chx += "<div class='accordion-item'>"; // open item
					chx += "<h4 class='accordion-header' id='player-intrusion-examples'>";
					chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#player-intrusion-examples-collapse' aria-expanded='false' aria-controls='player-intrusion-examples-collapse'>Example Player Intrusions</button>";
					chx += "</h4>";
					chx += "<div id='player-intrusion-examples-collapse' class='accordion-collapse collapse' aria-labelledby='player-intrusion-examples'>"; // open collapse
					chx += "<div class='accordion-body p-2 pt-3 og-stripe'>"; // open body
					// resource point options
					chx += "<ul class='og-list-abilities'>"; 
					for (let pi = 0; pi < playerintrusionList.length; pi++) {
						chx += "<li class='og-list-ability'><strong>" + playerintrusionList[pi].dt + ":</strong> " + playerintrusionList[pi].dd + "</li>";
					}
					chx += "</ul>"; 
					chx += "</div>"; // close body
					chx += "</div>"; // close collapse
					chx += "</div>"; // close item
					chx += "</div>"; // close accordion
					chx += "<div class='mb-3'></div>"; // space accordion
					chx += createSidebar(getBody(["<strong>React to a GM intrusion:</strong> You can't refuse a GM intrusion, but you can use a player intrusion to mitigate its effects."]));
					def = createHeader(4, "splitting-xp", "Optional Rule: Splitting XP", "");
					def += createRef(["CCR 312"]);
					def += getBody([["XP gained from <a href='#define-earning-xp'>GM intrusions</a> can only for <a href='#define-spending-xp'>rerolls and player intrusions</a>.", "XP from <a href='#define-earning-xp'>character arcs and story awards</a> can only be spent on <a href='#define-character-advancement'>character advancement</a>."]]);
					chx += createAlert(createDef("splitting-xp", def));
				}
				else if (characteristicList[char].dt == "Resource Points") {
					chx += "<div class='accordion'>" // open accordion
					chx += "<div class='accordion-item'>"; // open item
					chx += "<h4 class='accordion-header' id='goals-and-activities'>";
					chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#goals-and-activities-collapse' aria-expanded='false' aria-controls='goals-and-activities-collapse'>Resource Points: Goals and Activities</button>";
					chx += "</h4>";
					chx += "<div id='goals-and-activities-collapse' class='accordion-collapse collapse' aria-labelledby='goals-and-activities'>"; // open collapse
					chx += "<div class='accordion-body p-2 pt-3 og-stripe'>"; // open body
					// resource point options
					chx += "<ul class='og-list-abilities'>"; 
					for (let rp = 0; rp < resourceList.length; rp++) {
						chx += "<li class='og-list-ability'><div id='" + createID("define-resource-points-" + resourceList[rp].name) + "'><strong>" + resourceList[rp].name + " (" + resourceList[rp].cost;
						if (resourceList[rp].plus == true) { chx += "+"; }
						chx += " Resource Points:</strong> " + resourceList[rp].description; 
						if (resourceList[rp].sidebar != undefined) {
							chx += createSidebar(getBody(resourceList[rp].sidebar));
						}
						chx += "</div></li>";
						if (resourceList[rp].name == "Craft Cypher") {
							chx += "</ul>"; // pause list
							chx += createTable("Cypher Crafting Requirements");
							chx += createSidebar(getBody(["Some character types have a special ability that allows them to craft cyphers without spending resource points. Of course, these characters can still spend resource points to craft something outside their area of expertise. For example, a Witch can use Brew Potion to make a potion cypher without spending resource points, but the character could spend resource points to make a \"magic arrow\" cypher."]));
							chx += "<ul class='og-list-abilities'>"; // continue list
						}
						if (resourceList[rp].name == "Research") {
							chx += "</ul>"; // pause list
							chx += createTable("Research");
							chx += createSidebar(getBody(["Information above level 7 usually can't be researched using resource points; it happens during actual game sessions."]));
							chx += "<ul class='og-list-abilities'>"; // continue list
						}
					}
					chx += "</ul>"; 
					chx += "</div>"; // close body
					chx += "</div>"; // close collapse
					chx += "</div>"; // close item
					chx += "</div>"; // close accordion
					chx += "<div class='mb-3'></div>"; // space accordion
				}
			}
		}
		return chx;
	}
	else if (sectionList[ch].name == "Genres") { 
		chx += "";
		// quick ref
		alert = "";
		for (let g = 0; g < genreList.length; g++) {
			if (genreList[g].subgenre == undefined) {
				alert += createHeader(4, createID("choose-genre-" + genreList[g].genre ), ("Quick-Reference: " + genreList[g].genre ), "h6");
				alert += "<ul class='list-unstyled og-qr-compact'>";
				for (let sg = 0; sg < genreList.length; sg++) {
					let entry = "";
					if (genreList[sg].subgenre == undefined) { entry = genreList[sg].genre }
					else { entry = genreList[sg].subgenre }
					if (genreList[g].genre == genreList[sg].genre) {
						alert += "<li><a href='#" + createID("define-genre-" + entry) + "'>" + entry + "</a></li>";
					}
				}
				alert += "</ul>"; 
			}
		}
		chx += createAlert(alert);
		def = createHeader(3, "genre", "What is Genre?", "og-border-lg");
		def += createRef(["Editorial Addition"]);
		def += getBody(["Genre is a word used to describe artistic conventions shared by literature, music, and film. In a tabletop role-playing game like Cypher, it can best be summed up as a general idea of what the setting does and doesn't include, and generally answers the question: <em>\"What happens in stories like these?\"</em>. ", "This section covers four genres: <a href='#define-genre-real-world'>Real World</a>, <a href='#define-genre-fantasy'>Fantasy</a>, <a href='#define-genre-science-fiction'>Science Fiction</a>, and <a href='#define-genre-superheroes'>Superheroes</a>. Each genre is divided into subgenres and their internal conventions.", "In actual practice many games span genres. The GM might borrow from any part of the genres listed here and combine them on a one-time or an ongoing basis&mdash;for example, mixing <a href='#define-genre-hard-science-fiction'>Hard Science Fiction</a> with <a href='#define-genre-horror'>Horror</a>."]);
		chx += createDef("genre", def)
		chx += createSidebar(getBody(["The Cypher Game Master's Guide contains optional rules and mechanics that make each genre an even more potent ingredient for a game setting."]))
		// build genres
		for (let g = 0; g < genreList.length; g++) {
			let h = 3;
			let gname = genreList[g].genre;
			if (genreList[g].subgenre != undefined) {
				h++;
				gname = genreList[g].subgenre;
			}
			def = createHeader(h, createID("genre-" + gname), (gname), "og-border-lg")
			def += createRef(genreList[g].ref);
			def += "<ul class='og-list-tag'>";
			if (genreList[g].subgenre == undefined) { def += "<li class='og-tag-primary'>Genre</li>"; } 
			else { def += "<li class='og-tag-primary'>" + genreList[g].genre + " Subgenre</li>"; }
			def += "</ul>";
			// summary
			if (genreList[g].summary != undefined) { def += getBody(genreList[g].summary); }
			// touchstones
			if (genreList[g].touchstones != undefined) { 
				let touch = "";
				touch += "<p><strong>Touchstones:</strong> ";
				for (let t = 0; t < genreList[g].touchstones.length; t++) {
					touch += genreList[g].touchstones[t];
					if (t < (genreList[g].touchstones.length - 1)) { touch += ", "; }
				}
				touch += "</p>"
				def += createSidebar(touch); 
			}
			chx += createDef(createID("genre-" + gname), def);
			// characters 
			if (genreList[g].character != undefined) { 
				def = createHeader((h + 1), createID("genre-" + gname + "-characters"), (gname + " characters"), "");
				let ref = ["<span class='btn btn-danger'>!ERR</span>"];
				if (gname == "Real World") ( ref = ["CCR 37"]);
				else if (gname == "Fantasy") ( ref = ["CCR 43"]);
				else if (gname == "Science Fiction") ( ref = ["CCR 89"]);
				else if (gname == "Superheroes") ( ref = ["CCR 124"]);
				def += createRef(ref)
				def += getBody(genreList[g].character);
				chx += createDef(createID("genre-" + gname + "-characters"), def);
			}
			// genre skills
			if (genreList[g].skills != undefined) { 
				def = createHeader((h + 1), createID("genre-" + gname + "-skills"), (gname + " Skills"), "");
				let ref = ["<span class='btn btn-danger'>!ERR</span>"];
				if (gname == "Real World") ( ref = ["CCR 37"]);
				else if (gname == "Fantasy") ( ref = ["CCR 41"]);
				else if (gname == "Hard Science Fiction") ( ref = ["CCR 89&ndash;90"]);
				else if (gname == "Space Opera") ( ref = ["CCR 89", "CCR 98"]);
				else if (gname == "Postapocalypse") ( ref = ["CCR 108"]);
				else if (gname == "Superheroes") ( ref = ["CCR 124"]);
				def += createRef(ref)
				def += getBody(genreList[g].skills);
				if (genreList[g].skillsoptions != undefined) { def += getGenreList(genreList[g].genre, genreList[g].subgenre, "skills", "list-unstyled og-qr-compact", true); }
				chx += createDef(createID("genre-" + gname + "-skills"), def);
			}
			// genre descriptors and species
			if (genreList[g].species != undefined) { 
				def = createHeader((h + 1), createID("genre-" + gname + "-descriptors-and-species"), (gname + " Descriptors and Species"), "");
				let ref = ["<span class='btn btn-danger'>!ERR</span>"];
				if (gname == "Real World") ( ref = ["CCR 38"]);
				else if (gname == "Dungeon Fantasy") ( ref = ["CCR 41"]);
				else if (gname == "Swords &amp; Sorcery") ( ref = ["CCR 62"]);
				else if (gname == "Epic Fantasy") ( ref = ["CCR 74"]);
				else if (gname == "Hard Science Fiction") ( ref = ["CCR 90"]);
				else if (gname == "Space Opera") ( ref = ["CCR 98"]);
				else if (gname == "Postapocalypse") ( ref = ["CCR 108"]);
				else if (gname == "Superheroes") ( ref = ["CCR 124"]);
				def += createRef(ref)
				def += getBody(genreList[g].species);
				if (genreList[g].speciesoptions != undefined) { def += getGenreList(genreList[g].genre, genreList[g].subgenre, "species", "list-unstyled og-qr-compact", true); }
				chx += createDef(createID("genre-" + gname + "-species"), def);
			}
			// genre types
			if (genreList[g].type != undefined) { 
				def = createHeader((h + 1), createID("genre-" + gname + "-type"), (gname + " Types"), "");
				let ref = ["<span class='btn btn-danger'>!ERR</span>"];
				if (gname == "Real World") ( ref = ["CCR 38&ndash;39"]);
				if (gname == "Historical") ( ref = ["CCR 35"]);
				else if (gname == "Hard Science Fiction") ( ref = ["CCR 91"]);
				else if (gname == "Dungeon Fantasy") ( ref = ["CCR 43"]);
				else if (gname == "Swords &amp; Sorcery") ( ref = ["CCR 63"]);
				else if (gname == "Epic Fantasy") ( ref = ["CCR 75"]);
				else if (gname == "Space Opera") ( ref = ["CCR 99"]);
				else if (gname == "Postapocalypse") ( ref = ["CCR 109"]);
				else if (gname == "Superheroes") ( ref = ["CCR 130"]);
				def += createRef(ref)
				def += getBody(genreList[g].type);
				// superhero types displayed in a table instead
				if (genreList[g].genre == "Superheroes" && genreList[g].subgenre == undefined) {
					def += createTable("Superhero Types");
				}
				else if (genreList[g].typeoptions != undefined) { def += getGenreList(genreList[g].genre, genreList[g].subgenre, "types", "list-unstyled og-qr-compact", true); }
				chx += createDef(createID("genre-" + gname + "-types"), def);

				if (genreList[g].genre == "Superheroes" && genreList[g].subgenre == undefined) {
					alert = createHeader((h + 2), createID("genre-" + gname + "-adapting-alternate-type"), "Adapting Types to the Superhero Genre", "");
					alert += createRef(["CCR 129"]);
					alert += getBody(["You can adapt or reskin <a href='#define-type'>types</a> to superhero by consulting the table and making the following changes:", ["Replace bonuses to Might, Speed, and Intellect <a href='#define-stat'>Pool</a> points with new totals and maximums (determined by rank).", "The <a href='#define-ability-superheroics'>Superheroics</a> ability.", "A number of additional points to the <A href='#define-stat'>Pool</a> you choose for the <a href='#define-ability-superheroics'>Superheroics</a> ability (determined by rank).", "One choice from the <a href='#genre-superheroes-abilities-origin'>Origin Superhero Abilities</a> list.", "A number of <a href='#define-power-shift'>power shifts</a> (determined by rank).", ]]);
					alert += createTable("Superhero Type Adaptation");
					chx += createAlert(alert);
				}
			}
			// genre backgrounds (real world only)
			if (genreList[g].backgroundoptions != undefined) { 
				chx += "<div class='accordion''>"; // open accordion
				chx += "<div class='accordion-item'>"; // open item
				chx += "<h" + (h + 2) + " class='accordion-header' id='" + createID(gname + "-background-options") + "'>";
				chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#" + createID(gname + "-background-options") + "-collapse' aria-expanded='false' aria-controls='" + createID(gname + "-background-options") + "-collapse'>" + gname + " Background Options</button>";
				chx += "</h" + (h + 2) + ">";
				chx += "<div id='" + createID(gname + "-background-options") + "-collapse' class='accordion-collapse collapse' aria-labelledby='" + createID(gname + "-background-options") + "'>"; // open collapse
				chx += "<div class='accordion-body p-2 pt-3 og-stripe'>"; // open body
				chx += getBody(genreList[g].backgroundoptions);
				chx += "</div>"; // close body
				chx += "</div>"; // close collapse
				chx += "</div>"; // close item
				chx += "</div>"; // close accordion
				chx += "<div class='mb-3'></div>"; // space accordion
			}
			// genre foci
			if (genreList[g].focus != undefined) { 
				def = createHeader((h + 1), createID("genre-" + gname + "-foci"), (gname + " Foci"), "");
				let ref = ["<span class='btn btn-danger'>!ERR</span>"];
				if (gname == "Real World") ( ref = ["CCR 38"]);
				else if (gname == "Dungeon Fantasy") ( ref = ["CCR 42"]);
				else if (gname == "Swords &amp; Sorcery") ( ref = ["CCR 62"]);
				else if (gname == "Epic Fantasy") ( ref = ["CCR 75"]);
				else if (gname == "Hard Science Fiction") ( ref = ["CCR 90"]);
				else if (gname == "Space Opera") ( ref = ["CCR 98"]);
				else if (gname == "Postapocalypse") ( ref = ["CCR 108"]);
				else if (gname == "Superheroes") ( ref = ["CCR 125"]);
				def += createRef(ref)
				def += getBody(genreList[g].focus);
				if (genreList[g].focusoptions != undefined) { def += getGenreList(genreList[g].genre, genreList[g].subgenre, "focus", "list-unstyled og-qr", true); }
				chx += createDef(createID("genre-" + gname + "-foci"), def);
			}
			// genre currency
			if (genreList[g].currency != undefined) { 
				def = createHeader((h + 1), createID("genre-" + gname + "-currency"), (gname + " Currency"), "");
				let ref = ["<span class='btn btn-danger'>!ERR</span>"];
				if (gname == "Real World") ( ref = ["CCR 241"]);
				else if (gname == "Dungeon Fantasy") ( ref = ["CCR 42", "CCR 243"]);
				else if (gname == "Swords &amp; Sorcery") ( ref = ["CCR 63"]);
				else if (gname == "Epic Fantasy") ( ref = ["CCR 75"]);
				else if (gname == "Hard Science Fiction") ( ref = ["CCR 91"]);
				else if (gname == "Space Opera") ( ref = ["CCR 99"]);
				else if (gname == "Postapocalypse") ( ref = ["CCR 109"]);
				else if (gname == "Superheroes") ( ref = ["CCR 126"]);
				def += createRef(ref)
				def += getBody(genreList[g].currency);
				for (let t = 0; t < tableList.length; t++) {
					if (tableList[t].name == (gname + " Currency")) {
						def += createTable(tableList[t].name);
					}
				}
				chx += createDef(createID("genre-" + gname + "-currency"), def);
			}
			// genre equipment
			if (genreList[g].equipment != undefined) { 
				def = createHeader((h + 1), createID("genre-" + gname + "-equipment"), (gname + " Equipment"), "");
				let ref = ["<span class='btn btn-danger'>!ERR</span>"];
				if (gname == "Real World") ( ref = ["CCR 38", "CCR 240&ndash;241"]);
				else if (gname == "Fantasy") ( ref = ["CCR 42", "CCR 63", "CCR 75", "CCR 242&ndash;243"]);
				else if (gname == "Hard Science Fiction") ( ref = ["CCR 90", "CCR 244&ndash;247"]);
				else if (gname == "Space Opera") ( ref = ["CCR 99", "CCR 244&ndash;247"]);
				else if (gname == "Postapocalypse") ( ref = ["CCR 108", "CCR 248&ndash;249"]);
				else if (gname == "Superheroes") ( ref = ["CCR 125", "CCR 249"]);
				def += createRef(ref)
				def += getBody(genreList[g].equipment);
				chx += createDef(createID("genre-" + gname + "-equipment"), def);
				if (genreList[g].equipmenttable != undefined) {
					let inexpensive = genreList[g].equipmenttable + " Inexpensive Items";
					let moderate = genreList[g].equipmenttable + " Moderately Priced Items";
					let expensive = genreList[g].equipmenttable + " Expensive Items";
					let veryexpensive = genreList[g].equipmenttable + " Very Expensive Items";
					let exorbitant = genreList[g].equipmenttable + " Exorbitant Items";
					if (genreList[g].equipmenttable == "Science Fiction") { chx += "<p class='small og-hang'>&dagger; &mdash; <em>fantastic technology only available in far-future or advanced-technology settings</em></p>"; }
					chx += "<div class='accordion''>"; // open accordion
					for (let t = 0; t < tableList.length; t++) {
						// check for price categories
						if (tableList[t].name == inexpensive || tableList[t].name == moderate || tableList[t].name == expensive || tableList[t].name == veryexpensive || tableList[t].name == exorbitant) {
							let tid = "";
							if (tableList[t].name == inexpensive) { tid = createID(genreList[g].subgenre + "equipment-inexpensive"); }
							else if (tableList[t].name == moderate) { tid = createID(genreList[g].subgenre + "equipment-moderately-priced"); }
							else if (tableList[t].name == expensive) { tid = createID(genreList[g].subgenre + "equipment-expensive"); }
							else if (tableList[t].name == veryexpensive) { tid = createID(genreList[g].subgenre + "equipment-very-expensive"); }
							else if (tableList[t].name == exorbitant) { tid = createID(genreList[g].subgenre + "equipment-exorbitant"); }
							chx += "<div class='accordion-item'>"; // open item
							chx += "<h" + (h + 2) + " class='accordion-header' id='" + tid + "'>";
							chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#" + tid + "-collapse' aria-expanded='false' aria-controls='" + tid + "-collapse'>" + tableList[t].name.slice(genreList[g].equipmenttable.length + 1) + "</button>";
							chx += "</h" + (h + 2) + ">";
							chx += "<div id='" + tid + "-collapse' class='accordion-collapse collapse' aria-labelledby='" + tid + "'>"; // open collapse
							chx += "<div class='accordion-body p-0'>"; // open body
							chx += createTable(tableList[t].name);
							chx += "</div>"; // close body
							chx += "</div>"; // close collapse
							chx += "</div>"; // close item
							// end double wrap
						}
					}
					chx += "</div>"; // close accordion
					chx += "<div class='mb-3'></div>"; // space accordion
				}
			}
			// genre manifest cyphers
			if (genreList[g].manifestcyphers != undefined) { 
				def = createHeader((h + 1), createID("genre-" + gname + "-manifestcyphers"), (gname + " Manifest Cyphers"), "");
				let ref = ["<span class='btn btn-danger'>!ERR</span>"];
				if (gname == "Real World") ( ref = ["CCR 38"]);
				else if (gname == "Dungeon Fantasy") ( ref = ["CCR 42"]);
				else if (gname == "Swords &amp; Sorcery") ( ref = ["CCR 63"]);
				else if (gname == "Epic Fantasy") ( ref = ["CCR 75"]);
				else if (gname == "Hard Science Fiction") ( ref = ["CCR 90"]);
				else if (gname == "Space Opera") ( ref = ["CCR 99"]);
				else if (gname == "Postapocalypse") ( ref = ["CCR 108"]);
				else if (gname == "Superheroes") ( ref = ["CCR 126"]);
				def += createRef(ref)
				def += getBody(genreList[g].manifestcyphers);
				chx += createDef(createID("genre-" + gname + "-manifest-cyphers"), def);
			}
			// genre wounds
			if (genreList[g].wounds != undefined) { 
				def = createHeader((h + 1), createID("genre-" + gname + "-wounds"), (gname + " Wounds"), "");
				let ref = ["<span class='btn btn-danger'>!ERR</span>"];
				if (gname == "Real World") ( ref = ["CCR 38"]);
				else if (gname == "Dungeon Fantasy") ( ref = ["CCR 42"]);
				else if (gname == "Swords &amp; Sorcery") ( ref = ["CCR 63"]);
				else if (gname == "Epic Fantasy") ( ref = ["CCR 75"]);
				else if (gname == "Hard Science Fiction") ( ref = ["CCR 90"]);
				else if (gname == "Space Opera") ( ref = ["CCR 99"]);
				else if (gname == "Postapocalypse") ( ref = ["CCR 108"]);
				else if (gname == "Superheroes") ( ref = ["CCR 126"]);
				def += createRef(ref)
				def += getBody(genreList[g].wounds);
				def += createTable("Treatment")
				chx += createDef(createID("genre-" + gname + "-wounds"), def);
			}
			// genre advancement
			if (genreList[g].advancement != undefined) { 
				def = createHeader((h + 1), createID("genre-" + gname + "-advancement"), (gname + " Abilities and Advancement"), "");
				let ref = ["<span class='btn btn-danger'>!ERR</span>"];
				if (gname == "Real World") ( ref = ["CCR 38"]);
				if (gname == "Fantasy") ( ref = ["CCR 82"]);
				else if (gname == "Science Fiction") ( ref = ["CCR 114"]);
				else if (gname == "Epic Fantasy") ( ref = ["CCR 75"]);
				else if (gname == "Hard Science Fiction") ( ref = ["CCR 91"]);
				else if (gname == "Space Opera") ( ref = ["CCR 99"]);
				else if (gname == "Postapocalypse") ( ref = ["CCR 109"]);
				else if (gname == "Superheroes") ( ref = ["CCR 126&ndash;127", "CCR 138&ndash;142"]);
				def += createRef(ref)
				def += getBody(["In addition to the usual character advancement process, you gain the following benefits as you increase your <a href='#define-tier'>tier</a>."]);
				def += getBody(genreList[g].advancement);
				chx += createDef(createID("genre-" + gname + "-advancement"), def);
				// genre abilities
				if (genreList[g].abilitiesmid != undefined | genreList[g].abilitieshigh != undefined) { 
					// origin
					if (genreList[g].abilitiesorigin != undefined) { 
						alert = createHeader((h + 2), createID("genre-" + gname + "-abilities-origin"), ("Origin Superhero Abilities"), "");
						alert += createRef(["CCR 138&ndash;142"]);
						alert += getGenreList(genreList[g].genre, genreList[g].subgenre, "abilitiesorigin", "list-unstyled og-qr", false);
						chx += createAlert(alert);
					}// origin
					if (genreList[g].abilitiespowershifts != undefined) { 
						def = createHeader((h + 2), createID("power-shifts"), ("Power Shifts"), "");
						alert = createHeader((h + 3), createID("power-shifts"), ("Quick-Reference: Power Shifts"), "h6");
						alert += "<ul class='list-unstyled og-qr'>";
						for (ps = 0; ps < genreList[g].abilitiespowershifts.length; ps++) {
							alert += "<li><a href='#" + createID("define-power-shift-" + genreList[g].abilitiespowershifts[ps].dt) + "'>" + genreList[g].abilitiespowershifts[ps].dt + "</a></li>";
						}
						alert += "</ul>"; 
						def += createAlert(alert);
						def += createRef(["CCR 127",]);
						def += getBody(["Most power shifts act like a free level of <a href='#define-effort'>Effort</a> on relevant tasks, but that don't count against your limit. They allow you to ease rolls, increase damage, or increase effects&mdash;usually two of those. Choosing the right power shifts can make you strong enough to throw a car, durable enough to break through brick walls, or smart enough to build an interdimensional gateway.", "A few power shifts work differently and are noted as such.",]);
						chx += createDef("power-shift", def);
						for (let ps = 0; ps < genreList[g].abilitiespowershifts.length; ps++) {
							def = createHeader((h + 3), createID("power-shifts-" + genreList[g].abilitiespowershifts[ps].dt), genreList[g].abilitiespowershifts[ps].dt, "og-border");
							def += createRef(["CCR 127",]);
							def += "<ul class='og-list-tag'><li class='og-tag-primary'>Power Shift</li></ul></ul>";
							def += getBody([genreList[g].abilitiespowershifts[ps].dd]); 
							if (genreList[g].abilitiespowershifts[ps].effort == false) {
								def += "<p class='small'><em>This power shift doesn't act like a free level of <a href='#define-effort'>Effort</a>.</em></p>";
							}
							chx += createDef(createID("power-shift-" + genreList[g].abilitiespowershifts[ps].dt), def);
							if (ps == (genreList[g].abilitiespowershifts.length - 1)) { chx += "<div class='og-border'></div>"; }
						}
					}
					// general genre abilities
					alert = "";
					// mid-tier
					if (genreList[g].abilitiesmid != undefined) { 
						alert += createHeader((h + 2), createID("genre-" + gname + "-abilities-mid-tier"), ("Mid-Tier " + gname + " Abilities"), "");
						if (gname == "Fantasy") { alert += createRef(["CCR 82&ndash;83"]); }
						else if (gname == "Science Fiction") { alert += createRef(["CCR 114&ndash;115"]); }
						else if (gname == "Superheroes") { alert += createRef(["CCR 82&ndash;83", "CCR 114&ndash;115", "CCR 126"]); }
						if (genreList[g].abilitiesmid != undefined) { alert += getGenreList(genreList[g].genre, genreList[g].subgenre, "abilitiesmid", "list-unstyled og-qr", false); }
					}
					// high-tier
					if (genreList[g].abilitieshigh != undefined) { 
						alert += createHeader((h + 2), createID("genre-" + gname + "-abilities-high-tier"), ("High-Tier " + gname + " Abilities"), "");
						if (gname == "Fantasy") { alert += createRef(["CCR 84"]); }
						else if (gname == "Science Fiction") { alert += createRef(["CCR 116"]);	 }
						else if (gname == "Superheroes") { alert += createRef(["CCR 84", "CCR 116", "CCR 126"]); }
						if (genreList[g].abilitieshigh != undefined) { alert += getGenreList(genreList[g].genre, genreList[g].subgenre, "abilitieshigh", "list-unstyled og-qr", false); }
					}
					chx += createAlert(alert);
				}
				
			}
			// supplemental alert
			if (genreList[g].alert != undefined) {
				alert = createHeader((h + 1), createID("genre-" + gname + "-" + genreList[g].alert.name), genreList[g].alert.name, "")
				alert += getBody(genreList[g].alert.description);
				chx += createAlert(alert);
			}
			// subgenre divider
			if (genreList[g].subgenre == undefined && genreList[g].genre != "Superheroes") {
				chx += createHeader(h, createID("genre-" + gname + "-subgenres"), (gname + " Subgenres"), "og-border-lg")
			}
		}
		return chx;
	}
	else if (sectionList[ch].name == "Rules") { 
		chx = "";
		alert = createHeader(3, "choose-rules", "Quick-Reference: Rules", "h6");
		alert += "<ul class='list-unstyled og-qr'>";
		alert += "<li><a href='#define-how-to-play'>How to Play</a></li>";
		alert += "<li><a href='#define-action'>Action</a></li>";
		alert += "<li><a href='#define-task'>Task</a></li>";
		alert += "<li><a href='#define-difficulty'>Difficulty</a></li>";
		alert += "<li><a href='#define-roll'>Roll</a></li>";
		alert += "<li><a href='#define-range'>Range and Movement</a></li>";
		alert += "<li><a href='#define-time'>Time</a></li>";
		alert += "<li><a href='#define-illumination'>Illumination</a></li>";
		alert += "<li><a href='#define-attack'>Attack</a></li>";
		alert += "<li><a href='#define-defend'>Defend</a></li>";
		alert += "<li><a href='#define-damage'>Damage</a></li>";
		alert += "<li><a href='#define-interact'>Interacting with NPCs</a></li>";
		alert += "<li><a href='#define-crafting'>Crafting, Building, and Repairing</a></li>";
		alert += "<li><a href='#define-help'>Cooperative Actions</a></li>";
		alert += "</ul>";
		chx += createAlert(alert);
		// how to play
		chx += createHeader(3, "how-to-play", "How to Play", "og-border-lg");
		chx += createRef(["CCR 7", "CCR 284", "CCR 289&ndash;292",],)
		chx += getBody(["The GM describes a scenario, establishing the surroundings, and any dangers, NPCs, or other important details the PCs would notice. You can ask the GM questions, especially about information your character would know. Eventually, someone does something consequential."]);
		def = "<div class='d-table'>"; // open table
		def += "<div class='d-table-row'>"; // open table row
		def += "<div class='d-table-cell align-top'>"; // open table cell
		def += createHeader(4, "how-to-play-step-1", "Step 1", "h6 og-nowrap pe-3");
		def += "</div>"; // close table cell
		def += "<div class='d-table-cell align-top pt-1'>"; // open table cell
		def += getBody(["Tell the GM what you want to do. Some <a href='#define-action'>actions</a> prompt a <a href='#define-task'>task</a>."]);
		def += "</div>"; // close table cell
		def += "</div>"; // close table row
		def += "<div class='d-table-row'>"; // open table row
		def += "<div class='d-table-cell align-top'>"; // open table cell
		def += createHeader(4, "how-to-play-step-2", "Step 2", "h6 og-nowrap pe-3");
		def += "</div>"; // close table cell
		def += "<div class='d-table-cell align-top pt-1'>"; // open table cell
		def += getBody(["The GM assigns the <a href='#define-task'>task</a> a <a href='#define-stat'>Stat</a>&mdash;Might, Speed, or Intellect&mdash;and a <a href='#define-difficulty'>difficulty</a> from 0 (routine) to 10 (impossible)."]);
		def += "</div>"; // close table cell
		def += "</div>"; // close table row
		def += "<div class='d-table-row'>"; // open table row
		def += "<div class='d-table-cell align-top'>"; // open table cell
		def += createHeader(4, "how-to-play-step-1", "Step 3", "h6 og-nowrap pe-3");
		def += "</div>"; // close table cell
		def += "<div class='d-table-cell align-top pt-1'>"; // open table cell
		def += getBody(["You can lower <a href='#define-difficulty'>difficulty</a> by applying <a href='#define-skill'>skills</a>, <a href='#define-asset'>assets</a>, and <a href='#define-effort'>Effort</a>. If it is 0, you succeed automatically."]);
		def += "</div>"; // close table cell
		def += "</div>"; // close table row
		def += "<div class='d-table-row'>"; // open table row
		def += "<div class='d-table-cell align-top'>"; // open table cell
		def += createHeader(4, "how-to-play-step-4", "Step 4", "h6 og-nowrap pe-3");
		def += "</div>"; // close table cell
		def += "<div class='d-table-cell align-top pt-1'>"; // open table cell
		def += getBody(["The GM determines the target number (<a href='#define-difficulty'>difficulty</a> &times; 3). The GM doesn't have to tell you the number, but should tell you what your PC would reasonably assume about the <a href='#define-task'>task</a>."]);
		def += "</div>"; // close table cell
		def += "</div>"; // close table row
		def += "<div class='d-table-row'>"; // open table row
		def += "<div class='d-table-cell align-top'>"; // open table cell
		def += createHeader(4, "how-to-play-step-5", "Step 5", "h6 og-nowrap pe-3");
		def += "</div>"; // close table cell
		def += "<div class='d-table-cell align-top pt-1'>"; // open table cell
		def += getBody(["You <a href='#define-roll'>roll the die</a>&mdash;<strong>d20</strong>. If the roll meets or exceeds the target number, you succeed. If not, you probably fail."]);
		def += "</div>"; // close table cell
		def += "</div>"; // close table row
		def += "</div>"; // close table
		chx += createAlert(createDef("how-to-play", def));
		chx += createSidebar(getBody(["<strong>The Player Always Rolls:</strong> If you leap out of a moving vehicle, you roll to see if you succeed. If you search for a hidden panel, you roll to find it. If a rockslide falls on you, you roll to get out of the way. If you attack a foe, you roll to see if you hit. If a foe attacks you, you roll to see if you avoid it."]));
		// action
		def = createHeader(3, "action", "Action", "og-border-lg");
		def += createRef(["CCR 7", "CCR 284", "CCR 287", "CCR 296-297", "CCR 289",],)
		def += getBody(["Something your character does during your turn is an action. The GM decides if your action requires a <a href='#define-task'>task</a>.", ["<strong>First Actions:</strong> You can choose to resolve a First action before the initiative order in a round, or as a regular action. Either way, you can also take a <strong>Follow-up action</strong> on your turn that isn't an attack&mdash;for example, moving an <a href='#define-range'>immediate distance</a>. Any action can be a First action if you spend the previous round preparing it.", "<strong>Last Actions:</strong> Last actions resolve after the initiative order of a round ends. Performing a Last action takes you the entire round, so you can't do anything else&mdash;not even move an <a href='#define-range'>immediate distance</a>.", "<strong>Extra Action:</strong> Sometimes, an effect lets you can take an extra or additional action on your turn&mdash;usually something specific, for example, making a second attack or attempting a stealth task after attacking a foe.", "<strong>Ready an Action:</strong> You can delay your action until a triggering condition is met&mdash;for example, waiting for a foe to come around the corner before attacking.", "<strong>Doing Something Else:</strong> The rules covers a number tasks, but it's not comprehensive. Try anything interesting, logical, and story-based!", ], "If more than one character takes a First or Last action, they resolve each type of action in initiative order."]);
		chx += createDef("action", def);
		chx += "<div class='accordion'>" // open accordion
		chx += "<div class='accordion-item'>"; // open item
		chx += "<h4 class='accordion-header' id='example-actions-first'>";
		chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#example-actions-first-collapse' aria-expanded='false' aria-controls='example-actions-first-collapse'>Example First Actions</button>";
		chx += "</h4>";
		chx += "<div id='example-actions-first-collapse' class='accordion-collapse collapse' aria-labelledby='example-actions-first'>"; // open collapse
		chx += "<div class='accordion-body p-2 pt-3 og-stripe'>"; // open body
		chx += getBody([["Attack with a <a href='#define-weapon'>light weapon</a>", "Close or open a door", "Drop or pick up something", "Move an <a href='#define-range'>immediate distance</a>", "Fall prone", "Give something to/take something from an adjacent ally", "Drink a potion or use a simple item already in hand"]]);
		chx += "</div>"; // close body
		chx += "</div>"; // close collapse
		chx += "</div>"; // close item
		chx += "<div class='accordion-item'>"; // open item
		chx += "<h4 class='accordion-header' id='example-actions-standard'>";
		chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#example-actions-standard-collapse' aria-expanded='false' aria-controls='example-actions-standard-collapse'>Example Actions</button>";
		chx += "</h4>";
		chx += "<div id='example-actions-standard-collapse' class='accordion-collapse collapse' aria-labelledby='example-actions-standard'>"; // open collapse
		chx += "<div class='accordion-body p-2 pt-3 og-stripe'>"; // open body
		chx += getBody([["Attack with a <a href='#define-weapon'>medium weapon</a>", "Use a typical character ability", "Activate or use a device", "Move a <a href='#define-range'>short distance</a>", "Use a <a href='#define-recovery'>one-action recovery</a>"]]);
		chx += "</div>"; // close body
		chx += "</div>"; // close collapse
		chx += "</div>"; // close item
		chx += "<div class='accordion-item'>"; // open item
		chx += "<h4 class='accordion-header' id='example-actions-last'>";
		chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#example-actions-last-collapse' aria-expanded='false' aria-controls='example-actions-last-collapse'>Example Last Actions</button>";
		chx += "</h4>";
		chx += "<div id='example-actions-last-collapse' class='accordion-collapse collapse' aria-labelledby='example-actions-last'>"; // open collapse
		chx += "<div class='accordion-body p-2 pt-3 og-stripe'>"; // open body
		chx += getBody([["Attack with a <a href='#define-weapon'>heavy weapon</a>", "Pick a lock", "Run a <a href='#define-range'>long distance</a>"]]);
		chx += "</div>"; // close body
		chx += "</div>"; // close collapse
		chx += "</div>"; // close item
		chx += "</div>"; // close accordion
		chx += "<div class='mb-3'></div>"; // space accordion
		// task
		def = createHeader(3, "task", "Task", "og-border-lg");
		def += createRef(["CCR 7", "CCR 284", "CCR 287&ndash;289",],)
		def += getBody(["A task has two properties&mdash;a <a href='#define-stat'>stat</a>&mdash;Might, Speed, or Intellect&mdash; and a <a href='#define-difficulty'>difficulty</a>. The <a href='#define-action'>action</a> or <a href='#define-abilities'>ability</a> you can determine these properties, most of the time, the GM assigns them."]);
		chx += createDef("task", def);
		// difficulty
		def = createHeader(3, "difficulty", "Difficulty", "og-border-lg");
		def += createRef(["CCR 7", "CCR 284", "CCR 287", "CCR 289", "CCR 303"],)
		def += getBody(["Difficulty and determine your chance to succeed a <a href='#define-task'>task</a>. The target number when <a href='#define-roll'>rolling the die</a> is difficulty &times; 3.", ["<strong>Level:</strong> NPCs, objects, and effects have a level, which is the difficulty of <a href='#define-task'>tasks</a> made in opposition to them.", "<strong>Easing:</strong> You can lower the difficulty applying relevant <a href='#define-skill'>skills</a> (up to 3 steps), <a href='#define-asset'>assets</a> (up to two steps), and <a href='#define-effort'>Effort</a> (up to six steps), or by having favorable circumstances.", "<strong>Hindering:</strong> Unfavorable circumstances or an <a href='#define-skill'>inability</a> raise difficulty."]]);
		def += createTable("Difficulty");
		chx += createDef("difficulty", def);

		chx += "<div class='accordion'>" // open accordion
		for (let em = 0; em < modificationList.length; em++) {
			chx += "<div class='accordion-item'>"; // open item
			chx += "<h4 class='accordion-header' id='" + createID("example-" + modificationList[em].name) + "'>";
			chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#" + createID("example-" + modificationList[em].name + "-collapse") + "' aria-expanded='false' aria-controls='" + createID("example-" + modificationList[em].name + "-collapse") + "'>" + modificationList[em].name + "</button>";
			chx += "</h4>";
			chx += "<div id='" + createID("example-" + modificationList[em].name + "-collapse") + "' class='accordion-collapse collapse' aria-labelledby='" + createID("example-" + modificationList[em].name) + "'>"; // open collapse
			chx += "<div class='accordion-body p-2 pt-3 og-stripe'>"; // open body
			// character arcs
			chx += "<ul>";
			for (let li = 0; li < modificationList[em].description.length; li++) {
				chx += "<li class='mb-1'>" + modificationList[em].description[li] + "</li>";
			}
			chx += "</ul>";
			chx += "</div>"; // close body
			chx += "</div>"; // close collapse
			chx += "</div>"; // close item
		}
		chx += "</div>"; // close accordion
		chx += "<div class='mb-3'></div>"; // space accordion

		// rolls
		def = createHeader(3, "roll", "Roll", "og-border-lg");
		def += createRef(["CCR 7", "CCR 284", "CCR 287", "CCR 292",],)
		def += getBody(["You roll a twenty-sided die&mdash;A d20&mdash;to determine whether an action is successful. When the text refers to \"roll,\" in the generic, it's a d20 roll.", ["<strong>Retrying:</strong> If you fail and attempt a <a href='#define-task'>task</a> again, you must apply <a href='#define-effort'>Effort</a>, unless you're in a dynamic situation like <a href='#define-attack'>attacking</a> in combat.", "<strong>Special Rolls:</strong> In addition to determining success and failure, special roll results produce additional positive or helpful effects. If you roll a 17, the attack must succeed to deal the additional damage."]]);
		def += createTable("Special Rolls");
		chx += createDef("roll", def);
		chx += "<div class='accordion'>" // open accordion
		chx += "<div class='accordion-item'>"; // open item
		chx += "<h5 class='accordion-header' id='example-gm-intrusions'>";
		chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#example-gm-intrusions-collapse' aria-expanded='false' aria-controls='example-gm-intrusions-collapse'>Example GM Intrusions</button>";
		chx += "</h5>";
		chx += "<div id='example-gm-intrusions-collapse' class='accordion-collapse collapse' aria-labelledby='example-gm-intrusions'>"; // open collapse
		chx += "<div class='accordion-body p-2 pt-3 og-stripe'>"; // open body
		chx += getBody([gmintrusionList]);
		chx += "</ul>";
		chx += "</div>"; // close body
		chx += "</div>"; // close collapse
		chx += "</div>"; // close item
		chx += "<div class='accordion-item'>"; // open item
		chx += "<h5 class='accordion-header' id='example-minor-effects'>";
		chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#example-minor-effects-collapse' aria-expanded='false' aria-controls='example-minor-effects-collapse'>Example Minor Effects in Combat</button>";
		chx += "</h5>";
		chx += "<div id='example-minor-effects-collapse' class='accordion-collapse collapse' aria-labelledby='example-minor-effects'>"; // open collapse
		chx += "<div class='accordion-body p-2 pt-3 og-stripe'>"; // open body
		chx += "<ul>";
		for (let e = 0; e < minoreffectsList.length; e++) {
			chx += "<li class='mb-1'><strong>" + minoreffectsList[e].dt + ":</strong> " + minoreffectsList[e].dd + "</li>";
		}
		chx += "</ul>";
		chx += "</div>"; // close body
		chx += "</div>"; // close collapse
		chx += "</div>"; // close item
		chx += "<div class='accordion-item'>"; // open item
		chx += "<h5 class='accordion-header' id='example-major-effects'>";
		chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#example-major-effects-collapse' aria-expanded='false' aria-controls='example-major-effects-collapse'>Example Major Effects in Combat</button>";
		chx += "</h5>";
		chx += "<div id='example-major-effects-collapse' class='accordion-collapse collapse' aria-labelledby='example-major-effects'>"; // open collapse
		chx += "<div class='accordion-body p-2 pt-3 og-stripe'>"; // open body
		// character arcs
		chx += "<ul>";
		for (let e = 0; e < majoreffectsList.length; e++) {
			chx += "<li class='mb-1'><strong>" + majoreffectsList[e].dt + ":</strong> " + majoreffectsList[e].dd + "</li>";
		}
		chx += "</ul>";
		chx += "</div>"; // close body
		chx += "</div>"; // close collapse
		chx += "</div>"; // close item
		chx += "</div>"; // close accordion
		chx += "<div class='mb-3'></div>"; // space accordion
		chx += createSidebar(getBody(["Usually the desired effect just happens, but the GM require an extra roll if the effect is unusual or unlikely."]));
		// distance, range, and movement
		def = createHeader(3, "range-and-movement", "Range and Movement", "og-border-lg");
		def += createRef(["CCR 294",],)
		def += getBody([["<strong>Area:</strong> An immediate area spans an immediate distance in all directions. Because ranges aren't precise, it doesn't really matter if the area is a cube or sphere.", "<strong>Further:</strong> Beyond very long range, distances are usually specified&mdash;for example, 1,000 feet (300 m)."]]);
		def += createTable("Range");
		chx += createDef("range", def);
		chx += getBody(["Some games require additional ranges that describe the vastness of space:", ["<strong>Planetary:</strong> On the same planet.", "<strong>Interplanetary:</strong> Within the same solar system.", "<strong>Interstellar:</strong> Within the same galaxy.", "<strong>Intergalactic:</strong> Anywhere in the same universe.", "<strong>Interdimensional:</strong> Anywhere."]]);
		// distance, range, and movement
		def = createHeader(3, "time", "Time", "og-border-lg");
		def += createRef(["CCR 295&ndash;296",],)
		def += getBody(["Time passes in minutes, hours, days, and weeks, but precision timekeeping isn't important. Most of the time, time can pass freely&mdash;for example, a long overland trek may take place as a narrative montage that takes a few hours in the story.", ["<strong>Round:</strong> When several characters take action in rapid succession, time is measured in rounds of 5&ndash;10 seconds, or 10 rounds per minute.", "<strong>Initiative:</strong> A <a href='#define-stat'>Speed</a> <a href='#define-task'>task</a> determines the order in which characters' actions are resolved&mdash;<a href='#define-skill'>skill</a> with <a href='#define-skill-initiative'>Initiative</a> applies to the <a href='#define-roll'>roll</a>.", "<strong>Turn:</strong> If your result meets or exceeds an NPC's difficulty, you can take your <a href='#define-action'>action</a> before they do. After all characters take their turn, a new round begins. If you create an effect that lasts one round, it lasts until you act on your next turn.", "<strong>Durations:</strong> Many effects don't end based on the passage of time, but rather when you use a <a href='#define-recovery'>recovery</a>."]]);
		chx += createDef("time", def);
		chx += createSidebar(getBody(["It can be easier to roll the d20 and add 3 for every level you eased your initiative roll, so higher totals can be used to determine an order."]));
		// illumination
		def = createHeader(3, "illumination", "Illumination", "og-border-lg");
		def += createRef(["CCR 302",],)
		def += getBody([["<strong>Normal light:</strong> the assumed level of light for most situations; outdoors in daylight", "<strong>Dim light:</strong> a night with a bright full moon, or the illumination provided by a torch, flashlight, or desk lamp", "<strong>Very dim light:</strong> starry night with no visible moon, or the glow provided by a candle or an illuminated computer control panel", "<strong>Darkness:</strong> no light at all, such as a moonless night with cloud cover or a room with no lights"]]);
		chx += createDef("illumination", def);
		chx += createSidebar(getBody(["For examples of how illumination matters in play, see the examples of easing and hindering <a href='#define-difficulty'>difficulty</a>."]));
		// attack
		def = createHeader(3, "attack", "Attack", "og-border-lg");
		def += createRef(["CCR 298&ndash;299", "CCR 305"],)
		def += getBody(["An attack is anything a character does to another unwilling character&mdash;for example, swinging a foe with a <a href='#define-weapon'>weapon</a>, wrapping a them in magnetically controlled metal cables, or controlling their mind.", ["<strong>Attack Roll:</strong> A <a href='#define-task'>task</a> against the <a href='#define-difficulty'>level</a> of the target.", "<strong>Touch Attack:</strong> If an ability requires you to touch a target, it's a <a href='#define-weapon'>light</a> melee attack. These abilities remain active until you succeed, use another ability, or do something else that requires your hands.", "<strong>Area Attack:</strong> <a href='#define-roll'>Roll</a> the die for each target. If you apply <a href='#define-effort'>Effort</a>, do so once and apply its effects to each roll. Alternatively, the GM might request one attack roll and apply its results to all targets. If an effect requires you make each roll as an <a href='#define-extra-action'>extra action</a> on your turn, <a href='#define-effort'>Effort</a> works normally&mdash;per <a href='#define-task'>task</a>. Area attacks can deal a minimum amount of damage to targets. Applying <a href='#define-effort'>Effort</a> only increases damage by 2 per level of Effort. Dodge rolls against area attacks are hindered."]]);
		def += createTable("Attacking");
		chx += createDef("attack", def);
		chx += createSidebar(getBody(["<strong>Attack Skills:</strong> <a href='#define-skill-attacking'>Attacking</a> is a <a href='#define-skill'>tier-restricted skill</a>. You can become trained in <a href='#define-abilities'>ability</a> attacks as a <a href='#define-character-advancement'>character advancement</a>."]));
		// defend
		def = createHeader(3, "defend", "Defend", "og-border-lg");
		def += createRef(["CCR 304&ndash;305", "CCR 307"],)
		def += getBody(["Defense tasks are an <a href='#define-action'>extra action</a> you are assigned by the GM in response to attacks or other threats. If it's a conventional attack, you can either block or dodge.", ["<strong>Guarding:</strong> You use your action to guard until you decide to stop. While guarding, you don't can't <a href='#define-attack'>attack</a>, but all your defense tasks are eased. If a foe tries to get past you or take an action you're guarding against&mdash;for example, moving through a door or attacking an ally&mdash;if you succeed an eased <a href='#define-speed'>Speed</a> task, you cause them to fail their <a href='#define-action'>action</a>. If an NPC is guarding, you must succeed a hindered <a href='#define-speed'>Speed</a> task against them or your <a href='#define-action'>action</a> fails.", "<strong>Other Defense Rolls:</strong> Some effects are impossible to block or dodge&mdash;for example, a poison gas trap might require a <a href='#define-stat'>Might</a> defense roll, and a mental blast from a psychic monster might require an <a href='#define-stat'>Intellect</a> defense roll. A failed defense roll can result in <a href='#define-damage'>special damage</a>."]]);
		def += createTable("Defending");
		chx += createDef("defend", def);
		chx += createSidebar(getBody(["<strong>Defense Skills:</strong> <a href='#define-skill-defending'>Defending</a> is a <a href='#define-skill'>tier-restricted skill</a>.", "<strong>Delaying Actions:</strong> If you want to prevent a very specific event, <a href='#define-action'>ready an action</a> rather instead of choosing to guard.", "<strong>Multiple Defense Rolls:</strong> An attack might require two defense <a href='#define-task'>tasks</a>&mdash;for example, if you fail a dodge roll against a venomous snake's bite, you take a <a href='#define-wound'>wound</a> and also make a <a href='#define-stat'>Might</a> defense roll against its venom.)", "<strong>Surprise Attacks:</strong> If you can't (or choose not to) defend yourself from an attack, it automatically succeeds&mdash;for example, if you're unconscious. If you just aren't aware of your attacker, you can defend, but the GM might not allow you to ease the <a href='#define-difficulty'>difficulty</a>. In extreme circumstances, a surprise attack can automatically hit you&mdash;for example, a sudden betrayal."]));
		// damage
		def = createHeader(3, "damage", "Damage", "og-border-lg");
		def += createRef(["CCR 299"],)
		def += getBody(["Damage is resolved differently for PCs, NPCs, and objects."]);
		chx += createDef("damage", def);
		// damage to PCs
		def = createHeader(4, "damage-to-pcs", "Damage to PCs", "og-border");
		def += createRef(["CCR 299", "CCR 302"],)
		def += getBody([["<strong>Wounds:</strong> Most creatures, NPCs, and physical hazards inflict <a href='#define-wound'>wounds</a> of a severity listed in the attacker's statistics or determined by the GM.", "<strong>Damage to Pools:</strong> Special attacks can reduce your <a href='#define-stat'>Pools</a>&mdash;for example, a numbing poison that inflicts <a href='#define-stat'>Speed</a> damage. If damage reduces a stat Pool to 0, any further damage to that stat (including any excess damage from the triggering attack) become <a href='#define-wound'>wounds</a>.", "<strong>Special Damage:</strong> Effects that linger for a round or more&mdash;for example, paralysis.", "<strong>Non-Rest Recovery:</strong> Ending some effects requires you to use one or more <a href='#define-recovery'>recoveries</a> without gaining any of their benefits, or a successful <a href='#define-defend'>defense roll</a>."]]);
		def += createTable("Pool Damage to Wound Conversions");
		chx += createDef("damage-to-pcs", def);
		// special damage
		chx += "<div class='accordion'>" // open accordion
		chx += "<div class='accordion-item'>"; // open item
		chx += "<h5 class='accordion-header' id='example-special-damage'>";
		chx += "<button class='accordion-button collapsed text-uppercase p-2' type='button' data-bs-toggle='collapse' data-bs-target='#example-special-damage-collapse' aria-expanded='false' aria-controls='example-special-damage-collapse'>Special Damage</button>";
		chx += "</h5>";
		chx += "<div id='example-special-damage-collapse' class='accordion-collapse collapse' aria-labelledby='example-special-damage'>"; // open collapse
		chx += "<div class='accordion-body p-2 pt-3 og-stripe'>"; // open body
		// character arcs
		chx += "<ul>";
		for (let e = 0; e < specialdamageList.length; e++) {
			chx += "<li class='mb-1'><strong>" + specialdamageList[e].dt + ":</strong> " + specialdamageList[e].dd + "</li>";
		}
		chx += "</ul>";
		chx += "</div>"; // close body
		chx += "</div>"; // close collapse
		chx += "</div>"; // close item
		chx += "</div>"; // close accordion
		chx += "<div class='mb-3'></div>"; // space accordion
		// damage to npcs
		def = createHeader(4, "damage-to-npcs", "Damage to NPCs", "og-border");
		def += createRef(["CCR 299&mdash;300"],)
		def += getBody([["<strong>Health:</strong> NPC have a stat called <strong>health</strong>, which usually 3 &times; <a href='#define-difficulty'>Level</a>. Damage you deal is subtracted from their health, and when it health reaches 0, they're defeated&mdash;killed, knocked out, or forced to surrender.", "<strong>Armor:</strong> If an NPC has an Armor stat, it's subtracted from any physical damage they take (to a minimum of 0). Mental attacks and some unusual physical attacks can bypass Armor.", "<strong>Increasing Damage:</strong> There are many ways to increase damage&mdash;for example, using <a href='#define-effort'>Effort</a>, <a href='#define-roll'>special rolls</a>, and <a href='#define-abilities'>abilities</a> like <a href='#define-ability-combat-prowess'>Combat Prowess</a>."]]);
		chx += createDef("damage-to-npcs", def);
		// damage to objects
		def = createHeader(4, "damage-to-objects", "Damage to Objects", "og-border");
		def += createRef(["CCR 300"],)
		def += getBody(["To damage an object, make an <a href='#define-attack'>attack roll</a> against its <a href='#define-difficulty'>level</a>. If you succeed and the damage meets or exceeds the object's level, reduce the object's level by the remainder&mdash;for example, if you attack a level 2 window and inflict 4 damage, the first 2 points of damage overcome the window's level. The next 2 reduce its level to 0. At level 0, clearing away whatever's left of the window is a <a href='#define-difficulty'>routine task</a>.", ["<strong>Other Obstacles:</strong> The GM might treat <a href='#define-skill-hacking'>hacking</a> and <a href='#define-skill-lockpicking'>lockpicking</a> like damaging an object&mdash;the lock or system has a level, and your roll inflicts \"damage.\" When its level becomes 0, you gain access to what's on the other side."]]);
		chx += createDef("damage-to-objects", def);
		// interacting with npcs
		def = createHeader(3, "interacting-with-npcs", "Interacting With NPCs", "og-border-lg");
		def += createRef(["CCR 307"],)
		def += getBody(["You can influence NPCs and other creatures, usually by talking with them. Trying to bluff, bribe, calm, or otherwise interact with an NPC may require an Intellect roll against the NPC's level. Skills like <a href='#define-skill-animal-care'>animal care</a>, <a href='#define-skill-charm'>charm</a>, <a href='#define-skill-deception'>deception</a>, <a href='#define-intimidation'>intimidate</a>, and <a href='#define-recognizing-motive'>recognizing motive</a> are an important part of successful interactions, ", "Interacting usually requires a common language or other workable method of communication. Relying on tone of voice and gestures is probably hindered by at least one step.", ["<strong>NPC Allies:</strong> NPC allies are usually only temporary. Usually, an NPC ally uses their action (on your turn) to <a href='#define-asset'>help</a> you with a task if the GM agrees they can help. In combat, decide if the ally helps you <a href='#define-attack'>attack</a> or <a href='#define-define'>defend</a>."]]);
		chx += createDef("interact", def);
		// cooperative actions
		def = createHeader(3, "cooperative-actions", "Cooperative Actions", "og-border-lg");
		def += createRef(["CCR 306"],)
		def += getBody(["There are many ways multiple characters can work together. However, you can't use more than one of these at the same time.", ["<strong>Help:</strong> If you use your <a href='#define-action'>action</a> to help someone with a task, you give them an <a href='#define-asset'>asset</a> on the task. If you're at least <a href='#defne-skill'>trained</a> in a relevant skill, you provide two assets. You can't help with <a href='#define-task'>tasks</a> you have an <a href='#define-skill'>inability</a> with. Helping someone with their defenses gives them an asset on all their defense tasks (not just one defense roll) until your next turn.", "<strong>Distraction:</strong> You can use your <a href='#define-action'>action</a> to distract a foe, hindering their actions for one round. Distraction can't hinder a foe by more than one step.", "<strong>Draw the Attack:</strong> When an NPC attacks another character, you can attempt to get the NPC to attack you instead. Usually, this succeeds without a roll, but intelligent or determined foes require a successful <a href='#define-stat'>Intellect</a> roll. If the foe attacks you instead, your <a href='#define-defend'>defense</a> is hindered by two steps. Two characters drawing an attack cancel each other out.", "<strong>Take the Attack:</strong> If an attack would hit another character, you can throw yourself in front of the attack. The attack hits you instead, inflicting an additional <a href='#define-wound'>minor wound</a>. Once you take an attack, you can't do so again until your next turn."]]);
		chx += createDef("help", def);
		chx += createSidebar(getBody(["Sometimes you can help by succeeding at an <a href='#define-action'>action</a> that complements what another person is about to attempt. If your complementary action succeeds, you give the other person an asset on their task."]));
		// crafting, building, and repairing
		def = createHeader(3, "crafting-building-and-repairing", "Crafting, Building, and Repairing", "og-border-lg");
		def += createRef(["CCR 307"],)
		def += getBody(["Unless you have a character ability that allows you to craft or repair something quickly, crafting is handled by spending <a href='#define-resource-points'>resource points</a>."]);
		chx += createDef("crafting", def);
		return chx;
	}
	else if (sectionList[ch].name == "Indices") { 
		chx += "";
		chx = createHeader(3, "cypher-tables", "Cypher Tables", "");
		// quick ref
		alert = createHeader(4, "choose-cypher", "Quick-Reference: Cyphers", "h6");
		alert += "<ul class='list-unstyled og-qr'>";
		alert += "<li><a href='#define-cyphers'>Cyphers</a></li>";
		for (let t = 0; t < tableList.length; t++) {
			if (tableList[t].def == "cypher") {
				alert += "<li><a href='#" + createID(tableList[t].name) + "'>" + tableList[t].name + "</a></li>";
			}
		}
		alert += "</ul>"; 
		chx += createAlert(alert);
		// build cypher tables
		chx += createHeader(4, "cypher-tables", "Cypher Tables", "og-border-lg");
		chx += createRef(["CCR 250&ndash;282",]);
		chx += "<div class='row'>";
		for (let t = 0; t < tableList.length; t++) {
			if (tableList[t].def == "cypher") {
				chx += "<div class='col-12 col-sm-6 col-md-4 col-lg-3'>";
				chx += createHeader(5, createID(tableList[t].name), tableList[t].name, "og-border");
				chx += createTable(tableList[t].name);
				chx += "</div>";
			}
		}
		chx += "</div>";
		// build cyphers
		chx += createHeader(4, "cypher-list", "Cypher List", "og-border-lg");
		for (let c = 0; c < cypherList.length; c++) {
			let cypher = "";
			def = createHeader(5, createID("cypher-" + cypherList[c].name), cypherList[c].name, "og-border");
			def += createRef(cypherList[c].ref);
			// type tagging
			def += "<ul class='og-list-tag'>";
			if (cypherList[c].powerboost == true) {
				def += "<li class='og-tag-primary'>Power Boost Cypher</li>";
			}
			else if (cypherList[c].nonstandard == undefined && cypherList[c].manifest == undefined) {
				def += "<li class=''>Standard Cypher</li>";
			}
			else if (cypherList[c].nonstandard == true) {
				def += "<li class='og-tag-danger'>Nonstandard Cypher</li>";
			}
			else if (cypherList[c].manifest == true) {
				if (cypherList[c].pow != undefined) {
					for (let p = 0; p < cypherList[c].pow.length; p++) {
						if (cypherList[c].pow[p] == "Low") { def += "<li class='og-tag-low'>Manifest Cypher (Low-Power)</li>"; }
						if (cypherList[c].pow[p] == "Med") { def += "<li class='og-tag-medium'>Manifest Cypher (Medium-Power)</li>"; }
						if (cypherList[c].pow[p] == "Adv") { def += "<li class='og-tag-advanced'>Manifest Cypher (Advanced-Power)</li>"; }
						if (cypherList[c].pow[p] == "High") { def += "<li class='og-tag-high'>Manifest Cypher (High-Power)</li>"; }
						if (cypherList[c].pow[p] == "Ultra") { def += "<li class='og-tag-ultra'>Manifest Cypher (Ultra-Power)</li>"; }
					}
				}
				else { def += "<li class='og-tag-warning'>!ERR</li>"; }
			}
			else { def += "<li class='og-tag-warning'>!ERR</li>"; }
			def += "</ul>";
			// effects
			for (let e = 0; e < cypherList[c].effect.length; e++) {
				if (Array.isArray(cypherList[c].effect[e])) {
					def += "<ul class='og-list-disc'>";
					for (let i = 0; i < cypherList[c].effect[e].length; i++) { def += "<li>" + cypherList[c].effect[e][i] + "</li>"; }
					def += "</ul>";
				}
				else if (e == 0) { def += "<p class='og-hang'><strong>Effect:</strong> " + cypherList[c].effect[e] + "</p>"; }
				else { def += "<p class='og-hang-continue'>" + cypherList[c].effect[e] + "<p>"; }
			}
			// explanation
			if (cypherList[c].explanation != undefined) {
				for (let e = 0; e < cypherList[c].explanation.length; e++) {
					if (e == 0) { def += "<p class='og-hang'><strong>Explanation:</strong> " + cypherList[c].explanation[e] + "</p>"; }
					else { def += "<p class='og-hang'>" + cypherList[c].explanation[e] + "<p>"; }
				}
			}
			// genreitems
			if (cypherList[c].genreitems != undefined) {
				def += "<p class='og-hang'><strong>Genre Items:</strong> ";
				for (gi = 0; gi < cypherList[c].genreitems.length; gi++) {
					def += cypherList[c].genreitems[gi][0] + " (" + cypherList[c].genreitems[gi][1] + ")";
					if (gi < (cypherList[c].genreitems.length - 1)) { def += "; "}
				}
				def += "<p>";
			}
			// if table
			for (let t = 0; t < tableList.length; t++) {
				if (tableList[t].name == (cypherList[c].name + " Cypher")) {
					def += createTable(tableList[t].name);
				}
			}
			// if sidebar
			if (cypherList[c].sidebar != undefined) {
				def += createSidebar(cypherList[c].sidebar);
			}
			chx += createDef(createID("cypher-" + cypherList[c].name), def);
		}
		// equipment index
		alert = createHeader(4, "choose-equipment-fantasy", "Quick-Reference: Equipment", "h6");
		alert += "<ul class='list-unstyled og-qr-compact'>";
		alert += "<li><a href='#define-currency'>Currency</a></li>";
		alert += "<li><a href='#define-equipment'>Equipment</a></li>";
		alert += "<li><a href='#define-weapon'>Weapon</a></li>";
		alert += "<li><a href='#define-armor'>Armor</a></li>";
		alert += "<li><a href='#define-asset'>Asset</a></li>";
		alert += "<li><a href='#define-range'>Range</a></li>";
		alert += "<li><a href='#define-crafting'>Crafting</a></li>";
		alert += "</ul>";
		alert += createHeader(4, "choose-equipment-real-world", "Quick-Reference: Real World Equipment", "h6");
		alert += "<ul class='list-unstyled og-qr-compact'>";
		alert += "<li><a href='#equipment-real-world-inexpensive'>Inexpensive</a></li>";
		alert += "<li><a href='#equipment-real-world-moderately-priced'>Moderately Priced</a></li>";
		alert += "<li><a href='#equipment-real-world-expensive'>Expensive</a></li>";
		alert += "<li><a href='#equipment-real-world-very-expensive'>Very Expensive</a></li>";
		alert += "<li><a href='#equipment-real-world-exorbitant'>Exorbitant</a></li>";
		alert += "</ul>";
		alert += createHeader(4, "choose-equipment-fantasy", "Quick-Reference: Fantasy Equipment", "h6");
		alert += "<ul class='list-unstyled og-qr-compact'>";
		alert += "<li><a href='#equipment-fantasy-inexpensive'>Inexpensive</a></li>";
		alert += "<li><a href='#equipment-fantasy-moderately-priced'>Moderately Priced</a></li>";
		alert += "<li><a href='#equipment-fantasy-expensive'>Expensive</a></li>";
		alert += "<li><a href='#equipment-fantasy-very-expensive'>Very Expensive</a></li>";
		alert += "<li><a href='#equipment-fantasy-exorbitant'>Exorbitant</a></li>";
		alert += "</ul>";
		alert += createHeader(4, "choose-equipment-science-fiction", "Quick-Reference: Science Fiction Equipment", "h6");
		alert += "<p class='small og-hang'>&dagger; &mdash; <em>fantastic technology only available in far-future or advanced-technology settings</em></p>";
		alert += "<ul class='list-unstyled og-qr-compact'>";
		alert += "<li><a href='#equipment-science-fiction-inexpensive'>Inexpensive</a></li>";
		alert += "<li><a href='#equipment-science-fiction-moderately-priced'>Moderately Priced</a></li>";
		alert += "<li><a href='#equipment-science-fiction-expensive'>Expensive</a></li>";
		alert += "<li><a href='#equipment-science-fiction-very-expensive'>Very Expensive</a></li>";
		alert += "<li><a href='#equipment-science-fiction-exorbitant'>Exorbitant</a></li>";
		alert += "</ul>";
		alert += createHeader(4, "choose-equipment-postapocalypse", "Quick-Reference: Postapocalypse Equipment", "h6");
		alert += "<ul class='list-unstyled og-qr-compact'>";
		alert += "<li><a href='#equipment-postapocalypse-inexpensive'>Inexpensive</a></li>";
		alert += "<li><a href='#equipment-postapocalypse-moderately-priced'>Moderately Priced</a></li>";
		alert += "<li><a href='#equipment-postapocalypse-expensive'>Expensive</a></li>";
		alert += "</ul>";
		alert += createHeader(4, "choose-equipment-superhero", "Quick-Reference: Superhero Equipment", "h6");
		alert += "<ul class='list-unstyled og-qr-compact'>";
		alert += "<li><a href='#equipment-superheroes-inexpensive'>Inexpensive</a></li>";
		alert += "<li><a href='#equipment-superheroes-moderately-priced'>Moderately Priced</a></li>";
		alert += "<li><a href='#equipment-superheroes-expensive'>Expensive</a></li>";
		alert += "</ul>";
		// equipment index
		chx += createHeader(3, "equipment-tables", "Equipment Tables", "og-border-lg");
		chx += createAlert(alert);
		// real world equipment
		chx += createHeader(4, "equipment-real-world", "Real World Equipment", "og-border");
		chx += createHeader(5, "equipment-real-world-inexpensive", "Inexpensive Real World Items", "h6");
		chx += createRef(["CCR 240"]);
		chx += createTable("Real World Inexpensive Items");
		chx += createHeader(5, "equipment-real-world-moderately-priced", "Moderately Priced Real World Items", "h6");
		chx += createRef(["CCR 240"]);
		chx += createTable("Real World Moderately Priced Items");
		chx += createHeader(5, "equipment-real-world-expensive", "Expensive Real World Items", "h6");
		chx += createRef(["CCR 241"]);
		chx += createTable("Real World Expensive Items");
		chx += createHeader(5, "equipment-real-world-very-expensive", "Very Expensive Real World Items", "h6");
		chx += createRef(["CCR 241"]);
		chx += createTable("Real World Very Expensive Items");
		chx += createHeader(5, "equipment-real-world-exorbitant", "Exorbitant Real World Items", "h6");
		chx += createRef(["CCR 241"]);
		chx += createTable("Real World Exorbitant Items");
		// fantasy equipment
		chx += createHeader(4, "equipment-fantasy", "Fantasy Equipment", "og-border");
		chx += createHeader(5, "equipment-fantasy-inexpensive", "Inexpensive Fantasy Items", "h6");
		chx += createRef(["CCR 242"]);
		chx += createTable("Fantasy Inexpensive Items");
		chx += createHeader(5, "equipment-fantasy-moderately-priced", "Moderately Priced Fantasy Items", "h6");
		chx += createRef(["CCR 242"]);
		chx += createTable("Fantasy Moderately Priced Items");
		chx += createHeader(5, "equipment-fantasy-expensive", "Expensive Fantasy Items", "h6");
		chx += createRef(["CCR 243"]);
		chx += createTable("Fantasy Expensive Items");
		chx += createHeader(5, "equipment-fantasy-very-expensive", "Very Expensive Fantasy Items", "h6");
		chx += createRef(["CCR 243"]);
		chx += createTable("Fantasy Very Expensive Items");
		chx += createHeader(5, "equipment-fantasy-exorbitant", "Exorbitant Fantasy Items", "h6");
		chx += createRef(["CCR 243"]);
		chx += createTable("Fantasy Exorbitant Items");
		// science fiction equipment
		chx += createHeader(4, "equipment-science-fiction", "Science Fiction Equipment", "og-border");
		chx += createHeader(5, "equipment-science-fiction-inexpensive", "Inexpensive Science Fiction Items", "h6");
		chx += createRef(["CCR 244"]);
		chx += createTable("Science Fiction Inexpensive Items");
		chx += createHeader(5, "equipment-science-fiction-moderately-priced", "Moderately Priced Science Fiction Items", "h6");
		chx += createRef(["CCR 245"]);
		chx += createTable("Science Fiction Moderately Priced Items");
		chx += createHeader(5, "equipment-science-fiction-expensive", "Expensive Science Fiction Items", "h6");
		chx += createRef(["CCR 246"]);
		chx += createTable("Science Fiction Expensive Items");
		chx += createHeader(5, "equipment-science-fiction-very-expensive", "Very Expensive Science Fiction Items", "h6");
		chx += createRef(["CCR 247"]);
		chx += createTable("Science Fiction Very Expensive Items");
		chx += createHeader(5, "equipment-science-fiction-exorbitant", "Exorbitant Science Fiction Items", "h6");
		chx += createRef(["CCR 247"]);
		chx += createTable("Science Fiction Exorbitant Items");
		// postapocalypse equipment
		chx += createHeader(4, "equipment-postapocalypse", "Postapocalypse Equipment", "og-border");
		chx += createHeader(5, "equipment-postapocalypse-inexpensive", "Inexpensive Postapocalypse Items", "h6");
		chx += createRef(["CCR 248"]);
		chx += createTable("Postapocalypse Inexpensive Items");
		chx += createHeader(5, "equipment-postapocalypse-moderately-priced", "Moderately Priced Postapocalypse Items", "h6");
		chx += createRef(["CCR 248"]);
		chx += createTable("Postapocalypse Moderately Priced Items");
		chx += createHeader(5, "equipment-postapocalypse-expensive", "Expensive Postapocalypse Items", "h6");
		chx += createRef(["CCR 248"]);
		chx += createTable("Postapocalypse Expensive Items");
		// superhero equipment
		chx += createHeader(4, "equipment-superhero", "Superhero Equipment", "og-border");
		chx += createHeader(5, "equipment-superheroes-inexpensive", "Inexpensive Superhero Items", "h6");
		chx += createRef(["CCR 248"]);
		chx += createTable("Superheroes Inexpensive Items");
		chx += createHeader(5, "equipment-superheroes-moderately-priced", "Moderately Priced Superhero Items", "h6");
		chx += createRef(["CCR 248"]);
		chx += createTable("Superheroes Moderately Priced Items");
		chx += createHeader(5, "equipment-superheroes-expensive", "Expensive Superhero Items", "h6");
		chx += createRef(["CCR 248"]);
		chx += createTable("Superheroes Expensive Items");
		// ability index
		chx += createHeader(3, "ability-index", "Ability Index", "og-border-lg");
		// quick ref
		alert = createHeader(4, "choose-ability-index", "Quick-Reference: Ability Index", "h6");
		alert += "<ul class='list-inline'>";
		for (let alpha = 0; alpha < abilitySortList.length; alpha++) {
			alert += "<li class='list-inline-item pe-2'><a href='#" + createID("abilities-index-" + abilitySortList[alpha]) + "'>" + abilitySortList[alpha] + "</a></li>";
		}
		alert += "</ul>";
		alert += createHeader(4, "choose-ability-index", "Quick-Reference: Abilities with Differences", "h6");
		alert += getBody(["These abilities share a name, but feature different mechanics, depending on if you gained them from a specific <a href='#define-type'>type</a> or <a href='#define-focus'>focus</a>."]);
		alert += "<ul class='list-unstyled og-qr'>";
		for (let m = 0; m < abilityList.length; m++) {
			if (abilityList[m].dupmajor == true) {
				alert += "<li><a href='#" + createID("define-ability-" + abilityList[m].name) + "'>" + abilityList[m].name.slice(0, -3) + "</a></li>";
			}
		}
		alert += "</ul>";

		chx += createAlert(alert);
		for (let alpha = 0; alpha < abilitySortList.length; alpha++) {
			chx += createHeader(4, createID("abilities-" + abilitySortList[alpha]), ("Abilities&mdash;" + abilitySortList[alpha]), "og-border");
			chx += "<ul class='og-list-abilities'>"; 
			for (let a = 0; a < abilityList.length; a++) {
				if (abilityList[a].name.charAt(0) == abilitySortList[alpha]) {
					chx += "<li class='og-list-ability' id='" + createID("ability-" + abilityList[a].name) + "'>" + createDef(createID("ability-" + abilityList[a].name), getAbility(abilityList[a].name, true)) + "</li>";
					// add animal shape table
					if (abilityList[a].name == "Animal Shape") {
						chx += "</ul>" // pause ability list
						alert = createHeader(5, createID("ability-" + abilityList[a].name + "-supplement"), "Animal Form Minor Abilities", "");
						alert += createRef(["CCR 161"]);
						alert += getBody(["Use the following as examples or suggestions of what a character gains when in the shape of an animal. If an animal shape lists two <a href='#define-skill'>skills</a>, the character chooses which one they want to have an asset in each time they take that shape.", "The GM can mix up the combinations of <a href='#define-skill'>skills</a> and other abilities for these animal shapes to create other Earth animals, or create animals in the campaign setting that don't exist on Earth.", ["<strong>Aquatic:</strong> The animal either breathes water instead of air or is able to breathe water in addition to breathing air.", "<strong>Armor:</strong> The animal has a thick hide or shell that functions like <a href='#define-armor'>light armor</a> (but never hinders the character's tasks).</li>", "<strong>Constrict:</strong> The animal can grip its opponent fast after making a melee attack (usually with a bite or claw), easing attack rolls against that foe on later turns until the animal releases the foe.</li>", "<strong>Fast:</strong> The animal can move a long distance on its turn instead of a short distance.</li>", "<strong>Flying:</strong> The animal can fly, which (depending on the type of animal) may be up to a short or long distance on its turn.</li>", "<strong>Hands:</strong> The animal has paws or hands that are nearly as agile as those of a human. Unlike with most animal shapes, tasks that require hands are not hindered (although the GM may decide that some tasks requiring human agility, such as playing a flute, are still hindered).</li>", "<strong>Scent:</strong> The animal has a strong sense of smell, gaining an asset on tracking and dealing with darkness or blindness.</li>", "<strong>Small:</strong> The animal is considerably smaller than a human, easing its <a href='#define-defend'>dodge</a> tasks but hindering tasks to move heavy things.</li>", "<strong>Venom:</strong> The animal is venomous (usually through a bite), inflicting an additional 1 poison damage</li>"]]);
						alert += createTable("Animal Form Minor Abilities")
						chx += createAlert(alert);
						chx += "<ul class='og-list-abilities'>" // resume ability list
					}
				}
			}
			chx += "</ul>"; 
		}
		alert = createHeader(3, "glossary", "Glossary", "");
		alert += "<ul class='list-unstyled og-qr'>";
		for (let g = 0; g < glossaryList.length; g++) {
			alert += "<li><a href='#define-" + glossaryList[g].def + "'>" + glossaryList[g].dt + "</a></li>";			
		}
		alert += "</ul>";
		chx += createAlert(alert);
		return chx;
	}
};
// interface functions
function refreshTooltips() {
	$("a[href^=\\#define-]")
		.tooltip({
			html: true,
			title: function () {
				return $(this.href.substring(this.href.lastIndexOf("#"))).clone().wrap('<div></div>').parent();
			}
		})
};
function refreshTooltipsAbilities() {
	$("a[href^=\\#defineability-]")
		.tooltip({
			html: true,
			title: function () {
				return $(this.href.substring(this.href.lastIndexOf("#"))).clone().wrap('<ul class="list-unstyled"></ul>').parent();
			}
		})
};
function dyslexiaMode() {
	if (document.getElementById("dyslexiaSwitch").checked == false) {
		document.getElementById("body-content").classList.remove("dyslexia");
		readerPreference = "standard";
		localStorage.setItem('readerMode', 'standard');
	}
	else {
		document.getElementById("body-content").classList.add("dyslexia");
		readerPreference = "dyslexic";
		localStorage.setItem('readerMode', 'dyslexic');
	}
};
// assemble chapter structure to page
function printContent() {
	let chapter = "";
	chapter += "<p class='small text-center'>version" + version + " (" + updated + ")</p>";
	chapter += "<ul class='list-inline text-center'>";
	chapter += "<li class='list-inline-item'><a class='btn btn-light mt-1 mb-1 theme-light border text-white' href='https://github.com/callmepartario/og-crd'>Github</a></li>";
	chapter += "<li class='list-inline-item'><a class='btn btn-light mt-1 mb-1 theme-light border text-white' href='https://ko-fi.com/oldgus'>&#9749; Ko-fi</a></li>";
	chapter += "</ul>";
	for (let ch = 0; ch < sectionList.length; ch++) {
		chapter += createHeader(2, createID(sectionList[ch].name), sectionList[ch].name, "og-tab");
		// chapter += createRef(sectionList[ch].ref);
		chapter += getSection(ch);
	}
	document.getElementById("printContent").innerHTML = chapter  + "<hr>";
};
// INITIALIZE ON LOAD
window.addEventListener("load", (event) => { 
	// dyslexiamode (load preference)
	if (readerPreference == "dyslexic") { document.getElementById("dyslexiaSwitch").checked = true }
	// dyslexiamode (switch)
	if (document.getElementById("dyslexiaSwitch").checked == true) { dyslexiaMode(); }

	document.querySelector('#dyslexiaSwitch').addEventListener("click", function(event) { dyslexiaMode(); });

	// tooltips
	refreshTooltips();
	refreshTooltipsAbilities();
});
printContent();