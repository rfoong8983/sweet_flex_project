import { RECEIVE_WATSON_DATA } from '../actions/search_actions';

const watsonReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_WATSON_DATA:
      newState.documentTones = action.watsonData.data.document_tone;
      newState.sentenceTones = action.watsonData.data.sentences_tone;
      return newState;
    default:
      return oldState;
  }
}

export default watsonReducer;