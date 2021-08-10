import axios from 'axios';
import cheerio from 'cheerio';

//const url1 = 'https://brainly.com.br/tarefa/31823698'; 
//const url = 'https://brainly.com.br/tarefa/5588523';
// 
interface RespostaData {
    resposta: string;
}
interface Pergunta {
    pergunta: string;
    img?: any;
}
interface Request {
    url: string;
}

class BrainlysService {
    public async scraping({ url }: Request) {
    try {
    const response = await axios.get(url);
    
    const html = response.data; 
    const $ = cheerio.load(html);
        
    const perguntasElem = $('.brn-qpage-next-question-box-content');
    const respostasElem = $('.brn-qpage-next-answer-box-content__section');
    //brn-qpage-next-question-box-content
    //brn-qpage-next-answer-box-content__section
    // *[@id="question-sg-layout-container"]/div[1]/div[1]/article/div/div/div[2]/div/div[2]/div/div/div/img
    // *[@id="question-sg-layout-container"]/div[1]/div[1]/article/div/div/div[2]/div
    
    const perguntas: Pergunta[] = []
    const respostas: RespostaData[] = []
    
    let aux;
    let aux_img;
    perguntasElem.each((i, elem) => {

        console.log($(elem).find('.brn-qpage-next-attachments-viewer-image-preview').html());

        const pergunta = $(elem).find('div').text().trim(); 
        const img = $(elem).find('.brn-qpage-next-attachments-viewer-image-preview').html()?.trim();  
        aux = pergunta
        aux_img = $(elem).find('.brn-qpage-next-attachments-viewer-image-preview').html();

        // perguntas.push({
        // pergunta,
        // img
        // });
    });
        
    respostasElem.each((i, elem) => {
        const resposta: string = $(elem).find('div').text().trim();
        respostas.push({
         resposta
         });
    });
        
        
    const branlys = {
        pergunta: aux,
        img: aux_img,
        respostas
    }
        
    console.log(branlys)
        
    return branlys;      
            
    } catch (error) {
            console.log(error);
    }

}
}
export default BrainlysService
