var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"INTRO"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"INTRO":[{"#":"CHAPTER 1"},"^Perched on the cliffs of a rocky coast, a grove of cypress and pine watches over the northwest sea.","\n","^Moonlight trickles through its white tipped tree tops, twinkling from the icy roof of a stout cottage within.","\n","^The snow that buries the foot of its cedar walls is bathed in an ochre glow. Behind frosty glass, a young girl holds a flickering light over a woman entombed in a pile of knit orange pillows.","\n","^\"Madame--you're burning up!\" says ","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^.","\n","^\"I'll be okay, darling.\" Madame ","ev",{"VAR?":"WITCH_NAME"},"out","/ev","^ soothes.","\n","^She takes her student's hand from her brow, and ","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ holds her tightly as she sits up.","\n","^Her gaze falls to a black timepiece on a stack of worn books to her left. She takes it and gently settles it into the inner pocket of her robes.","\n","^\"There's a lot of work that needs to be done for dinner tonight,\" she sighed, rising to her feet.","\n","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ bites her lip. \"Maybe you should take it easy. I don't want you to collapse again.\"","\n","^Madame ","ev",{"VAR?":"WITCH_NAME"},"out","/ev","^ stifles a cough. \"The winter solstice only comes once a year,\" she replied. \"I wouldn't miss it for the world.\"","\n","^\"And besides,\" she squeezes ","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^'s hand. \"With you around, what do I have to fear?\"","\n","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ beams. \"Leave it to me!\"","\n",{"->t->":"den.intro"},"end",{"#f":1}],"den":[{"->":".^.intro"},{"intro":["^In the den lived a black iron stove. It lurked in the western wall of the of the airy room.","\n","^An olive green sofa, an armchair covered in blankets, and a low wooden table huddle around the hearth's glow.","\n","^Embers cast smoldering shadows on the room beyond the furniture.","\n","ev","void","/ev","->->",{"#f":1}],"brew_drink":["ev","void","/ev","->->",{"#":"CLEAR"},{"->":"FOREST"},"ev","void","/ev","->->",{"#f":1}],"#f":1}],"GATHER_CHORE":[["ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ unfolds the paper. A list of herbs, vegetables, reagents, and instructions is scrawled in a neat and tiny print.","\n","^\"A little tonic to ease my fever,\" she explains. \"We have everything in the pantry except for ","ev",{"VAR?":"INGREDIENT"},"out","/ev","^.\"","\n","^Collecting her small brown satchel, her dark oaken staff, and a hot flask of peppermint tea, ","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ stands in the foyer dressed in her hat and robes.","\n","ev","str","^Say goodbye to Madame ","ev",{"VAR?":"WITCH_NAME"},"out","/ev","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Venture outside to the forest","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ pokes her head through the maroon curtains into ","ev",{"VAR?":"WITCH_NAME"},"out","/ev","^'s study. \"I'm off, Madame,\" she chirps.","\n","^\"Come home before sunset,\" calls Madame ","ev",{"VAR?":"WITCH_NAME"},"out","/ev","^. She held a long briar pipe and a flaming wick.","\n","^Under a withering glare from her apprentice, she sighs--extinguishing the light and returning the pipe to its ebony case.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^A white flurry swirls above the towering pines and descends onto the witch's garden, laid to rest by the winter frost.","\n","^From the yard's low iron gate, ","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ waves to Madame ","ev",{"VAR?":"WITCH_NAME"},"out","/ev","^ through the window of her study.","\n","^The witch waves back, ","ev",{"CNT?":".^.^.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^ gingerly holding a cup of peppermint tea. ",{"->":".^.^.^.20"},null]}],[{"->":".^.b"},{"b":["^ smoking a long briar pipe. ",{"->t->":".^.^.^.^.^.short_argument"},{"->":".^.^.^.20"},null]}],"nop","\n","ev","void","/ev","->->",{"#f":5}]}],{"short_argument":["^After stomping back into the cottage, ","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ re-emerges from the door, victorious.","\n","^Inside, Madame ","ev",{"VAR?":"WITCH_NAME"},"out","/ev","^ tenderly blows at a steaming porcelain teacup, her pipe replaced with a draught of fresh peppermint tea.","\n","ev","void","/ev","->->",{"#f":1}],"#f":1}],"FOREST":[[{"#":"CHAPTER 2"},"ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ comes to a halt. To the west, the trail continued--past the pine groves and over the shallow creek.","\n","^With a shiver, she clutches her cloak tightly.","\n","^The plush fur lining guarded her from the winter's breath, but not its bite.","\n",{"->t->":".^.^.cast_warmth_magic"},"^She loosens her cloak and begins to walk.","\n","ev","str","^Continue to the creek","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"#":"CLEAR"},{"->":"CREEK"},{"#f":5}]}],{"cast_warmth_magic":[["^She rummages through her satchel. Under her flask, behind a bundle of sage-grass, and next to a green glass jar filled with sparkling rocks, she grabs a tattered leather notebook.","\n","^Thumbing through its vellum leaves, ","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ turns to a page with a sigil encircled in red ink.","\n","^She holds her hand in front of her face. Her soft whispers float to the page--and a crimson flame ignites above the sigil.","\n","ev","str","^Hold the flame","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Eat the flame","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Shut the flame in the book","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ gently cups the flame in her hand.","\n","^The page is blank, and she returns the notebook to her satchel.","\n","^\"That's lovely.\" she sighs.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ inhales deeply. Lunging forward, she gouges the flame from the book with her teeth and swallows quickly.","\n","^Her howls tear through the wood, shaking snow off a nearby pine.","\n","^Her eyes smolder--her breath, ash.","\n","^\"There *has* to be a better way to do this,\" she gasps.","\n","^Coughing, ","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ brushes soot off her hands and face. A scarlet flame flickers from the tip of her hat.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["\n","^With a snap! ","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ claps the book shut.","\n","^A golden light pulses from between its pages, and the surrounding forest basks in its peaceful glow.","\n","ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^ smiles and returns the book to her satchel, draped in swirling and flickering embers.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["ev","void","/ev","->->",{"#f":5}]}],{"#f":1}],"#f":1}],"CREEK":["ev",{"VAR?":"APPRENTICE_NAME"},"out","/ev","^'s gaze falls from the cloud-tipped maple trees to the clearing as she crests the hill.","\n","^A brook babbled softly from the south. It snaked out of view around the trees to the east.","\n","end",{"#f":1}],"HUT_RETURN":["end",{"#f":1}],"global decl":["ev","str","^Alice","/str",{"VAR=":"APPRENTICE_NAME"},"str","^Rochelle","/str",{"VAR=":"WITCH_NAME"},"str","^pond-shroom","/str",{"VAR=":"INGREDIENT"},"/ev","end",null],"#f":1}],"listDefs":{}};