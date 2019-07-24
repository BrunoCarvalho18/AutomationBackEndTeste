package br.com.steps;


import org.junit.Assert;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import static io.restassured.RestAssured.*;
import io.restassured.response.Response;

public class ValidaChamadaGetSteps {

	private  Response response;
	
	@Quando("^envio a requisição$")
	public void envio_a_requisição() throws Throwable {
		response = given().when().get("https://jsonplaceholder.typicode.com/todos/1");
	}

	@Então("^Valido o retorno$")
	public void valido_o_retorno() throws Throwable {
		String userId = response.then().extract().path("userId").toString();
		String id = response.then().extract().path("id").toString();
		String title = response.then().extract().path("title").toString();
		String completed = response.then().extract().path("completed").toString();
				
		response.then().statusCode(200).log().all();
		Assert.assertEquals("1", userId);
		Assert.assertEquals("1", id);
		Assert.assertEquals("delectus aut autem", title);
		Assert.assertEquals("false", completed);
	}
}
