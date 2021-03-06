/*
* This program creates the Mr Coxall stack
*
* @author  Malcolm Tompkins
* @version 1.0
* @since   2021-12-04
*/

class MrCoxallStack {
  private aStack : number[] = []

  public push (pushNumber: number) {
    // method for pushing numbers into the stack
    this.aStack.push(pushNumber)
  }

  public showStack () {
    // method for printing the stack
    for (var val of this.aStack.reverse()) {
      console.log(val)
    }
  }
}

const stack = new MrCoxallStack()

console.log('Empty stack:')

console.log('Add 56:')
stack.push(56)
stack.showStack()

console.log('Add 1')
stack.push(1)
stack.showStack()

console.log('\nDone.')
