export interface CurriculumLevel {
  level: string;
  topics: string[];
}

export const curriculumData: Record<string, CurriculumLevel[]> = {
  drums: [
    {
      level: "Level 1",
      topics: [
        "Gap-Hybrid/German",
        "Foot technique",
        "Rudiments-Single/Double/ Paradiddles",
        "Quarter & 8th note beats (5 examples at slow/med/fast tempo)",
        "Basic fills (no 16th notes)",
        "Notations (Basic)",
        "Exam: Billie Jean, Seven Nation Army, It's my life, Pani da"
      ]
    },
    {
      level: "Level 2",
      topics: [
        "8th note fills",
        "16th note beats (8th note beats with 16th notes on hihat)",
        "Basic Independence (Left foot independence)",
        "Accents (Basic 8th note accents)",
        "Basic Dynamics",
        "Rudiments-5, 7, 9 stroke roll",
        "Exam: Smoke on the water, Suraj dooba hai Yaaron, Jolene"
      ]
    },
    {
      level: "Level 3",
      topics: [
        "Triplets-8th and 16th note beats and fills (Shuffle)",
        "16th note fills",
        "Accents-beats/fills",
        "Exam: Roadhouse Blues, Ajeeb Dastan, 12/8 blues shuffle"
      ]
    },
    {
      level: "Level 4",
      topics: [
        "Re-applying all 8th and 16th note kick patterns with dotted 8th/16th",
        "Limb independence-left foot (qtr. 8th, 16th)",
        "Double strokes on kick drums",
        "Basic Sight reading",
        "Dynamics- Ghost notes",
        "Exam: Last Resort"
      ]
    },
    {
      level: "Level 5",
      topics: [
        "Flams, Ruffs",
        "Understanding 5/4, 7/8, 6/8 time signatures and attached rudiments",
        "Understanding compound time",
        "Advanced 32nd note applications (beats/ fills)",
        "Broken Hihat-Ride Patterns",
        "Sight-reading"
      ]
    },
    {
      level: "Level 6",
      topics: [
        "Understanding different genres (Basic grooves and fills) - Jazz, Latino (Samba, Bossa Nova), Afro-Cuban",
        "Sight-reading",
        "Optional: Understanding additional percussive instruments like Djembe, Congo etc."
      ]
    },
    {
      level: "Level 7",
      topics: [
        "Understanding different genres (Advanced)",
        "Indian Traditional (Fusion)",
        "Sight-reading",
        "Play along with different styles"
      ]
    },
    {
      level: "Level 8",
      topics: [
        "Understanding double kick patterns and applications",
        "Progressive and Modern Progressive music",
        "Polyrhythms and advanced rhythm application",
        "How to achieve recording dynamics",
        "Sight-reading"
      ]
    }
  ],
  "guitar-acoustic": [
    {
      level: "Level 1",
      topics: [
        "Holding posture, Plectrum position, Fretboard Hand positioning, wrist, etc",
        "Alternate picking",
        "Theory: String names, 12 tones, sharps, flats",
        "Scales: Chromatic from E to G#, C major, G major",
        "Chords: C major, G major",
        "Aural: Be able to clap a short 4 bar rhythm in 4/4 meter",
        "Exercises: Chromatic patterns, Chord shifting C-G",
        "Song samples: London Bridge, Dooba Dooba, Lukka Chuppi"
      ]
    },
    {
      level: "Level 2",
      topics: [
        "Theory: major scale formula, chord formation",
        "Scales: D major, A major, E major (open position)",
        "Chords: D major, A major, E major",
        "Aural: 4 bar rhythm in 2/4, 3/4, 4/4, 6/8",
        "Composition: Simple 4 bar melody in a major key",
        "Exercises: Major Scale Patterns, Chord Shifts",
        "Song samples: Kaisi Yeh Paheli, Wonderful Tonight"
      ]
    },
    {
      level: "Level 3",
      topics: [
        "Theory: minor scale, use of flat (F major scale)",
        "Scales: A minor, E minor, D minor, B major, F major",
        "Chords: Barred Chords",
        "Right Hand Rhythm patterns, Arpeggios (Basic)",
        "Aural: Difference between major and minor chords",
        "Composing: Simple 4 bar melody in 4/4, 6/8, 3/4",
        "Exercises: Barred Chords, Chord shifts, Improvise on Major Scales",
        "Song samples: Teri Dewani, Knocking On Heavens Door, Summer of 69 (intro)"
      ]
    },
    {
      level: "Level 4",
      topics: [
        "Introduction to Staff and Tabs",
        "Theory: major scale chord family, dominant 7th chords, major 7th chords",
        "Scales: G major full shape, minor full shape, melodic/harmonic minor",
        "Chords: E7, A7, B7, D7 and different major 7th chords",
        "Aural: Recognise the intervals till perfect 4th",
        "Composing: 8 bar melody in any time signature",
        "Exercises: Right Hand Rhythm Practice, 12 bar blues",
        "Song samples: Day Tripper, Imagine"
      ]
    },
    {
      level: "Level 5",
      topics: [
        "More on Staff and Tabs",
        "Theory: Riffs, Power Chords",
        "Scales: Major Pentatonic, Minor Pentatonic, Blues Scale",
        "Chords: Compound Chords (add 9th, etc)",
        "Aural: Recognize all intervals till an octave and be able to tell a song's metre",
        "Composition: 8 bar melody in blues or pentatonic scale",
        "Exercises: Finger Stretching, Arpeggios, Slide, Hammer n pull-offs",
        "Song samples: Every Breath You Take, Smoke On the Water"
      ]
    },
    {
      level: "Level 6",
      topics: [
        "Theory: Circle of 5th, Related Major-Minors",
        "Scales: all major scale position, minor scale positions",
        "Chords: Minor 7th, sus2, sus4 (application)",
        "Exercises: in-string exercise, Extending Exercise, bending",
        "Aural: Recognize style and structure, imitate short melodies",
        "Composition: 16 bar melody with complex rhythm and ornaments",
        "Song samples: Pinball Wizard - The Who"
      ]
    },
    {
      level: "Level 7",
      topics: [
        "Introduction to Electric Guitar",
        "Theory: Minor chord family",
        "Scales: diminished scale",
        "Chords: augmented, diminished chords",
        "Aural: Recognize the key of any composition",
        "Exercises: Major-minor scales throughout fret board",
        "Improvisation on the scales using ornaments: legato, tapping",
        "Own Composition of at least 1 min (recorded)"
      ]
    },
    {
      level: "Level 8",
      topics: [
        "Processor: Patch Making",
        "Theory: Modes",
        "Scales: Individual Mode Study",
        "Chords: Family using 7ths",
        "Exercises: Modal Playing",
        "Aural: Can imitate melodies effortlessly",
        "Improvisation with ornaments: hammer and pull-off",
        "Own Composition of at least 2½ min (recorded)"
      ]
    }
  ],
  keyboard: [
    {
      level: "Level 1",
      topics: [
        "Introduction to the Keyboard",
        "Note names (sharps and flats), Correct Posture and technique",
        "5-finger scale on C",
        "Scales, chords and arpeggio: C, F and G Major (1 Octave)",
        "Understanding rhythmic indices: crotchet, minim, semi-breve",
        "Aural: Be able to clap a short 4 bar rhythm in 4/4 meter",
        "Song samples: National Anthem, London Bridge"
      ]
    },
    {
      level: "Level 2",
      topics: [
        "Theory: Major scales and chord formation",
        "Scales, Chords and arpeggio: D, A and E Major (1 octave)",
        "Single note chords",
        "Introduction to left hand chords and right hand melody",
        "Exercises: Hanon 1, finger walk",
        "Aural: 4-bar rhythm in 2/4, 3/4, 4/4, 6/8 metre"
      ]
    },
    {
      level: "Level 3",
      topics: [
        "Introduction to minor key",
        "Scales, chords, arpeggio: A, E, D minor and B major",
        "Inversions: root, first and second",
        "Introduction to rhythm accompaniment",
        "Theory: Minor scale formation, order of sharps and flats",
        "Aural: Tell the difference between major and minor chord",
        "Basic improvisation on major keys"
      ]
    },
    {
      level: "Level 4",
      topics: [
        "Introduction to Staff notation",
        "Theory: major scale chord family, dominant 7th chords, major 7th chords",
        "Chord voicing: 7ths",
        "Scales, chords and arpeggio: Bb, Eb, Ab major and F, C, G minors",
        "Piano skills: left hand accompaniment basics, Pedal usage",
        "Introduction to voices: drums, strings",
        "Aural: Recognise the intervals till perfect 4th"
      ]
    },
    {
      level: "Level 5",
      topics: [
        "Theory: circle of fifth, major chord family",
        "Chord Voicings: sus2, sus4",
        "Pentatonic scale",
        "Scales, chords and arpeggio: Db, Gb major and B, F#, C# minors",
        "Piano skills: sight reading",
        "Voices: Electric piano, organ",
        "Aural: Recognise all intervals played till an octave and be able to tell a song's metre",
        "Improvisation on pentatonic scale"
      ]
    },
    {
      level: "Level 6",
      topics: [
        "Theory: blues, 7th chord family",
        "Chord voicings: added 9th and 11th",
        "Blues scale",
        "Scales, chords and arpeggio: G#, Bb, Eb minors",
        "Piano skills: sight reading",
        "Voices: brass and wind instruments",
        "Aural: Understand the style and structure of any composition, can imitate short melodies",
        "Improvise on blues and pentatonic scales"
      ]
    },
    {
      level: "Advanced (Level 7 & 8)",
      topics: [
        "Remaining voicings, Synthesis: ADSR",
        "Modal Studies, Minor family",
        "Working with various keyboards (arranger, midi, synthesizer)",
        "Intro to recording and arranging",
        "Home recording (DAW)",
        "Aural: Recognise the key of any composition and figure out the progression",
        "A 2 min self-composition to be recorded"
      ]
    }
  ],
  violin: [
    {
      level: "Module 1",
      topics: [
        "1. Introduction to Violin: Holding, initial bowing exercises - separate bows,slurs, finger placement 2. Introduction to staff notation, sight reading.",
       ,        "2. Introduction to staff notation, sight reading",
       ,
        "3. Bowing and Fingering Exercises for Technical Improvement.",
        "4. Technical works: Major Scale A, D, G one octave. Later in the module - G major & A major 2 Octaves and Arpeggios. Minor Scale-D, A Two Octaves with Arpeggios.",
        "5. Eta Cohen Violin Method Book 1",
        "6. Suzuki Violin Method Book 1 (later in the module)",
        "7. Pieces/Songs of candidate's choice according to the level of expertise he/she has achieved."
      ]
    },
    {
      level: "Module 2",
      topics: [
        "1. Scales: Major-G, D two octaves. C, F octave. Minor - E, D one octave A two octave with corresponding arpeggios. All scales and arpeggios are both with separate bows and slurs.",
        "2. Shifting: Third Position. Dmajor scale one octave starting from A string Third Position.",
        "3. Exercises and studies form Franz Wohlfarht.",
        "4. Eta Cohen Violin Method Book 2",
        "5. Suzuki Violin Method Book 1 and 2 (later in the module)",
        "6. Pieces/Songs of candidate's choice according to the level of expertise he/she has achieved"
      ]
    },
    {
      level: "Module 3",
      topics: [
        "1. Scales: Major D, A,Bb two octaves, F, C,Eb one octave. Minor - D, A, G two octaves with corresponding arpeggios. All scales and arpeggios are to be played both with separate bows and slurs.",
        "2. Dominant 7ths in G, A.",
        "3. Franz Wohlfarht exercises and studies continued.",
        "4. Eta Cohen Violin Method Book 2 Continued.",
        "5. Suzuki Violin Method Book 2 and 3 (later in the module)",
        "6. Pieces/Songs of candidate's choice according to the level of expertise he/she has achieved"
      ]
    },
    {
      level: "Module 4",
      topics: [
        "1. Introduction to 5th position",
        "2. Scales: Major-G three octaves, C, Bb two octaves. Minor - G three octaves. C, Bb two octaves with corresponding arpeggios.",
        "3. Dominant 7th in C, D.",
        "4. Introduction to Chromatic Scale starting on open D.",
        "5. Higher level studies and etudes by Franz Wohlfarht.",
        "6. Eta Cohen Violin Method Book 3.",
        "7. Suzuki Violin Method book 3.",
        "8. Pieces/Songs of candidate's choice according to the level of expertise he/she has achieved"
      ]
    }
  ],
  "western-vocal": [
    {
      level: "Fundamental Level (1-3)",
      topics: [
        "Step by step Vocal warm up exercises",
        "Singing scales",
        "Singing vowels and consonants",
        "Singing intervals",
        "Singing Arpeggios",
        "Singing running scales",
        "Internal Assessment",
        "Stage performances"
      ]
    },
    {
      level: "Intermediate Level (4-6)",
      topics: [
        "Study of different vocal ranges",
        "Study of SATB arrangement",
        "Singing Chromatic scales on different notes using vowels",
        "Singing Octaves",
        "Study of RUNS & TRILLS",
        "Improvisation and development of dynamics",
        "Internal Assessment",
        "Stage performances"
      ]
    },
    {
      level: "Advanced Level (7-8)",
      topics: [
        "Development of phrasing techniques",
        "Study of Vibrato",
        "Study of performing arts",
        "Internal Assessment",
        "Stage performances"
      ]
    }
  ]
};

// Map aliases for instruments that share curriculum
curriculumData["guitar-rock-pop"] = curriculumData["guitar-acoustic"];
curriculumData["piano"] = curriculumData["keyboard"];
