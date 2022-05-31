import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from 'rxjs/operators';
import { User } from "./user.data";

