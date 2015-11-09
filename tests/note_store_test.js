import assert from 'assert';
import 'array.prototype.findindex';
import NoteActions from 'app/actions/NoteActions'; 
import NoteStore from 'app/stores/NoteStore'; 
import alt from 'app/libs/alt';

describe('NoteStore', () => {
  it('creates notes', () => {
    const task = 'test';

    NoteActions.create({task});
    
    const state = NoteStore.getState();

    assert.equal(state.notes.length, 1);
    assert.equal(state.notes[0].task, task);
  });
});