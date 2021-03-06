import Queue from './Queue.js'
import expect from 'expect'

describe('Queue', () => {
  it('enqueue', async () => {
    const queue = new Queue()
    queue.enqueue(1)

    expect(queue.size).toBe(1)
    expect(queue.head.value).toBe(1)
    expect(queue.tail.value).toBe(1)

    queue.enqueue(2)
    expect(queue.size).toBe(2)
    expect(queue.head.value).toBe(2)
    expect(queue.tail.value).toBe(1)
    expect(queue.tail.prev.value).toBe(2)
    expect(queue.head.prev).toNotExist()

    queue.enqueue(3)
    expect(queue.size).toBe(3)
    expect(queue.head.value).toBe(3)
    expect(queue.tail.value).toBe(1)
    expect(queue.tail.prev.value).toBe(2)
    expect(queue.tail.prev.prev.value).toBe(3)
  })

  it('dequeue', async () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.dequeue()).toBe(1)
    expect(queue.size).toBe(2)
    expect(queue.dequeue()).toBe(2)
    expect(queue.size).toBe(1)
    expect(queue.dequeue()).toBe(3)
    expect(queue.size).toBe(0)
    expect(queue.head).toNotExist()
    expect(queue.tail).toNotExist()
  })
})
