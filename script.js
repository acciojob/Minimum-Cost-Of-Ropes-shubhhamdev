function calculateMinCost() {
  
  const inputElement = document.getElementById('input');
  const resultDiv = document.getElementById('result');

  const input = inputElement.value;
  const lengths = input.split(',').map(Number);

  const priorityQueue = new MinPriorityQueue();

  for (let length of lengths) {
    priorityQueue.enqueue(length);
  }

  let totalCost = 0;

  while (priorityQueue.size() > 1) {
    
    const smallest1 = priorityQueue.dequeue().element;
    const smallest2 = priorityQueue.dequeue().element;

    const cost = smallest1 + smallest2;

    totalCost += cost;

    priorityQueue.enqueue(cost);
  }

  resultDiv.textContent = totalCost;
}
