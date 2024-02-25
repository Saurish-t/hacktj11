async function askQuestion() {
    const inputText = document.getElementById('textInput').value;
    const responseElement = document.getElementById('response');
  
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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' 
        },
        body: JSON.stringify({ 
          model: 'gpt-3.5-turbo-0125',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: inputText }
          ]
        })
      });
  
      const data = await response.json();
      responseElement.textContent = data.choices[0].message.content;
    } catch (error) {
      console.error('Error:', error);
      responseElement.textContent = 'Error: Something went wrong';
    }
  }

  document.querySelector('#btn').addEventListener("click", (event) => {
    event.preventDefault(); 
    const scrollToElement = document.getElementById('b3'); 
    scrollToElement.scrollIntoView({ behavior: 'smooth' });
  });
  