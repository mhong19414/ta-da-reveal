var mic, recorder;

var soundFile,
	soundFileDo1,
	soundFileRe,
	soundFileMi,
	soundFileFa,
	soundFileSol,
	soundFileLa,
	soundFileTi,
	soundFileDo2;

var notes = notesDo1 = notesRe = notesMi = notesFa = notesSol = notesLa = notesTi = notesDo2 = [];

var noteNow = 'do1';
var noteElem = $('#' + noteNow + " > .note")

var state = 0;

function setup() {
	mic = new p5.AudioIn();
	mic.start();

	recorder = new p5.SoundRecorder();
	recorder.setInput(mic);

	soundFileDo1 = new p5.SoundFile();
	soundFileRe = new p5.SoundFile();
	soundFileMi = new p5.SoundFile();
	soundFileFa = new p5.SoundFile();
	soundFileSol = new p5.SoundFile();
	soundFileLa = new p5.SoundFile();
	soundFileTi = new p5.SoundFile();
	soundFileDo2 = new p5.SoundFile();

	soundFile = soundFileDo1;
	notes = notesDo1;

	noteElem = $('#' + noteNow + " > .note");
	console.log(noteElem)
}

function keyPressed() {
	switch (keyCode){
		case 49:
			soundFile = soundFileDo1;
			notes = notesDo1;
			noteNow = 'do1';
			console.log('Do1')
			break;
		case 50:
			soundFile = soundFileRe;
			notes = notesRe;
			noteNow = 're';
			console.log('Re')
			break;
		case 51:
			soundFile = soundFileMi;
			notes = notesMi;
			noteNow = 'mi';
			console.log('Mi')
			break;
		case 52:
			soundFile = soundFileFa;
			notes = notesFa;
			noteNow = 'fa';
			console.log('Fa')
			break;
		case 53:
			soundFile = soundFileSol;
			notes = notesSol;
			noteNow = 'sol';
			console.log('Sol')
			break;
		case 54:
			soundFile = soundFileLa;
			notes = notesLa;
			noteNow = 'la';
			console.log('La')
			break;
		case 55:
			soundFile = soundFileTi;
			notes = notesTi;
			noteNow = 'ti';
			console.log('Ti')
			break;
		case 56:
			soundFile = soundFileDo2;
			notes = notesDo2;
			noteNow = 'do2';
			console.log('Do2')
			break;
	}

	if (keyCode === 82) {
		if (keyCode === 82 && state === 0 && mic.enabled) {
			recorder.record(soundFile);
			state++;
			console.log('recording')
			switch (noteNow) {
				case 'do1':
					notesDo1 = [];
					break;
				case 're':
					notesRe = [];
					break;
				case 'mi':
					notesMi = [];
					break;
				case 'fa':
					notesFa = [];
					break;
				case 'sol':
					notesSol = [];
					break;
				case 'la':
					notesLa = [];
					break;
				case 'ti':
					notesTi = [];
					break;
				case 'do2':
					notesDo2 = [];
					break;
			}
		} else if (state === 1) {
			recorder.stop();
			state = 0;
			console.log('recording stopped')
		}
	}

	if (keyCode === 80) {
		soundFile.play();
		console.log('playing')
	}
}

function draw() {
	// console.log(noteElem)
	noteElem.html(mode(notes));
}