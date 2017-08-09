import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list'


describe('CommentList', () => {

    let component;
    const props = { comments:['new comment1', 'test comment']};
    beforeEach(() => {
        
        component = renderComponent(CommentList,{},props);
    })

    it('shows an LI for each comment', () =>{
         expect(component.find('li').length).to.equal(2) 
    })

    it('shows each comment that is provided', () =>{
         expect(component).to.contain(props.comments[0])
         expect(component).to.contain(props.comments[1])
    })

})