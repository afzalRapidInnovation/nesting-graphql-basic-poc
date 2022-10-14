import { Test, TestingModule } from '@nestjs/testing';
import { QuizzesResolver } from './quizzes.resolver';

describe('QuizzesResolver', () => {
  let resolver: QuizzesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizzesResolver],
    }).compile();

    resolver = module.get<QuizzesResolver>(QuizzesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});


@Resolver((of) => Employee)
export class EmployeeResolver{
   @Query((returns) => Employee, {
        name: EmployeeServiceConstant.getEmployeeById
    })
    async getEmployeeById(
        @Args('input') getEmployeeByIdInput: GetEmployeeByIdInput
    ) {
        let data = await this.employeeService
            .getEmployeeById(getEmployeeByIdInput)
            .toPromise();
        return data;
    }

    @ResolveField((returns) => EmployeeDocuments)
    async employeeDocuments(
        @Parent() getEmployeeById:EmployeeDef
    ) {
        const data = await this.employeeService
            .getEmployeeDocumentsById({employeeId})
            .toPromise();
            console.log(data)
        return data;
    }

}
