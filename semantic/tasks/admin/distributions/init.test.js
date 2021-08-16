const init = require("./init")
// @ponicode
describe("init", () => {
    test("0", () => {
        let callFunction = () => {
            init("callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            init(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
