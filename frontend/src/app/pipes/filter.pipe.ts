import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {

	transform(arreglo: any[],
		texto: string = '',
		column: string = 'title'
	): any[] {

		if (texto === '') {
			return arreglo;
		}

		if (!arreglo) {
			return arreglo;
		}

		texto = texto.toLocaleLowerCase();

		return arreglo.filter(
			item => item[column].toLowerCase().includes(texto)
		);
	}
}
