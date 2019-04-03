import { RECEIVE_WATSON_DATA } from '../actions/search_actions';

const watsonReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_WATSON_DATA:
      newState.documentTones = action.watsonData.watsonData.data.document_tone;
      newState.sentenceTones = action.watsonData.watsonData.data.sentences_tone;
      // newState.documentTones = action.watsonData.data.document_tone;
      // newState.sentenceTones = action.watsonData.data.sentences_tone;
      console.log('Updating watson state took: ' + ((performance.now() - action.watsonData.timer) >= 1000 ? `${((performance.now() - action.watsonData.timer) / 1000).toFixed(2)}` + 's' : `${(performance.now() - action.watsonData.timer).toFixed(2)}` + 'ms'));
      return newState;
    default:
      return oldState;
  }
}

export default watsonReducer;